/**
 * Performance monitoring utilities for runtime metrics
 */

interface PerformanceMark {
	name: string;
	startTime: number;
	detail?: any;
}

interface PerformanceMeasure {
	name: string;
	startMark: string;
	endMark: string;
	duration: number;
	detail?: any;
}

class PerformanceMonitor {
	private marks = new Map<string, PerformanceMark>();
	private measures = new Map<string, PerformanceMeasure>();
	private observers = new Set<(entry: PerformanceEntry) => void>();

	constructor() {
		// Set up performance observer if supported
		if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					this.observers.forEach((callback) => callback(entry));
				}
			});

			try {
				observer.observe({ entryTypes: ['measure', 'navigation', 'paint', 'largest-contentful-paint'] });
			} catch (error) {
				// Performance observer setup failed - will continue without observer
			}
		}
	}

	/**
	 * Create a performance mark
	 */
	mark(name: string, detail?: any): void {
		const startTime = performance.now();

		this.marks.set(name, {
			name,
			startTime,
			detail
		});

		// Use native performance.mark if available
		if (typeof performance.mark === 'function') {
			try {
				performance.mark(name, { detail });
			} catch (error) {
				// Fallback for browsers that don't support detail parameter
				performance.mark(name);
			}
		}

		// Consider integrating a proper logging mechanism for performance marks
	}

	/**
	 * Measure performance between two marks
	 */
	measure(name: string, startMark: string, endMark?: string): number {
		const startMarkData = this.marks.get(startMark);

		if (!startMarkData) {
			// Performance mark not found - returning 0
			return 0;
		}

		const endTime = endMark ? this.marks.get(endMark)?.startTime : performance.now();
		if (endMark && !endTime) {
			// End mark not found - returning 0
			return 0;
		}

		const duration = (endTime || performance.now()) - startMarkData.startTime;

		const measure: PerformanceMeasure = {
			name,
			startMark,
			endMark: endMark || 'now',
			duration,
			detail: startMarkData.detail
		};

		this.measures.set(name, measure);

		// Use native performance.measure if available
		if (typeof performance.measure === 'function') {
			try {
				if (endMark) {
					performance.measure(name, startMark, endMark);
				} else {
					performance.measure(name, startMark);
				}
			} catch (error) {
			// Log failure to a monitoring service instead
			}
		}

		// Performance measure tracked; send to analytics service if needed

		return duration;
	}

	/**
	 * Get all marks
	 */
	getMarks(): Map<string, PerformanceMark> {
		return new Map(this.marks);
	}

	/**
	 * Get all measures
	 */
	getMeasures(): Map<string, PerformanceMeasure> {
		return new Map(this.measures);
	}

	/**
	 * Clear all marks and measures
	 */
	clear(): void {
		this.marks.clear();
		this.measures.clear();

		if (typeof performance.clearMarks === 'function') {
			performance.clearMarks();
		}
		if (typeof performance.clearMeasures === 'function') {
			performance.clearMeasures();
		}
	}

	/**
	 * Clear specific mark
	 */
	clearMark(name: string): void {
		this.marks.delete(name);

		if (typeof performance.clearMarks === 'function') {
			performance.clearMarks(name);
		}
	}

	/**
	 * Clear specific measure
	 */
	clearMeasure(name: string): void {
		this.measures.delete(name);

		if (typeof performance.clearMeasures === 'function') {
			performance.clearMeasures(name);
		}
	}

	/**
	 * Add observer for performance entries
	 */
	observe(callback: (entry: PerformanceEntry) => void): () => void {
		this.observers.add(callback);

		return () => {
			this.observers.delete(callback);
		};
	}

	/**
	 * Get performance summary
	 */
	getSummary(): {
		marks: { name: string; startTime: number; detail?: any }[];
		measures: { name: string; duration: number; startMark: string; endMark: string }[];
		navigation?: PerformanceNavigationTiming;
		paint?: { [key: string]: number };
	} {
		const summary: {
			marks: { name: string; startTime: number; detail?: any }[];
			measures: { name: string; duration: number; startMark: string; endMark: string }[];
			navigation?: PerformanceNavigationTiming;
			paint?: { [key: string]: number };
		} = {
			marks: Array.from(this.marks.values()),
			measures: Array.from(this.measures.values()).map((m) => ({
				name: m.name,
				duration: m.duration,
				startMark: m.startMark,
				endMark: m.endMark
			}))
		};

		// Get navigation timing
		if (typeof performance.getEntriesByType === 'function') {
			const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
			if (navEntries.length > 0) {
				summary.navigation = navEntries[0];
			}

			// Get paint timing
			const paintEntries = performance.getEntriesByType('paint');
			if (paintEntries.length > 0) {
				summary.paint = {};
				for (const entry of paintEntries) {
					summary.paint[entry.name] = entry.startTime;
				}
			}
		}

		return summary;
	}
}

// Create singleton instance
const perfMonitor = new PerformanceMonitor();

// Export convenient functions
export const mark = perfMonitor.mark.bind(perfMonitor);
export const measure = perfMonitor.measure.bind(perfMonitor);
export const clearMarks = perfMonitor.clear.bind(perfMonitor);
export const clearMark = perfMonitor.clearMark.bind(perfMonitor);
export const clearMeasure = perfMonitor.clearMeasure.bind(perfMonitor);
export const getMarks = perfMonitor.getMarks.bind(perfMonitor);
export const getMeasures = perfMonitor.getMeasures.bind(perfMonitor);
export const observe = perfMonitor.observe.bind(perfMonitor);
export const getSummary = perfMonitor.getSummary.bind(perfMonitor);

// Export the monitor instance
export { perfMonitor };

// Predefined performance tracking helpers
export const trackComponentLoad = (componentName: string) => {
	mark(`${componentName}:start`);

	return () => {
		mark(`${componentName}:end`);
		measure(`${componentName}:load`, `${componentName}:start`, `${componentName}:end`);
	};
};

export const trackAsyncOperation = async <T>(operationName: string, operation: () => Promise<T>): Promise<T> => {
	mark(`${operationName}:start`);

	try {
		const result = await operation();
		mark(`${operationName}:end`);
		measure(`${operationName}:duration`, `${operationName}:start`, `${operationName}:end`);
		return result;
	} catch (error) {
		mark(`${operationName}:error`);
		measure(`${operationName}:duration`, `${operationName}:start`, `${operationName}:error`);
		throw error;
	}
};

export const trackPageLoad = () => {
	if (typeof window === 'undefined') return;

	const trackMetric = (name: string, value: number) => {
		mark(name, { value });
		// Stat collection completed; integrate with analytics service here
	};

	// Track key navigation timing metrics
	if (performance.timing) {
		const timing = performance.timing;
		const navigationStart = timing.navigationStart;

		trackMetric('domContentLoaded', timing.domContentLoadedEventEnd - navigationStart);
		trackMetric('loadComplete', timing.loadEventEnd - navigationStart);
		trackMetric('domReady', timing.domComplete - navigationStart);
	}

	// Track paint metrics when available
	if (typeof performance.getEntriesByType === 'function') {
		const paintEntries = performance.getEntriesByType('paint');
		for (const entry of paintEntries) {
			trackMetric(entry.name, entry.startTime);
		}
	}
};

// Auto-track page load when script loads
if (typeof window !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', trackPageLoad);
	} else {
		trackPageLoad();
	}
}
