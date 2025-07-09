/**
 * Bundle size tracking utility
 * Mock implementation for tracking component bundle sizes
 */
interface ComponentSize {
	name: string;
	size: 'small' | 'medium' | 'large';
	timestamp: number;
}
export declare function sizeOf(componentName: string, size: 'small' | 'medium' | 'large'): void;
export declare function getBundleSizes(): ComponentSize[];
export declare function clearBundleSizes(): void;
export {};
