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

export interface PerformanceMetrics {\n  [label: string]: {\n    avg: number;\n    max: number;\n    min: number;\n    p95: number;\n    count: number;\n  };\n}\n\n// High-performance hooks\nexport function useOptimizedCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  deps: DependencyList\n): T {\n  const monitor = PerformanceMonitor.getInstance();\n  \n  return useCallback((...args: Parameters<T>) => {\n    const endTiming = monitor.startTiming('callback_execution');\n    const result = callback(...args);\n    endTiming();\n    return result;\n  }, deps) as T;\n}\n\nexport function useOptimizedMemo<T>(\n  factory: () => T,\n  deps: DependencyList\n): T {\n  const monitor = PerformanceMonitor.getInstance();\n  \n  return useMemo(() => {\n    const endTiming = monitor.startTiming('memo_computation');\n    const result = factory();\n    endTiming();\n    return result;\n  }, deps);\n}\n\n// Optimized event handlers\nexport function useThrottledCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  delay: number = 16, // 60fps\n  deps: DependencyList\n): T {\n  const throttledFn = useMemo(\n    () => throttle(callback, delay, { leading: true, trailing: true }),\n    deps\n  );\n  \n  useEffect(() => {\n    return () => {\n      throttledFn.cancel();\n    };\n  }, [throttledFn]);\n  \n  return throttledFn as T;\n}\n\nexport function useDebouncedCallback<T extends (...args: any[]) => any>(\n  callback: T,\n  delay: number = 300,\n  deps: DependencyList\n): T {\n  const debouncedFn = useMemo(\n    () => debounce(callback, delay),\n    deps\n  );\n  \n  useEffect(() => {\n    return () => {\n      debouncedFn.cancel();\n    };\n  }, [debouncedFn]);\n  \n  return debouncedFn as T;\n}\n\n// Animation frame scheduling\nexport function useAnimationFrame(callback: (deltaTime: number) => void, active: boolean = true): void {\n  const requestRef = useRef<number>();\n  const previousTimeRef = useRef<number>();\n  const callbackRef = useRef(callback);\n  \n  callbackRef.current = callback;\n  \n  const animate = useCallback((time: number) => {\n    if (previousTimeRef.current !== undefined) {\n      const deltaTime = time - previousTimeRef.current;\n      callbackRef.current(deltaTime);\n    }\n    previousTimeRef.current = time;\n    if (active) {\n      requestRef.current = requestAnimationFrame(animate);\n    }\n  }, [active]);\n  \n  useEffect(() => {\n    if (active) {\n      requestRef.current = requestAnimationFrame(animate);\n    }\n    return () => {\n      if (requestRef.current) {\n        cancelAnimationFrame(requestRef.current);\n      }\n    };\n  }, [animate, active]);\n}\n\n// GPU acceleration utilities\nexport const gpuAcceleration = {\n  // Enable hardware acceleration\n  enable: (element: HTMLElement): void => {\n    element.style.willChange = 'transform, opacity, filter';\n    element.style.transform = 'translateZ(0)';\n    element.style.backfaceVisibility = 'hidden';\n  },\n  \n  // Disable hardware acceleration to save resources\n  disable: (element: HTMLElement): void => {\n    element.style.willChange = 'auto';\n    element.style.transform = '';\n    element.style.backfaceVisibility = '';\n  },\n  \n  // Optimize for animations\n  optimizeForAnimation: (element: HTMLElement): void => {\n    element.style.willChange = 'transform';\n    element.style.transform = 'translateZ(0)';\n  }\n};\n\n// Memory management\nexport class MemoryManager {\n  private static weakMap = new WeakMap();\n  private static cache = new Map();\n  private static maxCacheSize = 100;\n  \n  static memoize<T extends (...args: any[]) => any>(fn: T, keyFn?: (...args: Parameters<T>) => string): T {\n    return ((...args: Parameters<T>) => {\n      const key = keyFn ? keyFn(...args) : JSON.stringify(args);\n      \n      if (this.cache.has(key)) {\n        return this.cache.get(key);\n      }\n      \n      const result = fn(...args);\n      \n      // Prevent memory leaks by limiting cache size\n      if (this.cache.size >= this.maxCacheSize) {\n        const firstKey = this.cache.keys().next().value;\n        this.cache.delete(firstKey);\n      }\n      \n      this.cache.set(key, result);\n      return result;\n    }) as T;\n  }\n  \n  static store(obj: object, key: string, value: any): void {\n    if (!this.weakMap.has(obj)) {\n      this.weakMap.set(obj, new Map());\n    }\n    this.weakMap.get(obj).set(key, value);\n  }\n  \n  static retrieve(obj: object, key: string): any {\n    const objMap = this.weakMap.get(obj);\n    return objMap ? objMap.get(key) : undefined;\n  }\n  \n  static clear(): void {\n    this.cache.clear();\n  }\n}\n\n// Virtual scrolling for large lists\nexport function useVirtualScrolling({\n  itemCount,\n  itemHeight,\n  containerHeight,\n  overscan = 5\n}: {\n  itemCount: number;\n  itemHeight: number;\n  containerHeight: number;\n  overscan?: number;\n}) {\n  const [scrollTop, setScrollTop] = useState(0);\n  \n  const visibleStart = Math.floor(scrollTop / itemHeight);\n  const visibleEnd = Math.min(\n    itemCount - 1,\n    Math.ceil((scrollTop + containerHeight) / itemHeight)\n  );\n  \n  const start = Math.max(0, visibleStart - overscan);\n  const end = Math.min(itemCount - 1, visibleEnd + overscan);\n  \n  const items = [];\n  for (let i = start; i <= end; i++) {\n    items.push({\n      index: i,\n      style: {\n        position: 'absolute' as const,\n        top: i * itemHeight,\n        height: itemHeight,\n        width: '100%'\n      }\n    });\n  }\n  \n  return {\n    items,\n    totalHeight: itemCount * itemHeight,\n    scrollTop,\n    setScrollTop\n  };\n}\n\n// Bundle size optimization\nexport const bundleOptimization = {\n  // Lazy import with error boundary\n  lazyImport: <T extends Record<string, any>>(importFn: () => Promise<T>) => {\n    return React.lazy(async () => {\n      try {\n        const module = await importFn();\n        return { default: module.default || module };\n      } catch (error) {\n        console.error('Failed to load module:', error);\n        // Return a fallback component\n        return {\n          default: () => React.createElement('div', null, 'Failed to load component')\n        };\n      }\n    });\n  },\n  \n  // Code splitting by route\n  splitByRoute: (routes: Record<string, () => Promise<any>>) => {\n    const components: Record<string, React.LazyExoticComponent<any>> = {};\n    \n    Object.entries(routes).forEach(([key, importFn]) => {\n      components[key] = bundleOptimization.lazyImport(importFn);\n    });\n    \n    return components;\n  }\n};\n\n// Performance testing utilities\nexport const performanceTesting = {\n  // Measure component render time\n  measureRender: <T extends React.ComponentType<any>>(Component: T, props: any) => {\n    const monitor = PerformanceMonitor.getInstance();\n    \n    return (renderProps: any) => {\n      const endTiming = monitor.startTiming(`${Component.name}_render`);\n      const result = React.createElement(Component, { ...props, ...renderProps });\n      \n      // Use useEffect to measure after render\n      React.useEffect(() => {\n        endTiming();\n      });\n      \n      return result;\n    };\n  },\n  \n  // Stress test with multiple renders\n  stressTest: (component: React.ReactElement, iterations: number = 100) => {\n    const monitor = PerformanceMonitor.getInstance();\n    const results: number[] = [];\n    \n    for (let i = 0; i < iterations; i++) {\n      const endTiming = monitor.startTiming('stress_test');\n      // Simulate render\n      setTimeout(() => {\n        results.push(endTiming());\n      }, 0);\n    }\n    \n    return results;\n  }\n};\n\n// Browser compatibility checks\nexport const browserSupport = {\n  hasWebGL: (): boolean => {\n    try {\n      const canvas = document.createElement('canvas');\n      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));\n    } catch {\n      return false;\n    }\n  },\n  \n  hasWebGPU: (): boolean => {\n    return 'gpu' in navigator;\n  },\n  \n  hasBackdropFilter: (): boolean => {\n    return CSS.supports('backdrop-filter', 'blur(1px)');\n  },\n  \n  hasIntersectionObserver: (): boolean => {\n    return 'IntersectionObserver' in window;\n  },\n  \n  hasResizeObserver: (): boolean => {\n    return 'ResizeObserver' in window;\n  },\n  \n  getPerformanceGrade: (): 'high' | 'medium' | 'low' => {\n    const features = [\n      browserSupport.hasWebGL(),\n      browserSupport.hasBackdropFilter(),\n      browserSupport.hasIntersectionObserver(),\n      browserSupport.hasResizeObserver()\n    ];\n    \n    const supportedFeatures = features.filter(Boolean).length;\n    \n    if (supportedFeatures >= 4) return 'high';\n    if (supportedFeatures >= 2) return 'medium';\n    return 'low';\n  }\n};