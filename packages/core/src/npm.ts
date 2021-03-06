import { $fetch } from 'ohmyfetch'
import { vendorChangelogs } from './meta'
import { cached } from './util'

export type PkgJsonRepository = string | {
  type?: 'git'
  url?: string
  directory?: string
}

export interface PkgJson {
  version: string
  repository?: PkgJsonRepository
}

export async function fetchPackageJson(pkgName: string, version = 'latest') {
  return await cached<PkgJson>(`npm/${pkgName}/${version}/package.json`, () =>
    $fetch<PkgJson>(`https://registry.npmjs.org/${pkgName}/${version}`),
  )
}

export async function fetchNpmFile<T = string>(pkgName: string, file: string, version = 'latest'): Promise<T | false> {
  return await cached<T>(`npm/${pkgName}/${version}/${file}`, () =>
    $fetch<T>(`https://unpkg.com/${pkgName}@${version}/${file}`),
  )
}

export async function fetchNpmChangelogDiff(pkgName: string, fromVersion: string, toVersion: string): Promise<string[] | false> {
  const changeLogFile = vendorChangelogs[pkgName] ?? 'CHANGELOG.md'
  const [curr, next] = await Promise.all([
    fetchNpmFile(pkgName, changeLogFile, fromVersion),
    fetchNpmFile(pkgName, changeLogFile, toVersion),
  ])

  if (!curr || !next)
    return false

  return [curr, next]
}
