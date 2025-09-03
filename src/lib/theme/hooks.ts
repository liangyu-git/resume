/**
 * Theme System Custom Hooks
 * Reusable React hooks for theme functionality
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTheme } from 'next-themes'
import { 
  ANIMATION_TIMINGS, 
  PERFORMANCE_DEFAULTS,
} from './constants'
import { 
  prefersReducedMotion, 
  debounce, 
  getTransitionDuration 
} from './utils'
import type { 
  ThemeTransitionState, 
  ThemeTransitionEvent, 
  ArcAnimationState 
} from './types'

/**
 * Hook for managing theme transitions with debouncing
 */
export function useThemeTransition(debounceMs: number = PERFORMANCE_DEFAULTS.transitionDebounce) {
  const { theme, setTheme } = useTheme()
  const [transitionState, setTransitionState] = useState<ThemeTransitionState>('idle')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionRef = useRef<NodeJS.Timeout | null>(null)
  
  const startTransition = useCallback(() => {
    setTransitionState('transitioning')
    setIsTransitioning(true)
    
    // Get transition duration based on user preferences
    const reducedMotion = prefersReducedMotion()
    const duration = getTransitionDuration(ANIMATION_TIMINGS.toggle.duration, reducedMotion)
    
    // Clear any existing transition
    if (transitionRef.current) {
      clearTimeout(transitionRef.current)
    }
    
    // Set completion timeout
    transitionRef.current = setTimeout(() => {
      setTransitionState('complete')
      setIsTransitioning(false)
      transitionRef.current = null
    }, duration)
  }, [])
  
  const toggleTheme = useCallback(
    debounce(() => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      
      // Emit transition event
      const event: ThemeTransitionEvent = {
        from: theme as 'light' | 'dark',
        to: newTheme,
        timestamp: Date.now(),
        duration: ANIMATION_TIMINGS.toggle.duration,
      }
      
      // Dispatch custom event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('theme-transition', { detail: event }))
      }
      
      startTransition()
      setTheme(newTheme)
    }, debounceMs),
    [theme, setTheme, startTransition, debounceMs]
  )
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (transitionRef.current) {
        clearTimeout(transitionRef.current)
      }
    }
  }, [])
  
  return {
    theme,
    toggleTheme,
    isTransitioning,
    transitionState,
  }
}

/**
 * Hook for sun/moon arc animation state
 */
export function useArcAnimation() {
  const [arcState, setArcState] = useState<ArcAnimationState>({
    isAnimating: false,
    direction: 'sunrise',
    progress: 0,
  })
  
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  
  const startAnimation = useCallback((direction: 'sunrise' | 'sunset') => {
    setArcState({
      isAnimating: true,
      direction,
      progress: 0,
    })
    
    startTimeRef.current = performance.now()
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) return
      
      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / ANIMATION_TIMINGS.arc.duration, 1)
      
      setArcState(prev => ({
        ...prev,
        progress,
      }))
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setArcState(prev => ({
          ...prev,
          isAnimating: false,
          progress: 1,
        }))
        startTimeRef.current = null
      }
    }
    
    animationFrameRef.current = requestAnimationFrame(animate)
  }, [])
  
  const stopAnimation = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    
    setArcState({
      isAnimating: false,
      direction: 'sunrise',
      progress: 0,
    })
    startTimeRef.current = null
  }, [])
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])
  
  return {
    arcState,
    startAnimation,
    stopAnimation,
  }
}

/**
 * Hook for theme-aware color values
 */
export function useThemeColors() {
  const { theme } = useTheme()
  const [colors, setColors] = useState<Record<string, string>>({})
  
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const computedStyle = getComputedStyle(document.documentElement)
    
    const colorVars = [
      'primary',
      'secondary',
      'accent',
      'success',
      'warning',
      'destructive',
      'muted',
      'background',
      'foreground',
      'border',
    ]
    
    const newColors: Record<string, string> = {}
    
    colorVars.forEach(varName => {
      const value = computedStyle.getPropertyValue(`--${varName}`).trim()
      if (value) {
        newColors[varName] = `hsl(${value})`
      }
    })
    
    setColors(newColors)
  }, [theme])
  
  return colors
}

/**
 * Hook for detecting theme changes
 * @param callback Function to call when theme changes
 */
export function useThemeChange(callback: (theme: string) => void) {
  const { theme } = useTheme()
  const previousThemeRef = useRef(theme)
  
  useEffect(() => {
    if (theme && theme !== previousThemeRef.current) {
      callback(theme)
      previousThemeRef.current = theme
    }
  }, [theme, callback])
}

/**
 * Hook for managing atmospheric effects
 */
export function useAtmosphericEffects() {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(true)
  const [effectsEnabled, setEffectsEnabled] = useState(true)
  
  useEffect(() => {
    const reducedMotion = prefersReducedMotion()
    setEffectsEnabled(!reducedMotion)
  }, [])
  
  useEffect(() => {
    // Listen for theme transition events
    const handleTransition = (event: CustomEvent<ThemeTransitionEvent>) => {
      setIsVisible(false)
      
      setTimeout(() => {
        setIsVisible(true)
      }, event.detail.duration * 0.5)
    }
    
    window.addEventListener('theme-transition' as keyof WindowEventMap, handleTransition as EventListener)
    
    return () => {
      window.removeEventListener('theme-transition' as keyof WindowEventMap, handleTransition as EventListener)
    }
  }, [])
  
  return {
    theme,
    isVisible,
    effectsEnabled,
  }
}

/**
 * Hook for performance monitoring
 */
export function useThemePerformance() {
  const [metrics, setMetrics] = useState({
    fps: 60,
    transitionTime: 0,
    lastTransition: null as Date | null,
  })
  
  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let rafId: number
    
    const measureFPS = (currentTime: number) => {
      frameCount++
      
      if (currentTime >= lastTime + 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
        }))
        
        frameCount = 0
        lastTime = currentTime
      }
      
      rafId = requestAnimationFrame(measureFPS)
    }
    
    rafId = requestAnimationFrame(measureFPS)
    
    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])
  
  return metrics
}