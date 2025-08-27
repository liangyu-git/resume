'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOptions } from '@/lib/animations'
import { ProfessionalSummary } from './professional-summary'
import { ExperienceTimeline } from './experience-timeline'
import type { AboutProps } from '../types'

export function About({ personalInfo, experiences, achievements }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div {...fadeInUp} viewport={viewportOptions} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about pushing the boundaries of AI and computer vision to solve real-world
            problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ProfessionalSummary personalInfo={personalInfo} achievements={achievements} />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  )
}
