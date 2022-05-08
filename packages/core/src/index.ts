import type consola from 'consola'
import { fetchNpmChangelogDiff, fetchPackageJson } from './npm'
import { fetchGithubFile, fetchGithubReleasesFromTag, formatGithubReleases } from './github'
import { diffConcatAdded, dummyLogger } from './util'
import { standardVersionParser } from './standard-version'

export interface Changelogd {
  log: string
  from: string
  to: string
  provider: string
  meta: any[]
}

export interface Config {
  to: string
  logger: typeof consola
}

export async function changelogd(pkgName: string, fromV: string, config: Partial<Config> = {}): Promise<Changelogd> {
  if (!config.to)
    config.to = 'latest'

  if (!config.logger)
    config.logger = dummyLogger() as unknown as typeof consola

  const { logger } = config

  logger.info(`Fetching \`${pkgName}\` changelogs for \`${fromV}\`-\`${config.to}\`...\n`)

  const [pkg, next] = await Promise.all([
    fetchPackageJson(pkgName, fromV),
    fetchPackageJson(pkgName, config.to),
  ])
  if (!pkg)
    throw new Error(`Package with name \`${pkgName}\` could be found in version \`${fromV}\`.`)
  if (!next)
    throw new Error(`Package with name \`${pkgName}\` could be found in version \`${config.to}\`.`)

  const from = pkg.version
  const to = next.version

  if (from === to) {
    logger.info('Already fetching the latest package version.')
    return {
      provider: 'none',
      from,
      to,
      log: '',
      meta: [],
    }
  }

  if (to !== config.to)
    logger.debug(`Resolved to range version to ${to}`)

  const discoverChangelog = async () => {
    const ctx: Partial<Changelogd> = {
      from,
      to,
    }
    logger.debug('Fetching npm changes')
    // prefer npm package as github as api limits
    const res = await fetchNpmChangelogDiff(pkgName, from, config as Config)
    if (res !== false) {
      ctx.provider = 'npm'
      const [currChangelog, nextChangelog] = res

      ctx.log = diffConcatAdded(currChangelog, nextChangelog)
      ctx.meta = standardVersionParser(ctx.log)
      return ctx
    }
    logger.debug('Failed to fetch npm changes')

    const resolveGithubPath = () => {
      // if repo is provided
      if (pkg.repository) {
        if (typeof pkg.repository !== 'string' && pkg.repository.url)
          return /.com\/(.*?)\.git/gm.exec(pkg.repository.url)?.[1] || pkg.repository.url
      }
      // as a backup we can try and infer the path if the author is in the scope
      // for example @harlanzw/my-package -> harlanzw/my-package
      if (/@.+\/.+/gm.test(pkgName)) {
        // remove @
        return pkgName.substring(1)
      }
      return false
    }

    const githubUrl = resolveGithubPath()
    // github url well could be invalid
    if (githubUrl) {
      // hope they have tags prefixed with v
      const fromTag = `v${from}`
      const toTag = `v${to}`
      // first attempt to directly fetch the file
      const rawFromChangelog = await fetchGithubFile(githubUrl, fromTag, 'CHANGELOG.md')
      if (rawFromChangelog) {
        // likely a monorepo and not publishing the changelog
        const rawToChangelog = await fetchGithubFile(githubUrl, toTag, 'CHANGELOG.md')
        if (rawToChangelog) {
          // easy diff
          ctx.provider = 'github-changelog'
          ctx.log = diffConcatAdded(rawFromChangelog, rawToChangelog)
          ctx.meta = standardVersionParser(ctx.log)
          return ctx
        }
      }

      // just fetch straight from gh
      const githubReleases = await fetchGithubReleasesFromTag(githubUrl, from, config as Config)
      ctx.provider = 'github-releases'
      ctx.meta = githubReleases
      ctx.log = formatGithubReleases(githubReleases)
    }
    return ctx
  }

  const ctx = await discoverChangelog()
  // slightly less roomy white space
  if (ctx.log)
    ctx.log = ctx.log.replace(/\n\s*\n\s*\n/g, '\n\n')

  // failed...
  // maybe look at using https://github.com/unjs/changelogen, will require some magic though
  logger.info(`\`${pkgName}\` changelogs discovered from \`${ctx.provider}\``)
  return ctx as Changelogd
}

export * from './github'
export * from './npm'
export * from './standard-version'
export * from './meta'
