import { $fetch } from 'ohmyfetch'
import { interopDefault } from 'mlly'
import type { PackageJson } from 'pkg-types'
import type { FetchOptions } from '../'
import { cacheFn } from './util'

export interface GithubFetchOptions extends FetchOptions {
  githubApiKey?: string
}

export interface RawGithubRelease {
  tag_name: string
  body: string
}

export interface ResolvedGithubRelease {
  raw: RawGithubRelease
  formatted: string
}

export const resolveGithubUrlFromPackageJson = (pkg: PackageJson) => {
  // if repo is provided
  if (pkg.repository) {
    if (typeof pkg.repository !== 'string' && pkg.repository.url) {
      // e.g. git+https://github.com/unjs/unstorage.git
      const repository = /.com\/(.*?)\.git/gm.exec(pkg.repository.url)?.[1] || pkg.repository.url
      return repository
        // e.g. https://github.com/algolia/vue-instantsearch
        .replace('https://github.com/', '')
    }
    return (pkg.repository as string)
      // e.g. https://github.com/algolia/vue-instantsearch
      .replace('https://github.com/', '')
  }
  // as a backup we can try and infer the path if the author is in the scope
  // for example @harlanzw/my-package -> harlanzw/my-package
  if (pkg.name && /@.+\/.+/gm.test(pkg.name)) {
    // remove @
    return pkg.name.substring(1)
  }

  return false
}

export type GithubReleasesResult = Promise<false | {
  raw: ResolvedGithubRelease[]
  log: string
}>

function githubApiFetch<T>(url: string, options: GithubFetchOptions = {}): Promise<false | T> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  }
  if (options?.githubApiKey)
    headers.Authorization = `Bearer ${options?.githubApiKey}`

  return cacheFn(() => $fetch(
    url,
    {
      baseURL: 'https://api.github.com',
      headers,
    },
  ), {
    key: `github/${url}`,
    ...options,
  })
}

export function fetchGithubFile<T = string>(repo: string, tag: string, file: string, options: GithubFetchOptions = {}) {
  const url = `${repo}/${tag}/${file}`
  return cacheFn<T>(() => $fetch(
    url,
    {
      baseURL: 'https://raw.githubusercontent.com/',
    },
  ), {
    key: `github-cdn/${url}`,
    ...options,
  })
}

export async function fetchGithubReleases(repo: string, options: GithubFetchOptions = {}) {
  return githubApiFetch<RawGithubRelease[]>(`repos/${repo}/releases`, options)
}

export async function filterGithubReleasesForSemver(releases: RawGithubRelease[], fromTag: string, toTag: string):
  Promise<RawGithubRelease[]> {
  const { coerce, lt } = interopDefault(await import('semver'))

  if (!releases)
    return []

  const relevant = []

  for (const r of releases) {
    const tagName = coerce(r.tag_name)?.version || r.tag_name
    // iterate until we hit the tag
    if (tagName === fromTag || lt(tagName, fromTag))
      break

    if (lt(toTag, tagName))
      continue
    relevant.push(r)
  }

  return relevant
}
