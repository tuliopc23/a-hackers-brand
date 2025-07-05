<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, springPop, magneticHover } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'value'> {
		checked?: boolean;
		disabled?: boolean;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal' | 'liquid';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		animate?: boolean;
		liquid?: boolean;
		magnetic?: boolean;
		jelly?: boolean;
		glow?: boolean;
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
		liquid = false,
		magnetic = false,
		jelly = false,
		glow = false,
		reduceMotion = false,
		label,
		description,
		class: className = '',
		onCheckedChange,
		...restProps
	}: Props = $props();

	let switchElement = $state<HTMLButtonElement>();

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
		},
		liquid: {
			track: 'bg-gradient-to-r from-white/5 to-white/15 border border-white/20 backdrop-blur-md',
			trackChecked: 'bg-gradient-to-r from-blue-500/20 to-purple-500/30 border-blue-400/40',
			thumb: 'bg-gradient-to-br from-white to-white/80 shadow-xl'
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
		liquid && 'backdrop-blur-md',
		glow && checked && 'shadow-lg shadow-blue-400/30',
		disabled && 'opacity-50 cursor-not-allowed',
		!disabled && 'cursor-pointer hover:scale-105',
		jelly && !disabled && 'hover:scale-110 active:scale-95',
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
		use:magneticHover={magnetic && !disabled && !reduceMotion ? { strength: 0.15, distance: 30 } : undefined}
		use:jellyHover={jelly && !disabled && !reduceMotion ? { intensity: 0.1, speed: 150 } : undefined}
		onclick={handleClick}
		onkeydown={handleKeydown}
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
					onclick={handleClick}
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

	/* Liquid switch effects */
	button[role='switch']:hover span {
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
	}

	button[role='switch'][aria-checked='true'] span {
		transform: translateX(100%) scale(1.05);
	}

	/* Enhanced liquid variant styling */
	button:global(.backdrop-blur-md):hover {
		backdrop-filter: blur(16px) saturate(150%);
	}

	/* Jelly physics */
	button:global(.jelly-hover):active span {
		transform: scale(0.9);
		transition: transform 100ms cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	/* Magnetic attraction */
	button:global(.magnetic):hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(59, 130, 246, 0.25);
	}

	/* Glow effect */
	button[aria-checked='true']:global(.shadow-lg) {
		animation: glow-pulse 2s ease-in-out infinite alternate;
	}

	@keyframes glow-pulse {
		from {
			box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
		}
		to {
			box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
		}
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
