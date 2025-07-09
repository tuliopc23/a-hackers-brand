<script lang="ts">
	import { goto } from '$app/navigation';

	export let code: string;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';

	function openInPlayground() {
		const encodedCode = btoa(encodeURIComponent(code));
		const playgroundUrl = `/docs/playground?code=${encodedCode}`;
		goto(playgroundUrl);
	}

	$: buttonClasses = [
		'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
		'hover:scale-105 active:scale-95',
		'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',

		// Variant styles
		variant === 'primary'
			? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
			: 'bg-slate-800/50 hover:bg-slate-700/50 text-white border border-white/20 hover:border-white/30',

		// Size styles
		size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'md' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
	].join(' ');
</script>

<button class={buttonClasses} onclick={openInPlayground} title="Open this example in the interactive playground">
	<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
	</svg>

	{#if size === 'sm'}
		Playground
	{:else}
		Open in Playground
	{/if}
</button>

<style>
	button {
		backdrop-filter: blur(8px);
	}
</style>
