'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef<Element | null>(null)

  const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        
        if (!hasBeenVisible && isElementIntersecting) {
          setHasBeenVisible(true)
        }

        if (!freezeOnceVisible || !hasBeenVisible) {
          setIsIntersecting(isElementIntersecting)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, root, rootMargin, freezeOnceVisible, hasBeenVisible])

  return {
    ref: elementRef,
    isIntersecting,
    hasBeenVisible,
  }
}