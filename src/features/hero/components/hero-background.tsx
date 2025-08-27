'use client'

import { motion } from 'framer-motion'
import { blobAnimation } from '@/lib/animations'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        {...blobAnimation}
      />
      <motion.div
        className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        {...blobAnimation}
        transition={{ ...blobAnimation.transition, delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        {...blobAnimation}
        transition={{ ...blobAnimation.transition, delay: 4 }}
      />
    </div>
  )
}