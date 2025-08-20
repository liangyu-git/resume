import { PersonalInfo, Experience, Skill, Project, Achievement, NavigationItem, SkillProficiency } from '@/types/portfolio'

export const personalInfo: PersonalInfo = {
  name: {
    full: 'LIANG-YU SUN',
    casual: 'Bright',
    initials: 'LYS'
  },
  title: 'AI & Computer Vision Engineer',
  company: 'Perfect Corp',
  location: 'Taiwan',
  email: 'bright880409@gmail.com',
  bio: {
    short: 'AI & Computer Vision Engineer crafting intelligent systems that understand and interact with the visual world through cutting-edge machine learning technologies',
    detailed: [
      `I'm **LIANG-YU SUN** (call me Bright), an AI and Computer Vision Engineer at Perfect Corp. I specialize in developing cutting-edge machine learning solutions that bridge the gap between artificial intelligence and real-world applications.`,
      'My expertise spans deep learning, computer vision, and AI system architecture, with a focus on creating intelligent systems that can perceive, understand, and interact with visual data in meaningful ways.'
    ]
  },
  social: [
    {
      platform: 'github',
      url: 'https://github.com/liangyu-git',
      username: 'liangyu-git'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/liang-yu-sun',
      username: 'liang-yu-sun'
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/liangyusun_dev',
      username: 'liangyusun_dev'
    },
    {
      platform: 'email',
      url: 'mailto:bright880409@gmail.com'
    }
  ]
}

export const experiences: Experience[] = [
  {
    id: 'perfect-corp-ai-engineer',
    title: 'AI & Computer Vision Engineer',
    company: 'Perfect Corp',
    startDate: '2022',
    endDate: 'Present',
    current: true,
    description: [
      'Developed advanced computer vision models for beauty tech applications',
      'Implemented real-time image processing systems using deep learning',
      'Optimized ML models for mobile and web deployment'
    ]
  },
  {
    id: 'previous-software-engineer',
    title: 'Software Engineer',
    company: 'Previous Company',
    startDate: '2020',
    endDate: '2022',
    current: false,
    description: [
      'Built scalable web applications with modern frameworks',
      'Collaborated on machine learning integration projects',
      'Mentored junior developers in best practices'
    ]
  }
]

export const achievements: Achievement[] = [
  {
    label: 'Experience',
    value: '3+ Years',
    description: 'AI Engineering',
    icon: 'Award'
  },
  {
    label: 'Projects',
    value: '15+',
    description: 'AI Solutions',
    icon: 'Code'
  }
]

export const skills: Skill[] = [
  {
    id: 'machine-learning',
    category: 'machine-learning',
    name: 'Machine Learning',
    icon: 'Brain',
    description: 'Deep learning, neural networks, model optimization, and MLOps',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'MLflow']
  },
  {
    id: 'computer-vision',
    category: 'computer-vision',
    name: 'Computer Vision',
    icon: 'Eye',
    description: 'Object detection, image segmentation, facial recognition, AR/VR',
    technologies: ['OpenCV', 'YOLO', 'RCNN', 'MediaPipe', 'Detectron2']
  },
  {
    id: 'development',
    category: 'development',
    name: 'Development',
    icon: 'Zap',
    description: 'Full-stack development, cloud deployment, API design',
    technologies: ['Python', 'JavaScript', 'React', 'Node.js', 'Docker']
  }
]

export const skillProficiencies: SkillProficiency[] = [
  {
    name: 'Python & ML Frameworks',
    level: 95,
    category: 'Machine Learning'
  },
  {
    name: 'Computer Vision',
    level: 90,
    category: 'Computer Vision'
  },
  {
    name: 'Deep Learning',
    level: 88,
    category: 'Machine Learning'
  },
  {
    name: 'Full-Stack Development',
    level: 85,
    category: 'Development'
  }
]

export const projects: Project[] = [
  {
    id: 'face-recognition-system',
    title: 'Real-time Face Recognition System',
    description: 'Advanced facial recognition system with 99.2% accuracy using deep learning and computer vision techniques.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    github: 'https://github.com/liangyu-git/face-recognition',
    demo: 'https://face-recognition-demo.com',
    featured: true
  },
  {
    id: 'ai-beauty-filter',
    title: 'AI-Powered Beauty Filter',
    description: 'Real-time beauty enhancement filter using computer vision and AR technology for mobile applications.',
    technologies: ['PyTorch', 'MediaPipe', 'WebGL', 'JavaScript'],
    github: 'https://github.com/liangyu-git/beauty-filter',
    demo: 'https://beauty-filter-demo.com',
    featured: true
  },
  {
    id: 'object-detection-api',
    title: 'Object Detection API',
    description: 'Scalable object detection API serving multiple models with real-time inference and batch processing.',
    technologies: ['FastAPI', 'Docker', 'YOLO', 'Redis'],
    github: 'https://github.com/liangyu-git/object-detection-api',
    demo: 'https://api-demo.com',
    featured: true
  }
]

export const navigationItems: NavigationItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]