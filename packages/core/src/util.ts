import { diffLines } from 'diff'
import { createCache } from './cache'

export function diffConcatAdded(a: string, b: string): string {
  return diffLines(a, b)
    .filter(n => n.added)
    .map(n => n.value.trim())
    .join('')
}

export function dummyLogger() {
  return {
    info() {},
    debug() {},
    log() {},
    warn() {},
  }
}

export async function cached<T = string>(key: string, fn: () => Promise<T | false>): Promise<T | false> {
  const { getItem, setItem, hasItem } = createCache()

  if (await hasItem(key))
    return await getItem(key) as unknown as T

  try {
    const val = await fn()
    if (val === false)
      return val

    await setItem(key, val as any)
    return val as T
  }
  catch (e) {
    // 404 most likely
    return false
  }
}
