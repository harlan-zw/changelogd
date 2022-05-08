import { resolve } from 'path'
import type { AliasOptions } from 'vite'
import { defineConfig } from 'vite'

const r = (p: string) => resolve(__dirname, p)

export const alias: AliasOptions = {
  'changelogd': r('./packages/changelogd/'),
  '@changelogd/core': r('./packages/core/src'),
  '@changelogd/cli': r('./packages/cli/src'),
}

export default defineConfig({
  resolve: {
    alias,
  },
  test: {
    deps: {
      inline: ['vitest-mock-process'],
    },
  },
})
