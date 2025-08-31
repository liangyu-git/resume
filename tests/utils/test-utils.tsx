import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Mock next-themes to avoid matchMedia issues
import { vi } from 'vitest'

vi.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
    systemTheme: 'light',
    themes: ['light', 'dark'],
  }),
}))

// Custom providers wrapper
function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// Custom render function that includes providers
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }

// Test data factories
export const createMockPersonalInfo = () => ({
  name: {
    full: 'Test User',
    casual: 'Test',
    initials: 'TU',
  },
  title: 'Test Engineer',
  company: 'Test Corp',
  location: 'Test City',
  email: 'test@example.com',
  bio: {
    short: 'Test bio',
    detailed: ['Test detailed bio'],
  },
  social: [
    {
      platform: 'github' as const,
      url: 'https://github.com/test',
      username: 'test',
    },
  ],
})

export const createMockProject = (overrides = {}) => ({
  id: 'test-project',
  title: 'Test Project',
  description: 'Test Description',
  technologies: ['React', 'TypeScript'],
  featured: false,
  ...overrides,
})

export const createMockSkill = (overrides = {}) => ({
  id: 'test-skill',
  category: 'development' as const,
  name: 'Test Skill',
  icon: 'test-icon',
  description: 'Test skill description',
  technologies: ['Test Tech'],
  ...overrides,
})

export const createMockExperience = (overrides = {}) => ({
  id: 'test-experience',
  title: 'Test Title',
  company: 'Test Company',
  startDate: '2020-01',
  endDate: '2024-01',
  current: false,
  description: ['Test description'],
  ...overrides,
})
