import { describe, expect, it } from 'vitest'
import { fetchGithubReleasesFromTag, formatGithubReleases } from '@changelogd/core'
import consola from 'consola'

describe('fetch github changelog', () => {
  it('can pull explicit range ', async () => {
    const diff = await fetchGithubReleasesFromTag('windicss/nuxt-windicss', 'v2.2.0', {
      to: 'v2.2.5',
      logger: consola,
      debug: false,
    })

    expect(diff).toMatchInlineSnapshot(`
      [
        {
          "body": "",
          "tag": "v2.2.5",
        },
        {
          "body": "### Bug Fixes

      * CJS module issues ([117edb3](https://github.com/windicss/nuxt-windicss/commit/117edb3))
      * **nuxt2:** ensure runtime folder exists & switch to fs-extra, fixes [#157](https://github.com/windicss/nuxt-windicss/issues/157) ([ee0c7f0](https://github.com/windicss/nuxt-windicss/commit/ee0c7f0))",
          "tag": "v2.2.4",
        },
        {
          "body": "### Features

      * migrate to [@nuxt](https://github.com/nuxt)/module-builder ([062cfc0](https://github.com/windicss/nuxt-windicss/commit/062cfc0))
      * upgrade dependencies, windicss 3.4.3 ([75ab495](https://github.com/windicss/nuxt-windicss/commit/75ab495))",
          "tag": "v2.2.3",
        },
        {
          "body": "- chore: upgrade dependencies, windicss 3.4.2 [\`ab52e2f\`](https://github.com/windicss/nuxt-windicss-module/commit/ab52e2fdaaf407636acafd018aac0a74b8bdd8f0)
      - chore: update snapshots [\`ded49fc\`](https://github.com/windicss/nuxt-windicss-module/commit/ded49fc08a4bd644962d75e9954a1c6781c7f3fd)",
          "tag": "2.2.2",
        },
        {
          "body": "- fix: support @nuxt/kit legacy [\`fa9d417\`](https://github.com/windicss/nuxt-windicss/commit/fa9d417cfe0931a0e11aec1605f1a204d9535100)",
          "tag": "2.2.1",
        },
        {
          "body": "- fix: use static object over function as it's not working in Nuxt v2 [\`f5993c0\`](https://github.com/windicss/nuxt-windicss/commit/f5993c04f7ea82e4c18ca0850bc918fe9f49f46e)",
          "tag": "2.2.0",
        },
      ]
    `)
  })

  it('can format a release nicely', () => {
    const changelog = formatGithubReleases([
      {
        body: '### Bug fixes\nDid some stuff',
        tag: 'v2.2.5',
      },
      {
        body: '### Bug fixes\nDid some stuff',
        tag: 'v2.2.4',
      },
    ])
    expect(changelog).toMatchInlineSnapshot(`
      "v2.2.5

      ### Bug fixes
      Did some stuff

      v2.2.4

      ### Bug fixes
      Did some stuff"
    `)
  })
})
