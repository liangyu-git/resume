'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createDelayedAnimation } from '@/lib/animations'

export function HeroCTA() {
  return (
    <motion.div
      {...createDelayedAnimation(0.4)}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
    >
      <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <Link href="#projects">
          <span className="relative z-10">View My Work</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="group border-2 border-primary/30 hover:border-secondary/50 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 hover:from-primary/10 hover:via-accent/10 hover:to-secondary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
        <Link href="/resume.pdf" target="_blank">
          <Download className="mr-2 h-4 w-4 text-secondary group-hover:text-accent transition-colors" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
            Download Resume
          </span>
        </Link>
      </Button>
    </motion.div>
  )
}
