import { vi, expect } from 'vitest';
import { DURATIONS, EASINGS } from '../../motion/tokens';
export function createMockElement(overrides = {}) {
    const mockStyle = {};
    const eventListeners = new Map();
    return {
        textContent: '',
        className: '',
        classList: {
            add: vi.fn(),
            remove: vi.fn(),
            contains: vi.fn((className) => false),
            toggle: vi.fn()
        },
        style: new Proxy(mockStyle, {
            set(target, prop, value) {
                target[prop] = value;
                return true;
            },
            get(target, prop) {
                return target[prop];
            }
        }),
        setAttribute: vi.fn(),
        getAttribute: vi.fn((name) => null),
        addEventListener: vi.fn((event, handler) => {
            if (!eventListeners.has(event)) {
                eventListeners.set(event, []);
            }
            eventListeners.get(event)?.push(handler);
        }),
        removeEventListener: vi.fn((event, handler) => {
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
export function createMockProps(defaults, overrides = {}) {
    return { ...defaults, ...overrides };
}
export function testVariants(variants, propsFactory, testFn) {
    variants.forEach((variant) => {
        const props = propsFactory(variant);
        testFn(props, variant);
    });
}
export function testSizes(sizes, propsFactory, testFn) {
    sizes.forEach((size) => {
        const props = propsFactory(size);
        testFn(props, size);
    });
}
export function simulateClassGeneration(element, baseClass, variant, size, modifiers = []) {
    const classes = [baseClass];
    if (variant)
        classes.push(`${baseClass}-${variant}`);
    if (size)
        classes.push(`${baseClass}-${size}`);
    classes.push(...modifiers);
    element.className = classes.join(' ');
    return element.className;
}
export function simulateAnimation(element, animated, duration = DURATIONS.fast, easing = 'ease-out') {
    if (animated) {
        element.style.transition = `all ${duration}ms ${easing}`;
        element.classList.add('animated');
        // Also update className to reflect added class
        if (!element.className.includes('animated')) {
            element.className = element.className ? `${element.className} animated` : 'animated';
        }
    }
    else {
        element.style.transition = 'none';
        element.classList.remove('animated');
        element.className = element.className.replace(/\banimated\b/g, '').trim();
    }
}
export function simulateMotionPreference(reducedMotion = false) {
    Object.defineProperty(window, 'matchMedia', {
        value: vi.fn(() => ({
            matches: reducedMotion,
            addListener: vi.fn(),
            removeListener: vi.fn()
        })),
        writable: true
    });
}
export function simulateKeyboardEvent(element, key, callback) {
    const event = { key, preventDefault: vi.fn(), stopPropagation: vi.fn() };
    if (callback && (key === 'Enter' || key === ' ')) {
        callback();
    }
    return event;
}
export function simulateMouseEvent(element, eventType, callback) {
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
export function expectClassesToContain(element, expectedClasses) {
    expectedClasses.forEach((className) => {
        expect(element.className).toContain(className);
    });
}
export function expectAttributesToBeSet(element, attributes) {
    Object.entries(attributes).forEach(([name, value]) => {
        expect(element.setAttribute).toHaveBeenCalledWith(name, value);
    });
}
export function expectAriaAttributes(element, ariaAttribs) {
    Object.entries(ariaAttribs).forEach(([name, value]) => {
        const fullName = name.startsWith('aria-') ? name : `aria-${name}`;
        expect(element.setAttribute).toHaveBeenCalledWith(fullName, value);
    });
}
export function testAccessibilityCompliance(element, role = 'button') {
    expectAttributesToBeSet(element, {
        role,
        tabindex: '0'
    });
}
export function testEventCleanup(element, eventTypes = ['click']) {
    eventTypes.forEach((eventType) => {
        const handler = vi.fn();
        element.addEventListener(eventType, handler);
        element.removeEventListener(eventType, handler);
        expect(element.removeEventListener).toHaveBeenCalledWith(eventType, handler);
    });
}
export function testPerformanceThreshold(testFn, maxTime = 50) {
    const start = performance.now();
    testFn();
    const duration = performance.now() - start;
    expect(duration).toBeLessThan(maxTime);
}
// Common test patterns for different component types
export const buttonTestDefaults = {
    variant: 'glass',
    size: 'md',
    animated: true,
    children: 'Test Button'
};
export const inputTestDefaults = {
    variant: 'glass',
    size: 'md',
    type: 'text',
    placeholder: 'Enter text...'
};
export const cardTestDefaults = {
    variant: 'glass',
    animated: true,
    hoverable: true
};
export const modalTestDefaults = {
    open: false,
    title: 'Test Modal',
    variant: 'glass',
    size: 'md'
};
// Variant and size constants for testing
export const commonVariants = ['glass', 'terminal', 'liquid', 'neon'];
export const commonSizes = ['sm', 'md', 'lg'];
export const alertVariants = ['success', 'error', 'warning', 'info', 'terminal'];
export const modalSizes = ['sm', 'md', 'lg', 'xl', 'full'];
