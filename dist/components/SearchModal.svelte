<!-- @migration-task Error while migrating Svelte code: This type of directive is not valid on components
https://svelte.dev/e/component_invalid_directive -->
<script lang="ts">
	import { cn } from '../utils.js';
	import { magneticHover, springPop, glassFade } from '../motion';
	import { fade, fly } from 'svelte/transition';
import { createEventDispatcher } from 'svelte';
	import { SearchIndex, debounce, type SearchDocument, type SearchSuggestion } from '../utils/search.js';
	import GlassCard from './liquidify/GlassCard.svelte';
	import GlassInput from './liquidify/GlassInput.svelte';
	import Badge from './Badge.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		isOpen: boolean;
		title?: string;
		placeholder?: string;
		class?: string;
		searchData?: SearchDocument[];
		maxResults?: number;
		showType?: boolean;
		showIcons?: boolean;
		onClose?: () => void;
		onSelect?: (result: SearchDocument) => void;
		children?: Snippet;
	}

	let {
		isOpen = $bindable(false),
		title = 'Search Components',
		placeholder = 'Type to search...',
		class: className = '',
		searchData = [],
		maxResults = 8,
		showType = true,
		showIcons = true,
		onClose,
		onSelect,
		children
	}: Props = $props();

	const dispatch = createEventDispatcher();

	// State management
	let searchQuery = $state('');
	let suggestions = $state<SearchSuggestion[]>([]);
	let selectedSuggestionIndex = $state(0);
	let results = $state<SearchDocument[]>([]);
	let selectedIndex = $state(0);
	let isLoading = $state(false);
	let isEmpty = $state(false);
	let searchIndex = $state<SearchIndex | null>(null);

	// DOM references
	let modalRef = $state<HTMLDivElement>();
	let backdropRef = $state<HTMLDivElement>();
	let inputRef = $state<HTMLInputElement>();
	let resultsRef = $state<HTMLDivElement>();

	// Initialize search index
	$effect(() => {
		searchIndex = new SearchIndex();
		if (searchData.length > 0) {
			searchData.forEach((doc) => searchIndex?.addDocument(doc));
		}
	});

	// Focus input when modal opens
	$effect(() => {
		if (isOpen && inputRef) {
			setTimeout(() => inputRef?.focus(), 100);
		}
	});

	// Debounced search function
	const performSearch = debounce((query: string) => {
		if (!searchIndex || !query.trim()) {
			results = [];
			isEmpty = false;
			isLoading = false;
			return;
		}

		isLoading = true;
		setTimeout(() => {
			const searchResults = searchIndex.search(query).slice(0, maxResults);
			results = searchResults;
			isEmpty = query.trim() !== '' && searchResults().length === 0;
			selectedIndex = 0;
			isLoading = false;
		}, 150); // Simulate loading delay
		fetchSuggestions(searchQuery);
	}, 300);

	// Reactive search
	$effect(() => {
		performSearch(searchQuery);
	});

	// Component type icons
	const getComponentIcon = (type: string) => {
		const icons = {
			component: '🧩',
			layout: '📐',
			form: '📝',
			navigation: '🧭',
			data: '📊',
			media: '🖼️',
			utility: '🔧',
			effect: '✨',
			other: '📦'
		};
		return icons[type as keyof typeof icons] || icons.other;
	};

	// Component type colors
	const getTypeColor = (type: string) => {
		const colors = {
			component: 'primary',
			layout: 'secondary',
			form: 'success',
			navigation: 'accent',
			data: 'warning',
			media: 'secondary',
			utility: 'default',
			effect: 'primary',
			other: 'default'
		};
		return colors[type as keyof typeof colors] || 'default';
	};

	// Fetch search suggestions
	const fetchSuggestions = debounce((query: string) => {
		if (!searchIndex || !query.trim()) {
			suggestions = [];
			return;
		}
		suggestions = searchIndex.getSuggestions(query);
	}, 250);

	// Navigate suggestions
	const navigateSuggestions = (direction: 1 | -1) => {
		selectedSuggestionIndex = (selectedSuggestionIndex + direction + suggestions().length) % suggestions().length;
	};

	const selectSuggestion = (index: number) => {
		const suggestion = suggestions()[index] || suggestions()[0];
		if (suggestion) {
			console.log('Selected suggestion:', suggestion.text);
			dispatch('select', suggestion.text);
		}
	};

	// Keyboard navigation
	const handleKeydown = (e: KeyboardEvent) => {
		if (!isOpen) return;

		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				handleClose();
				break;
			case 'ArrowDown':
				e.preventDefault();
				selectedIndex = Math.min(selectedIndex + 1, results().length - 1);
				scrollToSelected();
				break;
			case 'ArrowUp':
				e.preventDefault();
				selectedIndex = Math.max(selectedIndex - 1, 0);
				scrollToSelected();
				break;
			case 'Enter':
				e.preventDefault();
				if (results()[selectedIndex]) {
					selectResult(results()[selectedIndex]);
				}
				break;
		}
	};

	// Scroll selected item into view
	const scrollToSelected = () => {
		if (!resultsRef) return;
		const selectedElement = resultsRef.children()[selectedIndex] as HTMLElement;
		if (selectedElement) {
			selectedElement.scrollIntoView({
				block: 'nearest',
				behavior: 'smooth'
			});
		}
	};

	// Handle result selection
	const selectResult = (result: SearchDocument) => {
		onSelect?.(result);
		dispatch('select', result);
		handleClose();
	};

	// Handle modal close
	const handleClose = () => {
		isOpen = false;
		searchQuery = '';
		results = [];
		selectedIndex = 0;
		onClose?.();
		dispatch('close');
	};

	// Handle backdrop click
	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === backdropRef) {
			handleClose();
		}
	};

	// Lock body scroll when modal is open
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			// Focus input after modal is rendered
			setTimeout(() => inputRef?.focus(), 100);
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	// Global keydown listener
	onMount(() => {
		const handleGlobalKeydown = (e: KeyboardEvent) => {
			handleKeydown(e);
		};

		document.addEventListener('keydown', handleGlobalKeydown);

		return () => {
			document.removeEventListener('keydown', handleGlobalKeydown);
		};
	});
