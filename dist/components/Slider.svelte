<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, springPop } from '../motion';
	import { sizeOf } from '../utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		showValue?: boolean;
		showMarks?: boolean;
		marks?: number[];
		animate?: boolean;
		reduceMotion?: boolean;
		label?: string;
		class?: string;
		onValueChange?: (value: number) => void;
	}

	let {
		value = 50,
		min = 0,
		max = 100,
		step = 1,
		disabled = false,
		size = 'md',
		variant = 'glass',
		blur = 'md',
		showValue = false,
		showMarks = false,
		marks = [],
		animate = true,
		reduceMotion = false,
		label,
		class: className = '',
		onValueChange,
		...restProps
	}: Props = $props();

	let sliderElement = $state<HTMLDivElement>();
	let trackElement = $state<HTMLDivElement>();
	let isDragging = $state(false);
	let isFocused = $state(false);
	const sliderId = `slider-${Math.random().toString(36).substr(2, 9)}`;

	const sizes = {
		sm: {
			track: 'h-1',
			thumb: 'w-4 h-4',
			value: 'text-xs'
		},
		md: {
			track: 'h-1.5',
			thumb: 'w-5 h-5',
			value: 'text-sm'
		},
		lg: {
			track: 'h-2',
			thumb: 'w-6 h-6',
			value: 'text-base'
		}
	};

	const variants = {
		default: {
			track: 'bg-white/10',
			fill: 'bg-blue-500',
			thumb: 'bg-white border-2 border-blue-500 shadow-lg'
		},
		glass: {
			track: 'glass-subtle',
			fill: 'bg-blue-500/80 backdrop-blur-sm',
			thumb: 'bg-white/90 border-2 border-blue-500/60 backdrop-blur-sm shadow-lg'
		},
		terminal: {
			track: 'bg-terminal-green/20',
			fill: 'bg-terminal-green',
			thumb: 'bg-terminal-green border-2 border-terminal-green shadow-lg'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const percentage = $derived(((value - min) / (max - min)) * 100);

	const trackClasses = cn(
		'relative w-full rounded-full cursor-pointer',
		sizes[size].track,
		variants[variant].track,
		variant === 'glass' && blurLevels[blur],
		disabled && 'opacity-50 cursor-not-allowed'
	);

	const fillClasses = cn(
		'absolute top-0 left-0 h-full rounded-full transition-all duration-200',
		variants[variant].fill
	);

	const thumbClasses = $derived(cn(
		'absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-200',
		'focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2',
		'hover:scale-110 active:scale-95',
		sizes[size].thumb,
		variants[variant].thumb,
		disabled && 'cursor-not-allowed hover:scale-100 active:scale-100',
		isDragging && 'scale-110',
		isFocused && 'ring-2 ring-blue-400/50'
	));

	function handleMouseDown(event: MouseEvent) {
		if (disabled) return;

		isDragging = true;
		updateValue(event);

		const handleMouseMove = (e: MouseEvent) => updateValue(e);
		const handleMouseUp = () => {
			isDragging = false;
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;

		let newValue = value;
		const stepSize = step || 1;
		const largeStep = (max - min) / 10;

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowUp':
				event.preventDefault();
				newValue = Math.min(max, value + stepSize);
				break;
			case 'ArrowLeft':
			case 'ArrowDown':
				event.preventDefault();
				newValue = Math.max(min, value - stepSize);
				break;
			case 'PageUp':
				event.preventDefault();
				newValue = Math.min(max, value + largeStep);
				break;
			case 'PageDown':
				event.preventDefault();
				newValue = Math.max(min, value - largeStep);
				break;
			case 'Home':
				event.preventDefault();
				newValue = min;
				break;
			case 'End':
				event.preventDefault();
				newValue = max;
				break;
		}

		if (newValue !== value) {
			value = newValue;
			onValueChange?.(newValue);
		}
	}

	function updateValue(event: MouseEvent) {
		if (!trackElement || disabled) return;

		const rect = trackElement.getBoundingClientRect();
		const clickPosition = event.clientX - rect.left;
		const newPercentage = Math.max(0, Math.min(100, (clickPosition / rect.width) * 100));
		const newValue = min + (newPercentage / 100) * (max - min);

		// Round to step
		const steppedValue = step ? Math.round(newValue / step) * step : newValue;
		const clampedValue = Math.max(min, Math.min(max, steppedValue));

		if (clampedValue !== value) {
			value = clampedValue;
			onValueChange?.(clampedValue);
		}
	}

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		isFocused = false;
	}

	// Track bundle size
	$effect(() => {
		sizeOf('Slider', 'medium');
	});
</script>

<div class="w-full space-y-2">
	{#if label}
		<label id="slider-label-{sliderId}" for="slider-{sliderId}" class="block text-sm font-medium text-white" class:opacity-50={disabled}>
			{label}
			{#if showValue}
				<span class="ml-2 text-white/70">({value})</span>
			{/if}
		</label>
	{/if}

	<div bind:this={sliderElement} class="relative w-full py-2" {...restProps}>
		<div
			bind:this={trackElement}
			id="slider-{sliderId}"
			class={trackClasses}
			onmousedown={handleMouseDown}
			role="slider"
			aria-valuemin={min}
			aria-valuemax={max}
			aria-valuenow={value}
			aria-labelledby={label ? `slider-label-${sliderId}` : undefined}
			aria-label={!label ? 'Slider' : undefined}
			tabindex={disabled ? -1 : 0}
			onkeydown={handleKeydown}
			onfocus={handleFocus}
			onblur={handleBlur}
		>
			<!-- Fill -->
			<div class={fillClasses} style:width="{percentage}%"></div>

			<!-- Thumb -->
			<div
				class={thumbClasses}
				style:left="{percentage}%"
				style:transform="translateX(-50%) translateY(-50%)"
				use:springPop={animate && !reduceMotion && isDragging ? { scale: 1.1, duration: 100 } : undefined}
			></div>

			<!-- Marks -->
			{#if showMarks && marks.length > 0}
				{#each marks as mark}
					{@const markPercentage = ((mark - min) / (max - min)) * 100}
					<div
						class="absolute top-1/2 w-1 h-1 bg-white/50 rounded-full -translate-y-1/2 -translate-x-1/2"
						style:left="{markPercentage}%"
					></div>
				{/each}
			{/if}
		</div>

		{#if showValue}
			<div class="flex justify-center mt-2">
				<span class={cn('font-medium text-white/80', sizes[size].value)}>
					{value}
				</span>
			</div>
		{/if}
	</div>
</div>

<style>
	div[role='slider'] {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			animation: none;
			will-change: auto;
		}
	}
</style>
