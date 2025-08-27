import {
  personalInfo,
  experiences,
  achievements,
  skills,
  skillProficiencies,
  projects,
} from '@/config/portfolio'
import type {
  PersonalInfo,
  Experience,
  Achievement,
  Skill,
  SkillProficiency,
  Project,
} from '@/types/portfolio'

/**
 * Service layer for portfolio data operations
 * Centralizes data access and provides a clean API for components
 */
export class PortfolioService {
  // Personal Information
  static getPersonalInfo(): PersonalInfo {
    return personalInfo
  }

  // Experiences
  static getExperiences(): Experience[] {
    return experiences
  }

  static getCurrentExperience(): Experience | null {
    return experiences.find(exp => exp.current) || null
  }

  static getExperiencesByDateRange(startYear: number, endYear?: number): Experience[] {
    return experiences.filter(exp => {
      const start = new Date(exp.startDate).getFullYear()
      const end = exp.endDate ? new Date(exp.endDate).getFullYear() : new Date().getFullYear()
      
      if (endYear) {
        return start >= startYear && end <= endYear
      }
      return start >= startYear
    })
  }

  // Achievements
  static getAchievements(): Achievement[] {
    return achievements
  }

  static getAchievementByLabel(label: string): Achievement | null {
    return achievements.find(achievement => achievement.label === label) || null
  }

  // Skills
  static getSkills(): Skill[] {
    return skills
  }

  static getSkillsByCategory(category: string): Skill[] {
    return skills.filter(skill => skill.category === category)
  }

  static getSkillProficiencies(): SkillProficiency[] {
    return skillProficiencies
  }

  static getTopSkills(limit: number = 5): SkillProficiency[] {
    return skillProficiencies
      .sort((a, b) => b.level - a.level)
      .slice(0, limit)
  }

  // Projects
  static getProjects(): Project[] {
    return projects
  }

  static getFeaturedProjects(): Project[] {
    return projects.filter(project => project.featured)
  }

  static getProjectsByTechnology(technology: string): Project[] {
    return projects.filter(project => 
      project.technologies.includes(technology)
    )
  }

  static getProjectById(id: string): Project | null {
    return projects.find(project => project.id === id) || null
  }

  // Utility methods
  static getSkillsWithProficiency(): Array<Skill & { proficiency?: SkillProficiency }> {
    return skills.map(skill => {
      const proficiency = skillProficiencies.find(prof => 
        skill.technologies.some(tech => prof.name.includes(tech))
      )
      return { ...skill, proficiency }
    })
  }

  static searchContent(query: string): {
    skills: Skill[]
    projects: Project[]
    experiences: Experience[]
  } {
    const lowercaseQuery = query.toLowerCase()
    
    return {
      skills: skills.filter(skill => 
        skill.name.toLowerCase().includes(lowercaseQuery) ||
        skill.description.toLowerCase().includes(lowercaseQuery) ||
        skill.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
      ),
      projects: projects.filter(project =>
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
      ),
      experiences: experiences.filter(exp =>
        exp.title.toLowerCase().includes(lowercaseQuery) ||
        exp.company.toLowerCase().includes(lowercaseQuery) ||
        exp.description.some(desc => desc.toLowerCase().includes(lowercaseQuery))
      ),
    }
  }
}