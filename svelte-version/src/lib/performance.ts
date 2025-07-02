// Performance monitoring utilities for Liquid Glass Terminal Fusion

interface PerformanceMetrics {
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
  buildTime?: string;
}

interface ComponentMetrics {
  component: string;
  renderTime: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private componentMetrics: ComponentMetrics[] = [];
  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
      this.trackBuildInfo();
    }
  }

  private initializeObservers(): void {
    // Track First Contentful Paint
    this.observeMetric('paint', (entries) => {
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.FCP = fcpEntry.startTime;
        this.logMetric('FCP', fcpEntry.startTime);
      }
    });

    // Track Largest Contentful Paint
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lcpEntry = entries.pop();
      if (lcpEntry) {
        this.metrics.LCP = lcpEntry.startTime;
        this.logMetric('LCP', lcpEntry.startTime);
      }
    });

    // Track First Input Delay
    this.observeMetric('first-input', (entries) => {
      const fidEntry = entries[0];
      if (fidEntry) {
        this.metrics.FID = fidEntry.processingStart - fidEntry.startTime;
        this.logMetric('FID', this.metrics.FID);
      }
    });

    // Track Cumulative Layout Shift
    this.observeMetric('layout-shift', (entries) => {
      let clsValue = 0;
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.CLS = clsValue;
      this.logMetric('CLS', clsValue);
    });

    // Track Navigation Timing
    this.trackNavigationTiming();
  }

  private observeMetric(
    type: string, 
    callback: (entries: PerformanceEntry[]) => void
  ): void {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ type, buffered: true });
      this.observers.set(type, observer);
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }

  private trackNavigationTiming(): void {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.TTFB = navigation.responseStart - navigation.requestStart;
        this.logMetric('TTFB', this.metrics.TTFB);
      }
    });
  }

  private trackBuildInfo(): void {
    // @ts-ignore - Defined in vite.config.ts
    if (typeof __BUILD_TIME__ !== 'undefined') {
      // @ts-ignore
      this.metrics.buildTime = __BUILD_TIME__;
    }
  }

  private logMetric(name: string, value: number): void {
    const isGood = this.isGoodMetric(name, value);
    const emoji = isGood ? '✅' : '⚠️';
    const color = isGood ? 'color: #00d4aa' : 'color: #ff6b6b';
    
    console.log(
      `%c${emoji} ${name}: ${value.toFixed(2)}ms`,
      `${color}; font-weight: bold; font-family: 'Monaco', monospace;`
    );
  }

  private isGoodMetric(name: string, value: number): boolean {
    const thresholds = {
      FCP: 1800,   // Good: < 1.8s
      LCP: 2500,   // Good: < 2.5s  
      FID: 100,    // Good: < 100ms
      CLS: 0.1,    // Good: < 0.1
      TTFB: 800    // Good: < 800ms
    };
    
    return value < (thresholds[name as keyof typeof thresholds] || Infinity);
  }

  // Track component render performance
  public trackComponent(componentName: string, renderTime: number): void {
    this.componentMetrics.push({
      component: componentName,
      renderTime,
      timestamp: Date.now()
    });

    // Log slow components
    if (renderTime > 16) { // 16ms = 60fps threshold
      console.warn(
        `%c⚡ Slow component: ${componentName} (${renderTime.toFixed(2)}ms)`,
        'color: #ff9500; font-weight: bold;'
      );
    }
  }

  // Get performance summary
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  // Get component performance data
  public getComponentMetrics(): ComponentMetrics[] {
    return [...this.componentMetrics];
  }

  // Performance budget checks
  public checkBudgets(): { passed: boolean; violations: string[] } {
    const violations: string[] = [];
    const budgets = {
      FCP: 1800,
      LCP: 2500,
      FID: 100,
      CLS: 0.1,
      TTFB: 800
    };

    Object.entries(budgets).forEach(([metric, budget]) => {
      const value = this.metrics[metric as keyof PerformanceMetrics] as number;
      if (value && value > budget) {
        violations.push(`${metric}: ${value.toFixed(2)}ms (budget: ${budget}ms)`);
      }
    });

    return {
      passed: violations.length === 0,
      violations
    };
  }

  // Clean up observers
  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Svelte action for component performance tracking
export function trackPerformance(node: HTMLElement, componentName: string) {
  const startTime = performance.now();
  
  const observer = new MutationObserver(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    performanceMonitor.trackComponent(componentName, renderTime);
  });

  observer.observe(node, { childList: true, subtree: true });

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export for global access in dev tools
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  (window as any).__PERFORMANCE_MONITOR__ = performanceMonitor;
}