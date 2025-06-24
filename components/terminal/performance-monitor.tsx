'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, Memory, Network, Zap, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PerformanceMetrics {
  avgResponseTime: number;
  commandCount: number;
  frameRate: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  activeConnections: number;
}

interface PerformanceMonitorProps {
  metrics: PerformanceMetrics;
  className?: string;
  variant?: 'compact' | 'detailed' | 'minimal';
  showTrends?: boolean;
  realTimeUpdates?: boolean;
}

interface MetricHistory {
  timestamp: number;
  value: number;
}

const MetricCard = ({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  color, 
  trend, 
  history = [],
  className 
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  unit: string;
  color: string;
  trend?: 'up' | 'down' | 'stable';
  history?: MetricHistory[];
  className?: string;
}) => {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : null;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={cn(
        'relative p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden',
        className
      )}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 70% 30%, ${color}20 0%, transparent 50%)`
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: label === 'CPU' ? [0, 360] : 0 }}
              transition={{ duration: 2, repeat: label === 'CPU' ? Infinity : 0, ease: 'linear' }}
              className={cn('p-1 rounded', `bg-${color}-500/20`)}
            >
              <Icon className={cn('w-3 h-3', `text-${color}-400`)} />
            </motion.div>
            <span className="text-white/70 text-xs font-medium">{label}</span>
          </div>
          
          {TrendIcon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={cn(
                'p-1 rounded-full',
                trend === 'up' ? 'bg-red-500/20' : 'bg-green-500/20'
              )}
            >
              <TrendIcon className={cn(
                'w-3 h-3',
                trend === 'up' ? 'text-red-400' : 'text-green-400'
              )} />
            </motion.div>
          )}
        </div>

        <div className="flex items-baseline gap-1">
          <motion.span
            key={value}
            initial={{ scale: 1.2, color: color }}
            animate={{ scale: 1, color: 'white' }}
            className="text-lg font-bold text-white"
          >
            {value.toFixed(label === 'Response' ? 0 : 1)}
          </motion.span>
          <span className="text-white/50 text-xs">{unit}</span>
        </div>

        {/* Mini Chart */}
        {history.length > 0 && (
          <div className="mt-2 h-6 flex items-end gap-0.5">
            {history.slice(-10).map((point, index) => (
              <motion.div
                key={point.timestamp}
                initial={{ height: 0 }}
                animate={{ height: `${(point.value / Math.max(...history.map(h => h.value))) * 100}%` }}
                transition={{ delay: index * 0.05 }}
                className={cn('flex-1 rounded-sm', `bg-${color}-400/50`)}
                style={{ minHeight: '2px' }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export function PerformanceMonitor({
  metrics,
  className,
  variant = 'compact',
  showTrends = true,
  realTimeUpdates = true
}: PerformanceMonitorProps) {
  const [history, setHistory] = useState<Record<string, MetricHistory[]>>({
    responseTime: [],
    frameRate: [],
    memory: [],
    cpu: [],
    network: []
  });

  const [trends, setTrends] = useState<Record<string, 'up' | 'down' | 'stable'>>({});
  const lastMetrics = useRef<PerformanceMetrics>(metrics);

  // Update history and calculate trends
  useEffect(() => {
    if (!realTimeUpdates) return;

    const now = Date.now();
    const newHistory = { ...history };

    // Add new data points
    newHistory.responseTime = [...(newHistory.responseTime || []), { timestamp: now, value: metrics.avgResponseTime }].slice(-50);
    newHistory.frameRate = [...(newHistory.frameRate || []), { timestamp: now, value: metrics.frameRate }].slice(-50);
    newHistory.memory = [...(newHistory.memory || []), { timestamp: now, value: metrics.memoryUsage }].slice(-50);
    newHistory.cpu = [...(newHistory.cpu || []), { timestamp: now, value: metrics.cpuUsage }].slice(-50);
    newHistory.network = [...(newHistory.network || []), { timestamp: now, value: metrics.networkLatency }].slice(-50);

    setHistory(newHistory);

    // Calculate trends
    if (showTrends) {
      const newTrends: Record<string, 'up' | 'down' | 'stable'> = {};
      
      Object.entries(metrics).forEach(([key, value]) => {
        const lastValue = (lastMetrics.current as any)[key];
        const diff = value - lastValue;
        const threshold = lastValue * 0.05; // 5% threshold
        
        if (Math.abs(diff) < threshold) {
          newTrends[key] = 'stable';
        } else {
          newTrends[key] = diff > 0 ? 'up' : 'down';
        }
      });

      setTrends(newTrends);
    }

    lastMetrics.current = metrics;
  }, [metrics, realTimeUpdates, showTrends, history]);

  const getPerformanceStatus = () => {
    const { avgResponseTime, frameRate, memoryUsage, cpuUsage } = metrics;
    
    if (avgResponseTime > 100 || frameRate < 30 || memoryUsage > 8 || cpuUsage > 80) {
      return { status: 'warning', color: 'yellow', message: 'Performance Issues Detected' };
    } else if (avgResponseTime > 50 || frameRate < 45 || memoryUsage > 4 || cpuUsage > 60) {
      return { status: 'caution', color: 'orange', message: 'Monitoring Performance' };
    } else {
      return { status: 'optimal', color: 'emerald', message: 'Optimal Performance' };
    }
  };

  const performanceStatus = getPerformanceStatus();

  if (variant === 'minimal') {
    return (
      <motion.div
        className={cn('flex items-center gap-2 text-xs', className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{ 
            backgroundColor: [`${performanceStatus.color}-500`, `${performanceStatus.color}-400`, `${performanceStatus.color}-500`]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full"
        />
        <span className="text-white/70">
          {metrics.avgResponseTime.toFixed(0)}ms | {metrics.frameRate}fps
        </span>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm',
          className
        )}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className={cn('p-1 rounded-full', `bg-${performanceStatus.color}-500/20`)}
        >
          <Activity className={cn('w-4 h-4', `text-${performanceStatus.color}-400`)} />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-white/70">
              {metrics.avgResponseTime.toFixed(0)}ms
            </span>
            <span className="text-white/70">
              {metrics.frameRate}fps
            </span>
            <span className="text-white/70">
              {metrics.commandCount} cmds
            </span>
          </div>
          <div className="text-xs text-white/50 mt-0.5">
            {performanceStatus.message}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'p-4 rounded-xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 backdrop-blur-md',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              rotate: 360,
              backgroundColor: [`${performanceStatus.color}-500/20`, `${performanceStatus.color}-400/30`, `${performanceStatus.color}-500/20`]
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
              backgroundColor: { duration: 2, repeat: Infinity }
            }}
            className="p-2 rounded-full"
          >
            <Activity className={cn('w-5 h-5', `text-${performanceStatus.color}-400`)} />
          </motion.div>
          <div>
            <h3 className="text-white font-bold text-sm">Performance Monitor</h3>
            <p className={cn('text-xs', `text-${performanceStatus.color}-400`)}>
              {performanceStatus.message}
            </p>
          </div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn('px-2 py-1 rounded-full text-xs font-bold', 
            `bg-${performanceStatus.color}-500/20 text-${performanceStatus.color}-400`
          )}
        >
          {performanceStatus.status.toUpperCase()}
        </motion.div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <MetricCard
          icon={Zap}
          label="Response"
          value={metrics.avgResponseTime}
          unit="ms"
          color="emerald"
          trend={trends.avgResponseTime}
          history={history.responseTime}
        />
        
        <MetricCard
          icon={Activity}
          label="FPS"
          value={metrics.frameRate}
          unit="fps"
          color="blue"
          trend={trends.frameRate}
          history={history.frameRate}
        />
        
        <MetricCard
          icon={Memory}
          label="Memory"
          value={metrics.memoryUsage}
          unit="GB"
          color="purple"
          trend={trends.memoryUsage}
          history={history.memory}
        />
        
        <MetricCard
          icon={Cpu}
          label="CPU"
          value={metrics.cpuUsage}
          unit="%"
          color="orange"
          trend={trends.cpuUsage}
          history={history.cpu}
        />
        
        <MetricCard
          icon={Network}
          label="Network"
          value={metrics.networkLatency}
          unit="ms"
          color="cyan"
          trend={trends.networkLatency}
          history={history.network}
        />
        
        <MetricCard
          icon={Activity}
          label="Commands"
          value={metrics.commandCount}
          unit=""
          color="pink"
          trend="stable"
        />
      </div>

      {/* Performance Tips */}
      <AnimatePresence>
        {performanceStatus.status !== 'optimal' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">Performance Tips</span>
            </div>
            <ul className="text-white/70 text-xs space-y-1">
              {metrics.avgResponseTime > 100 && (
                <li>• Consider reducing animation complexity</li>
              )}
              {metrics.frameRate < 45 && (
                <li>• Enable hardware acceleration in browser</li>
              )}
              {metrics.memoryUsage > 4 && (
                <li>• Clear terminal history to free memory</li>
              )}
              {metrics.cpuUsage > 60 && (
                <li>• Close unused browser tabs</li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}