<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { brandColors } from '$lib/tokens';
	import { glassFade, liquidBlur, magneticHover } from '$lib/motion';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'value' | 'size'> {
		value?: Date | string | null;
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		error?: boolean;
		disabled?: boolean;
		placeholder?: string;
		format?: 'MM/dd/yyyy' | 'dd/MM/yyyy' | 'yyyy-MM-dd';
		minDate?: Date;
		maxDate?: Date;
		closeOnSelect?: boolean;
		showToday?: boolean;
		class?: string;
	}

	const {
		value = null,
		variant = 'default',
		size = 'md',
		error = false,
		disabled = false,
		placeholder = 'Select date...',
		format = 'MM/dd/yyyy',
		minDate,
		maxDate,
		closeOnSelect = true,
		showToday = true,
		class: className = '',
		...restProps
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		change: Date | null;
		open: void;
		close: void;
	}>();

	let inputRef: HTMLInputElement;
	let calendarRef: HTMLDivElement = $state()!;
	let isOpen = $state(false);
	let inputValue = $state('');
	const currentDate = $state(new Date());
	let selectedDate = $state<Date | null>(null);
	let focusedDate = $state<Date | null>(null);

	// Calendar navigation
	let viewYear = $state(new Date().getFullYear());
	let viewMonth = $state(new Date().getMonth());

	const variants = {
		default: {
			input: 'bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white',
			calendar: 'bg-gray-900/95 border-gray-700',
			header: 'text-gray-200',
			dayButton: 'text-gray-300 hover:bg-gray-800 hover:text-white',
			selectedDay: 'bg-blue-600 text-white hover:bg-blue-700',
			todayDay: 'bg-gray-700 text-blue-400'
		},
		glass: {
			input: 'bg-white/5 border-white/10 focus:border-white/20 text-white backdrop-blur-md',
			calendar: 'bg-white/10 border-white/20 backdrop-blur-lg',
			header: 'text-white',
			dayButton: 'text-white/70 hover:bg-white/10 hover:text-white',
			selectedDay: 'bg-white/20 text-white hover:bg-white/25',
			todayDay: 'bg-white/10 text-white border border-white/30'
		},
		terminal: {
			input: `bg-black/80 border-${brandColors.terminal.green} focus:border-${brandColors.terminal.matrix} text-${brandColors.terminal.green}`,
			calendar: `bg-black/95 border-${brandColors.terminal.green}`,
			header: `text-${brandColors.terminal.green}`,
			dayButton: `text-${brandColors.terminal.green}/70 hover:bg-${brandColors.terminal.green}/10 hover:text-${brandColors.terminal.green}`,
			selectedDay: `bg-${brandColors.terminal.green} text-black hover:bg-${brandColors.terminal.matrix}`,
			todayDay: `bg-${brandColors.terminal.green}/20 text-${brandColors.terminal.matrix}`
		}
	};

	const sizes = {
		sm: 'h-8 px-3 text-sm',
		md: 'h-10 px-4 text-sm',
		lg: 'h-12 px-4 text-base'
	};

	const currentVariant = $derived(variants()[variant]);
	const currentSize = $derived(sizes()[size]);

	// Date formatting functions
	function formatDate(date: Date): string {
		if (!date) return '';

		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();

		switch (format) {
			case 'dd/MM/yyyy':
				return `${day}/${month}/${year}`;
			case 'yyyy-MM-dd':
				return `${year}-${month}-${day}`;
			default:
				return `${month}/${day}/${year}`;
		}
	}

	function parseDate(str: string): Date | null {
		if (!str) return null;

		const parts = str.split(/[/-]/);
		if (parts().length !== 3) return null;

		let day: number, month: number, year: number;

		switch (format) {
			case 'dd/MM/yyyy':
				[day, month, year] = parts().map(Number);
				break;
			case 'yyyy-MM-dd':
				[year, month, day] = parts().map(Number);
				break;
			default:
				[month, day, year] = parts().map(Number);
		}

		const date = new Date(year, month - 1, day);
		return isValidDate(date) ? date : null;
	}

	function isValidDate(date: Date): boolean {
		if (!(date instanceof Date) || isNaN(date.getTime())) return false;
		if (minDate && date < minDate) return false;
		if (maxDate && date > maxDate) return false;
		return true;
	}

	// Calendar generation
	function getCalendarDays(): (Date | null)[] {
		const firstDay = new Date(viewYear, viewMonth, 1);
		const lastDay = new Date(viewYear, viewMonth + 1, 0);
		const startDate = new Date(firstDay);
		startDate.setDate(startDate.getDate() - firstDay.getDay());

		const days: (Date | null)[] = [];
		const current = new Date(startDate);

		for (let i = 0; i < 42; i++) {
			if (current.getMonth() === viewMonth) {
				days.push(new Date(current));
			} else {
				days.push(null);
			}
			current.setDate(current.getDate() + 1);
		}

		return days;
	}

	function isToday(date: Date): boolean {
		const today = new Date();
		return date.toDateString() === today.toDateString();
	}

	function isSameDate(date1: Date | null, date2: Date | null): boolean {
		if (!date1 || !date2) return false;
		return date1.toDateString() === date2.toDateString();
	}

	// Event handlers
	function handleInputClick() {
		if (disabled) return;
		isOpen = !isOpen;
		if (isOpen) {
			dispatch('open');
		} else {
			dispatch('close');
		}
	}

	function handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		inputValue = target.value;

		const parsed = parseDate(inputValue);
		if (parsed) {
			selectedDate = parsed;
			viewYear = parsed.getFullYear();
			viewMonth = parsed.getMonth();
			dispatch('change', parsed);
		}
	}

	function handleDateSelect(date: Date) {
		if (!isValidDate(date)) return;

		selectedDate = date;
		inputValue = formatDate(date);
		dispatch('change', date);

		if (closeOnSelect) {
			isOpen = false;
			dispatch('close');
		}
	}

	function handleTodayClick() {
		const today = new Date();
		handleDateSelect(today);
	}

	function navigateMonth(direction: number) {
		const newMonth = viewMonth + direction;
		if (newMonth < 0) {
			viewMonth = 11;
			viewYear -= 1;
		} else if (newMonth > 11) {
			viewMonth = 0;
			viewYear += 1;
		} else {
			viewMonth = newMonth;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;

		switch (event.key) {
			case 'Escape':
				isOpen = false;
				dispatch('close');
				break;
			case 'ArrowLeft':
				event.preventDefault();
				if (focusedDate) {
					const newDate = new Date(focusedDate);
					newDate.setDate(newDate.getDate() - 1);
					focusedDate = newDate;
				}
				break;
			case 'ArrowRight':
				event.preventDefault();
				if (focusedDate) {
					const newDate = new Date(focusedDate);
					newDate.setDate(newDate.getDate() + 1);
					focusedDate = newDate;
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (focusedDate) {
					const newDate = new Date(focusedDate);
					newDate.setDate(newDate.getDate() - 7);
					focusedDate = newDate;
				}
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (focusedDate) {
					const newDate = new Date(focusedDate);
					newDate.setDate(newDate.getDate() + 7);
					focusedDate = newDate;
				}
				break;
			case 'Enter':
				event.preventDefault();
				if (focusedDate) {
					handleDateSelect(focusedDate);
				}
				break;
		}
	}

	// Initialize from value prop
	$effect(() => {
		if (value) {
			const date = value instanceof Date ? value : parseDate(value.toString());
			if (date) {
				selectedDate = date;
				inputValue = formatDate(date);
				viewYear = date.getFullYear();
				viewMonth = date.getMonth();
			}
		}
	});

	// Click outside to close
	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				isOpen &&
				calendarRef &&
				!calendarRef.contains(event.target as Node) &&
				inputRef &&
				!inputRef.contains(event.target as Node)
			) {
				isOpen = false;
				dispatch('close');
			}
		}

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

	const combinedClasses = $derived(
		cn(
			'relative w-full rounded-lg border transition-all duration-200',
			'focus:outline-none focus:ring-2 focus:ring-opacity-50',
			'font-mono',
			currentVariant.input,
			currentSize,
			error && 'border-red-500 focus:border-red-500',
			disabled && 'opacity-50 cursor-not-allowed',
			className
		)
	);
