'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOptions } from '@/lib/animations'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  background?: 'default' | 'secondary' | 'card'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const backgroundClasses = {
  default: '',
  secondary: 'bg-secondary/30',
  card: 'bg-card',
}

const sizeClasses = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-24',
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  background = 'default',
  size = 'lg',
  animate = true,
}: SectionProps) {
  const HeaderContent = animate ? motion.div : 'div'
  const headerProps = animate ? { ...fadeInUp, viewport: viewportOptions } : {}

  return (
    <section
      id={id}
      className={cn(
        sizeClasses[size],
        'px-4 sm:px-6 lg:px-8',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">
        {(title || subtitle) && (
          <HeaderContent {...headerProps} className="text-center mb-16">
            {title && <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
            )}
          </HeaderContent>
        )}
        {children}
      </div>
    </section>
  )
}
