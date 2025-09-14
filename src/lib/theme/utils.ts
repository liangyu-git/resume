/**
 * Theme System Utilities
 * Reusable functions for theme manipulation and color mapping
 */

import { LIGHT_COLORS, DARK_COLORS, THEME_CLASSES } from './constants'
import type { ThemeMode, SkillCategory, ProjectCategory, CategoryColorMap } from './types'

/**
 * Get color scheme based on theme mode
 */
export function getColorScheme(mode: ThemeMode) {
  return mode === 'dark' ? DARK_COLORS : LIGHT_COLORS
}

/**
 * Map skill categories to theme colors
 */
export function getSkillCategoryColors(
  category: SkillCategory,
  isDark: boolean = false
): CategoryColorMap {
  const opacity = isDark ? '30' : '25'
  const hoverOpacity = isDark ? '50' : '40'

  const colorMappings: Record<SkillCategory, CategoryColorMap> = {
    'machine-learning': {
      category: 'machine-learning',
      colors: {
        base: `primary/${opacity}`,
        hover: `primary/${hoverOpacity}`,
        border: `primary/${isDark ? '40' : '30'}`,
        text: 'primary',
        gradient: `from-primary/12 to-primary/20`,
      },
    },
    'computer-vision': {
      category: 'computer-vision',
      colors: {
        base: `warning/${opacity}`,
        hover: `warning/${hoverOpacity}`,
        border: `warning/${isDark ? '40' : '30'}`,
        text: 'warning',
        gradient: `from-warning/12 to-warning/20`,
      },
    },
    development: {
      category: 'development',
      colors: {
        base: `secondary/${opacity}`,
        hover: `secondary/${hoverOpacity}`,
        border: `secondary/${isDark ? '40' : '30'}`,
        text: 'secondary',
        gradient: `from-secondary/12 to-secondary/20`,
      },
    },
    tools: {
      category: 'tools',
      colors: {
        base: `accent/${isDark ? '40' : '25'}`,
        hover: `accent/${isDark ? '60' : '40'}`,
        border: `accent/${isDark ? '50' : '30'}`,
        text: 'accent',
        gradient: `from-accent/12 to-accent/20`,
      },
    },
    'soft-skills': {
      category: 'soft-skills',
      colors: {
        base: `success/${opacity}`,
        hover: `success/${hoverOpacity}`,
        border: `success/${isDark ? '40' : '30'}`,
        text: 'success',
        gradient: `from-success/12 to-success/20`,
      },
    },
  }

  return colorMappings[category]
}

/**
 * Map project technologies to theme colors
 */
export function getProjectCategoryColors(
  technologies: string[],
  isDark: boolean = false
): CategoryColorMap {
  const techStr = technologies.join(' ').toLowerCase()

  // Determine category based on technologies
  let category: ProjectCategory = 'other'

  if (techStr.match(/python|tensorflow|pytorch|opencv|ml|ai/)) {
    category = 'ai-ml'
  } else if (techStr.match(/react|next|vue|angular|frontend/)) {
    category = 'frontend'
  } else if (techStr.match(/node|express|django|backend|api/)) {
    category = 'backend'
  } else if (techStr.match(/docker|kubernetes|aws|cloud|devops/)) {
    category = 'devops'
  }

  const categoryColorMap: Record<ProjectCategory, CategoryColorMap> = {
    'ai-ml': getSkillCategoryColors('machine-learning', isDark),
    frontend: getSkillCategoryColors('development', isDark),
    backend: getSkillCategoryColors('soft-skills', isDark),
    devops: getSkillCategoryColors('tools', isDark),
    other: getSkillCategoryColors('machine-learning', isDark),
  }

  return categoryColorMap[category]
}

/**
 * Get project icon based on technology stack
 */
export function getProjectIcon(technologies: string[]): string {
  const techStr = technologies.join(' ').toLowerCase()

  if (techStr.match(/python|tensorflow|pytorch|opencv|ml|ai/)) return '🧠'
  if (techStr.match(/react|next|vue|angular|frontend/)) return '⚛️'
  if (techStr.match(/node|express|django|backend|api/)) return '🚀'
  if (techStr.match(/docker|kubernetes|aws|cloud|devops/)) return '☁️'

  return '💡'
}

/**
 * Build class names for themed components
 */
export function buildThemeClasses(
  base: string,
  options: {
    isDark?: boolean
    isTransitioning?: boolean
    useGPU?: boolean
  } = {}
): string {
  const classes = [base]

  if (options.isTransitioning) {
    classes.push(THEME_CLASSES.transitioning)
  }

  if (options.useGPU) {
    classes.push(THEME_CLASSES.gpuAccelerated)
  }

  return classes.filter(Boolean).join(' ')
}

/**
 * Calculate transition duration based on user preferences
 */
export function getTransitionDuration(base: number, reducedMotion: boolean): number {
  if (reducedMotion) {
    return Math.min(base * 0.2, 100) // Much faster for reduced motion
  }
  return base
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

/**
 * Debounce function for theme transitions
 */

export function debounce<T extends (..._args: never[]) => unknown>(
  func: T,
  wait: number
): (..._args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (..._args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      func(..._args)
    }, wait)
  }
}

/**
 * Generate CSS custom properties from color scheme
 */
export function generateCSSVariables(mode: ThemeMode): string {
  const colors = getColorScheme(mode)

  return Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join('\n')
}

/**
 * Format HSL color for CSS
 */
export function formatHSL(h: number, s: number, l: number): string {
  return `hsl(${h} ${s}% ${l}%)`
}

/**
 * Parse HSL string to components
 */
export function parseHSL(hsl: string): { h: number; s: number; l: number } | null {
  const match = hsl.match(/hsl\((\d+)\s+(\d+)%\s+(\d+)%\)/)

  if (!match) return null

  return {
    h: parseInt(match[1]),
    s: parseInt(match[2]),
    l: parseInt(match[3]),
  }
}

/**
 * Convert CategoryColorMap to legacy color format for components
 */
export function convertToLegacyColors(categoryColorMap: CategoryColorMap | undefined) {
  // Provide default colors as fallback
  const defaultColors = {
    base: 'muted/25',
    hover: 'muted/40',
    border: 'muted/30',
    text: 'muted-foreground',
    gradient: 'from-muted/12 to-muted/20',
  }

  const colors = categoryColorMap?.colors || defaultColors

  return {
    iconBg: `bg-${colors.base} group-hover:bg-${colors.hover}`,
    iconColor: `text-${colors.text}`,
    borderColor: `border-${colors.border} group-hover:border-${colors.hover}`,
    tagBg: `bg-${colors.base} text-${colors.text}`,
    gradient: `hover:bg-gradient-to-br hover:${colors.gradient || `from-${colors.base} to-${colors.hover}`}`,
  }
}
