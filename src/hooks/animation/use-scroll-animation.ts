'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  once?: boolean
  margin?:
    | `${number}px`
    | `${number}px ${number}px`
    | `${number}px ${number}px ${number}px ${number}px`
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef(null)
  const { threshold = 0.1, once = true, margin = '0px' as const } = options

  const isInView = useInView(ref, {
    once,
    margin,
    amount: threshold,
  })

  return {
    ref,
    isInView,
    animate: isInView ? 'animate' : 'initial',
  }
}
