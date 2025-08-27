import { getIconComponent } from '../utils/icons'
import type { AchievementCardProps } from '../types'

export function AchievementCard({ achievement }: AchievementCardProps) {
  const IconComponent = getIconComponent(achievement.icon)

  return (
    <div className="p-4 rounded-lg bg-card border">
      <div className="flex items-center gap-2 mb-2">
        <IconComponent className="h-5 w-5 text-primary" />
        <span className="font-semibold">{achievement.label}</span>
      </div>
      <p className="text-2xl font-bold">{achievement.value}</p>
      <p className="text-sm text-muted-foreground">{achievement.description}</p>
    </div>
  )
}
