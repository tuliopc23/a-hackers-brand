'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Terminal, X, Minus, Square, Copy, Settings, Zap, Play, Pause, Cpu, Activity } from 'lucide-react';
import { Card } from '../../glass-ui/src/components/card';
import { Button } from '../../glass-ui/src/components/button';
import { cn } from '../../lib/utils';
import { components } from '../../lib/design-tokens';

interface TerminalCommand {
  id: string;
  command: string;
  output?: string;
  timestamp: Date;
  duration?: number;
  type: 'success' | 'error' | 'info' | 'system' | 'ai-suggestion';
  status: 'idle' | 'running' | 'completed' | 'failed';
}

interface TerminalWindowProps {
  title?: string;
  className?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onCommandExecute?: (command: string) => Promise<{ output: string; status: 'success' | 'error'; duration?: number }>;
  theme?: 'liquid' | 'glass' | 'dark' | 'matrix' | 'cyberpunk';
  soundEffects?: boolean;
  interactive?: boolean;
  aiSuggestions?: boolean;
  performance?: boolean;
  collaborative?: boolean;
  commands?: Record<string, (args: string[]) => Promise<string> | string>;
  onMount?: () => void;
  onUnmount?: () => void;
  keyboardShortcuts?: Record<string, () => void>;
  'aria-label'?: string;
}

// Liquid Glass Terminal Effects
const terminalEffects = {
  bootSequence: {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1
      }
    }
  },
  commandBlock: {
    hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20
      }
    },
    hover: {
      scale: 1.01,
      backgroundColor: 'rgba(0, 212, 170, 0.05)',
      boxShadow: '0 8px 32px rgba(0, 212, 170, 0.15)',
      transition: { duration: 0.15, ease: 'easeOut' }
    }
  },
  liquidFlow: {
    animate: {
      background: [
        'radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)',
        'radial-gradient(circle at 80% 80%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)',
        'radial-gradient(circle at 20% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)'
      ],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
    }
  },
  cursor: {
    blink: {
      opacity: [1, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'steps(1, end)' }
    }
  }
};

const defaultCommands = {
  help: () => `🚀 Liquid Terminal Commands:
  help       - Show this help message
  whoami     - Display current user info  
  skills     - List technical skills
  projects   - Show recent projects
  contact    - Display contact information
  performance - Show system metrics
  clear      - Clear terminal
  theme      - Switch terminal theme`,
  
  whoami: () => '🧑‍💻 tulio@liquid-terminal:~$ Full Stack Developer & Design System Architect',
  
  skills: () => `⚡ Technical Arsenal:
  🔮 Languages:   TypeScript, JavaScript, Python, Rust, Go
  🎨 Frontend:    React, Next.js, Three.js, Framer Motion, WebGL
  ⚙️  Backend:     Node.js, PostgreSQL, Redis, GraphQL
  ☁️  Cloud:       AWS, Vercel, Docker, Kubernetes
  🎯 Design:      Figma, Liquid Glass, Terminal UI, WebXR`,
  
  projects: () => `🏗️  Featured Projects:
  💎 Glass UI - Advanced Component Library
  🌊 Liquid Terminal - This Terminal Experience
  🧠 Neural Network Visualizer (WebGPU)
  📊 Real-time Performance Dashboard
  🎮 WebXR Portfolio Gallery`,
  
  contact: () => `📫 Connect With Me:
  📧 Email: tulio@tuliocunha.dev
  🔗 GitHub: github.com/tuliopc23
  💼 LinkedIn: linkedin.com/in/tuliopc23
  🌐 Portfolio: tuliocunha.dev`,

  performance: () => `⚡ System Performance:
  🔋 CPU Usage: 12%
  💾 Memory: 2.1GB / 16GB
  🌐 Network: 45ms latency
  ⚡ GPU: Active (WebGL)
  🎯 Frame Rate: 60fps`,
  
  clear: () => 'CLEAR_TERMINAL',
  theme: () => 'Theme switching activated! 🎨'
};

