# 🤖 Bright Sun - AI & Computer Vision Engineer Portfolio

> Professional single-page portfolio website showcasing AI and Computer Vision expertise

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Overview

A modern, responsive portfolio website built for **Bright Sun**, an AI & Computer Vision Engineer at Perfect Corp. The site features a clean, professional single-page design that showcases technical expertise, projects, and experience without requiring navigation between multiple pages.

**Live Demo**: [Coming Soon - Deploy to Vercel]

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
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript compiler check
pnpm format       # Format code with Prettier
```

## 📁 Project Structure

```
resume/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Main homepage component
├── components/
│   ├── layout/            # Layout components
│   │   ├── navigation.tsx # Smart navigation with scroll detection
│   │   └── footer.tsx     # Footer with social links
│   ├── ui/                # Reusable UI components
│   │   └── button.tsx     # Button component with variants
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx   # Dark/light theme switcher
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
├── public/                # Static assets
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

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done!)
2. Visit [vercel.com](https://vercel.com)
3. Import your repository: `liangyu-git/resume`
4. Deploy with one click

### Deploy to Netlify

1. Connect your GitHub repository
2. Build command: `pnpm build`
3. Publish directory: `out` (after adding `output: 'export'` to next.config.mjs)

### Self-hosted

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 🛠️ Customization

### Content Updates
- **Personal Information**: Update in `app/page.tsx`
- **Social Links**: Modify in `components/layout/footer.tsx` and `app/page.tsx`
- **Projects**: Add your projects in the projects array in `app/page.tsx`
- **Skills**: Update technology arrays in the skills section
- **Experience**: Modify the timeline in the about section

### Styling
- **Colors**: Update CSS variables in `app/globals.css`
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Components**: Customize components in the `components/` directory

### Configuration
- **Metadata**: Update SEO information in `app/layout.tsx`
- **Site Config**: Modify settings in `next.config.mjs`

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

**Bright Sun**
- Email: bright880409@gmail.com
- GitHub: [@liangyu-git](https://github.com/liangyu-git)
- LinkedIn: [Bright Sun](https://linkedin.com/in/bright-sun)

---

<div align="center">
  <p>Built with ❤️ using Next.js 15 and modern web technologies</p>
  <p>© 2025 Bright Sun. All rights reserved.</p>
</div>