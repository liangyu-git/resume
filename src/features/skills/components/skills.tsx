'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { SkillCard } from './skill-card'
import { TechnicalProficiency } from './technical-proficiency'
import type { SkillsProps } from '../types'

export function Skills({ skills, skillProficiencies }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div {...fadeInUp} viewport={viewportOptions} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks I use to build intelligent systems
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </motion.div>

        <TechnicalProficiency skillProficiencies={skillProficiencies} />
      </div>
    </section>
  )
}