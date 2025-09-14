'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { navigationItems, personalInfo } from '@/config/portfolio'

const navItems = navigationItems

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(`#${currentSection}`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="relative group text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent hover:from-secondary hover:via-primary hover:to-accent theme-transition-fast gpu-accelerated"
              >
                {personalInfo.name.initials}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium theme-transition-fast rounded-lg group gpu-accelerated',
                  activeSection === item.href
                    ? 'text-primary bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:via-accent/5 hover:to-secondary/5'
                )}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                    initial={{ scale: 0, x: '-50%' }}
                    animate={{ scale: 1, x: '-50%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
                {/* Hover indicator */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.button>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="ml-3 relative group inline-flex items-center justify-center rounded-lg p-2.5 text-muted-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent/5 hover:to-secondary/10 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-sm">
                <div className="space-y-2 px-4 pb-4 pt-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => handleNavClick(item.href)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        'relative group block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300',
                        activeSection === item.href
                          ? 'bg-gradient-to-r from-primary/15 via-accent/10 to-secondary/15 text-primary shadow-sm border border-primary/20'
                          : 'text-muted-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:via-accent/5 hover:to-secondary/5 hover:text-foreground border border-transparent hover:border-muted/20'
                      )}
                    >
                      {item.label}
                      {/* Active indicator for mobile */}
                      {activeSection === item.href && (
                        <motion.div
                          layoutId="activeSectionMobile"
                          className="absolute left-1 top-1/2 w-1 h-6 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"
                          initial={{ scale: 0, y: '-50%' }}
                          animate={{ scale: 1, y: '-50%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
