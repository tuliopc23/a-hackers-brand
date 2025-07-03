import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import nextDynamic from 'next/dynamic'
// import { Analytics } from '@vercel/analytics/react' // Optional analytics
import './globals.css'

// Dynamic import to prevent SSR issues
const ThemeProvider = nextDynamic(() => import('next-themes').then(mod => ({ default: mod.ThemeProvider })), { ssr: false })
const WebVitalsInit = nextDynamic(() => import('../components/performance/web-vitals-init').then(mod => ({ default: mod.WebVitalsInit })), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Tulio Brand System - CLI Meets SwiftUI',
    template: '%s | Tulio Brand System'
  },
  description: 'Design system guidelines combining liquid glass aesthetics with terminal-inspired interfaces and native-quality interactions. Performance-first design philosophy for modern applications.',
  keywords: [
    'brand guidelines',
    'design system',
    'CLI interface',
    'SwiftUI',
    'Glass UI',
    'terminal design',
    'performance-first',
    'native interactions',
    'keyboard-driven',
    'Tulio Cunha'
  ],
  authors: [{ name: 'Tulio Pinheiro Cunha', url: 'https://tuliocunha.dev' }],
  creator: 'Tulio Pinheiro Cunha',
  publisher: 'Tulio Pinheiro Cunha',
  metadataBase: new URL('https://brand.tuliocunha.dev'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brand.tuliocunha.dev',
    title: 'Tulio Brand System - CLI Meets SwiftUI Design Guidelines',
    description: 'Explore the design philosophy behind performance-first, keyboard-driven interfaces with liquid glass aesthetics.',
    siteName: 'Tulio Brand System',
    images: [
      {
        url: '/og-brand-system.png',
        width: 1200,
        height: 630,
        alt: 'Tulio Brand System - CLI Meets SwiftUI'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulio Brand System - CLI Meets SwiftUI',
    description: 'Performance-first design guidelines for modern interfaces',
    images: ['/og-brand-system.png'],
    creator: '@tuliopc23'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#007AFF" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <WebVitalsInit />
          {children}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}