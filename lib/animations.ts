import { AnimationVariant } from '@/types/portfolio'

// Common animation variants for consistent motion design
export const fadeInUp: AnimationVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeInLeft: AnimationVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export const fadeInRight: AnimationVariant = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export const fadeIn: AnimationVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export const scaleIn: AnimationVariant = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

// Stagger animation for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Viewport animation options
export const viewportOptions = {
  once: true,
  margin: '-50px'
}

// Custom animation factory
export const createDelayedAnimation = (delay: number): AnimationVariant => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
})

// Progress bar animation
export const progressBar = (width: string) => ({
  initial: { width: 0 },
  animate: { width },
  transition: { duration: 1, ease: 'easeInOut' }
})

// Blob animations
export const blobAnimation = {
  animate: {
    x: [0, 30, -20, 0],
    y: [0, -50, 20, 0],
    scale: [1, 1.1, 0.9, 1]
  },
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: 'linear'
  }
}