import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cn } from '@/lib/utils'

// Simple unit tests for functions
describe('Utility Functions', () => {
  it('cn should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
    expect(cn('foo', { bar: true })).toBe('foo bar')
    expect(cn('foo', { bar: false })).toBe('foo')
  })
})

// Removed Portfolio Service tests - they are now in tests/unit/services/portfolio-service.test.ts

// Test animations
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from '@/lib/animations'

describe('Animation Variants', () => {
  it('should have fadeIn animation', () => {
    expect(fadeIn).toBeDefined()
    expect(fadeIn.initial).toBeDefined()
    expect(fadeIn.animate).toBeDefined()
  })

  it('should have fadeInUp animation', () => {
    expect(fadeInUp).toBeDefined()
    expect(fadeInUp.initial).toBeDefined()
    expect(fadeInUp.animate).toBeDefined()
  })

  it('should have staggerContainer animation', () => {
    expect(staggerContainer).toBeDefined()
    expect(staggerContainer.animate).toBeDefined()
    expect(staggerContainer.animate.transition).toBeDefined()
    expect(staggerContainer.animate.transition.staggerChildren).toBe(0.1)
  })

  it('should have fadeInLeft animation', () => {
    expect(fadeInLeft).toBeDefined()
    expect(fadeInLeft.initial).toBeDefined()
    expect(fadeInLeft.animate).toBeDefined()
  })

  it('should have scaleIn animation', () => {
    expect(scaleIn).toBeDefined()
    expect(scaleIn.initial).toBeDefined()
    expect(scaleIn.animate).toBeDefined()
  })
})