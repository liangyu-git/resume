import { Hero } from '@/features/hero'
import { About } from '@/features/about'
import { Skills } from '@/features/skills'
import { Projects } from '@/features/projects'
import { Contact } from '@/features/contact'
import {
  personalInfo,
  experiences,
  achievements,
  skills,
  skillProficiencies,
  projects,
} from '@/config/portfolio'

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <About personalInfo={personalInfo} experiences={experiences} achievements={achievements} />
      <Skills skills={skills} skillProficiencies={skillProficiencies} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
    </div>
  )
}
