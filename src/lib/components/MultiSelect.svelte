<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { brandColors } from '$lib/tokens';
	import { glassFade, liquidBlur, magneticHover, springPop } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Option {
		value: string;
		label: string;
		disabled?: boolean;
		description?: string;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'value'> {
		options: Option[];
		value?: string[];
		placeholder?: string;
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		error?: boolean;
		searchable?: boolean;
		maxSelections?: number;
		chipVariant?: 'default' | 'glass' | 'terminal';
		closeOnSelect?: boolean;
		class?: string;
	}

	const {
options = [],
		value = $bindable([]),
		placeholder = 'Select items...',
		variant = 'default',
		size = 'md',
		disabled = false,
		error = false,
		searchable = true,
		maxSelections,
		chipVariant = variant,
		closeOnSelect = false,
		class: className = '',
		...restProps
	
}: Props = $props();

	const dispatch = createEventDispatcher<{
		change: string[];
		add: string;
		remove: string;
		open: void;
		close: void;
		search: string;
	}>();

	let containerRef: HTMLDivElement;
	let searchInputRef: HTMLInputElement = $state()!;
	let dropdownRef: HTMLDivElement = $state()!;
	let isOpen = $state(false);
	let searchTerm = $state('');
	let selectedValues = $state<string[]>([...value]);
	let focusedIndex = $state(-1);

	const variants = {
		default: {
			container: 'bg-gray-900/50 border-gray-700 focus-within:border-blue-500',
			dropdown: 'bg-gray-900/95 border-gray-700',
			option: 'text-gray-300 hover:bg-gray-800 hover:text-white',
			selectedOption: 'bg-blue-600 text-white',
			searchInput: 'bg-transparent text-white placeholder-gray-400',
			chip: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
			chipClose: 'text-gray-400 hover:text-white'
		},
		glass: {
			container: 'bg-white/5 border-white/10 focus-within:border-white/20 backdrop-blur-md',
			dropdown: 'bg-white/10 border-white/20 backdrop-blur-lg',
			option: 'text-white/70 hover:bg-white/10 hover:text-white',
			selectedOption: 'bg-white/20 text-white',
			searchInput: 'bg-transparent text-white placeholder-white/50',
			chip: 'bg-white/10 text-white hover:bg-white/15 backdrop-blur-sm',
			chipClose: 'text-white/70 hover:text-white'
		},
		terminal: {
			container: `bg-black/80 border-${brandColors.terminal.green} focus-within:border-${brandColors.terminal.matrix}`,
			dropdown: `bg-black/95 border-${brandColors.terminal.green}`,
			option: `text-${brandColors.terminal.green}/70 hover:bg-${brandColors.terminal.green}/10 hover:text-${brandColors.terminal.green}`,
			selectedOption: `bg-${brandColors.terminal.green} text-black`,
			searchInput: `bg-transparent text-${brandColors.terminal.green} placeholder-${brandColors.terminal.green}/50`,
			chip: `bg-${brandColors.terminal.green}/20 text-${brandColors.terminal.green} hover:bg-${brandColors.terminal.green}/30 border border-${brandColors.terminal.green}/30`,
			chipClose: `text-${brandColors.terminal.green}/70 hover:text-${brandColors.terminal.green}`
		}
	};

	const sizes = {
		sm: {
			container: 'min-h-8 px-2 py-1',
			chip: 'px-2 py-0.5 text-xs',
			option: 'px-3 py-1.5 text-sm',
			input: 'text-sm'
		},
		md: {
			container: 'min-h-10 px-3 py-2',
			chip: 'px-2.5 py-1 text-sm',
			option: 'px-4 py-2 text-sm',
			input: 'text-sm'
		},
		lg: {
			container: 'min-h-12 px-4 py-3',
			chip: 'px-3 py-1.5 text-base',
			option: 'px-4 py-2.5 text-base',
			input: 'text-base'
		}
	};

	const currentVariant = $derived(variants[variant]);
	const currentChipVariant = $derived(variants[chipVariant]);
	const currentSize = $derived(sizes[size]);

	// Filtered options based on search
	const filteredOptions = $derived(() => { return options.filter(
			(option) =>
				option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
				option.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
				option.description?.toLowerCase().includes(searchTerm.toLowerCase())
		); });

	// Available options (not selected)
	const availableOptions = $derived(() => { return filteredOptions.filter((option) => !selectedValues.includes(option.value)); });

	// Selected option objects
	const selectedOptions = $derived(() => { return selectedValues.map((value) => options.find((opt) => opt.value === value)).filter(Boolean) as Option[]; });

	// Check if max selections reached
	const isMaxReached = $derived(() => { return maxSelections ? selectedValues.length >= maxSelections : false; });

	function handleContainerClick() {
		if (disabled) return;

		if (!isOpen) {
			isOpen = true;
			dispatch('open');
			setTimeout(() => {
				if (searchable && searchInputRef) {
					searchInputRef.focus();
				}
			}, 0);
		}
	}

	function handleOptionSelect(option: Option) {
		if (option.disabled || (isMaxReached && !selectedValues.includes(option.value))) return;

		if (selectedValues.includes(option.value)) {
			// Remove if already selected
			removeOption(option.value);
		} else {
			// Add if not selected
			addOption(option.value);
		}

		if (closeOnSelect && !selectedValues.includes(option.value)) {
			isOpen = false;
			dispatch('close');
		}
	}

	function addOption(value: string) {
		if (isMaxReached) return;

		selectedValues = [...selectedValues, value];
		dispatch('add', value);
		dispatch('change', selectedValues);

		// Clear search after selection
		searchTerm = '';
		dispatch('search', searchTerm);
	}

	function removeOption(value: string) {
		selectedValues = selectedValues.filter((v) => v !== value);
		dispatch('remove', value);
		dispatch('change', selectedValues);
	}

	function handleChipRemove(value: string, event: Event) {
		event.stopPropagation();
		removeOption(value);
	}

	function handleSearchInput(event: Event) {
		const target = event.target as HTMLInputElement;
		searchTerm = target.value;
		dispatch('search', searchTerm);
		focusedIndex = -1; // Reset focus when searching
	}

	function handleKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Escape':
				isOpen = false;
				dispatch('close');
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (!isOpen) {
					isOpen = true;
					dispatch('open');
				} else {
					focusedIndex = Math.min(focusedIndex + 1, availableOptions.length - 1);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				focusedIndex = Math.max(focusedIndex - 1, -1);
				break;
			case 'Enter':
				event.preventDefault();
			if (focusedIndex >= 0 && availableOptions[focusedIndex]) {
				handleOptionSelect(availableOptions[focusedIndex]);
				}
				break;
			case 'Backspace':
			if (searchTerm === '' && selectedValues.length > 0) {
				// Remove last selected item if search is empty
				removeOption(selectedValues[selectedValues.length - 1]);
				}
				break;
		}
	}

	// Update internal state when value prop changes
	$effect(() => {
		selectedValues = [...value];
	});

	// Click outside to close
	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (isOpen && containerRef && !containerRef.contains(event.target as Node)) {
				isOpen = false;
				dispatch('close');
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const combinedClasses = $derived(
		cn(
			'relative w-full min-h-10 rounded-lg border transition-all duration-200',
			'cursor-text font-mono',
			currentVariant.container,
			currentSize.container,
			error && 'border-red-500 focus-within:border-red-500',
			disabled && 'opacity-50 cursor-not-allowed',
			isOpen && 'ring-2 ring-opacity-50',
			className
		)
	);
</script>

<div
	bind:this={containerRef}
	class={combinedClasses}
	onclick={handleContainerClick} onkeydown={(e) => e.key === "Enter" && handleContainerClick()}
	role="combobox" aria-controls="multiselect-listbox" aria-expanded={isOpen}
	aria-haspopup="listbox"
	aria-label={placeholder}
	aria-describedby="multiselect-status"
	tabindex={disabled ? -1 : 0}
	use:liquidBlur={{ blur: 'sm', opacity: 'light' }}
	use:magneticHover={{ enabled: !disabled, strength: 0.1 }}
	{...restProps}
>
	<!-- Selected Items (Chips) -->
	<div class="flex flex-wrap gap-1.5 items-center">
		{#each selectedOptions as option (option.value)}
			<div
				class="inline-flex items-center gap-1.5 rounded-md {currentChipVariant.chip} {currentSize.chip} 
				       font-mono transition-all duration-200"
				in:springPop={{ duration: 200, bounce: true }}
				use:magneticHover={{ strength: 0.15 }}
			>
				<span class="truncate max-w-32">{option.label}</span>
				<button
					onclick={(e) => handleChipRemove(option.value, e)} onkeydown={(e) => e.key === "Enter" && handleChipRemove(option.value, e)}
					class="flex-shrink-0 rounded-full {currentChipVariant.chipClose} hover:bg-black/20
					       transition-colors p-0.5"
					aria-label="Remove {option.label}"
				>
					<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		{/each}

		<!-- Search Input -->
		{#if searchable}
			<input
				bind:this={searchInputRef}
				bind:value={searchTerm}
				oninput={handleSearchInput}
				onkeydown={handleKeydown}
				placeholder={selectedValues.length === 0 ? placeholder : ''}
				class="flex-1 min-w-32 outline-none {currentVariant.searchInput} {currentSize.input}"
				disabled={disabled || isMaxReached}
				role="searchbox"
				aria-label="Search options"
				aria-controls="multiselect-listbox"
			/>
		{:else if selectedValues.length === 0}
			<span class="text-gray-400 {currentSize.input}">{placeholder}</span>
		{/if}
	</div>

	<!-- Dropdown Arrow -->
	<div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
		<svg
			class="w-4 h-4 transition-transform duration-200 {isOpen ? 'rotate-180' : ''} 
			       {currentVariant.option}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>

	<!-- Dropdown -->
	{#if isOpen}
		<div
			bind:this={dropdownRef}
			id="multiselect-listbox"
			class="absolute top-full left-0 right-0 z-50 mt-2 max-h-60 overflow-auto rounded-lg border
			       shadow-2xl {currentVariant.dropdown}"
			in:glassFade={{ direction: 'up', duration: 200 }}
			use:liquidBlur={{ blur: 'lg', opacity: 'medium' }}
			role="listbox"
			aria-multiselectable="true"
			aria-label="Available options"
		>
			{#if availableOptions.length === 0}
				<div class="px-4 py-3 text-center {currentVariant.option} font-mono">
					{searchTerm ? 'No results found' : 'No more options available'}
				</div>
			{:else}
		{#each availableOptions as option, index (option.value)}
			{@const isFocused = index === focusedIndex}
			{@const isSelected = selectedValues.includes(option.value)}

					<div
						onclick={() => handleOptionSelect(option)} onkeydown={(e) => e.key === "Enter" && handleOptionSelect(option)}
						class="cursor-pointer transition-all duration-150 {currentSize.option}
						       {isFocused ? currentVariant.selectedOption : currentVariant.option}
						       {option.disabled ? 'opacity-50 cursor-not-allowed' : ''}
						       font-mono border-b border-white/5 last:border-b-0"
						role="option"
						aria-selected={isSelected}
						tabindex="0"
						use:magneticHover={{ enabled: !option.disabled, strength: 0.1 }}
					>
						<div class="flex items-center justify-between">
							<div class="flex-1">
								<div class="font-medium">{option.label}</div>
								{#if option.description}
									<div class="text-xs opacity-70 mt-0.5">{option.description}</div>
								{/if}
							</div>

							{#if isSelected}
								<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							{/if}
						</div>
					</div>
				{/each}
			{/if}

			<!-- Max Selection Notice -->
			{#if isMaxReached}
				<div class="px-4 py-2 text-center text-xs {currentVariant.option} bg-yellow-500/10 border-t">
					Maximum {maxSelections} selections reached
				</div>
			{/if}
		</div>
	{/if}

	<!-- Live region for screen reader announcements -->
	<div id="multiselect-status" aria-live="polite" aria-atomic="true" class="sr-only">
		{selectedValues.length} items selected
		{#if maxSelections}
			out of maximum {maxSelections}
		{/if}
	</div>
</div>

<style>
	/* Scrollbar styling for dropdown */
	.overflow-auto::-webkit-scrollbar {
		width: 8px;
	}

	.overflow-auto::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 4px;
	}

	.overflow-auto::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 4px;
	}

	.overflow-auto::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Terminal-specific glow effects */
	:global(.terminal .multi-select:focus-within) {
		box-shadow:
			0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);
	}
</style>
