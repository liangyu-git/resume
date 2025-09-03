/**
 * Theme System Animations
 * Centralized animation definitions and variants
 */

import { Variants } from 'framer-motion'

/**
 * Sun arc animation path coordinates
 */
export const SUN_ARC_PATH = {
  start: { x: -20, y: 15 },
  quarter: { x: -10, y: -5 },
  peak: { x: 0, y: -15 },
  threeQuarter: { x: 10, y: -5 },
  end: { x: 20, y: 15 },
}

/**
 * Moon arc animation path (reverse of sun)
 */
export const MOON_ARC_PATH = {
  start: { x: 20, y: 15 },
  quarter: { x: 10, y: -5 },
  peak: { x: 0, y: -15 },
  threeQuarter: { x: -10, y: -5 },
  end: { x: -20, y: 15 },
}

/**
 * Framer Motion variants for sun animation
 */
export const sunVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  arc: {
    x: [
      SUN_ARC_PATH.start.x,
      SUN_ARC_PATH.quarter.x,
      SUN_ARC_PATH.peak.x,
      SUN_ARC_PATH.threeQuarter.x,
      SUN_ARC_PATH.end.x,
    ],
    y: [
      SUN_ARC_PATH.start.y,
      SUN_ARC_PATH.quarter.y,
      SUN_ARC_PATH.peak.y,
      SUN_ARC_PATH.threeQuarter.y,
      SUN_ARC_PATH.end.y,
    ],
    rotate: [0, 45, 90, 135, 180],
    scale: [0.9, 1, 1.1, 1, 0.9],
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

/**
 * Framer Motion variants for moon animation
 */
export const moonVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: 180,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: -180,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  arc: {
    x: [
      MOON_ARC_PATH.start.x,
      MOON_ARC_PATH.quarter.x,
      MOON_ARC_PATH.peak.x,
      MOON_ARC_PATH.threeQuarter.x,
      MOON_ARC_PATH.end.x,
    ],
    y: [
      MOON_ARC_PATH.start.y,
      MOON_ARC_PATH.quarter.y,
      MOON_ARC_PATH.peak.y,
      MOON_ARC_PATH.threeQuarter.y,
      MOON_ARC_PATH.end.y,
    ],
    rotate: [180, 135, 90, 45, 0],
    scale: [0.9, 1, 1.1, 1, 0.9],
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

/**
 * Sky transition gradient keyframes
 */
export const skyGradientVariants: Variants = {
  dawn: {
    background: 'linear-gradient(135deg, hsl(39 100% 85%) 0%, hsl(45 100% 70%) 50%, hsl(51 100% 50%) 100%)',
  },
  noon: {
    background: 'linear-gradient(135deg, hsl(200 80% 60%) 0%, hsl(210 70% 50%) 50%, hsl(220 60% 40%) 100%)',
  },
  dusk: {
    background: 'linear-gradient(135deg, hsl(280 40% 30%) 0%, hsl(260 50% 25%) 50%, hsl(240 60% 20%) 100%)',
  },
  night: {
    background: 'linear-gradient(135deg, hsl(225 39% 8%) 0%, hsl(225 30% 15%) 50%, hsl(195 100% 50%) 100%)',
  },
}

/**
 * Atmospheric particle animations
 */
export const particleVariants: Variants = {
  float: {
    y: [-10, 10, -10],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  drift: {
    x: [0, 20, 0],
    y: [-5, 5, -5],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

/**
 * Cloud animation variants
 */
export const cloudVariants: Variants = {
  drift: {
    x: [0, 100, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  fade: {
    opacity: [0, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Bioluminescent effect variants
 */
export const bioluminescentVariants: Variants = {
  glow: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.1, 1],
    filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  pulse: {
    boxShadow: [
      '0 0 10px rgba(0, 191, 255, 0.3)',
      '0 0 20px rgba(0, 191, 255, 0.6)',
      '0 0 10px rgba(0, 191, 255, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Transition overlay animations
 */
export const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

/**
 * Generate stagger children animation
 */
export function staggerChildren(delay: number = 0.1): Variants {
  return {
    animate: {
      transition: {
        staggerChildren: delay,
      },
    },
  }
}

/**
 * Generate fade in animation with direction
 */
export function fadeInDirection(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 20
): Variants {
  const initialPosition = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }
  
  return {
    initial: {
      opacity: 0,
      ...initialPosition[direction],
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: {
      opacity: 0,
      ...initialPosition[direction],
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  }
}