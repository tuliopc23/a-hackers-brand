<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, springPop } from '$lib/motion';
	import { brandColors, glassEffects } from '$lib/tokens';
	import { createEventDispatcher, onMount } from 'svelte';
	import { Check, ChevronDown, X, Search } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface SelectOption {
		value: string | number;
		label: string;
		disabled?: boolean;
		description?: string;
		icon?: string;
		group?: string;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
		options: SelectOption[];
		value?: string | number | (string | number)[];
		placeholder?: string;
		multiple?: boolean;
		searchable?: boolean;
		clearable?: boolean;
		disabled?: boolean;
		loading?: boolean;
		error?: string;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'glass' | 'terminal' | 'liquid';
		maxSelections?: number;
		groupBy?: string;
		createOption?: boolean;
		virtualScroll?: boolean;
		closeOnSelect?: boolean;
		class?: string;
	}

	let {
		options,
		value = $bindable(),
		placeholder = 'Select an option...',
		multiple = false,
		searchable = false,
		clearable = false,
		disabled = false,
		loading = false,
		error,
		size = 'md',
		variant = 'glass',
		maxSelections,
		groupBy,
		createOption = false,
		virtualScroll = false,
		closeOnSelect = true,
		class: className = '',
		...restProps
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let isOpen = $state(false);
	let searchQuery = $state('');
	let selectElement = $state<HTMLDivElement>();
	let dropdownElement = $state<HTMLDivElement>();
	let searchInputElement = $state<HTMLInputElement>();
	let highlightedIndex = $state(-1);

	const uniqueId = `select-${Math.random().toString(36).substr(2, 9)}`;

	// Computed properties
	const selectedValues = $derived(() => { return Array.isArray(value) ? value : [value]; });

	const filteredOptions = $derived(() => { return options.filter(
			(option) => option.label.toLowerCase().includes(searchQuery) || option.description?.toLowerCase().includes(searchQuery)
		); });

	const groupedOptions = $derived(() => {
		if (!groupBy) return { '': filteredOptions };

		const groups: Record<string, SelectOption[]> = {};
		filteredOptions.forEach((option) => {
			const group = option.group || '';
			if (!groups[group]) groups[group] = [];
			groups[group].push(option);
		});

		return groups;
	});

	const displayValue = $derived(() => {
		if (!selectedValues.length) return placeholder;

		if (multiple) {
			if (selectedValues.length === 1) {
				const option = options.find((opt) => opt.value === selectedValues[0]);
				return option?.label || '';
			}
			return `${selectedValues.length} selected`;
		}

		const option = options.find((opt) => opt.value === selectedValues[0]);
		return option?.label || '';
	});

	const sizes = {
		sm: {
			trigger: 'h-8 px-3 text-sm',
			dropdown: 'text-sm',
			option: 'px-3 py-1.5'
		},
		md: {
			trigger: 'h-10 px-4 text-base',
			dropdown: 'text-base',
			option: 'px-4 py-2'
		},
		lg: {
			trigger: 'h-12 px-5 text-lg',
			dropdown: 'text-lg',
			option: 'px-5 py-2.5'
		}
	};

	const variants = {
		glass: {
			trigger: 'bg-white/10 border-white/20 text-white backdrop-blur-md',
			dropdown: 'bg-black/20 border-white/10 backdrop-blur-xl',
			option: 'text-white/90 hover:bg-white/10',
			optionSelected: 'bg-blue-500/30 text-white',
			search: 'bg-white/5 border-white/10 text-white placeholder-white/50'
		},
		terminal: {
			trigger: 'bg-terminal-bg border-terminal-green/40 text-terminal-green',
			dropdown: 'bg-black/90 border-terminal-green/30',
			option: 'text-terminal-green hover:bg-terminal-green/20',
			optionSelected: 'bg-terminal-green/40 text-terminal-green',
			search: 'bg-black/50 border-terminal-green/30 text-terminal-green placeholder-terminal-green/50'
		},
		liquid: {
			trigger: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white',
			dropdown: 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10',
			option: 'text-white hover:bg-white/10',
			optionSelected: 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white',
			search: 'bg-white/5 border-white/10 text-white placeholder-white/50'
		}
	};

	const currentSize = sizes[size];
	const currentVariant = variants[variant];

	function toggleDropdown() {
		if (disabled) return;
		isOpen = !isOpen;

		if (isOpen && searchable) {
			setTimeout(() => searchInputElement?.focus(), 0);
		}
	}

	function selectOption(option: SelectOption) {
		if (option.disabled) return;

		if (multiple) {
			const currentValues = selectedValues;
			const isSelected = currentValues().includes(option.value);

			if (isSelected) {
				value = currentValues().filter((v) => v !== option.value);
			} else {
				if (maxSelections && currentValues().length >= maxSelections) return;
				value = [...currentValues, option.value];
			}
		} else {
			value = option.value;
			if (closeOnSelect) isOpen = false;
		}

		dispatch('change', { value, option });
	}

	function clearSelection() {
		value = multiple ? [] : undefined;
		dispatch('clear');
	}

	function removeOption(optionValue: string | number) {
		if (!multiple) return;
		const currentValues = selectedValues;
		value = currentValues().filter((v) => v !== optionValue);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;

		switch (event.key) {
			case 'Enter':
				event.preventDefault();
				if (isOpen && highlightedIndex >= 0 && filteredOptions()[highlightedIndex]) {
					selectOption(filteredOptions()[highlightedIndex]);
				} else if (!isOpen) {
					toggleDropdown();
				}
				break;
			case 'Escape':
				if (isOpen) {
					isOpen = false;
					event.stopPropagation();
				}
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (!isOpen) {
					toggleDropdown();
				} else {
					highlightedIndex = Math.min(highlightedIndex + 1, filteredOptions().length - 1);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (isOpen) {
					highlightedIndex = Math.max(highlightedIndex - 1, -1);
				}
				break;
			case 'Tab':
				if (isOpen) {
					isOpen = false;
				}
				break;
		}
	}

	function handleClickOutside(event: Event) {
		if (selectElement && !selectElement.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	// Reset highlighted index when options change
	$effect(() => {
		if (filteredOptions) {
			highlightedIndex = -1;
		}
	});
</script>

<div bind:this={selectElement} class={cn('relative w-full', className)} {...restProps}>
	<!-- Trigger -->
	<div
		class={cn(
			'relative flex items-center justify-between w-full rounded-lg border transition-all duration-200 cursor-pointer',
			currentSize.trigger,
			currentVariant.trigger,
			disabled && 'opacity-50 cursor-not-allowed',
			error && 'border-red-500/50',
			isOpen && 'ring-2 ring-blue-400/50'
		)}
		onclick={toggleDropdown} onkeydown={(e) => e.key === "Enter" && toggleDropdown()}
		tabindex={disabled ? -1 : 0}
    role="combobox" aria-controls="dropdown" aria-expanded={isOpen}
		aria-haspopup="listbox"
		aria-labelledby={uniqueId}
	>
		<div class="flex-1 truncate">
			{#if multiple && selectedValues().length > 1}
				<div class="flex flex-wrap gap-1">
					{#each selectedValues().slice(0, 2) as selectedValue}
						{@const option = options().find((opt) => opt.value === selectedValue)}
						{#if option}
							<span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-blue-500/30 text-white rounded-md">
								{option.label}
								<button
									class="hover:text-red-300"
									onclick={(e) => {
										e.stopPropagation();
										removeOption(option.value);
									}}
									onkeydown={(e) => e.key === "Enter" && handleAction()}
								>
									<X size={12} />
								</button>
							</span>
						{/if}
					{/each}
					{#if selectedValues().length > 2}
						<span class="text-xs opacity-70">+{selectedValues().length - 2} more</span>
					{/if}
				</div>
			{:else}
				<span class={cn(!selectedValues().length && 'opacity-60')}>
					{displayValue}
				</span>
			{/if}
		</div>

		<div class="flex items-center gap-2">
			{#if loading}
				<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
			{:else if clearable && selectedValues().length > 0}
				<button
					class="p-1 hover:bg-white/10 rounded transition-colors"
					onclick={(e) => {
						e.stopPropagation();
						clearSelection();
					}}
					onkeydown={(e) => e.key === "Enter" && clearSelection()}
				>
					<X size={16} />
				</button>
			{/if}

			<ChevronDown size={16} class={cn('transition-transform duration-200', isOpen && 'rotate-180')} />
		</div>
	</div>

	<!-- Dropdown -->
	{#if isOpen}
		<div
			bind:this={dropdownElement}
			class={cn(
				'absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-hidden',
				currentVariant.dropdown,
				currentSize.dropdown
			)}
			use:liquidBlur={{ intensity: 'medium' }}
		>
			{#if searchable}
				<div class="p-2 border-b border-white/10">
					<div class="relative">
						<Search size={16} class="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50" />
						<input
							bind:this={searchInputElement}
							bind:value={searchQuery}
							class={cn(
								'w-full pl-9 pr-3 py-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50',
								currentVariant.search
							)}
							placeholder="Search options..."
							autocomplete="off"
						/>
					</div>
				</div>
			{/if}

			<div class="overflow-y-auto max-h-48">
				{#if filteredOptions().length === 0}
					<div class={cn('text-center py-4 opacity-60', currentSize.option)}>
						{searchQuery ? 'No options found' : 'No options available'}
					</div>
				{:else}
					{#each Object.entries(groupedOptions) as [groupName, groupOptions] (groupName)}
						{#if groupName && Object.keys(groupedOptions).length > 1}
							<div class="px-4 py-2 text-xs font-semibold opacity-60 border-b border-white/5">
								{groupName}
							</div>
						{/if}

						{#each groupOptions() as option, index (index)}
							{@const isSelected = selectedValues().includes(option.value)}
							{@const isHighlighted = filteredOptions().indexOf(option) === highlightedIndex}

							<div
								class={cn(
									'flex items-center justify-between cursor-pointer transition-colors',
									currentSize.option,
									option.disabled ? 'opacity-50 cursor-not-allowed' : currentVariant.option,
									isSelected && currentVariant.optionSelected,
									isHighlighted && 'bg-white/5'
								)}
								onclick={() => selectOption(option)} onkeydown={(e) => e.key === "Enter" && selectOption(option)} 
								role="option" tabindex="0"
								aria-selected={isSelected}
							>
								<div class="flex-1">
									<div class="font-medium">{option.label}</div>
									{#if option.description}
										<div class="text-xs opacity-60 mt-0.5">{option.description}</div>
									{/if}
								</div>

								{#if multiple}
									<div
										class={cn(
											'w-4 h-4 border rounded flex items-center justify-center',
											isSelected ? 'bg-blue-500 border-blue-500' : 'border-white/20'
										)}
									>
										{#if isSelected}
											<Check size={12} class="text-white" />
										{/if}
									</div>
								{:else if isSelected}
									<Check size={16} class="text-blue-400" />
								{/if}
							</div>
						{/each}
					{/each}
				{/if}
			</div>
		</div>
	{/if}

	<!-- Error message -->
	{#if error}
		<p class="text-red-400 text-sm mt-1" role="alert">
			{error}
		</p>
	{/if}
</div>

<style>
	/* Custom scrollbar for dropdown */
	.overflow-y-auto {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
	}

	.overflow-y-auto::-webkit-scrollbar {
		width: 6px;
	}

	.overflow-y-auto::-webkit-scrollbar-track {
		background: transparent;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}
</style>
