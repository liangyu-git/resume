import { Skill, SkillProficiency } from '@/types/portfolio'

export interface SkillsProps {
  skills: Skill[]
  skillProficiencies: SkillProficiency[]
}

export interface SkillCardProps {
  skill: Skill
  index: number
}

export interface ProficiencyBarProps {
  skill: SkillProficiency
  delay: number
}
