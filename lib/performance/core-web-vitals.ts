/**
 * Core Web Vitals Tracking System
 * Monitors and reports CLS, LCP, FID, FCP, TTFB
 */

import { getCLS, getFCP, getFID, getLCP, getTTFB, Metric } from 'web-vitals';

export interface WebVitalsMetrics {
  cls: number | null;
  fcp: number | null;
  fid: number | null;
  lcp: number | null;
  ttfb: number | null;
  timestamp: number;
}

export interface WebVitalsThresholds {
  cls: { good: number; needs_improvement: number };
  fcp: { good: number; needs_improvement: number };
  fid: { good: number; needs_improvement: number };
  lcp: { good: number; needs_improvement: number };
  ttfb: { good: number; needs_improvement: number };
}

// Standard Web Vitals thresholds (in milliseconds or ratio)
export const WEB_VITALS_THRESHOLDS: WebVitalsThresholds = {
  cls: { good: 0.1, needs_improvement: 0.25 },
  fcp: { good: 1800, needs_improvement: 3000 },
  fid: { good: 100, needs_improvement: 300 },
  lcp: { good: 2500, needs_improvement: 4000 },
  ttfb: { good: 800, needs_improvement: 1800 }
};

export type MetricStatus = 'good' | 'needs-improvement' | 'poor';

export function getMetricStatus(metricName: keyof WebVitalsThresholds, value: number): MetricStatus {
  const thresholds = WEB_VITALS_THRESHOLDS[metricName];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needs_improvement) return 'needs-improvement';
  return 'poor';
}

export class WebVitalsTracker {
  private static instance: WebVitalsTracker;
  private metrics: WebVitalsMetrics = {
    cls: null,
    fcp: null,
    fid: null,
    lcp: null,
    ttfb: null,
    timestamp: Date.now()
  };
  private listeners: Set<(metrics: WebVitalsMetrics) => void> = new Set();
  private isTracking = false;

  static getInstance(): WebVitalsTracker {
    if (!WebVitalsTracker.instance) {
      WebVitalsTracker.instance = new WebVitalsTracker();
    }
    return WebVitalsTracker.instance;
  }

  startTracking(): void {
    if (this.isTracking) return;
    this.isTracking = true;

    // Track all Core Web Vitals
    getCLS(this.handleMetric('cls'));
    getFCP(this.handleMetric('fcp'));
    getFID(this.handleMetric('fid'));
    getLCP(this.handleMetric('lcp'));
    getTTFB(this.handleMetric('ttfb'));

    console.log('🎯 Core Web Vitals tracking started');
  }

  private handleMetric(name: keyof Omit<WebVitalsMetrics, 'timestamp'>) {
    return (metric: Metric) => {
      this.metrics[name] = metric.value;
      this.metrics.timestamp = Date.now();
      
      const status = getMetricStatus(name, metric.value);
      const statusEmoji = status === 'good' ? '✅' : status === 'needs-improvement' ? '⚠️' : '❌';
      
      console.log(`${statusEmoji} ${name.toUpperCase()}: ${metric.value.toFixed(2)}${name === 'cls' ? '' : 'ms'} (${status})`);
      
      this.notifyListeners();
      
      // Send to analytics (implement your preferred service)
      this.sendToAnalytics(name, metric);
    };
  }

  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  getMetricsWithStatus(): {
    metrics: WebVitalsMetrics;
    status: Record<keyof Omit<WebVitalsMetrics, 'timestamp'>, MetricStatus>;
  } {
    const metrics = this.getMetrics();
    const status = {} as Record<keyof Omit<WebVitalsMetrics, 'timestamp'>, MetricStatus>;
    
    (Object.keys(metrics) as Array<keyof WebVitalsMetrics>).forEach(key => {
      if (key !== 'timestamp' && metrics[key] !== null) {
        status[key] = getMetricStatus(key, metrics[key]!);
      }
    });

    return { metrics, status };
  }

  subscribe(callback: (metrics: WebVitalsMetrics) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners(): void {
    this.listeners.forEach(callback => callback(this.getMetrics()));
  }

  private sendToAnalytics(name: string, metric: Metric): void {
    // Send to your analytics service
    // Example implementations:
    
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        custom_parameter: metric.value,
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.value)
      });
    }

    // Vercel Analytics
    if (typeof window !== 'undefined' && 'va' in window) {
      (window as any).va('track', 'Web Vitals', {
        metric: name,
        value: metric.value,
        id: metric.id
      });
    }

    // Custom analytics endpoint
    if (typeof fetch !== 'undefined') {
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          value: metric.value,
          id: metric.id,
          timestamp: Date.now(),
          url: window.location.href
        })
      }).catch(err => console.warn('Failed to send web vitals:', err));
    }
  }

  // Generate performance report
  generateReport(): {
    summary: string;
    recommendations: string[];
    score: number;
  } {
    const { metrics, status } = this.getMetricsWithStatus();
    const scores = {
      good: 100,
      'needs-improvement': 75,
      poor: 50
    };

    const validMetrics = Object.entries(status).filter(([_, s]) => s);
    const totalScore = validMetrics.reduce((sum, [_, s]) => sum + scores[s], 0);
    const avgScore = validMetrics.length > 0 ? totalScore / validMetrics.length : 0;

    const recommendations: string[] = [];
    
    if (status.lcp === 'poor') {
      recommendations.push('🚀 Optimize Largest Contentful Paint: Consider image optimization, CDN usage, and server response times');
    }
    if (status.fid === 'poor') {
      recommendations.push('⚡ Improve First Input Delay: Reduce JavaScript execution time and optimize event handlers');
    }
    if (status.cls === 'poor') {
      recommendations.push('📐 Fix Cumulative Layout Shift: Set dimensions for images and avoid inserting content above existing elements');
    }
    if (status.fcp === 'poor') {
      recommendations.push('🎨 Optimize First Contentful Paint: Minimize render-blocking resources and optimize critical CSS');
    }
    if (status.ttfb === 'poor') {
      recommendations.push('🌐 Improve Time to First Byte: Optimize server response times and consider edge caching');
    }

    let summary = '';
    if (avgScore >= 90) {
      summary = '🎉 Excellent! Your app has outstanding Core Web Vitals performance.';
    } else if (avgScore >= 75) {
      summary = '👍 Good performance with room for improvement.';
    } else {
      summary = '⚠️ Performance needs attention to improve user experience.';
    }

    return {
      summary,
      recommendations,
      score: Math.round(avgScore)
    };
  }
}

// React Hook for easy integration
export function useWebVitals() {
  const [metrics, setMetrics] = React.useState<WebVitalsMetrics | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const tracker = WebVitalsTracker.getInstance();
    
    // Start tracking
    tracker.startTracking();
    
    // Subscribe to updates
    const unsubscribe = tracker.subscribe((newMetrics) => {
      setMetrics(newMetrics);
      setIsLoading(false);
    });

    // Get initial metrics
    setMetrics(tracker.getMetrics());
    setIsLoading(false);

    return unsubscribe;
  }, []);

  const getReport = React.useCallback(() => {
    return WebVitalsTracker.getInstance().generateReport();
  }, []);

  const getMetricsWithStatus = React.useCallback(() => {
    return WebVitalsTracker.getInstance().getMetricsWithStatus();
  }, []);

  return {
    metrics,
    isLoading,
    getReport,
    getMetricsWithStatus
  };
}

// Add React import
import React from 'react';
