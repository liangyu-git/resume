'use client'

import { motion } from 'framer-motion'
import { progressBar, viewportOptions } from '@/lib/animations'
import type { ProficiencyBarProps } from '../types'

export function ProficiencyBar({ skill, delay }: ProficiencyBarProps) {
  // Sky/Sea theme color mapping based on skill category
  const getBarColors = (category: string) => {
    const categoryLower = (category || '').toLowerCase()
    switch (categoryLower) {
      case 'machine learning':
        return {
          textColor: 'text-primary dark:text-primary',
          barColor: 'bg-gradient-to-r from-primary/75 via-primary/85 to-primary shadow-primary/30 dark:shadow-primary/40',
          bgColor: 'bg-primary/20 dark:bg-primary/25'
        }
      case 'development':
        return {
          textColor: 'text-secondary dark:text-secondary',
          barColor: 'bg-gradient-to-r from-secondary/75 via-secondary/85 to-secondary shadow-secondary/30 dark:shadow-secondary/40',
          bgColor: 'bg-secondary/20 dark:bg-secondary/25'
        }
      case 'tools':
        return {
          textColor: 'text-accent dark:text-accent',
          barColor: 'bg-gradient-to-r from-accent/75 via-accent/85 to-accent shadow-accent/30 dark:shadow-accent/50',
          bgColor: 'bg-accent/20 dark:bg-accent/30'
        }
      case 'soft skills':
        return {
          textColor: 'text-success dark:text-success',
          barColor: 'bg-gradient-to-r from-success/75 via-success/85 to-success shadow-success/30 dark:shadow-success/40',
          bgColor: 'bg-success/20 dark:bg-success/25'
        }
      default:
        return {
          textColor: 'text-primary dark:text-primary',
          barColor: 'bg-gradient-to-r from-primary/75 via-primary/85 to-primary shadow-primary/30 dark:shadow-primary/40',
          bgColor: 'bg-primary/20 dark:bg-primary/25'
        }
    }
  }

  const colors = getBarColors(skill.category)

  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground group-hover:scale-105 transition-transform duration-200">{skill.name}</span>
        <span className={`text-sm font-bold ${colors.textColor} group-hover:scale-110 transition-all duration-200`}>{skill.level}%</span>
      </div>
      <div className={`w-full rounded-full h-3 ${colors.bgColor} shadow-inner transition-all duration-300`}>
        <motion.div
          {...progressBar(`${skill.level}%`)}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          viewport={viewportOptions}
          className={`h-3 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl ${colors.barColor}`}
        />
      </div>
    </div>
  )
}
