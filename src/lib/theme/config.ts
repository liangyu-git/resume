/**
 * Theme System Configuration
 * Centralized configuration for themes, animations, and performance
 */

import type { ThemeConfig, ThemeAnimation } from './types'

/**
 * Animation presets for different use cases
 */
export const ANIMATION_PRESETS = {
  fast: {
    duration: 200,
    easing: [0.23, 1, 0.32, 1] as const,
  },
  normal: {
    duration: 300,
    easing: [0.23, 1, 0.32, 1] as const,
  },
  slow: {
    duration: 500,
    easing: [0.23, 1, 0.32, 1] as const,
  },
  smooth: {
    duration: 800,
    easing: [0.23, 1, 0.32, 1] as const,
  },
} as const satisfies Record<string, ThemeAnimation>

/**
 * Default theme configuration
 */
export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  mode: 'light',
  colors: {
    light: {
      primary: '207 44% 49%',
      secondary: '214 41% 78%',
      accent: '51 100% 50%',
      success: '120 93% 79%',
      warning: '39 100% 50%',
      destructive: '0 84% 60%',
      muted: '210 40% 92%',
      background: '208 100% 97%',
      foreground: '215 25% 27%',
      border: '210 30% 88%',
    },
    dark: {
      primary: '195 100% 50%',
      secondary: '174 72% 56%',
      accent: '180 100% 27%',
      success: '160 100% 75%',
      warning: '43 74% 49%',
      destructive: '0 65% 60%',
      muted: '225 25% 18%',
      background: '225 39% 8%',
      foreground: '180 25% 88%',
      border: '225 20% 20%',
    },
  },
  animations: {
    toggle: ANIMATION_PRESETS.normal,
    arc: ANIMATION_PRESETS.smooth,
    atmosphere: ANIMATION_PRESETS.slow,
  },
  performance: {
    useGPUAcceleration: true,
    reducedMotion: false,
    transitionDebounce: 100,
  },
}

/**
 * Get theme configuration with overrides
 */
export function getThemeConfig(overrides?: Partial<ThemeConfig>): ThemeConfig {
  if (!overrides) return DEFAULT_THEME_CONFIG

  return {
    ...DEFAULT_THEME_CONFIG,
    ...overrides,
    colors: {
      ...DEFAULT_THEME_CONFIG.colors,
      ...overrides.colors,
    },
    animations: {
      ...DEFAULT_THEME_CONFIG.animations,
      ...overrides.animations,
    },
    performance: {
      ...DEFAULT_THEME_CONFIG.performance,
      ...overrides.performance,
    },
  }
}

/**
 * Animation configuration factory
 */
export function createAnimationConfig(
  preset: keyof typeof ANIMATION_PRESETS,
  overrides?: Partial<ThemeAnimation>
): ThemeAnimation {
  return {
    ...ANIMATION_PRESETS[preset],
    ...overrides,
  }
}

/**
 * Performance configuration presets
 */
export const PERFORMANCE_PRESETS = {
  high: {
    useGPUAcceleration: true,
    reducedMotion: false,
    transitionDebounce: 50,
  },
  balanced: {
    useGPUAcceleration: true,
    reducedMotion: false,
    transitionDebounce: 100,
  },
  low: {
    useGPUAcceleration: false,
    reducedMotion: true,
    transitionDebounce: 200,
  },
} as const

/**
 * Theme customization utilities
 */
export const THEME_CUSTOMIZATION = {
  /**
   * Sky theme variations
   */
  skyThemes: {
    dawn: {
      primary: '39 100% 85%', // Dawn orange
      secondary: '45 100% 70%', // Golden yellow
      accent: '51 100% 50%', // Bright gold
    },
    noon: {
      primary: '200 80% 60%', // Sky blue
      secondary: '210 70% 50%', // Deeper blue
      accent: '220 60% 40%', // Navy
    },
    dusk: {
      primary: '280 40% 30%', // Purple
      secondary: '260 50% 25%', // Deep purple
      accent: '240 60% 20%', // Dark purple
    },
  },

  /**
   * Sea theme variations
   */
  seaThemes: {
    shallow: {
      primary: '174 72% 56%', // Turquoise
      secondary: '180 100% 27%', // Teal
      accent: '160 100% 75%', // Aquamarine
    },
    deep: {
      primary: '195 100% 50%', // Deep sky blue
      secondary: '180 100% 40%', // Dark cyan
      accent: '174 100% 30%', // Deep teal
    },
    abyss: {
      primary: '225 100% 25%', // Very dark blue
      secondary: '220 80% 15%', // Almost black blue
      accent: '200 60% 10%', // Abyssal blue
    },
  },
} as const

/**
 * Environment-based configuration
 */
export function getEnvironmentConfig(): Partial<ThemeConfig> {
  if (typeof window === 'undefined') {
    return { performance: PERFORMANCE_PRESETS.balanced }
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Check for low-end devices (rough heuristic)
  const isLowEndDevice = navigator.hardwareConcurrency <= 4

  if (prefersReducedMotion || isLowEndDevice) {
    return { performance: PERFORMANCE_PRESETS.low }
  }

  return { performance: PERFORMANCE_PRESETS.high }
}
