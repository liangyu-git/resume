import { PersonalInfo, Experience, Achievement } from '@/types/portfolio'

export interface AboutProps {
  personalInfo: PersonalInfo
  experiences: Experience[]
  achievements: Achievement[]
}

export interface ExperienceCardProps {
  experience: Experience
  isLast: boolean
}

export interface AchievementCardProps {
  achievement: Achievement
}