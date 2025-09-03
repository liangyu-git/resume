import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from '@/features/skills/components/skills'
import { SkillCard } from '@/features/skills/components/skill-card'
import { TechnicalProficiency } from '@/features/skills/components/technical-proficiency'
import { ProficiencyBar } from '@/features/skills/components/proficiency-bar'
import type { Skill, SkillProficiency } from '@/types/portfolio'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock icon component since we're using dynamic icons
vi.mock('@/features/skills/utils/icons', () => ({
  getIconComponent: (name: string) => {
    return ({ className }: { className?: string }) => (
      <div data-testid={`icon-${name}`} className={className}>
        {name} Icon
      </div>
    )
  },
}))

// Mock data
const mockSkills: Skill[] = [
  {
    id: 'machine-learning',
    category: 'machine-learning',
    name: 'Machine Learning',
    icon: 'Brain',
    description: 'Deep learning, neural networks, model optimization',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
  },
  {
    id: 'development',
    category: 'development',
    name: 'Development',
    icon: 'Code2',
    description: 'Full-stack development, API design',
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
]

const mockSkillProficiencies: SkillProficiency[] = [
  {
    name: 'Python & ML Frameworks',
    level: 95,
    category: 'Machine Learning',
  },
  {
    name: 'Full-Stack Development',
    level: 85,
    category: 'Development',
  },
]

describe('Skills Components', () => {
  describe('Skills', () => {
    it('should render the skills section', () => {
      render(<Skills skills={mockSkills} skillProficiencies={mockSkillProficiencies} />)
      expect(screen.getByText(/Skills & Technologies/i)).toBeInTheDocument()
    })

    it('should render skill categories', () => {
      render(<Skills skills={mockSkills} skillProficiencies={mockSkillProficiencies} />)
      expect(screen.getByText('Machine Learning')).toBeInTheDocument()
      expect(screen.getByText('Development')).toBeInTheDocument()
    })

    it('should render technical proficiency section', () => {
      render(<Skills skills={mockSkills} skillProficiencies={mockSkillProficiencies} />)
      expect(screen.getByText('Technical Proficiency')).toBeInTheDocument()
    })
  })

  describe('SkillCard', () => {
    const mockSkill = mockSkills[0]

    it('should render skill name', () => {
      render(<SkillCard skill={mockSkill} index={0} />)
      expect(screen.getByText('Machine Learning')).toBeInTheDocument()
    })

    it('should render description', () => {
      render(<SkillCard skill={mockSkill} index={0} />)
      expect(
        screen.getByText('Deep learning, neural networks, model optimization')
      ).toBeInTheDocument()
    })

    it('should render all technologies', () => {
      render(<SkillCard skill={mockSkill} index={0} />)
      expect(screen.getByText('TensorFlow')).toBeInTheDocument()
      expect(screen.getByText('PyTorch')).toBeInTheDocument()
      expect(screen.getByText('Scikit-learn')).toBeInTheDocument()
    })
  })

  describe('TechnicalProficiency', () => {
    it('should render section title', () => {
      render(<TechnicalProficiency skillProficiencies={mockSkillProficiencies} />)
      expect(screen.getByText('Technical Proficiency')).toBeInTheDocument()
    })

    it('should render proficiency items', () => {
      render(<TechnicalProficiency skillProficiencies={mockSkillProficiencies} />)
      expect(screen.getByText('Python & ML Frameworks')).toBeInTheDocument()
      expect(screen.getByText('Full-Stack Development')).toBeInTheDocument()
    })

    it('should display correct proficiency levels', () => {
      render(<TechnicalProficiency skillProficiencies={mockSkillProficiencies} />)
      expect(screen.getByText('95%')).toBeInTheDocument()
      expect(screen.getByText('85%')).toBeInTheDocument()
    })
  })

  describe('ProficiencyBar', () => {
    const mockSkillItem = {
      name: 'Test Skill',
      level: 75,
    }

    it('should render skill name and level', () => {
      render(<ProficiencyBar skill={mockSkillItem} />)
      expect(screen.getByText('Test Skill')).toBeInTheDocument()
      expect(screen.getByText('75%')).toBeInTheDocument()
    })

    it('should render progress bar with correct structure', () => {
      const { container } = render(<ProficiencyBar skill={mockSkillItem} />)
      // Look for the progress bar container and the actual bar by their structure
      const progressBarContainer = container.querySelector('.rounded-full.h-3')
      const progressBar = container.querySelector('.h-3.rounded-full.shadow-lg')
      expect(progressBarContainer).toBeInTheDocument()
      expect(progressBar).toBeInTheDocument()
    })

    it('should handle different skill levels', () => {
      const { rerender } = render(<ProficiencyBar skill={{ name: 'Low', level: 25 }} />)
      expect(screen.getByText('25%')).toBeInTheDocument()

      rerender(<ProficiencyBar skill={{ name: 'High', level: 100 }} />)
      expect(screen.getByText('100%')).toBeInTheDocument()
    })
  })
})
