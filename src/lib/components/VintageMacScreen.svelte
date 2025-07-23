<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'ghost';
		class?: string;
		title?: string;
		showControls?: boolean;
		children?: import('svelte').Snippet;
	}

	const {
		variant = 'primary',
		class: className = '',
		title = 'Vintage Mac',
		showControls = true,
		children
	}: Props = $props();

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	const variants = {
		primary: 'bg-slate-900/90 border-white/20 text-white',
		secondary: 'bg-slate-800/90 border-white/10 text-white/90',
		ghost: 'bg-transparent border-white/5 text-white/80'
	};

	const combinedClasses = cn(
		'relative rounded-lg border backdrop-blur-sm transition-all duration-300',
		'shadow-lg shadow-black/20',
		variants[variant],
		className
	);
</script>

<div class={combinedClasses}>
	{#if showControls}
		<!-- Mac-style title bar -->
		<div class="flex items-center justify-between px-4 py-3 border-b border-white/10">
			<div class="flex items-center space-x-2">
				<!-- Traffic light buttons -->
				<div class="flex space-x-2">
					<div class="w-3 h-3 rounded-full bg-red-500/80"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
					<div class="w-3 h-3 rounded-full bg-green-500/80"></div>
				</div>
			</div>
			
			{#if title}
				<div class="text-sm font-medium text-white/70 font-mono">
					{title}
				</div>
			{/if}
			
			<div class="w-16"></div> <!-- Spacer for centering -->
		</div>
	{/if}

	<!-- Content area -->
	<div class="p-6">
		{#if children}
			{@render children()}
		{:else}
			<div class="text-center text-white/60 font-mono">
				Vintage Mac Screen Content
			</div>
		{/if}
	</div>

	{#if mounted}
		<!-- Vintage CRT effect overlay -->
		<div class="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
			<!-- Scanlines -->
			<div class="absolute inset-0 opacity-10" 
				 style="background: repeating-linear-gradient(
					0deg,
					transparent,
					transparent 2px,
					rgba(255,255,255,0.1) 2px,
					rgba(255,255,255,0.1) 4px
				 );">
			</div>
			
			<!-- Screen curvature effect -->
			<div class="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 opacity-30"></div>
		</div>
	{/if}
</div>

<style>
	.bg-gradient-radial {
		background: radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(0,0,0,0.2) 100%);
	}
</style>