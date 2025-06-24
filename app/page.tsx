'use client'

export const dynamic = 'force-dynamic'

import nextDynamic from 'next/dynamic'
import { 
  ArrowRight, 
  Terminal, 
  Zap, 
  Code, 
  Palette,
  Sparkles,
  Layers,
  MousePointer,
  Gauge,
  Globe,
  Cpu,
  Database
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Dynamic imports to prevent SSR issues - importing from our Brand System
const Card = nextDynamic(() => import('../components').then(mod => mod.Card), { ssr: false })
const Button = nextDynamic(() => import('../components').then(mod => mod.Button), { ssr: false })
const Badge = nextDynamic(() => import('../components').then(mod => mod.Badge), { ssr: false })
const TerminalWindow = nextDynamic(() => import('../components').then(mod => mod.TerminalWindow), { ssr: false })

// Legacy components - these will be migrated to use Glass UI + Brand System pattern
const GlassHero = nextDynamic(() => import('../components').then(mod => mod.GlassHero), { ssr: false })
const GlassFeatureShowcase = nextDynamic(() => import('../components').then(mod => mod.GlassFeatureShowcase), { ssr: false })

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  // Hero Actions
  const primaryAction = {
    label: "Explore Components",
    onClick: () => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' }),
    icon: <Sparkles className="w-5 h-5" />
  }

  const secondaryAction = {
    label: "View GitHub",
    onClick: () => window.open('https://github.com/tuliopc23/glass-ui', '_blank'),
    icon: <Code className="w-5 h-5" />
  }

  // Feature showcase data
  const features = [
    {
      icon: <Layers className="w-8 h-8 text-brand-primary" />,
      title: "Glass UI Foundation",
      description: "Clean, reusable glassmorphism components that any developer can use. Generic, accessible, and performance-optimized.",
      badge: "OSS Ready",
      link: {
        label: "Browse Glass UI",
        href: "/components"
      }
    },
    {
      icon: <Terminal className="w-8 h-8 text-terminal-green" />,
      title: "Advanced Terminal System",
      description: "Interactive command-line interface with sound effects, theming, and real-time command processing for technical showcasing.",
      badge: "Brand System",
      link: {
        label: "Try Terminal",
        href: "#terminal-demo"
      }
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-secondary" />,
      title: "Physics Engine",
      description: "Magnetic hover effects, spring animations, and Vector2D calculations built on top of Glass UI foundation.",
      badge: "Enhanced",
      link: {
        label: "See Physics",
        href: "/interactions"
      }
    },
    {
      icon: <Sparkles className="w-8 h-8 text-terminal-cyan" />,
      title: "Separation of Concerns",
      description: "Clean architecture: Glass UI for generic components, Brand System for advanced showcase features and personal branding.",
      badge: "Architecture",
      link: {
        label: "Read Philosophy",
        href: "/philosophy"
      }
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Ultimate Glass Hero */}
      <GlassHero
        title="Glass UI + Brand System"
        subtitle="Clean Foundation + Advanced Showcase"
        description="Professional component library (Glass UI) meets cutting-edge technical demonstration (Brand System). Clean separation, maximum impact."
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        variant="centered"
        size="xl"
        enableMagnetic={true}
        enableParallax={true}
        className="relative overflow-hidden"
      >
        {/* Performance Metrics Floating Display */}
        <div className="absolute top-8 right-8 grid grid-cols-2 gap-4 pointer-events-none">
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-terminal-green mb-1">Clean</div>
            <div className="text-xs text-gray-400">Glass UI</div>
          </Card>
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-brand-primary mb-1">Advanced</div>
            <div className="text-xs text-gray-400">Brand System</div>
          </Card>
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-brand-secondary mb-1">Separated</div>
            <div className="text-xs text-gray-400">Concerns</div>
          </Card>
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-terminal-yellow mb-1">Professional</div>
            <div className="text-xs text-gray-400">Architecture</div>
          </Card>
        </div>
      </GlassHero>

      {/* Interactive Terminal Demo - Shows Brand System Enhancement */}
      <section id="terminal-demo" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">
              <Terminal className="w-4 h-4 mr-2" />
              Brand System Demo
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Interactive Terminal System</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              This advanced terminal component demonstrates complex state management, 
              system architecture, and audio feedback - built on Glass UI foundation.
            </p>
              </div>

          <TerminalWindow
            title="Tulio's Brand System Terminal"
            theme="github"
            soundEffects={true}
            interactive={true}
            className="mx-auto"
          />
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Try commands: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">help</code>, 
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded ml-2">whoami</code>, 
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded ml-2">skills</code>, 
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded ml-2">projects</code>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Showcase with Architecture Explanation */}
      <section id="showcase" className="relative">
        <GlassFeatureShowcase
          title="Glass UI + Brand System Architecture"
          subtitle="Clean Separation Strategy"
          description="Glass UI provides the foundation - generic, reusable components. Brand System adds the showcase - advanced features that demonstrate technical capabilities."
          features={features}
          variant="floating"
          columns={2}
          enableMagnetic={true}
          enableParallax={true}
          className="py-32"
        />
      </section>

      {/* Architecture Benefits */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Why This Architecture Works
            </Badge>
            <h2 className="text-4xl font-bold mb-8">Clean Foundation + Advanced Showcase</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card variant="glass" className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Layers className="w-6 h-6 mr-3 text-blue-500" />
                  Glass UI (Foundation)
                  </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Generic components any developer can use
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Clean glassmorphism variants
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    TypeScript-first, accessible, performant
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Ready for open source publication
                  </li>
                </ul>
              </Card>
                </div>
                
            <div>
              <Card variant="glass" className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Terminal className="w-6 h-6 mr-3 text-green-500" />
                  Brand System (Showcase)
                  </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Advanced terminal interfaces with audio
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    3D visualizations and physics engines
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Performance monitoring and GitHub integration
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Personal branding and technical demonstration
                  </li>
                </ul>
              </Card>
                  </div>
                </div>
                
          <div className="text-center mt-12">
            <Card variant="outline" className="p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold mb-4">The Result</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Glass UI becomes a professional, reusable component library that any developer can adopt. 
                Brand System becomes an impressive technical showcase that demonstrates advanced capabilities 
                while using Glass UI as its foundation. Clean separation, maximum impact.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}