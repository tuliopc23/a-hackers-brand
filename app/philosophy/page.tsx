'use client'

export const dynamic = 'force-dynamic'

import nextDynamic from 'next/dynamic'
import { 
  Terminal, 
  Zap, 
  Code, 
  Layers,
  ArrowRight,
  CheckCircle,
  Target,
  Cpu,
  Gauge
} from 'lucide-react'

// Dynamic imports to prevent SSR issues
const GlassCard = nextDynamic(() => import('@/glass-ui').then(mod => mod.GlassCard), { ssr: false })
const GlassButton = nextDynamic(() => import('@/glass-ui').then(mod => mod.GlassButton), { ssr: false })
const GlassBadge = nextDynamic(() => import('@/glass-ui').then(mod => mod.GlassBadge), { ssr: false })
const GlassHero = nextDynamic(() => import('../../components').then(mod => mod.GlassHero), { ssr: false })
const GlassFeatureShowcase = nextDynamic(() => import('../../components').then(mod => mod.GlassFeatureShowcase), { ssr: false })

export default function PhilosophyPage() {
  const principles = [
    {
      icon: <Terminal className="w-8 h-8 text-terminal-green" />,
      title: "Unix Philosophy",
      description: "Do one thing and do it well. Small, composable tools that work together seamlessly. Each component has a single responsibility and clear API.",
      badge: "Core Principle"
    },
    {
      icon: <Gauge className="w-8 h-8 text-brand-primary" />,
      title: "Performance First",
      description: "Every design decision prioritizes speed. Sub-100ms interactions, optimized bundle sizes, and native-quality animations at 60fps.",
      badge: "Performance"
    },
    {
      icon: <Layers className="w-8 h-8 text-brand-secondary" />,
      title: "Progressive Enhancement",
      description: "Start with solid foundations and layer on advanced features. Graceful degradation ensures accessibility across all devices.",
      badge: "Accessibility"
    },
    {
      icon: <Code className="w-8 h-8 text-terminal-cyan" />,
      title: "Developer Experience",
      description: "TypeScript-first design with comprehensive documentation. Predictable APIs and helpful error messages guide development.",
      badge: "DX"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <GlassHero
        title="CLI meets SwiftUI Philosophy"
        subtitle="Design Principles"
        description="Terminal efficiency meets native beauty. Performance-first design philosophy that puts user experience and developer happiness at the core of every decision."
        primaryAction={{
          label: "See Implementation",
          onClick: () => window.open('/components', '_self'),
          icon: <Code className="w-5 h-5" />
        }}
        secondaryAction={{
          label: "View Source",
          onClick: () => window.open('https://github.com/tuliopc23/glass-ui', '_blank'),
          icon: <ArrowRight className="w-5 h-5" />
        }}
        variant="split"
        size="lg"
        enableMagnetic={true}
        enableParallax={true}
      >
        <div className="space-y-6">
          <GlassCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-terminal-bg rounded-xl flex items-center justify-center">
                <Terminal className="w-6 h-6 text-terminal-green" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Terminal Efficiency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Keyboard-driven navigation</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green" />
                <span>Command Palette</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green" />
                <span>Shortcuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green" />
                <span>Focus Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green" />
                <span>CLI-inspired UX</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </GlassHero>

      <GlassFeatureShowcase
        title="Core Design Principles"
        subtitle="Philosophy in Action"
        description="Every component embodies these fundamental principles, creating a cohesive system that scales from simple interactions to complex applications."
        features={principles}
        variant="floating"
        columns={2}
        enableMagnetic={true}
        enableParallax={true}
        className="py-20"
      />

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <GlassBadge variant="default" className="mb-4">
                <Target className="w-4 h-4 mr-2" />
                Implementation Strategy
              </GlassBadge>
              <h2 className="text-4xl font-bold mb-6 brand-text-gradient">
                Theory Meets Practice
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our philosophy isn&apos;t just theory—it&apos;s implemented in every line of code. 
                From TypeScript-first APIs to sub-100ms interactions, we prove that beautiful 
                design and exceptional performance can coexist.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-terminal-green/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-terminal-green" />
                  </div>
                  <div>
                    <div className="font-semibold">Physics-Based Interactions</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Magnetic hover, spring animations, realistic motion</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                    <Gauge className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Performance Monitoring</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Real-time metrics, bundle analysis, optimization alerts</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-brand-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Developer Experience</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">TypeScript APIs, comprehensive docs, helpful errors</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="flex items-center gap-2">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-gray-400 text-sm font-mono">design-philosophy.md</span>
                    </div>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2 text-sm">
                      <div className="text-terminal-green"># Design Philosophy</div>
                      <div className="text-terminal-fg">
                        <span className="text-terminal-blue">const</span> philosophy = {"{"}
                      </div>
                      <div className="text-terminal-fg ml-4">
                        <span className="text-terminal-yellow">performance</span>: <span className="text-terminal-green">&quot;first&quot;</span>,
                      </div>
                      <div className="text-terminal-fg ml-4">
                        <span className="text-terminal-yellow">accessibility</span>: <span className="text-terminal-green">&quot;always&quot;</span>,
                      </div>
                      <div className="text-terminal-fg ml-4">
                        <span className="text-terminal-yellow">beauty</span>: <span className="text-terminal-green">&quot;effortless&quot;</span>,
                      </div>
                      <div className="text-terminal-fg ml-4">
                        <span className="text-terminal-yellow">developer</span>: <span className="text-terminal-green">&quot;happiness&quot;</span>
                      </div>
                      <div className="text-terminal-fg">{"}"}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
