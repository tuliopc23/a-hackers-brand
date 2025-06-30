'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Copy } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { terminalEffects } from './constants'
import type { TerminalCommand } from './types'

interface CommandHistoryProps {
  history: TerminalCommand[]
  currentTheme: { text: string; prompt: string }
  onCopy: (cmd: string) => void
}

export function CommandHistory({ history, currentTheme, onCopy }: CommandHistoryProps) {
  return (
    <div className="space-y-3 mb-4">
      <AnimatePresence>
        {history.map(cmd => (
          <motion.div
            key={cmd.id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={terminalEffects.commandBlock}
            whileHover="hover"
            className="group relative p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={cn('font-bold text-lg', currentTheme.prompt)}>▶</span>
              <span className={cn('flex-1 font-semibold', currentTheme.text)}>{cmd.command}</span>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onCopy(cmd.command)}
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
  )
}
