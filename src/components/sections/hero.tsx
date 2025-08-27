'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PersonalInfo } from '@/types/portfolio'
import { fadeInUp, createDelayedAnimation, blobAnimation } from '@/lib/animations'

interface HeroProps {
  personalInfo: PersonalInfo
}

export function Hero({ personalInfo }: HeroProps) {
  const { name, title, company, bio, social } = personalInfo

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <motion.div
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          {...blobAnimation}
        />
        <motion.div
          className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          {...blobAnimation}
          transition={{ ...blobAnimation.transition, delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          {...blobAnimation}
          transition={{ ...blobAnimation.transition, delay: 4 }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div {...fadeInUp} className="text-center space-y-8 pb-16 md:pb-8">
          {/* Professional Badge */}
          <motion.div {...createDelayedAnimation(0.1)}>
            <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              <MapPin className="w-3 h-3 mr-2" />
              {title} @ {company}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            {...createDelayedAnimation(0.2)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {name.casual}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...createDelayedAnimation(0.3)}
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            {bio.short}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...createDelayedAnimation(0.4)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div {...createDelayedAnimation(0.5)} className="flex justify-center gap-4 pt-4">
            {social.map((link) => {
              const Icon = getIconForPlatform(link.platform)
              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== 'email' ? '_blank' : undefined}
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-105"
                  title={`${link.platform} Profile`}
                  aria-label={`Visit ${name.casual}'s ${link.platform} profile`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function getIconForPlatform(platform: string) {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    twitter: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    email: Mail,
  }
  return icons[platform as keyof typeof icons] || Mail
}
