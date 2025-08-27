'use client'

import { motion } from 'framer-motion'
import { createDelayedAnimation, viewportOptions } from '@/lib/animations'
import { getIconComponent } from '../utils/icons'
import type { SkillCardProps } from '../types'

export function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = getIconComponent(skill.icon)

  return (
    <motion.div
      {...createDelayedAnimation(index * 0.1)}
      viewport={viewportOptions}
      className="p-8 rounded-xl border bg-card hover:shadow-lg transition-all group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{skill.description}</p>
      </div>
    </motion.div>
  )
}