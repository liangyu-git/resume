import { PersonalInfo } from '@/types/portfolio'

export interface HeroProps {
  personalInfo: PersonalInfo
}

export interface SocialIconProps {
  platform: string
  url: string
  name: string
}