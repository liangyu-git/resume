// ============================================
// REFACTORED COMPONENT EXAMPLES
// ============================================

// 1. ==================== DATA LAYER ====================

// types/portfolio.ts
export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  company: string;
  email: string;
  location: string;
  bio: string;
  resumeUrl: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
  icon: string;
  label: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: {
    start: Date;
    end: Date | 'Present';
  };
  current: boolean;
  responsibilities: string[];
  technologies?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  technologies: string[];
  proficiency: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    documentation?: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  featured: boolean;
  category: 'computer-vision' | 'machine-learning' | 'web-development' | 'research';
  metrics?: {
    accuracy?: string;
    performance?: string;
    users?: string;
  };
}

// 2. ==================== HERO SECTION REFACTORED ====================

// components/sections/Hero/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { HeroBadge } from './HeroBadge';
import { SocialLinks } from '@/components/common/SocialLinks';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Hero() {
  const { personal, social, loading } = usePortfolioData();

  if (loading) {
    return <HeroSkeleton />;
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero section"
    >
      <HeroBackground />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center space-y-8 pb-16 md:pb-8"
        >
          <HeroBadge 
            title={personal.title} 
            company={personal.company} 
          />
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {personal.nickname}
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            {personal.bio}
          </motion.p>
          
          <HeroCTA resumeUrl={personal.resumeUrl} />
          
          <SocialLinks links={social} variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}

// components/sections/Hero/HeroBackground.tsx
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  );
}

// 3. ==================== PROJECT CARD REFACTORED ====================

// components/sections/Projects/ProjectCard.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all group"
      role="article"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/40">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl opacity-50" role="img" aria-label="Project placeholder">
              🤖
            </span>
          </div>
        )}
        
        {project.featured && (
          <Badge className="absolute top-4 right-4" variant="secondary">
            Featured
          </Badge>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 
          id={`project-${project.id}-title`}
          className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
        >
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Expandable Details */}
        {project.longDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-primary hover:underline mb-4 flex items-center gap-1"
            aria-expanded={isExpanded}
            aria-controls={`project-${project.id}-details`}
          >
            {isExpanded ? 'Show less' : 'Read more'}
            <ChevronDown 
              className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
        )}
        
        {isExpanded && project.longDescription && (
          <div 
            id={`project-${project.id}-details`}
            className="text-sm text-muted-foreground mb-4 animate-in slide-in-from-top-2"
          >
            {project.longDescription}
          </div>
        )}
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4" role="list" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs"
              role="listitem"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="font-semibold text-primary">{value}</div>
                <div className="text-muted-foreground capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.links.github && (
            <Button size="sm" variant="outline" asChild>
              <Link 
                href={project.links.github} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-3 h-3 mr-1" aria-hidden="true" />
                Code
              </Link>
            </Button>
          )}
          
          {project.links.demo && (
            <Button size="sm" asChild>
              <Link 
                href={project.links.demo} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="w-3 h-3 mr-1" aria-hidden="true" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// 4. ==================== CONTACT FORM WITH VALIDATION ====================

// components/sections/Contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/useContactForm';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const {
    formState,
    errors,
    isSubmitting,
    isSuccess,
    handleSubmit,
    register,
    reset
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Name Field */}
      <div>
        <label 
          htmlFor="name" 
          className="text-sm font-medium mb-2 block"
        >
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters'
            }
          })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label 
          htmlFor="email" 
          className="text-sm font-medium mb-2 block"
        >
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label 
          htmlFor="message" 
          className="text-sm font-medium mb-2 block"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          rows={4}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      {/* Success/Error Messages */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md"
        >
          <CheckCircle className="h-5 w-5" />
          <p>Message sent successfully! I'll get back to you soon.</p>
        </motion.div>
      )}

      {formState.error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-md"
        >
          <AlertCircle className="h-5 w-5" />
          <p>{formState.error}</p>
        </motion.div>
      )}
    </form>
  );
}

// 5. ==================== CUSTOM HOOKS ====================

// hooks/usePortfolioData.ts
import { useState, useEffect } from 'react';
import type { PersonalInfo, SocialLink, Experience, Project, SkillCategory } from '@/types/portfolio';

interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLink[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // In production, this could fetch from an API or CMS
        const portfolioData = await import('@/lib/data/portfolio');
        setData(portfolioData.default);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { ...data, loading, error };
}

// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false
}: UseIntersectionObserverOptions = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const ref = useRef<Element>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return { ref, entry, isVisible: !!entry?.isIntersecting };
}

// 6. ==================== ANIMATION VARIANTS ====================

// lib/animations/variants.ts
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// 7. ==================== ERROR BOUNDARY ====================

// components/common/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

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
    // Log to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-[400px] flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto" />
              <h2 className="text-2xl font-bold">Something went wrong</h2>
              <p className="text-muted-foreground max-w-md">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <Button onClick={() => window.location.reload()}>
                Reload Page
              </Button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}