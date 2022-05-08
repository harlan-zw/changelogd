import { $fetch } from 'ohmyfetch'
import { coerce, lt } from 'semver'
import { cached } from './util'
import type { Config } from './index'

export async function fetchGithubReleases(repo: string) {
  return await cached<GithubRelease[]>(`github/${repo}/releases.json`, () => $fetch(
    `https://api.github.com/repos/${repo}/releases`,
    { headers: { Accept: 'application/vnd.github.v3+json' } },
  ))
}

export interface GithubRelease {
  tag_name: string
  body: string
}

export function fetchGithubFile(repo: string, tag: string, file: string) {
  return cached<string>(`github/${repo}/${tag}/${file}`, () => $fetch(
    `https://raw.githubusercontent.com/${repo}/${tag}/${file}`,
    { headers: { Accept: 'application/vnd.github.v3+json' } },
  ))
}

export function formatGithubReleases(release: any[]) {
  return release
    .map(({ tag, body }) => `${tag}\n\n${body}`)
    .join('\n\n')
}

export async function fetchGithubReleasesFromTag(repo: string, fromTag: string, config: Config) {
// iterate through releases until we have one that matches the current tag
  const releases = await fetchGithubReleases(repo)

  if (!releases)
    return []

  const relevant = []

  for (const r of releases) {
    const tagName = coerce(r.tag_name)?.version || r.tag_name
    // iterate until we hit the tag
    if (tagName === fromTag || lt(tagName, fromTag))
      break

    if (lt(config.to, tagName))
      continue
    relevant.push(r)
  }

  return relevant.map(r => ({
    tag: r.tag_name,
    body: r.body.trim(),
  }))
}
