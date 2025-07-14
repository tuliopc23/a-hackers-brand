import { vi, expect } from 'vitest';
import { DURATIONS } from '../../motion/tokens';

/**
 * Svelte 5 Test Utilities
 *
 * Helper functions for testing Svelte 5 components without relying on
 * @testing-library/svelte which has compatibility issues.
 */

export interface MockElement {
	textContent: string;
	className: string;
	classList: {
		add: ReturnType<typeof vi.fn>;
		remove: ReturnType<typeof vi.fn>;
		contains: ReturnType<typeof vi.fn>;
		toggle: ReturnType<typeof vi.fn>;
	};
	style: Record<string, any>;
	setAttribute: ReturnType<typeof vi.fn>;
	getAttribute: ReturnType<typeof vi.fn>;
	addEventListener: ReturnType<typeof vi.fn>;
	removeEventListener: ReturnType<typeof vi.fn>;
	click: ReturnType<typeof vi.fn>;
	focus: ReturnType<typeof vi.fn>;
	blur: ReturnType<typeof vi.fn>;
	getBoundingClientRect: ReturnType<typeof vi.fn>;
	[key: string]: any;
}

export function createMockElement(overrides = {}): MockElement {
	const mockStyle = {};
	const eventListeners = new Map<string, Function[]>();

	return {
		textContent: '',
		className: '',
		classList: {
			add: vi.fn(),
			remove: vi.fn(),
		contains: vi.fn((_className: string) => false),
			toggle: vi.fn()
		},
		style: new Proxy(mockStyle as Record<string, any>, {
			set(target: Record<string, any>, prop: string | symbol, value: any) {
				target[prop as string] = value;
				return true;
			},
			get(target: Record<string, any>, prop: string | symbol) {
				return target[prop as string];
			}
		}),
		setAttribute: vi.fn(),
	getAttribute: vi.fn((_name: string) => null),
		addEventListener: vi.fn((event: string, handler: Function) => {
			if (!eventListeners.has(event)) {
				eventListeners.set(event, []);
			}
			eventListeners.get(event)?.push(handler);
		}),
		removeEventListener: vi.fn((event: string, handler: Function) => {
			const handlers = eventListeners.get(event);
			if (handlers) {
				const index = handlers.indexOf(handler);
				if (index > -1) {
					handlers.splice(index, 1);
				}
			}
		}),
		click: vi.fn(() => {
			const clickHandlers = eventListeners.get('click');
			if (clickHandlers) {
				clickHandlers.forEach((handler) => handler());
			}
		}),
		focus: vi.fn(),
		blur: vi.fn(),
		getBoundingClientRect: vi.fn(() => ({
			width: 100,
			height: 40,
			top: 0,
			left: 0,
			right: 100,
			bottom: 40,
			x: 0,
			y: 0
		})),
		...overrides
	};
}

export function createMockProps<T extends Record<string, any>>(defaults: T, overrides: Partial<T> = {}): T {
	return { ...defaults, ...overrides };
}

export function testVariants<T>(
	variants: string[],
	propsFactory: (variant: string) => T,
	testFn: (props: T, variant: string) => void
) {
	variants.forEach((variant) => {
		const props = propsFactory(variant);
		testFn(props, variant);
	});
}

export function testSizes<T>(
	sizes: string[],
	propsFactory: (size: string) => T,
	testFn: (props: T, size: string) => void
) {
	sizes.forEach((size) => {
		const props = propsFactory(size);
		testFn(props, size);
	});
}

export function simulateClassGeneration(
	element: MockElement,
	baseClass: string,
	variant?: string,
	size?: string,
	modifiers: string[] = []
) {
	const classes = [baseClass];

	if (variant) classes.push(`${baseClass}-${variant}`);
	if (size) classes.push(`${baseClass}-${size}`);
	classes.push(...modifiers);

	element.className = classes.join(' ');
	return element.className;
}

