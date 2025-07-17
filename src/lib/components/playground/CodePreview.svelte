<script lang="ts">
	// Simple placeholder component for code preview
</script>

<div class="preview-wrapper h-full bg-slate-900 relative">
	<div class="preview-header bg-slate-800 border-b border-white/10 p-3 flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<div class="w-3 h-3 rounded-full bg-red-500"></div>
			<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
			<div class="w-3 h-3 rounded-full bg-green-500"></div>
			<span class="text-white/70 text-sm ml-4">Preview</span>
		</div>
		
		<div class="flex items-center space-x-2">
			<span class="text-white/50 text-sm">Preview Disabled</span>
		</div>
	</div>

	<div class="preview-content h-full flex items-center justify-center bg-slate-900/90">
		<div class="text-center p-8">
			<div class="text-slate-500 mb-4">
				<svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
			</div>
			<h3 class="text-xl font-semibold text-white mb-2">Live Preview</h3>
			<p class="text-slate-400 max-w-sm mx-auto">
				Live preview is temporarily disabled. Code changes are saved automatically.
			</p>
		</div>
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
