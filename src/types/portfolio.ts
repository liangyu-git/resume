// Type definitions for the portfolio website

export interface PersonalInfo {
  name: {
    full: string
    casual: string
    initials: string
  }
  title: string
  company: string
  location: string
  email: string
  bio: {
    short: string
    detailed: string[]
  }
  social: SocialLink[]
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email'
  url: string
  username?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  startDate: string
  endDate: string | 'Present'
  current: boolean
  description: string[]
}

export interface Skill {
  id: string
  category: 'machine-learning' | 'computer-vision' | 'development'
  name: string
  icon: string
  description: string
  technologies: string[]
}

export interface SkillProficiency {
  name: string
  level: number // 0-100
  category: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  github?: string
  demo?: string
  featured: boolean
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface Achievement {
  label: string
  value: string
  description: string
  icon: string
}

export interface NavigationItem {
  href: string
  label: string
}

// Remove custom animation types - use Framer Motion types directly
