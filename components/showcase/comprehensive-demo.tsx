'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Sparkles, 
  Palette, 
  Code, 
  Eye, 
  Brain,
  Award,
  Monitor,
  Smartphone,
  Tablet,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Download
} from 'lucide-react';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';

// Import all the advanced components
import { TerminalWindow } from '@/components/terminal/terminal-window';
import { NeuralNetworkVisualizer } from '@/components/advanced/neural-network-visualizer';
import { SkillNetwork3D } from '@/components/advanced/skill-network-3d';
import { ProjectShowcaseAR } from '@/components/advanced/project-showcase-ar';
import { InteractivePlayground } from '@/components/docs/interactive-playground';
import { ThemeCustomizer } from '@/components/theming/theme-customizer';
import { ThemeProvider, ThemeSelector, useTheme } from '@/components/theming/theme-provider';

interface DemoSection {
  id: string;
  title: string;
  description: string;
  category: 'terminal' | 'visualization' | 'theming' | 'documentation' | 'showcase';
  complexity: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  featured: boolean;
  tags: string[];
}

interface ComprehensiveDemoProps {
  className?: string;
  showCategories?: boolean;
  enableFullscreen?: boolean;
  defaultSection?: string;
}

// Demo sections configuration
const demoSections: DemoSection[] = [
  {
    id: 'terminal',
    title: 'Liquid Glass Terminal',
    description: 'Advanced terminal interface with AI-powered suggestions and real-time performance monitoring',
    category: 'terminal',
    complexity: 'advanced',
    component: TerminalWindow,
    props: {
      title: 'Liquid Glass Terminal',
      theme: 'liquid',
      enableAI: true,
      showMetrics: true,
      enableCollaboration: true
    },
    featured: true,
    tags: ['terminal', 'AI', 'performance', 'collaboration']
  },
  {
    id: 'neural-network',
    title: 'Neural Network 3D Visualizer',
    description: '3D interactive neural network with WebGL acceleration and real-time training simulation',
    category: 'visualization',
    complexity: 'expert',
    component: NeuralNetworkVisualizer,
    props: {
      theme: 'quantum',
      isTraining: true,
      showLabels: true,
      interactive: true
    },
    featured: true,
    tags: ['3D', 'WebGL', 'neural networks', 'machine learning']
  },
  {
    id: 'skill-network',
    title: '3D Skill Network',
    description: 'Interactive 3D visualization of technical skills with dynamic connections',
    category: 'visualization',
    complexity: 'advanced',
    component: SkillNetwork3D,
    props: {
      theme: 'tech',
      autoRotate: true,
      showConnections: true,
      interactive: true
    },
    featured: true,
    tags: ['3D', 'skills', 'portfolio', 'interactive']
  },
  {
    id: 'project-showcase',
    title: 'Project Showcase AR',
    description: '3D project gallery with museum-style presentation and detailed project information',
    category: 'showcase',
    complexity: 'expert',
    component: ProjectShowcaseAR,
    props: {
      autoRotate: true,
      enableAR: false,
      theme: 'portfolio'
    },
    featured: true,
    tags: ['3D', 'projects', 'portfolio', 'AR-ready']
  },
  {
    id: 'interactive-playground',
    title: 'Interactive Code Playground',
    description: 'Live code editor with instant preview and comprehensive example library',
    category: 'documentation',
    complexity: 'intermediate',
    component: InteractivePlayground,
    props: {
      showMobilePreview: true,
      enableCodeEdit: true,
      theme: 'dark'
    },
    featured: true,
    tags: ['documentation', 'code editor', 'examples', 'playground']
  },
  {
    id: 'theme-customizer',
    title: 'Advanced Theme Customizer',
    description: 'Real-time theme creation and customization with live preview and CSS export',
    category: 'theming',
    complexity: 'intermediate',
    component: ThemeCustomizer,
    props: {
      showPreview: true,
      enableExport: true
    },
    featured: false,
    tags: ['theming', 'customization', 'CSS', 'design system']
  }
];

// Category configuration
const categories = {
  terminal: { label: 'Terminal', icon: Monitor, color: '#00D4AA' },
  visualization: { label: 'Visualization', icon: Brain, color: '#3B82F6' },
  theming: { label: 'Theming', icon: Palette, color: '#8B5CF6' },
  documentation: { label: 'Documentation', icon: Code, color: '#F59E0B' },
  showcase: { label: 'Showcase', icon: Award, color: '#EF4444' }
};

