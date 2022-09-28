import { describe, expect, it } from 'vitest'
import { createChangelogd } from '../src'

describe('fetch changelog', () => {
  const changelogd = createChangelogd()

  it('nuxt', async () => {
    const diff = await changelogd.fetchChangelog('nuxt', '2.14.6', '2.14.12')
    expect(diff).toMatchInlineSnapshot(`
      {
        "changelog": {
          "raw": [
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/nuxt/nuxt.js/releases/35350188/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### 🐛 Hot Fixes

      - #8494 Fix issues with URL handling (resolves #8497, #8493, #8458, #8457)

      ## How to upgrade?

      Use \`yarn upgrade nuxt\` or \`npm up nuxt\`",
              "created_at": "2020-12-16T13:15:19Z",
              "draft": false,
              "html_url": "https://github.com/nuxt/nuxt.js/releases/tag/v2.14.12",
              "id": 35350188,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTM1MzUwMTg4",
              "prerelease": false,
              "published_at": "2020-12-16T13:16:08Z",
              "tag_name": "v2.14.12",
              "tarball_url": "https://api.github.com/repos/nuxt/nuxt.js/tarball/v2.14.12",
              "target_commitish": "dev",
              "upload_url": "https://uploads.github.com/repos/nuxt/nuxt.js/releases/35350188/assets{?name,label}",
              "url": "https://api.github.com/repos/nuxt/nuxt.js/releases/35350188",
              "zipball_url": "https://api.github.com/repos/nuxt/nuxt.js/zipball/v2.14.12",
            },
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/nuxt/nuxt.js/releases/35071275/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### 🐛 Hot Fixes

      - #8462 Add url-polyfill to fix IE11 issue (URL is not a constructor) (resolves #8458)
      - #8462 Update [ufo](https://github.com/nuxt-contrib/ufo) to preserve relative links (resolves #8457, #8459)",
              "created_at": "2020-12-09T23:21:57Z",
              "draft": false,
              "html_url": "https://github.com/nuxt/nuxt.js/releases/tag/v2.14.11",
              "id": 35071275,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTM1MDcxMjc1",
              "prerelease": false,
              "published_at": "2020-12-09T23:23:28Z",
              "tag_name": "v2.14.11",
              "tarball_url": "https://api.github.com/repos/nuxt/nuxt.js/tarball/v2.14.11",
              "target_commitish": "dev",
              "upload_url": "https://uploads.github.com/repos/nuxt/nuxt.js/releases/35071275/assets{?name,label}",
              "url": "https://api.github.com/repos/nuxt/nuxt.js/releases/35071275",
              "zipball_url": "https://api.github.com/repos/nuxt/nuxt.js/zipball/v2.14.11",
            },
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/nuxt/nuxt.js/releases/34920635/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### 🐛 Hot Fixes

      - Normalize routes and decode resolved query (#8430) (resolves #8429, #8442)
      - \`@nuxt/components\` v1.2.2 ([notes](https://github.com/nuxt/components/releases/tag/v1.2.1))",
              "created_at": "2020-12-07T10:30:01Z",
              "draft": false,
              "html_url": "https://github.com/nuxt/nuxt.js/releases/tag/v2.14.10",
              "id": 34920635,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTM0OTIwNjM1",
              "prerelease": false,
              "published_at": "2020-12-07T10:30:51Z",
              "tag_name": "v2.14.10",
              "tarball_url": "https://api.github.com/repos/nuxt/nuxt.js/tarball/v2.14.10",
              "target_commitish": "dev",
              "upload_url": "https://uploads.github.com/repos/nuxt/nuxt.js/releases/34920635/assets{?name,label}",
              "url": "https://api.github.com/repos/nuxt/nuxt.js/releases/34920635",
              "zipball_url": "https://api.github.com/repos/nuxt/nuxt.js/zipball/v2.14.10",
            },
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/nuxt/nuxt.js/releases/34683338/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "###  🐛 Hot Fixes

      - #8421 Only encode non dynamic path params",
              "created_at": "2020-12-02T10:35:33Z",
              "draft": false,
              "html_url": "https://github.com/nuxt/nuxt.js/releases/tag/v2.14.9",
              "id": 34683338,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTM0NjgzMzM4",
              "prerelease": false,
              "published_at": "2020-12-02T10:36:12Z",
              "tag_name": "v2.14.9",
              "tarball_url": "https://api.github.com/repos/nuxt/nuxt.js/tarball/v2.14.9",
              "target_commitish": "dev",
              "upload_url": "https://uploads.github.com/repos/nuxt/nuxt.js/releases/34683338/assets{?name,label}",
              "url": "https://api.github.com/repos/nuxt/nuxt.js/releases/34683338",
              "zipball_url": "https://api.github.com/repos/nuxt/nuxt.js/zipball/v2.14.9",
            },
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/nuxt/nuxt.js/releases/34628312/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### 🐛 Bug Fixes

      - \`webpack\`
        - #8205 Allow transpiling packages in nested \`node_modules\`
      - \`general\`
        - **#8325** Handle route encodings and update \`vue-router\`
      - \`vue-router\`
        - #8394 Force chidren to be required if default child is present (resolves #7823)
      - \`cli\`
        - #8398 Respect \`router.trailingSlash\` when serving static files (resolves #8350)
        - #8337 Handle \`generate.cache.ignore\` as a function in \`ensureBuild\`
      - \`generator\`
        - #8237 Nested route missing trailingSlash (resolves #8165)
        - #8344 Respect publicPath for static assets (resolves #7923, #7815)
      - \`csp\`
        - #8352 Apply right csp header when status code is 304 (resolves #8353)
      - \`vue-app\`
        - **#8314** Handle missing payloads on full static (resolves #7717)
        - #8348 Warn if promises and functions are in fetch state (resolves #8338)
        - #8225 TriggerScroll when transitions is disabled
        - #8289 Use nuxt globalName correctly in \`nuxt-link\` and fetch mixin (resolves #8118)
        - #8280 Prevent redirection loop with URI-encoded path (resolves #8116)
      - \`types\`
        - #8362 Correct vue.config types
        - #8349 Add missing \`isFetching\` and nbFetching to \`NuxtApp\` interface
        - #8319 \`NuxtOptionsHead\`  can be a function
        - #8302 Add missing \`ssrContext\` and \`next\` typings to \`Context\` (resolves #8296)
      - \`server\`
        - #8313 Redirect if \`router.base\` specified in development

      ### 💅 Refactors

      - \`general\`
        - #8210 Use nuxt everywhere
      - \`cli\`
        - #8219 Grammatical errors (resolves #8217)

      ### 👓 Tests

      - \`general\`
        - #8282 Fix redirect tests

      ### 💖 Thanks to

      - Ahad Birang (@farnabaz)
      - Audrius Jakumavicius (@aj-dev)
      - Cain Hall (@cain)
      - Daniel Roe (@danielroe)
      - Mathieu TUDISCO (@mathieutu)
      - Orkhan Alikhanov (@OrkhanAlikhanov)
      - Steve Perkins (@steveperkins)
      - @Zuckjet
      - @padinko",
              "created_at": "2020-12-01T11:06:52Z",
              "draft": false,
              "html_url": "https://github.com/nuxt/nuxt.js/releases/tag/v2.14.8",
              "id": 34628312,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTM0NjI4MzEy",
              "prerelease": false,
              "published_at": "2020-12-01T11:09:46Z",
              "tag_name": "v2.14.8",
              "tarball_url": "https://api.github.com/repos/nuxt/nuxt.js/tarball/v2.14.8",
              "target_commitish": "dev",
              "upload_url": "https://uploads.github.com/repos/nuxt/nuxt.js/releases/34628312/assets{?name,label}",
              "url": "https://api.github.com/repos/nuxt/nuxt.js/releases/34628312",
              "zipball_url": "https://api.github.com/repos/nuxt/nuxt.js/zipball/v2.14.8",
            },
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/nuxt/nuxt.js/releases/32631853/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### 🐛 Bug Fixes

      - \`babel-preset-app\`
        - #8203 Always transpile optional chaining and nullish-coalescing for server
      - \`cli\`
        - #8200 Rebuild if \`process.env\` changes in \`nuxt.config\`
        - #8194 Avoid error about \`nuxt-edge\` if installed in parent \`node_modules\`
        - #8134 Mode deprecation with explicit spa or universal flag
      - \`vue-app\`
        - #8170 Use getter to provide \`this.$nuxt\`
        - #8055 ScrollRestoration hasn't set
      - \`types\`
        - #8182 Add type for \`serverMiddleware\` object format
        - #8169 Make \`NuxtConfig\` an interface
      - \`generator\`
        - #8166 Handle when no \`routes.json\` defined
      - \`general\`
        - #8206 Add better logs for DX with target option

      ### 💖 Thanks to

      - Daniel Roe (@danielroe)
      - Dmitriy (@Kolobok12309)",
              "created_at": "2020-10-15T16:29:55Z",
              "draft": false,
              "html_url": "https://github.com/nuxt/nuxt.js/releases/tag/v2.14.7",
              "id": 32631853,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTMyNjMxODUz",
              "prerelease": false,
              "published_at": "2020-10-15T16:32:31Z",
              "tag_name": "v2.14.7",
              "tarball_url": "https://api.github.com/repos/nuxt/nuxt.js/tarball/v2.14.7",
              "target_commitish": "dev",
              "upload_url": "https://uploads.github.com/repos/nuxt/nuxt.js/releases/32631853/assets{?name,label}",
              "url": "https://api.github.com/repos/nuxt/nuxt.js/releases/32631853",
              "zipball_url": "https://api.github.com/repos/nuxt/nuxt.js/zipball/v2.14.7",
            },
          ],
          "resolved": "v2.14.12

      ### 🐛 Hot Fixes

      - #8494 Fix issues with URL handling (resolves #8497, #8493, #8458, #8457)

      ## How to upgrade?

      Use \`yarn upgrade nuxt\` or \`npm up nuxt\`

      ---------------

      v2.14.11

      ### 🐛 Hot Fixes

      - #8462 Add url-polyfill to fix IE11 issue (URL is not a constructor) (resolves #8458)
      - #8462 Update [ufo](https://github.com/nuxt-contrib/ufo) to preserve relative links (resolves #8457, #8459)

      ---------------

      v2.14.10

      ### 🐛 Hot Fixes

      - Normalize routes and decode resolved query (#8430) (resolves #8429, #8442)
      - \`@nuxt/components\` v1.2.2 ([notes](https://github.com/nuxt/components/releases/tag/v1.2.1))

      ---------------

      v2.14.9

      ###  🐛 Hot Fixes

      - #8421 Only encode non dynamic path params

      ---------------

      v2.14.8

      ### 🐛 Bug Fixes

      - \`webpack\`
        - #8205 Allow transpiling packages in nested \`node_modules\`
      - \`general\`
        - **#8325** Handle route encodings and update \`vue-router\`
      - \`vue-router\`
        - #8394 Force chidren to be required if default child is present (resolves #7823)
      - \`cli\`
        - #8398 Respect \`router.trailingSlash\` when serving static files (resolves #8350)
        - #8337 Handle \`generate.cache.ignore\` as a function in \`ensureBuild\`
      - \`generator\`
        - #8237 Nested route missing trailingSlash (resolves #8165)
        - #8344 Respect publicPath for static assets (resolves #7923, #7815)
      - \`csp\`
        - #8352 Apply right csp header when status code is 304 (resolves #8353)
      - \`vue-app\`
        - **#8314** Handle missing payloads on full static (resolves #7717)
        - #8348 Warn if promises and functions are in fetch state (resolves #8338)
        - #8225 TriggerScroll when transitions is disabled
        - #8289 Use nuxt globalName correctly in \`nuxt-link\` and fetch mixin (resolves #8118)
        - #8280 Prevent redirection loop with URI-encoded path (resolves #8116)
      - \`types\`
        - #8362 Correct vue.config types
        - #8349 Add missing \`isFetching\` and nbFetching to \`NuxtApp\` interface
        - #8319 \`NuxtOptionsHead\`  can be a function
        - #8302 Add missing \`ssrContext\` and \`next\` typings to \`Context\` (resolves #8296)
      - \`server\`
        - #8313 Redirect if \`router.base\` specified in development

      ### 💅 Refactors

      - \`general\`
        - #8210 Use nuxt everywhere
      - \`cli\`
        - #8219 Grammatical errors (resolves #8217)

      ### 👓 Tests

      - \`general\`
        - #8282 Fix redirect tests

      ### 💖 Thanks to

      - Ahad Birang (@farnabaz)
      - Audrius Jakumavicius (@aj-dev)
      - Cain Hall (@cain)
      - Daniel Roe (@danielroe)
      - Mathieu TUDISCO (@mathieutu)
      - Orkhan Alikhanov (@OrkhanAlikhanov)
      - Steve Perkins (@steveperkins)
      - @Zuckjet
      - @padinko

      ---------------

      v2.14.7

      ### 🐛 Bug Fixes

      - \`babel-preset-app\`
        - #8203 Always transpile optional chaining and nullish-coalescing for server
      - \`cli\`
        - #8200 Rebuild if \`process.env\` changes in \`nuxt.config\`
        - #8194 Avoid error about \`nuxt-edge\` if installed in parent \`node_modules\`
        - #8134 Mode deprecation with explicit spa or universal flag
      - \`vue-app\`
        - #8170 Use getter to provide \`this.$nuxt\`
        - #8055 ScrollRestoration hasn't set
      - \`types\`
        - #8182 Add type for \`serverMiddleware\` object format
        - #8169 Make \`NuxtConfig\` an interface
      - \`generator\`
        - #8166 Handle when no \`routes.json\` defined
      - \`general\`
        - #8206 Add better logs for DX with target option

      ### 💖 Thanks to

      - Daniel Roe (@danielroe)
      - Dmitriy (@Kolobok12309)

      ---------------
      ",
          "url": "nuxt/nuxt.js",
        },
        "provider": "github-releases",
      }
    `)
  })

  it('consola - up to date', async () => {
    const diff = await changelogd.fetchChangelog('consola', '2.15.0', '2.15.0')

    expect(diff).toMatchInlineSnapshot(`
      {
        "changelog": {
          "raw": {
            "changelog": "# Changelog

      All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

      ## [2.15.0](https://github.com/nuxt/consola/compare/v2.14.0...v2.15.0) (2020-08-05)


      ### Features

      * **types:** use union type for \`ConsolaLogObject.type\`  ([#100](https://github.com/nuxt/consola/issues/100)) ([a6eba53](https://github.com/nuxt/consola/commit/a6eba532381bcec9c84ac5600ac668aca87c8487))
      * support \`formatOptions.date\` to optionally hide date ([#101](https://github.com/nuxt/consola/issues/101)) ([6bf733f](https://github.com/nuxt/consola/commit/6bf733f2b9a5320584bdd0de7de08f4341c74335))

      ## [2.14.0](https://github.com/nuxt/consola/compare/v2.13.0...v2.14.0) (2020-06-26)


      ### Features

      * improve spam throttle ([5314eee](https://github.com/nuxt/consola/commit/5314eeebb4b564408a4ab14cb457bdbd426f6124))

      ## [2.13.0](https://github.com/nuxt/consola/compare/v2.12.2...v2.13.0) (2020-06-12)


      ### Features

      * remove level boundary check ([8972d47](https://github.com/nuxt/consola/commit/8972d478c93690fafb909f49d9d0edbcb67bddae))


      ### Bug Fixes

      * **types:** fix silent/verbose levels ([7ab0a65](https://github.com/nuxt/consola/commit/7ab0a65f383d9dd1b68a18ee439bf19468a57885))

      ### [2.12.2](https://github.com/nuxt/consola/compare/v2.12.1...v2.12.2) (2020-05-26)


      ### Bug Fixes

      * silent log level does not work ([#98](https://github.com/nuxt/consola/issues/98)) ([6a4a79c](https://github.com/nuxt/consola/commit/6a4a79c24b8db902b078ad92a6ee7a33880ed26c))

      ### [2.12.1](https://github.com/nuxt/consola/compare/v2.12.0...v2.12.1) (2020-05-07)


      ### Bug Fixes

      * new LogLevel enum is not exported properly [#95](https://github.com/nuxt/consola/issues/95) ([#96](https://github.com/nuxt/consola/issues/96)) ([fafbec2](https://github.com/nuxt/consola/commit/fafbec2b1bc75912eea5d0618a27b982738d6cda))

      ## [2.12.0](https://github.com/nuxt/consola/compare/v2.11.3...v2.12.0) (2020-05-07)


      ### Features

      * **types:** add missing typescript definitions for reporters  ([#94](https://github.com/nuxt/consola/issues/94)) ([4a08ef0](https://github.com/nuxt/consola/commit/4a08ef02bc48ddc887f2b91713520eda50793a27))

      ### [2.11.3](https://github.com/nuxt/consola/compare/v2.11.2...v2.11.3) (2019-12-31)


      ### Bug Fixes

      * **typescript:** remove cjs export (fixes [#88](https://github.com/nuxt/consola/issues/88)) ([0d9ab1b](https://github.com/nuxt/consola/commit/0d9ab1bba8645853c721069c57527764ed708869))

      ### [2.11.2](https://github.com/nuxt/consola/compare/v2.11.1...v2.11.2) (2019-12-27)


      ### Bug Fixes

      * **types:** \`const consola = require('consola')\` type is wrong ([#80](https://github.com/nuxt/consola/issues/80)) ([5c22d8c](https://github.com/nuxt/consola/commit/5c22d8cd4624e3bbd7294b9eba09f131ed786332))
      * throttle expiration ([#81](https://github.com/nuxt/consola/issues/81)) ([940474d](https://github.com/nuxt/consola/commit/940474d3b64a4969acdec04290734e700920c19f)), closes [#68](https://github.com/nuxt/consola/issues/68)

      ### [2.11.1](https://github.com/nuxt/consola/compare/v2.11.0...v2.11.1) (2019-12-17)


      ### Bug Fixes

      * **consola:** use \`options.stderr\` ([#77](https://github.com/nuxt/consola/issues/77)) ([774c673](https://github.com/nuxt/consola/commit/774c6739e794665bc5e2c40aa84921b7f2a26387))

      ## [2.11.0](https://github.com/nuxt/consola/compare/v2.10.0...v2.11.0) (2019-11-10)


      ### Features

      * **browser:** add support of formatted strings ([#66](https://github.com/nuxt/consola/issues/66)) ([920f313](https://github.com/nuxt/consola/commit/920f313dba322c34ccd1b2f08afba59122c3b8e7))


      ### Bug Fixes

      * typecheck type and tag before normalize ([1984deb](https://github.com/nuxt/consola/commit/1984deb0a5214a3aa82dab972ec76af20ba14d1b))
      * **types:** reporter in remove methods are optional ([#70](https://github.com/nuxt/consola/issues/70)) ([a17cdb1](https://github.com/nuxt/consola/commit/a17cdb1a423e41076c58692130955d5a9f5e36ba))

      ### [2.10.1](https://github.com/nuxt/consola/compare/v2.10.0...v2.10.1) (2019-08-05)

      ## [2.10.0](https://github.com/nuxt/consola/compare/v2.9.0...v2.10.0) (2019-08-05)


      ### Bug Fixes

      * add missing typescript declaration for level, stdout and stderr ([#58](https://github.com/nuxt/consola/issues/58)) ([a149dbb](https://github.com/nuxt/consola/commit/a149dbb))


      ### Features

      * improve typescript type definitions ([#57](https://github.com/nuxt/consola/issues/57)) ([80eefd8](https://github.com/nuxt/consola/commit/80eefd8))

      ## [2.9.0](https://github.com/nuxt/consola/compare/v2.8.0...v2.9.0) (2019-06-18)


      ### Features

      * count spam log ([197a6b3](https://github.com/nuxt/consola/commit/197a6b3))



      ## [2.8.0](https://github.com/nuxt/consola/compare/v2.7.1...v2.8.0) (2019-06-18)


      ### Features

      * spam preventation ([7da806b](https://github.com/nuxt/consola/commit/7da806b))



      ### [2.7.1](https://github.com/nuxt/consola/compare/v2.7.0...v2.7.1) (2019-05-26)


      ### Bug Fixes

      * **browser:** hide \`:\` with tag and normal log ([8250d5a](https://github.com/nuxt/consola/commit/8250d5a))



      ## [2.7.0](https://github.com/nuxt/consola/compare/v2.6.2...v2.7.0) (2019-05-26)


      ### Bug Fixes

      * correctly calculate line width when using grave accent ([bad52bd](https://github.com/nuxt/consola/commit/bad52bd))


      ### Features

      * always hide right side on width < 80 ([07d8246](https://github.com/nuxt/consola/commit/07d8246))
      * improve basic logs ([ea6ce59](https://github.com/nuxt/consola/commit/ea6ce59))
      * **browser:** fancier logs ([b64f337](https://github.com/nuxt/consola/commit/b64f337))
      * hide time from basic logger as it is commonly used in CI environments ([68c3bae](https://github.com/nuxt/consola/commit/68c3bae))
      * smart hide time and tag when there is no space ([00a375f](https://github.com/nuxt/consola/commit/00a375f))



      ### [2.6.2](https://github.com/nuxt/consola/compare/v2.6.1...v2.6.2) (2019-05-15)


      ### Bug Fixes

      * transpile browser dist to ES5 ([1f81eea](https://github.com/nuxt/consola/commit/1f81eea)), closes [nuxt/nuxt.js#5743](https://github.com/nuxt/consola/issues/5743)



      ### [2.6.1](https://github.com/nuxt/consola/compare/v2.6.0...v2.6.1) (2019-05-08)


      ### Bug Fixes

      * **browser:** use \`console.warn\` when possible ([#49](https://github.com/nuxt/consola/issues/49)) ([e386ede](https://github.com/nuxt/consola/commit/e386ede))



      # [2.6.0](https://github.com/nuxt/consola/compare/v2.5.8...v2.6.0) (2019-04-12)


      ### Features

      * expose constructor and reporters ([3a8f662](https://github.com/nuxt/consola/commit/3a8f662))



      ## [2.5.8](https://github.com/nuxt/consola/compare/v2.5.7...v2.5.8) (2019-03-29)


      ### Bug Fixes

      * **types:** allow passing extra arguments ([#46](https://github.com/nuxt/consola/issues/46)) ([d29fc46](https://github.com/nuxt/consola/commit/d29fc46))



      ## [2.5.7](https://github.com/nuxt/consola/compare/v2.5.6...v2.5.7) (2019-03-19)


      ### Bug Fixes

      * **formatting:** fix formatting when multiple back-quotes ([#44](https://github.com/nuxt/consola/issues/44)) ([669a12e](https://github.com/nuxt/consola/commit/669a12e))



      ## [2.5.6](https://github.com/nuxt/consola/compare/v2.5.5...v2.5.6) (2019-02-25)


      ### Bug Fixes

      * **ts:** revert export consola ts declarations ([#43](https://github.com/nuxt/consola/issues/43)) ([6bd4f85](https://github.com/nuxt/consola/commit/6bd4f85))



      <a name=\\"2.4.1\\"></a>
      ## [2.4.1](https://github.com/nuxt/consola/compare/v2.4.0...v2.4.1) (2019-02-12)


      ### Bug Fixes

      * **ts:** set type \\"any\\" ([#40](https://github.com/nuxt/consola/issues/40)) ([ea9d551](https://github.com/nuxt/consola/commit/ea9d551))



      <a name=\\"2.4.0\\"></a>
      # [2.4.0](https://github.com/nuxt/consola/compare/v2.3.2...v2.4.0) (2019-02-05)


      ### Bug Fixes

      * **esm:** fix esm compatibility ([8ddecc3](https://github.com/nuxt/consola/commit/8ddecc3))
      * **consola:** return \`this\` in setReporters ([544a887](https://github.com/nuxt/consola/commit/544a887))
      * **types:** set message type to \\"any\\" ([#39](https://github.com/nuxt/consola/issues/39)) ([ff97b09](https://github.com/nuxt/consola/commit/ff97b09)), closes [#38](https://github.com/nuxt/consola/issues/38)

      ### Features

      * **types:** update types ([d0d7455](https://github.com/nuxt/consola/commit/d0d7455))



      <a name=\\"2.3.2\\"></a>
      ## [2.3.2](https://github.com/nuxt/consola/compare/v2.3.1...v2.3.2) (2019-01-06)


      ### Bug Fixes

      * **types:** add some of the missing types ([#35](https://github.com/nuxt/consola/issues/35)) ([5e3e69b](https://github.com/nuxt/consola/commit/5e3e69b))
      * ignore winston dep in webpack ([#37](https://github.com/nuxt/consola/issues/37)) ([e534a28](https://github.com/nuxt/consola/commit/e534a28))



      <a name=\\"2.3.1\\"></a>
      ## [2.3.1](https://github.com/nuxt/consola/compare/v2.3.0...v2.3.1) (2019-01-02)


      ### Bug Fixes

      * bypass webpack for lazy required version of winston ([500b509](https://github.com/nuxt/consola/commit/500b509))



      <a name=\\"2.3.0\\"></a>
      # [2.3.0](https://github.com/nuxt/consola/compare/v2.2.6...v2.3.0) (2018-11-19)


      ### Bug Fixes

      * **isLogObj:** handle non-standard error objects ([8748c81](https://github.com/nuxt/consola/commit/8748c81))


      ### Features

      * browser reporter improvements ([591d0b4](https://github.com/nuxt/consola/commit/591d0b4)), closes [#31](https://github.com/nuxt/consola/issues/31)
      * **fancy:** look like jest traces ([ecae238](https://github.com/nuxt/consola/commit/ecae238))



      <a name=\\"2.2.6\\"></a>
      ## [2.2.6](https://github.com/nuxt/consola/compare/v2.2.5...v2.2.6) (2018-11-14)


      ### Bug Fixes

      * **json-reporter:** add a default value to the constructor ([#33](https://github.com/nuxt/consola/issues/33)) ([c59db36](https://github.com/nuxt/consola/commit/c59db36))



      <a name=\\"2.2.5\\"></a>
      ## [2.2.5](https://github.com/nuxt/consola/compare/v2.2.4...v2.2.5) (2018-11-14)


      ### Bug Fixes

      * expose typescript typings ([f0398ed](https://github.com/nuxt/consola/commit/f0398ed))



      <a name=\\"2.2.4\\"></a>
      ## [2.2.4](https://github.com/nuxt/consola/compare/v2.2.3...v2.2.4) (2018-11-08)


      ### Bug Fixes

      * use basic reporter only for ci and test environments ([33220e4](https://github.com/nuxt/consola/commit/33220e4))



      <a name=\\"2.2.3\\"></a>
      ## [2.2.3](https://github.com/nuxt/consola/compare/v2.2.2...v2.2.3) (2018-11-07)


      ### Bug Fixes

      * **fancy:** honor logObj.icon ([d56fa38](https://github.com/nuxt/consola/commit/d56fa38))



      <a name=\\"2.2.2\\"></a>
      ## [2.2.2](https://github.com/nuxt/consola/compare/v2.2.1...v2.2.2) (2018-11-04)


      ### Bug Fixes

      * update std-env to 2.1.1 ([32a9c67](https://github.com/nuxt/consola/commit/32a9c67))



      <a name=\\"2.2.1\\"></a>
      ## [2.2.1](https://github.com/nuxt/consola/compare/v2.2.0...v2.2.1) (2018-11-04)


      ### Bug Fixes

      * remove file:// from error stack traces ([ff24b69](https://github.com/nuxt/consola/commit/ff24b69))



      <a name=\\"2.2.0\\"></a>
      # [2.2.0](https://github.com/nuxt/consola/compare/v2.1.1...v2.2.0) (2018-11-04)


      ### Bug Fixes

      * correctly handle falsy values ([367fb19](https://github.com/nuxt/consola/commit/367fb19))


      ### Features

      * support formatOptions. resolves [#29](https://github.com/nuxt/consola/issues/29). ([7ed640f](https://github.com/nuxt/consola/commit/7ed640f))



      <a name=\\"2.1.1\\"></a>
      ## [2.1.1](https://github.com/nuxt/consola/compare/v2.1.0...v2.1.1) (2018-11-03)


      ### Bug Fixes

      * add legacy ready and start levels for more backward compatibility ([f54b5c2](https://github.com/nuxt/consola/commit/f54b5c2))



      <a name=\\"2.1.0\\"></a>
      # [2.1.0](https://github.com/nuxt/consola/compare/v2.0.9...v2.1.0) (2018-11-03)


      ### Features

      * add aliases ([cbea7bd](https://github.com/nuxt/consola/commit/cbea7bd))
      * mockTypes for easy mocking ([a332890](https://github.com/nuxt/consola/commit/a332890))



      <a name=\\"2.0.9\\"></a>
      ## [2.0.9](https://github.com/nuxt/consola/compare/v2.0.8...v2.0.9) (2018-11-03)



      <a name=\\"2.0.8\\"></a>
      ## [2.0.8](https://github.com/nuxt/consola/compare/v2.0.7...v2.0.8) (2018-11-03)



      <a name=\\"2.0.7\\"></a>
      ## [2.0.7](https://github.com/nuxt/consola/compare/v2.0.6...v2.0.7) (2018-11-02)


      ### Bug Fixes

      * always use computed values for stdout/stderr ([f91abc0](https://github.com/nuxt/consola/commit/f91abc0))



      <a name=\\"2.0.6\\"></a>
      ## [2.0.6](https://github.com/nuxt/consola/compare/v2.0.5...v2.0.6) (2018-11-02)



      <a name=\\"2.0.5\\"></a>
      ## [2.0.5](https://github.com/nuxt/consola/compare/v2.0.4...v2.0.5) (2018-11-02)



      <a name=\\"2.0.4\\"></a>
      ## [2.0.4](https://github.com/nuxt/consola/compare/v2.0.3...v2.0.4) (2018-11-02)


      ### Bug Fixes

      * **fancy:** remove extra icons ([b66fde0](https://github.com/nuxt/consola/commit/b66fde0))



      <a name=\\"2.0.3\\"></a>
      ## [2.0.3](https://github.com/nuxt/consola/compare/v2.0.2...v2.0.3) (2018-11-02)


      ### Bug Fixes

      * **pkg:** exclude src from package ([4b1fb7d](https://github.com/nuxt/consola/commit/4b1fb7d))
      * use live console._stdout bindings for default stream ([d9573c3](https://github.com/nuxt/consola/commit/d9573c3))



      <a name=\\"2.0.2\\"></a>
      ## [2.0.2](https://github.com/nuxt/consola/compare/v2.0.1...v2.0.2) (2018-11-02)


      ### Bug Fixes

      * **error:** always strip first line from stack ([3afa9aa](https://github.com/nuxt/consola/commit/3afa9aa))



      <a name=\\"2.0.1\\"></a>
      ## [2.0.1](https://github.com/nuxt/consola/compare/v2.0.0...v2.0.1) (2018-11-02)


      ### Bug Fixes

      * **fancy:** use proper color for log paths ([7c75283](https://github.com/nuxt/consola/commit/7c75283))



      <a name=\\"2.0.0\\"></a>
      # [2.0.0](https://github.com/nuxt/consola/compare/v2.0.0-2...v2.0.0) (2018-11-02)



      <a name=\\"2.0.0-2\\"></a>
      # [2.0.0-2](https://github.com/nuxt/consola/compare/v2.0.0-1...v2.0.0-2) (2018-11-02)


      ### Bug Fixes

      * add methods for legacy support ([4bdd034](https://github.com/nuxt/consola/commit/4bdd034))
      * preserve additional new lines ([340a001](https://github.com/nuxt/consola/commit/340a001))
      * update std-env to 2.1.0 ([2dc2a50](https://github.com/nuxt/consola/commit/2dc2a50))


      ### Features

      * support badge with fancy ([38600fe](https://github.com/nuxt/consola/commit/38600fe))



      <a name=\\"2.0.0-1\\"></a>
      # [2.0.0-1](https://github.com/nuxt/consola/compare/v2.0.0-0...v2.0.0-1) (2018-10-31)



      <a name=\\"2.0.0-0\\"></a>
      # [2.0.0-0](https://github.com/nuxt/consola/compare/v1.4.4...v2.0.0-0) (2018-10-31)


      ### Bug Fixes

      * add schmance.js ([2929648](https://github.com/nuxt/consola/commit/2929648))
      * **docs:** update readme ([#22](https://github.com/nuxt/consola/issues/22)) ([e75f2a0](https://github.com/nuxt/consola/commit/e75f2a0))
      * add default/undefined color for browser ([39584d2](https://github.com/nuxt/consola/commit/39584d2))
      * add missing parseStack import ([da53dee](https://github.com/nuxt/consola/commit/da53dee))
      * also copy symbols in assignGlobalReference ([b0eefb5](https://github.com/nuxt/consola/commit/b0eefb5))
      * don't return this when calling log functions ([f07e056](https://github.com/nuxt/consola/commit/f07e056))
      * fix badge display ([e036eed](https://github.com/nuxt/consola/commit/e036eed))
      * fix main field ([4b56e48](https://github.com/nuxt/consola/commit/4b56e48))
      * fix typos ([45e2f99](https://github.com/nuxt/consola/commit/45e2f99))
      * handle null value of obj for assignToLogObj ([d2402af](https://github.com/nuxt/consola/commit/d2402af))
      * improve browser packaging ([4d8c8d0](https://github.com/nuxt/consola/commit/4d8c8d0))
      * lint ([f909761](https://github.com/nuxt/consola/commit/f909761))
      * lint ([d976620](https://github.com/nuxt/consola/commit/d976620))
      * only one color ending parameter is enough ([d213634](https://github.com/nuxt/consola/commit/d213634))
      * readme: icon string length is digit ([31f1894](https://github.com/nuxt/consola/commit/31f1894))
      * remove name assignment ([8d59075](https://github.com/nuxt/consola/commit/8d59075))
      * remove pushes for better readability ([418d84a](https://github.com/nuxt/consola/commit/418d84a))
      * rename private fields ([244fe5c](https://github.com/nuxt/consola/commit/244fe5c))
      * rename require test file ([cfc8f9e](https://github.com/nuxt/consola/commit/cfc8f9e))
      * return earlier on not displaying levels ([cfdcf04](https://github.com/nuxt/consola/commit/cfdcf04))
      * support Error as logObject ([134ff54](https://github.com/nuxt/consola/commit/134ff54))
      * text color comment ([9336fbc](https://github.com/nuxt/consola/commit/9336fbc))
      * update demo ([3842e0e](https://github.com/nuxt/consola/commit/3842e0e))
      * use symbols for private property access ([8e6343c](https://github.com/nuxt/consola/commit/8e6343c))


      ### Code Refactoring

      * additionalStyle ~> additionalColor ([3f808e9](https://github.com/nuxt/consola/commit/3f808e9))


      ### Features

      * add __VERSION__ to consola prototype ([982c8ca](https://github.com/nuxt/consola/commit/982c8ca))
      * add assignGlobalConsola helper ([1af28f7](https://github.com/nuxt/consola/commit/1af28f7))
      * add getter/setter for level ([7af5ed5](https://github.com/nuxt/consola/commit/7af5ed5))
      * add global.consola ([4da784d](https://github.com/nuxt/consola/commit/4da784d))
      * add shmancy reporter ([dc6121a](https://github.com/nuxt/consola/commit/dc6121a))
      * add symbols to browser ([30cd4f0](https://github.com/nuxt/consola/commit/30cd4f0))
      * add sync/async write ([8525525](https://github.com/nuxt/consola/commit/8525525))
      * add typescript typings ([#24](https://github.com/nuxt/consola/issues/24)) ([0853a6f](https://github.com/nuxt/consola/commit/0853a6f))
      * align basic and fancy reporter tags ([38a4729](https://github.com/nuxt/consola/commit/38a4729))
      * better stack formater ([f5acb3c](https://github.com/nuxt/consola/commit/f5acb3c))
      * detect version changes and throw a warning ([73bdd1a](https://github.com/nuxt/consola/commit/73bdd1a))
      * improve packaging and exports ([90da862](https://github.com/nuxt/consola/commit/90da862))
      * improve packaging for browser support ([47af1df](https://github.com/nuxt/consola/commit/47af1df))
      * initial works for v2.0.0 ([455b6f9](https://github.com/nuxt/consola/commit/455b6f9))
      * log formatting using printf ([2afb025](https://github.com/nuxt/consola/commit/2afb025))
      * no more side effects ([c015c31](https://github.com/nuxt/consola/commit/c015c31))
      * pause/resume ([f217cc1](https://github.com/nuxt/consola/commit/f217cc1))
      * return new consola instance with consola.create ([4ae3614](https://github.com/nuxt/consola/commit/4ae3614))
      * rework _createLogFn with better argument handling ([2d4af39](https://github.com/nuxt/consola/commit/2d4af39))
      * scope inheritance support ([#23](https://github.com/nuxt/consola/issues/23)) ([0070c54](https://github.com/nuxt/consola/commit/0070c54))
      * **fancy/basic:** support logObj.stack field ([aa2216f](https://github.com/nuxt/consola/commit/aa2216f))
      * setReporters, withDefaults and withTag ([912446f](https://github.com/nuxt/consola/commit/912446f))
      * showType option ([ed294e4](https://github.com/nuxt/consola/commit/ed294e4))
      * style browser reporter ([d39684d](https://github.com/nuxt/consola/commit/d39684d))
      * support all chalk colors ([2cec678](https://github.com/nuxt/consola/commit/2cec678)), closes [#20](https://github.com/nuxt/consola/issues/20)
      * wrapConsole ([3962a1f](https://github.com/nuxt/consola/commit/3962a1f))
      * wrapStd ([f8bfbeb](https://github.com/nuxt/consola/commit/f8bfbeb))
      * write error and warns to process.stderr by default ([6565254](https://github.com/nuxt/consola/commit/6565254))


      ### Performance Improvements

      * **basic:** refactor getWriteMethod ([c52db69](https://github.com/nuxt/consola/commit/c52db69))
      * remove all DEPRECATED helpers for less bundle size ([fe39d37](https://github.com/nuxt/consola/commit/fe39d37))


      ### BREAKING CHANGES

      * Use new additionalColor prop
      * lot's of internals had been changed.
      * Behavior may be changed in some conditions



      <a name=\\"1.4.4\\"></a>
      ## [1.4.4](https://github.com/nuxt/consola/compare/v1.4.3...v1.4.4) (2018-10-13)


      ### Bug Fixes

      * add global.consola ([558cae5](https://github.com/nuxt/consola/commit/558cae5))



      <a name=\\"1.4.3\\"></a>
      ## [1.4.3](https://github.com/nuxt/consola/compare/v1.4.2...v1.4.3) (2018-08-18)


      ### Bug Fixes

      * use more compatible string to clear the console ([82ce410](https://github.com/nuxt/consola/commit/82ce410))



      <a name=\\"1.4.2\\"></a>
      ## [1.4.2](https://github.com/nuxt/consola/compare/v1.4.1...v1.4.2) (2018-08-12)


      ### Bug Fixes

      * cannot set level as 0 in options ([4c1ecce](https://github.com/nuxt/consola/commit/4c1ecce))



      <a name=\\"1.4.1\\"></a>
      ## [1.4.1](https://github.com/nuxt/consola/compare/v1.4.0...v1.4.1) (2018-05-27)


      ### Bug Fixes

      * **fancy:** logObj.type ([418be28](https://github.com/nuxt/consola/commit/418be28))



      <a name=\\"1.4.0\\"></a>
      # [1.4.0](https://github.com/nuxt/consola/compare/v1.3.0...v1.4.0) (2018-05-27)


      ### Features

      * support custom additional style ([#18](https://github.com/nuxt/consola/issues/18)) ([7a750bf](https://github.com/nuxt/consola/commit/7a750bf))
      * **fancy:** support icon field ([0123bed](https://github.com/nuxt/consola/commit/0123bed))



      <a name=\\"1.3.0\\"></a>
      # [1.3.0](https://github.com/nuxt/consola/compare/v1.2.0...v1.3.0) (2018-04-15)


      ### Bug Fixes

      * **reporters/fancy:** extra space for additional ([efeab44](https://github.com/nuxt/consola/commit/efeab44))
      * prevent duplicate consola instances when different versions used by packages ([0bce262](https://github.com/nuxt/consola/commit/0bce262))


      ### Features

      * support extra log arguments ([8b6d3d2](https://github.com/nuxt/consola/commit/8b6d3d2))



      <a name=\\"1.2.0\\"></a>
      # [1.2.0](https://github.com/nuxt/consola/compare/v1.1.4...v1.2.0) (2018-04-02)


      ### Features

      * **basic:** support additional field ([b50cad8](https://github.com/nuxt/consola/commit/b50cad8))
      * improve packaging ([158e8ef](https://github.com/nuxt/consola/commit/158e8ef))


      ### Performance Improvements

      * require needed lodash methods only ([91065e4](https://github.com/nuxt/consola/commit/91065e4))



      <a name=\\"1.1.4\\"></a>
      ## [1.1.4](https://github.com/nuxt/consola/compare/v1.1.3...v1.1.4) (2018-03-31)


      ### Bug Fixes

      * **package:** add chalk to dependencies ([3f738e9](https://github.com/nuxt/consola/commit/3f738e9))



      <a name=\\"1.1.3\\"></a>
      ## [1.1.3](https://github.com/nuxt/consola/compare/v1.1.2...v1.1.3) (2018-03-31)


      ### Bug Fixes

      * only include dist and src in package ([8b477ec](https://github.com/nuxt/consola/commit/8b477ec))



      <a name=\\"1.1.2\\"></a>
      ## [1.1.2](https://github.com/nuxt/consola/compare/v1.1.1...v1.1.2) (2018-03-31)


      ### Bug Fixes

      * handle null and undefined calls ([1f98bb1](https://github.com/nuxt/consola/commit/1f98bb1))



      <a name=\\"1.1.1\\"></a>
      ## [1.1.1](https://github.com/nuxt/consola/compare/v1.1.0...v1.1.1) (2018-03-31)


      ### Bug Fixes

      * add prepublish script ([8dd8700](https://github.com/nuxt/consola/commit/8dd8700))



      <a name=\\"1.1.0\\"></a>
      # [1.1.0](https://github.com/nuxt/consola/compare/v1.0.0...v1.1.0) (2018-03-31)


      ### Features

      * rewrite FancyReporter without ora ([73c1ddc](https://github.com/nuxt/consola/commit/73c1ddc))



      <a name=\\"1.0.0\\"></a>
      # [1.0.0](https://github.com/nuxt/consola/compare/v0.1.0...v1.0.0) (2018-03-31)



      <a name=\\"0.1.0\\"></a>
      # 0.1.0 (2018-03-31)


      ### Features

      * add log type for console compability ([96a8162](https://github.com/nuxt/consola/commit/96a8162))
      ",
            "provider": "npm",
          },
          "resolved": "",
          "standardVersion": [],
        },
        "provider": "changelog-diff",
      }
    `)
  })
  it('consola', async () => {
    const diff = await changelogd.fetchChangelog('consola', '2.13.0', '2.15.0')

    expect(diff).toMatchInlineSnapshot(`
      {
        "changelog": {
          "raw": [
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/unjs/consola/releases/29359156/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### Features

      * **types:** use union type for \`ConsolaLogObject.type\`  ([#100](https://github.com/nuxt/consola/issues/100)) ([a6eba53](https://github.com/nuxt/consola/commit/a6eba532381bcec9c84ac5600ac668aca87c8487))
      * support \`formatOptions.date\` to optionally hide date ([#101](https://github.com/nuxt/consola/issues/101)) ([6bf733f](https://github.com/nuxt/consola/commit/6bf733f2b9a5320584bdd0de7de08f4341c74335))
      ",
              "created_at": "2020-08-05T11:34:50Z",
              "draft": false,
              "html_url": "https://github.com/unjs/consola/releases/tag/v2.15.0",
              "id": 29359156,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTI5MzU5MTU2",
              "prerelease": false,
              "published_at": "2020-08-05T11:35:17Z",
              "tag_name": "v2.15.0",
              "tarball_url": "https://api.github.com/repos/unjs/consola/tarball/v2.15.0",
              "target_commitish": "master",
              "upload_url": "https://uploads.github.com/repos/unjs/consola/releases/29359156/assets{?name,label}",
              "url": "https://api.github.com/repos/unjs/consola/releases/29359156",
              "zipball_url": "https://api.github.com/repos/unjs/consola/zipball/v2.15.0",
            },
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/unjs/consola/releases/27962786/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/5158436?v=4",
                "events_url": "https://api.github.com/users/pi0/events{/privacy}",
                "followers_url": "https://api.github.com/users/pi0/followers",
                "following_url": "https://api.github.com/users/pi0/following{/other_user}",
                "gists_url": "https://api.github.com/users/pi0/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/pi0",
                "id": 5158436,
                "login": "pi0",
                "node_id": "MDQ6VXNlcjUxNTg0MzY=",
                "organizations_url": "https://api.github.com/users/pi0/orgs",
                "received_events_url": "https://api.github.com/users/pi0/received_events",
                "repos_url": "https://api.github.com/users/pi0/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/pi0/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pi0/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/pi0",
              },
              "body": "### Features

      * improve spam throttle ([5314eee](https://github.com/nuxt/consola/commit/5314eeebb4b564408a4ab14cb457bdbd426f6124))
      ",
              "created_at": "2020-06-26T15:02:23Z",
              "draft": false,
              "html_url": "https://github.com/unjs/consola/releases/tag/v2.14.0",
              "id": 27962786,
              "name": "",
              "node_id": "MDc6UmVsZWFzZTI3OTYyNzg2",
              "prerelease": false,
              "published_at": "2020-06-26T15:03:03Z",
              "tag_name": "v2.14.0",
              "tarball_url": "https://api.github.com/repos/unjs/consola/tarball/v2.14.0",
              "target_commitish": "master",
              "upload_url": "https://uploads.github.com/repos/unjs/consola/releases/27962786/assets{?name,label}",
              "url": "https://api.github.com/repos/unjs/consola/releases/27962786",
              "zipball_url": "https://api.github.com/repos/unjs/consola/zipball/v2.14.0",
            },
          ],
          "resolved": "v2.15.0

      ### Features

      * **types:** use union type for \`ConsolaLogObject.type\`  ([#100](https://github.com/nuxt/consola/issues/100)) ([a6eba53](https://github.com/nuxt/consola/commit/a6eba532381bcec9c84ac5600ac668aca87c8487))
      * support \`formatOptions.date\` to optionally hide date ([#101](https://github.com/nuxt/consola/issues/101)) ([6bf733f](https://github.com/nuxt/consola/commit/6bf733f2b9a5320584bdd0de7de08f4341c74335))

      ---------------

      v2.14.0

      ### Features

      * improve spam throttle ([5314eee](https://github.com/nuxt/consola/commit/5314eeebb4b564408a4ab14cb457bdbd426f6124))

      ---------------
      ",
          "url": "nuxt/consola",
        },
        "provider": "github-releases",
      }
    `)
  })

  it('diff', async () => {
    const diff = await changelogd.fetchChangelog('diff', '4.0.0', '5.0.0')

    expect(diff).toMatchInlineSnapshot(`
      {
        "changelog": {
          "raw": {
            "changelog": "# Release Notes

      ## Development

      [Commits](https://github.com/kpdecker/jsdiff/compare/v5.0.0...master)

      ## v5.0.0

      - Breaking: UMD export renamed from \`JsDiff\` to \`Diff\`.
      - Breaking: Newlines separated into separate tokens for word diff.
      - Breaking: Unified diffs now match [\\"quirks\\"](https://www.artima.com/weblogs/viewpost.jsp?thread=164293)

      [Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.1...v5.0.0)

      ## v4.0.1 - January 6th, 2019

      - Fix main reference path - b826104

      [Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.0...v4.0.1)

      ## v4.0.0 - January 5th, 2019

      - [#94](https://github.com/kpdecker/jsdiff/issues/94) - Missing \\"No newline at end of file\\" when comparing two texts that do not end in newlines ([@federicotdn](https://api.github.com/users/federicotdn))
      - [#227](https://github.com/kpdecker/jsdiff/issues/227) - Licence
      - [#199](https://github.com/kpdecker/jsdiff/issues/199) - Import statement for jsdiff
      - [#159](https://github.com/kpdecker/jsdiff/issues/159) - applyPatch affecting wrong line number with with new lines
      - [#8](https://github.com/kpdecker/jsdiff/issues/8) - A new state \\"replace\\"
      - Drop ie9 from karma targets - 79c31bd
      - Upgrade deps. Convert from webpack to rollup - 2c1a29c
      - Make ()[]\\"' as word boundaries between each other - f27b899
      - jsdiff: Replaced phantomJS by chrome - ec3114e
      - Add yarn.lock to .npmignore - 29466d8

      Compatibility notes:

      - Bower and Component packages no longer supported

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.5.0...v4.0.0)

      ## v3.5.0 - March 4th, 2018

      - Omit redundant slice in join method of diffArrays - 1023590
      - Support patches with empty lines - fb0f208
      - Accept a custom JSON replacer function for JSON diffing - 69c7f0a
      - Optimize parch header parser - 2aec429
      - Fix typos - e89c832

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.4.0...v3.5.0)

      ## v3.4.0 - October 7th, 2017

      - [#183](https://github.com/kpdecker/jsdiff/issues/183) - Feature request: ability to specify a custom equality checker for \`diffArrays\`
      - [#173](https://github.com/kpdecker/jsdiff/issues/173) - Bug: diffArrays gives wrong result on array of booleans
      - [#158](https://github.com/kpdecker/jsdiff/issues/158) - diffArrays will not compare the empty string in array?
      - comparator for custom equality checks - 30e141e
      - count oldLines and newLines when there are conflicts - 53bf384
      - Fix: diffArrays can compare falsey items - 9e24284
      - Docs: Replace grunt with npm test - 00e2f94

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.3.1...v3.4.0)

      ## v3.3.1 - September 3rd, 2017

      - [#141](https://github.com/kpdecker/jsdiff/issues/141) - Cannot apply patch because my file delimiter is \\"/r/n\\" instead of \\"/n\\"
      - [#192](https://github.com/kpdecker/jsdiff/pull/192) - Fix: Bad merge when adding new files (#189)
      - correct spelling mistake - 21fa478

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.3.0...v3.3.1)

      ## v3.3.0 - July 5th, 2017

      - [#114](https://github.com/kpdecker/jsdiff/issues/114) - /patch/merge not exported
      - Gracefully accept invalid newStart in hunks, same as patch(1) does. - d8a3635
      - Use regex rather than starts/ends with for parsePatch - 6cab62c
      - Add browser flag - e64f674
      - refactor: simplified code a bit more - 8f8e0f2
      - refactor: simplified code a bit - b094a6f
      - fix: some corrections re ignoreCase option - 3c78fd0
      - ignoreCase option - 3cbfbb5
      - Sanitize filename while parsing patches - 2fe8129
      - Added better installation methods - aced50b
      - Simple export of functionality - 8690f31

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.2.0...v3.3.0)

      ## v3.2.0 - December 26th, 2016

      - [#156](https://github.com/kpdecker/jsdiff/pull/156) - Add \`undefinedReplacement\` option to \`diffJson\` ([@ewnd9](https://api.github.com/users/ewnd9))
      - [#154](https://github.com/kpdecker/jsdiff/pull/154) - Add \`examples\` and \`images\` to \`.npmignore\`. ([@wtgtybhertgeghgtwtg](https://api.github.com/users/wtgtybhertgeghgtwtg))
      - [#153](https://github.com/kpdecker/jsdiff/pull/153) - feat(structuredPatch): Pass options to diffLines ([@Kiougar](https://api.github.com/users/Kiougar))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.1.0...v3.2.0)

      ## v3.1.0 - November 27th, 2016

      - [#146](https://github.com/kpdecker/jsdiff/pull/146) - JsDiff.diffArrays to compare arrays ([@wvanderdeijl](https://api.github.com/users/wvanderdeijl))
      - [#144](https://github.com/kpdecker/jsdiff/pull/144) - Split file using all possible line delimiter instead of hard-coded \\"/n\\" and join lines back using the original delimiters ([@soulbeing](https://api.github.com/users/soulbeing))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.0.1...v3.1.0)

      ## v3.0.1 - October 9th, 2016

      - [#139](https://github.com/kpdecker/jsdiff/pull/139) - Make README.md look nicer in npmjs.com ([@takenspc](https://api.github.com/users/takenspc))
      - [#135](https://github.com/kpdecker/jsdiff/issues/135) - parsePatch combines patches from multiple files into a single IUniDiff when there is no \\"Index\\" line ([@ramya-rao-a](https://api.github.com/users/ramya-rao-a))
      - [#124](https://github.com/kpdecker/jsdiff/issues/124) - IE7/IE8 failure since 2.0.0 ([@boneskull](https://api.github.com/users/boneskull))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v3.0.0...v3.0.1)

      ## v3.0.0 - August 23rd, 2016

      - [#130](https://github.com/kpdecker/jsdiff/pull/130) - Add callback argument to applyPatches \`patched\` option ([@piranna](https://api.github.com/users/piranna))
      - [#120](https://github.com/kpdecker/jsdiff/pull/120) - Correctly handle file names containing spaces ([@adius](https://api.github.com/users/adius))
      - [#119](https://github.com/kpdecker/jsdiff/pull/119) - Do single reflow ([@wifiextender](https://api.github.com/users/wifiextender))
      - [#117](https://github.com/kpdecker/jsdiff/pull/117) - Make more usable with long strings. ([@abnbgist](https://api.github.com/users/abnbgist))

      Compatibility notes:

      - applyPatches patch callback now is async and requires the callback be called to continue operation

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.3...v3.0.0)

      ## v2.2.3 - May 31st, 2016

      - [#118](https://github.com/kpdecker/jsdiff/pull/118) - Add a fix for applying 0-length destination patches ([@chaaz](https://api.github.com/users/chaaz))
      - [#115](https://github.com/kpdecker/jsdiff/pull/115) - Fixed grammar in README ([@krizalys](https://api.github.com/users/krizalys))
      - [#113](https://github.com/kpdecker/jsdiff/pull/113) - fix typo ([@vmazare](https://api.github.com/users/vmazare))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.2...v2.2.3)

      ## v2.2.2 - March 13th, 2016

      - [#102](https://github.com/kpdecker/jsdiff/issues/102) - diffJson with dates, returns empty curly braces ([@dr-dimitru](https://api.github.com/users/dr-dimitru))
      - [#97](https://github.com/kpdecker/jsdiff/issues/97) - Whitespaces & diffWords ([@faiwer](https://api.github.com/users/faiwer))
      - [#92](https://github.com/kpdecker/jsdiff/pull/92) - Fixes typo in the readme ([@bg451](https://api.github.com/users/bg451))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.1...v2.2.2)

      ## v2.2.1 - November 12th, 2015

      - [#89](https://github.com/kpdecker/jsdiff/pull/89) - add in display selector to readme ([@FranDias](https://api.github.com/users/FranDias))
      - [#88](https://github.com/kpdecker/jsdiff/pull/88) - Split diffs based on file headers instead of 'Index:' metadata ([@piranna](https://api.github.com/users/piranna))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.0...v2.2.1)

      ## v2.2.0 - October 29th, 2015

      - [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))
      - [#83](https://github.com/kpdecker/jsdiff/pull/83) - Add basic fuzzy matching to applyPatch ([@piranna](https://github.com/piranna))
        [Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.0...v2.2.0)

      ## v2.2.0 - October 29th, 2015

      - [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))
      - [#83](https://github.com/kpdecker/jsdiff/pull/83) - Add basic fuzzy matching to applyPatch ([@piranna](https://github.com/piranna))
        [Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.3...v2.2.0)

      ## v2.1.3 - September 30th, 2015

      - [#78](https://github.com/kpdecker/jsdiff/pull/78) - fix: error throwing when apply patch to empty string ([@21paradox](https://api.github.com/users/21paradox))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.2...v2.1.3)

      ## v2.1.2 - September 23rd, 2015

      - [#76](https://github.com/kpdecker/jsdiff/issues/76) - diff headers give error ([@piranna](https://api.github.com/users/piranna))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.1...v2.1.2)

      ## v2.1.1 - September 9th, 2015

      - [#73](https://github.com/kpdecker/jsdiff/issues/73) - Is applyPatches() exposed in the API? ([@davidparsson](https://api.github.com/users/davidparsson))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.0...v2.1.1)

      ## v2.1.0 - August 27th, 2015

      - [#72](https://github.com/kpdecker/jsdiff/issues/72) - Consider using options object API for flag permutations ([@kpdecker](https://api.github.com/users/kpdecker))
      - [#70](https://github.com/kpdecker/jsdiff/issues/70) - diffWords treats \\\\n at the end as significant whitespace ([@nesQuick](https://api.github.com/users/nesQuick))
      - [#69](https://github.com/kpdecker/jsdiff/issues/69) - Missing count ([@wfalkwallace](https://api.github.com/users/wfalkwallace))
      - [#68](https://github.com/kpdecker/jsdiff/issues/68) - diffLines seems broken ([@wfalkwallace](https://api.github.com/users/wfalkwallace))
      - [#60](https://github.com/kpdecker/jsdiff/issues/60) - Support multiple diff hunks ([@piranna](https://api.github.com/users/piranna))
      - [#54](https://github.com/kpdecker/jsdiff/issues/54) - Feature Request: 3-way merge ([@mog422](https://api.github.com/users/mog422))
      - [#42](https://github.com/kpdecker/jsdiff/issues/42) - Fuzz factor for applyPatch ([@stuartpb](https://api.github.com/users/stuartpb))
      - Move whitespace ignore out of equals method - 542063c
      - Include source maps in babel output - 7f7ab21
      - Merge diff/line and diff/patch implementations - 1597705
      - Drop map utility method - 1ddc939
      - Documentation for parsePatch and applyPatches - 27c4b77

      Compatibility notes:

      - The undocumented ignoreWhitespace flag has been removed from the Diff equality check directly. This implementation may be copied to diff utilities if dependencies existed on this functionality.

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.0.2...v2.1.0)

      ## v2.0.2 - August 8th, 2015

      - [#67](https://github.com/kpdecker/jsdiff/issues/67) - cannot require from npm module in node ([@commenthol](https://api.github.com/users/commenthol))
      - Convert to chai since we don’t support IE8 - a96bbad

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.0.1...v2.0.2)

      ## v2.0.1 - August 7th, 2015

      - Add release build at proper step - 57542fd

      [Commits](https://github.com/kpdecker/jsdiff/compare/v2.0.0...v2.0.1)

      ## v2.0.0 - August 7th, 2015

      - [#66](https://github.com/kpdecker/jsdiff/issues/66) - Add karma and sauce tests ([@kpdecker](https://api.github.com/users/kpdecker))
      - [#65](https://github.com/kpdecker/jsdiff/issues/65) - Create component repository for bower ([@kpdecker](https://api.github.com/users/kpdecker))
      - [#64](https://github.com/kpdecker/jsdiff/issues/64) - Automatically call removeEmpty for all tokenizer calls ([@kpdecker](https://api.github.com/users/kpdecker))
      - [#62](https://github.com/kpdecker/jsdiff/pull/62) - Allow access to structured object representation of patch data ([@bittrance](https://api.github.com/users/bittrance))
      - [#61](https://github.com/kpdecker/jsdiff/pull/61) - Use svg instead of png to get better image quality ([@PeterDaveHello](https://api.github.com/users/PeterDaveHello))
      - [#29](https://github.com/kpdecker/jsdiff/issues/29) - word tokenizer works only for 7 bit ascii ([@plasmagunman](https://api.github.com/users/plasmagunman))

      Compatibility notes:

      - \`this.removeEmpty\` is now called automatically for all instances. If this is not desired, this may be overridden on a per instance basis.
      - The library has been refactored to use some ES6 features. The external APIs should remain the same, but bower projects that directly referenced the repository will now have to point to the [components/jsdiff](https://github.com/components/jsdiff) repository.

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.4.0...v2.0.0)

      ## v1.4.0 - May 6th, 2015

      - [#57](https://github.com/kpdecker/jsdiff/issues/57) - createPatch -> applyPatch failed. ([@mog422](https://api.github.com/users/mog422))
      - [#56](https://github.com/kpdecker/jsdiff/pull/56) - Two files patch ([@rgeissert](https://api.github.com/users/rgeissert))
      - [#14](https://github.com/kpdecker/jsdiff/issues/14) - Flip added and removed order? ([@jakesandlund](https://api.github.com/users/jakesandlund))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.3.2...v1.4.0)

      ## v1.3.2 - March 30th, 2015

      - [#53](https://github.com/kpdecker/jsdiff/pull/53) - Updated README.MD with Bower installation instructions ([@ofbriggs](https://api.github.com/users/ofbriggs))
      - [#49](https://github.com/kpdecker/jsdiff/issues/49) - Cannot read property 'oldlines' of undefined ([@nwtn](https://api.github.com/users/nwtn))
      - [#44](https://github.com/kpdecker/jsdiff/issues/44) - invalid-meta jsdiff is missing \\"main\\" entry in bower.json

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.3.1...v1.3.2)

      ## v1.3.1 - March 13th, 2015

      - [#52](https://github.com/kpdecker/jsdiff/pull/52) - Fix for #51 Wrong result of JsDiff.diffLines ([@felicienfrancois](https://api.github.com/users/felicienfrancois))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.3.0...v1.3.1)

      ## v1.3.0 - March 2nd, 2015

      - [#47](https://github.com/kpdecker/jsdiff/pull/47) - Adding Diff Trimmed Lines ([@JamesGould123](https://api.github.com/users/JamesGould123))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.2.2...v1.3.0)

      ## v1.2.2 - January 26th, 2015

      - [#45](https://github.com/kpdecker/jsdiff/pull/45) - Fix AMD module loading ([@pedrocarrico](https://api.github.com/users/pedrocarrico))
      - [#43](https://github.com/kpdecker/jsdiff/pull/43) - added a bower file ([@nbrustein](https://api.github.com/users/nbrustein))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.2.1...v1.2.2)

      ## v1.2.1 - December 26th, 2014

      - [#41](https://github.com/kpdecker/jsdiff/pull/41) - change condition of using node export system. ([@ironhee](https://api.github.com/users/ironhee))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.2.0...v1.2.1)

      ## v1.2.0 - November 29th, 2014

      - [#37](https://github.com/kpdecker/jsdiff/pull/37) - Add support for sentences. ([@vmariano](https://api.github.com/users/vmariano))
      - [#28](https://github.com/kpdecker/jsdiff/pull/28) - Implemented diffJson ([@papandreou](https://api.github.com/users/papandreou))
      - [#27](https://github.com/kpdecker/jsdiff/issues/27) - Slow to execute over diffs with a large number of changes ([@termi](https://api.github.com/users/termi))
      - Allow for optional async diffing - 19385b9
      - Fix diffChars implementation - eaa44ed

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.1.0...v1.2.0)

      ## v1.1.0 - November 25th, 2014

      - [#33](https://github.com/kpdecker/jsdiff/pull/33) - AMD and global exports ([@ovcharik](https://api.github.com/users/ovcharik))
      - [#32](https://github.com/kpdecker/jsdiff/pull/32) - Add support for component ([@vmariano](https://api.github.com/users/vmariano))
      - [#31](https://github.com/kpdecker/jsdiff/pull/31) - Don't rely on Array.prototype.map ([@papandreou](https://api.github.com/users/papandreou))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.8...v1.1.0)

      ## v1.0.8 - December 22nd, 2013

      - [#24](https://github.com/kpdecker/jsdiff/pull/24) - Handle windows newlines on non windows machines. ([@benogle](https://api.github.com/users/benogle))
      - [#23](https://github.com/kpdecker/jsdiff/pull/23) - Prettied up the API formatting a little, and added basic node and web examples ([@airportyh](https://api.github.com/users/airportyh))

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.7...v1.0.8)

      ## v1.0.7 - September 11th, 2013

      - [#22](https://github.com/kpdecker/jsdiff/pull/22) - Added variant of WordDiff that doesn't ignore whitespace differences ([@papandreou](https://api.github.com/users/papandreou)

      - Add 0.10 to travis tests - 243a526

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.6...v1.0.7)

      ## v1.0.6 - August 30th, 2013

      - [#19](https://github.com/kpdecker/jsdiff/pull/19) - Explicitly define contents of npm package ([@sindresorhus](https://api.github.com/users/sindresorhus)

      [Commits](https://github.com/kpdecker/jsdiff/compare/v1.0.5...v1.0.6)
      ",
            "provider": "npm",
          },
          "resolved": "[Commits](https://github.com/kpdecker/jsdiff/compare/v5.0.0...master)## v5.0.0

      - Breaking: UMD export renamed from \`JsDiff\` to \`Diff\`.
      - Breaking: Newlines separated into separate tokens for word diff.
      - Breaking: Unified diffs now match [\\"quirks\\"](https://www.artima.com/weblogs/viewpost.jsp?thread=164293)

      [Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.1...v5.0.0)

      ## v4.0.1 - January 6th, 2019

      - Fix main reference path - b826104

      [Commits](https://github.com/kpdecker/jsdiff/compare/v4.0.0...v4.0.1)- [#102](https://github.com/kpdecker/jsdiff/issues/102) - diffJson with dates, returns empty curly braces ([@dr-dimitru](https://api.github.com/users/dr-dimitru))- [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))[Commits](https://github.com/kpdecker/jsdiff/compare/v2.2.0...v2.2.0)- [#80](https://github.com/kpdecker/jsdiff/pull/80) - Fix a typo: applyPath -> applyPatch ([@fluxxu](https://api.github.com/users/fluxxu))[Commits](https://github.com/kpdecker/jsdiff/compare/v2.1.3...v2.2.0)",
          "standardVersion": [],
        },
        "provider": "changelog-diff",
      }
    `)
  })

  it('semver', async () => {
    const diff = await changelogd.fetchChangelog('semver', '7.0.0', '7.1.0')

    expect(diff).toMatchInlineSnapshot(`
      {
        "changelog": {
          "raw": {
            "changelog": "# changes log

      ## 7.0.0

      * Refactor module into separate files for better tree-shaking
      * Drop support for very old node versions, use const/let, \`=>\` functions,
        and classes.

      ## 6.3.0

      * Expose the token enum on the exports

      ## 6.2.0

      * Coerce numbers to strings when passed to semver.coerce()
      * Add \`rtl\` option to coerce from right to left

      ## 6.1.3

      * Handle X-ranges properly in includePrerelease mode

      ## 6.1.2

      * Do not throw when testing invalid version strings

      ## 6.1.1

      * Add options support for semver.coerce()
      * Handle undefined version passed to Range.test

      ## 6.1.0

      * Add semver.compareBuild function
      * Support \`*\` in semver.intersects

      ## 6.0

      * Fix \`intersects\` logic.

          This is technically a bug fix, but since it is also a change to behavior
          that may require users updating their code, it is marked as a major
          version increment.

      ## 5.7

      * Add \`minVersion\` method

      ## 5.6

      * Move boolean \`loose\` param to an options object, with
        backwards-compatibility protection.
      * Add ability to opt out of special prerelease version handling with
        the \`includePrerelease\` option flag.

      ## 5.5

      * Add version coercion capabilities

      ## 5.4

      * Add intersection checking

      ## 5.3

      * Add \`minSatisfying\` method

      ## 5.2

      * Add \`prerelease(v)\` that returns prerelease components

      ## 5.1

      * Add Backus-Naur for ranges
      * Remove excessively cute inspection methods

      ## 5.0

      * Remove AMD/Browserified build artifacts
      * Fix ltr and gtr when using the \`*\` range
      * Fix for range \`*\` with a prerelease identifier
      ",
            "provider": "npm",
          },
          "resolved": "## 7.0.0

      * Refactor module into separate files for better tree-shaking
      * Drop support for very old node versions, use const/let, \`=>\` functions,
        and classes.",
          "standardVersion": [],
        },
        "provider": "changelog-diff",
      }
    `)
  })

  it('execa', async () => {
    const diff = await changelogd.fetchChangelog('execa', '6.0.0', '6.1.0')

    expect(diff).toMatchInlineSnapshot(`
      {
        "changelog": {
          "raw": [
            {
              "assets": [],
              "assets_url": "https://api.github.com/repos/sindresorhus/execa/releases/59429679/assets",
              "author": {
                "avatar_url": "https://avatars.githubusercontent.com/u/170270?v=4",
                "events_url": "https://api.github.com/users/sindresorhus/events{/privacy}",
                "followers_url": "https://api.github.com/users/sindresorhus/followers",
                "following_url": "https://api.github.com/users/sindresorhus/following{/other_user}",
                "gists_url": "https://api.github.com/users/sindresorhus/gists{/gist_id}",
                "gravatar_id": "",
                "html_url": "https://github.com/sindresorhus",
                "id": 170270,
                "login": "sindresorhus",
                "node_id": "MDQ6VXNlcjE3MDI3MA==",
                "organizations_url": "https://api.github.com/users/sindresorhus/orgs",
                "received_events_url": "https://api.github.com/users/sindresorhus/received_events",
                "repos_url": "https://api.github.com/users/sindresorhus/repos",
                "site_admin": false,
                "starred_url": "https://api.github.com/users/sindresorhus/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/sindresorhus/subscriptions",
                "type": "User",
                "url": "https://api.github.com/users/sindresorhus",
              },
              "body": "- Support [\`AbortController\`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) (#490)  c6e791a
      - Allow \`cwd\` and \`localDir\` options to be URLs (#492)  93ab929

      https://github.com/sindresorhus/execa/compare/v6.0.0...v6.1.0",
              "created_at": "2022-02-13T10:39:54Z",
              "draft": false,
              "html_url": "https://github.com/sindresorhus/execa/releases/tag/v6.1.0",
              "id": 59429679,
              "name": "",
              "node_id": "RE_kwDOAtRsxM4DitMv",
              "prerelease": false,
              "published_at": "2022-02-13T10:41:08Z",
              "reactions": {
                "+1": 0,
                "-1": 0,
                "confused": 0,
                "eyes": 0,
                "heart": 0,
                "hooray": 2,
                "laugh": 0,
                "rocket": 0,
                "total_count": 2,
                "url": "https://api.github.com/repos/sindresorhus/execa/releases/59429679/reactions",
              },
              "tag_name": "v6.1.0",
              "tarball_url": "https://api.github.com/repos/sindresorhus/execa/tarball/v6.1.0",
              "target_commitish": "main",
              "upload_url": "https://uploads.github.com/repos/sindresorhus/execa/releases/59429679/assets{?name,label}",
              "url": "https://api.github.com/repos/sindresorhus/execa/releases/59429679",
              "zipball_url": "https://api.github.com/repos/sindresorhus/execa/zipball/v6.1.0",
            },
          ],
          "resolved": "v6.1.0

      - Support [\`AbortController\`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) (#490)  c6e791a
      - Allow \`cwd\` and \`localDir\` options to be URLs (#492)  93ab929

      https://github.com/sindresorhus/execa/compare/v6.0.0...v6.1.0

      ---------------
      ",
          "url": "sindresorhus/execa",
        },
        "provider": "github-releases",
      }
    `)
  })
})
