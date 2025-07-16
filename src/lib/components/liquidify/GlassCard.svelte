<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'elevated' | 'outlined' | 'pressed';
		hover?: boolean;
		bordered?: boolean;
		padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
		children?: Snippet;
	}

	const {
		variant = 'default',
		hover = true,
		bordered = true,
		padding = 'md',
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const variantClasses = {
		default: 'bg-white/10 border-white/20',
		elevated: 'bg-white/15 border-white/25 shadow-xl',
		outlined: 'bg-white/5 border-white/30',
		pressed: 'bg-white/5 border-white/15 shadow-inner'
	};

	const paddingClasses = {
		none: 'p-0',
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8',
		xl: 'p-10'
	};

	let cardRef: HTMLDivElement;

	// Magnetic hover effect
	const handleMouseMove = (e: MouseEvent) => {
		if (!hover) return;

		const rect = cardRef.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const deltaX = (e.clientX - centerX) * 0.02;
		const deltaY = (e.clientY - centerY) * 0.02;

		cardRef.style.transform = `translate(${deltaX}px, ${deltaY}px) rotateX(${deltaY * 0.1}deg) rotateY(${deltaX * 0.1}deg)`;
	};

	const handleMouseLeave = () => {
		if (!hover) return;
		cardRef.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
	};
</script>

<div
	bind:this={cardRef}
	{...restProps}
	class={cn(
		// Base styles
		'relative rounded-xl backdrop-blur-md transition-all duration-300 ease-out transform-gpu will-change-transform',
		'before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/5 before:to-transparent',
		'after:absolute after:inset-0 after:rounded-[inherit] after:shadow-inner after:shadow-white/5',
		// Variant styles
		variantClasses()[variant],
		// Border
		bordered && 'border',
		// Padding
		paddingClasses()[padding],
		// Hover effects
		hover && 'hover:shadow-2xl hover:bg-white/12 hover:border-white/30 cursor-pointer',
		// Enhanced glass effect
		'shadow-lg shadow-black/10',
		className
	)}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	style:perspective="1000px"
>
	<!-- Glass shimmer effect -->
	<div
		class="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none"
		style:background="linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)" style:background-size="200% 200%" style:animation="shimmer 3s ease-in-out infinite"
	></div>

	<!-- Content -->
	<div class="relative z-10">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	@keyframes shimmer {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}

	div {
		box-shadow:
			0 4px 8px rgba(0, 0, 0, 0.12),
			0 8px 16px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(255, 255, 255, 0.08) inset;
	}

	div:hover {
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.15),
			0 16px 32px rgba(0, 0, 0, 0.1),
			0 0 0 1px rgba(255, 255, 255, 0.12) inset;
	}
</style>
