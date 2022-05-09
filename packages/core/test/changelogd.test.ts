import { describe, expect, it } from 'vitest'
import { changelogd } from '@changelogd/core'

describe('fetch changelog', () => {
  it('consola - up to date', async () => {
    const diff = await changelogd('consola', '2.15.0', { to: '2.15.0' })

    expect(diff.log).toBe('')
  })
  it('consola', async () => {
    const diff = await changelogd('consola', '2.13.0', { to: '2.15.0' })

    expect(diff.log).toMatchInlineSnapshot(`
      "## [2.15.0](https://github.com/nuxt/consola/compare/v2.14.0...v2.15.0) (2020-08-05)

      ### Features

      * **types:** use union type for \`ConsolaLogObject.type\`  ([#100](https://github.com/nuxt/consola/issues/100)) ([a6eba53](https://github.com/nuxt/consola/commit/a6eba532381bcec9c84ac5600ac668aca87c8487))
      * support \`formatOptions.date\` to optionally hide date ([#101](https://github.com/nuxt/consola/issues/101)) ([6bf733f](https://github.com/nuxt/consola/commit/6bf733f2b9a5320584bdd0de7de08f4341c74335))

      ## [2.14.0](https://github.com/nuxt/consola/compare/v2.13.0...v2.14.0) (2020-06-26)

      ### Features

      * improve spam throttle ([5314eee](https://github.com/nuxt/consola/commit/5314eeebb4b564408a4ab14cb457bdbd426f6124))"
    `)
  })

  it('diff', async () => {
    const diff = await changelogd('diff', '4.0.0', { to: '5.0.0' })

    expect(diff.log).toMatchInlineSnapshot(`
      "[Commits](https://github.com/kpdecker/jsdiff/compare/v5.0.0...master)## v5.0.0

      - Breaking: UMD export renamed from \`JsDiff\` to \`Diff\`.
      - Breaking: Newlines separated into separate tokens for word diff.
      - Breaking: Unified diffs now match [\\"quirks\\"](https://www.artima.com/weblogs/viewpost.jsp?thread=164293)

      [Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.1...v5.0.0)

      ## v4.0.1 - January 6th, 2019

      - Fix main reference path - b826104

      [Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.0...v4.0.1)- [#102](https://github.com/kpdecker/jsdiff/issues/102) - diffJson with dates, returns empty curly braces ([@dr-dimitru](https://api.github.com/users/dr-dimitru))- [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))[Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.0...v2.2.0)- [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))[Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.3...v2.2.0)"
    `)
  })

  it('semver', async () => {
    const diff = await changelogd('semver', '7.0.0', { to: '7.1.0' })

    expect(diff.log).toMatchInlineSnapshot(`
      "## 7.0.0

      * Refactor module into separate files for better tree-shaking
      * Drop support for very old node versions, use const/let, \`=>\` functions,
        and classes."
    `)
  })

  it('execa', async () => {
    const diff = await changelogd('execa', '6.0.0', { to: '6.1.0', debug: true })

    expect(diff.log).toMatchInlineSnapshot(`
      "v6.1.0
      
      - Support [\`AbortController\`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) (#490)  c6e791a
      - Allow \`cwd\` and \`localDir\` options to be URLs (#492)  93ab929
      
      https://github.com/sindresorhus/execa/compare/v6.0.0...v6.1.0
      
      ---------------
      "
    `)
  })
})
