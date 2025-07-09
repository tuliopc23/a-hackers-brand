import '@testing-library/jest-dom';
declare global {
	var testUtils: {
		createMockElement: () => HTMLElement;
		mockBoundingClientRect: (element: Element, rect: Partial<DOMRect>) => void;
		triggerAnimationFrame: () => Promise<void>;
	};
}
