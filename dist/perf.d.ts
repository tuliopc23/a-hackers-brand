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
declare class PerformanceMonitor {
	private marks;
	private measures;
	private observers;
	constructor();
	/**
	 * Create a performance mark
	 */
	mark(name: string, detail?: any): void;
	/**
	 * Measure performance between two marks
	 */
	measure(name: string, startMark: string, endMark?: string): number;
	/**
	 * Get all marks
	 */
	getMarks(): Map<string, PerformanceMark>;
	/**
	 * Get all measures
	 */
	getMeasures(): Map<string, PerformanceMeasure>;
	/**
	 * Clear all marks and measures
	 */
	clear(): void;
	/**
	 * Clear specific mark
	 */
	clearMark(name: string): void;
	/**
	 * Clear specific measure
	 */
	clearMeasure(name: string): void;
	/**
	 * Add observer for performance entries
	 */
	observe(callback: (entry: PerformanceEntry) => void): () => void;
	/**
	 * Get performance summary
	 */
	getSummary(): {
		marks: {
			name: string;
			startTime: number;
			detail?: any;
		}[];
		measures: {
			name: string;
			duration: number;
			startMark: string;
			endMark: string;
		}[];
		navigation?: PerformanceNavigationTiming;
		paint?: {
			[key: string]: number;
		};
	};
}
declare const perfMonitor: PerformanceMonitor;
export declare const mark: (name: string, detail?: any) => void;
export declare const measure: (name: string, startMark: string, endMark?: string) => number;
export declare const clearMarks: () => void;
export declare const clearMark: (name: string) => void;
export declare const clearMeasure: (name: string) => void;
export declare const getMarks: () => Map<string, PerformanceMark>;
export declare const getMeasures: () => Map<string, PerformanceMeasure>;
export declare const observe: (callback: (entry: PerformanceEntry) => void) => () => void;
export declare const getSummary: () => {
	marks: {
		name: string;
		startTime: number;
		detail?: any;
	}[];
	measures: {
		name: string;
		duration: number;
		startMark: string;
		endMark: string;
	}[];
	navigation?: PerformanceNavigationTiming;
	paint?: {
		[key: string]: number;
	};
};
export { perfMonitor };
export declare const trackComponentLoad: (componentName: string) => () => void;
export declare const trackAsyncOperation: <T>(operationName: string, operation: () => Promise<T>) => Promise<T>;
export declare const trackPageLoad: () => void;
