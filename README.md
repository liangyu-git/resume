# 🤖 LIANG-YU SUN (Bright) - AI & Computer Vision Engineer Portfolio

> Professional single-page portfolio website showcasing AI and Computer Vision expertise

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![CI/CD](https://img.shields.io/github/actions/workflow/status/liangyu-git/resume/ci.yml?style=for-the-badge&label=CI%2FCD)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

## 🌟 Overview

A modern, responsive portfolio website built for **LIANG-YU SUN (Bright)**, an AI & Computer Vision Engineer at Perfect Corp. The site features a clean, professional single-page design that showcases technical expertise, projects, and experience without requiring navigation between multiple pages.

**Live Demo**: [https://resume-kappa-mocha.vercel.app](https://resume-kappa-mocha.vercel.app)
**Status**: 🟢 Production Ready | Automated CI/CD | Continuous Deployment

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [CI/CD Pipeline & Deployment](#-cicd-pipeline--deployment)
- [Customization](#-customization)
- [Tech Stack Details](#-tech-stack-details)
- [Quality Gates](#-quality-gates)
- [Professional Features](#-professional-features)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## ✨ Features

### 🎨 Design & UX

- **Single-page design** with smooth scrolling navigation
- **Responsive layout** - Perfect on desktop, tablet, and mobile
- **Dark/Light theme** switching with system preference detection
- **Smooth animations** using Framer Motion
- **Professional gradient backgrounds** and modern styling
- **Mobile-first approach** with hamburger navigation

### 🏗️ Technical Stack

- **Next.js 15** - Latest React framework with App Router
- **React 19** - Latest React features and optimizations
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Beautiful, consistent iconography
- **Next Themes** - Theme switching functionality

### 📱 Sections

1. **Hero Section** - Eye-catching introduction with animated background
2. **About & Experience** - Professional timeline and achievements
3. **Skills & Technologies** - Comprehensive tech stack showcase
4. **Featured Projects** - AI/CV project portfolio with demos
5. **Contact** - Professional contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/liangyu-git/resume.git
cd resume

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint with auto-fix
pnpm type-check   # Run TypeScript compiler check
pnpm format       # Format code with Prettier

# Testing
pnpm test         # Run tests in watch mode
pnpm test:run     # Run tests once
pnpm test:ui      # Open Vitest UI
pnpm test:coverage # Generate coverage report

# Environment
pnpm env:setup    # Create .env.local from .env.example
pnpm env:validate # Validate environment variables

# Production Validation
pnpm production:validate # Run all checks before deployment

# Deployment
pnpm deploy:vercel  # Deploy to Vercel production
pnpm deploy:preview # Deploy preview to Vercel

# Performance
pnpm lighthouse   # Run Lighthouse CI
pnpm analyze      # Analyze bundle size
```

## 📁 Project Structure

```
resume/
├── .github/
│   └── workflows/
│       └── ci.yml         # CI/CD pipeline configuration
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Main homepage
│   ├── features/          # Feature-based architecture
│   │   ├── hero/          # Hero section module
│   │   ├── about/         # About & experience module
│   │   ├── skills/        # Skills & technologies module
│   │   ├── projects/      # Projects showcase module
│   │   └── contact/       # Contact section module
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── navigation.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/            # Design system components
│   │   │   ├── button.tsx
│   │   │   └── design-system/
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── config/
│   │   └── portfolio.ts   # Portfolio content configuration
│   ├── services/
│   │   └── data/          # Data service layer
│   ├── hooks/             # Custom React hooks
│   │   ├── animation/     # Animation hooks
│   │   └── ui/            # UI utility hooks
│   ├── lib/
│   │   ├── utils.ts       # Utility functions
│   │   ├── animations.ts  # Animation variants
│   │   └── env.ts         # Environment validation
│   ├── styles/
│   │   └── globals.css    # Global styles
│   └── types/
│       └── portfolio.ts   # TypeScript interfaces
├── tests/                 # Test suite
│   ├── setup.ts
│   ├── unit/
│   └── utils/
├── scripts/
│   └── validate-env.ts    # Environment validation script
├── public/                # Static assets
├── vercel.json            # Vercel deployment config
├── lighthouserc.js        # Lighthouse CI config
└── ...config files
```

## 🎯 Key Features Explained

### Smart Navigation

- **Active section highlighting** - Navigation updates based on scroll position
- **Smooth scrolling** - Animated navigation to sections
- **Mobile responsive** - Collapsible hamburger menu

### Performance Optimized

- **Next.js 15 optimizations** - Latest performance improvements
- **Image optimization** - Automatic WebP conversion and lazy loading
- **Code splitting** - Automatic bundle optimization
- **SEO ready** - Comprehensive meta tags and Open Graph

### Accessibility

- **WCAG compliant** - Proper ARIA labels and keyboard navigation
- **Screen reader friendly** - Semantic HTML structure
- **Color contrast** - Meets accessibility standards
- **Focus management** - Proper focus indicators

## 🚀 CI/CD Pipeline & Deployment

This project features a **fully automated CI/CD pipeline** with GitHub Actions and continuous deployment to Vercel.

### Automated Deployment Workflow

Every push to `main` branch automatically triggers:

1. **Code Quality Checks**
   - ESLint linting
   - TypeScript type checking
   - Environment variable validation

2. **Testing Suite**
   - Unit tests with Vitest
   - Coverage reporting
   - Upload to Codecov

3. **Security Audits**
   - Dependency vulnerability scanning
   - Snyk security analysis
   - pnpm audit checks

4. **Performance Monitoring**
   - Lighthouse CI performance tests
   - Core Web Vitals tracking
   - Bundle size analysis

5. **Production Deployment**
   - Automatic build
   - Deploy to Vercel production
   - Zero-downtime deployment

### Manual Deployment Options

#### Quick Deploy (Skip Tests)
```bash
# Trigger via GitHub Actions workflow_dispatch
# Select "Skip tests" option for urgent hotfixes
```

#### Local Deployment
```bash
# Deploy to Vercel production
pnpm deploy:vercel

# Deploy preview build
pnpm deploy:preview
```

#### Validate Before Deploy
```bash
# Run all quality checks locally
pnpm production:validate
# This runs: env:validate → type-check → test:run → build
```

### Deployment Configuration

- **Platform**: Vercel (Edge Network)
- **Region**: Washington, D.C., USA (IAD1)
- **Framework**: Next.js 15 (Auto-detected)
- **Security Headers**: CSP, X-Frame-Options, CORS configured
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`

### Environment Variables

Required environment variables are managed via:
- **Development**: `.env.local` (create with `pnpm env:setup`)
- **Production**: Vercel Environment Variables (configured in dashboard)
- **CI/CD**: GitHub Secrets

See `.env.example` for required variables.

### Deployment URLs

- **Production**: https://resume-kappa-mocha.vercel.app
- **Preview**: Auto-generated for each PR
- **Development**: http://localhost:3000

## 🛠️ Customization

### Content Updates

All portfolio content is centralized in `src/config/portfolio.ts`:

- **Personal Information**: Update `personalInfo` object
- **Social Links**: Modify `social` array in `personalInfo`
- **Projects**: Add/edit projects in `projects` array
- **Skills**: Update `skills` and `proficiencies` arrays
- **Experience**: Modify `experiences` array
- **Education**: Update `education` array

Example:
```typescript
// src/config/portfolio.ts
export const personalInfo = {
  name: { full: 'Your Name', casual: 'Nickname' },
  title: 'Your Title',
  // ... update your info
}
```

### Styling

- **Theme Colors**: Update CSS variables in `src/styles/globals.css`
- **Fonts**: Modify font imports in `src/app/layout.tsx`
- **Components**: Customize UI in `src/components/` and `src/features/`
- **Tailwind**: Extend configuration in `tailwind.config.ts`

### Configuration Files

- **SEO Metadata**: `src/app/layout.tsx`
- **Environment Variables**: `.env.local` (create from `.env.example`)
- **Deployment**: `vercel.json` for Vercel settings
- **CI/CD**: `.github/workflows/ci.yml` for pipeline
- **Performance**: `lighthouserc.js` for Lighthouse CI

## 📊 Tech Stack Details

### Frontend Framework

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features

### Styling & UI

- **Tailwind CSS 3** - Utility-first CSS framework
- **CSS Variables** - Custom properties for theming
- **Framer Motion** - Animation library

### Development Tools

- **TypeScript** - Static type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

### Testing & Quality Assurance

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing
- **Vitest UI** - Interactive test interface
- **Coverage Reports** - Code coverage tracking
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files
- **commitlint** - Conventional commit messages

### CI/CD & DevOps

- **GitHub Actions** - Automated CI/CD pipeline
- **Vercel** - Edge deployment platform
- **Lighthouse CI** - Performance monitoring
- **Snyk** - Security vulnerability scanning
- **Codecov** - Test coverage reporting
- **Bundle Analyzer** - Build optimization

## 🛡️ Quality Gates

All code must pass these automated checks before deployment:

### Pre-commit Hooks
- ✅ ESLint with auto-fix
- ✅ Prettier formatting
- ✅ Conventional commit message validation

### CI Pipeline (Required for Merge)
- ✅ TypeScript compilation
- ✅ All unit tests passing
- ✅ Code coverage threshold
- ✅ Security audit passing
- ✅ Production build successful

### Production Deployment (Automated)
- ✅ All quality checks passed
- ✅ Lighthouse performance score
- ✅ Zero-downtime deployment
- ✅ Automatic rollback on failure

## 🏆 Professional Features

This portfolio demonstrates enterprise-grade development practices:

### Architecture Excellence
- ✨ **Feature-based architecture** - Domain-driven module organization
- ✨ **Design system** - Reusable UI component library
- ✨ **Service layer** - Separation of data and presentation logic
- ✨ **Type safety** - 100% TypeScript coverage with strict mode
- ✨ **Custom hooks** - Reusable React logic patterns

### DevOps & Automation
- 🚀 **Automated CI/CD** - GitHub Actions with multi-stage pipeline
- 🚀 **Quality gates** - Automated checks prevent broken deployments
- 🚀 **Security scanning** - Continuous vulnerability monitoring
- 🚀 **Performance tracking** - Lighthouse CI on every deployment
- 🚀 **Zero-config deployment** - Push to deploy automatically

### Code Quality
- 📝 **Comprehensive testing** - Unit tests with coverage reporting
- 📝 **Git hooks** - Pre-commit validation for code quality
- 📝 **Conventional commits** - Standardized commit messages
- 📝 **Linting & formatting** - ESLint + Prettier auto-fix
- 📝 **Environment validation** - Type-safe env var configuration

### Modern Stack
- ⚡ **Next.js 15** - Latest App Router with React 19
- ⚡ **Edge deployment** - Global CDN with sub-50ms response times
- ⚡ **Optimized builds** - Code splitting and tree shaking
- ⚡ **Bundle analysis** - Track and optimize bundle size
- ⚡ **Web Vitals** - Performance monitoring built-in

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**LIANG-YU SUN (Bright)**

- Email: bright880409@gmail.com
- GitHub: [@liangyu-git](https://github.com/liangyu-git)
- LinkedIn: [LIANG-YU SUN](https://linkedin.com/in/liang-yu-sun)

---

<div align="center">

### 🚀 Deployed with Automated CI/CD

[![CI/CD Pipeline](https://img.shields.io/github/actions/workflow/status/liangyu-git/resume/ci.yml?style=flat-square&label=CI%2FCD)](https://github.com/liangyu-git/resume/actions)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://resume-kappa-mocha.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

<p>Built with ❤️ using Next.js 15, TypeScript, and enterprise-grade DevOps practices</p>
<p><strong>© 2025 LIANG-YU SUN (Bright)</strong> • All rights reserved.</p>

**[View Live Site](https://resume-kappa-mocha.vercel.app)** | **[Report Issue](https://github.com/liangyu-git/resume/issues)** | **[View Source](https://github.com/liangyu-git/resume)**

</div>
