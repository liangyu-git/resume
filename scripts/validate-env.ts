#!/usr/bin/env tsx

/**
 * Environment validation script
 * Run this to validate your environment configuration
 */

import { z } from 'zod'
import * as fs from 'fs'
import * as path from 'path'

const envExamplePath = path.join(process.cwd(), '.env.example')
const envLocalPath = path.join(process.cwd(), '.env.local')

// Check if .env.local exists
if (!fs.existsSync(envLocalPath)) {
  console.error('❌ .env.local file not found!')
  console.log('📝 Creating .env.local from .env.example...')
  
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envLocalPath)
    console.log('✅ .env.local created! Please update it with your values.')
  } else {
    console.error('❌ .env.example not found either!')
    process.exit(1)
  }
}

// Load and validate environment
console.log('🔍 Validating environment variables...')

try {
  // Import the env module to trigger validation
  require('../lib/env')
  console.log('✅ Environment variables are valid!')
} catch (error) {
  console.error('❌ Environment validation failed!')
  if (error instanceof Error) {
    console.error(error.message)
  }
  process.exit(1)
}

// Check for missing optional but recommended variables
const warnings: string[] = []

if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true') {
  warnings.push('Analytics is enabled but GA_MEASUREMENT_ID is not set')
}

if (!process.env.SMTP_HOST && process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === 'true') {
  warnings.push('Contact form is enabled but SMTP configuration is not set')
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:')
  warnings.forEach(warning => console.log(`   - ${warning}`))
}

console.log('\n📋 Current configuration:')
console.log(`   - Environment: ${process.env.NODE_ENV}`)
console.log(`   - App URL: ${process.env.NEXT_PUBLIC_APP_URL}`)
console.log(`   - Analytics: ${process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' ? 'Enabled' : 'Disabled'}`)
console.log(`   - Contact Form: ${process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === 'true' ? 'Enabled' : 'Disabled'}`)
console.log(`   - Blog: ${process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true' ? 'Enabled' : 'Disabled'}`)

console.log('\n✨ Environment validation complete!')