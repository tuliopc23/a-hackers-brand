<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, springPop } from '../motion';
	import { brandColors } from '../tokens';
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface MetricData {
		label: string;
		value: string | number;
		previousValue?: string | number;
		change?: number;
		changeType?: 'positive' | 'negative' | 'neutral';
		trend?: 'up' | 'down' | 'flat';
		unit?: string;
		format?: 'number' | 'currency' | 'percentage';
		icon?: string;
		description?: string;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		metric: MetricData;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'glass' | 'terminal' | 'liquid';
		layout?: 'horizontal' | 'vertical';
		showTrend?: boolean;
		showChange?: boolean;
		showIcon?: boolean;
		animated?: boolean;
		loading?: boolean;
		clickable?: boolean;
		class?: string;
	}

	let {
		metric,
		size = 'md',
		variant = 'glass',
		layout = 'vertical',
		showTrend = true,
		showChange = true,
		showIcon = false,
		animated = true,
		loading = false,
		clickable = false,
		class: className = '',
		...restProps
	}: Props = $props();

	const sizes = {
		sm: {
			container: 'p-4',
			value: 'text-2xl',
			label: 'text-sm',
			change: 'text-xs',
			icon: 'w-5 h-5'
		},
		md: {
			container: 'p-6',
			value: 'text-3xl',
			label: 'text-base',
			change: 'text-sm',
			icon: 'w-6 h-6'
		},
		lg: {
			container: 'p-8',
			value: 'text-4xl',
			label: 'text-lg',
			change: 'text-base',
			icon: 'w-8 h-8'
		}
	};

	const variants = {
		glass: {
			container: 'bg-white/10 border-white/20 backdrop-blur-md text-white',
			value: 'text-white font-bold',
			label: 'text-white/80',
			changePositive: 'text-green-400',
			changeNegative: 'text-red-400',
			changeNeutral: 'text-white/60',
			icon: 'text-white/70'
		},
		terminal: {
			container: 'bg-terminal-bg/80 border-terminal-green/40 text-terminal-green',
			value: 'text-terminal-green font-bold',
			label: 'text-terminal-green/80',
			changePositive: 'text-terminal-green',
			changeNegative: 'text-red-400',
			changeNeutral: 'text-terminal-green/60',
			icon: 'text-terminal-green/70'
		},
		liquid: {
			container: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/20 backdrop-blur-md text-white',
			value: 'text-white font-bold',
			label: 'text-white/80',
			changePositive: 'text-green-400',
			changeNegative: 'text-red-400',
			changeNeutral: 'text-white/60',
			icon: 'text-white/70'
		}
	};

	const currentSize = sizes[size];
	const currentVariant = variants[variant];

	// Computed properties
	const formattedValue = $derived(() => {
		if (loading) return '---';

		const value = metric.value;
		const format = metric.format || 'number';
		const unit = metric.unit || '';

		switch (format) {
			case 'currency':
				return `$${Number(value).toLocaleString()}${unit}`;
			case 'percentage':
				return `${value}%`;
			default:
				return `${Number(value).toLocaleString()}${unit}`;
		}
	});

	const changeDisplay = $derived(() => {
		if (!metric.change || loading) return null;

		const change = metric.change;
		const isPositive = change > 0;
		const isNegative = change < 0;
		const prefix = isPositive ? '+' : '';

		return {
			value: `${prefix}${change}%`,
			type: isPositive ? 'positive' : isNegative ? 'negative' : 'neutral'
		};
	});

	const trendIcon = $derived(() => {
		if (!metric.trend || loading) return null;

		switch (metric.trend) {
			case 'up':
				return TrendingUp;
			case 'down':
				return TrendingDown;
			default:
				return Minus;
		}
	});

	const changeColorClass = $derived(() => {
		if (!changeDisplay) return currentVariant.changeNeutral;

		switch (changeDisplay.type) {
			case 'positive':
				return currentVariant.changePositive;
			case 'negative':
				return currentVariant.changeNegative;
			default:
				return currentVariant.changeNeutral;
		}
	});

	function handleClick() {
		if (clickable) {
			const event = new CustomEvent('click', { detail: metric });
			restProps.onclick?.(event);
		}
	}
