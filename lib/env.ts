/**
 * Environment variable configuration and validation
 * Provides type-safe access to environment variables with runtime validation
 */

import { z } from 'zod'

// Define the schema for public environment variables
const publicEnvSchema = z.object({
  // Required public variables
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('Portfolio'),
  NEXT_PUBLIC_APP_DESCRIPTION: z.string().default('Professional Portfolio'),
  
  // Feature flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: z
    .string()
    .optional()
    .default('false')
    .transform((val) => val === 'true'),
  NEXT_PUBLIC_ENABLE_CONTACT_FORM: z
    .string()
    .optional()
    .default('true')
    .transform((val) => val === 'true'),
  NEXT_PUBLIC_ENABLE_BLOG: z
    .string()
    .optional()
    .default('false')
    .transform((val) => val === 'true'),
  
  // Optional social media overrides
  NEXT_PUBLIC_GITHUB_URL: z.string().url().optional(),
  NEXT_PUBLIC_LINKEDIN_URL: z.string().url().optional(),
  NEXT_PUBLIC_TWITTER_URL: z.string().url().optional(),
  
  // Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
})

// Define the schema for server-side environment variables
const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Email configuration (optional)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).optional(),
  SMTP_USER: z.string().email().optional(),
  SMTP_PASSWORD: z.string().optional(),
  CONTACT_EMAIL_TO: z.string().email().optional(),
  
  // Security
  RECAPTCHA_SITE_KEY: z.string().optional(),
  RECAPTCHA_SECRET_KEY: z.string().optional(),
})

// Combine schemas based on environment
const envSchema = typeof window === 'undefined' 
  ? publicEnvSchema.merge(serverEnvSchema) 
  : publicEnvSchema

// Parse and validate environment variables
const parsedEnv = (() => {
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((err) => err.path.join('.')).join(', ')
      console.error(`❌ Invalid environment variables: ${missingVars}`)
      console.error('Please check your .env.local file against .env.example')
      
      // In development, show detailed errors
      if (process.env.NODE_ENV === 'development') {
        console.error('Validation errors:', error.issues)
      }
    }
    throw new Error('Failed to parse environment variables')
  }
})()

// Export validated environment variables
export const env = parsedEnv

// Type-safe environment variable access
export type Env = z.infer<typeof envSchema>

// Helper functions for common environment checks
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'
export const isTest = process.env.NODE_ENV === 'test'

// Feature flag helpers
export const features = {
  analytics: env.NEXT_PUBLIC_ENABLE_ANALYTICS,
  contactForm: env.NEXT_PUBLIC_ENABLE_CONTACT_FORM,
  blog: env.NEXT_PUBLIC_ENABLE_BLOG,
} as const

// Configuration helpers
export const config = {
  app: {
    url: env.NEXT_PUBLIC_APP_URL,
    name: env.NEXT_PUBLIC_APP_NAME,
    description: env.NEXT_PUBLIC_APP_DESCRIPTION,
  },
  social: {
    github: env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: env.NEXT_PUBLIC_LINKEDIN_URL,
    twitter: env.NEXT_PUBLIC_TWITTER_URL,
  },
  analytics: {
    ga: env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    plausible: env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  },
} as const