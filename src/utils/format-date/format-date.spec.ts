import { describe, expect, it } from 'vitest'

import { formatDate } from './format-date.ts'

describe('formatDate()', () => {
  it('should pass < string date', () => {
    expect(formatDate('2024-01-20')).toBe('20.01.2024')
  })
  it('should return empty string', () => {
    // @ts-ignore
    expect(formatDate(formatDate())).toBe('')
  })
  it('should pass < number date', () => {
    expect(formatDate(1718881998916)).toBe('20.06.2024')
  })
  it('should pass < string timezone date', () => {
    expect(formatDate('2024-06-15T10:49:27.436Z')).toBe('15.06.2024')
  })
})
