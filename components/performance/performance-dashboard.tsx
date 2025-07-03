'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  Target, 
  TrendingUp, 
  TrendingDown,
  Eye,
  MousePointer,
  Layers,
  Wifi,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { useWebVitals } from '../../lib/performance/core-web-vitals';
import { PerformanceMonitor } from '../../lib/performance/optimization';

interface MetricCardProps {
  title: string;
  value: number | null;
  unit: string;
  status: 'good' | 'needs-improvement' | 'poor' | null;
  icon: React.ReactNode;
  description: string;
  threshold: { good: number; needsImprovement: number };
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  status,
  icon,
  description,
  threshold
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getProgressPercentage = () => {
    if (value === null) return 0;
    const max = threshold.needsImprovement * 1.5;
    return Math.min((value / max) * 100, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        {getStatusIcon()}
      </div>

      <div className="mb-4">
        <div className={`text-3xl font-bold ${getStatusColor()}`}>
          {value !== null ? `${value.toFixed(value < 1 ? 3 : 0)}${unit}` : '--'}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
        <motion.div
          className={`h-2 rounded-full ${
            status === 'good' ? 'bg-green-500' :
            status === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${getProgressPercentage()}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* Thresholds */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>Good: &lt;{threshold.good}{unit}</span>
        <span>Poor: &gt;{threshold.needsImprovement}{unit}</span>
      </div>
    </motion.div>
  );
};

export function PerformanceDashboard() {
  const { metrics, isLoading, getReport, getMetricsWithStatus } = useWebVitals();
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    // Subscribe to performance monitor
    const monitor = PerformanceMonitor.getInstance();
    const unsubscribe = monitor.subscribe((perfMetrics) => {
      setPerformanceMetrics(perfMetrics);
    });

    // Get initial metrics
    setPerformanceMetrics(monitor.getMetrics());

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (metrics) {
      setReport(getReport());
    }
  }, [metrics, getReport]);

  const { status } = getMetricsWithStatus();

  const webVitalsCards = [
    {
      title: 'Largest Contentful Paint',
      value: metrics?.lcp,
      unit: 'ms',
      status: status?.lcp || null,
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      description: 'Loading performance of main content',
      threshold: { good: 2500, needsImprovement: 4000 }
    },
    {
      title: 'First Input Delay',
      value: metrics?.fid,
      unit: 'ms',
      status: status?.fid || null,
      icon: <MousePointer className="w-6 h-6 text-purple-500" />,
      description: 'Responsiveness to user interactions',
      threshold: { good: 100, needsImprovement: 300 }
    },
    {
      title: 'Cumulative Layout Shift',
      value: metrics?.cls,
      unit: '',
      status: status?.cls || null,
      icon: <Layers className="w-6 h-6 text-orange-500" />,
      description: 'Visual stability during loading',
      threshold: { good: 0.1, needsImprovement: 0.25 }
    },
    {
      title: 'First Contentful Paint',
      value: metrics?.fcp,
      unit: 'ms',
      status: status?.fcp || null,
      icon: <Zap className="w-6 h-6 text-green-500" />,
      description: 'Time to first visible content',
      threshold: { good: 1800, needsImprovement: 3000 }
    },
    {
      title: 'Time to First Byte',
      value: metrics?.ttfb,
      unit: 'ms',
      status: status?.ttfb || null,
      icon: <Wifi className="w-6 h-6 text-cyan-500" />,
      description: 'Server response time',
      threshold: { good: 800, needsImprovement: 1800 }
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
        />
        <span className="ml-3 text-lg">Loading performance metrics...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-2"
        >
          Performance Dashboard
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400"
        >
          Real-time Core Web Vitals and performance monitoring
        </motion.p>
      </div>

      {/* Performance Score */}
      {report && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect p-8 rounded-xl border border-white/20 backdrop-blur-md shadow-xl text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-6xl font-bold text-blue-500">
              {report.score}
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 uppercase tracking-wide">Performance Score</div>
              <div className={`text-lg font-semibold ${
                report.score >= 90 ? 'text-green-500' :
                report.score >= 75 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {report.score >= 90 ? 'Excellent' :
                 report.score >= 75 ? 'Good' : 'Needs Improvement'}
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {report.summary}
          </p>
          
          {report.recommendations.length > 0 && (
            <div className="text-left">
              <h4 className="font-semibold mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {report.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* Core Web Vitals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webVitalsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <MetricCard {...card} />
          </motion.div>
        ))}
      </div>

      {/* Performance Monitor Metrics */}
      {performanceMetrics && Object.keys(performanceMetrics).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Runtime Performance Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(performanceMetrics).map(([label, stats]: [string, any]) => (
              <div key={label} className="p-4 bg-white/5 rounded-lg">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {label.replace(/_/g, ' ').toUpperCase()}
                </div>
                <div className="text-2xl font-bold mb-2">
                  {stats.avg?.toFixed(1)}ms
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>Max: {stats.max?.toFixed(1)}ms</div>
                  <div>P95: {stats.p95?.toFixed(1)}ms</div>
                  <div>Count: {stats.count}</div>
                </div>
                {stats.avg > 16 && (
                  <div className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Above 16ms target
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Real-time Performance Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          Performance Targets
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-sm text-green-600 dark:text-green-400">
              Sub-16ms Interactions
            </div>
            <div className="text-lg font-bold text-green-500">60 FPS</div>
          </div>
          
          <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-sm text-blue-600 dark:text-blue-400">
              Bundle Size Target
            </div>
            <div className="text-lg font-bold text-blue-500">&lt; 250KB</div>
          </div>
          
          <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-sm text-purple-600 dark:text-purple-400">
              Core Web Vitals
            </div>
            <div className="text-lg font-bold text-purple-500">All Green</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
