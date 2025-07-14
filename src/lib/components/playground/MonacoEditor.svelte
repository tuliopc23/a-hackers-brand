<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { playgroundStore } from '$lib/stores/playground';

	let editorElement: HTMLElement;
	let editor: any;
	let isLoading = $state(true);

	onMount(async () => {
		if (!browser) return;

		try {
			// Dynamically import Monaco editor to avoid SSR issues
			const [monaco, loader] = await Promise.all([import('monaco-editor'), import('@monaco-editor/loader')]);

			// Configure Monaco editor
			loader.default.config({
				paths: {
					vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.34.0/min/vs'
				}
			});

			const monacoInstance = await loader.default.init();

			// Define Svelte language configuration
			monacoInstance.languages.register({ id: 'svelte' });

			// Set language tokens for Svelte
			monacoInstance.languages.setMonarchTokensProvider('svelte', {
				tokenizer: {
					root: [
						[/<\s*script\b/, 'tag', '@script'],
						[/<\s*style\b/, 'tag', '@style'],
						[/<\s*[a-zA-Z][\w-]*/, 'tag', '@tag'],
						[/<!--/, 'comment', '@comment'],
						[/{/, 'delimiter.bracket', '@expression'],
						[/[^<{]+/, 'text']
					],

					comment: [
						[/-->/, 'comment', '@pop'],
						[/[^-]+/, 'comment'],
						[/./, 'comment']
					],

					script: [
						[/<\/\s*script\s*>/, 'tag', '@pop'],
						[/[^<]+/, 'source.js']
					],

					style: [
						[/<\/\s*style\s*>/, 'tag', '@pop'],
						[/[^<]+/, 'source.css']
					],

					tag: [
						[/>/, 'tag', '@pop'],
						[/"[^"]*"/, 'string'],
						[/'[^']*'/, 'string'],
						[/{[^}]*}/, 'delimiter.bracket'],
						[/\w+/, 'attribute.name'],
						[/=/, 'operator']
					],

					expression: [
						[/}/, 'delimiter.bracket', '@pop'],
						[/[^}]+/, 'source.js']
					]
				}
			});

			// Configure language features
			monacoInstance.languages.setLanguageConfiguration('svelte', {
				brackets: [
					['<', '>'],
					['{', '}'],
					['(', ')'],
					['[', ']']
				],
				autoClosingPairs: [
					{ open: '<', close: '>' },
					{ open: '{', close: '}' },
					{ open: '(', close: ')' },
					{ open: '[', close: ']' },
					{ open: '"', close: '"' },
					{ open: "'", close: "'" }
				],
				surroundingPairs: [
					{ open: '<', close: '>' },
					{ open: '{', close: '}' },
					{ open: '(', close: ')' },
					{ open: '[', close: ']' },
					{ open: '"', close: '"' },
					{ open: "'", close: "'" }
				]
			});

			// Create the editor
			editor = monacoInstance.editor.create(editorElement, {
				value: $playgroundStore.code,
				language: 'svelte',
				theme: 'vs-dark',
				fontSize: 14,
				lineNumbers: 'on',
				roundedSelection: false,
				scrollBeyondLastLine: false,
				readOnly: false,
				minimap: { enabled: true },
				automaticLayout: true,
				tabSize: 2,
				insertSpaces: false,
				wordWrap: 'on',
				lineHeight: 22,
				fontFamily: 'Monaco, Menlo, "Ubuntu Mono", "Courier New", monospace',
				scrollbar: {
					vertical: 'auto',
					horizontal: 'auto',
					verticalScrollbarSize: 10,
					horizontalScrollbarSize: 10
				},
				bracketPairColorization: {
					enabled: true
				},
				guides: {
					bracketPairs: true,
					indentation: true
				}
			});

			// Listen for content changes
			editor.onDidChangeModelContent(() => {
				const newCode = editor.getValue();
				playgroundStore.setCode(newCode);
			});

			// Listen for store changes (external updates)
			const unsubscribe = playgroundStore.subscribe((state) => {
				if (editor && editor.getValue() !== state.code) {
					const position = editor.getPosition();
					editor.setValue(state.code);
					if (position) {
						editor.setPosition(position);
					}
				}
			});

			// Cleanup function
			onDestroy(() => {
				unsubscribe();
			});

			// Add keyboard shortcuts
			editor.addCommand(monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.KeyS, () => {
				// Prevent default browser save
				return true;
			});

			editor.addCommand(
				monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyMod.Shift | monacoInstance.KeyCode.KeyF,
				() => {
					playgroundStore.formatCode();
				}
			);

			isLoading = false;
		} catch (error) {
			console.error('Failed to load Monaco editor:', error);
			isLoading = false;
		}
	});

	onDestroy(() => {
		if (editor) {
			editor.dispose();
		}
	});
</script>

<div class="monaco-editor-wrapper h-full bg-slate-900 relative">
	{#if isLoading}
		<div class="absolute inset-0 flex items-center justify-center bg-slate-900">
			<div class="flex flex-col items-center space-y-3">
				<div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
				<p class="text-white/70 text-sm">Loading editor...</p>
			</div>
		</div>
	{/if}

	<div class="h-full" bind:this={editorElement}></div>
</div>

<style>
	.monaco-editor-wrapper {
		font-feature-settings:
			'liga' 1,
			'calt' 1;
	}

	:global(.monaco-editor) {
		--vscode-editor-background: #1e293b !important;
		--vscode-editor-foreground: #e2e8f0 !important;
		--vscode-editorLineNumber-foreground: #64748b !important;
		--vscode-editorLineNumber-activeForeground: #94a3b8 !important;
		--vscode-editor-selectionBackground: #3b82f650 !important;
		--vscode-editor-selectionHighlightBackground: #3b82f630 !important;
		--vscode-editorCursor-foreground: #60a5fa !important;
		--vscode-editorWhitespace-foreground: #475569 !important;
		--vscode-editorIndentGuide-background: #374151 !important;
		--vscode-editorIndentGuide-activeBackground: #4b5563 !important;
	}

	:global(.monaco-editor .margin) {
		background-color: #1e293b !important;
	}

	:global(.monaco-editor .monaco-scrollable-element > .scrollbar > .slider) {
		background: #4b5563 !important;
	}

	:global(.monaco-editor .monaco-scrollable-element > .scrollbar > .slider:hover) {
		background: #6b7280 !important;
	}

	:global(.monaco-editor .minimap) {
		background: #0f172a !important;
	}

	:global(.monaco-editor .minimap-slider) {
		background: #3b82f650 !important;
	}

	:global(.monaco-editor .minimap-slider:hover) {
		background: #3b82f680 !important;
	}
</style>
