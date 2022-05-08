#!/usr/bin/env node
import consola from 'consola'
import mri from 'mri'
import { changelogd } from '@changelogd/core'

async function main() {
  const args = mri(process.argv.splice(2))
  const pkgName = args._[0]
  const from = args.from

  if (!pkgName)
    throw new Error('You must provide a package name.')

  if (!from)
    throw new Error('You must provide a from version with --from <version>.')

  const logger = consola.create({ stdout: process.stderr }).withScope('changelogd')

  const res = await changelogd(pkgName, from, { ...args, logger })

  consola.log(`\n\n${res.log}\n\n`)
}

main().catch(consola.error)
