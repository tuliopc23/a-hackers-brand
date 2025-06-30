'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Zap, 
  Settings, 
  Activity, 
  Code, 
  Sparkles,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import { TerminalWindow, CommandBlock, AICommandSuggestions, PerformanceMonitor } from '@/components/terminal';
import { Card } from '@/glass-ui/src/components/card';
import { Button } from '@/glass-ui/src/components/button';
import { cn } from '@/lib/utils';

interface DemoSection {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  component: React.ReactNode;
}

export default function DemoPage() {
  const [activeSection, setActiveSection] = useState('terminal');
  const [isPlaying, setIsPlaying] = useState(true);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    avgResponseTime: 45,
    commandCount: 23,
    frameRate: 60,
    memoryUsage: 2.3,
    cpuUsage: 15,
    networkLatency: 32,
    activeConnections: 3
  });

  // Mock command executor for demo
  const executeCommand = async (command: string) => {
    const delay = Math.random() * 1000 + 500; // 0.5-1.5s delay
    await new Promise(resolve => setTimeout(resolve, delay));

    const responses: Record<string, string> = {
      help: '🚀 Available commands: help, whoami, skills, projects, contact, performance, demo',
      whoami: `🧑‍💻 Tulio Cunha - Full Stack Developer & Design System Architect\nSpecializing in liquid glass interfaces and terminal experiences`,
      skills: `⚡ Core Technologies:\n• Frontend: React, Next.js, TypeScript, Three.js\n• Design: Framer Motion, Tailwind CSS, Glass UI\n• Performance: WebGL, WebAssembly, WebGPU\n• Tools: Git, Docker, AWS, Vercel`,
      projects: `🏗️ Featured Projects:\n• Glass UI - Advanced React component library\n• Liquid Terminal - This interactive terminal\n• Neural Network Visualizer - WebGPU accelerated\n• Performance Dashboard - Real-time metrics`,
      contact: `📫 Get in touch:\n• Email: tulio@tuliocunha.dev\n• GitHub: github.com/tuliopc23\n• Portfolio: tuliocunha.dev`,
      performance: `⚡ System Status:\n• Response Time: ${performanceMetrics.avgResponseTime}ms\n• Frame Rate: ${performanceMetrics.frameRate}fps\n• Memory Usage: ${performanceMetrics.memoryUsage}GB\n• CPU Usage: ${performanceMetrics.cpuUsage}%`,
      demo: `🎮 Demo Mode Activated!\nExplore the terminal with commands like:\n• help - Show available commands\n• skills - View technical skills\n• projects - Browse featured work`,
    };

    const output = responses[command.toLowerCase()] || `Command "${command}" executed successfully!\nOutput: ${command} - Demo response`;
    
    return {
      output,
      status: Math.random() > 0.1 ? 'success' as const : 'error' as const,
      duration: delay
    };
  };

  const demoSections: DemoSection[] = [
    {
      id: 'terminal',
      title: 'Liquid Terminal',
      description: 'Advanced terminal with AI suggestions and quantum effects',
      icon: Terminal,
      component: (
        <TerminalWindow
          title="Liquid Glass Terminal"
          theme="liquid"
          onCommandExecute={executeCommand}
          aiSuggestions={true}
          performance={true}
          collaborative={false}
          className="w-full"
        />
      )
    },
    {
      id: 'ai-suggestions',
      title: 'AI Command Intelligence',
      description: 'Smart command suggestions with reasoning',
      icon: Sparkles,
      component: (
        <div className="space-y-4">
          <AICommandSuggestions
            input="git"
            onSelect={(cmd) => console.log('Selected:', cmd)}
            selectedIndex={1}
            className="w-full"
          />
          <AICommandSuggestions
            input="npm"
            onSelect={(cmd) => console.log('Selected:', cmd)}
            selectedIndex={0}
            className="w-full"
          />
        </div>
      )
    },
    {
      id: 'command-blocks',
      title: 'Command Blocks',
      description: 'Interactive command history with status indicators',
      icon: Code,
      component: (
        <div className="space-y-4">
          <CommandBlock
            command="npm install @/glass-ui"
            output="✅ Package installed successfully!
📦 Added 15 packages in 2.3s"
            status="success"
            timestamp={new Date()}
            duration={2300}
          />
          <CommandBlock
            command="yarn build"
            output="🚀 Building production bundle...
✨ Build completed in 4.2s"
            status="success"
            timestamp={new Date(Date.now() - 60000)}
            duration={4200}
          />
          <CommandBlock
            command="git push origin main"
            status="running"
            timestamp={new Date()}
          />
        </div>
      )
    },
    {
      id: 'performance',
      title: 'Performance Monitor',
      description: 'Real-time performance metrics and optimization tips',
      icon: Activity,
      component: (
        <div className="space-y-4">
          <PerformanceMonitor
            metrics={performanceMetrics}
            variant="detailed"
            showTrends={true}
            realTimeUpdates={isPlaying}
            className="w-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PerformanceMonitor
              metrics={performanceMetrics}
              variant="compact"
              className="w-full"
            />
            <PerformanceMonitor
              metrics={performanceMetrics}
              variant="minimal"
              className="w-full"
            />
          </div>
        </div>
      )
    }
  ];

  // Simulate real-time performance updates
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setPerformanceMetrics(prev => ({
        ...prev,
        avgResponseTime: Math.max(20, prev.avgResponseTime + (Math.random() - 0.5) * 10),
        frameRate: Math.min(60, Math.max(30, prev.frameRate + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.max(1, prev.memoryUsage + (Math.random() - 0.5) * 0.1),
        cpuUsage: Math.max(5, Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        networkLatency: Math.max(10, prev.networkLatency + (Math.random() - 0.5) * 20)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Liquid Glass Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 border-b border-white/10 backdrop-blur-xl bg-white/5"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="p-3 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
              >
                <Terminal className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Liquid Glass Terminal Fusion
                </h1>
                <p className="text-white/60">Production-ready design system components</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="glass"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2"
              >
                {isPlaying ? (
                  <><Pause className="w-4 h-4" /> Pause Demo</>
                ) : (
                  <><Play className="w-4 h-4" /> Start Demo</>
                )}
              </Button>
              <Button variant="glass" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.header>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card
                variant="glass"
                blur="xl"
                className="p-4 sticky top-6"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  Components
                </h3>
                <nav className="space-y-2">
                  {demoSections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    
                    return (
                      <motion.button
                        key={section.id}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveSection(section.id)}
                        className={cn(
                          'w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3',
                          isActive
                            ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                            : 'hover:bg-white/10 text-white/70 hover:text-white'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{section.title}</div>
                          <div className="text-xs opacity-60">{section.description}</div>
                        </div>
                        <ArrowRight className={cn(
                          'w-3 h-3 transition-transform',
                          isActive ? 'rotate-90' : ''
                        )} />
                      </motion.button>
                    );
                  })}
                </nav>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                {demoSections.map((section) => {
                  if (section.id !== activeSection) return null;
                  
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25
                      }}
                      className="space-y-6"
                    >
                      {/* Section Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30"
                        >
                          <section.icon className="w-6 h-6 text-emerald-400" />
                        </motion.div>
                        <div>
                          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                            {section.title}
                          </h2>
                          <p className="text-white/60 mt-1">{section.description}</p>
                        </div>
                      </div>

                      {/* Component Demo */}
                      <div className="space-y-6">
                        {section.component}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          className="mt-20 p-6 border-t border-white/10 backdrop-blur-xl bg-white/5"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/50 text-sm">
              Built with 💎 by{' '}
              <span className="text-emerald-400 font-semibold">Tulio Cunha</span>
              {' '}using React, Framer Motion, and Liquid Glass principles
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
