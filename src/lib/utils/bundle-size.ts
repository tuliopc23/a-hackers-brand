/**
 * Bundle size tracking utility
 * Mock implementation for tracking component bundle sizes
 */

interface ComponentSize {
	name: string;
	size: 'small' | 'medium' | 'large';
	timestamp: number;
}

const componentSizes: Map<string, ComponentSize> = new Map();

export function sizeOf(componentName: string, size: 'small' | 'medium' | 'large'): void {
	if (typeof window !== 'undefined' && process.env['NODE_ENV'] === 'development') {
		const sizeInfo: ComponentSize = {
			name: componentName,
			size,
			timestamp: Date.now()
		};

		componentSizes.set(componentName, sizeInfo);

		// Bundle size tracked - integrate with monitoring service for production
	}
}

export function getBundleSizes(): ComponentSize[] {
	return Array.from(componentSizes.values());
}

export function clearBundleSizes(): void {
	componentSizes.clear();
}