export function TerminalWindow({
  title = 'Liquid Terminal',
  className,
  onClose,
  onMinimize,
  onMaximize,
  onCommandExecute,
  theme = 'liquid',
  soundEffects = true,
  interactive = true,
  aiSuggestions = true,
  performance = true,
  collaborative = false,
  commands = defaultCommands,
  onMount,
  onUnmount,
  keyboardShortcuts = {},
  'aria-label': ariaLabel = 'Liquid Glass Terminal Interface',
  ...props
}: TerminalWindowProps) {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [performanceMetrics, setPerformanceMetrics] = useState({ 
    avgResponseTime: 0, 
    commandCount: 0,
    frameRate: 60,
    memoryUsage: 2.1 
  });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const mountTime = useRef(Date.now());

  const themeConfig = {
    liquid: {
      bg: 'bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90',
      text: 'text-white/90',
      accent: 'text-emerald-400',
      prompt: 'text-emerald-400',
      window: 'border-emerald-500/20 shadow-2xl shadow-emerald-500/10',
      glow: 'shadow-emerald-500/25'
    },
    glass: {
      bg: 'bg-white/10 backdrop-blur-xl',
      text: 'text-white/90',
      accent: 'text-cyan-400',
      prompt: 'text-cyan-400',
      window: 'border-white/20',
      glow: 'shadow-cyan-500/25'
    },
    dark: {
      bg: 'bg-black/95',
      text: 'text-green-400',
      accent: 'text-green-500',
      prompt: 'text-green-300',
      window: 'border-green-500/30',
      glow: 'shadow-green-500/25'
    },
    matrix: {
      bg: 'bg-black/95',
      text: 'text-green-400',
      accent: 'text-green-500',
      prompt: 'text-green-300',
      window: 'border-green-500/30',
      glow: 'shadow-green-500/25'
    },
    cyberpunk: {
      bg: 'bg-purple-950/95',
      text: 'text-cyan-400',
      accent: 'text-pink-400',
      prompt: 'text-yellow-400',
      window: 'border-cyan-500/30',
      glow: 'shadow-pink-500/25'
    }
  };

  const currentTheme = themeConfig[theme];

  // Performance monitoring and mount/unmount effects
  useEffect(() => {
    const startTime = Date.now();
    onMount?.();
    
    // Boot sequence animation
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
      if (interactive && inputRef.current) {
        inputRef.current.focus();
      }
    }, 1500);

    return () => {
      clearTimeout(bootTimer);
      if (performance) {
        const mountDuration = Date.now() - mountTime.current;
        console.log(`Terminal mount time: ${mountDuration}ms`);
      }
      onUnmount?.();
    };
  }, [onMount, onUnmount, performance, interactive]);

  // AI Suggestions Generator
  const generateSuggestions = useCallback((input: string) => {
    if (!aiSuggestions || !input.trim()) {
      setSuggestions([]);
      return;
    }

    const baseSuggestions = [
      'npm install', 'yarn dev', 'git status', 'git commit -m ""',
      'docker ps', 'ls -la', 'cd ..', 'code .', 'npm run build',
      'git push origin main', 'curl -X GET', 'ssh user@server',
      'kill -9', 'ps aux', 'top', 'htop', 'df -h', 'free -m'
    ];

    const commandSuggestions = Object.keys(commands);
    const allSuggestions = [...commandSuggestions, ...baseSuggestions];

    const filtered = allSuggestions
      .filter(cmd => cmd.toLowerCase().includes(input.toLowerCase()))
      .slice(0, 6);

    setSuggestions(filtered);
  }, [aiSuggestions, commands]);

  const playSound = useCallback((type: 'keypress' | 'enter' | 'error' | 'boot') => {
    if (!soundEffects || typeof window === 'undefined') return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies = { keypress: 800, enter: 600, error: 200, boot: 400 };
      oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
      oscillator.type = type === 'boot' ? 'sawtooth' : 'sine';
      
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Audio context not available, fail silently
    }
  }, [soundEffects]);

  const executeCommand = useCallback(async (commandString: string) => {
    if (!commandString.trim()) return;

    const startTime = performance ? Date.now() : 0;
    setIsProcessing(true);
    setSuggestions([]);
    playSound('enter');

    const [cmd, ...args] = commandString.trim().split(' ');
    
    const newCommand: TerminalCommand = {
      id: `${Date.now()}-${Math.random()}`,
      command: commandString,
      timestamp: new Date(),
      status: 'running',
      type: 'info'
    };

    setHistory(prev => [...prev, newCommand]);

    try {
      let output: string;
      let type: 'success' | 'error' | 'info' | 'system' = 'success';
      let status: 'completed' | 'failed' = 'completed';

      // Check for custom command executor first
      if (onCommandExecute) {
        const result = await onCommandExecute(commandString.trim());
        output = result.output;
        type = result.status === 'success' ? 'success' : 'error';
        status = result.status === 'success' ? 'completed' : 'failed';
      } else {
        const command = commands[cmd.toLowerCase()];
        
        if (command) {
          const result = await command(args);
          if (result === 'CLEAR_TERMINAL') {
            setHistory([]);
            setPerformanceMetrics(prev => ({ ...prev, commandCount: prev.commandCount + 1 }));
            setIsProcessing(false);
            return;
          }
          output = result;
        } else {
          output = `❌ Command not found: ${cmd}. Type 'help' for available commands.`;
          type = 'error';
          status = 'failed';
          playSound('error');
        }
      }

      const endTime = performance ? Date.now() : 0;
      const duration = endTime - startTime;

      setHistory(prev => prev.map(prevCmd => 
        prevCmd.id === newCommand.id 
          ? { ...prevCmd, output, type, status, duration }
          : prevCmd
      ));

      // Update performance metrics
      if (performance) {
        setPerformanceMetrics(prev => {
          const newCount = prev.commandCount + 1;
          const newAvg = (prev.avgResponseTime * prev.commandCount + duration) / newCount;
          return { 
            ...prev, 
            avgResponseTime: newAvg, 
            commandCount: newCount,
            memoryUsage: prev.memoryUsage + 0.01 // Simulate memory usage
          };
        });
      }

    } catch (error) {
      setHistory(prev => prev.map(prevCmd => 
        prevCmd.id === newCommand.id 
          ? { 
              ...prevCmd, 
              output: `💥 Error executing command: ${error}`, 
              type: 'error', 
              status: 'failed' 
            }
          : prevCmd
      ));
      playSound('error');
    } finally {
      setIsProcessing(false);
    }
  }, [commands, playSound, onCommandExecute, performance]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle keyboard shortcuts
    const shortcutKey = `${e.ctrlKey ? 'ctrl+' : ''}${e.altKey ? 'alt+' : ''}${e.key.toLowerCase()}`;
    if (keyboardShortcuts[shortcutKey]) {
      e.preventDefault();
      keyboardShortcuts[shortcutKey]();
      return;
    }

    switch (e.key) {
      case 'Enter':
        if (!isProcessing) {
          if (selectedSuggestion >= 0 && suggestions[selectedSuggestion]) {
            executeCommand(suggestions[selectedSuggestion]);
          } else {
            executeCommand(currentCommand);
          }
          setCurrentCommand('');
          setSelectedSuggestion(-1);
        }
        break;
      case 'ArrowUp':
        if (suggestions.length > 0) {
          e.preventDefault();
          setSelectedSuggestion(prev => 
            prev <= 0 ? suggestions.length - 1 : prev - 1
          );
        }
        break;
      case 'ArrowDown':
        if (suggestions.length > 0) {
          e.preventDefault();
          setSelectedSuggestion(prev => 
            prev >= suggestions.length - 1 ? 0 : prev + 1
          );
        }
        break;
      case 'Escape':
        setSuggestions([]);
        setSelectedSuggestion(-1);
        break;
      case 'Tab':
        if (suggestions.length > 0 && selectedSuggestion >= 0) {
          e.preventDefault();
          setCurrentCommand(suggestions[selectedSuggestion]);
          setSuggestions([]);
          setSelectedSuggestion(-1);
        }
        break;
    }
    
    if (soundEffects && e.key.length === 1) {
      playSound('keypress');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentCommand(value);
    generateSuggestions(value);
    setSelectedSuggestion(-1);
  };

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
  };

  const clearTerminal = () => {
    setHistory([]);
    setPerformanceMetrics(prev => ({ ...prev, commandCount: 0, avgResponseTime: 0 }));
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (historyRef.current) {
      const element = historyRef.current;
      element.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  // Boot sequence render
  if (isBooting) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={terminalEffects.bootSequence}
        className={cn('w-full max-w-4xl mx-auto', className)}
        role="application"
        aria-label={ariaLabel}
      >
        <Card 
          variant="glass-dark"
          blur="xl"
          className={cn('overflow-hidden', currentTheme.window, currentTheme.bg)}
        >
          <div className="p-12 text-center">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
              }}
              className={cn('w-16 h-16 mx-auto mb-6 rounded-full border-4 border-t-transparent', currentTheme.accent)}
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={cn('text-xl font-bold mb-2', currentTheme.accent)}
            >
              Initializing Liquid Terminal...
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={cn('text-sm', currentTheme.text)}
            >
              Loading quantum glass morphism effects...
            </motion.div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={terminalEffects.bootSequence}
      className={cn('w-full max-w-4xl mx-auto', className)}
      role="application"
      aria-label={ariaLabel}
      {...props}
    >
      <Card 
        variant={theme === 'glass' ? 'glass' : 'glass-dark'}
        blur="xl"
        className={cn(
          'overflow-hidden relative font-mono text-sm',
          currentTheme.window,
          currentTheme.bg
        )}
      >
        {/* Liquid Glass Background Effect */}
        {theme === 'liquid' && (
          <motion.div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 170, 0.1) 0%, transparent 50%)',
              filter: 'blur(100px)'
            }}
            variants={terminalEffects.liquidFlow}
            animate="animate"
          />
        )}

        {/* Terminal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <motion.div 
                whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-all duration-200 cursor-pointer" 
                onClick={onClose}
              />
              <motion.div 
                whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)' }}
                className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-all duration-200 cursor-pointer" 
                onClick={onMinimize}
              />
              <motion.div 
                whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
                className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-all duration-200 cursor-pointer" 
                onClick={onMaximize}
              />
            </div>
            <Terminal className={cn('w-5 h-5', currentTheme.accent)} />
            <span className={cn('font-bold text-lg', currentTheme.text)}>{title}</span>
            {theme === 'liquid' && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              >
                <Zap className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-bold">QUANTUM</span>
              </motion.div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {performance && (
              <div className="flex items-center gap-2 text-xs bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span className="text-white/70">
                  {performanceMetrics.avgResponseTime.toFixed(0)}ms | {performanceMetrics.commandCount} cmds
                </span>
              </div>
            )}
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={clearTerminal}
              className={cn(
                'h-8 px-3 text-xs hover:bg-white/10 transition-all duration-150',
                currentTheme.text
              )}
            >
              Clear
            </Button>
            <motion.div
              animate={isProcessing ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1, repeat: isProcessing ? Infinity : 0, ease: 'linear' }}
            >
              {isProcessing ? (
                <Pause className={cn('w-5 h-5 text-yellow-400')} />
              ) : (
                <Play className={cn('w-5 h-5', currentTheme.accent)} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={historyRef}
          className="h-96 overflow-y-auto p-4 relative z-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        >
          {/* Command History */}
          <div className="space-y-3 mb-4">
            <AnimatePresence>
              {history.map((cmd) => (
                <motion.div
                  key={cmd.id}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={terminalEffects.commandBlock}
                  whileHover="hover"
                  className="group relative p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  {/* Command Input */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className={cn('font-bold text-lg', currentTheme.prompt)}>▶</span>
                    <span className={cn('flex-1 font-semibold', currentTheme.text)}>{cmd.command}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => copyCommand(cmd.command)}
                        className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                      </motion.button>
                      <motion.div 
                        className={cn('w-2 h-2 rounded-full', {
                          'bg-yellow-400 animate-pulse': cmd.status === 'running',
                          'bg-emerald-400': cmd.status === 'completed' && cmd.type === 'success',
                          'bg-red-400': cmd.status === 'failed' || cmd.type === 'error',
                          'bg-blue-400': cmd.type === 'info'
                        })}
                        animate={cmd.status === 'running' ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 1, repeat: cmd.status === 'running' ? Infinity : 0 }}
                      />
                      <span className="text-xs text-white/50 font-mono">
                        {cmd.duration ? `${cmd.duration}ms` : cmd.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Command Output */}
                  {cmd.output && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={cn(
                        'ml-6 whitespace-pre-wrap font-mono text-sm',
                        cmd.type === 'error' 
                          ? 'text-red-300 bg-red-500/10 border-l-2 border-red-500/50 pl-3 py-2' 
                          : cn(currentTheme.text, 'opacity-80')
                      )}
                    >
                      {cmd.output}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* AI Suggestions */}
          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mb-4 p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-sm"
              >
                <div className="text-xs text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-3 h-3" />
                  AI Suggestions
                </div>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      whileHover={{ scale: 1.02, x: 4 }}
                      onClick={() => {
                        setCurrentCommand(suggestion);
                        setSuggestions([]);
                        inputRef.current?.focus();
                      }}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded text-sm transition-all duration-150',
                        index === selectedSuggestion
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      )}
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Current Input Line */}
          {interactive && (
            <div className="flex items-center gap-3">
              <span className={cn('font-bold text-lg', currentTheme.prompt)}>▶</span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  disabled={isProcessing}
                  className={cn(
                    'w-full bg-transparent outline-none placeholder-white/40 disabled:opacity-50 font-semibold pr-8',
                    currentTheme.text
                  )}
                  placeholder={isProcessing ? 'Executing quantum command...' : 'Enter command or press Tab for AI suggestions...'}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal command input"
                />
                {!isProcessing && (
                  <motion.div
                    variants={terminalEffects.cursor}
                    animate="blink"
                    className={cn('absolute right-2 top-1/2 -translate-y-1/2 w-2 h-5', currentTheme.accent)}
                    style={{ backgroundColor: 'currentColor' }}
                  />
                )}
              </div>
              {isProcessing && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className={cn('w-4 h-4 border-2 border-t-transparent rounded-full', currentTheme.accent)}
                  style={{ borderColor: 'currentColor', borderTopColor: 'transparent' }}
                />
              )}
            </div>
          )}
        </div>

        {/* Collaborative Indicator */}
        {collaborative && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-300 z-20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-blue-400"
            />
            Live Session
          </motion.div>
        )}

        {/* Performance Overlay */}
        {performance && performanceMetrics.commandCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            className="absolute bottom-4 left-4 text-xs text-white/50 bg-black/30 px-2 py-1 rounded backdrop-blur-sm z-20"
          >
            <Cpu className="w-3 h-3 inline mr-1" />
            Performance: {performanceMetrics.frameRate}fps | Memory: {performanceMetrics.memoryUsage.toFixed(1)}GB
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
} 