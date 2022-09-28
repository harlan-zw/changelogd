<h1 align='center'>🪵 changelogd</h1>

<p align="center">
<a href='https://github.com/harlan-zw/changelogd/actions/workflows/ci.yml'>
<img src='https://github.com/harlan-zw/changelogd/actions/workflows/ci.yml/badge.svg' >
</a>
<a href="https://www.npmjs.com/package/changelogd" target="__blank"><img src="https://img.shields.io/npm/v/changelogd?color=2B90B6&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/changelogd" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/changelogd?color=349dbe&label="></a>
<br>
</p>

<p align="center">
Aggressively find a packages changelog (or releases) between versions.
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0" /><br>
<i>Status:</i> <b>Beta</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦</sub><br>
<img width="2000" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 🌳 Opportunistic API, multiple providers: filesystem, NPM, Github
- 🦭 Provide a diff of CHANGELOG's between versions, if found
- 🐱 Otherwise, fetch release notes straight from Github
- 📦 Minimal network requests with caching enabled

## Programmatic Usage

```ts
import { createChangelogd } from 'changelogd'

const changelogd = await createChangelogd({
  // options
})

const res = await changelogd.fetchChangelog('nuxt-windicss', '2.3.0', '2.4.0')
```

### Types

```ts
export interface Config {
  key?: string
  force?: boolean
  ttl?: number
  storage?: Storage
  cacheDir?: number
}
```

```ts
export interface ChangelogdCtx {
  config: Config

  resolveLocalChangelog: (id: string, opts?: ResolveOptions) => Promise<string>
  resolvePackageJSON: (id: string) => Promise<PackageJson>
  resolveChangelogFile: (name: string, version: string, options?: GithubFetchOptions) => Promise<Changelog>
  
  fetchChangelogFileDiff:  (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => Promise<FetchChangelogDiffResult>
  fetchGithubReleases:  (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => Promise<GithubReleasesResult>
  
  fetchChangelog:  (name: string, currentVersion: string, targetVersion: string, options?: GithubFetchOptions) => Promise<
    { provider: 'github-releases'; changelog: GithubReleasesResult } |
    { provider: 'changelog-diff'; changelog: FetchChangelogDiffResult }
  >
}
```


## CLI Usage

```sh
npx changelogd@latest <package> --from=<version> --to=<version>
```

**Arguments:**

- `package`: Package name to use. Should be the same as the package.json's name (NPM).
- `from`: The release tag to read from.
- `to`: The release tag to read to. **Default**: `latest`

### Example

**Fetching CHANGELOG.md from Github**

```sh
npx changelogd@latest ohmyfetch --from 0.4.0 --to 0.4.19
```

**Fetching CHANGELOG.md from NPM**

```sh
npx changelogd@latest consola --from 2.13.0 --to 2.15.0
```

**Fetching Github Releases**

```sh
npx changelogd@latest nuxt-windicss --from 2.3.0 --to 2.4.0
```


## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/harlan-zw/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/harlan-zw/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Harlan Wilton](https://github.com/harlan-zw)
