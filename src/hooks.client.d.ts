/**
 * Client-side hooks for Core Web Vitals tracking
 */
import { type Metric } from 'web-vitals';
declare global {
	interface Window {
		__vitals: Metric[];
	}
}
/**
 * Initialize Core Web Vitals tracking
 */
export declare function initWebVitals(): void;
/**
 * Get all collected vitals
 */
export declare function getVitals(): Metric[];
/**
 * Get vitals summary with ratings
 */
export declare function getVitalsSummary(): Record<
	string,
	{
		value: number;
		rating: string;
		timestamp: number;
	}
>;
/**
 * Export vitals data as JSON
 */
export declare function exportVitals(): {
	timestamp: string;
	url: string;
	userAgent: string;
	vitals: Metric[];
	summary: Record<
		string,
		{
			value: number;
			rating: string;
			timestamp: number;
		}
	>;
};
/**
 * Clear stored vitals
 */
export declare function clearVitals(): void;