</script>

<svelte:element
    this={clickable ? 'button' : 'div'}
    class={cn(
		'relative rounded-lg border transition-all duration-200',
		currentSize.container,
		currentVariant.container,
		clickable && 'cursor-pointer hover:scale-105 hover:shadow-lg',
		animated && 'transform-gpu',
		className
	)}
	use:liquidBlur={{ intensity: 'medium' }}
	onclick={handleClick}
    role={clickable ? 'button' : undefined}
    tabindex={clickable ? 0 : undefined}
	{...restProps}
>
	{#if layout === 'horizontal'}
		<!-- Horizontal Layout -->
		<div class="flex items-center justify-between">
			<div class="flex-1">
				<div class={cn('font-medium', currentSize.label, currentVariant.label)}>
					{metric.label}
				</div>
				<div class={cn('font-bold tracking-tight', currentSize.value, currentVariant.value)}>
					{formattedValue}
				</div>
			</div>

			<div class="flex flex-col items-end gap-1">
				{#if showIcon && showTrend && trendIcon}
					{@const TrendIcon = trendIcon}
					<TrendIcon class={cn(currentSize.icon, changeColorClass)} strokeWidth={2} />
				{:else if showIcon && metric.icon}
					<Activity class={cn(currentSize.icon, currentVariant.icon)} />
				{/if}

				{#if showChange && changeDisplay}
					<div class={cn('font-medium', currentSize.change, changeColorClass)}>
						{changeDisplay.value}
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<!-- Vertical Layout -->
		<div class="space-y-2">
			<!-- Header with icon and label -->
			<div class="flex items-center justify-between">
				<div class={cn('font-medium', currentSize.label, currentVariant.label)}>
					{metric.label}
				</div>

				{#if showIcon && metric.icon}
					<Activity class={cn(currentSize.icon, currentVariant.icon)} />
				{/if}
			</div>

			<!-- Main Value -->
			<div class={cn('font-bold tracking-tight', currentSize.value, currentVariant.value)}>
				{formattedValue}
			</div>

			<!-- Trend and Change -->
			{#if (showTrend && trendIcon) || (showChange && changeDisplay)}
				<div class="flex items-center gap-2">
					{#if showTrend && trendIcon}
						{@const TrendIcon = trendIcon}
						<TrendIcon class={cn('w-4 h-4', changeColorClass)} strokeWidth={2} />
					{/if}

					{#if showChange && changeDisplay}
						<span class={cn('font-medium', currentSize.change, changeColorClass)}>
							{changeDisplay.value}
						</span>
					{/if}

					{#if metric.previousValue}
						<span class={cn('opacity-60', currentSize.change, currentVariant.label)}>
							from {metric.previousValue}
						</span>
					{/if}
				</div>
			{/if}

			<!-- Description -->
			{#if metric.description}
				<div class={cn('opacity-70 leading-relaxed', currentSize.change, currentVariant.label)}>
					{metric.description}
				</div>
			{/if}
		</div>
	{/if}

	<!-- Loading State -->
	{#if loading}
		<div class="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
			<div class="flex items-center gap-2">
				<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
				<span class="text-sm opacity-70">Loading...</span>
			</div>
		</div>
	{/if}

	<!-- Hover Effect -->
	{#if clickable}
		<div
			class="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none"
		></div>
	{/if}
</svelte:element>

<style>
	/* Ensure smooth hover transitions */
	[role='button'] {
		will-change: transform;
	}

	/* Loading skeleton animation */
	@keyframes skeleton {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.loading {
		animation: skeleton 1.5s ease-in-out infinite;
	}
</style>
