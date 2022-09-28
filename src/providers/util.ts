import type { Storage } from 'unstorage'
import { hash } from 'ohash'
import { interopDefault } from 'mlly'

export interface CachedFnOptions {
  key?: string
  force?: boolean
  ttl?: number
  storage?: Storage
}

export interface FetchOptions extends Omit<CachedFnOptions, 'key'> {}

export async function cacheFn<T = string>(fn: () => Promise<T | false>, options: CachedFnOptions): Promise<T | false> {
  const storage = options.storage || false
  const key = options.key || hash(fn.toString())
  const ttl = options.ttl || 60 * 60 // 1 hour
  if (!storage || options?.force)
    return fn()
  const { getItem, setItem, hasItem, getMeta } = storage

  if (await hasItem(key)) {
    const { atime } = await getMeta(key)
    // use TTL for requests
    if (!atime || atime.getMilliseconds() + (ttl * 1000) < Date.now())
      return await getItem(key) as unknown as T
  }

  const val = await fn()
  if (val === false)
    return val

  await setItem(key, val as any)
  return val as T
}

const coerceVersion = async (v: string) => {
  const { coerce } = interopDefault(await import('semver'))
  const [, versionSuffix] = v.split('-')
  return `${coerce(v)?.version || v}${versionSuffix || ''}`
}

export async function versionToGitTag(version: string) {
  // already a tag
  if (version.startsWith('v'))
    return version
  return `v${await coerceVersion(version)}`
}
