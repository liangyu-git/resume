'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Project } from '@/types/portfolio'
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations'
import { getProjectCategoryColors, getProjectIcon, fadeInDirection } from '@/lib/theme'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div {...fadeInUp} viewport={viewportOptions} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative AI and computer vision solutions I've developed
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors = getProjectCategoryColors(project.technologies)
  const projectIcon = getProjectIcon(project.technologies)

  // Convert CategoryColorMap to expected format
  const colors = {
    gradient: `bg-gradient-to-br from-${categoryColors.colors.base} via-${categoryColors.colors.hover} to-${categoryColors.colors.hover}`,
    border: `border-${categoryColors.colors.border} group-hover:border-${categoryColors.colors.hover}`,
    shadow: `group-hover:shadow-${categoryColors.colors.text}/30`,
    iconBg: `bg-gradient-to-br from-${categoryColors.colors.base} to-${categoryColors.colors.hover}`,
    tagColor: categoryColors.colors.text,
  }

  return (
    <motion.div
      variants={fadeInDirection('up', 30)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300 group ${colors.border} ${colors.shadow}`}
    >
      {/* Project Image with Dynamic Gradient */}
      <div
        className={`aspect-video ${colors.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <div
          className={`absolute inset-0 ${colors.iconBg} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
        />
        <motion.div
          className="text-4xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 relative z-10"
          role="img"
          aria-label="Project preview"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {projectIcon}
        </motion.div>
        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-150" />
          <div className="absolute bottom-6 left-8 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-300" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default bg-${categoryColors.colors.base} text-${colors.tagColor} border border-${categoryColors.colors.border} hover:bg-${categoryColors.colors.hover}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="group/btn hover:scale-105 transition-all duration-200 border-muted-foreground/20 hover:border-muted-foreground/40"
            >
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                Code
              </Link>
            </Button>
          )}

          {project.demo && (
            <Button
              size="sm"
              asChild
              className="group/btn bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
