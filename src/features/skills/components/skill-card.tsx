'use client'

import { motion } from 'framer-motion'
import { getSkillCategoryColors, fadeInDirection, convertToLegacyColors } from '@/lib/theme'
import { getIconComponent } from '../utils/icons'
import type { SkillCardProps } from '../types'
import type { SkillCategory } from '@/lib/theme/types'

export function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = getIconComponent(skill.icon)
  const categoryColors = getSkillCategoryColors(skill.category as SkillCategory)
  const colors = convertToLegacyColors(categoryColors)

  return (
    <motion.div
      variants={fadeInDirection('up', 30)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`p-8 rounded-xl border bg-card hover:shadow-xl transition-all duration-300 group ${colors.borderColor} ${colors.gradient}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-all duration-300 ${colors.iconBg}`}>
          <IconComponent className={`h-6 w-6 ${colors.iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold">{skill.name}</h3>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${colors.tagBg}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
      </div>
    </motion.div>
  )
}
