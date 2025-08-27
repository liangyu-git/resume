'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, MapPin, Github, Linkedin, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PersonalInfo, ContactFormData } from '@/types/portfolio'
import { fadeInUp, createDelayedAnimation, viewportOptions } from '@/lib/animations'

interface ContactProps {
  personalInfo: PersonalInfo
}

interface FormState {
  data: ContactFormData
  errors: Partial<ContactFormData>
  isSubmitting: boolean
  isSubmitted: boolean
}

export function Contact({ personalInfo }: ContactProps) {
  const [formState, setFormState] = useState<FormState>({
    data: { name: '', email: '', message: '' },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
  })

  const validateForm = (data: ContactFormData): Partial<ContactFormData> => {
    const errors: Partial<ContactFormData> = {}

    if (!data.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required'
    } else if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }

    return errors
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm(formState.data)

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }))
      return
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, errors: {} }))

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        data: { name: '', email: '', message: '' },
      }))
    } catch {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        errors: { message: 'Failed to send message. Please try again.' },
      }))
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fadeInUp} viewport={viewportOptions} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your AI and computer vision projects to life? Let's discuss how we can
            collaborate.
          </p>
        </motion.div>

        <motion.div
          {...createDelayedAnimation(0.2)}
          viewport={viewportOptions}
          className="bg-card rounded-xl border p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  {personalInfo.social
                    .filter((link) => ['linkedin', 'github'].includes(link.platform))
                    .map((link) => {
                      const Icon = link.platform === 'linkedin' ? Linkedin : Github
                      const label = link.platform === 'linkedin' ? 'LinkedIn' : 'GitHub'

                      return (
                        <Button key={link.platform} variant="outline" size="sm" asChild>
                          <Link href={link.url} target="_blank" rel="noopener noreferrer">
                            <Icon className="w-4 h-4 mr-2" />
                            {label}
                          </Link>
                        </Button>
                      )
                    })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {formState.isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFormState((prev) => ({ ...prev, isSubmitted: false }))}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.data.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${
                        formState.errors.name ? 'border-red-500 focus:ring-red-200' : ''
                      }`}
                      placeholder="Your name"
                      disabled={formState.isSubmitting}
                    />
                    {formState.errors.name && (
                      <p className="text-sm text-red-500 mt-1">{formState.errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.data.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors ${
                        formState.errors.email ? 'border-red-500 focus:ring-red-200' : ''
                      }`}
                      placeholder="your.email@example.com"
                      disabled={formState.isSubmitting}
                    />
                    {formState.errors.email && (
                      <p className="text-sm text-red-500 mt-1">{formState.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formState.data.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-colors ${
                        formState.errors.message ? 'border-red-500 focus:ring-red-200' : ''
                      }`}
                      placeholder="Tell me about your project..."
                      disabled={formState.isSubmitting}
                    />
                    {formState.errors.message && (
                      <p className="text-sm text-red-500 mt-1">{formState.errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
                    {formState.isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
