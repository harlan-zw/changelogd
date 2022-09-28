import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

export function createCache(dir?: string) {
  return createStorage({
    driver: fsDriver(
      {
        base: dir,
      },
    ),
  })
}
