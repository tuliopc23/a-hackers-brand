'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles, Brain, ArrowRight, Command } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CommandSuggestion {
  command: string;
  description: string;
  category: 'system' | 'git' | 'npm' | 'docker' | 'custom';
  confidence: number;
  reasoning?: string;
}

interface AICommandSuggestionsProps {
  input: string;
  onSelect: (command: string) => void;
  selectedIndex?: number;
  onSelectedIndexChange?: (index: number) => void;
  className?: string;
  maxSuggestions?: number;
  showReasoningOnHover?: boolean;
}

const categoryConfig = {
  system: {
    icon: Command,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    borderColor: 'border-blue-400/30'
  },
  git: {
    icon: Zap,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    borderColor: 'border-orange-400/30'
  },
  npm: {
    icon: Sparkles,
    color: 'text-red-400',
    bgColor: 'bg-red-400/20',
    borderColor: 'border-red-400/30'
  },
  docker: {
    icon: Brain,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/20',
    borderColor: 'border-cyan-400/30'
  },
  custom: {
    icon: ArrowRight,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/20',
    borderColor: 'border-emerald-400/30'
  }
};

const suggestionVariants = {
  hidden: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { duration: 0.15 }
  }
};

const itemVariants = {
  idle: { 
    scale: 1, 
    x: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  },
  hover: { 
    scale: 1.02, 
    x: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transition: { duration: 0.15 }
  },
  selected: {
    scale: 1.02,
    x: 8,
    backgroundColor: 'rgba(0, 212, 170, 0.15)',
    borderColor: 'rgba(0, 212, 170, 0.4)',
    transition: { duration: 0.15 }
  }
};

// Mock AI suggestion generator - in production, this would connect to an AI service
const generateSuggestions = (input: string): CommandSuggestion[] => {
  const allSuggestions: CommandSuggestion[] = [
    {
      command: 'npm install',
      description: 'Install package dependencies',
      category: 'npm',
      confidence: 0.95,
      reasoning: 'Common NPM command for installing dependencies'
    },
    {
      command: 'git status',
      description: 'Check repository status',
      category: 'git',
      confidence: 0.9,
      reasoning: 'Shows current state of git repository'
    },
    {
      command: 'yarn dev',
      description: 'Start development server',
      category: 'npm',
      confidence: 0.85,
      reasoning: 'Commonly used to start development mode'
    },
    {
      command: 'docker ps',
      description: 'List running containers',
      category: 'docker',
      confidence: 0.8,
      reasoning: 'Shows active Docker containers'
    },
    {
      command: 'ls -la',
      description: 'List files with details',
      category: 'system',
      confidence: 0.9,
      reasoning: 'Display detailed file listing'
    },
    {
      command: 'git commit -m ""',
      description: 'Commit changes with message',
      category: 'git',
      confidence: 0.87,
      reasoning: 'Standard git commit with message'
    },
    {
      command: 'npm run build',
      description: 'Build production bundle',
      category: 'npm',
      confidence: 0.83,
      reasoning: 'Create optimized production build'
    },
    {
      command: 'code .',
      description: 'Open current directory in VS Code',
      category: 'system',
      confidence: 0.75,
      reasoning: 'Launch VS Code in current directory'
    },
    {
      command: 'git push origin main',
      description: 'Push to main branch',
      category: 'git',
      confidence: 0.82,
      reasoning: 'Push local commits to remote main branch'
    },
    {
      command: 'curl -X GET',
      description: 'Make HTTP GET request',
      category: 'system',
      confidence: 0.7,
      reasoning: 'Perform HTTP request using curl'
    }
  ];

  if (!input.trim()) return [];

  return allSuggestions
    .filter(suggestion => 
      suggestion.command.toLowerCase().includes(input.toLowerCase()) ||
      suggestion.description.toLowerCase().includes(input.toLowerCase())
    )
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 6);
};

export function AICommandSuggestions({
  input,
  onSelect,
  selectedIndex = -1,
  onSelectedIndexChange,
  className,
  maxSuggestions = 6,
  showReasoningOnHover = true
}: AICommandSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<CommandSuggestion[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }

    setIsAnalyzing(true);
    // Simulate AI processing delay
    const timer = setTimeout(() => {
      const newSuggestions = generateSuggestions(input).slice(0, maxSuggestions);
      setSuggestions(newSuggestions);
      setIsAnalyzing(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [input, maxSuggestions]);

  if (!input.trim() && !isAnalyzing) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={suggestionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cn(
          'p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/20 backdrop-blur-md',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={isAnalyzing ? { rotate: 360 } : {}}
            transition={{ duration: 1, repeat: isAnalyzing ? Infinity : 0, ease: 'linear' }}
            className="p-2 rounded-full bg-emerald-500/20"
          >
            <Brain className="w-4 h-4 text-emerald-400" />
          </motion.div>
          <div>
            <h3 className="text-emerald-400 font-bold text-sm flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              AI Command Intelligence
            </h3>
            <p className="text-white/60 text-xs">
              {isAnalyzing ? 'Analyzing patterns...' : `${suggestions.length} suggestions found`}
            </p>
          </div>
        </div>

        {/* Loading State */}
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="h-10 bg-white/10 rounded-lg"
              />
            ))}
          </motion.div>
        )}

        {/* Suggestions List */}
        {!isAnalyzing && suggestions.length > 0 && (
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {suggestions.map((suggestion, index) => {
              const config = categoryConfig[suggestion.category];
              const CategoryIcon = config.icon;
              const isSelected = index === selectedIndex;
              const isHovered = index === hoveredIndex;

              return (
                <motion.button
                  key={suggestion.command + index}
                  variants={itemVariants}
                  animate={isSelected ? 'selected' : isHovered ? 'hover' : 'idle'}
                  onClick={() => onSelect(suggestion.command)}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    onSelectedIndexChange?.(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  className={cn(
                    'w-full text-left p-3 rounded-lg border border-white/10 transition-all duration-150 group',
                    isSelected && 'border-emerald-500/30 bg-emerald-500/15'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={cn('p-1.5 rounded-md', config.bgColor)}
                      whileHover={{ scale: 1.1 }}
                    >
                      <CategoryIcon className={cn('w-3 h-3', config.color)} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-white/90 font-semibold text-sm">
                          {suggestion.command}
                        </code>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: suggestion.confidence }}
                          className="w-12 h-1 bg-emerald-400/30 rounded-full overflow-hidden"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${suggestion.confidence * 100}%` }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="h-full bg-emerald-400 rounded-full"
                          />
                        </motion.div>
                      </div>
                      <p className="text-white/60 text-xs">{suggestion.description}</p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  {/* Reasoning Tooltip */}
                  {showReasoningOnHover && suggestion.reasoning && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 p-2 rounded-md bg-black/40 border border-white/10"
                    >
                      <p className="text-white/70 text-xs italic">
                        💡 {suggestion.reasoning}
                      </p>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* No Results */}
        {!isAnalyzing && suggestions.length === 0 && input.trim() && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4"
          >
            <p className="text-white/50 text-sm">
              No suggestions found for &ldquo;{input}&rdquo;
            </p>
            <p className="text-white/30 text-xs mt-1">
              Try a different command or continue typing
            </p>
          </motion.div>
        )}

        {/* AI Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="mt-3 pt-2 border-t border-white/10 flex items-center justify-center gap-1 text-xs text-white/40"
        >
          <Sparkles className="w-3 h-3" />
          <span>Powered by Liquid AI</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}