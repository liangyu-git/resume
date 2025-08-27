import { Award, Code, Calendar, LucideIcon } from 'lucide-react'

export function getIconComponent(iconName: string): LucideIcon {
  const icons: Record<string, LucideIcon> = {
    Award,
    Code,
    Calendar,
  }
  return icons[iconName] || Award
}