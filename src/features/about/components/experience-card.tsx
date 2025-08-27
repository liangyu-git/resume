import { Calendar } from 'lucide-react'
import type { ExperienceCardProps } from '../types'

export function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  return (
    <div className={`relative pl-8 pb-8 ${!isLast ? 'border-l-2 border-primary/30' : ''}`}>
      <div
        className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
          experience.current ? 'bg-primary' : 'bg-muted-foreground'
        }`}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <h4 className="font-semibold">{experience.title}</h4>
        {experience.current && (
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Current</span>
        )}
      </div>

      <p className="text-primary font-medium mb-1">{experience.company}</p>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <Calendar className="h-4 w-4" />
        <span>
          {experience.startDate} - {experience.endDate}
        </span>
      </div>

      <ul className="text-sm text-muted-foreground space-y-1">
        {experience.description.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}