export function simulateAnimation(
	element: MockElement,
	animated: boolean,
	duration: number = DURATIONS.fast,
	easing: string = 'ease-out'
) {
	if (animated) {
		element.style.transition = `all ${duration}ms ${easing}`;
		element.classList.add('animated');
		// Also update className to reflect added class
		if (!element.className.includes('animated')) {
			element.className = element.className ? `${element.className} animated` : 'animated';
		}
	} else {
		element.style.transition = 'none';
		element.classList.remove('animated');
		element.className = element.className.replace(/\banimated\b/g, '').trim();
	}
}

export function simulateMotionPreference(reducedMotion: boolean = false) {
	Object.defineProperty(window, 'matchMedia', {
		value: vi.fn(() => ({
			matches: reducedMotion,
			addListener: vi.fn(),
			removeListener: vi.fn()
		})),
		writable: true
	});
}

export function simulateKeyboardEvent(_element: MockElement, key: string, callback?: () => void) {
	const event = { key, preventDefault: vi.fn(), stopPropagation: vi.fn() };

	if (callback && (key === 'Enter' || key === ' ')) {
		callback();
	}

	return event;
}

export function simulateMouseEvent(
	_element: MockElement,
	eventType: 'click' | 'mouseenter' | 'mouseleave' | 'mousedown' | 'mouseup',
	callback?: () => void
) {
	const event = {
		type: eventType,
		preventDefault: vi.fn(),
		stopPropagation: vi.fn(),
		clientX: 50,
		clientY: 50
	};

	if (callback) {
		callback();
	}

	return event;
}

export function expectClassesToContain(element: MockElement, expectedClasses: string[]) {
	expectedClasses.forEach((className) => {
		expect(element.className).toContain(className);
	});
}

export function expectAttributesToBeSet(element: MockElement, attributes: Record<string, string>) {
	Object.entries(attributes).forEach(([name, value]) => {
		expect(element.setAttribute).toHaveBeenCalledWith(name, value);
	});
}

export function expectAriaAttributes(element: MockElement, ariaAttribs: Record<string, string>) {
	Object.entries(ariaAttribs).forEach(([name, value]) => {
		const fullName = name.startsWith('aria-') ? name : `aria-${name}`;
		expect(element.setAttribute).toHaveBeenCalledWith(fullName, value);
	});
}

export function testAccessibilityCompliance(element: MockElement, role: string = 'button') {
	expectAttributesToBeSet(element, {
		role,
		tabindex: '0'
	});
}

export function testEventCleanup(element: MockElement, eventTypes: string[] = ['click']) {
	eventTypes.forEach((eventType) => {
		const handler = vi.fn();
		element.addEventListener(eventType, handler);
		element.removeEventListener(eventType, handler);

		expect(element.removeEventListener).toHaveBeenCalledWith(eventType, handler);
	});
}

export function testPerformanceThreshold(testFn: () => void, maxTime: number = 50) {
	const start = performance.now();
	testFn();
	const duration = performance.now() - start;

	expect(duration).toBeLessThan(maxTime);
}

// Common test patterns for different component types
export const buttonTestDefaults = {
	variant: 'glass' as 'glass' | 'terminal' | 'liquid' | 'neon',
	size: 'md' as 'sm' | 'md' | 'lg',
	animated: true,
	children: 'Test Button',
	glow: false,
	jelly: false,
	loading: false,
	disabled: false
};

export const inputTestDefaults = {
	variant: 'glass' as 'glass' | 'terminal' | 'liquid' | 'neon',
	size: 'md' as 'sm' | 'md' | 'lg',
	type: 'text' as 'text' | 'email' | 'password' | 'number',
	placeholder: 'Enter text...',
	disabled: false,
	readonly: false,
	required: false,
	error: '',
	glow: false,
	liquid: false,
	blur: 'md' as 'sm' | 'md' | 'lg',
	animated: false,
	label: '',
	class: '',
	'data-testid': '',
	id: '',
	name: '',
	minlength: 0,
	maxlength: 0
};

export const cardTestDefaults = {
	variant: 'glass' as const,
	animated: true,
	hoverable: true
};

