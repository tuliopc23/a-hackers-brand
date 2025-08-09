<script lang="ts">
	import { Button } from '$lib/components';
    import { onMount } from 'svelte';
    import { sanitizeHTML } from '$lib/utils/sanitize';
	
	interface Props {
		code: string;
		language?: string;
		showLineNumbers?: boolean;
		class?: string;
	}
	
	let { 
		code,
		language = 'javascript',
		showLineNumbers = true,
		class: className = ''
	}: Props = $props();
	
	let copied = $state(false);
	let highlighted = $state('');
	
	// Simple syntax highlighting (in production, use a proper library like Prism or Shiki)
	function highlightCode(code: string, lang: string): string {
		// Basic highlighting for demo purposes
		let result = code;
		
		// Keywords
		const keywords = ['import', 'from', 'export', 'const', 'let', 'var', 'function', 'return', 'if', 'else'];
		keywords.forEach(keyword => {
			result = result.replace(
				new RegExp(`\\b${keyword}\\b`, 'g'),
				`<span class="text-purple-400">${keyword}</span>`
			);
		});
		
		// Strings
		result = result.replace(
			/(["'`])([^"'`]*)\1/g,
			'<span class="text-green-400">$1$2$1</span>'
		);
		
		// Comments
		result = result.replace(
			/(\/\/[^\n]*)/g,
			'<span class="text-gray-500">$1</span>'
		);
		
		// HTML/Svelte tags
		result = result.replace(
			/(&lt;\/?)([A-Z][a-zA-Z0-9]*)/g,
			'$1<span class="text-cyan-400">$2</span>'
		);
		
		return result;
	}
	
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
	
	onMount(() => {
		// Escape HTML and highlight
		const escaped = code
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
		highlighted = highlightCode(escaped, language);
	});
	
	const lines = $derived(code.split('\n'));
</script>

<div class="relative group {className}">
	<div class="absolute top-2 right-2 z-10">
		<Button
			variant="ghost"
			size="sm"
			onclick={copyToClipboard}
			class="opacity-0 group-hover:opacity-100 transition-opacity"
		>
			{#if copied}
				<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg>
				<span class="ml-2">Copied!</span>
			{:else}
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
				</svg>
				<span class="ml-2">Copy</span>
			{/if}
		</Button>
	</div>
	
	<div class="bg-black/50 border border-green-500/20 rounded-lg overflow-hidden">
		{#if language}
			<div class="px-4 py-2 border-b border-green-500/20 bg-black/30">
				<span class="text-xs text-gray-500 font-mono uppercase">{language}</span>
			</div>
		{/if}
		
		<div class="overflow-x-auto">
			<pre class="p-4 text-sm font-mono"><code>{#if showLineNumbers}<span class="select-none">{#each lines as _, i (i)}<span class="text-gray-600 mr-4">{String(i + 1).padStart(2, ' ')}</span>
{/each}</span>{/if}<span>{@html sanitizeHTML(highlighted || code)} <!-- eslint-disable-line svelte/no-at-html-tags (sanitized code rendering) --></span></code></pre>
		</div>
	</div>
</div>

<style>
	pre {
		tab-size: 2;
		white-space: pre;
		word-wrap: normal;
		overflow-x: auto;
	}
	
	code {
		display: inline-block;
		min-width: 100%;
	}
	
	/* Custom scrollbar for code blocks */
	pre::-webkit-scrollbar {
		height: 6px;
	}
	
	pre::-webkit-scrollbar-track {
		background: rgba(0, 255, 0, 0.1);
	}
	
	pre::-webkit-scrollbar-thumb {
		background: rgba(0, 255, 0, 0.3);
		border-radius: 3px;
	}
	
	pre::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 255, 0, 0.5);
	}
</style>
