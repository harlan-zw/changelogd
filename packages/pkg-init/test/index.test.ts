import { describe, expect, it } from 'vitest'
import { one, two } from '../src'

describe('should', () => {
  it('exported', () => {
    expect(one).toEqual(1)
    expect(one).not.toEqual(two)
    expect(two).toEqual(2)
  })
})
