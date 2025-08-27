'use client'

import { motion } from 'framer-motion'
import { fadeInLeft, viewportOptions } from '@/lib/animations'
import { AchievementCard } from './achievement-card'
import type { PersonalInfo, Achievement } from '@/types/portfolio'

interface ProfessionalSummaryProps {
  personalInfo: PersonalInfo
  achievements: Achievement[]
}

export function ProfessionalSummary({ personalInfo, achievements }: ProfessionalSummaryProps) {
  return (
    <motion.div {...fadeInLeft} viewport={viewportOptions} className="space-y-6">
      <div className="prose prose-lg dark:prose-invert">
        {personalInfo.bio.detailed.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.label} achievement={achievement} />
        ))}
      </div>
    </motion.div>
  )
}