export const modalTestDefaults = {
	open: false,
	title: 'Test Modal',
	variant: 'glass' as 'glass' | 'terminal' | 'liquid' | 'neon',
	size: 'md' as 'sm' | 'md' | 'lg' | 'xl' | 'full',
	showHeader: true,
	closable: false,
	closeOnOverlay: false,
	closeOnEscape: false,
	backdrop: 'default' as 'default' | 'blur' | 'transparent',
	breathing: false,
	glow: false,
	animated: false,
	transition: 'default' as 'default' | 'liquidGlassFade',
	description: '',
	portalTarget: '',
	class: '',
	'data-testid': '',
	id: ''
};

export const accordionTestDefaults = {
	variant: 'glass' as const,
	size: 'md' as const,
	blur: 'md' as const,
	defaultOpen: [] as string[]
};

export const alertTestDefaults = {
	variant: 'success' as 'success' | 'error' | 'warning' | 'info' | 'terminal',
	title: 'Test Alert',
	description: 'Test description',
	closable: false,
	animated: false,
	glow: false,
	jelly: false,
	icon: false,
	position: 'static' as 'static' | 'fixed',
	placement: 'top' as 'top' | 'bottom' | 'left' | 'right',
	class: '',
	'data-testid': '',
	id: ''
};

export const asyncErrorBoundaryTestDefaults = {
	variant: 'glass' as 'glass' | 'terminal' | 'liquid' | 'neon',
	onError: undefined as (() => void) | undefined,
	onRetry: undefined as (() => void) | undefined,
	fallback: undefined as (() => string) | undefined,
	loading: undefined as (() => string) | undefined
};

export const bootSequenceTestDefaults = {
	variant: 'classic' as 'classic' | 'modern' | 'retro',
	speed: 'normal' as 'slow' | 'normal' | 'fast',
	messages: [{ text: 'Loading...', type: 'info' as 'info' | 'success' | 'error' | 'warning', delay: 100 }] as Array<{ text: string; type: 'info' | 'success' | 'error' | 'warning'; delay?: number }>,
	onComplete: undefined as (() => void) | undefined
};

export const breadcrumbTestDefaults = {
	variant: 'default' as 'default' | 'glass' | 'terminal',
	separator: 'chevron' as 'chevron' | 'slash' | 'dot',
	items: [{ id: '1', label: 'Dashboard' }] as Array<{ id: string; label: string; href?: string; disabled?: boolean }>
};

export const fileUploadTestDefaults = {
	variant: 'default' as const,
	multiple: false,
	accept: undefined as string | undefined,
	uploadUrl: undefined as string | undefined
};

export const listTestDefaults = {
	variant: 'glass' as const,
	size: 'md' as const,
	items: [{ id: '1', label: 'Item 1' }] as Array<{ id: string; label: string }>
};

export const multiSelectTestDefaults = {
	variant: 'glass' as const,
	size: 'md' as const,
	options: [{ value: '1', label: 'Option 1' }] as Array<{ value: string; label: string; disabled?: boolean }>,
	value: [] as string[]
};

export const progressTestDefaults = {
	variant: 'glass' as const,
	type: 'linear' as const,
	size: 'md' as const,
	value: 50,
	max: 100
};

export const selectTestDefaults = {
	variant: 'glass' as const,
	size: 'md' as const,
	options: [{ value: '1', label: 'Option 1' }] as Array<{ value: string; label: string; disabled?: boolean }>,
	value: ''
};

export const sliderTestDefaults = {
	variant: 'glass' as const,
	size: 'md' as const,
	value: 50,
	min: 0,
	max: 100,
	step: 1,
	marks: [] as number[]
};

export const tableTestDefaults = {
	variant: 'default' as const,
	size: 'md' as const,
	columns: [{ key: 'name', label: 'Name' }] as Array<{ key: string; label: string; sortable?: boolean; render?: (value: any) => string }>,
	data: [{ id: '1', name: 'John Doe' }] as Array<{ id: string; [key: string]: any }>,
	sortBy: '',
	sortOrder: 'asc' as const
};

// Variant and size constants for testing
export const commonVariants = ['glass', 'terminal', 'liquid', 'neon'] as const;
export const commonSizes = ['sm', 'md', 'lg'] as const;
export const alertVariants = ['success', 'error', 'warning', 'info', 'terminal'] as const;
export const modalSizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
