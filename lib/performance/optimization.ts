/**
 * Performance Optimization Utilities
 * Ensures sub-16ms interactions for 60fps experience
 */

import React, { DependencyList, useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Lightweight throttle implementation
function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): T & { cancel: () => void } {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;
  const { leading = true, trailing = true } = options;

  function throttled(...args: Parameters<T>) {
    const now = Date.now();
    if (!previous && !leading) previous = now;
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      return func(...args);
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        previous = leading ? Date.now() : 0;
        timeout = null;
        func(...args);
      }, remaining);
    }
  }

  throttled.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    previous = 0;
  };

  return throttled as T & { cancel: () => void };
}

// Lightweight debounce implementation
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T & { cancel: () => void } {
  let timeout: NodeJS.Timeout | null = null;

  function debounced(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced as T & { cancel: () => void };
}

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();
  private observers: Set<(metrics: PerformanceMetrics) => void> = new Set();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTiming(label: string): () => number {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      this.recordMetric(label, duration);
      return duration;
    };
  }

  recordMetric(label: string, duration: number): void {
    if (!this.metrics.has(label)) {
      this.metrics.set(label, []);
    }
    const values = this.metrics.get(label)!;
    values.push(duration);
    
    // Keep only last 100 measurements
    if (values.length > 100) {
      values.shift();
    }

    // Warn if over 16ms (60fps threshold)
    if (duration > 16) {
      console.warn(`⚠️ Performance warning: ${label} took ${duration.toFixed(2)}ms (target: <16ms)`);
    }

    this.notifyObservers();
  }

  getMetrics(): PerformanceMetrics {
    const result: PerformanceMetrics = {};
    
    for (const [label, values] of this.metrics.entries()) {
      if (values.length === 0) continue;
      
      const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
      const max = Math.max(...values);
      const min = Math.min(...values);
      const p95 = values.sort((a, b) => a - b)[Math.floor(values.length * 0.95)];
      
      result[label] = { avg, max, min, p95, count: values.length };
    }
    
    return result;
  }

  subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {
    this.observers.add(callback);
    return () => this.observers.delete(callback);
  }

  private notifyObservers(): void {
    const metrics = this.getMetrics();
    this.observers.forEach(callback => callback(metrics));
  }

  clear(): void {
    this.metrics.clear();
    this.notifyObservers();
  }
}

export interface PerformanceMetrics {
  [label: string]: {
    avg: number;
    max: number;
    min: number;
    p95: number;
    count: number;
  };
}

// High-performance hooks
export function useOptimizedCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: DependencyList
): T {
  const monitor = PerformanceMonitor.getInstance();
  
  return useCallback((...args: Parameters<T>) => {
    const endTiming = monitor.startTiming('callback_execution');
    const result = callback(...args);
    endTiming();
    return result;
  }, deps) as T;
}

export function useOptimizedMemo<T>(
  factory: () => T,
  deps: DependencyList
): T {
  const monitor = PerformanceMonitor.getInstance();
  
  return useMemo(() => {
    const endTiming = monitor.startTiming('memo_computation');
    const result = factory();
    endTiming();
    return result;
  }, deps);
}

// Optimized event handlers
export function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 16, // 60fps
  deps: DependencyList
): T {
  const throttledFn = useMemo(
    () => throttle(callback, delay, { leading: true, trailing: true }),
    deps
  );
  
  useEffect(() => {
    return () => {
      throttledFn.cancel();
    };
  }, [throttledFn]);
  
  return throttledFn as T;
}

export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 300,
  deps: DependencyList
): T {
  const debouncedFn = useMemo(
    () => debounce(callback, delay),
    deps
  );
  
  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);
  
  return debouncedFn as T;
}

// Animation frame scheduling
export function useAnimationFrame(callback: (deltaTime: number) => void, active: boolean = true): void {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const callbackRef = useRef(callback);
  
  callbackRef.current = callback;
  
  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callbackRef.current(deltaTime);
    }
    previousTimeRef.current = time;
    if (active) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [active]);
  
  useEffect(() => {
    if (active) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate, active]);
}

// GPU acceleration utilities
export const gpuAcceleration = {
  // Enable hardware acceleration
  enable: (element: HTMLElement): void => {
    element.style.willChange = 'transform, opacity, filter';
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
  },
  
  // Disable hardware acceleration to save resources
  disable: (element: HTMLElement): void => {
    element.style.willChange = 'auto';
    element.style.transform = '';
    element.style.backfaceVisibility = '';
  },
  
  // Optimize for animations
  optimizeForAnimation: (element: HTMLElement): void => {
    element.style.willChange = 'transform';
    element.style.transform = 'translateZ(0)';
  }
};

