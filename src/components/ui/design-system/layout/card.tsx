'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'outlined' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  hover?: boolean
  animate?: boolean
}

const variantClasses = {
  default: 'bg-card border',
  outlined: 'border-2 border-border bg-transparent',
  elevated: 'bg-card shadow-lg border-0',
}

const sizeClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  variant = 'default',
  size = 'md',
  hover = false,
  animate = false,
}: CardProps) {
  const Component = animate ? motion.div : 'div'
  
  return (
    <Component
      className={cn(
        'rounded-xl',
        variantClasses[variant],
        sizeClasses[size],
        hover && 'hover:shadow-lg transition-all group cursor-pointer',
        className
      )}
    >
      {children}
    </Component>
  )
}