'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  useThemeTransition,
  useArcAnimation,
  sunVariants,
  moonVariants,
  THEME_CLASSES,
} from '@/lib/theme'

/**
 * Enhanced Theme Toggle Component
 * Provides cinematic sun/moon arc animation during theme transitions
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme, isTransitioning } = useThemeTransition()
  const { arcState, startAnimation } = useArcAnimation()

  const isDark = theme === 'dark'

  const handleToggle = () => {
    toggleTheme()
    startAnimation(isDark ? 'sunrise' : 'sunset')
  }

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during SSR/initial hydration
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        className={`
          relative h-10 w-10 rounded-full
          bg-gradient-to-br from-background/80 to-muted/60
          backdrop-blur-sm border border-border/50
          transition-all duration-200
          ${THEME_CLASSES.gpuAccelerated}
          overflow-hidden
        `}
        aria-label="Toggle theme"
      >
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="h-4 w-4" />
        </div>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      disabled={isTransitioning}
      className={`
        relative h-10 w-10 rounded-full
        bg-gradient-to-br from-background/80 to-muted/60
        backdrop-blur-sm border border-border/50
        hover:border-border hover:scale-105
        transition-all duration-200
        ${THEME_CLASSES.gpuAccelerated}
        overflow-hidden
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <SkyBackground isTransitioning={isTransitioning} isDark={isDark} />
      <CelestialBody isDark={isDark} isAnimating={arcState.isAnimating} />
      <TransitionGlow isVisible={isTransitioning} />

      <span className="sr-only">
        {isTransitioning
          ? 'Switching theme...'
          : isDark
            ? 'Switch to light mode'
            : 'Switch to dark mode'
        }
      </span>
    </Button>
  )
}

/**
 * Sky background that changes during transitions
 */
function SkyBackground({ 
  isTransitioning, 
  isDark 
}: { 
  isTransitioning: boolean
  isDark: boolean 
}) {
  return (
    <div 
      className={`
        absolute inset-0 rounded-full transition-all duration-800 
        ${isTransitioning 
          ? THEME_CLASSES.animateSkyTransition
          : isDark 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-sky-200 via-sky-100 to-amber-100'
        }
      `} 
    />
  )
}

/**
 * Sun or Moon with optional decorations
 */
function CelestialBody({ 
  isDark, 
  isAnimating 
}: { 
  isDark: boolean
  isAnimating: boolean 
}) {
  return (
    <div className="relative z-10 flex items-center justify-center w-full h-full">
      <AnimatePresence mode="wait">
        {!isDark ? (
          <motion.div
            key="sun"
            variants={sunVariants}
            initial="initial"
            animate={isAnimating ? "arc" : "animate"}
            exit="exit"
            className="relative"
          >
            <Sun 
              className={`
                h-4 w-4 text-amber-500 drop-shadow-sm 
                ${THEME_CLASSES.gpuAccelerated}
              `}
              style={{
                filter: isAnimating 
                  ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' 
                  : undefined
              }}
            />
            {!isAnimating && <SunRays />}
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={moonVariants}
            initial="initial"
            animate={isAnimating ? "arc" : "animate"}
            exit="exit"
            className="relative"
          >
            <Moon 
              className={`
                h-4 w-4 text-slate-300 drop-shadow-sm 
                ${THEME_CLASSES.gpuAccelerated}
              `}
              style={{
                filter: isAnimating 
                  ? 'drop-shadow(0 0 8px rgba(148, 163, 184, 0.6))' 
                  : undefined
              }}
            />
            {!isAnimating && <Stars />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Sun ray decorations
 */
function SunRays() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/2 w-0.5 h-1 bg-amber-400 -translate-x-1/2 -translate-y-2 opacity-60" />
      <div className="absolute bottom-0 left-1/2 w-0.5 h-1 bg-amber-400 -translate-x-1/2 translate-y-2 opacity-60" />
      <div className="absolute left-0 top-1/2 w-1 h-0.5 bg-amber-400 -translate-y-1/2 -translate-x-2 opacity-60" />
      <div className="absolute right-0 top-1/2 w-1 h-0.5 bg-amber-400 -translate-y-1/2 translate-x-2 opacity-60" />
    </div>
  )
}

/**
 * Star decorations around moon
 */
function Stars() {
  return (
    <div className="absolute inset-0">
      <div className="absolute -top-1 -right-1 w-0.5 h-0.5 bg-slate-400 rounded-full opacity-70" />
      <div className="absolute -bottom-0.5 -left-1 w-0.5 h-0.5 bg-slate-400 rounded-full opacity-50" />
      <div className="absolute top-1 -left-2 w-1 h-1 bg-slate-300 rounded-full opacity-40" />
    </div>
  )
}

/**
 * Transition glow effect
 */
function TransitionGlow({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 blur-sm"
    />
  )
}