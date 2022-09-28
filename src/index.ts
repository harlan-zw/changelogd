import { resolve } from 'path'
import os from 'os'
import { promises as fsp } from 'fs'
import type { PackageJson } from 'pkg-types'
import { readPackageJSON } from 'pkg-types'
import type { ResolveOptions } from 'mlly'
import { resolvePath } from 'mlly'
import { isAbsolute } from 'pathe'
import type {
  CachedFnOptions,
  FetchOptions,
  GithubFetchOptions, RawGithubRelease,
} from './providers'
import {
  fetchGithubFile, fetchGithubReleases,
  fetchUnpkgFile, filterGithubReleasesForSemver,
  resolveGithubUrlFromPackageJson, versionToGitTag,
} from './providers'
import { createCache } from './cache'
import { vendorChangelogs } from './constants'
import { addedLinesDiff, standardVersionParser } from './changelog'

export type Provider = 'github' | 'fs' | 'npm'

export type FetchFn<R> = (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => Promise<R>

export interface GithubReleasesResult {
  url: string
  raw: RawGithubRelease[]
  resolved: string
}

export interface Changelog {
  provider: Provider
  changelog: string
}

export interface FetchChangelogDiffResult {
  raw: Changelog
  resolved: string
  standardVersion: ReturnType<typeof standardVersionParser>
}

export type FetchChangelogResult =
  { provider: 'github-releases'; changelog: GithubReleasesResult } |
  { provider: 'changelog-diff'; changelog: FetchChangelogDiffResult }

export interface ChangelogdCtx {
  config: Config

  resolveLocalChangelog: (id: string, opts?: ResolveOptions) => Promise<string>
  resolvePackageJSON: (id: string) => Promise<PackageJson>

  resolveChangelogFile: (name: string, version: string, options?: GithubFetchOptions) => Promise<Changelog>
  fetchChangelogFileDiff: FetchFn<FetchChangelogDiffResult>
  fetchGithubReleases: FetchFn<GithubReleasesResult>
  fetchChangelog: FetchFn<FetchChangelogResult>
}

export interface Config extends CachedFnOptions {
  cacheDir: false | string
}

export function createChangelogd(config: Partial<Config> = {}): ChangelogdCtx {
  // resolve cache storage
  config.storage = config.storage || createCache(config.cacheDir || resolve(os.tmpdir(), 'changelogd'))

  const ctx: ChangelogdCtx = {
    config: config as Config,
    resolveLocalChangelog: async (id: string, opts?: ResolveOptions) => {
      const resolvedPath = isAbsolute(id) ? id : await resolvePath(id, opts)
      const changeLogFile = vendorChangelogs[id] ?? 'CHANGELOG.md'
      return fsp.readFile(`${resolvedPath}/${changeLogFile}`, 'utf-8')
    },
    resolvePackageJSON: async (id: string, options?: FetchOptions) => {
      options = { ...config, ...options }
      try {
        const path = await resolvePath(id)
        if (path) {
          const localPkgJson = readPackageJSON(path)
          if (localPkgJson)
            return localPkgJson
        }
      }
      catch (e) {}

      // fallback to unpkg
      return fetchUnpkgFile<PackageJson>(id, 'latest', 'package.json', options)
    },
    resolveChangelogFile: async (name: string, version: string, options?: GithubFetchOptions) => {
      options = { ...config, ...options }
      const pkgJson = await ctx.resolvePackageJSON(name)

      // 1. Maybe resolve from local node_modules
      if (version === pkgJson.version) {
        try {
          const localChangelog = await ctx.resolveLocalChangelog(name)
          if (localChangelog) {
            return {
              provider: 'fs' as Provider,
              changelog: localChangelog,
            }
          }
        }
        // this is fine
        catch (e) {}
      }
      const changeLogFile = vendorChangelogs[name] ?? 'CHANGELOG.md'

      // 2. Maybe resolve from NPM / Unpkg
      try {
        const unpkgChangelog = await fetchUnpkgFile(name, version, changeLogFile, options)
        if (unpkgChangelog) {
          return {
            provider: 'npm' as Provider,
            changelog: unpkgChangelog,
          }
        }
      }
      // this is fine
      catch (e) {}

      // 3. Finally resolve from github, will use github API credit
      const githubUrl = resolveGithubUrlFromPackageJson(pkgJson)
      if (githubUrl) {
        const githubChangelog = await fetchGithubFile(githubUrl, await versionToGitTag(version), 'CHANGELOG.md', options)
        if (githubChangelog) {
          return {
            provider: 'github' as Provider,
            changelog: githubChangelog,
          }
        }
      }

      throw new Error(`Failed to resolve CHANGELOG.md file for package \`${name}\`.`)
    },
    fetchChangelogFileDiff: async (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => {
      // first attempt to directly fetch the file
      const [currentChangelog, targetChangelog] = await Promise.all([
        // use local changelog if the versions match, avoid github lookups
        ctx.resolveChangelogFile(name, currentVersion, options),
        ctx.resolveChangelogFile(name, targetVersion, options),
      ])

      const diff = addedLinesDiff(currentChangelog.changelog, targetChangelog.changelog)

      return {
        raw: targetChangelog,
        resolved: diff,
        standardVersion: standardVersionParser(diff),
      }
    },
    fetchGithubReleases: async (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => {
      options = { ...config, ...options }
      const pkgJson = await ctx.resolvePackageJSON(name)

      const githubUrl = resolveGithubUrlFromPackageJson(pkgJson)
      if (!githubUrl)
        throw new Error(`Failed to find GitHub repository for package \`${name}\`.`)

      // iterate through releases until we have one that matches the current tag
      const releases = await fetchGithubReleases(githubUrl, options)

      if (!releases)
        throw new Error(`The GitHub repo for \`${name}\` does not have any releases .`)

      const filtered = await filterGithubReleasesForSemver(releases, currentVersion, targetVersion)

      return {
        url: githubUrl,
        raw: filtered,
        resolved: filtered.map(r => `${r.tag_name}\n\n${r.body.trim()}\n\n---------------\n`).join('\n'),
      }
    },
    fetchChangelog: async (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => {
      try {
        const ghReleases = await ctx.fetchGithubReleases(name, currentVersion, targetVersion, options)
        if (ghReleases && ghReleases.raw.length > 0) {
          return {
            provider: 'github-releases',
            changelog: ghReleases,
          }
        }
      }
      catch (e) {}

      const changelogMdDiff = await ctx.fetchChangelogFileDiff(name, currentVersion, targetVersion, options)
      return {
        provider: 'changelog-diff',
        changelog: changelogMdDiff,
      }
    },
  }

  return ctx
}

export * from './providers'
export * from './changelog'
