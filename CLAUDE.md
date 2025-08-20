# Personal Website Project

## Project Overview
Building a modern personal website using the latest web technologies with a focus on performance, aesthetics, and user experience.

## Tech Stack
- **Framework**: Next.js 15 (Latest stable)
- **React**: React 19
- **TypeScript**: Latest version for type safety
- **Styling**: Tailwind CSS v4 (if available) or latest v3
- **UI Components**: shadcn/ui (latest)
- **Animation**: Framer Motion (latest)
- **Icons**: Lucide React
- **Content**: MDX 3 for blog posts
- **Deployment**: Vercel
- **Package Manager**: npm (or pnpm for faster installs)

## Project Structure
```
/app                    # Next.js 15 App Router
  /layout.tsx          # Root layout with navigation
  /page.tsx            # Homepage
  /about/page.tsx      # About me page
  /projects/page.tsx   # Portfolio/Projects showcase
  /blog/
    /page.tsx          # Blog listing
    /[slug]/page.tsx   # Individual blog posts
  /contact/page.tsx    # Contact information
  /api/                # API routes if needed
/components
  /ui/                 # shadcn/ui components
  /layout/             # Header, Footer, Navigation
  /sections/           # Page sections (Hero, Skills, etc.)
  /blog/               # Blog-specific components
/content               # MDX blog posts and data
/lib                   # Utility functions
/public               # Static assets
/styles               # Global styles
```

## Key Features
1. **Responsive Design** - Mobile-first approach
2. **Dark/Light Mode** - Theme switching with next-themes
3. **Blog with MDX** - Rich content with code highlighting
4. **SEO Optimized** - Metadata, Open Graph, sitemap
5. **Performance** - Image optimization, lazy loading
6. **Animations** - Smooth transitions and micro-interactions
7. **Accessibility** - WCAG compliant
8. **Contact Form** - With email integration
9. **Analytics** - Vercel Analytics or Plausible

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
EMAIL_API_KEY=your-email-service-key
```

## Deployment Checklist
- [ ] Environment variables configured
- [ ] SEO metadata updated
- [ ] Images optimized
- [ ] Performance tested (Lighthouse)
- [ ] Mobile responsive verified
- [ ] Forms tested
- [ ] Analytics connected
- [ ] Custom domain configured

## Color Palette & Design System
- Primary: Modern blue/purple gradient
- Background: Clean whites/grays with subtle gradients
- Accent: Vibrant color for CTAs
- Typography: Inter or Geist font
- Spacing: 4px base unit system

## Content Sections
1. **Hero** - Eye-catching introduction with tagline
2. **About** - Brief bio and skills
3. **Projects** - Featured work with images and links
4. **Blog** - Latest articles and thoughts
5. **Contact** - Contact form and social links

## Performance Goals
- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Core Web Vitals: All green

## Notes
- Always use latest stable versions of dependencies
- Follow Next.js 15 best practices (App Router, Server Components)
- Implement progressive enhancement
- Keep accessibility in mind from the start
- Regular dependency updates for security