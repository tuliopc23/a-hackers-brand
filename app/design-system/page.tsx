'use client'

import React, { useState } from 'react'

const colorPalettes = {
  neural: {
    name: 'Neural Network',
    description: 'Deep blues, electric accents, and neural purples. Perfect for AI, machine learning, data science brands.',
    colors: {
      primary: '#0A0E27',
      secondary: '#1E2749', 
      accent: '#00D9FF',
      electric: '#7C3AED',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      muted: '#64748B'
    }
  },
  quantum: {
    name: 'Quantum (Current)',
    description: 'Clean grays, quantum blues, and energy accents. Perfect for SaaS, productivity tools, dev tools.',
    colors: {
      primary: '#0F172A',
      secondary: '#1E293B',
      accent: '#3B82F6',
      energy: '#06FFA5',
      success: '#22C55E',
      warning: '#EAB308',
      error: '#DC2626',
      muted: '#94A3B8'
    }
  },
  cyber: {
    name: 'Cyber',
    description: 'Neon accents, deep darks, and cyber highlights. Perfect for gaming, cybersecurity, blockchain.',
    colors: {
      primary: '#000000',
      secondary: '#0D1117',
      accent: '#FF6B6B',
      neon: '#4ECDC4',
      success: '#45B7D1',
      warning: '#FFA726',
      error: '#FF5722',
      muted: '#6B7280'
    }
  },
  minimal: {
    name: 'Minimal',
    description: 'Warm grays, subtle blues, and professional accents. Perfect for agencies, portfolios, consulting.',
    colors: {
      primary: '#18181B',
      secondary: '#27272A',
      accent: '#2563EB',
      soft: '#8B5CF6',
      success: '#059669',
      warning: '#D97706',
      error: '#B91C1C',
      muted: '#71717A'
    }
  },
  terminal: {
    name: 'Terminal',
    description: 'Terminal greens, code blues, and hacker aesthetics. Perfect for dev tools, CLI apps, terminal themes.',
    colors: {
      primary: '#0C0C0C',
      secondary: '#1A1A1A',
      accent: '#00FF41',
      code: '#61DAFB',
      success: '#32CD32',
      warning: '#FFD700',
      error: '#FF6347',
      muted: '#808080'
    }
  }
}

const typographyExamples = [
  { class: 'text-display', label: 'Display', text: 'Design System' },
  { class: 'text-heading-1', label: 'Heading 1', text: 'Typography Scale' },
  { class: 'text-heading-2', label: 'Heading 2', text: 'PP Supply Sans' },
  { class: 'text-heading-3', label: 'Heading 3', text: 'Modern Dev Brand' },
  { class: 'text-body-large', label: 'Body Large', text: 'This is a large body text example showcasing the readable typography.' },
  { class: 'text-body', label: 'Body', text: 'This is the default body text used throughout the interface.' },
  { class: 'text-body-small', label: 'Body Small', text: 'This is small body text for secondary information.' },
  { class: 'text-caption', label: 'Caption', text: 'This is caption text for metadata and labels.' },
  { class: 'text-code', label: 'Code', text: 'const example = "PP Supply Mono";' },
  { class: 'text-code-large', label: 'Code Large', text: 'function buildDesignSystem() { return "amazing"; }' }
]

const spacingExamples = [
  { token: '--space-micro', value: '4px', class: 'space-micro' },
  { token: '--space-tiny', value: '8px', class: 'space-tiny' },
  { token: '--space-small', value: '16px', class: 'space-small' },
  { token: '--space-medium', value: '24px', class: 'space-medium' },
  { token: '--space-large', value: '32px', class: 'space-large' },
  { token: '--space-xl', value: '48px', class: 'space-xl' },
  { token: '--space-2xl', value: '64px', class: 'space-2xl' }
]

