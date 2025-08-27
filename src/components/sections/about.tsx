'use client'

import { motion } from 'framer-motion'
import { Calendar, Award, Code } from 'lucide-react'
import { PersonalInfo, Experience, Achievement } from '@/types/portfolio'
import { fadeInUp, fadeInLeft, fadeInRight, viewportOptions } from '@/lib/animations'

interface AboutProps {
  personalInfo: PersonalInfo
  experiences: Experience[]
  achievements: Achievement[]
}

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
          {/* Professional Summary */}
          <motion.div {...fadeInLeft} viewport={viewportOptions} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              {personalInfo.bio.detailed.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const IconComponent = getIconComponent(achievement.icon)
                return (
                  <div key={achievement.label} className="p-4 rounded-lg bg-card border">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{achievement.label}</span>
                    </div>
                    <p className="text-2xl font-bold">{achievement.value}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Experience Timeline */}
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
        </div>
      </div>
    </section>
  )
}

interface ExperienceCardProps {
  experience: Experience
  isLast: boolean
}

function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className={`relative pl-8 pb-8 ${!isLast ? 'border-l-2 border-primary/30' : ''}`}>
      <div
        className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
          experience.current ? 'bg-primary' : 'bg-muted-foreground'
        }`}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <h4 className="font-semibold">{experience.title}</h4>
        {experience.current && (
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Current</span>
        )}
      </div>

      <p className="text-primary font-medium mb-1">{experience.company}</p>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <Calendar className="h-4 w-4" />
        <span>
          {experience.startDate} - {experience.endDate}
        </span>
      </div>

      <ul className="text-sm text-muted-foreground space-y-1">
        {experience.description.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}

function getIconComponent(iconName: string) {
  const icons = {
    Award,
    Code,
    Calendar,
  }
  return icons[iconName as keyof typeof icons] || Award
}
