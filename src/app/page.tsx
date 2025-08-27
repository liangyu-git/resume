import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
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
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} experiences={experiences} achievements={achievements} />
      <Skills skills={skills} skillProficiencies={skillProficiencies} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
    </div>
  )
}
