import { describe, expect, it } from 'vitest'

import { urlToFilename } from './url-to-filename.ts'

describe('urlToFilename()', () => {
  it('should return valid filename', () => {
    expect(
      urlToFilename('https://somedomain.com/file/upload/Sample file name.png'),
    ).toBe('Sample file name.png')
  })
  it('should return undefined itself', () => {
    // @ts-ignore
    expect(urlToFilename(undefined)).toBeUndefined()
  })
  it('should return object itself', () => {
    const obj = { key: 'some value' }
    // @ts-ignore
    expect(urlToFilename(obj)).toStrictEqual(obj)
  })
  it('should return void', () => {
    // @ts-ignore
    expect(urlToFilename()).not.toBeDefined()
  })
})
