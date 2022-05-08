import { createStorage } from 'unstorage'
import fsDriver from 'unstorage/drivers/fs'

export function createCache() {
  return createStorage({
    driver: fsDriver(
      {
        base: './node_modules/.changelogd',
      },
    ),
  })
}
