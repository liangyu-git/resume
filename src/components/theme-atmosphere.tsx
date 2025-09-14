'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  useAtmosphericEffects,
  particleVariants,
  cloudVariants,
  bioluminescentVariants,
  overlayVariants,
  THEME_CLASSES,
  Z_INDEX,
} from '@/lib/theme'

/**
 * Atmospheric Effects Component
 * Provides environmental animations based on theme
 */
export function ThemeAtmosphere() {
  const { theme, isVisible, effectsEnabled } = useAtmosphericEffects()

  if (!effectsEnabled) return null

  const isDark = theme === 'dark'

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: Z_INDEX.atmosphere }}
    >
      {/* Transition overlay */}
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`
              absolute inset-0 
              bg-gradient-to-br from-transparent via-primary/5 to-transparent 
              ${THEME_CLASSES.animateSkyTransition}
            `}
          />
        )}
      </AnimatePresence>

      {/* Light mode effects */}
      {!isDark && isVisible && <LightModeEffects />}

      {/* Dark mode effects */}
      {isDark && isVisible && <DarkModeEffects />}
    </div>
  )
}

/**
 * Light mode atmospheric effects
 */
function LightModeEffects() {
  return (
    <>
      {/* Floating clouds */}
      <motion.div
        variants={cloudVariants}
        animate="drift"
        className="absolute top-20 left-0 w-32 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl"
      />
      <motion.div
        variants={cloudVariants}
        animate="drift"
        style={{ animationDelay: '5s' }}
        className="absolute top-40 right-0 w-24 h-12 bg-gradient-to-l from-white/15 to-transparent rounded-full blur-xl"
      />

      {/* Sunbeam particles */}
      <SunbeamParticles />
    </>
  )
}

/**
 * Dark mode atmospheric effects
 */
function DarkModeEffects() {
  return (
    <>
      {/* Bioluminescent particles */}
      <BioluminescentParticles />

      {/* Star field */}
      <StarField />
    </>
  )
}

/**
 * Sunbeam particle effects for light mode
 */
function SunbeamParticles() {
  const particles = [
    { top: '20%', left: '15%', delay: 0, size: 'w-1 h-1' },
    { top: '40%', left: '70%', delay: 1, size: 'w-1.5 h-1.5' },
    { top: '60%', left: '40%', delay: 2, size: 'w-1 h-1' },
    { top: '30%', left: '85%', delay: 0.5, size: 'w-0.5 h-0.5' },
  ]

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={`sunbeam-${index}`}
          variants={particleVariants}
          animate="float"
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: `${particle.delay}s`,
          }}
          className={`
            absolute ${particle.size} 
            bg-gradient-to-br from-amber-300 to-yellow-200 
            rounded-full opacity-40 blur-sm
          `}
        />
      ))}
    </>
  )
}

/**
 * Bioluminescent particles for dark mode
 */
function BioluminescentParticles() {
  const particles = [
    { bottom: '30%', left: '25%', color: 'primary', delay: 0 },
    { bottom: '50%', right: '30%', color: 'secondary', delay: 2 },
    { bottom: '60%', left: '60%', color: 'accent', delay: 4 },
  ]

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={`bio-${index}`}
          variants={bioluminescentVariants}
          animate="glow"
          style={{
            bottom: particle.bottom,
            left: particle.left,
            right: particle.right,
            animationDelay: `${particle.delay}s`,
          }}
          className={`
            absolute w-2 h-2 
            bg-${particle.color} 
            rounded-full blur-sm 
            shadow-lg shadow-${particle.color}/50
          `}
        />
      ))}
    </>
  )
}

/**
 * Star field for dark mode
 */
function StarField() {
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          variants={particleVariants}
          animate="pulse"
          style={{
            left: `${(i * 83 + 17) % 100}%`,
            top: `${(i * 67 + 23) % 60}%`,
            animationDelay: `${i * 0.2}s`,
          }}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
        />
      ))}
    </div>
  )
}
