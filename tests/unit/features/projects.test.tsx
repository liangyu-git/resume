import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from '@/features/projects/components/projects'
import type { Project } from '@/types/portfolio'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  ExternalLink: () => <span>ExternalLink Icon</span>,
  Github: () => <span>Github Icon</span>,
  Star: () => <span>Star Icon</span>,
}))

// Mock Next.js Link
vi.mock('next/link', () => ({
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}))

// Mock data
const mockProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Test Project 1',
    description: 'Description for test project 1',
    technologies: ['React', 'TypeScript', 'Node.js'],
    featured: true,
    github: 'https://github.com/test/project1',
    demo: 'https://project1.com',
  },
  {
    id: 'project-2',
    title: 'Test Project 2',
    description: 'Description for test project 2',
    technologies: ['Python', 'Django'],
    featured: false,
    github: 'https://github.com/test/project2',
  },
  {
    id: 'project-3',
    title: 'Test Project 3',
    description: 'Description for test project 3',
    technologies: ['Vue', 'Nuxt'],
    featured: true,
    demo: 'https://project3.com',
  },
]

describe('Projects Component', () => {
  it('should render the projects section', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument()
  })

  it('should render section subtitle', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText(/Innovative AI and computer vision solutions/i)).toBeInTheDocument()
  })

  it('should only render featured projects', () => {
    render(<Projects projects={mockProjects} />)
    // Featured projects
    expect(screen.getByText('Test Project 1')).toBeInTheDocument()
    expect(screen.getByText('Test Project 3')).toBeInTheDocument()
    // Non-featured project should not be rendered
    expect(screen.queryByText('Test Project 2')).not.toBeInTheDocument()
  })

  it('should render project descriptions', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText('Description for test project 1')).toBeInTheDocument()
    expect(screen.getByText('Description for test project 3')).toBeInTheDocument()
  })

  it('should render technologies for each project', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
    expect(screen.getByText('Nuxt')).toBeInTheDocument()
  })

  it('should render featured projects title', () => {
    render(<Projects projects={mockProjects} />)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  // Note: The actual component may not render highlights or impact
  // This test verifies the basic project information is displayed correctly

  it('should render GitHub links when available', () => {
    render(<Projects projects={mockProjects} />)
    const githubButtons = screen.getAllByRole('link', { name: /code/i })
    expect(githubButtons).toHaveLength(1) // Only project-1 has github link among featured
    expect(githubButtons[0]).toHaveAttribute('href', 'https://github.com/test/project1')
  })

  it('should render live demo links when available', () => {
    render(<Projects projects={mockProjects} />)
    const liveButtons = screen.getAllByRole('link', { name: /demo/i })
    expect(liveButtons).toHaveLength(2) // project-1 and project-3 have demo links among featured
  })

  it('should have correct attributes for external links', () => {
    render(<Projects projects={mockProjects} />)
    const externalLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('http'))

    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('should handle projects without demo links', () => {
    const projectsWithoutDemo = [
      {
        ...mockProjects[1], // project-2 has no demo link
        featured: true,
      },
    ]
    render(<Projects projects={projectsWithoutDemo} />)
    expect(screen.getByText('Test Project 2')).toBeInTheDocument()
  })

  it('should handle empty projects array', () => {
    render(<Projects projects={[]} />)
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument()
  })
})
