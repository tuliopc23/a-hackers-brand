'use client'

import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

interface PerformanceOverlayProps {
  metrics: { frameRate: number; memoryUsage: number; commandCount: number }
  enabled: boolean
}

export function PerformanceOverlay({ metrics, enabled }: PerformanceOverlayProps) {
  if (!enabled || metrics.commandCount === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      className="absolute bottom-4 left-4 text-xs text-white/50 bg-black/30 px-2 py-1 rounded backdrop-blur-sm z-20"
    >
      <Cpu className="w-3 h-3 inline mr-1" />
      Performance: {metrics.frameRate}fps | Memory: {metrics.memoryUsage.toFixed(1)}GB
    </motion.div>
  )
}
