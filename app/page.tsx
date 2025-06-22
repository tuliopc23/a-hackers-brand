// import { GlassCard, GlassButton } from '@tuliopc23/glass-ui' // Temporarily disabled
import { ArrowRight, Terminal, Zap, Code, Palette } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section with 3D Glass Effects */}
      <section className="relative px-6 pt-20 pb-16 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-brand-float"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl animate-brand-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-terminal-cyan/20 rounded-full blur-2xl animate-brand-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Glass Morphing Grid */}
        <div className="absolute inset-0 -z-5">
          <div className="grid grid-cols-12 gap-4 h-full opacity-30">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="glass-effect rounded-brand opacity-20 animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 brand-enter">
            {/* 3D Rotating Brand Logo Area */}
            <div className="relative mb-8">
              <div className="glass-effect w-24 h-24 mx-auto rounded-brand-2xl flex items-center justify-center mb-6 transform hover:scale-110 transition-all duration-500 hover:rotate-12 shadow-2xl">
                <div className="w-12 h-12 bg-brand-primary rounded-brand flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced Typography with Liquid Effects */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 brand-text-gradient leading-none tracking-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">CLI</span>{' '}
              <span className="text-gray-400 opacity-50">meets</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">SwiftUI</span>
            </h1>
            
            {/* Animated Subtitle */}
            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-balance leading-relaxed font-medium">
                Design system guidelines for{' '}
                <span className="text-terminal-green font-semibold">performance-first</span>,{' '}
                <span className="text-brand-primary font-semibold">keyboard-driven</span> interfaces with{' '}
                <span className="text-brand-secondary font-semibold">liquid glass</span> aesthetics
              </p>
              
              {/* Floating Cursor */}
              <div className="inline-block w-0.5 h-6 bg-terminal-green animate-pulse ml-1 mt-1"></div>
            </div>

            {/* Enhanced Status Badges with Hover Effects */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <div className="glass-effect px-4 py-2 rounded-brand-lg border border-green-400/30 hover:border-green-400/60 transition-all duration-300 group hover:scale-105">
                <span className="text-green-600 dark:text-green-400 font-semibold flex items-center">
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  &lt;100ms Response
                </span>
              </div>
              <div className="glass-effect px-4 py-2 rounded-brand-lg border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 group hover:scale-105">
                <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center">
                  <Terminal className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Unix Philosophy
                </span>
              </div>
              <div className="glass-effect px-4 py-2 rounded-brand-lg border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 group hover:scale-105">
                <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center">
                  <Code className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Native Quality
                </span>
              </div>
            </div>

            {/* Performance Metrics Display */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="glass-effect p-4 rounded-brand-lg text-center group hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-terminal-green mb-1">70+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Components</div>
              </div>
              <div className="glass-effect p-4 rounded-brand-lg text-center group hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-brand-primary mb-1">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Test Coverage</div>
              </div>
              <div className="glass-effect p-4 rounded-brand-lg text-center group hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-brand-secondary mb-1">188KB</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</div>
              </div>
            </div>
          </div>

          {/* Interactive Terminal Demo */}
          <div className="glass-effect max-w-5xl mx-auto mb-16 p-0 overflow-hidden rounded-brand-lg shadow-2xl border border-white/20">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="terminal-dot bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="terminal-dot bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-mono">tulio@macbook ~ % Brand System Terminal</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <span>⌘K</span>
                </div>
              </div>
              <div className="terminal-content">
                {/* Animated Command Sequence */}
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">whoami</span>
                </div>
                <div className="text-terminal-output font-medium">Performance-obsessed full-stack developer</div>
                <div className="text-terminal-output text-sm opacity-75">📍 Building the future of design systems</div>
                
                <div className="terminal-line mt-6">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">ls -la design-system/</span>
                </div>
                <div className="space-y-1 text-sm font-mono">
                  <div className="text-terminal-green hover:bg-green-500/10 px-2 py-1 rounded cursor-pointer transition-colors">
                    drwxr-xr-x  components/     <span className="text-gray-500">70+ Glass UI components</span>
                  </div>
                  <div className="text-terminal-blue hover:bg-blue-500/10 px-2 py-1 rounded cursor-pointer transition-colors">
                    -rw-r--r--  philosophy.md   <span className="text-gray-500">Unix meets SwiftUI</span>
                  </div>
                  <div className="text-terminal-cyan hover:bg-cyan-500/10 px-2 py-1 rounded cursor-pointer transition-colors">
                    -rw-r--r--  performance.rs  <span className="text-gray-500">Sub-100ms interactions</span>
                  </div>
                  <div className="text-terminal-yellow hover:bg-yellow-500/10 px-2 py-1 rounded cursor-pointer transition-colors">
                    -rw-r--r--  automation.go   <span className="text-gray-500">CI/CD pipelines</span>
                  </div>
                  <div className="text-terminal-purple hover:bg-purple-500/10 px-2 py-1 rounded cursor-pointer transition-colors">
                    -rw-r--r--  aesthetics.css  <span className="text-gray-500">Liquid glass effects</span>
                  </div>
                </div>

                <div className="terminal-line mt-6">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">cat brand-metrics.json</span>
                </div>
                <div className="text-terminal-output text-sm bg-terminal-bg/50 rounded p-3 font-mono border border-gray-700">
                  <div className="text-terminal-cyan">{`{`}</div>
                  <div className="ml-4 text-terminal-yellow">&quot;components&quot;<span className="text-white">:</span> <span className="text-terminal-green">70</span>,</div>
                  <div className="ml-4 text-terminal-yellow">&quot;test_coverage&quot;<span className="text-white">:</span> <span className="text-terminal-green">&quot;95%&quot;</span>,</div>
                  <div className="ml-4 text-terminal-yellow">&quot;bundle_size&quot;<span className="text-white">:</span> <span className="text-terminal-green">&quot;188KB&quot;</span>,</div>
                  <div className="ml-4 text-terminal-yellow">&quot;performance&quot;<span className="text-white">:</span> <span className="text-terminal-green">&quot;&lt;100ms&quot;</span>,</div>
                  <div className="ml-4 text-terminal-yellow">&quot;accessibility&quot;<span className="text-white">:</span> <span className="text-terminal-green">&quot;WCAG 2.1 AA&quot;</span></div>
                  <div className="text-terminal-cyan">{`}`}</div>
                </div>

                <div className="terminal-line mt-6">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">npm run demo</span>
                </div>
                <div className="text-terminal-output space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-terminal-green">✓</span>
                    <span className="ml-2">Starting Glass UI component demo...</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-terminal-green">✓</span>
                    <span className="ml-2">Loading liquid glass effects...</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-terminal-green">✓</span>
                    <span className="ml-2">Initializing magnetic hover interactions...</span>
                  </div>
                  <div className="flex items-center text-terminal-blue">
                    <span className="animate-spin">⟳</span>
                    <span className="ml-2">Server running at <Link href="#components" className="underline hover:text-terminal-cyan">localhost:3000</Link></span>
                  </div>
                </div>

                {/* Interactive Command Line */}
                <div className="terminal-line mt-6 group">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command-input text-terminal-fg">
                    git status
                    <span className="terminal-cursor bg-terminal-green w-2 h-5 inline-block ml-1 animate-pulse"></span>
                  </span>
                </div>
                
                {/* Command Suggestions */}
                <div className="mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition-colors">git log --oneline</span>
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition-colors">npm test</span>
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition-colors">npm run storybook</span>
                    <span className="px-2 py-1 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 transition-colors">help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Navigation Grid */}
      <section className="px-6 pb-20" id="components">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 brand-text-gradient">
              Explore the System
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dive deep into the design philosophy, components, and patterns that power modern interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Design Philosophy Card */}
            <Link href="/philosophy" className="group block">
              <div className="glass-effect p-6 rounded-brand-lg border border-transparent hover:border-blue-400/50 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-brand-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Terminal className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    Design Philosophy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Unix principles meet SwiftUI aesthetics. Performance-first approach to interface design.
                  </p>
                  <div className="flex items-center text-brand-primary text-sm font-semibold">
                    <span>Explore Philosophy</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover Effect Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </div>
            </Link>

            {/* Component Library Card */}
            <Link href="/components" className="group block">
              <div className="glass-effect p-6 rounded-brand-lg border border-transparent hover:border-green-400/50 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-brand-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    Glass UI Library
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    70+ production-ready components with liquid glass effects and magnetic interactions.
                  </p>
                  <div className="flex items-center text-brand-primary text-sm font-semibold">
                    <span>Browse Components</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </div>
            </Link>

            {/* Keyboard Patterns Card */}
            <Link href="/interactions" className="group block">
              <div className="glass-effect p-6 rounded-brand-lg border border-transparent hover:border-purple-400/50 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-brand-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    Interaction Patterns
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Keyboard-first navigation, gesture controls, and native-quality micro-interactions.
                  </p>
                  <div className="flex items-center text-brand-primary text-sm font-semibold">
                    <span>Learn Patterns</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </div>
            </Link>

            {/* Design Tokens Card */}
            <Link href="/tokens" className="group block">
              <div className="glass-effect p-6 rounded-brand-lg border border-transparent hover:border-orange-400/50 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-brand-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    Design Tokens
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Interactive color palettes, typography scales, and spacing systems with live preview.
                  </p>
                  <div className="flex items-center text-brand-primary text-sm font-semibold">
                    <span>Explore Tokens</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </div>
            </Link>
          </div>

          {/* Spectacular Call to Action */}
          <div className="text-center mt-20">
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 rounded-brand-2xl blur-3xl"></div>
              
              <div className="glass-effect relative p-12 rounded-brand-2xl border border-white/20 max-w-4xl mx-auto overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-20 rounded-brand-2xl animate-pulse"></div>
                
                <div className="relative z-10">
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-primary/20 rounded-full blur-xl animate-brand-float"></div>
                  <div className="absolute -top-4 -right-8 w-8 h-8 bg-brand-secondary/20 rounded-full blur-lg animate-brand-float" style={{animationDelay: '1s'}}></div>
                  
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                      <span className="brand-text-gradient">Ready to Build</span><br />
                      <span className="text-gray-800 dark:text-gray-200">Something Amazing?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Start with the Glass UI library and transform your interfaces with{' '}
                      <span className="text-terminal-green font-semibold">performance-first</span> design principles.
                    </p>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <Link 
                      href="https://glass-ui.dev" 
                      className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-brand-lg text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/25 inline-flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center">
                        🚀 Launch Glass UI
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                    
                    <Link 
                      href="https://github.com/tuliopc23/glass-ui" 
                      className="group glass-effect px-10 py-5 rounded-brand-lg border border-gray-300 dark:border-gray-600 hover:border-brand-primary/50 transition-all duration-300 hover:scale-105 text-gray-700 dark:text-gray-300 font-bold text-lg inline-flex items-center justify-center"
                    >
                      <span className="flex items-center">
                        <Terminal className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                        View Source Code
                      </span>
                    </Link>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-terminal-green mb-1">⚡ &lt;100ms</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-primary mb-1">📦 188KB</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-secondary mb-1">🎯 95%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Test Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-1">🧩 70+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Components</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}