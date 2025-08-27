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
      <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
        <MapPin className="w-3 h-3 mr-2" />
        {title} @ {company}
      </span>
    </motion.div>
  )
}