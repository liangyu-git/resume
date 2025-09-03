'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/config/portfolio'

const getIconForPlatform = (platform: string) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail,
  }
  return icons[platform as keyof typeof icons] || Mail
}

const getPlatformColors = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return {
        hoverColor: 'hover:text-primary',
        bgGradient: 'group-hover:bg-gradient-to-r group-hover:from-primary/15 group-hover:to-primary/25',
        shadow: 'group-hover:shadow-primary/25'
      }
    case 'linkedin':
      return {
        hoverColor: 'hover:text-secondary',
        bgGradient: 'group-hover:bg-gradient-to-r group-hover:from-secondary/15 group-hover:to-secondary/25',
        shadow: 'group-hover:shadow-secondary/25'
      }
    case 'twitter':
      return {
        hoverColor: 'hover:text-accent',
        bgGradient: 'group-hover:bg-gradient-to-r group-hover:from-accent/15 group-hover:to-accent/25',
        shadow: 'group-hover:shadow-accent/25'
      }
    case 'email':
      return {
        hoverColor: 'hover:text-success',
        bgGradient: 'group-hover:bg-gradient-to-r group-hover:from-success/15 group-hover:to-success/25',
        shadow: 'group-hover:shadow-success/25'
      }
    default:
      return {
        hoverColor: 'hover:text-primary',
        bgGradient: 'group-hover:bg-gradient-to-r group-hover:from-primary/15 group-hover:to-primary/25',
        shadow: 'group-hover:shadow-primary/25'
      }
  }
}

export function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-sm">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-30" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-medium bg-gradient-to-r from-muted-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              © {new Date().getFullYear()} {personalInfo.name.full}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Built with passion and modern web technologies
            </p>
          </motion.div>

          <motion.div 
            className="flex space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {personalInfo.social.map((link, index) => {
              const Icon = getIconForPlatform(link.platform)
              const colors = getPlatformColors(link.platform)
              
              return (
                <motion.div
                  key={link.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.url}
                    target={link.platform !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl text-muted-foreground transition-all duration-300 ${colors.hoverColor} hover:shadow-lg ${colors.shadow} border border-transparent hover:border-muted/20`}
                    aria-label={`Visit ${link.platform} profile`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                    
                    {/* Dynamic background gradient */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 opacity-0 ${colors.bgGradient} -z-10`} />
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute top-4 left-4 w-1 h-1 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse animation-delay-150" />
        <div className="absolute top-6 right-1/3 w-0.5 h-0.5 bg-secondary/40 rounded-full animate-pulse animation-delay-300" />
      </div>
    </footer>
  )
}
