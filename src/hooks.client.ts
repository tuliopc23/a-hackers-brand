/**
 * Client-side hooks for Core Web Vitals tracking
 */

import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals';

// Define vitals interface for global window object
declare global {
	interface Window {
		__vitals: Metric[];
	}
}

// Initialize vitals array on window
if (typeof window !== 'undefined') {
	window.__vitals = window.__vitals || [];
}

/**
 * Send vitals data to analytics or logging service
 */
function sendToAnalytics(metric: Metric) {
	// Store in global array for later processing
	if (typeof window !== 'undefined') {
		window.__vitals.push(metric);
	}

	// Log to console for development
	console.log('📊 Core Web Vital:', {
		name: metric.name,
		value: metric.value,
		rating: metric.rating,
		delta: metric.delta,
		id: metric.id,
		navigationType: metric.navigationType
	});

	// Send to analytics service (example implementations)
	// You can uncomment and modify based on your analytics provider

	// Google Analytics 4
	// if (typeof gtag !== 'undefined') {
	//   gtag('event', metric.name, {
	//     event_category: 'Web Vitals',
	//     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
	//     event_label: metric.id,
	//     non_interaction: true,
	//   });
	// }

	// Custom analytics endpoint
	// fetch('/api/analytics/web-vitals', {
	//   method: 'POST',
	//   headers: { 'Content-Type': 'application/json' },
	//   body: JSON.stringify(metric),
	//   keepalive: true
	// }).catch(console.error);

	// PostHog example
	// if (typeof posthog !== 'undefined') {
	//   posthog.capture('web_vital', {
	//     metric_name: metric.name,
	//     metric_value: metric.value,
	//     metric_rating: metric.rating,
	//     metric_id: metric.id
	//   });
	// }
}

/**
 * Initialize Core Web Vitals tracking
 */
export function initWebVitals() {
	if (typeof window === 'undefined') return;

	try {
		// Cumulative Layout Shift (CLS)
		onCLS(sendToAnalytics);

		// Interaction to Next Paint (INP) - replaces FID
		onINP(sendToAnalytics);

		// First Contentful Paint (FCP)
		onFCP(sendToAnalytics);

		// Largest Contentful Paint (LCP)
		onLCP(sendToAnalytics);

		// Time to First Byte (TTFB)
		onTTFB(sendToAnalytics);

		console.log('✅ Core Web Vitals tracking initialized');
	} catch (error) {
		console.error('❌ Failed to initialize Core Web Vitals tracking:', error);
	}
}

/**
 * Get all collected vitals
 */
export function getVitals(): Metric[] {
	return typeof window !== 'undefined' ? window.__vitals || [] : [];
}

/**
 * Get vitals summary with ratings
 */
export function getVitalsSummary() {
	const vitals = getVitals();
	const summary: Record<string, { value: number; rating: string; timestamp: number }> = {};

	for (const vital of vitals) {
		summary[vital.name] = {
			value: vital.value,
			rating: vital.rating,
			timestamp: Date.now()
		};
	}

	return summary;
}

/**
 * Export vitals data as JSON
 */
export function exportVitals() {
	const vitals = getVitals();
	const summary = getVitalsSummary();

	const exportData = {
		timestamp: new Date().toISOString(),
		url: typeof window !== 'undefined' ? window.location.href : '',
		userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
		vitals,
		summary
	};

	return exportData;
}

/**
 * Clear stored vitals
 */
export function clearVitals() {
	if (typeof window !== 'undefined') {
		window.__vitals = [];
	}
}

// Auto-initialize when module loads
if (typeof window !== 'undefined') {
	// Wait for page to load before initializing
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initWebVitals);
	} else {
		// Document already loaded
		setTimeout(initWebVitals, 0);
	}

	// Export functions to global scope for debugging
	(window as any).__webVitalsDebug = {
		getVitals,
		getVitalsSummary,
		exportVitals,
		clearVitals
	};
}
