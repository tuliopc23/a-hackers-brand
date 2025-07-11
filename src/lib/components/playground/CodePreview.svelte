<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
import { playgroundStore } from '$lib/stores/playground';

	export let container: HTMLElement | undefined = undefined;

	let iframeContainer: HTMLElement;
	let iframe: HTMLIFrameElement;
	let isLoading = true;
	let error: string | null = null;

	// Debounce code changes to avoid too frequent updates
	let debounceTimeout: ReturnType<typeof setTimeout>;
	const DEBOUNCE_DELAY = 500;

	onMount(() => {
		if (!browser) return;

		// Create iframe for preview
		createIframe();

		// Subscribe to playground store changes
		const unsubscribe = playgroundStore.subscribe((state) => {
			// Clear existing timeout
			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}

			// Debounce the preview update
			debounceTimeout = setTimeout(() => {
				updatePreview(state.code);
			}, DEBOUNCE_DELAY);
		});

		onDestroy(() => {
			unsubscribe();
			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}
		});
	});

	function createIframe() {
		if (!iframeContainer) return;

		iframe = document.createElement('iframe');
		iframe.style.width = '100%';
		iframe.style.height = '100%';
		iframe.style.border = 'none';
		iframe.style.backgroundColor = '#1e293b';
		iframe.sandbox.add('allow-scripts', 'allow-same-origin');

		// Add initial loading content
		iframe.onload = () => {
			isLoading = false;
			updatePreview($playgroundStore.code);
		};

		iframeContainer.appendChild(iframe);
	}

	function updatePreview(code: string) {
		if (!iframe) return;

		try {
			error = null;

			// Create the HTML document with Svelte runtime
			const previewHTML = createPreviewHTML(code);

			// Write to iframe
			const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
			if (iframeDoc) {
				iframeDoc.open();
				iframeDoc.write(previewHTML);
				iframeDoc.close();

				// Listen for errors in the iframe
				iframe.contentWindow?.addEventListener('error', (event) => {
					error = `Runtime Error: ${event.error?.message || event.message}`;
				});

				iframe.contentWindow?.addEventListener('unhandledrejection', (event) => {
					error = `Promise Rejection: ${event.reason}`;
				});
			}
		} catch (err) {
			error = `Preview Error: ${err instanceof Error ? err.message : String(err)}`;
		}
	}

	function createPreviewHTML(svelteCode: string): string {
		// Transform the Svelte code for preview
		const transformedCode = transformSvelteCode(svelteCode);

		return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Preview</title>
	<script src="https://unpkg.com/svelte@4/dist/svelte.min.js"></script>
	<script src="https://cdn.tailwindcss.com"></script>
	<style>
		/* Include basic design system styles */
		:root {
			--primary: #3b82f6;
			--primary-foreground: #ffffff;
			--secondary: #64748b;
			--secondary-foreground: #f1f5f9;
			--accent: #8b5cf6;
			--accent-foreground: #ffffff;
			--destructive: #ef4444;
			--destructive-foreground: #ffffff;
			--border: #334155;
			--input: #475569;
			--ring: #3b82f6;
			--background: #0f172a;
			--foreground: #f1f5f9;
			--muted: #1e293b;
			--muted-foreground: #94a3b8;
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
			background: #0f172a;
			color: #f1f5f9;
			overflow-x: hidden;
		}

		/* Basic component styles for demo purposes */
		.btn {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			border-radius: 0.5rem;
			padding: 0.5rem 1rem;
			font-weight: 500;
			transition: all 0.2s ease;
			border: none;
			cursor: pointer;
			text-decoration: none;
			outline: none;
		}

		.btn-primary {
			background: linear-gradient(135deg, #3b82f6, #1d4ed8);
			color: white;
		}

		.btn-primary:hover {
			background: linear-gradient(135deg, #2563eb, #1e40af);
			transform: translateY(-1px);
		}

		.card {
			background: rgba(30, 41, 59, 0.8);
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 0.75rem;
			backdrop-filter: blur(10px);
		}

		.badge {
			display: inline-flex;
			align-items: center;
			border-radius: 0.375rem;
			padding: 0.25rem 0.5rem;
			font-size: 0.75rem;
			font-weight: 500;
		}

		.badge-outline {
			border: 1px solid rgba(255, 255, 255, 0.2);
			color: #94a3b8;
		}

		/* Error display */
		.error-display {
			position: fixed;
			top: 1rem;
			right: 1rem;
			background: #dc2626;
			color: white;
			padding: 1rem;
			border-radius: 0.5rem;
			font-family: monospace;
			font-size: 0.875rem;
			max-width: 300px;
			z-index: 9999;
		}
	</style>
</head>
<body>
	<div id="app"></div>

	<script type="module">
		// Mock implementation of design system components
		const components = {
			Button: {
				create(target, props) {
					const button = document.createElement('button');
					button.className = 'btn btn-primary ' + (props.class || '');
					button.onclick = props.onclick || (() => {});
					if (props.children) {
						button.textContent = props.children;
					}
					target.appendChild(button);
					return {
						update(newProps) {
							button.className = 'btn btn-primary ' + (newProps.class || '');
							button.onclick = newProps.onclick || (() => {});
							if (newProps.children) {
								button.textContent = newProps.children;
							}
						},
						destroy() {
							button.remove();
						}
					};
				}
			},
			Card: {
				create(target, props) {
					const card = document.createElement('div');
					card.className = 'card ' + (props.class || '');
					if (props.children) {
						card.innerHTML = props.children;
					}
					target.appendChild(card);
					return {
						update(newProps) {
							card.className = 'card ' + (newProps.class || '');
							if (newProps.children) {
								card.innerHTML = newProps.children;
							}
						},
						destroy() {
							card.remove();
						}
					};
				}
			},
			Badge: {
				create(target, props) {
					const badge = document.createElement('span');
					badge.className = 'badge ' + (props.variant === 'outline' ? 'badge-outline' : '') + ' ' + (props.class || '');
					if (props.children) {
						badge.textContent = props.children;
					}
					target.appendChild(badge);
					return {
						update(newProps) {
							badge.className = 'badge ' + (newProps.variant === 'outline' ? 'badge-outline' : '') + ' ' + (newProps.class || '');
							if (newProps.children) {
								badge.textContent = newProps.children;
							}
						},
						destroy() {
							badge.remove();
						}
					};
				}
			}
		};

		// Simple Svelte-like reactive system
		let currentComponent = null;

		function createApp() {
			try {
				const appContainer = document.getElementById('app');
				if (!appContainer) return;

				// Clear previous content
				appContainer.innerHTML = '';

				// Execute the transformed component code
				${transformedCode}

			} catch (error) {
				showError(error.message);
			}
		}

		function showError(message) {
			const existingError = document.querySelector('.error-display');
			if (existingError) {
				existingError.remove();
			}

			const errorDiv = document.createElement('div');
			errorDiv.className = 'error-display';
			errorDiv.textContent = message;
			document.body.appendChild(errorDiv);

			setTimeout(() => {
				errorDiv.remove();
			}, 5000);
		}

		// Initialize the app
		createApp();
	</script>
</body>
</html>`;
	}

	function transformSvelteCode(code: string): string {
		try {
			// Basic transformation for demo purposes
			// In a real implementation, you'd use the Svelte compiler
			
			// Extract script content
			const scriptMatch = code.match(/<script[^>]*>(.*?)<\/script>/s);
			let scriptContent = scriptMatch ? scriptMatch[1] : '';

			// Extract template content
			const templateMatch = code.match(/<\/script>\s*(.*?)(?:<style|$)/s);
			let template = templateMatch ? templateMatch[1] : code.replace(/<script[^>]*>.*?<\/script>/s, '');

			// Remove style tags for simplicity
			template = template.replace(/<style[^>]*>.*?<\/style>/s, '');

			// Simple reactive variable tracking
			const reactiveVars = [];
			const letMatches = scriptContent.match(/let\s+(\w+)\s*=/g);
			if (letMatches) {
				letMatches.forEach(match => {
					const varName = match.match(/let\s+(\w+)/)?.[1];
					if (varName) {
						reactiveVars.push(varName);
					}
				});
			}

			// Transform to vanilla JS
			let transformedCode = `
				// Component variables
				${scriptContent.replace(/import.*?;/g, '')}

				// Render function
				function render() {
					const appContainer = document.getElementById('app');
					appContainer.innerHTML = \`${template
						.replace(/\{(\w+)\}/g, '${$1}')
						.replace(/onclick=\{(\w+)\}/g, '" onclick="$1()"')
						.replace(/<(\w+)([^>]*)>/g, (match, tagName, attrs) => {
							if (['Button', 'Card', 'Badge'].includes(tagName)) {
								return \`<div data-component="\${tagName}" \${attrs}>\`;
							}
							return match;
						})
						.replace(/<\/(\w+)>/g, (match, tagName) => {
							if (['Button', 'Card', 'Badge'].includes(tagName)) {
								return '</div>';
							}
							return match;
						})
					}\`;

					// Initialize components
					const componentElements = appContainer.querySelectorAll('[data-component]');
					componentElements.forEach(el => {
						const componentName = el.getAttribute('data-component');
						if (components[componentName]) {
							const props = {
								class: el.className,
								children: el.innerHTML,
								onclick: window[el.getAttribute('onclick')?.replace('()', '')]
							};
							components[componentName].create(el.parentNode, props);
							el.remove();
						}
					});
				}

				// Initial render
				render();

				// Make functions available globally for event handlers
				${reactiveVars.map(varName => `
					window.${varName} = ${varName};
				`).join('')}
			`;

			return transformedCode;

		} catch (err) {
			return `showError('Transform Error: ${err instanceof Error ? err.message : String(err)}');`;
		}
	}

	function refreshPreview() {
		isLoading = true;
		error = null;
		updatePreview($playgroundStore.code);
		isLoading = false;
	}
</script>

<div class="preview-wrapper h-full bg-white relative" bind:this={container}>
	<div class="preview-header bg-slate-800 border-b border-white/10 p-3 flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<div class="w-3 h-3 rounded-full bg-red-500"></div>
			<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
			<div class="w-3 h-3 rounded-full bg-green-500"></div>
			<span class="text-white/70 text-sm ml-4">Preview</span>
		</div>
		
		<div class="flex items-center space-x-2">
			{#if isLoading}
				<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
				<span class="text-white/70 text-sm">Loading...</span>
			{:else if error}
				<span class="text-red-400 text-sm">Error</span>
				<button 
					class="text-blue-400 hover:text-blue-300 text-sm"
					onclick={refreshPreview}
				>
					Retry
				</button>
			{:else}
				<span class="text-green-400 text-sm">Ready</span>
			{/if}
			
			<button 
				class="text-white/70 hover:text-white p-1 rounded"
				onclick={refreshPreview}
				title="Refresh preview"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
				</svg>
			</button>
		</div>
	</div>

	<div class="preview-content h-full bg-slate-50" bind:this={iframeContainer}>
		{#if error}
			<div class="flex items-center justify-center h-full bg-red-50">
				<div class="text-center p-6">
					<div class="text-red-600 mb-2">
						<svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold text-red-900 mb-2">Preview Error</h3>
					<p class="text-red-700 text-sm font-mono max-w-md">{error}</p>
					<button 
						class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
						onclick={refreshPreview}
					>
						Try Again
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.preview-wrapper {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
	}

	.preview-content {
		height: calc(100% - 52px); /* Account for header */
	}

	:global(.preview-content iframe) {
		display: block;
	}
</style>
