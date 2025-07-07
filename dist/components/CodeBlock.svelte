<script lang="ts">
	import { onMount } from 'svelte';
	import { glassFade } from '../motion';

	interface Props {
		language?: string;
		code?: string;
		title?: string;
		showCopy?: boolean;
		showLineNumbers?: boolean;
		maxHeight?: string;
	}

	let {
		language = 'javascript',
		code = '',
		title = '',
		showCopy = true,
		showLineNumbers = false,
		maxHeight = ''
	}: Props = $props();

	let mounted = $state(false);
	let copied = $state(false);

	onMount(() => {
		mounted = true;
	});

	// Copy code to clipboard
	async function copyCode() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => copied = false, 2000);
		} catch (err) {
			console.error('Failed to copy code:', err);
		}
	}

	// Syntax highlighting patterns
	const syntaxPatterns = {
		svelte: [
			{ pattern: /(\{[^}]*\})/g, class: 'text-yellow-400' }, // Svelte expressions
			{ pattern: /(#if|#each|#await|\/if|\/each|\/await|:else|:then|:catch)/g, class: 'text-purple-400' }, // Svelte directives
			{ pattern: /(on:|bind:|use:|class:|style:)/g, class: 'text-blue-400' }, // Svelte attributes
			{ pattern: /(<\/?\w+(?:\s+[^>]*)?\/?>)/g, class: 'text-red-400' }, // HTML tags
			{ pattern: /(=["'][^"']*["'])/g, class: 'text-green-400' }, // Attribute values
			{ pattern: /(\/\/.*$)/gm, class: 'text-gray-500' }, // Comments
		],
		javascript: [
			{ pattern: /(import|export|from|const|let|var|function|return|if|else|for|while|class|extends)/g, class: 'text-purple-400' }, // Keywords
			{ pattern: /(["'][^"']*["'])/g, class: 'text-green-400' }, // Strings
			{ pattern: /(\/\/.*$)/gm, class: 'text-gray-500' }, // Comments
			{ pattern: /(\d+)/g, class: 'text-yellow-400' }, // Numbers
		],
		typescript: [
			{ pattern: /(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|interface|type|enum)/g, class: 'text-purple-400' }, // Keywords
			{ pattern: /(string|number|boolean|object|any|void|null|undefined)/g, class: 'text-blue-400' }, // Types
			{ pattern: /(["'][^"']*["'])/g, class: 'text-green-400' }, // Strings
			{ pattern: /(\/\/.*$)/gm, class: 'text-gray-500' }, // Comments
			{ pattern: /(\d+)/g, class: 'text-yellow-400' }, // Numbers
		],
		css: [
			{ pattern: /([.#]?[\w-]+)(?=\s*{)/g, class: 'text-red-400' }, // Selectors
			{ pattern: /([\w-]+)(?=\s*:)/g, class: 'text-blue-400' }, // Properties
			{ pattern: /(:\s*[^;]+)/g, class: 'text-green-400' }, // Values
			{ pattern: /(\/\*.*?\*\/)/gs, class: 'text-gray-500' }, // Comments
		],
		bash: [
			{ pattern: /(npm|yarn|git|cd|ls|mkdir|rm|mv|cp|sudo|chmod|chown)/g, class: 'text-purple-400' }, // Commands
			{ pattern: /(--?\w+)/g, class: 'text-blue-400' }, // Flags
			{ pattern: /(["'][^"']*["'])/g, class: 'text-green-400' }, // Strings
			{ pattern: /(#.*$)/gm, class: 'text-gray-500' }, // Comments
		],
		json: [
			{ pattern: /(["'][^"']*["'])(?=\s*:)/g, class: 'text-blue-400' }, // Keys
			{ pattern: /(:\s*["'][^"']*["'])/g, class: 'text-green-400' }, // String values
			{ pattern: /(:\s*\d+)/g, class: 'text-yellow-400' }, // Number values
			{ pattern: /(true|false|null)/g, class: 'text-purple-400' }, // Literals
		]
	};

	// Apply syntax highlighting
	function highlightCode(code: string, lang: string): string {
		const patterns = syntaxPatterns[lang] || [];
		let highlighted = code;

		// Escape HTML
		highlighted = highlighted
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		// Apply syntax patterns
		patterns.forEach(({ pattern, class: className }) => {
			highlighted = highlighted.replace(pattern, `<span class="${className}">$1</span>`);
		});

		return highlighted;
	}

	// Split code into lines for line numbers
	function getCodeLines(code: string): string[] {
		return code.split('\n');
	}

	const highlightedCode = $derived(() => highlightCode(code, language));
	const codeLines = $derived(() => getCodeLines(highlightedCode));
</script>

<div 
	class="relative group"
	in:glassFade={{ duration: 300, direction: 'up', distance: 10 }}
>
	<!-- Header -->
	{#if title || showCopy}
		<div class="flex items-center justify-between bg-slate-800/80 backdrop-blur-sm px-4 py-3 border-b border-white/10">
			{#if title}
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 bg-red-500 rounded-full"></div>
					<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div class="w-3 h-3 bg-green-500 rounded-full"></div>
					<span class="ml-3 text-sm font-medium text-white/80">{title}</span>
				</div>
			{:else}
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 bg-red-500 rounded-full"></div>
					<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div class="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>
			{/if}

			{#if showCopy}
				<button 
					class="flex items-center space-x-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 {copied ? 'bg-green-500/20 text-green-400' : 'text-white/80'}"
					onclick={copyCode}
					aria-label="Copy code to clipboard"
				>
					{#if copied}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						<span class="text-sm">Copied!</span>
					{:else}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
						<span class="text-sm">Copy</span>
					{/if}
				</button>
			{/if}
		</div>
	{/if}

	<!-- Code Content -->
	<div class="relative">
		<pre 
			class="p-4 bg-slate-900/90 backdrop-blur-sm text-sm font-mono overflow-x-auto {maxHeight ? `max-h-[${maxHeight}]` : ''} {title || showCopy ? '' : 'rounded-lg'} {title || showCopy ? 'rounded-b-lg' : ''}"
		><code class="text-white/90">{#if showLineNumbers}
{#each codeLines as line, index}
<span class="text-white/40 select-none mr-4">{String(index + 1).padStart(2, ' ')}</span>{@html line}
{/each}
{:else}
{@html highlightedCode}
{/if}</code></pre>

		<!-- Language Badge -->
		<div class="absolute top-3 right-3 px-2 py-1 bg-black/50 text-xs font-medium text-white/60 rounded backdrop-blur-sm">
			{language}
		</div>
	</div>
</div>

<style>
	/* Ensure proper scrolling */
	pre {
		-o-tab-size: 2;
		   tab-size: 2;
		-moz-tab-size: 2;
	}

	/* Custom scrollbar for code blocks */
	pre::-webkit-scrollbar {
		height: 8px;
	}

	pre::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
	}

	pre::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
	}

	pre::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.5);
	}
</style>