import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import { Hero } from '@/components/sections/hero'
import { createMockPersonalInfo } from '@/tests/utils/test-utils'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Hero Component', () => {
  const mockPersonalInfo = createMockPersonalInfo()

  it('renders personal information correctly', () => {
    render(<Hero personalInfo={mockPersonalInfo} />)
    
    // Check name is displayed
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument()
    expect(screen.getByText(mockPersonalInfo.name.casual)).toBeInTheDocument()
    
    // Check bio is displayed
    expect(screen.getByText(mockPersonalInfo.bio.short)).toBeInTheDocument()
    
    // Check title and company badge
    expect(screen.getByText(new RegExp(mockPersonalInfo.title))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(mockPersonalInfo.company))).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero personalInfo={mockPersonalInfo} />)
    
    // Check for View My Work button text (may be split by icon)
    expect(screen.getByText(/View My Work/)).toBeInTheDocument()
    
    // Check for Download Resume button text
    expect(screen.getByText(/Download Resume/)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero personalInfo={mockPersonalInfo} />)
    
    // Check if GitHub icon is rendered (based on our mock data)
    const githubIcon = document.querySelector('.lucide-github')
    expect(githubIcon).toBeInTheDocument()
    
    // Check if social container exists
    const socialIcons = document.querySelectorAll('.lucide')
    expect(socialIcons.length).toBeGreaterThan(0)
  })

  it('has correct section id for navigation', () => {
    const { container } = render(<Hero personalInfo={mockPersonalInfo} />)
    const section = container.querySelector('section#home')
    expect(section).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(<Hero personalInfo={mockPersonalInfo} />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center')
  })

  it('renders background decorations', () => {
    const { container } = render(<Hero personalInfo={mockPersonalInfo} />)
    
    // Check for gradient background
    const gradientDiv = container.querySelector('.bg-gradient-to-br')
    expect(gradientDiv).toBeInTheDocument()
    
    // Check for animated blobs
    const blobs = container.querySelectorAll('.rounded-full.mix-blend-multiply')
    expect(blobs.length).toBeGreaterThan(0)
  })
})