// Memory management
export class MemoryManager {
  private static weakMap = new WeakMap();
  private static cache = new Map();
  private static maxCacheSize = 100;
  
  static memoize<T extends (...args: any[]) => any>(fn: T, keyFn?: (...args: Parameters<T>) => string): T {
    return ((...args: Parameters<T>) => {
      const key = keyFn ? keyFn(...args) : JSON.stringify(args);
      
      if (this.cache.has(key)) {
        return this.cache.get(key);
      }
      
      const result = fn(...args);
      
      // Prevent memory leaks by limiting cache size
      if (this.cache.size >= this.maxCacheSize) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      
      this.cache.set(key, result);
      return result;
    }) as T;
  }
  
  static store(obj: object, key: string, value: any): void {
    if (!this.weakMap.has(obj)) {
      this.weakMap.set(obj, new Map());
    }
    this.weakMap.get(obj).set(key, value);
  }
  
  static retrieve(obj: object, key: string): any {
    const objMap = this.weakMap.get(obj);
    return objMap ? objMap.get(key) : undefined;
  }
  
  static clear(): void {
    this.cache.clear();
  }
}

// Virtual scrolling for large lists
export function useVirtualScrolling({
  itemCount,
  itemHeight,
  containerHeight,
  overscan = 5
}: {
  itemCount: number;
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}) {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    itemCount - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight)
  );
  
  const start = Math.max(0, visibleStart - overscan);
  const end = Math.min(itemCount - 1, visibleEnd + overscan);
  
  const items = [];
  for (let i = start; i <= end; i++) {
    items.push({
      index: i,
      style: {
        position: 'absolute' as const,
        top: i * itemHeight,
        height: itemHeight,
        width: '100%'
      }
    });
  }
  
  return {
    items,
    totalHeight: itemCount * itemHeight,
    scrollTop,
    setScrollTop
  };
}

// Bundle size optimization
export const bundleOptimization = {
  // Lazy import with error boundary
  lazyImport: <T extends Record<string, any>>(importFn: () => Promise<T>) => {
      return React.lazy(async () => {
        try {
          const loadedModule = await importFn();
          return { default: loadedModule.default || loadedModule };
      } catch (error) {
        console.error('Failed to load module:', error);
        // Return a fallback component
        return {
          default: () => React.createElement('div', null, 'Failed to load component')
        };
      }
    });
  },
  
  // Code splitting by route
  splitByRoute: (routes: Record<string, () => Promise<any>>) => {
    const components: Record<string, React.LazyExoticComponent<any>> = {};
    
    Object.entries(routes).forEach(([key, importFn]) => {
      components[key] = bundleOptimization.lazyImport(importFn);
    });
    
    return components;
  }
};

// Performance testing utilities
export const performanceTesting = {
  // Measure component render time
  measureRender: <T extends React.ComponentType<any>>(Component: T, props: any) => {
    const monitor = PerformanceMonitor.getInstance();
    
    return (renderProps: any) => {
      const endTiming = monitor.startTiming(`${Component.name}_render`);
      const result = React.createElement(Component, { ...props, ...renderProps });
      
      // Use useEffect to measure after render
      React.useEffect(() => {
        endTiming();
      });
      
      return result;
    };
  },
  
  // Stress test with multiple renders
  stressTest: (component: React.ReactElement, iterations: number = 100) => {
    const monitor = PerformanceMonitor.getInstance();
    const results: number[] = [];
    
    for (let i = 0; i < iterations; i++) {
      const endTiming = monitor.startTiming('stress_test');
      // Simulate render
      setTimeout(() => {
        results.push(endTiming());
      }, 0);
    }
    
    return results;
  }
};

// Browser compatibility checks
export const browserSupport = {
  hasWebGL: (): boolean => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  },
  
  hasWebGPU: (): boolean => {
    return 'gpu' in navigator;
  },
  
  hasBackdropFilter: (): boolean => {
    return CSS.supports('backdrop-filter', 'blur(1px)');
  },
  
  hasIntersectionObserver: (): boolean => {
    return 'IntersectionObserver' in window;
  },
  
  hasResizeObserver: (): boolean => {
    return 'ResizeObserver' in window;
  },
  
  getPerformanceGrade: (): 'high' | 'medium' | 'low' => {
    const features = [
      browserSupport.hasWebGL(),
      browserSupport.hasBackdropFilter(),
      browserSupport.hasIntersectionObserver(),
      browserSupport.hasResizeObserver()
    ];
    
    const supportedFeatures = features.filter(Boolean).length;
    
    if (supportedFeatures >= 4) return 'high';
    if (supportedFeatures >= 2) return 'medium';
    return 'low';
  }
};
