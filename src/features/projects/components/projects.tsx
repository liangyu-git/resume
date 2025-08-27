'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Project } from '@/types/portfolio'
import {
  fadeInUp,
  createDelayedAnimation,
  staggerContainer,
  viewportOptions,
} from '@/lib/animations'

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
  return (
    <motion.div
      {...createDelayedAnimation(index * 0.1)}
      viewport={viewportOptions}
      className="bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all group"
    >
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
        <div className="text-4xl opacity-50" role="img" aria-label="Project preview">
          🤖
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.github && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1" />
                Code
              </Link>
            </Button>
          )}

          {project.demo && (
            <Button size="sm" asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
