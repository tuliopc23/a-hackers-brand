<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, springPop } from '../motion';
	import { sizeOf } from '../utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'value'> {
		checked?: boolean;
		disabled?: boolean;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		animate?: boolean;
		reduceMotion?: boolean;
		label?: string;
		description?: string;
		class?: string;
		onCheckedChange?: (checked: boolean) => void;
	}

	let {
		checked = false,
		disabled = false,
		size = 'md',
		variant = 'glass',
		blur = 'md',
		animate = true,
		reduceMotion = false,
		label,
		description,
		class: className = '',
		onCheckedChange,
		...restProps
	}: Props = $props();

	let switchElement: HTMLButtonElement;

	const sizes = {
		sm: {
			track: 'w-8 h-4',
			thumb: 'w-3 h-3',
			translate: 'translate-x-4'
		},
		md: {
			track: 'w-11 h-6',
			thumb: 'w-5 h-5',
			translate: 'translate-x-5'
		},
		lg: {
			track: 'w-14 h-8',
			thumb: 'w-6 h-6',
			translate: 'translate-x-6'
		}
	};

	const variants = {
		default: {
			track: 'bg-white/10 border border-white/20',
			trackChecked: 'bg-blue-500/30 border-blue-400/40',
			thumb: 'bg-white shadow-lg'
		},
		glass: {
			track: 'glass-subtle border border-white/20',
			trackChecked: 'glass-medium border-blue-400/40 bg-blue-500/20',
			thumb: 'bg-white/90 backdrop-blur-sm shadow-lg'
		},
		terminal: {
			track: 'bg-terminal-green/20 border border-terminal-green/40',
			trackChecked: 'bg-terminal-green/40 border-terminal-green/60',
			thumb: 'bg-terminal-green shadow-lg'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const trackClasses = cn(
		'relative inline-flex items-center rounded-full transition-all duration-200',
		'focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent',
		sizes[size].track,
		checked ? variants[variant].trackChecked : variants[variant].track,
		variant === 'glass' && blurLevels[blur],
		disabled && 'opacity-50 cursor-not-allowed',
		!disabled && 'cursor-pointer hover:scale-105',
		className
	);

	const thumbClasses = cn(
		'inline-block rounded-full transition-all duration-200 ease-in-out transform',
		sizes[size].thumb,
		variants[variant].thumb,
		checked ? sizes[size].translate : 'translate-x-0.5',
		!reduceMotion && 'will-change-transform'
	);

	function handleClick() {
		if (disabled) return;

		const newChecked = !checked;
		checked = newChecked;
		onCheckedChange?.(newChecked);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;

		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleClick();
		}
	}

	// Track bundle size
	$effect(() => {
		sizeOf('Switch', 'small');
	});
</script>

<div class="flex items-center gap-3">
	<button
		bind:this={switchElement}
		type="button"
		role="switch"
		aria-checked={checked}
		aria-describedby={description ? 'switch-description' : undefined}
		aria-label={label || restProps['aria-label'] || 'Toggle switch'}
		class={trackClasses}
		{disabled}
		use:springPop={animate && !reduceMotion ? { scale: 0.95, duration: 100 } : undefined}
		on:click={handleClick}
		on:keydown={handleKeydown}
		{...restProps}
	>
		<span class={thumbClasses}></span>
	</button>

	{#if label || description}
		<div class="flex flex-col">
			{#if label}
				<label
					class="text-sm font-medium text-white cursor-pointer"
					class:opacity-50={disabled}
					for={switchElement?.id}
					on:click={handleClick}
				>
					{label}
				</label>
			{/if}
			{#if description}
				<p id="switch-description" class="text-xs text-white/70" class:opacity-50={disabled}>
					{description}
				</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	button[role='switch'] {
		will-change: transform;
	}

	button[role='switch'] span {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		button,
		span {
			transition: none;
			animation: none;
			will-change: auto;
		}
	}
</style>
