export function jelly(node: Element, options?: { duration?: number }): { destroy(): void };
export function liquidJelly(node: Element, options?: { intensity?: number }): { destroy(): void };
export function jellyHover(node: Element, options?: { enabled?: boolean; duration?: number; scale?: number; borderRadius?: string; responsiveness?: 'low'|'medium'|'high' }): { destroy(): void };
export function liquidResponsive(node: Element, options?: { enabled?: boolean; liquidIntensity?: number; morphStrength?: number }): { destroy(): void };
export function breathing(node: Element, options?: { duration?: number }): { destroy(): void };
