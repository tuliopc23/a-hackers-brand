<script lang="ts">
	import { cn } from '../utils.js';
	import { glassFade } from '../motion';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		text: string;
		position?: 'top' | 'bottom' | 'left' | 'right';
		variant?: 'glass' | 'terminal' | 'liquid' | 'dark';
		delay?: number;
		offset?: number;
		arrow?: boolean;
		animated?: boolean;
		class?: string;
		children?: any;
	}

	const {
		text,
		position = 'top',
		variant = 'glass',
		delay = 500,
		offset = 8,
		arrow = true,
		animated = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	let show = $state(false);
	let tooltipRef = $state<HTMLDivElement>();
	let targetRef = $state<HTMLDivElement>();
	let tooltipPosition = $state({ x: 0, y: 0 });
	let actualPosition = $state(position);
	let timeout: NodeJS.Timeout;

	const variants = {
		glass: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white',
		terminal: 'bg-gray-900/95 border border-green-400/40 text-green-400',
		liquid: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/30 text-white',
		dark: 'bg-gray-900/95 border border-white/10 text-white'
	};

	const calculatePosition = () => {
		if (!tooltipRef || !targetRef) return;

		const targetRect = targetRef.getBoundingClientRect();
		const tooltipRect = tooltipRef.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		let x = 0;
		let y = 0;
		let finalPosition = position;

		// Calculate initial position
		switch (position) {
			case 'top':
				x = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
				y = targetRect.top - tooltipRect.height - offset;
				break;
			case 'bottom':
				x = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
				y = targetRect.bottom + offset;
				break;
			case 'left':
				x = targetRect.left - tooltipRect.width - offset;
				y = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
				break;
			case 'right':
				x = targetRect.right + offset;
				y = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
				break;
		}

		// Check boundaries and flip if necessary
		if (position === 'top' && y < 0) {
			y = targetRect.bottom + offset;
			finalPosition = 'bottom';
		} else if (position === 'bottom' && y + tooltipRect.height > viewportHeight) {
			y = targetRect.top - tooltipRect.height - offset;
			finalPosition = 'top';
		} else if (position === 'left' && x < 0) {
			x = targetRect.right + offset;
			finalPosition = 'right';
		} else if (position === 'right' && x + tooltipRect.width > viewportWidth) {
			x = targetRect.left - tooltipRect.width - offset;
			finalPosition = 'left';
		}

		// Keep within viewport horizontally
		x = Math.max(8, Math.min(x, viewportWidth - tooltipRect.width - 8));
		
		// Keep within viewport vertically
		y = Math.max(8, Math.min(y, viewportHeight - tooltipRect.height - 8));

		tooltipPosition = { x, y };
		actualPosition = finalPosition;
	};

	const handleMouseEnter = () => {
		timeout = setTimeout(() => {
			show = true;
			// Use requestAnimationFrame to ensure DOM is updated
			requestAnimationFrame(calculatePosition);
		}, delay);
	};

	const handleMouseLeave = () => {
		clearTimeout(timeout);
		show = false;
	};

	onMount(() => {
		return () => {
			clearTimeout(timeout);
		};
	});

	const arrowClasses = {
		top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full',
		bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full',
		left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full',
		right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full'
	};

	const arrowStyles = {
		top: 'border-l-transparent border-r-transparent border-b-transparent',
		bottom: 'border-l-transparent border-r-transparent border-t-transparent',
		left: 'border-t-transparent border-b-transparent border-r-transparent',
		right: 'border-t-transparent border-b-transparent border-l-transparent'
	};
</script>

<div
	bind:this={targetRef}
	class="relative inline-block"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	onfocus={handleMouseEnter}
	onblur={handleMouseLeave}
	role="tooltip"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
	
	{#if show}
		<div
			bind:this={tooltipRef}
			class={cn(
				'fixed z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-xl',
				variants[variant],
				animated && 'transition-all duration-200',
				className
			)}
			style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px;"
			transition:glassFade={{ duration: 200 }}
			role="tooltip"
		>
			{text}
			
			{#if arrow}
				<div
					class={cn(
						'absolute w-0 h-0 border-4',
						arrowClasses[actualPosition],
						arrowStyles[actualPosition],
						variant === 'glass' && 'border-white/10',
						variant === 'terminal' && 'border-green-400/40',
						variant === 'liquid' && 'border-white/30',
						variant === 'dark' && 'border-white/10'
					)}
				></div>
			{/if}
		</div>
	{/if}
</div>