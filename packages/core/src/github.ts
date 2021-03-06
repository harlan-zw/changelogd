import { $fetch } from 'ohmyfetch'
import { interopDefault } from 'mlly'
import { cached } from './util'

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
    .map(({ tag, body }) => `${tag}\n\n${body}\n\n---------------\n`)
    .join('\n\n')
}

export async function fetchGithubReleasesFromTag(repo: string, fromTag: string, toTag: string) {
  const { coerce, lt } = interopDefault(await import('semver'))

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

    if (lt(toTag, tagName))
      continue
    relevant.push(r)
  }

  return relevant.map(r => ({
    tag: r.tag_name,
    body: r.body.trim(),
  }))
}
