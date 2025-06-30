'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface AISuggestionsPanelProps {
  suggestions: string[]
  selectedIndex: number
  onPick: (cmd: string) => void
}

export function AISuggestionsPanel({ suggestions, selectedIndex, onPick }: AISuggestionsPanelProps) {
  return (
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
            {suggestions.map((s, i) => (
              <motion.button
                key={s}
                whileHover={{ scale: 1.02, x: 4 }}
                onClick={() => onPick(s)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded text-sm transition-all duration-150',
                  i === selectedIndex
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                {s}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
