/**
 * Theme System Type Definitions
 * Provides comprehensive type safety for the theme architecture
 */

export type ThemeMode = 'light' | 'dark'
export type ThemeTransitionState = 'idle' | 'transitioning' | 'complete'

/**
 * Color scheme definition for consistent theming
 */
export interface ColorScheme {
  primary: string
  secondary: string
  accent: string
  success: string
  warning: string
  destructive: string
  muted: string
  background: string
  foreground: string
  border: string
}

/**
 * Animation configuration for theme transitions
 */
export interface ThemeAnimation {
  duration: number
  easing: string | number[]
  delay?: number
}

/**
 * Sun/Moon arc animation states
 */
export interface ArcAnimationState {
  isAnimating: boolean
  direction: 'sunrise' | 'sunset'
  progress: number
}

/**
 * Category-based color mapping
 */
export interface CategoryColorMap {
  category: string
  colors: {
    base: string
    hover: string
    border: string
    text: string
    gradient?: string
  }
}

/**
 * Performance optimization settings
 */
export interface PerformanceConfig {
  useGPUAcceleration: boolean
  reducedMotion: boolean
  transitionDebounce: number
}

/**
 * Complete theme configuration
 */
export interface ThemeConfig {
  mode: ThemeMode
  colors: {
    light: ColorScheme
    dark: ColorScheme
  }
  animations: {
    toggle: ThemeAnimation
    arc: ThemeAnimation
    atmosphere: ThemeAnimation
  }
  performance: PerformanceConfig
}

/**
 * Theme transition event
 */
export interface ThemeTransitionEvent {
  from: ThemeMode
  to: ThemeMode
  timestamp: number
  duration: number
}

/**
 * Skill/Project category types
 */
export type SkillCategory = 'machine-learning' | 'development' | 'tools' | 'soft-skills'
export type ProjectCategory = 'ai-ml' | 'frontend' | 'backend' | 'devops' | 'other'

/**
 * Theme-aware component props
 */
export interface ThemedComponentProps {
  theme?: ThemeMode
  isTransitioning?: boolean
  className?: string
}