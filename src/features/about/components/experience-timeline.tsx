'use client'

import { motion } from 'framer-motion'
import { fadeInRight, viewportOptions } from '@/lib/animations'
import { ExperienceCard } from './experience-card'
import type { Experience } from '@/types/portfolio'

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <motion.div {...fadeInRight} viewport={viewportOptions} className="space-y-6">
      <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </motion.div>
  )
}
