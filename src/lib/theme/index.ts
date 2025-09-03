/**
 * Theme System Module
 * Central export point for all theme functionality
 */

// Type exports
export type {
  ThemeMode,
  ThemeTransitionState,
  ColorScheme,
  ThemeAnimation,
  ArcAnimationState,
  CategoryColorMap,
  PerformanceConfig,
  ThemeConfig,
  ThemeTransitionEvent,
  SkillCategory,
  ProjectCategory,
  ThemedComponentProps,
} from './types'

// Constant exports
export {
  LIGHT_COLORS,
  DARK_COLORS,
  ANIMATION_TIMINGS,
  PERFORMANCE_DEFAULTS,
  THEME_CLASSES,
  Z_INDEX,
  BREAKPOINTS,
  TRANSITION_STAGES,
} from './constants'

// Utility exports
export {
  getColorScheme,
  getSkillCategoryColors,
  getProjectCategoryColors,
  getProjectIcon,
  buildThemeClasses,
  getTransitionDuration,
  prefersReducedMotion,
  debounce,
  generateCSSVariables,
  formatHSL,
  parseHSL,
  convertToLegacyColors,
} from './utils'

// Hook exports
export {
  useThemeTransition,
  useArcAnimation,
  useThemeColors,
  useThemeChange,
  useAtmosphericEffects,
  useThemePerformance,
} from './hooks'

// Animation exports
export {
  SUN_ARC_PATH,
  MOON_ARC_PATH,
  sunVariants,
  moonVariants,
  skyGradientVariants,
  particleVariants,
  cloudVariants,
  bioluminescentVariants,
  overlayVariants,
  staggerChildren,
  fadeInDirection,
} from './animations'

// Configuration exports
export {
  DEFAULT_THEME_CONFIG,
  ANIMATION_PRESETS,
  PERFORMANCE_PRESETS,
  THEME_CUSTOMIZATION,
  getThemeConfig,
  createAnimationConfig,
  getEnvironmentConfig,
} from './config'

// Provider exports
export {
  ThemeProvider,
  EnhancedThemeProvider,
  useThemeConfig,
} from './provider'