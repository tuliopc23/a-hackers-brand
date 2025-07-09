<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { brandColors } from '$lib/tokens';
	import { glassFade, magneticHover, springPop } from '$lib/motion';

	interface ListItem {
		id: string | number;
		title: string;
		subtitle?: string;
		description?: string;
		icon?: string;
		avatar?: string;
		badge?: string | number;
		actions?: Array<{
			label: string;
			icon?: string;
			action: string;
			variant?: 'primary' | 'secondary' | 'danger';
		}>;
		metadata?: Record<string, any>;
		disabled?: boolean;
	}

	interface Props {
		items: ListItem[];
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		layout?: 'simple' | 'detailed' | 'card';
		selectable?: boolean;
		multiSelect?: boolean;
		selectedItems?: Set<string | number>;
		loading?: boolean;
		loadingCount?: number;
		emptyMessage?: string;
		emptyIcon?: string;
		dividers?: boolean;
		hover?: boolean;
		animated?: boolean;
		class?: string;
	}

	const {
		items = [],
		variant = 'default',
		size = 'md',
		layout = 'simple',
		selectable = false,
		multiSelect = false,
		selectedItems = new Set(),
		loading = false,
		loadingCount = 3,
		emptyMessage = 'No items found',
		emptyIcon = '📋',
		dividers = true,
		hover = true,
		animated = true,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher<{
		itemClick: { item: ListItem; index: number };
		itemSelect: { item: ListItem; selected: boolean };
		actionClick: { item: ListItem; action: string };
		selectAll: { selected: boolean };
	}>();

	let currentSelectedItems = $state(selectedItems);

	const variants = {
		default: {
			container: 'bg-gray-900',
			item: 'bg-gray-800 border-gray-700 text-white',
			itemHover: 'hover:bg-gray-700',
			itemSelected: 'bg-blue-600/20 border-blue-500',
			title: 'text-white',
			subtitle: 'text-gray-300',
			description: 'text-gray-400',
			metadata: 'text-gray-500',
			badge: 'bg-blue-600 text-white',
			skeleton: 'bg-gray-700'
		},
		glass: {
			container: 'bg-white/5 backdrop-blur-md',
			item: 'bg-white/10 border-white/20 text-white backdrop-blur-sm',
			itemHover: 'hover:bg-white/15',
			itemSelected: 'bg-white/20 border-white/40',
			title: 'text-white',
			subtitle: 'text-white/80',
			description: 'text-white/60',
			metadata: 'text-white/50',
			badge: 'bg-white/30 text-white',
			skeleton: 'bg-white/10'
		},
		terminal: {
			container: 'bg-black/90',
			item: `bg-black/60 border-${brandColors.terminal.green}/30 text-${brandColors.terminal.green}`,
			itemHover: `hover:bg-${brandColors.terminal.green}/5`,
			itemSelected: `bg-${brandColors.terminal.green}/10 border-${brandColors.terminal.green}`,
			title: `text-${brandColors.terminal.green}`,
			subtitle: `text-${brandColors.terminal.green}/80`,
			description: `text-${brandColors.terminal.green}/60`,
			metadata: `text-${brandColors.terminal.green}/50`,
			badge: `bg-${brandColors.terminal.green} text-black`,
			skeleton: `bg-${brandColors.terminal.green}/10`
		}
	};

	const sizes = {
		sm: {
			container: 'text-sm',
			item: 'p-3',
			avatar: 'w-8 h-8',
			icon: 'w-5 h-5',
			badge: 'px-2 py-0.5 text-xs'
		},
		md: {
			container: 'text-base',
			item: 'p-4',
			avatar: 'w-10 h-10',
			icon: 'w-6 h-6',
			badge: 'px-2.5 py-1 text-sm'
		},
		lg: {
			container: 'text-lg',
			item: 'p-6',
			avatar: 'w-12 h-12',
			icon: 'w-8 h-8',
			badge: 'px-3 py-1.5 text-base'
		}
	};

	const currentVariant = $derived(variants[variant]);
	const currentSize = $derived(sizes[size]);

	function handleItemClick(item: ListItem, index: number) {
		if (item.disabled) return;

		if (selectable) {
			handleItemSelect(item, !currentSelectedItems.has(item.id));
		}

		dispatch('itemClick', { item, index });
	}

	function handleItemSelect(item: ListItem, selected: boolean) {
		if (item.disabled) return;

		if (multiSelect) {
			if (selected) {
				currentSelectedItems.add(item.id);
			} else {
				currentSelectedItems.delete(item.id);
			}
		} else {
			if (selected) {
				currentSelectedItems = new Set([item.id]);
			} else {
				currentSelectedItems = new Set();
			}
		}

		currentSelectedItems = new Set(currentSelectedItems);
		dispatch('itemSelect', { item, selected });
	}

	function handleActionClick(item: ListItem, action: string, event: Event) {
		event.stopPropagation();
		dispatch('actionClick', { item, action });
	}

	function handleSelectAll(selected: boolean) {
		if (selected) {
			currentSelectedItems = new Set(items.filter((item) => !item.disabled).map((item) => item.id));
		} else {
			currentSelectedItems = new Set();
		}
		dispatch('selectAll', { selected });
	}

	const isAllSelected = $derived(
		items.length > 0 && items.filter((item) => !item.disabled).every((item) => currentSelectedItems.has(item.id))
	);

	const containerClasses = $derived(
		cn('rounded-lg overflow-hidden font-mono', currentVariant.container, currentSize.container, className)
	);

	function getActionButtonClasses(actionVariant: string = 'secondary') {
		const baseClasses = 'px-2 py-1 rounded text-xs font-medium transition-colors';
		switch (actionVariant) {
			case 'primary':
				return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
			case 'danger':
				return `${baseClasses} bg-red-600 text-white hover:bg-red-700`;
			default:
				return `${baseClasses} bg-gray-600 text-white hover:bg-gray-700`;
		}
	}

	// Generate skeleton items for loading state
	const skeletonItems = $derived(Array.from({ length: loadingCount }, (_, i) => ({ id: `skeleton-${i}` })));
</script>

<div class={containerClasses} role="list" aria-label="Item list">
	{#if selectable && multiSelect && items.length > 0}
		<!-- Select All Header -->
		<div class="px-4 py-3 border-b {currentVariant.item} border-gray-600">
			<label class="flex items-center gap-3 cursor-pointer">
				<input
					type="checkbox"
					checked={isAllSelected}
					onchange={(e) => {
						const target = e.target as HTMLInputElement;
						handleSelectAll(target.checked);
					}}
					aria-label="Select all items"
					class="rounded bg-transparent border-current"
				/>
				<span class="text-sm font-medium">
					{currentSelectedItems.size} of {items.filter((item) => !item.disabled).length} selected
				</span>
			</label>
		</div>
	{/if}

	<div class="divide-y divide-gray-600">
		{#if loading}
			<!-- Loading Skeletons -->
			{#each skeletonItems as skeleton, index (skeleton.id)}
				<div
					class={cn(currentSize.item, currentVariant.item, 'animate-pulse')}
					in:glassFade={{ direction: 'up', duration: 200, delay: index * 50 }}
				>
					{#if layout === 'simple'}
						<div class="flex items-center gap-3">
							<div class={cn('rounded-full', currentSize.avatar, currentVariant.skeleton)}></div>
							<div class="flex-1 space-y-2">
								<div class={cn('h-4 rounded', currentVariant.skeleton, 'w-3/4')}></div>
								<div class={cn('h-3 rounded', currentVariant.skeleton, 'w-1/2')}></div>
							</div>
						</div>
					{:else if layout === 'detailed'}
						<div class="space-y-3">
							<div class="flex items-start gap-3">
								<div class={cn('rounded-full', currentSize.avatar, currentVariant.skeleton)}></div>
								<div class="flex-1 space-y-2">
									<div class={cn('h-4 rounded', currentVariant.skeleton, 'w-2/3')}></div>
									<div class={cn('h-3 rounded', currentVariant.skeleton, 'w-1/2')}></div>
									<div class={cn('h-3 rounded', currentVariant.skeleton, 'w-full')}></div>
								</div>
							</div>
						</div>
					{:else}
						<div class="border rounded-lg p-4 space-y-3 {currentVariant.skeleton}">
							<div class="flex items-center gap-3">
								<div class={cn('rounded-full', currentSize.avatar, currentVariant.skeleton)}></div>
								<div class="flex-1 space-y-2">
									<div class={cn('h-4 rounded', currentVariant.skeleton, 'w-3/4')}></div>
									<div class={cn('h-3 rounded', currentVariant.skeleton, 'w-1/2')}></div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		{:else if items.length === 0}
			<!-- Empty State -->
			<div class="py-12 text-center {currentVariant.description}">
				<div class="text-4xl mb-3">{emptyIcon}</div>
				<p class="text-lg font-medium">{emptyMessage}</p>
			</div>
		{:else}
			<!-- List Items -->
			{#each items as item, index (item.id)}
				{@const isSelected = currentSelectedItems.has(item.id)}
				<div
					class={cn(
						currentSize.item,
						currentVariant.item,
						hover && !item.disabled && currentVariant.itemHover,
						isSelected && currentVariant.itemSelected,
						item.disabled && 'opacity-50',
						!item.disabled && 'cursor-pointer',
						'transition-all duration-200'
					)}
					onclick={() => handleItemClick(item, index)}
					onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleItemClick(item, index)}
					role={selectable ? 'option' : 'listitem'}
					{...selectable && !item.disabled ? { tabindex: 0 } : {}}
					aria-selected={selectable ? isSelected : undefined}
					aria-label={item.title}
					aria-describedby={item.description ? `item-${item.id}-description` : undefined}
					use:magneticHover={{ enabled: !item.disabled && hover, strength: 0.05 }}
					in:glassFade={animated ? { direction: 'up', duration: 200, delay: index * 30 } : undefined}
				>
					{#if layout === 'simple'}
						<!-- Simple Layout -->
						<div class="flex items-center gap-3">
							{#if selectable}
								<input
									type="checkbox"
									checked={isSelected}
									disabled={item.disabled}
									onchange={(e) => {
										const target = e.target as HTMLInputElement;
										handleItemSelect(item, target.checked);
									}}
									onclick={(e) => e.stopPropagation()}
									class="rounded bg-transparent border-current"
								/>
							{/if}

							<!-- Avatar or Icon -->
							{#if item.avatar}
								<img src={item.avatar} alt={item.title} class={cn('rounded-full object-cover', currentSize.avatar)} />
							{:else if item.icon}
								<div class={cn('flex items-center justify-center', currentSize.icon)}>
									<span class="text-2xl">{item.icon}</span>
								</div>
							{/if}

							<!-- Content -->
							<div class="flex-1 min-w-0">
								<div class="flex items-center gap-2">
									<h3 class={cn('font-medium truncate', currentVariant.title)}>
										{item.title}
									</h3>
									{#if item.badge}
										<span class={cn('rounded-full font-medium', currentSize.badge, currentVariant.badge)}>
											{item.badge}
										</span>
									{/if}
								</div>
								{#if item.subtitle}
									<p class={cn('text-sm truncate', currentVariant.subtitle)}>
										{item.subtitle}
									</p>
								{/if}
							</div>

							<!-- Actions -->
							{#if item.actions && item.actions.length > 0}
								<div class="flex items-center gap-2">
									{#each item.actions as action (action.action)}
										<button
											class={getActionButtonClasses(action.variant)}
											onclick={(e) => handleActionClick(item, action.action, e)}
											use:magneticHover={{ strength: 0.1 }}
										>
											{#if action.icon}
												<span class="mr-1">{action.icon}</span>
											{/if}
											{action.label}
										</button>
									{/each}
								</div>
							{/if}
						</div>
					{:else if layout === 'detailed'}
						<!-- Detailed Layout -->
						<div class="space-y-3">
							<div class="flex items-start gap-3">
								{#if selectable}
									<input
										type="checkbox"
										checked={isSelected}
										disabled={item.disabled}
										onchange={(e) => {
											const target = e.target as HTMLInputElement;
											handleItemSelect(item, target.checked);
										}}
										onclick={(e) => e.stopPropagation()}
										class="rounded bg-transparent border-current mt-1"
									/>
								{/if}

								<!-- Avatar or Icon -->
								{#if item.avatar}
									<img src={item.avatar} alt={item.title} class={cn('rounded-full object-cover', currentSize.avatar)} />
								{:else if item.icon}
									<div class={cn('flex items-center justify-center', currentSize.icon)}>
										<span class="text-2xl">{item.icon}</span>
									</div>
								{/if}

								<!-- Content -->
								<div class="flex-1 min-w-0">
									<div class="flex items-center gap-2 mb-1">
										<h3 class={cn('font-semibold', currentVariant.title)}>
											{item.title}
										</h3>
										{#if item.badge}
											<span class={cn('rounded-full font-medium', currentSize.badge, currentVariant.badge)}>
												{item.badge}
											</span>
										{/if}
									</div>

									{#if item.subtitle}
										<p class={cn('text-sm mb-2', currentVariant.subtitle)}>
											{item.subtitle}
										</p>
									{/if}

									{#if item.description}
										<p class={cn('text-sm leading-relaxed', currentVariant.description)}>
											{item.description}
										</p>
									{/if}

									{#if item.metadata}
										<div class="flex flex-wrap gap-3 mt-2">
											{#each Object.entries(item.metadata) as [key, value]}
												<span class={cn('text-xs', currentVariant.metadata)}>
													{key}: {value}
												</span>
											{/each}
										</div>
									{/if}
								</div>

								<!-- Actions -->
								{#if item.actions && item.actions.length > 0}
									<div class="flex flex-col gap-2">
										{#each item.actions as action (action.action)}
											<button
												class={getActionButtonClasses(action.variant)}
												onclick={(e) => handleActionClick(item, action.action, e)}
												use:magneticHover={{ strength: 0.1 }}
											>
												{#if action.icon}
													<span class="mr-1">{action.icon}</span>
												{/if}
												{action.label}
											</button>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					{:else}
						<!-- Card Layout -->
						<div class="border rounded-lg p-4 {currentVariant.item}">
							<div class="flex items-start gap-3">
								{#if selectable}
									<input
										type="checkbox"
										checked={isSelected}
										disabled={item.disabled}
										onchange={(e) => {
											const target = e.target as HTMLInputElement;
											handleItemSelect(item, target.checked);
										}}
										onclick={(e) => e.stopPropagation()}
										class="rounded bg-transparent border-current mt-1"
									/>
								{/if}

								<!-- Avatar or Icon -->
								{#if item.avatar}
									<img src={item.avatar} alt={item.title} class={cn('rounded-full object-cover', currentSize.avatar)} />
								{:else if item.icon}
									<div class={cn('flex items-center justify-center', currentSize.icon)}>
										<span class="text-3xl">{item.icon}</span>
									</div>
								{/if}

								<div class="flex-1 min-w-0">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center gap-2">
											<h3 class={cn('font-semibold', currentVariant.title)}>
												{item.title}
											</h3>
											{#if item.badge}
												<span class={cn('rounded-full font-medium', currentSize.badge, currentVariant.badge)}>
													{item.badge}
												</span>
											{/if}
										</div>

										{#if item.actions && item.actions.length > 0}
											<div class="flex items-center gap-2">
												{#each item.actions as action (action.action)}
													<button
														class={getActionButtonClasses(action.variant)}
														onclick={(e) => handleActionClick(item, action.action, e)}
														use:magneticHover={{ strength: 0.1 }}
													>
														{#if action.icon}
															<span class="mr-1">{action.icon}</span>
														{/if}
														{action.label}
													</button>
												{/each}
											</div>
										{/if}
									</div>

									{#if item.subtitle}
										<p class={cn('text-sm mb-2', currentVariant.subtitle)}>
											{item.subtitle}
										</p>
									{/if}

									{#if item.description}
										<p class={cn('text-sm leading-relaxed mb-3', currentVariant.description)}>
											{item.description}
										</p>
									{/if}

									{#if item.metadata}
										<div class="flex flex-wrap gap-3">
											{#each Object.entries(item.metadata) as [key, value]}
												<span
													class={cn('text-xs px-2 py-1 rounded-full', currentVariant.skeleton, currentVariant.metadata)}
												>
													{key}: {value}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	/* Terminal glow effects */
	:global(.terminal .list-item:hover) {
		box-shadow:
			0 0 0 1px var(--terminal-green),
			0 0 15px var(--terminal-green-glow);
	}
</style>
