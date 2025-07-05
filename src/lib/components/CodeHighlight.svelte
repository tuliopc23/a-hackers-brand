<script>
	import { onMount } from 'svelte';
	
	export let code = '';
	export let language = 'svelte';
	export let showCopy = true;
	export let title = '';
	
	let copied = false;
	let codeElement;
	
	// Simple syntax highlighting for common languages
	const highlightSyntax = (code, lang) => {
		if (!code) return '';
		
		switch (lang) {
			case 'svelte':
			case 'html':
				return highlightSvelte(code);
			case 'css':
				return highlightCSS(code);
			case 'javascript':
			case 'js':
				return highlightJS(code);
			case 'typescript':
			case 'ts':
				return highlightTS(code);
			case 'bash':
			case 'shell':
				return highlightBash(code);
			default:
				return escapeHtml(code);
		}
	};
	
	const escapeHtml = (text) => {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	};
	
	const highlightSvelte = (code) => {
		return code
			// HTML tags
			.replace(/(&lt;\/?)([\w-]+)/g, '$1<span class="text-blue-400">$2</span>')
			.replace(/(&gt;)/g, '<span class="text-blue-400">$1</span>')
			// Attributes
			.replace(/\s([\w-]+)=/g, ' <span class="text-green-400">$1</span>=')
			// Attribute values
			.replace(/="([^"]*)"/g, '=<span class="text-yellow-400">"$1"</span>')
			.replace(/'([^']*)'/g, '<span class="text-yellow-400">\'$1\'</span>')
			// Svelte directives
			.replace(/\{([^}]+)\}/g, '<span class="text-purple-400">{$1}</span>')
			// Comments
			.replace(/(&lt;!--.*?--&gt;)/g, '<span class="text-gray-500">$1</span>');
	};
	
	const highlightCSS = (code) => {
		return code
			// Properties
			.replace(/^\s*([a-z-]+):/gm, '  <span class="text-blue-400">$1</span>:')
			// Values
			.replace(/:\s*([^;]+);/g, ': <span class="text-green-400">$1</span>;')
			// Selectors
			.replace(/^([.#]?[\w-]+\s*[,{])/gm, '<span class="text-purple-400">$1</span>')
			// Comments
			.replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>');
	};
	
	const highlightJS = (code) => {
		return code
			// Keywords
			.replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|as|class|extends|constructor)\b/g, '<span class="text-blue-400">$1</span>')
			// Strings
			.replace(/'([^']*)'/g, '<span class="text-green-400">\'$1\'</span>')
			.replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
			.replace(/`([^`]*)`/g, '<span class="text-green-400">`$1`</span>')
			// Numbers
			.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-yellow-400">$1</span>')
			// Comments
			.replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
			.replace(/(\/\*.*?\*\/)/g, '<span class="text-gray-500">$1</span>');
	};
	
	const highlightTS = (code) => {
		return highlightJS(code)
			// TypeScript keywords
			.replace(/\b(interface|type|extends|implements|public|private|protected|readonly)\b/g, '<span class="text-blue-400">$1</span>');
	};
	
	const highlightBash = (code) => {
		return code
			// Commands
			.replace(/^\$\s*/gm, '<span class="text-green-400">$</span> ')
			.replace(/^>\s*/gm, '<span class="text-blue-400">></span> ')
			// Flags
			.replace(/\s(-{1,2}[\w-]+)/g, ' <span class="text-purple-400">$1</span>')
			// Strings
			.replace(/'([^']*)'/g, '<span class="text-yellow-400">\'$1\'</span>')
			.replace(/"([^"]*)"/g, '<span class="text-yellow-400">"$1"</span>')
			// Comments
			.replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>');
	};
	
	$: highlightedCode = highlightSyntax(code, language);
	
	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => copied = false, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
	
	onMount(() => {
		// Add line numbers if needed
		if (codeElement) {
			const lines = code.split('\n');
			if (lines.length > 1) {
				codeElement.style.counterReset = 'line';
			}
		}
	});
</script>

<div class="relative group">
	{#if title}
		<div class="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10 rounded-t-lg">
			<div class="text-sm font-medium text-white/80">{title}</div>
			{#if showCopy}
				<button 
					class="p-1 hover:bg-white/10 rounded transition-colors text-white/60 hover:text-white"
					on:click={copyToClipboard}
					title={copied ? 'Copied!' : 'Copy code'}
				>
					{#if copied}
						<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					{:else}
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
					{/if}
				</button>
			{/if}
		</div>
	{/if}
	
	<div class="relative bg-black/30 {title ? 'rounded-b-lg' : 'rounded-lg'} border border-white/10 overflow-hidden">
		{#if showCopy && !title}
			<button 
				class="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded transition-colors text-white/60 hover:text-white opacity-0 group-hover:opacity-100 z-10"
				on:click={copyToClipboard}
				title={copied ? 'Copied!' : 'Copy code'}
			>
				{#if copied}
					<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
				{:else}
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
					</svg>
				{/if}
			</button>
		{/if}
		
		<pre 
			bind:this={codeElement}
			class="p-4 text-sm font-mono overflow-x-auto text-white/90 leading-relaxed"
		><code class="language-{language}">{@html highlightedCode}</code></pre>
	</div>
</div>

<style>
	pre {
		margin: 0;
		tab-size: 2;
	}
	
	code {
		font-family: 'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
	}
	
	/* Line numbers (optional) */
	:global(pre.line-numbers) {
		counter-reset: line;
	}
	
	:global(pre.line-numbers code) {
		counter-increment: line;
	}
	
	:global(pre.line-numbers code::before) {
		content: counter(line);
		display: inline-block;
		width: 3em;
		padding-right: 1em;
		margin-right: 1em;
		color: rgba(255, 255, 255, 0.3);
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		text-align: right;
		user-select: none;
	}
</style>