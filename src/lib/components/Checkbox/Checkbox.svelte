<script lang="ts">
	import { cn } from '../../utils.js';
	import { liquidBlur, springPop } from '../../motion';
	import { sizeOf } from '../../utils/bundle-size.js';
	import { Check, Minus } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLAttributes<HTMLInputElement>, 'checked' | 'size'> {
		checked?: boolean;
		indeterminate?: boolean;
		disabled?: boolean;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		animate?: boolean;
		reduceMotion?: boolean;
		label?: string;
		'aria-label'?: string;
		description?: string;
		error?: string;
		required?: boolean;
		class?: string;
		onCheckedChange?: (checked: boolean | 'indeterminate') => void;
	}

	let {
		checked = false,
		indeterminate = false,
		disabled = false,
		size = 'md',
		variant = 'glass',
		blur = 'md',
		animate = true,
		reduceMotion = false,
		label,
		'aria-label': ariaLabel,
		description,
		error,
		required = false,
		class: className = '',
		onCheckedChange,
		...restProps
	}: Props = $props();

	let checkboxElement: HTMLInputElement;
	const uniqueId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
	const descriptionId = description ? `${uniqueId}-description` : undefined;
	const errorId = error ? `${uniqueId}-error` : undefined;

	// Handle indeterminate state
	$effect(() => {
		if (checkboxElement) {
			checkboxElement.indeterminate = indeterminate;
		}
	});

	const sizes = {
		sm: {
			container: 'w-4 h-4',
			icon: 'w-3 h-3',
			text: 'text-sm'
		},
		md: {
			container: 'w-5 h-5',
			icon: 'w-4 h-4',
			text: 'text-base'
		},
		lg: {
			container: 'w-6 h-6',
			icon: 'w-5 h-5',
			text: 'text-lg'
		}
	};

	const variants = {
		default: {
			container: 'bg-white/10 border border-white/20',
			containerChecked: 'bg-blue-500/30 border-blue-400/40',
			containerIndeterminate: 'bg-blue-500/25 border-blue-400/35',
			icon: 'text-white',
			iconChecked: 'text-white',
			iconIndeterminate: 'text-white'
		},
		glass: {
			container: 'glass-subtle border border-white/20',
			containerChecked: 'glass-medium border-blue-400/40 bg-blue-500/20',
			containerIndeterminate: 'glass-medium border-blue-400/35 bg-blue-500/15',
			icon: 'text-white/80',
			iconChecked: 'text-white',
			iconIndeterminate: 'text-white/90'
		},
		terminal: {
			container: 'bg-terminal-green/20 border border-terminal-green/40',
			containerChecked: 'bg-terminal-green/40 border-terminal-green/60',
			containerIndeterminate: 'bg-terminal-green/30 border-terminal-green/50',
			icon: 'text-terminal-green',
			iconChecked: 'text-terminal-green',
			iconIndeterminate: 'text-terminal-green'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const containerClasses = cn(
		'relative inline-flex items-center justify-center rounded-md transition-all duration-200',
		'focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent',
		sizes[size].container,
		indeterminate
			? variants[variant].containerIndeterminate
			: checked
				? variants[variant].containerChecked
				: variants[variant].container,
		variant === 'glass' && blurLevels[blur],
		disabled && 'opacity-50 cursor-not-allowed',
		!disabled && 'cursor-pointer hover:scale-105',
		error && 'border-red-400/60 bg-red-500/10',
		className
	);

	const iconClasses = cn(
		'transition-all duration-200',
		sizes[size].icon,
		indeterminate
			? variants[variant].iconIndeterminate
			: checked
				? variants[variant].iconChecked
				: variants[variant].icon
	);

	const labelClasses = cn(
		'font-medium text-white cursor-pointer select-none',
		sizes[size].text,
		disabled && 'opacity-50',
		error && 'text-red-300'
	);

	const descriptionClasses = cn('text-xs text-white/70 mt-1', disabled && 'opacity-50', error && 'text-red-300/70');

	function handleChange(event: Event) {
		if (disabled) return;

		const target = event.target as HTMLInputElement;
		const newChecked = target.checked;

		checked = newChecked;
		indeterminate = false;

		onCheckedChange?.(newChecked);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;

		if (event.key === 'Enter') {
			event.preventDefault();
			checkboxElement.click();
		}
	}

	// Track bundle size
	$effect(() => {
		sizeOf('Checkbox', 'small');
	});
</script>

<div class="flex items-start gap-3">
	<div class={containerClasses}>
		<input
			bind:this={checkboxElement}
			type="checkbox"
			id={uniqueId}
			bind:checked
			{disabled}
			{required}
			class="sr-only"
			aria-label={ariaLabel || label}
			aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}
			aria-invalid={!!error}
			use:springPop={animate && !reduceMotion ? { scale: 0.9, duration: 150 } : undefined}
			onchange={handleChange}
			onkeydown={handleKeydown}
			{...restProps}
		/>

		<div class="absolute inset-0 flex items-center justify-center">
			{#if indeterminate}
				<Minus class={iconClasses} strokeWidth={2.5} />
			{:else if checked}
				<Check class={iconClasses} strokeWidth={2.5} />
			{/if}
		</div>
	</div>

	{#if label || description || error}
		<div class="flex-1 min-w-0">
			{#if label}
				<label for={uniqueId} class={labelClasses}>
					{label}
					{#if required}
						<span class="text-red-400 ml-1">*</span>
					{/if}
				</label>
			{/if}

			{#if description}
				<p id={descriptionId} class={descriptionClasses}>
					{description}
				</p>
			{/if}

			{#if error}
				<p id={errorId} class="text-xs text-red-400 mt-1" role="alert">
					{error}
				</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.glass-subtle {
		background: rgba(255, 255, 255, 0.05);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}

	.glass-medium {
		background: rgba(255, 255, 255, 0.1);
		-webkit-backdrop-filter: blur(15px);
		backdrop-filter: blur(15px);
	}

	/* Hover effects */
	.glass-subtle:hover {
		background: rgba(255, 255, 255, 0.08);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}

	.glass-medium:hover {
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
	}

	/* Focus styles */
	input:focus-visible + div {
		outline: 2px solid rgba(59, 130, 246, 0.5);
		outline-offset: 2px;
	}

	/* Checkbox container animation */
	div:has(input) {
		will-change: transform;
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>
