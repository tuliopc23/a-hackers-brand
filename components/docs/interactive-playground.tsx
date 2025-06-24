'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Code, 
  Copy, 
  Download, 
  Share2, 
  RotateCcw, 
  Maximize2,
  Eye,
  EyeOff,
  Settings,
  Palette,
  Zap,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';

interface PlaygroundExample {
  id: string;
  title: string;
  description: string;
  category: 'terminal' | 'glass' | 'advanced' | 'animations';
  code: string;
  preview: React.ReactNode;
  dependencies?: string[];
  complexity: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

interface InteractivePlaygroundProps {
  className?: string;
  examples?: PlaygroundExample[];
  defaultExample?: string;
  showMobilePreview?: boolean;
  enableCodeEdit?: boolean;
  theme?: 'dark' | 'light' | 'auto';
}

// Code Editor Component
function CodeEditor({ 
  value, 
  onChange, 
  language = 'tsx',
  readOnly = false 
}: {
  value: string;
  onChange?: (value: string) => void;
  language?: string;
  readOnly?: boolean;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  useEffect(() => {
    const lines = value.split('\n');
    setLineNumbers(lines.map((_, index) => index + 1));
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange?.(newValue);
      
      // Reset cursor position
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="relative h-full bg-slate-900 rounded-lg overflow-hidden border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-emerald-400" />
          <span className="text-white text-sm font-medium">{language.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(value)}>
            <Copy className="w-3 h-3" />
          </Button>
        </div>
      </div>
      
      {/* Editor */}
      <div className="flex h-[calc(100%-48px)]">
        {/* Line numbers */}
        <div className="w-12 bg-slate-800/50 p-2 text-right">
          {lineNumbers.map(num => (
            <div key={num} className="text-white/40 text-sm font-mono leading-6">
              {num}
            </div>
          ))}
        </div>
        
        {/* Code area */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onKeyDown={handleKeyDown}
            readOnly={readOnly}
            className="w-full h-full p-4 bg-transparent text-white font-mono text-sm leading-6 resize-none outline-none"
            spellCheck={false}
            style={{
              tabSize: 2,
              lineHeight: '1.5'
            }}
          />
          
          {/* Syntax highlighting overlay would go here in a real implementation */}
        </div>
      </div>
    </div>
  );
}

// Device Preview Frame
function DevicePreview({ 
  children, 
  device = 'desktop',
  className 
}: {
  children: React.ReactNode;
  device?: 'desktop' | 'tablet' | 'mobile';
  className?: string;
}) {
  const deviceStyles = {
    desktop: 'w-full h-full',
    tablet: 'w-[768px] h-[1024px] max-w-full max-h-full',
    mobile: 'w-[375px] h-[667px] max-w-full max-h-full'
  };

  const deviceFrames = {
    desktop: 'rounded-lg',
    tablet: 'rounded-xl border-8 border-slate-800',
    mobile: 'rounded-3xl border-4 border-slate-800'
  };

  return (
    <div className={cn(
      'bg-white relative overflow-hidden',
      deviceStyles[device],
      deviceFrames[device],
      className
    )}>
      {/* Device-specific decorations */}
      {device === 'mobile' && (
        <>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10" />
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full z-10" />
        </>
      )}
      
      {device === 'tablet' && (
        <>
          {/* Home button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-700 rounded-full z-10" />
        </>
      )}
      
      {/* Content */}
      <div className="w-full h-full overflow-auto bg-slate-900">
        {children}
      </div>
    </div>
  );
}

// Example Browser
function ExampleBrowser({ 
  examples, 
  selectedExample, 
  onSelectExample 
}: {
  examples: PlaygroundExample[];
  selectedExample: string;
  onSelectExample: (id: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(examples.map(e => e.category)))];
  
  const filteredExamples = examples.filter(example => {
    const matchesSearch = example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         example.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || example.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-80 h-full bg-slate-800/50 border-r border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-semibold mb-3">Examples</h3>
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search examples..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 bg-slate-900 border border-white/20 rounded-lg text-white text-sm placeholder-white/40 outline-none focus:border-emerald-500"
        />
        
        {/* Category filter */}
        <div className="flex flex-wrap gap-1 mt-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-2 py-1 rounded text-xs font-medium transition-colors',
                selectedCategory === category
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Examples list */}
      <div className="overflow-y-auto h-[calc(100%-140px)]">
        {filteredExamples.map(example => (
          <motion.button
            key={example.id}
            whileHover={{ x: 4 }}
            onClick={() => onSelectExample(example.id)}
            className={cn(
              'w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors',
              selectedExample === example.id && 'bg-emerald-500/20 border-r-2 border-r-emerald-500'
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-medium text-sm">{example.title}</h4>
              <span className={cn(
                'px-2 py-1 rounded text-xs font-medium',
                example.complexity === 'beginner' && 'bg-green-500/20 text-green-400',
                example.complexity === 'intermediate' && 'bg-yellow-500/20 text-yellow-400',
                example.complexity === 'advanced' && 'bg-red-500/20 text-red-400'
              )}>
                {example.complexity}
              </span>
            </div>
            
            <p className="text-white/60 text-xs line-clamp-2 mb-2">
              {example.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {example.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/50">
                  {tag}
                </span>
              ))}
              {example.tags.length > 3 && (
                <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-white/50">
                  +{example.tags.length - 3}
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Main Playground Component
export function InteractivePlayground({
  className,
  examples: externalExamples,
  defaultExample,
  showMobilePreview = true,
  enableCodeEdit = true,
  theme = 'dark'
}: InteractivePlaygroundProps) {
  const [selectedExample, setSelectedExample] = useState(defaultExample || 'terminal-basic');
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [customCode, setCustomCode] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Default examples
  const defaultExamples: PlaygroundExample[] = [
    {
      id: 'terminal-basic',
      title: 'Basic Terminal',
      description: 'Simple terminal interface with liquid glass effects',
      category: 'terminal',
      complexity: 'beginner',
      tags: ['terminal', 'basic', 'glass'],
      code: `import { TerminalWindow } from '@/components/terminal';\n\nexport function BasicTerminal() {\n  return (\n    <TerminalWindow\n      title="Basic Terminal"\n      theme="liquid"\n      className="w-full max-w-4xl"\n    />\n  );\n}`,
      preview: (
        <div className="p-6 bg-slate-900 min-h-full">
          <div className="w-full h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-emerald-500/20 flex items-center justify-center">
            <div className="text-emerald-400 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-mono">Terminal Preview</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'glass-card',
      title: 'Glass Morphism Card',
      description: 'Beautiful glass card with advanced effects',
      category: 'glass',
      complexity: 'beginner',
      tags: ['glass', 'card', 'morphism'],
      code: `import { Card } from '@/glass-ui/src/components/card';\n\nexport function GlassCard() {\n  return (\n    <Card \n      variant="glass" \n      blur="xl"\n      className="glass-shimmer p-6"\n    >\n      <h3 className="text-white font-bold text-xl mb-3">\n        Glass Morphism Card\n      </h3>\n      <p className="text-white/70">\n        Beautiful translucent surfaces with depth and layering.\n      </p>\n    </Card>\n  );\n}`,
      preview: (
        <div className="p-6 bg-gradient-to-br from-purple-900 to-blue-900 min-h-full flex items-center justify-center">
          <div className="w-80 h-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <h3 className="text-white font-bold text-xl mb-3">Glass Card</h3>
            <p className="text-white/70">Beautiful glass morphism effect</p>
          </div>
        </div>
      )
    },
    {
      id: 'neural-network',
      title: 'Neural Network 3D',
      description: '3D neural network visualization with WebGL',
      category: 'advanced',
      complexity: 'advanced',
      tags: ['3d', 'neural', 'webgl', 'visualization'],
      code: `import { NeuralNetworkVisualizer } from '@/components/advanced';\n\nexport function NeuralNetwork3D() {\n  return (\n    <NeuralNetworkVisualizer\n      theme="quantum"\n      isTraining={true}\n      showLabels={true}\n      interactive={true}\n      className="w-full h-96"\n    />\n  );\n}`,
      preview: (
        <div className="p-6 bg-slate-900 min-h-full flex items-center justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-lg border border-emerald-500/20 flex items-center justify-center relative overflow-hidden">
            <div className="text-emerald-400 text-center z-10">
              <div className="text-3xl mb-2">🧠</div>
              <div className="font-mono">Neural Network 3D</div>
            </div>
            {/* Animated background */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-emerald-400/50 rounded-full"
                animate={{
                  x: [0, 300, 0],
                  y: [0, 150, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'skill-network',
      title: '3D Skill Network',
      description: 'Interactive 3D skill visualization',
      category: 'advanced',
      complexity: 'advanced',
      tags: ['3d', 'skills', 'interactive', 'portfolio'],
      code: `import { SkillNetwork3D } from '@/components/advanced';\n\nexport function SkillNetwork() {\n  return (\n    <SkillNetwork3D\n      theme="tech"\n      autoRotate={true}\n      showConnections={true}\n      interactive={true}\n      className="w-full h-96"\n    />\n  );\n}`,
      preview: (
        <div className="p-6 bg-slate-900 min-h-full flex items-center justify-center">
          <div className="w-full h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20 flex items-center justify-center relative">
            <div className="text-blue-400 text-center z-10">
              <div className="text-3xl mb-2">🕸️</div>
              <div className="font-mono">Skill Network 3D</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'animations',
      title: 'Liquid Animations',
      description: 'Advanced animation system with liquid effects',
      category: 'animations',
      complexity: 'intermediate',
      tags: ['animations', 'liquid', 'effects', 'framer-motion'],
      code: `import { motion } from 'framer-motion';\nimport { liquidGlassEffects } from '@/lib/animations';\n\nexport function LiquidAnimations() {\n  return (\n    <motion.div\n      variants={liquidGlassEffects.glassShimmer}\n      initial="initial"\n      animate="animate"\n      whileHover="hover"\n      className="glass-liquid p-8 rounded-xl"\n    >\n      <motion.h3\n        variants={liquidGlassEffects.liquidMorph}\n        animate="hover"\n        className="text-white font-bold text-2xl"\n      >\n        Liquid Animations\n      </motion.h3>\n    </motion.div>\n  );\n}`,
      preview: (
        <div className="p-6 bg-gradient-to-br from-emerald-900 to-teal-900 min-h-full flex items-center justify-center">
          <motion.div
            animate={{
              borderRadius: ['20px', '25px', '15px', '20px'],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-80 h-48 bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex items-center justify-center"
          >
            <div className="text-white text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-mono">Liquid Effects</div>
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  const examples = externalExamples || defaultExamples;
  const currentExample = examples.find(e => e.id === selectedExample) || examples[0];

  useEffect(() => {
    if (currentExample) {
      setCustomCode(currentExample.code);
    }
  }, [currentExample]);

  const exportCode = () => {
    const blob = new Blob([customCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentExample.id}.tsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareExample = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?example=${selectedExample}`;
    navigator.clipboard.writeText(shareUrl);
  };

  const resetCode = () => {
    setCustomCode(currentExample.code);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'relative',
        isFullscreen ? 'fixed inset-0 z-50' : 'w-full h-[800px]',
        className
      )}
    >
      <Card
        variant="glass-dark"
        blur="xl"
        className={cn(
          'overflow-hidden relative',
          isFullscreen ? 'h-full rounded-none' : 'h-full'
        )}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-800/50"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
            >
              <Zap className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-lg">Interactive Playground</h3>
              <p className="text-white/60 text-sm">
                Live code editor with instant preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Device toggle */}
            {showMobilePreview && (
              <div className="flex items-center gap-1 bg-slate-700 rounded-lg p-1">
                <Button
                  size="sm"
                  variant={previewDevice === 'desktop' ? 'default' : 'ghost'}
                  onClick={() => setPreviewDevice('desktop')}
                  className="h-8 w-8 p-0"
                >
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={previewDevice === 'tablet' ? 'default' : 'ghost'}
                  onClick={() => setPreviewDevice('tablet')}
                  className="h-8 w-8 p-0"
                >
                  <Tablet className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={previewDevice === 'mobile' ? 'default' : 'ghost'}
                  onClick={() => setPreviewDevice('mobile')}
                  className="h-8 w-8 p-0"
                >
                  <Smartphone className="w-4 h-4" />
                </Button>
              </div>
            )}

            <Button
              size="sm"
              variant="glass"
              onClick={() => setIsCodeVisible(!isCodeVisible)}
              className="flex items-center gap-2"
            >
              {isCodeVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              Code
            </Button>

            <Button size="sm" variant="glass" onClick={resetCode}>
              <RotateCcw className="w-4 h-4" />
            </Button>

            <Button size="sm" variant="glass" onClick={exportCode}>
              <Download className="w-4 h-4" />
            </Button>

            <Button size="sm" variant="glass" onClick={shareExample}>
              <Share2 className="w-4 h-4" />
            </Button>

            <Button size="sm" variant="glass" onClick={() => setIsFullscreen(!isFullscreen)}>
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex h-[calc(100%-80px)]">
          {/* Example Browser */}
          <ExampleBrowser
            examples={examples}
            selectedExample={selectedExample}
            onSelectExample={setSelectedExample}
          />

          {/* Content Area */}
          <div className="flex-1 flex">
            {/* Code Editor */}
            <AnimatePresence>
              {isCodeVisible && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '50%', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="border-r border-white/10"
                >
                  <CodeEditor
                    value={customCode}
                    onChange={enableCodeEdit ? setCustomCode : undefined}
                    language="tsx"
                    readOnly={!enableCodeEdit}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Preview Area */}
            <div className={cn('flex-1 overflow-hidden', !isCodeVisible && 'w-full')}>
              <div className="h-full flex items-center justify-center p-4">
                <DevicePreview device={previewDevice} className="shadow-2xl">
                  {currentExample.preview}
                </DevicePreview>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-2 bg-slate-800/50 border-t border-white/10 flex items-center justify-between text-sm"
        >
          <div className="flex items-center gap-4 text-white/60">
            <span>Example: {currentExample.title}</span>
            <span>•</span>
            <span>Complexity: {currentExample.complexity}</span>
            <span>•</span>
            <span>Category: {currentExample.category}</span>
          </div>

          <div className="flex items-center gap-4 text-white/60">
            {currentExample.dependencies && (
              <>
                <span>Dependencies: {currentExample.dependencies.join(', ')}</span>
                <span>•</span>
              </>
            )}
            <span>Device: {previewDevice}</span>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}