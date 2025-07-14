<script lang="ts">
	// Simple placeholder component for code preview
</script>

<div class="preview-wrapper h-full bg-white relative">
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
					onclick={refreshPreview} onkeydown={(e) => e.key === "Enter" && refreshPreview()}
				>
					Retry
				</button>
			{:else}
				<span class="text-green-400 text-sm">Ready</span>
			{/if}
			
			<button 
				class="text-white/70 hover:text-white p-1 rounded"
				onclick={refreshPreview} onkeydown={(e) => e.key === "Enter" && refreshPreview()}
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
						onclick={refreshPreview} onkeydown={(e) => e.key === "Enter" && refreshPreview()}
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
