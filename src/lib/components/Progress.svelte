<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, glassFade } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		value?: number;
		max?: number;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal';
		type?: 'linear' | 'circular';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		showValue?: boolean;
		showPercentage?: boolean;
		indeterminate?: boolean;
		animate?: boolean;
		reduceMotion?: boolean;
		label?: string;
		class?: string;
	}

	const {
		value = 0,
		max = 100,
		size = 'md',
		variant = 'glass',
		type = 'linear',
		blur = 'md',
		showValue = false,
		showPercentage = false,
		indeterminate = false,
		animate = true,
		reduceMotion = false,
		label,
		class: className = '',
		...restProps
	}: Props = $props();

	const progressId = `progress-${Math.random().toString(36).substr(2, 9)}`;
	const percentage = $derived(indeterminate ? 0 : Math.min(100, Math.max(0, (value / max) * 100)));

	const sizes = {
		sm: {
			linear: 'h-1',
			circular: 'w-8 h-8',
			text: 'text-xs'
		},
		md: {
			linear: 'h-2',
			circular: 'w-12 h-12',
			text: 'text-sm'
		},
		lg: {
			linear: 'h-3',
			circular: 'w-16 h-16',
			text: 'text-base'
		}
	};

	const variants = {
		default: {
			track: 'bg-white/10',
			fill: 'bg-blue-500'
		},
		glass: {
			track: 'glass-subtle',
			fill: 'bg-blue-500/80 backdrop-blur-sm'
		},
		terminal: {
			track: 'bg-terminal-green/20',
			fill: 'bg-terminal-green'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const trackClasses = cn(
		'relative overflow-hidden rounded-full',
		sizes[size][type],
		variants[variant].track,
		variant === 'glass' && blurLevels[blur]
	);

	const fillClasses = cn(
		'h-full transition-all duration-500 ease-out rounded-full',
		variants[variant].fill,
		indeterminate && 'animate-pulse'
	);

const circularSize = type === 'circular' ? parseInt(sizes[size]?.circular?.split(' ')[0]?.slice(2) || '0') * 4 : 0;
	const strokeWidth = Math.max(2, circularSize / 8);
	const radius = (circularSize - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDasharray = circumference;
	const strokeDashoffset = $derived(circumference - (percentage / 100) * circumference);

	// Track bundle size
	$effect(() => {
		sizeOf('Progress', 'small');
	});
</script>

<div class="w-full space-y-2" {...restProps}>
	{#if label}
		<div class="flex justify-between items-center">
			<label id="progress-label-{progressId}" for="progress-{progressId}" class="text-sm font-medium text-white">
				{label}
			</label>
			{#if showValue || showPercentage}
				<span class={cn('font-medium text-white/80', sizes[size].text)}>
					{#if showPercentage}
						{percentage.toFixed(0)}%
					{:else if showValue}
						{value}/{max}
					{/if}
				</span>
			{/if}
		</div>
	{/if}

	{#if type === 'linear'}
		<div
			id="progress-{progressId}"
			class={cn(trackClasses, className)}
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax={max}
			aria-valuenow={indeterminate ? undefined : value}
			aria-label={!label ? 'Progress' : undefined}
			aria-labelledby={label ? `progress-label-${progressId}` : undefined}
		>
			<div
				class={fillClasses}
				style:width={indeterminate ? '30%' : `${percentage}%`}
				style:animation={indeterminate && !reduceMotion ? 'progress-indeterminate 2s ease-in-out infinite' : undefined}
				use:liquidBlur={animate && !reduceMotion ? { blur: blur, opacity: 'subtle' } : undefined}
			></div>
		</div>
	{:else}
		<!-- Circular Progress -->
		<div
			class={cn('relative inline-flex items-center justify-center', sizes[size].circular, className)}
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax={max}
			aria-valuenow={indeterminate ? undefined : value}
			aria-label={label || 'Progress'}
		>
			<svg class="transform -rotate-90" width={circularSize} height={circularSize}>
				<!-- Background circle -->
				<circle
					cx={circularSize / 2}
					cy={circularSize / 2}
					r={radius}
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="transparent"
					class="text-white/10"
				/>
				<!-- Progress circle -->
				<circle
					cx={circularSize / 2}
					cy={circularSize / 2}
					r={radius}
					stroke="currentColor"
					stroke-width={strokeWidth}
					fill="transparent"
					stroke-dasharray={strokeDasharray}
					stroke-dashoffset={indeterminate ? strokeDasharray * 0.75 : strokeDashoffset}
					stroke-linecap="round"
					class="text-blue-500 transition-all duration-500 ease-out"
					class:animate-spin={indeterminate && !reduceMotion}
				/>
			</svg>

			{#if showValue || showPercentage}
				<div class={cn('absolute inset-0 flex items-center justify-center font-medium text-white', sizes[size].text)}>
					{#if showPercentage}
						{percentage.toFixed(0)}%
					{:else if showValue}
						{value}
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	@keyframes progress-indeterminate {
		0% {
			transform: translateX(-100%);
		}
		50% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(400%);
		}
	}

	div[role='progressbar'] {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			animation: none;
			will-change: auto;
		}

		.animate-spin {
			animation: none;
		}

		.animate-pulse {
			animation: none;
		}
	}
</style>
