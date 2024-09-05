import { describe, expect, it } from 'vitest'

import { formatPhone } from './format-phone.ts'

describe('formatPhone()', () => {
  it('should return valid phone', () => {
    expect(formatPhone('90 240-00-25')).toBe('+998902400025')
  })
  it('should return valid phone', () => {
    expect(formatPhone('+998 90   240-(00-00)')).toBe('+998902400000')
  })
  it('should return undefined', () => {
    // @ts-ignore
    expect(formatPhone(undefined)).toBeUndefined()
  })
  it('should return null', () => {
    // @ts-ignore
    expect(formatPhone(null)).toBeNull()
  })
})
