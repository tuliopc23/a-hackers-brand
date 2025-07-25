<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { playgroundStore } from '$lib/stores/playground';

	const dispatch = createEventDispatcher<{
		share: void;
		reset: void;
		format: void;
	}>();

	let showCopiedNotification = $state(false);

	function handleShare() {
		dispatch('share');
		showCopiedNotification = true;
		setTimeout(() => {
			showCopiedNotification = false;
		}, 2000);
	}

	function handleReset() {
		dispatch('reset');
	}

	function handleFormat() {
		dispatch('format');
	}

	function downloadCode() {
		const code = $playgroundStore.code;
		const blob = new Blob([code], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'component.svelte';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	// Keyboard shortcuts
	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey || event.metaKey) {
			switch (event.key) {
				case 's':
					event.preventDefault();
					downloadCode();
					break;
				case 'r':
					event.preventDefault();
					handleReset();
					break;
			}
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="playground-toolbar bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-3 mb-4">
	<div class="flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<h2 class="text-lg font-semibold text-white">Code Editor</h2>
			<span class="text-white/60 text-sm">Monaco Editor with Svelte syntax highlighting</span>
		</div>

		<div class="flex items-center space-x-2">
			<!-- Format Code -->
			<button
				class="toolbar-btn"
				onclick={handleFormat}
				onkeydown={(e) => e.key === 'Enter' && handleFormat()}
				title="Format Code (Ctrl+Shift+F)"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
				Format
			</button>

			<!-- Download Code -->
			<button
				class="toolbar-btn"
				onclick={downloadCode}
				onkeydown={(e) => e.key === 'Enter' && downloadCode()}
				title="Download Code (Ctrl+S)"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				Download
			</button>

			<!-- Share -->
			<button
				class="toolbar-btn relative"
				onclick={handleShare}
				onkeydown={(e) => e.key === 'Enter' && handleShare()}
				title="Share Playground"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
					/>
				</svg>
				Share

				{#if showCopiedNotification}
					<div
						class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded animate-fade-in-out"
					>
						Copied to clipboard!
					</div>
				{/if}
			</button>

			<!-- Reset -->
			<button
				class="toolbar-btn text-red-400 hover:text-red-300 hover:bg-red-500/10"
				onclick={handleReset}
				onkeydown={(e) => e.key === 'Enter' && handleReset()}
				title="Reset to Default (Ctrl+R)"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
				Reset
			</button>
		</div>
	</div>

	<!-- Quick Actions Row -->
	<div class="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
		<div class="flex items-center space-x-4 text-sm text-white/60">
			<span>Quick actions:</span>
			<code class="bg-white/10 px-1 rounded">Ctrl+S</code>
			<span>Download</span>
			<code class="bg-white/10 px-1 rounded">Ctrl+Shift+F</code>
			<span>Format</span>
			<code class="bg-white/10 px-1 rounded">Ctrl+R</code>
			<span>Reset</span>
		</div>

		<div class="flex items-center space-x-2 text-sm text-white/60">
			<div class="flex items-center space-x-1">
				<div class="w-2 h-2 rounded-full bg-green-400"></div>
				<span>Live Preview</span>
			</div>
		</div>
	</div>
</div>

<style>
	.toolbar-btn {
		@apply flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200;
	}

	.toolbar-btn:hover {
		transform: translateY(-1px);
	}

	@keyframes fade-in-out {
		0% {
			opacity: 0;
			transform: translate(-50%, -10px);
		}
		50% {
			opacity: 1;
			transform: translate(-50%, 0);
		}
		100% {
			opacity: 0;
			transform: translate(-50%, -10px);
		}
	}

	.animate-fade-in-out {
		animation: fade-in-out 2s ease-in-out;
	}
</style>
