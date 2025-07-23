<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Stat {
		label: string;
		value: string | number;
		change?: number; // percentage change
		trend?: 'up' | 'down' | 'neutral';
		icon?: string;
		color?: string;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		stats: Stat[];
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		layout?: 'grid' | 'horizontal' | 'vertical';
		showTrends?: boolean;
		animateNumbers?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	const {
		stats = [],
		variant = 'glass',
		layout = 'grid',
		showTrends = true,
		animateNumbers = true,
		animate = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	// Animated values for number counting
	const animatedValues = $state<Record<number, number>>({});

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300'
	};

	const layouts = {
		grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4',
		horizontal: 'flex flex-wrap gap-4',
		vertical: 'space-y-4'
	};

	const baseClasses = 'rounded-2xl p-6 transition-all duration-300 will-change-transform';
	const combinedClasses = cn(baseClasses, variants[variant], className);

	// Format numbers with commas
	const formatNumber = (value: string | number): string => {
		if (typeof value === 'string') return value;
		return value.toLocaleString();
	};

	// Extract numeric value for animation
	const getNumericValue = (value: string | number): number => {
		if (typeof value === 'number') return value;

		// Try to extract number from string
		const match = value.match(/[\d,]+/);
		if (match) {
			return parseInt(match[0].replace(/,/g, ''), 10);
		}

		return 0;
	};

	// Animate number counting
	const animateValue = (index: number, targetValue: number, duration: number = 1000) => {
		if (!animateNumbers || prefersReducedMotion) {
			animatedValues[index] = targetValue;
			return;
		}

		const startValue = 0;
		const startTime = Date.now();

		const updateValue = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);

			// Easing function for smooth animation
			const easeOutQuart = 1 - Math.pow(1 - progress, 4);

			animatedValues[index] = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);

			if (progress < 1) {
				requestAnimationFrame(updateValue);
			} else {
				animatedValues[index] = targetValue;
			}
		};

		requestAnimationFrame(updateValue);
	};

	// Get trend color
	const getTrendColor = (trend?: 'up' | 'down' | 'neutral', change?: number) => {
		if (!trend && change !== undefined) {
			if (change > 0) return 'text-green-400';
			if (change < 0) return 'text-red-400';
			return 'text-neutral-400';
		}

		switch (trend) {
			case 'up':
				return 'text-green-400';
			case 'down':
				return 'text-red-400';
			case 'neutral':
				return 'text-neutral-400';
			default:
				return 'text-neutral-400';
		}
	};

	// Get trend icon
	const getTrendIcon = (trend?: 'up' | 'down' | 'neutral', change?: number) => {
		if (!trend && change !== undefined) {
			if (change > 0) return '↗';
			if (change < 0) return '↘';
			return '→';
		}

		switch (trend) {
			case 'up':
				return '↗';
			case 'down':
				return '↘';
			case 'neutral':
				return '→';
			default:
				return '→';
		}
	};

	onMount(() => {
		// Initialize animated values and start animations
		stats.forEach((stat, index) => {
			const numericValue = getNumericValue(stat.value);
			animateValue(index, numericValue, 1500 + index * 200); // Stagger animations
		});
	});
</script>

{#if shouldAnimate}
	<div
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.005 : 1.01,
			borderRadius: '24px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.02 : 0.05,
			scale: prefersReducedMotion ? 1.002 : 1.005
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		{...restProps}
	>
		<div class={layouts[layout]}>
			{#each stats as stat, index}
				<div
					class="stat-item space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
				>
					<!-- Header with icon and label -->
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							{#if stat.icon}
								<span class="text-lg">{stat.icon}</span>
							{/if}
							<span class="text-sm opacity-80 font-medium">{stat.label}</span>
						</div>

						{#if showTrends && (stat.change !== undefined || stat.trend)}
							<div class="flex items-center gap-1 text-xs {getTrendColor(stat.trend, stat.change)}">
								<span>{getTrendIcon(stat.trend, stat.change)}</span>
								{#if stat.change !== undefined}
									<span>{Math.abs(stat.change)}%</span>
								{/if}
							</div>
						{/if}
					</div>

					<!-- Value -->
					<div class="space-y-1">
						<div class="text-2xl lg:text-3xl font-bold {stat.color || ''}">
							{#if animateNumbers && typeof stat.value === 'number'}
								{formatNumber(animatedValues[index] || 0)}
							{:else}
								{formatNumber(stat.value)}
							{/if}
						</div>

						{#if stat.change !== undefined}
							<div class="text-xs {getTrendColor(stat.trend, stat.change)} flex items-center gap-1">
								<span>{stat.change > 0 ? '+' : ''}{stat.change}%</span>
								<span class="opacity-60">vs last period</span>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Children content -->
		{#if children}
			<div class="mt-6 pt-6 border-t border-current/20">
				{@render children()}
			</div>
		{/if}
	</div>
{:else}
	<div class={combinedClasses} {...restProps}>
		<div class={layouts[layout]}>
			{#each stats as stat, index}
				<div
					class="stat-item space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
				>
					<!-- Header with icon and label -->
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							{#if stat.icon}
								<span class="text-lg">{stat.icon}</span>
							{/if}
							<span class="text-sm opacity-80 font-medium">{stat.label}</span>
						</div>

						{#if showTrends && (stat.change !== undefined || stat.trend)}
							<div class="flex items-center gap-1 text-xs {getTrendColor(stat.trend, stat.change)}">
								<span>{getTrendIcon(stat.trend, stat.change)}</span>
								{#if stat.change !== undefined}
									<span>{Math.abs(stat.change)}%</span>
								{/if}
							</div>
						{/if}
					</div>

					<!-- Value -->
					<div class="space-y-1">
						<div class="text-2xl lg:text-3xl font-bold {stat.color || ''}">
							{formatNumber(stat.value)}
						</div>

						{#if stat.change !== undefined}
							<div class="text-xs {getTrendColor(stat.trend, stat.change)} flex items-center gap-1">
								<span>{stat.change > 0 ? '+' : ''}{stat.change}%</span>
								<span class="opacity-60">vs last period</span>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Children content -->
		{#if children}
			<div class="mt-6 pt-6 border-t border-current/20">
				{@render children()}
			</div>
		{/if}
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.2),
			inset 0 0 20px rgba(48, 209, 88, 0.05);
	}

	/* Glass morphism enhancements */
	div:global(.glass-medium) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	/* Enhanced focus states */
	div:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3);
	}

	/* Stat item hover effects */
	.stat-item {
		transition: all 200ms ease-out;
	}

	.stat-item:hover {
		transform: translateY(-1px);
	}

	/* Number animation styling */
	.stat-item div:global([class*='font-bold']) {
		font-variant-numeric: tabular-nums;
		letter-spacing: -0.02em;
	}

	/* Trend indicator styling */
	.stat-item span:global([class*='text-green-400']),
	.stat-item span:global([class*='text-red-400']),
	.stat-item span:global([class*='text-neutral-400']) {
		font-weight: 500;
	}

	/* Grid layout responsive adjustments */
	div:global([class*='grid-cols']) .stat-item {
		min-height: 120px;
	}

	/* Horizontal layout adjustments */
	div:global([class*='flex-wrap']) .stat-item {
		flex: 1;
		min-width: 200px;
	}
</style>
