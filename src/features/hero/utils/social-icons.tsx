import { Github, Linkedin, Mail, LucideIcon } from 'lucide-react'
import { forwardRef } from 'react'

const TwitterIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)) as LucideIcon

TwitterIcon.displayName = 'TwitterIcon'

export function getIconForPlatform(platform: string): LucideIcon {
  const icons: Record<string, LucideIcon> = {
    github: Github,
    linkedin: Linkedin,
    twitter: TwitterIcon,
    email: Mail,
  }
  return icons[platform] || Mail
}