// Section Card Component
function SectionCard({ 
  section, 
  isSelected, 
  onSelect 
}: { 
  section: DemoSection; 
  isSelected: boolean;
  onSelect: () => void;
}) {
  const categoryConfig = categories[section.category];
  const IconComponent = categoryConfig.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={cn(
        'relative p-4 rounded-xl border cursor-pointer transition-all duration-200',
        isSelected
          ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
      )}
    >
      {/* Featured badge */}
      {section.featured && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="p-2 rounded-lg"
          style={{ 
            backgroundColor: categoryConfig.color + '20',
            border: `1px solid ${categoryConfig.color}30`
          }}
        >
          <IconComponent 
            className="w-4 h-4"
            style={{ color: categoryConfig.color }}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm">{section.title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span 
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{ 
                backgroundColor: categoryConfig.color + '20',
                color: categoryConfig.color
              }}
            >
              {categoryConfig.label}
            </span>
            <span className={cn(
              'px-2 py-0.5 rounded text-xs font-medium',
              section.complexity === 'beginner' && 'bg-green-500/20 text-green-400',
              section.complexity === 'intermediate' && 'bg-yellow-500/20 text-yellow-400',
              section.complexity === 'advanced' && 'bg-orange-500/20 text-orange-400',
              section.complexity === 'expert' && 'bg-red-500/20 text-red-400'
            )}>
              {section.complexity}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm mb-3 line-clamp-2">
        {section.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {section.tags.slice(0, 3).map(tag => (
          <span 
            key={tag}
            className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/60"
          >
            {tag}
          </span>
        ))}
        {section.tags.length > 3 && (
          <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/60">
            +{section.tags.length - 3}
          </span>
        )}
      </div>

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center"
        >
          <Eye className="w-3 h-3 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
}

// Statistics Component
function DemoStats() {
  const featuredCount = demoSections.filter(s => s.featured).length;
  const complexityStats = demoSections.reduce((acc, section) => {
    acc[section.complexity] = (acc[section.complexity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-emerald-400">{demoSections.length}</div>
        <div className="text-white/60 text-sm">Components</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-400">{featuredCount}</div>
        <div className="text-white/60 text-sm">Featured</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-400">{Object.keys(categories).length}</div>
        <div className="text-white/60 text-sm">Categories</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-yellow-400">{complexityStats.expert || 0}</div>
        <div className="text-white/60 text-sm">Expert Level</div>
      </div>
    </div>
  );
}

// Main Demo Component
export function ComprehensiveDemo({
  className,
  showCategories = true,
  enableFullscreen = true,
  defaultSection = 'terminal'
}: ComprehensiveDemoProps) {
  const [selectedSection, setSelectedSection] = useState(defaultSection);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const currentSection = demoSections.find(s => s.id === selectedSection) || demoSections[0];
  const ComponentToRender = currentSection.component;

  // Filter sections based on category and search
  const filteredSections = demoSections.filter(section => {
    const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <ThemeProvider defaultTheme="quantum">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'relative w-full',
          isFullscreen ? 'fixed inset-0 z-50 bg-slate-900' : '',
          className
        )}
      >
        <Card
          variant="glass-dark"
          blur="xl"
          className={cn(
            'overflow-hidden relative',
            isFullscreen ? 'h-full rounded-none' : 'min-h-[800px]'
          )}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-6 border-b border-white/10"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
              >
                <Zap className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <div>
                <h1 className="text-white font-bold text-2xl">Liquid Glass Design System</h1>
                <p className="text-white/60 text-sm">
                  Comprehensive showcase of advanced UI components and interactions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ThemeSelector compact className="w-40" />
              
              {enableFullscreen && (
                <Button
                  size="sm"
                  variant="glass"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </motion.div>

          <div className="flex h-[calc(100%-88px)]">
            {/* Sidebar */}
            <div className="w-96 border-r border-white/10 flex flex-col">
              {/* Stats */}
              <div className="p-6 border-b border-white/10">
                <DemoStats />
              </div>

              {/* Search and Filters */}
              <div className="p-4 border-b border-white/10 space-y-4">
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-white/40 outline-none focus:border-emerald-500"
                />

                {showCategories && (
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={cn(
                        'px-3 py-1 rounded-lg text-xs font-medium transition-colors',
                        selectedCategory === 'all'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      )}
                    >
                      All
                    </button>
                    {Object.entries(categories).map(([key, config]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(key)}
                        className={cn(
                          'px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1',
                          selectedCategory === key
                            ? 'text-white'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        )}
                        style={{
                          backgroundColor: selectedCategory === key ? config.color + '40' : undefined,
                          borderColor: selectedCategory === key ? config.color : undefined
                        }}
                      >
                        <config.icon className="w-3 h-3" />
                        {config.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Section List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredSections.map(section => (
                  <SectionCard
                    key={section.id}
                    section={section}
                    isSelected={selectedSection === section.id}
                    onSelect={() => setSelectedSection(section.id)}
                  />
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Section Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white font-bold text-xl mb-2">{currentSection.title}</h2>
                    <p className="text-white/70 text-sm mb-3">{currentSection.description}</p>
                    <div className="flex items-center gap-2">
                      {currentSection.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="glass">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="glass">
                      <Code className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Component Demo */}
              <div className="flex-1 p-6 overflow-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSection}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <ComponentToRender
                      {...(currentSection.props || {})}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </ThemeProvider>
  );
}