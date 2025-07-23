<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import MonacoEditor from '$lib/components/playground/MonacoEditor.svelte';
	import CodePreview from '$lib/components/playground/CodePreview.svelte';
	import PlaygroundToolbar from '$lib/components/playground/PlaygroundToolbar.svelte';
	import { playgroundStore } from '$lib/stores/playground';

	let editorContainer = $state<HTMLElement>();
	let previewContainer = $state<HTMLElement>();
	let isLoading = $state(true);
	let splitPanePosition = $state(50); // percentage
	let isDragging = $state(false);

	// Default Svelte code template
	const defaultCode = `<${"script"}>
	import { Button, Card, Badge } from "a-hackers-brand";

	let count = 0;

	function increment() {
		count += 1;
	}
</${"script"}>

<div class="p-8 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
	<Card class="max-w-md mx-auto p-6">
		<h1 class="text-2xl font-bold text-white mb-4">
			Welcome to the Playground!
		</h1>

		<p class="text-white/80 mb-4">
			You clicked the button <Badge variant="outline">{count}</Badge> times.
		</p>

		<Button onclick={increment} class="w-full">
			Click me!
		</Button>
	</Card>
</div>

<${"style"}>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
	}
</${"style"}>`;

	onMount(() => {
		// Load code from URL params if provided
		const urlCode = get(page).url.searchParams.get('code');
		if (urlCode) {
			try {
				const decodedCode = decodeURIComponent(atob(urlCode));
				playgroundStore.setCode(decodedCode);
			} catch (e) {
				console.warn('Failed to decode URL code:', e);
				playgroundStore.setCode(defaultCode);
			}
		} else {
			playgroundStore.setCode(defaultCode);
		}

		isLoading = false;
	});

	function handleDragStart(event: MouseEvent) {
		isDragging = true;
		event.preventDefault();
	}

	function handleDragMove(event: MouseEvent) {
		if (!isDragging) return;

		const containerRect = editorContainer.parentElement?.getBoundingClientRect();
		if (!containerRect) return;

		const newPosition = ((event.clientX - containerRect.left) / containerRect.width) * 100;
		splitPanePosition = Math.min(Math.max(newPosition, 20), 80); // Limit between 20% and 80%
	}

	function handleDragEnd() {
		isDragging = false;
	}

	function sharePlayground() {
		const code = $playgroundStore.code;
		const encodedCode = btoa(encodeURIComponent(code));
		const shareUrl = `${window.location.origin}/docs/playground?code=${encodedCode}`;

		if (navigator.share) {
			navigator.share({
				title: 'A Hacker\'s Brand Playground',
				text: 'Check out this Svelte component in the playground!',
				url: shareUrl
			});
		} else {
			navigator.clipboard.writeText(shareUrl);
			// You could show a toast notification here
		}
	}

	function resetPlayground() {
		playgroundStore.setCode(defaultCode);
	}

	// Handle window resize for mobile layout
	let windowWidth = $state(0);
	const isMobile = $derived(() => windowWidth < 768);
	$effect(() => {
		if (isMobile) {
			splitPanePosition = 100; // Stack vertically on mobile
		}
	});
</script>

<svelte:window 
	bind:innerWidth={windowWidth}
	onmousemove={handleDragMove} 
	onmouseup={handleDragEnd} 
/>

<svelte:head>
	<title>Playground - A Hacker's Brand</title>
	<meta name="description" content="Interactive playground for A Hacker's Brand design system components" />
</svelte:head>

<div class="docs-content">
	<div class="flex items-center justify-between mb-6">
		<div>
			<h1>Interactive Playground</h1>
			<p class="text-white/70 text-lg mt-2">
				Experiment with A Hacker's Brand components in real-time. Edit the code on the left and see the results on the right.
			</p>
		</div>
	</div>

	<PlaygroundToolbar 
		onshare={sharePlayground}
		onreset={resetPlayground}
		onformat={() => playgroundStore.formatCode()}
	/>

	{#if isLoading}
		<div class="flex items-center justify-center h-96 bg-slate-800/50 rounded-lg">
			<div class="flex flex-col items-center space-y-4">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
				<p class="text-white/70">Loading playground...</p>
			</div>
		</div>
	{:else}
		<div class="playground-container bg-slate-800/30 rounded-lg border border-white/10 overflow-hidden">
			{#if isMobile}
				<!-- Mobile: Stack vertically -->
				<div class="flex flex-col h-screen">
					<div class="flex-1 border-b border-white/10">
						<MonacoEditor />
					</div>
					<div class="flex-1">
						<CodePreview />
					</div>
				</div>
			{:else}
				<!-- Desktop: Split panes -->
				<div class="flex h-screen">
					<div 
						class="transition-all duration-200"
						style="width: {splitPanePosition}%"
						bind:this={editorContainer}
					>
						<MonacoEditor />
					</div>

					<!-- Resizer -->
					<div 
						class="w-1 bg-white/10 hover:bg-blue-400/50 cursor-col-resize transition-colors"
						onmousedown={handleDragStart}
						role="separator"
						aria-label="Resize panels"
						tabindex="0"
						onkeydown={(e) => {
							if (e.key === 'ArrowLeft') {
								splitPanePosition = Math.max(splitPanePosition - 5, 20);
							} else if (e.key === 'ArrowRight') {
								splitPanePosition = Math.min(splitPanePosition + 5, 80);
							}
						}}
					></div>

					<div 
						class="transition-all duration-200"
						style="width: {100 - splitPanePosition}%"
						bind:this={previewContainer}
					>
						<CodePreview />
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.playground-container {
		height: calc(100vh - 200px);
		min-height: 600px;
	}

	:global(.playground-container .monaco-editor) {
		height: 100% !important;
	}

	@media (max-width: 768px) {
		.playground-container {
			height: calc(100vh - 150px);
		}
	}

	/* Prevent text selection while dragging */
	:global(body.dragging) {
		user-select: none;
		cursor: col-resize;
	}
</style>
