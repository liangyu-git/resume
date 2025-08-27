'use client'

import { motion } from 'framer-motion'
import { fadeInUp, createDelayedAnimation } from '@/lib/animations'
import { HeroBackground } from './hero-background'
import { ProfessionalBadge } from './professional-badge'
import { HeroCTA } from './hero-cta'
import { SocialLinks } from './social-links'

interface HeroPresenterProps {
  name: {
    casual: string
    full: string
  }
  title: string
  company: string
  bio: {
    short: string
  }
  social: Array<{
    platform: 'email' | 'github' | 'linkedin' | 'twitter'
    url: string
  }>
}

export function HeroPresenter({ name, title, company, bio, social }: HeroPresenterProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <HeroBackground />

      <div className="container mx-auto max-w-7xl">
        <motion.div {...fadeInUp} className="text-center space-y-8 pb-16 md:pb-8">
          <ProfessionalBadge title={title} company={company} />

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

          <HeroCTA />
          <SocialLinks social={social} name={name.casual} />
        </motion.div>
      </div>
    </section>
  )
}