'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Activity, Zap } from 'lucide-react';
import { PerformanceDashboard } from '../../components/performance/performance-dashboard';

export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-brand-primary hover:text-brand-primary-hover transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Brand System
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Activity className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl font-bold">Performance Center</h1>
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-time monitoring of Core Web Vitals, runtime performance metrics, and optimization insights
            for the Tulio Brand System components.
          </p>
        </div>

        {/* Performance Dashboard */}
        <PerformanceDashboard />

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-xl">
            <h3 className="text-lg font-semibold mb-3">About Performance Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This dashboard tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB) and runtime performance 
              metrics to ensure optimal user experience. All components are optimized for sub-16ms 
              interactions to maintain 60fps performance.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">
                Real-time Monitoring
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs">
                Core Web Vitals
              </span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs">
                Runtime Analytics
              </span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs">
                60fps Target
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
