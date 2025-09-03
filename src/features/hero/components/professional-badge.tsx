'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { createDelayedAnimation } from '@/lib/animations'

interface ProfessionalBadgeProps {
  title: string
  company: string
}

export function ProfessionalBadge({ title, company }: ProfessionalBadgeProps) {
  return (
    <motion.div {...createDelayedAnimation(0.1)}>
      <span className="inline-flex items-center px-6 py-2.5 mb-6 text-sm font-semibold bg-gradient-to-r from-primary/15 via-accent/10 to-secondary/15 text-primary rounded-full border border-primary/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <MapPin className="w-4 h-4 mr-2.5 text-secondary" />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </span>
        <span className="mx-2 text-accent/60">@</span>
        <span className="text-foreground font-bold">{company}</span>
      </span>
    </motion.div>
  )
}
