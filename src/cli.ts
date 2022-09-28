#!/usr/bin/env node
import consola from 'consola'
import mri from 'mri'
import { createChangelogd } from './'

async function main() {
  const args = mri(process.argv.splice(2))
  const pkgName = args._[0]
  const from = args.from
  const to = args.to || 'latest'

  if (!pkgName)
    throw new Error('You must provide a package name.')

  if (!from)
    throw new Error('You must provide a from version with --from <version>.')

  const logger = consola.create({ stdout: process.stderr }).withScope('changelogd')

  if (args.debug)
    logger.level = 5

  const changelogd = await createChangelogd()
  try {
    const changelog = await changelogd.fetchChangelog(pkgName, from, to)
    consola.log(`\n\n${changelog.changelog.resolved}\n\n`)
  }
  catch (e) {
    consola.error(e)
  }
}

main().catch(consola.error)
