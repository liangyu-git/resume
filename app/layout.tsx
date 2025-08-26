import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { config } from '@/lib/env'
import { personalInfo } from '@/data/portfolio'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${personalInfo.name.full} (${personalInfo.name.casual}) - ${personalInfo.title}`,
  description: config.app.description,
  keywords: ['AI engineer', 'computer vision', 'machine learning', 'deep learning', 'Perfect Corp', 'software engineer', 'artificial intelligence', personalInfo.name.full],
  authors: [{ name: personalInfo.name.full }],
  openGraph: {
    title: `${personalInfo.name.full} (${personalInfo.name.casual}) - ${personalInfo.title}`,
    description: config.app.description,
    url: config.app.url,
    siteName: config.app.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name.full} (${personalInfo.name.casual}) - ${personalInfo.title}`,
    description: config.app.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}