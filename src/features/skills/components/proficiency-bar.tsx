'use client'

import { motion } from 'framer-motion'
import { progressBar, viewportOptions } from '@/lib/animations'
import type { ProficiencyBarProps } from '../types'

export function ProficiencyBar({ skill, delay }: ProficiencyBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-primary">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          {...progressBar(`${skill.level}%`)}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={viewportOptions}
          className="bg-primary h-2 rounded-full"
        />
      </div>
    </div>
  )
}