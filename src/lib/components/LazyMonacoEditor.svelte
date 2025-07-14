<script lang="ts">
	import { onMount } from 'svelte';
	import { lazyWithRetry } from '$lib/utils/lazy.js';
	import { cn } from '$lib/utils.js';

	interface Props {
		value?: string;
		language?: string;
		theme?: 'vs-dark' | 'vs-light' | 'hc-black';
		height?: string;
		width?: string;
		readonly?: boolean;
		minimap?: boolean;
		lineNumbers?: 'on' | 'off' | 'relative' | 'interval';
		wordWrap?: 'on' | 'off' | 'wordWrapColumn' | 'bounded';
		class?: string;
		onValueChange?: (value: string) => void;
	}

	const {
		value = '',
		language = 'typescript',
		theme = 'vs-dark',
		height = '400px',
		width = '100%',
		readonly = false,
		minimap = false,
		lineNumbers = 'on',
		wordWrap = 'on',
		class: className = '',
		onValueChange
	}: Props = $props();

	let editorContainer = $state<HTMLDivElement>();
	let editor = $state<any>(null);
	let monaco = $state<any>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let isInViewport = $state(false);

	// Lazy load Monaco Editor with retry
	const loadMonaco = lazyWithRetry(
		() => import('monaco-editor'),
		3,
		1000
	);

	async function initializeEditor() {
		if (!editorContainer || !isInViewport) return;

		try {
			loading = true;
			error = null;

			// Load Monaco Editor
			monaco = await loadMonaco();
			if (!monaco) {
				throw new Error('Failed to load Monaco Editor');
			}

			// Configure Monaco
			monaco.editor.defineTheme('hacker-dark', {
				base: 'vs-dark',
				inherit: true,
				rules: [
					{ token: 'comment', foreground: '6A9955' },
					{ token: 'keyword', foreground: '569CD6' },
					{ token: 'string', foreground: 'CE9178' },
					{ token: 'number', foreground: 'B5CEA8' }
				],
				colors: {
					'editor.background': '#0a0a0a',
					'editor.foreground': '#ffffff',
					'editorLineNumber.foreground': '#858585',
					'editor.selectionBackground': '#264f78',
					'editor.lineHighlightBackground': '#2a2d2e'
				}
			});

			// Create editor instance
			editor = monaco.editor.create(editorContainer, {
				value,
				language,
				theme: theme === 'vs-dark' ? 'hacker-dark' : theme,
				readOnly: readonly,
				minimap: { enabled: minimap },
				lineNumbers,
				wordWrap,
				automaticLayout: true,
				scrollBeyondLastLine: false,
				fontSize: 14,
				fontFamily: 'JetBrains Mono, Fira Code, Monaco, monospace',
				tabSize: 2,
				insertSpaces: false
			});

			// Listen for value changes
			editor.onDidChangeModelContent(() => {
				const currentValue = editor.getValue();
				onValueChange?.(currentValue);
			});

			loading = false;
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load editor';
			loading = false;
		}
	}

	onMount(() => {
		// Intersection Observer for lazy loading
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !editor) {
						isInViewport = true;
						initializeEditor();
						observer.unobserve(editorContainer);
					}
				});
			},
			{
				rootMargin: '100px',
				threshold: 0.1
			}
		);

		if (editorContainer) {
			observer.observe(editorContainer);
		}

		return () => {
			observer.disconnect();
			if (editor) {
				editor.dispose();
			}
		};
	});

	// Update editor value when prop changes
	$effect(() => {
		if (editor && editor.getValue() !== value) {
			editor.setValue(value);
		}
	});

	// Update editor language when prop changes
	$effect(() => {
		if (editor && monaco) {
			const model = editor.getModel();
			if (model) {
				monaco.editor.setModelLanguage(model, language);
			}
		}
	});
</script>

<div
	bind:this={editorContainer}
	class={cn(
		'relative overflow-hidden rounded-lg border border-white/10',
		'bg-black/90 backdrop-blur-sm',
		className
	)}
	style="height: {height}; width: {width};"
>
	{#if loading}
		<div class="flex h-full items-center justify-center">
			<div class="flex items-center gap-3 text-white/60">
				<div class="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white/60"></div>
				<span class="text-sm">Loading Monaco Editor...</span>
			</div>
		</div>
	{:else if error}
		<div class="flex h-full items-center justify-center">
			<div class="text-center text-red-400">
				<div class="mb-2 text-lg">⚠️</div>
				<div class="text-sm">Failed to load editor</div>
				<div class="mt-1 text-xs text-red-400/60">{error}</div>
				<button
					class="mt-3 rounded bg-red-500/20 px-3 py-1 text-xs text-red-300 hover:bg-red-500/30"
					onclick={() => {
						error = null;
						initializeEditor();
					}}
				>
					Retry
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Monaco Editor custom styles */
	:global(.monaco-editor) {
		font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', monospace !important;
	}

	:global(.monaco-editor .margin) {
		background-color: transparent !important;
	}

	:global(.monaco-editor .monaco-editor-background) {
		background-color: rgba(0, 0, 0, 0.9) !important;
	}
</style>
