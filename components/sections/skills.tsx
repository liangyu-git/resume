'use client'

import { motion } from 'framer-motion'
import { Brain, Eye, Zap } from 'lucide-react'
import { Skill, SkillProficiency } from '@/types/portfolio'
import { fadeInUp, createDelayedAnimation, progressBar, staggerContainer, viewportOptions } from '@/lib/animations'

interface SkillsProps {
  skills: Skill[]
  skillProficiencies: SkillProficiency[]
}

export function Skills({ skills, skillProficiencies }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          {...fadeInUp}
          viewport={viewportOptions}
          className="text-center mb-16"
        >
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

        {/* Technical Proficiency */}
        <motion.div
          {...fadeInUp}
          viewport={viewportOptions}
          className="bg-card rounded-xl border p-8"
        >
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
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: Skill
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
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
            <span 
              key={tech} 
              className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {skill.description}
        </p>
      </div>
    </motion.div>
  )
}

interface ProficiencyBarProps {
  skill: SkillProficiency
  delay: number
}

function ProficiencyBar({ skill, delay }: ProficiencyBarProps) {
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

function getIconComponent(iconName: string) {
  const icons = {
    Brain,
    Eye,
    Zap
  }
  return icons[iconName as keyof typeof icons] || Brain
}