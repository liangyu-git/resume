# Portfolio Website Refactoring Plan

## 1. Component Architecture Refactoring

### Current Issues:
- Single 600+ line page.tsx file containing all sections
- Inline data mixed with presentation logic
- Repeated animation patterns
- No reusable section components

### Proposed Component Structure:

```
components/
├── sections/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── HeroBackground.tsx
│   │   ├── HeroCTA.tsx
│   │   └── index.ts
│   ├── About/
│   │   ├── About.tsx
│   │   ├── AboutSummary.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   └── index.ts
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   ├── SkillCard.tsx
│   │   ├── TechnicalProficiency.tsx
│   │   └── index.ts
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilters.tsx
│   │   └── index.ts
│   └── Contact/
│       ├── Contact.tsx
│       ├── ContactForm.tsx
│       ├── ContactInfo.tsx
│       └── index.ts
├── common/
│   ├── AnimatedSection.tsx
│   ├── SectionHeader.tsx
│   ├── SocialLinks.tsx
│   └── ProgressBar.tsx
└── animations/
    ├── variants.ts
    ├── hooks/
    │   ├── useScrollAnimation.ts
    │   └── useIntersectionObserver.ts
    └── index.ts
```

## 2. Data Layer Separation

### Create a proper data layer:

```typescript
// lib/data/portfolio.ts
export const portfolioData = {
  personal: {
    name: 'LIANG-YU SUN',
    nickname: 'Bright',
    title: 'AI & Computer Vision Engineer',
    company: 'Perfect Corp',
    email: 'bright880409@gmail.com',
    location: 'Taiwan',
    bio: '...',
    resume: '/resume.pdf'
  },
  social: {
    github: 'https://github.com/liangyu-git',
    linkedin: 'https://linkedin.com/in/liang-yu-sun',
    twitter: 'https://twitter.com/liangyusun_dev'
  },
  experience: [
    {
      id: 'exp-1',
      title: 'AI & Computer Vision Engineer',
      company: 'Perfect Corp',
      period: { start: '2022', end: 'Present' },
      current: true,
      responsibilities: [...]
    }
  ],
  skills: {
    categories: [
      {
        id: 'ml',
        name: 'Machine Learning',
        icon: 'Brain',
        technologies: ['TensorFlow', 'PyTorch', ...],
        proficiency: 95
      }
    ]
  },
  projects: [
    {
      id: 'proj-1',
      title: 'Real-time Face Recognition System',
      description: '...',
      technologies: ['Python', 'TensorFlow'],
      links: { github: '...', demo: '...' },
      featured: true,
      category: 'computer-vision'
    }
  ]
}
```

## 3. Type Safety Improvements

### Create comprehensive type definitions:

```typescript
// types/portfolio.ts
export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  company: string;
  email: string;
  location: string;
  bio: string;
  resume: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: {
    start: string;
    end: string | 'Present';
  };
  current: boolean;
  responsibilities: string[];
}

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon;
  technologies: string[];
  proficiency: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    documentation?: string;
  };
  featured: boolean;
  category: ProjectCategory;
  image?: string;
}

export type ProjectCategory = 
  | 'computer-vision' 
  | 'machine-learning' 
  | 'web-development' 
  | 'research';
```

## 4. Custom Hooks for Business Logic

```typescript
// hooks/usePortfolio.ts
export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<Portfolio>(portfolioData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Could fetch from API in the future
  const refreshPortfolio = async () => {
    try {
      setLoading(true);
      // const data = await fetchPortfolioData();
      // setPortfolio(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { portfolio, loading, error, refreshPortfolio };
}

// hooks/useContactForm.ts
export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>({
    status: 'idle',
    errors: {},
    values: {
      name: '',
      email: '',
      message: ''
    }
  });

  const validateForm = () => {
    // Validation logic
  };

  const submitForm = async (data: ContactFormData) => {
    // Submission logic with proper error handling
  };

  return { formState, submitForm, validateForm };
}
```

## 5. Performance Optimizations

### Implement proper code splitting and lazy loading:

```typescript
// app/page.tsx (refactored)
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('@/components/sections/Hero'));
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton />
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton />
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton />
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton />
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  );
}
```

## 6. Error Handling and Loading States

```typescript
// components/common/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

## 7. Accessibility Improvements

```typescript
// components/common/SkipToContent.tsx
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[100]"
    >
      Skip to main content
    </a>
  );
}

// components/sections/Projects/ProjectCard.tsx
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      role="article"
      aria-labelledby={`project-${project.id}-title`}
      className="..."
    >
      <h3 id={`project-${project.id}-title`}>{project.title}</h3>
      {/* Rest of the component with proper ARIA labels */}
    </article>
  );
}
```

## 8. Testing Infrastructure

```typescript
// __tests__/components/sections/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

describe('Hero Section', () => {
  it('renders personal information correctly', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bright');
    expect(screen.getByText(/AI & Computer Vision Engineer/i)).toBeInTheDocument();
  });

  it('has accessible navigation links', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('link', { name: /view my work/i });
    expect(ctaButton).toHaveAttribute('href', '#projects');
  });
});
```

## 9. Configuration Files

### ESLint Configuration (.eslintrc.json):
```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "jsx-a11y/anchor-is-valid": "error"
  }
}
```

### Prettier Configuration (.prettierrc):
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

## 10. Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://liangyusun.dev
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_EMAIL_SERVICE_URL=https://api.emailservice.com
```

## Implementation Priority:

1. **Phase 1 (High Priority)**:
   - Extract sections into separate components
   - Create data layer separation
   - Add TypeScript types

2. **Phase 2 (Medium Priority)**:
   - Implement error boundaries
   - Add loading states
   - Create custom hooks

3. **Phase 3 (Enhancement)**:
   - Add testing infrastructure
   - Implement performance optimizations
   - Add analytics and monitoring