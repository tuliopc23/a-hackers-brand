/**
 * Bundle size tracking utility
 * Mock implementation for tracking component bundle sizes
 */
const componentSizes = new Map();
export function sizeOf(componentName, size) {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
        const sizeInfo = {
            name: componentName,
            size,
            timestamp: Date.now()
        };
        componentSizes.set(componentName, sizeInfo);
        // Log to console in development
        console.log(`📦 Bundle: ${componentName} (${size})`);
    }
}
export function getBundleSizes() {
    return Array.from(componentSizes.values());
}
export function clearBundleSizes() {
    componentSizes.clear();
}
