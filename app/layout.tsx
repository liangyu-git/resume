import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bright Sun - AI & Computer Vision Engineer',
  description: 'AI and Computer Vision Engineer at Perfect Corp, specializing in machine learning, deep learning, and computer vision technologies',
  keywords: ['AI engineer', 'computer vision', 'machine learning', 'deep learning', 'Perfect Corp', 'software engineer', 'artificial intelligence'],
  authors: [{ name: 'Bright Sun' }],
  openGraph: {
    title: 'Bright Sun - AI & Computer Vision Engineer',
    description: 'AI and Computer Vision Engineer at Perfect Corp, specializing in machine learning, deep learning, and computer vision technologies',
    url: 'https://brightsun.dev',
    siteName: 'Bright Sun',
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
    title: 'Bright Sun - AI & Computer Vision Engineer',
    description: 'AI and Computer Vision Engineer at Perfect Corp, specializing in machine learning and computer vision',
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
          disableTransitionOnChange
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