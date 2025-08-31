// Complete mock of portfolio config for tests
export const mockPersonalInfo = {
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
  social: [
    {
      platform: 'github',
      url: 'https://github.com/test',
      username: 'test',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/test',
      username: 'test',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/test',
      username: 'test',
    },
    {
      platform: 'email',
      url: 'mailto:test@example.com',
    },
  ],
}

export const mockExperiences = [
  {
    id: '1',
    title: 'Senior Developer',
    company: 'Test Company',
    location: 'Test Location',
    startDate: '2020-01',
    endDate: 'Present',
    description: ['Test description paragraph 1', 'Test description paragraph 2'],
    technologies: ['React', 'TypeScript'],
    highlights: ['Achievement 1', 'Achievement 2'],
  },
]

export const mockAchievements = [
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

export const mockSkills = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    icon: 'Code2',
    items: ['React', 'TypeScript', 'Next.js'],
  },
  {
    id: 'backend',
    category: 'Backend Development',
    icon: 'Database',
    items: ['Node.js', 'Python', 'PostgreSQL'],
  },
]

export const mockSkillProficiencies = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
    ],
  },
]

export const mockProjects = [
  {
    id: 'project-1',
    title: 'Test Project 1',
    description: 'Description for test project 1',
    technologies: ['React', 'TypeScript', 'Node.js'],
    featured: true,
    highlights: ['Highlight 1', 'Highlight 2'],
    links: {
      github: 'https://github.com/test/project1',
      live: 'https://project1.com',
    },
    impact: 'Increased performance by 50%',
  },
  {
    id: 'project-2',
    title: 'Test Project 2',
    description: 'Description for test project 2',
    technologies: ['Python', 'Django'],
    featured: false,
    links: {
      github: 'https://github.com/test/project2',
    },
  },
]

export const mockNavigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
