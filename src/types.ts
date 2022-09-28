export type PkgJsonRepository = string | {
  type?: 'git'
  url?: string
  directory?: string
}

export interface PkgJson {
  name: string
  version: string
  repository?: PkgJsonRepository
}

export interface Package {
  name: string
  version: string
  repository?: PkgJsonRepository
}
