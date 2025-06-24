'use client'

export const dynamic = 'force-dynamic'

import nextDynamic from 'next/dynamic'
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Layers,
  MousePointer,
  Keyboard,
  Sparkles,
  Zap,
  Eye,
  Code,
  Download
} from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'

// Dynamic imports to prevent SSR issues
const GlassCard = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassCard), { ssr: false })
const GlassButton = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassButton), { ssr: false })
const GlassBadge = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassBadge), { ssr: false })
const GlassInput = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassInput), { ssr: false })
const GlassProgress = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassProgress), { ssr: false })
const GlassModal = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassModal), { ssr: false })
const GlassTooltip = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassTooltip), { ssr: false })
const GlassAvatar = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassAvatar), { ssr: false })
const GlassSwitch = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassSwitch), { ssr: false })
const GlassCheckbox = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassCheckbox), { ssr: false })
const GlassSlider = nextDynamic(() => import('@tuliopc23/glass-ui').then(mod => mod.GlassSlider), { ssr: false })
const GlassHero = nextDynamic(() => import('../../components').then(mod => mod.GlassHero), { ssr: false })
const ComponentShowcase = nextDynamic(() => import('../../components').then(mod => mod.ComponentShowcase), { ssr: false })
// Import the hook directly since it's not a component
import { useMagneticHover } from '../../components'

export default function ComponentsPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  
  const categories = [
    { id: 'all', label: 'All Components', count: 70 },
    { id: 'atoms', label: 'Atoms', count: 25 },
    { id: 'molecules', label: 'Molecules', count: 23 },
    { id: 'organisms', label: 'Organisms', count: 22 }
  ]

  const componentSections = [
    { id: 'introduction', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'button', label: 'Buttons', icon: <MousePointer className="w-4 h-4" /> },
    { id: 'input', label: 'Inputs', icon: <Keyboard className="w-4 h-4" /> },
    { id: 'card', label: 'Cards', icon: <Layers className="w-4 h-4" /> },
    { id: 'checkbox', label: 'Form Controls', icon: <Layers className="w-4 h-4" /> },
    { id: 'modal', label: 'Overlays', icon: <Layers className="w-4 h-4" /> },
    { id: 'avatar', label: 'Data Display', icon: <Layers className="w-4 h-4" /> }
  ]

  const MagneticCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const { elementRef: magneticRef, transform } = useMagneticHover(0.1, 80)
    
    return (
      <GlassCard 
        ref={magneticRef as any}
        className={`transition-all duration-300 glass-magnetic ${className}`}
        style={{ transform }}
      >
        {children}
      </GlassCard>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <GlassHero
        title="Glass UI Components"
        subtitle="70+ Production-Ready Components"
        description="Explore our comprehensive collection of liquid glass components with Apple-inspired design, advanced physics, and performance optimization."
        variant="minimal"
        size="md"
        enableMagnetic={true}
        className="pb-16"
      >
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <GlassBadge variant="default">
            <Sparkles className="w-4 h-4 mr-2" />
            70+ Components
          </GlassBadge>
          <GlassBadge variant="default">
            <Zap className="w-4 h-4 mr-2" />
            Physics Engine
          </GlassBadge>
          <GlassBadge variant="success">
            <Code className="w-4 h-4 mr-2" />
            TypeScript
          </GlassBadge>
        </div>
      </GlassHero>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-primary hover:text-brand-primary-hover transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Brand System
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <MagneticCard className="p-6 sticky top-6">
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">Search Components</label>
                  <GlassInput
                    variant="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium mb-4">Categories</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setFilterCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          filterCategory === category.id
                            ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{category.label}</span>
                          <GlassBadge variant="default">{category.count}</GlassBadge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Component Sections */}
                <div>
                  <label className="block text-sm font-medium mb-4">Sections</label>
                  <div className="space-y-1">
                    {componentSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center ${
                          activeSection === section.id
                            ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {section.icon}
                        <span className="ml-3 font-medium">{section.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <GlassButton 
                    variant="primary" 
                    size="sm" 
                    className="w-full mb-3"
                    leftIcon={<Download className="w-4 h-4" />}
                  >
                    Install Package
                  </GlassButton>
                  <GlassButton 
                    variant="secondary" 
                    size="sm" 
                    className="w-full"
                    leftIcon={<Code className="w-4 h-4" />}
                  >
                    View Source
                  </GlassButton>
                </div>
              </div>
            </MagneticCard>
          </div>

          {/* Component Showcase */}
          <div className="lg:col-span-3">
            <MagneticCard className="p-8">
              <ComponentShowcase activeSection={activeSection} />
            </MagneticCard>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16">
          <MagneticCard className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Component Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">Real-time metrics for all Glass UI components</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-terminal-green mb-2">70+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Total Components</div>
                <GlassProgress value={100} color="green" />
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Test Coverage</div>
                <GlassProgress value={95} color="blue" />
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary mb-2">A11Y</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">WCAG 2.1 AA</div>
                <GlassProgress value={100} color="purple" />
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-terminal-cyan mb-2">188KB</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Bundle Size</div>
                <GlassProgress value={75} color="blue" />
              </div>
            </div>
          </MagneticCard>
        </div>
      </div>
    </main>
  )
}