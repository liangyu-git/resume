import { describe, it, expect, vi } from 'vitest'
import { PortfolioService } from '@/services/data/portfolio-service'

// Mock the config data
vi.mock('@/config/portfolio', () => ({
  personalInfo: {
    name: { full: 'Test Name', casual: 'Test', initials: 'TN' },
    email: 'test@example.com',
    title: 'Test Title',
    bio: { short: 'Test bio', detailed: ['Test detail'] },
  },
  experiences: [
    {
      id: '1',
      title: 'Current Role',
      company: 'Current Company',
      startDate: '2022-01',
      endDate: 'Present',
      current: true,
    },
    {
      id: '2',
      title: 'Past Role',
      company: 'Past Company',
      startDate: '2020-01',
      endDate: '2021-12',
    },
  ],
  achievements: [
    { icon: 'Trophy', value: '10+', label: 'Awards' },
    { icon: 'Star', value: '5', label: 'Stars' },
  ],
  skills: [
    { 
      id: 'machine-learning',
      category: 'machine-learning',
      name: 'Machine Learning',
      icon: 'Brain',
      description: 'Deep learning and neural networks',
      technologies: ['TensorFlow', 'PyTorch']
    },
    { 
      id: 'development',
      category: 'development',
      name: 'Development',
      icon: 'Code',
      description: 'Full-stack development',
      technologies: ['React', 'Node', 'Python']
    },
  ],
  skillProficiencies: [
    { name: 'JavaScript', level: 90, category: 'Languages' },
    { name: 'Python', level: 85, category: 'Languages' },
    { name: 'TypeScript', level: 88, category: 'Languages' },
  ],
  projects: [
    {
      id: 'proj1',
      title: 'Project 1',
      description: 'Description 1',
      featured: true,
      technologies: ['React', 'Node'],
    },
    {
      id: 'proj2',
      title: 'Project 2',
      description: 'Description 2',
      featured: false,
      technologies: ['Python'],
    },
  ],
  navigationItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
  ],
}))

describe('PortfolioService', () => {
  describe('Personal Information', () => {
    it('should return personal info', () => {
      const info = PortfolioService.getPersonalInfo()
      expect(info).toBeDefined()
      expect(info.name.full).toBe('Test Name')
      expect(info.email).toBe('test@example.com')
    })
  })

  describe('Experiences', () => {
    it('should return all experiences', () => {
      const experiences = PortfolioService.getExperiences()
      expect(Array.isArray(experiences)).toBe(true)
      expect(experiences).toHaveLength(2)
    })

    it('should return current experience', () => {
      const current = PortfolioService.getCurrentExperience()
      expect(current).toBeDefined()
      expect(current?.title).toBe('Current Role')
      expect(current?.current).toBe(true)
    })

    it('should filter experiences by date range', () => {
      const filtered = PortfolioService.getExperiencesByDateRange(2020, 2021)
      expect(filtered).toHaveLength(1)
      expect(filtered[0].title).toBe('Past Role')
    })
  })

  describe('Achievements', () => {
    it('should return all achievements', () => {
      const achievements = PortfolioService.getAchievements()
      expect(Array.isArray(achievements)).toBe(true)
      expect(achievements).toHaveLength(2)
    })

    it('should find achievement by label', () => {
      const achievement = PortfolioService.getAchievementByLabel('Awards')
      expect(achievement).toBeDefined()
      expect(achievement?.value).toBe('10+')
    })

    it('should return null for non-existent achievement', () => {
      const achievement = PortfolioService.getAchievementByLabel('NotFound')
      expect(achievement).toBeNull()
    })
  })

  describe('Skills', () => {
    it('should return all skills', () => {
      const skills = PortfolioService.getSkills()
      expect(Array.isArray(skills)).toBe(true)
      expect(skills).toHaveLength(2)
    })

    it('should filter skills by category', () => {
      const mlSkills = PortfolioService.getSkillsByCategory('machine-learning')
      expect(mlSkills).toHaveLength(1)
      expect(mlSkills[0].id).toBe('machine-learning')
    })

    it('should return skill proficiencies', () => {
      const proficiencies = PortfolioService.getSkillProficiencies()
      expect(Array.isArray(proficiencies)).toBe(true)
      expect(proficiencies).toHaveLength(3)
      expect(proficiencies[0].category).toBe('Languages')
    })

    it('should return top skills', () => {
      const topSkills = PortfolioService.getTopSkills(2)
      expect(Array.isArray(topSkills)).toBe(true)
      expect(topSkills.length).toBeGreaterThan(0)
    })
  })

  describe('Projects', () => {
    it('should return all projects', () => {
      const projects = PortfolioService.getProjects()
      expect(Array.isArray(projects)).toBe(true)
      expect(projects).toHaveLength(2)
    })

    it('should return featured projects', () => {
      const featured = PortfolioService.getFeaturedProjects()
      expect(featured).toHaveLength(1)
      expect(featured[0].featured).toBe(true)
    })

    it('should filter projects by technology', () => {
      const pythonProjects = PortfolioService.getProjectsByTechnology('Python')
      expect(pythonProjects).toHaveLength(1)
      expect(pythonProjects[0].id).toBe('proj2')
    })

    it('should find project by id', () => {
      const project = PortfolioService.getProjectById('proj1')
      expect(project).toBeDefined()
      expect(project?.title).toBe('Project 1')
    })

    it('should return null for non-existent project', () => {
      const project = PortfolioService.getProjectById('notfound')
      expect(project).toBeNull()
    })
  })

  describe('Combined Data', () => {
    it('should have getSkillsWithProficiency method', () => {
      expect(PortfolioService.getSkillsWithProficiency).toBeDefined()
    })
  })

  describe('Search', () => {
    it('should have searchContent method', () => {
      expect(PortfolioService.searchContent).toBeDefined()
    })
  })
})