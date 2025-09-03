'use client'

import { motion } from 'framer-motion'
import { blobAnimation } from '@/lib/animations'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Sky to abyss gradient - adaptive background */}
      <div className="absolute inset-0 bg-[var(--gradient-sky)] opacity-20 dark:opacity-25" />
      
      {/* Light mode: Morning sky with gentle clouds */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/12 to-accent/8 dark:from-primary/20 dark:via-secondary/15 dark:to-accent/25" />
      
      {/* Floating clouds (light mode) / Deep currents (dark mode) */}
      <motion.div
        className="absolute top-20 -left-32 w-96 h-96 bg-primary rounded-full dark:rounded-none dark:rotate-45 mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
        {...blobAnimation}
        animate={{
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.2, 0.35, 0.15, 0.2],
          x: [0, 40, -20, 0],
          y: [0, -15, 8, 0],
          rotate: [0, 5, -3, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 -right-40 w-80 h-80 bg-secondary rounded-full dark:rounded-none dark:rotate-12 mix-blend-multiply filter blur-3xl opacity-25 dark:opacity-35"
        {...blobAnimation}
        animate={{
          scale: [1, 0.85, 1.3, 1],
          opacity: [0.25, 0.4, 0.18, 0.25],
          x: [0, -30, 25, 0],
          y: [0, 20, -12, 0],
          rotate: [0, -8, 4, 0]
        }}
        transition={{
          duration: 12,
          delay: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-20 left-1/4 w-88 h-88 bg-accent rounded-full dark:rounded-none dark:rotate-30 mix-blend-multiply filter blur-3xl opacity-18 dark:opacity-40"
        {...blobAnimation}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.18, 0.3, 0.12, 0.18],
          x: [0, 25, -35, 0],
          y: [0, -30, 18, 0],
          rotate: [0, 12, -6, 0]
        }}
        transition={{
          duration: 18,
          delay: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-1/4 w-72 h-72 bg-success rounded-full dark:rounded-none dark:rotate-45 mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-25"
        {...blobAnimation}
        animate={{
          scale: [1, 0.9, 1.2, 1],
          opacity: [0.15, 0.28, 0.1, 0.15],
          x: [0, -40, 18, 0],
          y: [0, 25, -20, 0],
          rotate: [0, -15, 8, 0]
        }}
        transition={{
          duration: 20,
          delay: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating elements: Sunbeams (light) / Bioluminescent particles (dark) */}
      <div className="absolute inset-0">
        {/* Light mode: Gentle sunbeams */}
        <motion.div 
          className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary/30 dark:bg-primary/50 rounded-full dark:shadow-lg dark:shadow-primary/30"
          animate={{ 
            y: [-8, 12, -8], 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-2/5 right-1/5 w-1.5 h-1.5 bg-secondary/35 dark:bg-secondary/60 rounded-full dark:shadow-lg dark:shadow-secondary/40"
          animate={{ 
            y: [12, -18, 12], 
            opacity: [0.35, 0.7, 0.35],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent/25 dark:bg-accent/70 rounded-full dark:shadow-xl dark:shadow-accent/50"
          animate={{ 
            y: [-18, 15, -18], 
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 12, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/8 w-2.5 h-2.5 bg-success/20 dark:bg-success/55 rounded-full dark:shadow-lg dark:shadow-success/40"
          animate={{ 
            y: [15, -10, 15], 
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.25, 1]
          }}
          transition={{ duration: 9, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-1/6 right-1/3 w-1 h-1 bg-warning/40 dark:bg-warning/80 rounded-full dark:shadow-md dark:shadow-warning/60"
          animate={{ 
            y: [8, -22, 8], 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
