import './app.css';

// Auto-import all components from src/lib/components
const components = import.meta.glob('./lib/components/*.svelte', { eager: true });

// Create a registry of components for auto-import
interface ComponentRegistry {
	[key: string]: unknown;
}

interface ComponentModule {
	default?: unknown;
}

export const componentRegistry: ComponentRegistry = {};

for (const path in components) {
	const component = components[path] as ComponentModule;
	const name = path.split('/').pop()?.replace('.svelte', '');
	if (name && component.default) {
		componentRegistry[name] = component.default;
	}
}

// Make components globally available
declare global {
	var __HISTOIRE_COMPONENTS__: ComponentRegistry;
}

if (typeof globalThis !== 'undefined') {
	globalThis.__HISTOIRE_COMPONENTS__ = componentRegistry;
}

// Global setup for Histoire
export function setupGlobal() {
	// Add global styles and configurations
	if (typeof window !== 'undefined') {
		// Add performance overlay styles
		const style = document.createElement('style');
		style.textContent = `
      .hst-perf-overlay {
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-family: monospace;
        font-size: 12px;
        z-index: 10000;
        backdrop-filter: blur(10px);
      }
      
      .hst-accessibility-check {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 120, 255, 0.9);
        color: white;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 11px;
        z-index: 10000;
      }
      
      .hst-accessibility-check.error {
        background: rgba(255, 59, 48, 0.9);
      }
      
      .hst-accessibility-check.warning {
        background: rgba(255, 214, 10, 0.9);
        color: black;
      }
    `;
		document.head.appendChild(style);

		// Initialize performance monitoring
		initPerformanceMonitoring();

		// Initialize accessibility checker
		initAccessibilityChecker();
	}
}

// Performance monitoring for Histoire stories
function initPerformanceMonitoring() {
	let overlay: HTMLElement | null = null;

	function createOverlay() {
		if (overlay) return overlay;

		overlay = document.createElement('div');
		overlay.className = 'hst-perf-overlay';
		overlay.innerHTML = 'Performance: Loading...';
		document.body.appendChild(overlay);
		return overlay;
	}

	function updatePerformanceStats() {
		if (!overlay) return;

		const perfData = {
			memory: (performance as any).memory ? Math.round((performance as any).memory.usedJSHeapSize / 1048576) : 'N/A',
			timing: performance.now().toFixed(2)
		};

		overlay.innerHTML = `
      <div>Memory: ${perfData.memory}MB</div>
      <div>Render: ${perfData.timing}ms</div>
    `;
	}

	// Create overlay and start monitoring
	createOverlay();
	setInterval(updatePerformanceStats, 1000);
}

// Basic accessibility checker
function initAccessibilityChecker() {
	let checker: HTMLElement | null = null;

	function createChecker() {
		if (checker) return checker;

		checker = document.createElement('div');
		checker.className = 'hst-accessibility-check';
		document.body.appendChild(checker);
		return checker;
	}

	function runAccessibilityCheck() {
		if (!checker) return;

		const issues = [];

		// Check for missing alt text on images
		const images = document.querySelectorAll('img:not([alt])');
		if (images.length > 0) {
			issues.push(`${images.length} image(s) missing alt text`);
		}

		// Check for missing labels on form inputs
		const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
		const unlabeledInputs = Array.from(inputs).filter((input) => {
			const labels = document.querySelectorAll(`label[for="${input.id}"]`);
			return labels.length === 0;
		});
		if (unlabeledInputs.length > 0) {
			issues.push(`${unlabeledInputs.length} input(s) missing labels`);
		}

		// Check for low contrast (basic check)
		const elements = document.querySelectorAll('*');
		let contrastIssues = 0;
		elements.forEach((el) => {
			const styles = window.getComputedStyle(el);
			const color = styles.color;
			const bgColor = styles.backgroundColor;
			// This is a simplified check - in reality you'd want a proper contrast ratio calculation
			if (color === 'rgb(128, 128, 128)' && bgColor === 'rgb(255, 255, 255)') {
				contrastIssues++;
			}
		});

		if (contrastIssues > 0) {
			issues.push(`${contrastIssues} potential contrast issue(s)`);
		}

		// Update checker display
		if (issues.length === 0) {
			checker.textContent = 'A11y: ✓ No issues found';
			checker.className = 'hst-accessibility-check';
		} else {
			checker.textContent = `A11y: ${issues.join(', ')}`;
			checker.className = 'hst-accessibility-check warning';
		}
	}

	// Create checker and run initial check
	createChecker();
	runAccessibilityCheck();

	// Re-run check when DOM changes
	const observer = new MutationObserver(runAccessibilityCheck);
	observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize on load
if (typeof window !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', setupGlobal);
	} else {
		setupGlobal();
	}
}
