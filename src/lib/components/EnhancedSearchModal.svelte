<!-- @migration-task Error while migrating Svelte code: This type of directive is not valid on components
https://svelte.dev/e/component_invalid_directive -->
<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, glassFade } from '$lib/motion';
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';
	import {
		SearchIndex,
		debounce,
		type SearchDocument,
		type SearchSuggestion,
		type SearchCategory
	} from '$lib/utils/search.js';
	import GlassCard from './liquidify/GlassCard.svelte';
	import Input from './Input.svelte';
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
		showCategories?: boolean;
		showSuggestions?: boolean;
		showPreview?: boolean;
		onClose?: () => void;
		onSelect?: (result: SearchDocument) => void;
		children?: Snippet;
	}

	const {
isOpen = $bindable(false),
		title = 'Enhanced Search',
		placeholder = 'Search documentation...',
		class: className = '',
		searchData = [],
		maxResults = 8,
		showType = true,
		showIcons = true,
		showCategories = true,
		showSuggestions = true,
		showPreview = true,
		onClose,
		onSelect,
		children
	
}: Props = $props();

	const dispatch = createEventDispatcher();

	// State management
	let searchQuery = $state('');
	let suggestions = $state<SearchSuggestion[]>([]);
	let results = $state<SearchDocument[]>([]);
	let selectedIndex = $state(0);
	let selectedSuggestionIndex = $state(0);
	let selectedCategory = $state<SearchCategory>('All');
	let isLoading = $state(false);
	let isEmpty = $state(false);
	let showSuggestionsPanel = $state(false);
	let searchIndex = $state<SearchIndex | null>(null);
	let previewResult = $state<SearchDocument | null>(null);

	// DOM references
	let modalRef = $state<HTMLDivElement>();
	let backdropRef = $state<HTMLDivElement>();
	let inputRef = $state<HTMLInputElement>();
	let resultsRef = $state<HTMLDivElement>();

	// Initialize search index with enhanced settings
	onMount(() => {
		searchIndex = new SearchIndex({
			maxRecentSearches: 10,
			maxPopularTerms: 20,
			enableAnalytics: true,
			fuzzyThreshold: 0.6
		});

		if (searchData().length > 0) {
			searchData().forEach((doc) => searchIndex?.addDocument(doc));
		}

		// Focus input when modal opens
		if (isOpen && inputRef) {
			setTimeout(() => inputRef?.focus(), 100);
		}

		// Load initial suggestions
		if (showSuggestions) {
			loadInitialSuggestions();
		}
	});

	// Load initial suggestions (recent and popular searches)
	const loadInitialSuggestions = () => {
		if (!searchIndex) return;
		suggestions = searchIndex.getSuggestions('');
		showSuggestionsPanel = suggestions().length > 0;
	};

	// Enhanced search function with category filtering
	const performSearch = debounce((query: string) => {
		if (!searchIndex || !query.trim()) {
			results = [];
			isEmpty = false;
			isLoading = false;
			showSuggestionsPanel = showSuggestions && suggestions().length > 0;
			return;
		}

		isLoading = true;
		showSuggestionsPanel = false;

		setTimeout(() => {
			const searchResults = searchIndex.search(query, {
				category: selectedCategory,
				maxResults: maxResults,
				includeFuzzy: true
			});

			results = searchResults;
			isEmpty = query.trim() !== '' && searchResults().length === 0;
			selectedIndex = 0;
			isLoading = false;
		}, 150);
	}, 300);

	// Fetch search suggestions
	const fetchSuggestions = debounce((query: string) => {
		if (!searchIndex) return;

		suggestions = searchIndex.getSuggestions(query);
		showSuggestionsPanel = showSuggestions && !query.trim() && suggestions().length > 0;
	}, 200);

	// Reactive search
	$effect(() => {
		performSearch(searchQuery);
		if (showSuggestions) {
			fetchSuggestions(searchQuery);
		}
	});

	// Component type icons with enhanced categories
	const getComponentIcon = (type: string) => {
		const icons = {
			component: '🧩',
			webgl: '🌐',
			guidelines: '📋',
			'design-system': '🎨',
			documentation: '📚',
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

	// Enhanced type colors
	const getTypeColor = (type: string) => {
		const colors = {
			component: 'primary',
			webgl: 'accent',
			guidelines: 'secondary',
			'design-system': 'warning',
			documentation: 'default',
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

	// Enhanced keyboard navigation
	const handleKeydown = (e: KeyboardEvent) => {
		if (!isOpen) return;

		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				handleClose();
				break;
			case 'ArrowDown':
				e.preventDefault();
				if (showSuggestionsPanel && suggestions().length > 0) {
					selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions().length - 1);
				} else if (results().length > 0) {
					selectedIndex = Math.min(selectedIndex + 1, results().length - 1);
					scrollToSelected();
				}
				break;
			case 'ArrowUp':
				e.preventDefault();
				if (showSuggestionsPanel && suggestions().length > 0) {
					selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, 0);
				} else if (results().length > 0) {
					selectedIndex = Math.max(selectedIndex - 1, 0);
					scrollToSelected();
				}
				break;
			case 'Enter':
				e.preventDefault();
				if (showSuggestionsPanel && suggestions()[selectedSuggestionIndex]) {
					selectSuggestion(selectedSuggestionIndex);
				} else if (results()[selectedIndex]) {
					selectResult(results()[selectedIndex]);
				}
				break;
			case 'Tab':
				e.preventDefault();
				if (suggestions().length > 0) {
					const suggestion = suggestions()[selectedSuggestionIndex];
					if (suggestion) {
						searchQuery = suggestion.text;
						showSuggestionsPanel = false;
					}
				}
				break;
		}
	};

	// Suggestion selection
	const selectSuggestion = (index: number) => {
		const suggestion = suggestions()[index];
		if (suggestion) {
			searchQuery = suggestion.text;
			showSuggestionsPanel = false;
			performSearch(suggestion.text);
		}
	};

	// Result selection with preview
	const selectResult = (result: SearchDocument) => {
		onSelect?.(result);
		dispatch('select', result);
		handleClose();
	};

	// Result preview on hover
	const showPreviewOnHover = (result: SearchDocument) => {
		if (showPreview) {
			previewResult = result;
		}
	};

	const hidePreview = () => {
		previewResult = null;
	};

	// Category selection
	const selectCategory = (category: SearchCategory) => {
		selectedCategory = category;
		if (searchQuery.trim()) {
			performSearch(searchQuery);
		}
	};

	// Clear recent searches
	const clearRecentSearches = () => {
		searchIndex?.clearRecentSearches();
		loadInitialSuggestions();
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

	// Handle modal close
	const handleClose = () => {
		isOpen = false;
		searchQuery = '';
		results = [];
		suggestions = [];
		selectedIndex = 0;
		selectedSuggestionIndex = 0;
		selectedCategory = 'All';
		showSuggestionsPanel = false;
		previewResult = null;
		onClose?.();
		dispatch('close');
	};

	// Handle backdrop click
	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === backdropRef) {
			handleClose();
		}
	};

	// Highlight search terms
	const highlightText = (text: string, query: string) => {
		if (!query.trim()) return text;
		const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
		return text.replace(regex, '<mark class="bg-terminal-cyan/30 text-terminal-cyan rounded px-1">$1</mark>');
	};

	// Lock body scroll when modal is open
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
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
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Enter' && handleBackdropClick()}
		role="presentation"
		aria-hidden="true"
		transition:fade={{ duration: 300 }}
	>
		<!-- Enhanced backdrop with matrix effect -->
		<div class="absolute inset-0 bg-black/70 backdrop-blur-lg" transition:fade={{ duration: 300 }}>
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
				'relative w-full max-w-3xl max-h-[85vh] overflow-hidden',
				'border-terminal-green/30 shadow-2xl shadow-terminal-green/10',
				className
			)}
			role="dialog"
			aria-modal="true"
			aria-labelledby={title ? 'search-modal-title' : undefined}
			tabindex="-1"
			transition:fly={{ y: -20, duration: 400, opacity: 0 }}
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.key === 'Enter' && handleAction()}
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
					onclick={handleClose}
					onkeydown={(e) => e.key === 'Enter' && handleClose()}
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
				<Input
					bind:value={searchQuery}
					variant="glass"
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

			<!-- Category filters -->
			{#if showCategories && searchIndex}
				<div class="relative z-10 px-6 pb-4">
					<div class="flex flex-wrap gap-2">
						{#each searchIndex.getAvailableCategories() as category (category.id || category)}
							<button
								type="button"
								class={cn(
									'px-3 py-1 rounded-full text-xs font-mono transition-all duration-200',
									'border border-white/20 hover:border-white/40',
									selectedCategory === category
										? 'bg-terminal-cyan/20 border-terminal-cyan text-terminal-cyan'
										: 'bg-white/5 text-white/70 hover:bg-white/10'
								)}
								onclick={() => selectCategory(category)}
								onkeydown={(e) => e.key === 'Enter' && selectCategory(category)}
								use:magneticHover={{ enabled: true, strength: 0.05, scale: 1.02 }}
							>
								{category}
							</button>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Content container -->
			<div class="relative z-10 flex flex-1 overflow-hidden">
				<!-- Main results area -->
				<div class="flex-1 overflow-hidden">
					{#if searchQuery.trim() === ''}
						<!-- Initial state with suggestions -->
						<div class="px-6 py-8 text-center" in:glassFade={{ direction: 'up', distance: 10 }}>
							<div class="text-6xl mb-4">🔍</div>
							<p class="text-white/60 font-mono mb-4">Start typing to search...</p>

							{#if showSuggestionsPanel && suggestions().length > 0}
								<div class="max-w-md mx-auto">
									<h4 class="text-sm font-mono text-white/40 mb-3 text-left">Recent & Popular</h4>
									<div class="space-y-1">
										{#each suggestions().slice(0, 5) as suggestion, index}
											<button
												type="button"
												class={cn(
													'w-full text-left px-3 py-2 rounded-lg transition-all duration-200',
													'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20',
													'text-white/70 hover:text-white font-mono text-sm',
													selectedSuggestionIndex === index && 'bg-terminal-green/10 border-terminal-green/30'
												)}
												onclick={() => selectSuggestion(index)}
												onkeydown={(e) => e.key === 'Enter' && selectSuggestion(index)}
												onmouseenter={() => (selectedSuggestionIndex = index)}
											>
												<div class="flex items-center justify-between">
													<span>{suggestion.text}</span>
													<div class="flex items-center gap-2">
														{#if suggestion.type === 'recent'}
															<span class="text-xs text-terminal-cyan">Recent</span>
														{:else if suggestion.type === 'popular'}
															<span class="text-xs text-terminal-green">Popular ({suggestion.count})</span>
														{:else}
															<span class="text-xs text-terminal-orange">Suggestion</span>
														{/if}
													</div>
												</div>
											</button>
										{/each}
									</div>

									{#if searchIndex?.getRecentSearches().length > 0}
										<button
											type="button"
											class="mt-3 text-xs text-white/40 hover:text-white/60 font-mono"
											onclick={clearRecentSearches}
											onkeydown={(e) => e.key === 'Enter' && clearRecentSearches()}
										>
											Clear recent searches
										</button>
									{/if}
								</div>
							{:else}
								<div class="flex flex-wrap justify-center gap-2 mt-4">
									<Badge variant="default" size="sm">Components</Badge>
									<Badge variant="primary" size="sm">WebGL</Badge>
									<Badge variant="success" size="sm">Guidelines</Badge>
									<Badge variant="accent" size="sm">Design System</Badge>
								</div>
							{/if}
						</div>
					{:else if isEmpty}
						<!-- Empty state -->
						<div class="px-6 py-8 text-center" in:glassFade={{ direction: 'up', distance: 10 }}>
							<div class="text-6xl mb-4">👻</div>
							<p class="text-white/60 font-mono mb-2">No results found</p>
							<p class="text-white/40 text-sm font-mono">
								Try a different search term, check your spelling, or browse by category
							</p>
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
									onclick={() => selectResult(result)}
									onkeydown={(e) => e.key === 'Enter' && selectResult(result)}
									onmouseenter={() => {
										selectedIndex = index;
										showPreviewOnHover(result);
									}}
									onmouseleave={hidePreview}
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
												{#if result.score && result.score < 1}
													<Badge variant="warning" size="sm" class="flex-shrink-0">Fuzzy</Badge>
												{/if}
											</div>

											<!-- Description/Preview -->
											<p
												class="text-sm text-white/60 group-hover:text-white/80 transition-colors line-clamp-2 font-mono"
											>
												{@html highlightText((result.preview || result.content).slice(0, 120) + '...', searchQuery)}
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

				<!-- Preview panel -->
				{#if showPreview && previewResult}
					<div
						class="w-80 border-l border-white/10 bg-white/5 p-4 overflow-y-auto"
						in:fly={{ x: 20, duration: 200 }}
						out:fly={{ x: 20, duration: 150 }}
					>
						<div class="sticky top-0 bg-white/5 backdrop-blur-sm pb-3 mb-3 border-b border-white/10">
							<h4 class="font-mono font-medium text-white text-sm mb-1">Preview</h4>
							<p class="text-xs text-white/60">{previewResult.title}</p>
						</div>
						<div class="space-y-3">
							<div>
								<h5 class="text-xs font-mono text-white/40 mb-1">Description</h5>
								<p class="text-sm text-white/70 font-mono leading-relaxed">
									{previewResult.preview || previewResult.content().slice(0, 200) + '...'}
								</p>
							</div>
							{#if previewResult.keywords().length > 0}
								<div>
									<h5 class="text-xs font-mono text-white/40 mb-2">Keywords</h5>
									<div class="flex flex-wrap gap-1">
										{#each previewResult.keywords().slice(0, 6) as keyword}
											<span class="px-2 py-1 bg-white/10 rounded text-xs text-white/60 font-mono">
												{keyword}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			</div>

			<!-- Footer with keyboard shortcuts and analytics -->
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
							<kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">Tab</kbd>
							<span>Accept suggestion</span>
						</div>
						<div class="flex items-center gap-1">
							<kbd class="px-2 py-1 bg-white/10 rounded border border-white/20">Esc</kbd>
							<span>Close</span>
						</div>
					</div>
					<div class="text-terminal-green">
						{results().length} result{results().length !== 1 ? 's' : ''}
						{#if selectedCategory !== 'All'}
							in {selectedCategory}
						{/if}
					</div>
				</div>
			</div>

			{#if children}{@render children()}{/if}
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

	/* Enhanced glass effect for results */
	button:global(.group) {
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	button:global(.group):hover {
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	/* Preview panel styling */
	.w-80 {
		min-width: 20rem;
	}
</style>
