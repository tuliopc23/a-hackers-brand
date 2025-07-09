// Custom mount function that works with Svelte 5 in JSDOM using compatibility mode
export function mount(component, options) {
	const target = options?.target || document.body.appendChild(document.createElement('div'));
	// Use Svelte 4 compatibility API
	const instance = new component({
		target,
		props: options?.props || {}
	});
	return {
		component: instance,
		container: target,
		unmount: () => {
			if (instance.$destroy) {
				instance.$destroy();
			}
			if (target.parentNode) {
				target.parentNode.removeChild(target);
			}
		}
	};
}
// Helper function to find elements by role
export function getByRole(container, role) {
	return container.querySelector(`[role="${role}"]`);
}
// Helper function to find elements by text content
export function getByText(container, text) {
	// First try a simple text search
	if (container.textContent?.includes(text)) {
		// If container itself contains the text, check children
		const elements = container.querySelectorAll('*');
		for (const element of elements) {
			if (element.textContent?.includes(text)) {
				return element;
			}
		}
		return container;
	}
	// Fallback to tree walker
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
	let node;
	while ((node = walker.nextNode())) {
		if (node.textContent?.includes(text)) {
			return node.parentElement;
		}
	}
	return null;
}
// Helper function to trigger events
export function fireEvent(element, type, options) {
	const event = new Event(type, { bubbles: true, cancelable: true, ...options });
	element.dispatchEvent(event);
}
// Helper function to trigger keyboard events
export function fireKeyboardEvent(element, key, options) {
	const event = new KeyboardEvent('keydown', {
		key,
		bubbles: true,
		cancelable: true,
		...options
	});
	element.dispatchEvent(event);
}
// Helper function to check CSS classes
export function hasClass(element, className) {
	return element.classList.contains(className);
}
// Helper function to check multiple CSS classes
export function hasClasses(element, classNames) {
	return classNames.every((className) => element.classList.contains(className));
}
// Helper function to wait for next tick
export async function waitFor(callback, timeout = 1000) {
	const start = Date.now();
	while (Date.now() - start < timeout) {
		if (callback()) return;
		await new Promise((resolve) => setTimeout(resolve, 10));
	}
	throw new Error('Timeout waiting for condition');
}
