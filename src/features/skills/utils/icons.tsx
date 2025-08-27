import { Brain, Eye, Zap, LucideIcon } from 'lucide-react'

export function getIconComponent(iconName: string): LucideIcon {
  const icons: Record<string, LucideIcon> = {
    Brain,
    Eye,
    Zap,
  }
  return icons[iconName] || Brain
}
