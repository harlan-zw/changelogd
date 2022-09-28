import { diffLines } from 'diff'

export function addedLinesDiff(a: string, b: string): string {
  return diffLines(a, b)
    .filter(n => n.added)
    .map(n => n.value.trim())
    .join('')
}

export function standardVersionParser(changelog: string) {
  const partials = changelog.split(/(?=^#+ \[.*?])/gm)
  partials.shift()
  return partials
    .map((p) => {
      let version = ''
      let date = ''
      let body = ''
      const res = /^#+ \[([\d.]*)]\(.*?\) \(([\d-].*?)\)/gm.exec(p)
      if (res) {
        version = res[1]
        date = res[2]
      }
      const splitHeader = p.split(/(#+ \[[\d.]*]\(.*?\) \([\d-].*?\))/gm)
      if (splitHeader && splitHeader[2])
        body = splitHeader[2].trim()

      return {
        body,
        version,
        date,
      }
    })
}
