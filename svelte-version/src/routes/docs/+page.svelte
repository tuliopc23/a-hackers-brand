<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { dev } from '$app/environment';

	onMount(() => {
		// In development, redirect to Histoire dev server
		if (dev) {
			window.location.href = 'http://localhost:6006';
		} else {
			// In production, serve static Histoire build
			goto('/docs/static/index.html');
		}
	});
</script>

<svelte:head>
	<title>Design System Documentation</title>
	<meta name="description" content="Tulio Brand System documentation and design tokens explorer" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
	<div class="text-center text-white">
		<div class="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
		<h1 class="text-2xl font-bold mb-2">Loading Documentation</h1>
		<p class="text-white/80">Redirecting to design system docs...</p>
	</div>
</div>
