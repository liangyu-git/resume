import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from '@/features/about/components/about'
import { ProfessionalSummary } from '@/features/about/components/professional-summary'
import { ExperienceTimeline } from '@/features/about/components/experience-timeline'
import { ExperienceCard } from '@/features/about/components/experience-card'
import { AchievementCard } from '@/features/about/components/achievement-card'
import type { PersonalInfo, Experience, Achievement } from '@/types/portfolio'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock data
const mockPersonalInfo: PersonalInfo = {
  name: {
    full: 'Test Name',
    casual: 'Test',
    initials: 'TN',
  },
  title: 'Test Engineer',
  company: 'Test Company',
  location: 'Test Location',
  email: 'test@example.com',
  bio: {
    short: 'Test summary',
    detailed: ['Test paragraph 1', 'Test paragraph 2'],
  },
  social: [],
}

const mockExperiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Developer',
    company: 'Test Company',
    startDate: '2020-01',
    endDate: 'Present',
    current: true,
    description: ['Test description paragraph 1', 'Test description paragraph 2'],
  },
]

const mockAchievements: Achievement[] = [
  {
    icon: 'Calendar',
    value: '5+',
    label: 'Years Experience',
  },
  {
    icon: 'Code2',
    value: '20+',
    label: 'Projects',
  },
  {
    icon: 'Users',
    value: '95%',
    label: 'Client Satisfaction',
  },
]

describe('About Components', () => {
  describe('About', () => {
    it('should render the about section', () => {
      render(
        <About
          personalInfo={mockPersonalInfo}
          experiences={mockExperiences}
          achievements={mockAchievements}
        />
      )
      expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    })

    it('should render professional summary', () => {
      render(
        <About
          personalInfo={mockPersonalInfo}
          experiences={mockExperiences}
          achievements={mockAchievements}
        />
      )
      expect(screen.getByText('Test paragraph 1')).toBeInTheDocument()
    })

    it('should render experience timeline', () => {
      render(
        <About
          personalInfo={mockPersonalInfo}
          experiences={mockExperiences}
          achievements={mockAchievements}
        />
      )
      expect(screen.getByText('Senior Developer')).toBeInTheDocument()
    })
  })

  describe('ProfessionalSummary', () => {
    it('should render summary text', () => {
      render(
        <ProfessionalSummary personalInfo={mockPersonalInfo} achievements={mockAchievements} />
      )
      expect(screen.getByText('Test paragraph 1')).toBeInTheDocument()
      expect(screen.getByText('Test paragraph 2')).toBeInTheDocument()
    })

    it('should render achievement cards', () => {
      render(
        <ProfessionalSummary personalInfo={mockPersonalInfo} achievements={mockAchievements} />
      )
      expect(screen.getByText('5+')).toBeInTheDocument()
      expect(screen.getByText('20+')).toBeInTheDocument()
      expect(screen.getByText('95%')).toBeInTheDocument()
    })
  })

  describe('ExperienceTimeline', () => {
    it('should render experience heading', () => {
      render(<ExperienceTimeline experiences={mockExperiences} />)
      expect(screen.getByText('Professional Experience')).toBeInTheDocument()
    })

    it('should render experience cards', () => {
      render(<ExperienceTimeline experiences={mockExperiences} />)
      expect(screen.getByText('Senior Developer')).toBeInTheDocument()
      expect(screen.getByText('Test Company')).toBeInTheDocument()
    })
  })

  describe('ExperienceCard', () => {
    const mockExperience = mockExperiences[0]

    it('should render experience details', () => {
      render(<ExperienceCard experience={mockExperience} isLast={false} />)
      expect(screen.getByText('Senior Developer')).toBeInTheDocument()
      expect(screen.getByText('Test Company')).toBeInTheDocument()
    })

    it('should render description items', () => {
      render(<ExperienceCard experience={mockExperience} isLast={false} />)
      expect(screen.getByText(/Test description paragraph 1/)).toBeInTheDocument()
      expect(screen.getByText(/Test description paragraph 2/)).toBeInTheDocument()
    })

    it('should show current badge for current experience', () => {
      render(<ExperienceCard experience={mockExperience} isLast={false} />)
      expect(screen.getByText('Current')).toBeInTheDocument()
    })

    it('should render date range', () => {
      render(<ExperienceCard experience={mockExperience} isLast={false} />)
      expect(screen.getByText('2020-01 - Present')).toBeInTheDocument()
    })
  })

  describe('AchievementCard', () => {
    it('should render achievement details', () => {
      const achievement: Achievement = {
        icon: 'Trophy',
        value: '10+',
        label: 'Years',
      }
      render(<AchievementCard achievement={achievement} />)
      expect(screen.getByText('10+')).toBeInTheDocument()
      expect(screen.getByText('Years')).toBeInTheDocument()
    })
  })
})
