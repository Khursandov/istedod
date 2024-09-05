import { describe, expect, it } from 'vitest'

import { getFileUrl } from './get-file-url.ts'

describe('getFileUrl()', () => {
  const baseUrl = import.meta.env.VITE_APP_SERVER_URL as string
  it('should return valid url', () => {
    expect(getFileUrl('/some file.png')).toBe(baseUrl + '/some file.png')
  })
  it('should return full url itself', () => {
    expect(getFileUrl('https://picsum.photos')).toBe('https://picsum.photos')
  })
  it('should return invalid type itself', () => {
    // @ts-ignore
    expect(getFileUrl(undefined)).toBeUndefined()
  })
})
