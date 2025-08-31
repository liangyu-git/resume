import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('base-class', 'additional-class')
    expect(result).toBe('base-class additional-class')
  })

  it('handles conditional classes', () => {
    const isHidden = false
    const isVisible = true
    const result = cn('base', isHidden && 'hidden', isVisible && 'visible')
    expect(result).toBe('base visible')
  })

  it('handles undefined and null values', () => {
    const result = cn('base', undefined, null, 'final')
    expect(result).toBe('base final')
  })

  it('merges Tailwind classes correctly', () => {
    // tailwind-merge should handle conflicts
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toBe('py-1 px-4')
  })

  it('handles arrays of classes', () => {
    const result = cn(['base', 'array'], 'additional')
    expect(result).toBe('base array additional')
  })

  it('handles objects with conditional classes', () => {
    const result = cn({
      'base-class': true,
      'hidden-class': false,
      'visible-class': true,
    })
    expect(result).toBe('base-class visible-class')
  })

  it('returns empty string for no arguments', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles complex combinations', () => {
    const result = cn(
      'base',
      ['array1', 'array2'],
      { conditional: true, hidden: false },
      undefined,
      'final'
    )
    expect(result).toBe('base array1 array2 conditional final')
  })
})
