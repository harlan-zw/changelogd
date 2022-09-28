import { $fetch } from 'ohmyfetch'
import type { FetchOptions } from './util'
import { cacheFn } from './util'

export async function fetchUnpkgFile<T = string>(name: string, version: string, file: string, options: FetchOptions = {}): Promise<T> {
  const url = `${name}@${version}/${file}`
  const res = cacheFn<T>(() =>
    $fetch<T>(url, {
      baseURL: 'https://unpkg.com',
    }),
  {
    key: `unpkg/${url}`,
    ...options,
  })

  if (!res)
    throw new Error(`Failed to find file: \`https://unpkg.com/${url}\``)

  return res as T
}
