'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Clock, CheckCircle, XCircle, Loader } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CommandBlockProps {
  command: string;
  output?: string;
  status: 'idle' | 'running' | 'success' | 'error';
  timestamp: Date;
  duration?: number;
  onCopy?: (command: string) => void;
  className?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

const statusConfig = {
  idle: {
    icon: Clock,
    color: 'text-gray-400',
    bgColor: 'bg-gray-400/20',
    borderColor: 'border-gray-400/30'
  },
  running: {
    icon: Loader,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/30'
  },
  success: {
    icon: CheckCircle,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/20',
    borderColor: 'border-emerald-400/30'
  },
  error: {
    icon: XCircle,
    color: 'text-red-400',
    bgColor: 'bg-red-400/20',
    borderColor: 'border-red-400/30'
  }
};

const blockVariants = {
  hidden: { 
    opacity: 0, 
    x: -20, 
    filter: 'blur(4px)' 
  },
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
    transition: { 
      duration: 0.15, 
      ease: 'easeOut' 
    }
  }
};

export function CommandBlock({
  command,
  output,
  status,
  timestamp,
  duration,
  onCopy,
  className,
  variant = 'default'
}: CommandBlockProps) {
  const config = statusConfig[status];
  const StatusIcon = config.icon;

  const handleCopy = () => {
    if (onCopy) {
      onCopy(command);
    } else {
      navigator.clipboard.writeText(command);
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={cn(
          'group flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors',
          className
        )}
      >
        <motion.div
          animate={status === 'running' ? { rotate: 360 } : {}}
          transition={{ duration: 1, repeat: status === 'running' ? Infinity : 0, ease: 'linear' }}
        >
          <StatusIcon className={cn('w-4 h-4', config.color)} />
        </motion.div>
        <code className="flex-1 text-sm font-mono text-white/90">{command}</code>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <Copy className="w-3 h-3" />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={blockVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={cn(
        'group relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm',
        config.borderColor,
        className
      )}
    >
      {/* Command Header */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          animate={status === 'running' ? { rotate: 360, scale: [1, 1.1, 1] } : {}}
          transition={{ 
            rotate: { duration: 1, repeat: status === 'running' ? Infinity : 0, ease: 'linear' },
            scale: { duration: 1, repeat: status === 'running' ? Infinity : 0, ease: 'easeInOut' }
          }}
          className={cn('p-2 rounded-full', config.bgColor)}
        >
          <StatusIcon className={cn('w-4 h-4', config.color)} />
        </motion.div>
        
        <div className="flex-1">
          <code className="text-white/90 font-semibold text-base">{command}</code>
        </div>
        
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </motion.button>
          
          <div className="text-xs text-white/50 font-mono bg-black/20 px-2 py-1 rounded">
            {duration ? `${duration}ms` : timestamp.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Command Output */}
      {output && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ delay: 0.1 }}
          className={cn(
            'mt-3 p-3 rounded-lg font-mono text-sm whitespace-pre-wrap',
            status === 'error' 
              ? 'text-red-300 bg-red-500/10 border-l-4 border-red-500/50' 
              : 'text-white/70 bg-black/20'
          )}
        >
          {output}
        </motion.div>
      )}

      {/* Status Indicator */}
      <motion.div
        className={cn('absolute top-2 right-2 w-2 h-2 rounded-full', config.color.replace('text-', 'bg-'))}
        animate={status === 'running' ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 1.5, repeat: status === 'running' ? Infinity : 0 }}
      />

      {/* Liquid Glass Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(10px)'
        }}
      />
    </motion.div>
  );
}