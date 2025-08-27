'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOptions } from '@/lib/animations'
import { ProficiencyBar } from './proficiency-bar'
import type { SkillProficiency } from '@/types/portfolio'

interface TechnicalProficiencyProps {
  skillProficiencies: SkillProficiency[]
}

export function TechnicalProficiency({ skillProficiencies }: TechnicalProficiencyProps) {
  return (
    <motion.div {...fadeInUp} viewport={viewportOptions} className="bg-card rounded-xl border p-8">
      <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {skillProficiencies.slice(0, 2).map((skill, index) => (
            <ProficiencyBar key={skill.name} skill={skill} delay={index * 0.2} />
          ))}
        </div>
        <div className="space-y-4">
          {skillProficiencies.slice(2).map((skill, index) => (
            <ProficiencyBar key={skill.name} skill={skill} delay={(index + 2) * 0.2} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
