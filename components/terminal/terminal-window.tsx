import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus, Square } from 'lucide-react';
import { Card, Button, Input } from '../../glass-ui/src';
import { cn } from '../../lib/utils';

interface TerminalCommand {
  id: string;
  command: string;
  output?: string;
  timestamp: Date;
  type: 'success' | 'error' | 'info';
}

interface TerminalWindowProps {
  title?: string;
  className?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  theme?: 'matrix' | 'cyberpunk' | 'minimal' | 'github';
  soundEffects?: boolean;
  interactive?: boolean;
  commands?: Record<string, (args: string[]) => Promise<string> | string>;
}

const defaultCommands = {
  help: () => `Available commands:
  help       - Show this help message
  whoami     - Display current user info
  skills     - List technical skills
  projects   - Show recent projects
  contact    - Display contact information
  clear      - Clear terminal`,
  
  whoami: () => 'tulio@brand-system:~$ Full Stack Developer & UI Engineer',
  
  skills: () => `Technical Skills:
  Languages:   TypeScript, JavaScript, Python, Rust
  Frontend:    React, Next.js, Three.js, Framer Motion
  Backend:     Node.js, PostgreSQL, Redis
  Cloud:       AWS, Vercel, Docker
  Design:      Figma, Tailwind CSS, Glassmorphism`,
  
  projects: () => `Recent Projects:
  🔹 Glass UI - Component Library
  🔹 Brand System - Technical Showcase  
  🔹 Neural Network Visualizer
  🔹 Performance Dashboard`,
  
  contact: () => `Contact Information:
  📧 Email: tulio@example.com
  🔗 GitHub: github.com/tuliopc23
  💼 LinkedIn: linkedin.com/in/tuliopc23`,
  
  clear: () => 'CLEAR_TERMINAL'
};

export function TerminalWindow({
  title = 'Terminal',
  className,
  onClose,
  onMinimize,
  onMaximize,
  theme = 'github',
  soundEffects = true,
  interactive = true,
  commands = defaultCommands,
  ...props
}: TerminalWindowProps) {
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const themeConfig = {
    matrix: {
      bg: 'bg-black/95',
      text: 'text-green-400',
      accent: 'text-green-500',
      prompt: 'text-green-300',
      window: 'border-green-500/30'
    },
    cyberpunk: {
      bg: 'bg-purple-950/95',
      text: 'text-cyan-400',
      accent: 'text-pink-400',
      prompt: 'text-yellow-400',
      window: 'border-cyan-500/30'
    },
    minimal: {
      bg: 'bg-gray-900/95',
      text: 'text-gray-300',
      accent: 'text-blue-400',
      prompt: 'text-gray-400',
      window: 'border-gray-600/30'
    },
    github: {
      bg: 'bg-gray-950/95',
      text: 'text-gray-300',
      accent: 'text-blue-400',
      prompt: 'text-green-400',
      window: 'border-gray-700/30'
    }
  };

  const currentTheme = themeConfig[theme];

  const playSound = useCallback((type: 'keypress' | 'enter' | 'error') => {
    if (!soundEffects || typeof window === 'undefined') return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies = { keypress: 800, enter: 600, error: 200 };
      oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Audio context not available, fail silently
    }
  }, [soundEffects]);

  const executeCommand = useCallback(async (commandString: string) => {
    if (!commandString.trim()) return;

    setIsProcessing(true);
    playSound('enter');

    const [cmd, ...args] = commandString.trim().split(' ');
    const command = commands[cmd.toLowerCase()];

    try {
      let output: string;
      let type: 'success' | 'error' | 'info' = 'success';

      if (command) {
        const result = await command(args);
        if (result === 'CLEAR_TERMINAL') {
          setHistory([]);
          setIsProcessing(false);
          return;
        }
        output = result;
      } else {
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
        type = 'error';
        playSound('error');
      }

      const newCommand: TerminalCommand = {
        id: `${Date.now()}-${Math.random()}`,
        command: commandString,
        output,
        timestamp: new Date(),
        type
      };

      setHistory(prev => [...prev, newCommand]);
    } catch (error) {
      const errorCommand: TerminalCommand = {
        id: `${Date.now()}-${Math.random()}`,
        command: commandString,
        output: `Error executing command: ${error}`,
        timestamp: new Date(),
        type: 'error'
      };
      setHistory(prev => [...prev, errorCommand]);
      playSound('error');
    } finally {
      setIsProcessing(false);
    }
  }, [commands, playSound]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isProcessing) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
    
    if (soundEffects && e.key.length === 1) {
      playSound('keypress');
    }
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (interactive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [interactive]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className={cn('w-full max-w-4xl mx-auto', className)}
      {...props}
    >
      <Card 
        variant="glass" 
        className={cn(
          'overflow-hidden',
          currentTheme.window,
          currentTheme.bg
        )}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between p-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Terminal className={cn('h-4 w-4', currentTheme.accent)} />
            <span className={cn('text-sm font-medium', currentTheme.text)}>
              {title}
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            {onMinimize && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-yellow-500/20"
                onClick={onMinimize}
              >
                <Minus className="h-3 w-3 text-yellow-500" />
              </Button>
            )}
            {onMaximize && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-green-500/20"
                onClick={onMaximize}
              >
                <Square className="h-3 w-3 text-green-500" />
              </Button>
            )}
            {onClose && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-red-500/20"
                onClick={onClose}
              >
                <X className="h-3 w-3 text-red-500" />
              </Button>
            )}
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={historyRef}
          className="h-96 overflow-y-auto p-4 font-mono text-sm"
        >
          <AnimatePresence>
            {history.map((cmd) => (
              <motion.div
                key={cmd.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-2"
              >
                <div className="flex items-center gap-2">
                  <span className={currentTheme.prompt}>
                    tulio@brand-system:{currentDirectory}$
                  </span>
                  <span className={currentTheme.text}>{cmd.command}</span>
                </div>
                {cmd.output && (
                  <div className={cn(
                    'mt-1 pl-4 whitespace-pre-wrap',
                    cmd.type === 'error' ? 'text-red-400' : currentTheme.text
                  )}>
                    {cmd.output}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Current Input Line */}
          {interactive && (
            <div className="flex items-center gap-2 mt-2">
              <span className={currentTheme.prompt}>
                tulio@brand-system:{currentDirectory}$
              </span>
              <Input
                ref={inputRef}
                variant="ghost"
                value={currentCommand}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isProcessing}
                className={cn(
                  'flex-1 border-none bg-transparent focus:ring-0 focus:ring-offset-0 p-0',
                  currentTheme.text,
                  'font-mono'
                )}
                placeholder={isProcessing ? 'Processing...' : 'Type a command...'}
              />
              {isProcessing && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className={cn('h-3 w-3 rounded-full border border-t-transparent', currentTheme.accent)}
                />
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
} 