</script>

{#if isOpen}
	<!-- Backdrop -->
	<div
		bind:this={backdropRef}
		class="fixed inset-0 z-50 flex items-start justify-center pt-16 p-4"
		onclick={handleBackdropClick} onkeydown={(e) => e.key === "Enter" && handleBackdropClick(e)}
		role="presentation"
		aria-hidden="true"
		transition:fade={{ duration: 300 }}
	>
		<!-- Backdrop blur with terminal matrix effect -->
		<div class="absolute inset-0 bg-black/60 backdrop-blur-lg" transition:fade={{ duration: 300 }}>
			<!-- Matrix rain effect overlay -->
			<div class="absolute inset-0 opacity-10">
				<div class="matrix-rain"></div>
			</div>
		</div>

		<!-- Modal container -->
		<GlassCard
			bind:this={modalRef}
			variant="elevated"
			hover={false}
			class={cn(
				'relative w-full max-w-2xl max-h-[80vh] overflow-hidden',
				'border-terminal-green/30 shadow-2xl shadow-terminal-green/10',
				className
			)}
			role="dialog"
			aria-modal="true"
			aria-labelledby={title ? 'search-modal-title' : undefined}
			tabindex="-1"
			transition:fly={{ y: -20, duration: 400, opacity: 0 }}
			onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.key === "Enter" && e.stopPropagation()} 
		>
			<!-- Header with terminal styling -->
			<div class="relative z-10 flex items-center gap-3 p-6 border-b border-white/10">
				<!-- Terminal prompt indicator -->
				<div class="flex items-center gap-2 text-terminal-green">
					<div class="w-3 h-3 rounded-full bg-terminal-green animate-pulse"></div>
					<span class="font-mono text-sm">$</span>
				</div>

				{#if title}
					<h3 id="search-modal-title" class="text-lg font-semibold text-white font-mono flex-1">
						{title}
					</h3>
				{/if}

				<button
					type="button"
					class="text-white/60 hover:text-white/90 transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
					onclick={handleClose} onkeydown={(e) => e.key === "Enter" && handleClose(e)}
					aria-label="Close search modal"
					use:magneticHover={{ enabled: true, strength: 0.1, scale: 1.05 }}
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Search input with terminal styling -->
			<div class="relative z-10 p-6 pb-4">
				<GlassInput
					bind:inputRef
					bind:value={searchQuery}
					variant="search"
					{placeholder}
					class="font-mono text-terminal-green placeholder:text-terminal-green/50"
					clearable={true}
					autofocus
				/>

				<!-- Loading indicator -->
				{#if isLoading}
					<div class="absolute right-8 top-1/2 transform -translate-y-1/2" in:fade>
						<div class="w-4 h-4 border-2 border-terminal-green border-t-transparent rounded-full animate-spin"></div>
					</div>
				{/if}
			</div>

			<!-- Results container -->
			<div class="relative z-10 flex-1 overflow-hidden">
				{#if searchQuery.trim() === ''}
					<!-- Initial state -->
					<div class="px-6 py-8 text-center" in:glassFade={{ direction: 'up', distance: 10 }}>
						<div class="text-6xl mb-4">🔍</div>
						<p class="text-white/60 font-mono">Start typing to search...</p>
						<div class="mt-4 flex flex-wrap justify-center gap-2">
							<Badge variant="default" size="sm">Components</Badge>
							<Badge variant="primary" size="sm">Layouts</Badge>
							<Badge variant="success" size="sm">Forms</Badge>
							<Badge variant="accent" size="sm">Navigation</Badge>
						</div>
					</div>
				{:else if isEmpty}
					<!-- Empty state -->
					<div class="px-6 py-8 text-center" in:glassFade={{ direction: 'up', distance: 10 }}>
						<div class="text-6xl mb-4">👻</div>
						<p class="text-white/60 font-mono mb-2">No results found</p>
						<p class="text-white/40 text-sm font-mono">Try a different search term or check your spelling</p>
					</div>
				{:else if results().length > 0}
					<!-- Results list -->
					<div
						bind:this={resultsRef}
						class="max-h-96 overflow-y-auto px-2 pb-4"
						style="scrollbar-width: thin; scrollbar-color: rgba(48, 209, 88, 0.3) transparent;"
					>
						{#each results() as result, index (index)}
							<button
								type="button"
								class={cn(
									'w-full text-left p-4 mx-4 mb-2 rounded-xl transition-all duration-200',
									'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20',
									'group focus:outline-none focus:ring-2 focus:ring-terminal-cyan/50',
									selectedIndex === index &&
										'bg-terminal-green/10 border-terminal-green/30 shadow-lg shadow-terminal-green/10'
								)}
								onclick={() => selectResult(result)} onkeydown={(e) => e.key === "Enter" && selectResult(result)} 
								onmouseenter={() => (selectedIndex = index)}
								use:magneticHover={{ enabled: true, strength: 0.05, scale: 1.02 }}
								in:glassFade={{ direction: 'up', distance: 5, delay: index * 50 }}
							>
								<div class="flex items-start gap-3">
									<!-- Icon -->
									{#if showIcons}
										<div class="text-2xl flex-shrink-0 mt-1">
											{getComponentIcon(result.type)}
										</div>
									{/if}

									<!-- Content -->
									<div class="flex-1 min-w-0">
										<!-- Title and type badge -->
										<div class="flex items-center gap-2 mb-1">
											<h4
												class="font-mono font-medium text-white group-hover:text-terminal-cyan transition-colors truncate"
											>
												{@html highlightText(result.title, searchQuery)}
											</h4>
											{#if showType}
												<Badge variant={getTypeColor(result.type)} size="sm" class="flex-shrink-0">
													{result.type}
												</Badge>
											{/if}
										</div>

										<!-- Description with highlights -->
										<p class="text-sm text-white/60 group-hover:text-white/80 transition-colors line-clamp-2 font-mono">
											{@html highlightText(result.content().slice(0, 120) + '...', searchQuery)}
										</p>

										<!-- Path -->
										<div class="mt-2 flex items-center gap-1 text-xs text-white/40 font-mono">
											<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
											</svg>
											{result.path}
										</div>
									</div>

									<!-- Selection indicator -->
									{#if selectedIndex === index}
										<div class="flex-shrink-0 text-terminal-cyan" in:springPop>
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
											</svg>
										</div>
									{/if}
								</div>
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Footer with keyboard shortcuts -->
			<div class="relative z-10 px-6 py-4 border-t border-white/10 bg-white/5">
				<div class="flex items-center justify-between text-xs font-mono text-white/50">
					<div class="flex items-center gap-4">
						<div class="flex items-center gap-1">
							<kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">↑↓</kbd>
							<span>Navigate</span>
						</div>
						<div class="flex items-center gap-1">
							<kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">Enter</kbd>
							<span>Select</span>
						</div>
						<div class="flex items-center gap-1">
							<kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">Esc</kbd>
							<span>Close</span>
						</div>
					</div>
					<div class="text-terminal-green">
						{results().length} result{results().length !== 1 ? 's' : ''}
					</div>
				</div>
			</div>

			{#if children}
				{@render children()}
			{/if}
		</GlassCard>
	</div>
{/if}

<style>
	/* Custom scrollbar */
	:global(.max-h-96::-webkit-scrollbar) {
		width: 6px;
	}

	:global(.max-h-96::-webkit-scrollbar-track) {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 3px;
	}

	:global(.max-h-96::-webkit-scrollbar-thumb) {
		background: rgba(48, 209, 88, 0.3);
		border-radius: 3px;
	}

	:global(.max-h-96::-webkit-scrollbar-thumb:hover) {
		background: rgba(48, 209, 88, 0.5);
	}

	/* Matrix rain effect for backdrop */
	.matrix-rain {
		background: repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(48, 209, 88, 0.03) 100px);
		animation: matrix-scroll 20s linear infinite;
		height: 100%;
		width: 100%;
	}

	@keyframes matrix-scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100px);
		}
	}

	/* Line clamp utility */
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Keyboard shortcut styling */
	kbd {
		font-family: inherit;
		font-size: inherit;
	}

	/* Search highlight styling */
	:global(mark) {
		background: rgba(0, 255, 255, 0.2) !important;
		color: rgb(0, 255, 255) !important;
		border-radius: 2px;
		padding: 0 2px;
	}

	/* Terminal cursor animation */
	@keyframes terminal-cursor {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	/* Enhanced glass effect for results */
	button:global(.group) {
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	button:global(.group):hover {
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}
</style>
