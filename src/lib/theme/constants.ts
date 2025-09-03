/**
 * Theme System Constants
 * Central repository for all theme-related constants
 */

import type { ColorScheme, ThemeAnimation, PerformanceConfig } from './types'

/**
 * Sky Theme - Light Mode Colors
 */
export const LIGHT_COLORS: ColorScheme = {
  primary: 'hsl(207 44% 49%)',        // Dawn blue #4682B4
  secondary: 'hsl(214 41% 78%)',      // Periwinkle #B0C4DE
  accent: 'hsl(51 100% 50%)',         // Golden sunrise #FFD700
  success: 'hsl(120 93% 79%)',        // Morning mint #98FB98
  warning: 'hsl(39 100% 50%)',        // Sunrise orange #FFA500
  destructive: 'hsl(0 84% 60%)',      // Sunset coral
  muted: 'hsl(210 40% 92%)',          // Light sky mist
  background: 'hsl(208 100% 97%)',    // Soft sky blue #F0F8FF
  foreground: 'hsl(215 25% 27%)',     // Dawn text
  border: 'hsl(210 30% 88%)',         // Sky border
}

/**
 * Deep Sea Abyss - Dark Mode Colors
 */
export const DARK_COLORS: ColorScheme = {
  primary: 'hsl(195 100% 50%)',       // Electric blue #00BFFF
  secondary: 'hsl(174 72% 56%)',      // Aqua luminescence #40E0D0
  accent: 'hsl(180 100% 27%)',        // Bioluminescent teal #008B8B
  success: 'hsl(160 100% 75%)',       // Sea foam glow #7FFFD4
  warning: 'hsl(43 74% 49%)',         // Deep amber #DAA520
  destructive: 'hsl(0 65% 60%)',      // Deep coral
  muted: 'hsl(225 25% 18%)',          // Deep current
  background: 'hsl(225 39% 8%)',      // Abyssal black #0B1426
  foreground: 'hsl(180 25% 88%)',     // Bioluminescent white
  border: 'hsl(225 20% 20%)',         // Abyss border
}

/**
 * Animation Timing Constants
 */
export const ANIMATION_TIMINGS: Record<string, ThemeAnimation> = {
  toggle: {
    duration: 800,
    easing: [0.23, 1, 0.32, 1], // Smooth ease-out
  },
  arc: {
    duration: 800,
    easing: [0.23, 1, 0.32, 1],
  },
  atmosphere: {
    duration: 1200,
    easing: [0.4, 0, 0.2, 1],
  },
  fast: {
    duration: 250,
    easing: [0.23, 1, 0.32, 1],
  },
  smooth: {
    duration: 400,
    easing: [0.23, 1, 0.32, 1],
  },
}

/**
 * Performance Optimization Defaults
 */
export const PERFORMANCE_DEFAULTS: PerformanceConfig = {
  useGPUAcceleration: true,
  reducedMotion: false,
  transitionDebounce: 100,
}

/**
 * CSS Class Names for Theme System
 */
export const THEME_CLASSES = {
  // Performance classes
  gpuAccelerated: 'gpu-accelerated',
  willChange: 'will-change-auto',
  
  // Transition classes
  transitionFast: 'theme-transition-fast',
  transitionSmooth: 'theme-transition-smooth',
  transitionColor: 'theme-transition-color',
  
  // Animation classes
  animateSunArc: 'animate-sun-arc',
  animateMoonArc: 'animate-moon-arc',
  animateSkyTransition: 'animate-sky-transition',
  
  // State classes
  transitioning: 'theme-transitioning',
  reducedMotion: 'reduce-motion',
} as const

/**
 * Z-index layers for proper stacking
 */
export const Z_INDEX = {
  atmosphere: 0,
  background: -10,
  content: 1,
  navigation: 50,
  modal: 100,
  tooltip: 200,
} as const

/**
 * Breakpoints for responsive theming
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Theme transition stages
 */
export const TRANSITION_STAGES = {
  IDLE: 'idle',
  PREPARING: 'preparing',
  ANIMATING: 'animating',
  COMPLETING: 'completing',
  COMPLETE: 'complete',
} as const