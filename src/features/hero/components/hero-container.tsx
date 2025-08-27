'use client'

import { FeatureErrorBoundary } from '@/components/ui/design-system/feedback/feature-error-boundary'
import { PortfolioService } from '@/services/data/portfolio-service'
import { HeroPresenter } from './hero-presenter'

export function HeroContainer() {
  // Container handles data fetching and logic
  const personalInfo = PortfolioService.getPersonalInfo()

  // Transform data for presenter
  const presenterProps = {
    name: personalInfo.name,
    title: personalInfo.title,
    company: personalInfo.company,
    bio: personalInfo.bio,
    social: personalInfo.social,
  }

  return (
    <FeatureErrorBoundary featureName="Hero">
      <HeroPresenter {...presenterProps} />
    </FeatureErrorBoundary>
  )
}