</script>

<div class="relative">
	<!-- Input Field -->
	<input
		bind:this={inputRef}
		bind:value={inputValue}
    onclick={handleInputClick}
    oninput={handleInputChange}
    onkeydown={handleKeydown}
		{placeholder}
		{disabled}
		readonly={!disabled}
		class={combinedClasses}
		role="combobox"
		aria-haspopup="grid"
		aria-expanded={isOpen}
		aria-controls="date-picker-calendar"
		aria-label={placeholder}
		aria-describedby={error ? 'date-picker-error' : undefined}
		use:liquidBlur={{ blur: 'sm', opacity: 'light' }}
		use:magneticHover={{ enabled: !disabled, strength: 0.1 }}
		{...restProps}
	/>

	<!-- Calendar Icon -->
	<div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
		<svg class="w-5 h-5 {currentVariant.header}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
	</div>

	<!-- Calendar Dropdown -->
	{#if isOpen}
		<div
			bind:this={calendarRef}
			id="date-picker-calendar"
			role="application"
			aria-label="Calendar date picker"
			class="absolute top-full left-0 z-50 mt-2 p-4 rounded-lg border shadow-2xl min-w-80 {currentVariant.calendar}"
			in:glassFade={{ direction: 'up', duration: 200 }}
			use:liquidBlur={{ blur: 'lg', opacity: 'medium' }}
		>
			<!-- Calendar Header -->
			<div class="flex items-center justify-between mb-4">
				<button
					onclick={() => navigateMonth(-1)} onkeydown={(e) => e.key === "Enter" && navigateMonth(-1)} 
					class="p-2 rounded-md {currentVariant.dayButton} transition-colors"
					aria-label="Previous month"
					use:magneticHover={{ strength: 0.2 }}
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<h3 class="text-lg font-semibold {currentVariant.header} font-mono" aria-live="polite">
					{monthNames()[viewMonth]}
					{viewYear}
				</h3>

				<button
					onclick={() => navigateMonth(1)} onkeydown={(e) => e.key === "Enter" && navigateMonth(1)} 
					class="p-2 rounded-md {currentVariant.dayButton} transition-colors"
					aria-label="Next month"
					use:magneticHover={{ strength: 0.2 }}
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<!-- Day Headers -->
			<div class="grid grid-cols-7 gap-1 mb-2" role="row">
				{#each dayNames() as day (day.id || day)}
					<div class="p-2 text-center text-xs font-semibold {currentVariant.header} font-mono" role="columnheader">
						{day}
					</div>
				{/each}
			</div>

			<!-- Calendar Days -->
			<div class="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar dates">
				{#each getCalendarDays() as day (day.id || day)}
					{#if day}
						{@const isSelected = isSameDate(day, selectedDate)}
						{@const isTodayDay = isToday(day)}
						{@const isValid = isValidDate(day)}

						<button
							onclick={() => handleDateSelect(day)} onkeydown={(e) => e.key === "Enter" && handleDateSelect(day)} 
							disabled={!isValid}
							class="p-2 text-center text-sm rounded-md font-mono transition-all duration-200
							       {isSelected ? currentVariant.selectedDay : isTodayDay ? currentVariant.todayDay : currentVariant.dayButton}
							       {!isValid ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}"
							role="gridcell"
							aria-label={formatDate(day)}
							aria-selected={isSelected}
							aria-disabled={!isValid}
							aria-current={isTodayDay ? 'date' : undefined}
							tabindex={isSelected || isSameDate(day, focusedDate) ? 0 : -1}
							use:magneticHover={{ enabled: isValid, strength: 0.15 }}
						>
							{day.getDate()}
						</button>
					{:else}
						<div class="p-2"></div>
					{/if}
				{/each}
			</div>

			<!-- Today Button -->
			{#if showToday}
				<div class="mt-4 pt-4 border-t {currentVariant.calendar}">
					<button
						onclick={handleTodayClick} onkeydown={(e) => e.key === "Enter" && handleTodayClick()}
						class="w-full py-2 px-4 rounded-md {currentVariant.dayButton} transition-colors font-mono text-sm"
						aria-label="Select today's date"
						use:magneticHover={{ strength: 0.1 }}
					>
						Today: {formatDate(new Date())}
					</button>
				</div>
			{/if}
		</div>
	{/if}

	<!-- Live region for screen reader announcements -->
	<div aria-live="polite" aria-atomic="true" class="sr-only">
		{#if selectedDate}
			Selected date: {formatDate(selectedDate)}
		{/if}
	</div>
</div>

<style>
	/* Additional terminal-specific glow effects */
	:global(.terminal .date-picker-input:focus) {
		box-shadow:
			0 0 0 1px var(--terminal-green),
			0 0 10px var(--terminal-green-glow);
	}

	:global(.terminal .selected-day) {
		text-shadow: 0 0 5px currentColor;
	}
</style>
