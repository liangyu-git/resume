'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { createDelayedAnimation } from '@/lib/animations'
import { getIconForPlatform } from '../utils/social-icons'
import type { PersonalInfo } from '@/types/portfolio'

interface SocialLinksProps {
  social: PersonalInfo['social']
  name: string
}

export function SocialLinks({ social, name }: SocialLinksProps) {
  return (
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
            aria-label={`Visit ${name}'s ${link.platform} profile`}
          >
            <Icon className="h-5 w-5" />
          </Link>
        )
      })}
    </motion.div>
  )
}