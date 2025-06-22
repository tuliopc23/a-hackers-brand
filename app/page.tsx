import { GlassCard, GlassButton } from '@tuliopc23/glass-ui'
import { ArrowRight, Terminal, Zap, Code, Palette } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 brand-enter">
            <h1 className="text-6xl md:text-8xl font-black mb-6 brand-text-gradient">
              CLI meets SwiftUI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
              Design system guidelines for performance-first, keyboard-driven interfaces with liquid glass aesthetics
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 inline mr-1" />
                Performance First
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                <Terminal className="w-4 h-4 inline mr-1" />
                CLI Inspired
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                <Code className="w-4 h-4 inline mr-1" />
                Native Quality
              </span>
            </div>
          </div>

          {/* Terminal Demo */}
          <GlassCard className="max-w-4xl mx-auto mb-16 p-0 overflow-hidden">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-gray-400 text-sm ml-4">tulio@macbook ~ % Design System Philosophy</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">whoami</span>
                </div>
                <div className="text-terminal-output">Performance-obsessed full-stack developer</div>
                
                <div className="terminal-line mt-4">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">ls -la philosophy/</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="text-terminal-green">drwxr-xr-x  unix-philosophy/</div>
                  <div className="text-terminal-blue">-rw-r--r--  performance-first.md</div>
                  <div className="text-terminal-cyan">-rw-r--r--  keyboard-driven.swift</div>
                  <div className="text-terminal-yellow">-rw-r--r--  automation.go</div>
                  <div className="text-terminal-purple">-rw-r--r--  native-quality.rs</div>
                </div>

                <div className="terminal-line mt-4">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">cat design-principles.txt</span>
                </div>
                <div className="text-terminal-output space-y-1 text-sm">
                  <div>• Blazing fast interactions (&lt;100ms response)</div>
                  <div>• Keyboard-first navigation patterns</div>
                  <div>• Native app quality in web experiences</div>
                  <div>• Glass aesthetics with terminal precision</div>
                </div>

                <div className="terminal-line mt-4">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cursor bg-terminal-fg w-2 h-5 inline-block ml-1"></span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/philosophy" className="group">
              <GlassCard className="p-6 glass-hover group-hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-brand-lg flex items-center justify-center mb-4">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Design Philosophy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Unix principles meet modern interface design
                </p>
                <div className="flex items-center text-brand-primary text-sm font-medium">
                  Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>

            <Link href="/components" className="group">
              <GlassCard className="p-6 glass-hover group-hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-brand-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Component Library</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Glass UI components with terminal touches
                </p>
                <div className="flex items-center text-brand-primary text-sm font-medium">
                  Browse <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>

            <Link href="/interactions" className="group">
              <GlassCard className="p-6 glass-hover group-hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-brand-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Keyboard Patterns</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Native-quality interaction guidelines
                </p>
                <div className="flex items-center text-brand-primary text-sm font-medium">
                  Learn <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>

            <Link href="/tokens" className="group">
              <GlassCard className="p-6 glass-hover group-hover:border-brand-primary/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-brand-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Design Tokens</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Colors, typography, and spacing systems
                </p>
                <div className="flex items-center text-brand-primary text-sm font-medium">
                  Reference <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <GlassCard className="inline-block p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to build fast, beautiful interfaces?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg">
                Start with the Glass UI library and apply these performance-first design principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton variant="primary" size="lg" asChild>
                  <Link href="https://glass-ui.dev">
                    View Glass UI Library <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </GlassButton>
                <GlassButton variant="secondary" size="lg" asChild>
                  <Link href="https://github.com/tuliopc23/glass-ui">
                    GitHub Repository
                  </Link>
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  )
}