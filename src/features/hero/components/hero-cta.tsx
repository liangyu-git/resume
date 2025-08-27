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
  )
}