export default function DesignSystemPage() {
  const [selectedPalette, setSelectedPalette] = useState('quantum')

  return (
    <div className="min-h-screen bg-brand-surface text-brand-primary">
      <div className="container mx-auto p-8 space-y-16">
        
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-display font-ultralight">Design System</h1>
          <p className="text-body-large text-brand-muted max-w-2xl mx-auto">
            A comprehensive design language built with PP Supply fonts, modern color palettes, 
            and consistent spacing for developer-focused brands.
          </p>
        </header>

        {/* Color Palettes Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-heading-1 mb-2">Color Palettes</h2>
            <p className="text-body text-brand-muted">
              Five carefully crafted color options for different brand personalities.
            </p>
          </div>

          {/* Palette Selector */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(colorPalettes).map(([key, palette]) => (
              <button
                key={key}
                onClick={() => setSelectedPalette(key)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedPalette === key 
                    ? 'border-brand-accent bg-brand-surface-interactive' 
                    : 'border-brand-surface-elevated hover:border-brand-surface-hover'
                }`}
              >
                <div className="font-medium text-sm">{palette.name}</div>
                <div className="flex gap-1 mt-2">
                  {Object.values(palette.colors).slice(0, 4).map((color, idx) => (
                    <div 
                      key={idx}
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Palette Display */}
          <div className="liquid-glass rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-heading-2">{colorPalettes[selectedPalette].name}</h3>
                <p className="text-body text-brand-muted mt-2">
                  {colorPalettes[selectedPalette].description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(colorPalettes[selectedPalette].colors).map(([name, color]) => (
                  <div key={name} className="space-y-2">
                    <div 
                      className="w-full h-16 rounded-lg border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                    <div>
                      <div className="text-body-small font-medium capitalize">{name}</div>
                      <div className="text-caption text-brand-muted font-mono">{color}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-brand-surface-elevated rounded-lg">
                <p className="text-body-small text-brand-muted">
                  To use this palette, update the <code className="code-inline">:root</code> variables 
                  in <code className="code-inline">colors.css</code> from quantum to {selectedPalette}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-heading-1 mb-2">Typography</h2>
            <p className="text-body text-brand-muted">
              PP Supply Sans and PP Supply Mono create a modern, professional typographic system.
            </p>
          </div>

          <div className="grid gap-6">
            {typographyExamples.map((example, idx) => (
              <div key={idx} className="liquid-glass rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-body-small font-medium">{example.label}</div>
                    <div className="text-caption text-brand-muted font-mono">.{example.class}</div>
                  </div>
                  <div className={`flex-1 ${example.class}`}>
                    {example.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-heading-1 mb-2">Spacing System</h2>
            <p className="text-body text-brand-muted">
              Consistent 8px-based spacing scale for harmonious layouts.
            </p>
          </div>

          <div className="grid gap-4">
            {spacingExamples.map((example, idx) => (
              <div key={idx} className="liquid-glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-body-small font-medium">{example.token}</div>
                    <div className="text-caption text-brand-muted">{example.value}</div>
                  </div>
                  <div className="text-caption text-brand-muted font-mono">.{example.class}</div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-brand-accent h-8 rounded" style={{width: example.value}}></div>
                  <div className="bg-brand-surface-elevated h-8 w-8 rounded"></div>
                  <div className="bg-brand-surface-elevated h-8 w-8 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glass Effects Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-heading-1 mb-2">Glass Effects</h2>
            <p className="text-body text-brand-muted">
              Liquid glass system with various blur and opacity levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['whisper', 'subtle', 'light', 'heavy', 'intense', 'elevated'].map((variant, idx) => (
              <div key={idx} className={`liquid-glass-${variant} rounded-xl p-6 relative overflow-hidden`}>
                <div className="relative z-10">
                  <h3 className="text-heading-3 mb-2 capitalize">{variant}</h3>
                  <p className="text-body-small text-brand-muted">
                    Glass effect with {variant} opacity and blur level.
                  </p>
                  <div className="text-caption text-brand-muted font-mono mt-2">
                    .liquid-glass-{variant}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-energy opacity-20"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="text-body-small text-brand-muted">
            Personal Dev Brand Design System • Built with PP Supply Fonts
          </p>
        </footer>

      </div>
    </div>
  )
}
