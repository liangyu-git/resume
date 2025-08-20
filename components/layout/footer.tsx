import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const getIconForPlatform = (platform: string) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,  
    twitter: Twitter,
    email: Mail
  }
  return icons[platform as keyof typeof icons] || Mail
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name.full}. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {personalInfo.social.map((link) => {
              const Icon = getIconForPlatform(link.platform)
              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Visit ${link.platform} profile`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}