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
<i>Status:</i> <b>Early Access</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦</sub><br>
<img width="2000" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 🌳 Opportunistic API, multiple resolvers: `npm-changelog`, `github-changelog`, `github-releases`
- 🦭 Provide a diff of CHANGELOG's between versions, if found  
- 🐱 Otherwise, fetch release notes straight from Github
- 📦 Minimal network requests with caching enabled

## CLI Usage

```sh
npx changelogd@latest <package> --from=<version> [--to=<version>]
```

**Arguments:**

- `package`: Package name to use. Should be the same as the package.json's name (NPM).
- `from`: The release tag to read from.
- `to`: The release tag to read to. **Default**: `latest`

### Example

```sh
npx changelogd@latest @antfu/eslint-config --from 0.20.0
```

## Node Usage

```ts
import { changelogd } from '@changelogd/core'

const fetchChangelogs = async () => {
  const res = await changelogd('@antfu/eslint-config', '0.20.0')
  return res.log
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/harlan-zw/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/harlan-zw/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [Harlan Wilton](https://github.com/harlan-zw)
