<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, glassFade, magneticHover } from '../motion';
	import { sizeOf } from '../utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Option {
		value: string;
		label: string;
		disabled?: boolean;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
		options: Option[];
		value?: string;
		placeholder?: string;
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
		class?: string;
		onValueChange?: (value: string) => void;
	}

	let {
		options = [],
		value = '',
		placeholder = 'Select an option...',
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
		class: className = '',
		onValueChange,
		...restProps
	}: Props = $props();

	let isOpen = $state(false);
	let selectElement = $state<HTMLDivElement>();
	let listboxElement = $state<HTMLUListElement>();
	let activeIndex = $state(-1);

	const sizes = {
		sm: 'h-8 px-3 text-sm',
		md: 'h-10 px-4 text-sm',
		lg: 'h-12 px-5 text-base'
	};

	const variants = {
		default: 'bg-white/5 border border-white/10 text-white',
		glass: 'glass-subtle border border-white/20 text-white',
		terminal: 'terminal text-green-300',
		liquid: 'bg-gradient-to-r from-white/5 to-white/15 border border-white/20 text-white backdrop-blur-md'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const selectedOption = $derived(options.find((opt) => opt.value === value));

	const selectClasses = cn(
		'relative flex items-center justify-between rounded-brand-md cursor-pointer',
		'focus:outline-none focus:ring-2 focus:ring-blue-400/50',
		'transition-all duration-200',
		sizes[size],
		variants[variant],
		variant === 'glass' && blurLevels[blur],
		liquid && 'backdrop-blur-md hover:backdrop-blur-lg',
		glow && 'focus:shadow-lg focus:shadow-brand-primary/20',
		jelly && !disabled && 'hover:scale-105 active:scale-95',
		disabled && 'opacity-50 cursor-not-allowed',
		className
	);

	const dropdownClasses = cn(
		'absolute top-full left-0 right-0 z-50 mt-1 rounded-brand-md shadow-lg',
		'max-h-60 overflow-auto',
		variants[variant],
		variant === 'glass' && `${blurLevels[blur]} border border-white/20`
	);

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;

		switch (event.key) {
			case 'Enter':
			case ' ':
				event.preventDefault();
				if (isOpen && activeIndex >= 0) {
					selectOption(options[activeIndex]);
				} else {
					toggleOpen();
				}
				break;
			case 'Escape':
				if (isOpen) {
					event.preventDefault();
					closeSelect();
				}
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (!isOpen) {
					openSelect();
				} else {
					navigateOptions(1);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (!isOpen) {
					openSelect();
				} else {
					navigateOptions(-1);
				}
				break;
			case 'Home':
				if (isOpen) {
					event.preventDefault();
					activeIndex = 0;
				}
				break;
			case 'End':
				if (isOpen) {
					event.preventDefault();
					activeIndex = options.length - 1;
				}
				break;
		}
	}

	function navigateOptions(direction: number) {
		const enabledOptions = options.filter((opt) => !opt.disabled);
		if (enabledOptions.length === 0) return;

		let newIndex = activeIndex + direction;

		if (newIndex < 0) {
			newIndex = enabledOptions.length - 1;
		} else if (newIndex >= enabledOptions.length) {
			newIndex = 0;
		}

		// Find the actual index in the original array
		activeIndex = options.findIndex((opt) => opt === enabledOptions[newIndex]);
	}

	function toggleOpen() {
		if (disabled) return;
		isOpen = !isOpen;
		if (isOpen) {
			activeIndex = value ? options.findIndex((opt) => opt.value === value) : -1;
		}
	}

	function openSelect() {
		if (disabled) return;
		isOpen = true;
		activeIndex = value ? options.findIndex((opt) => opt.value === value) : -1;
	}

	function closeSelect() {
		isOpen = false;
		activeIndex = -1;
	}

	function selectOption(option: Option) {
		if (option.disabled) return;

		value = option.value;
		onValueChange?.(option.value);
		closeSelect();
	}

	function handleClickOutside(event: MouseEvent) {
		if (selectElement && !selectElement.contains(event.target as Node)) {
			closeSelect();
		}
	}

	$effect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	});

	// Track bundle size
	$effect(() => {
		sizeOf('Select', 'medium');
	});
</script>

<div
	bind:this={selectElement}
	class={selectClasses}
	role="combobox"
	aria-expanded={isOpen}
	aria-haspopup="listbox"
	aria-labelledby="select-label"
	tabindex={disabled ? -1 : 0}
	use:magneticHover={magnetic && !disabled && !reduceMotion ? { strength: 0.1, distance: 40 } : undefined}
	use:magneticHover={jelly && !disabled && !reduceMotion ? { strength: 0.08 } : undefined}
	onkeydown={handleKeydown}
	onclick={toggleOpen}
	{...restProps}
>
	<span class="truncate">
		{selectedOption?.label || placeholder}
	</span>

	<svg
		class="w-4 h-4 ml-2 transition-transform duration-200"
		class:rotate-180={isOpen}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
	</svg>
</div>

{#if isOpen}
	<ul
		bind:this={listboxElement}
		class={dropdownClasses}
		role="listbox"
		aria-labelledby="select-label"
		in:glassFade={{ direction: 'down', distance: 10, duration: animate && !reduceMotion ? 150 : 0 }}
		out:glassFade={{ direction: 'up', distance: 10, duration: animate && !reduceMotion ? 100 : 0 }}
	>
		{#each options as option, index}
			<li
				class={cn(
					'px-4 py-2 cursor-pointer transition-colors duration-150 hover:bg-white/10 focus:bg-white/10',
					activeIndex === index && 'bg-white/20',
					option.disabled && 'opacity-50 cursor-not-allowed'
				)}
				role="option"
				aria-selected={value === option.value}
				tabindex="-1"
				onclick={() => selectOption(option)}
				onmouseenter={() => !option.disabled && (activeIndex = index)}
			>
				{option.label}
			</li>
		{/each}
	</ul>
{/if}

<style>
	div[role='combobox'] {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			animation: none;
		}
	}
</style>
