<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, glassFade } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Tab {
		id: string;
		label: string;
		disabled?: boolean;
		content?: any;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		tabs: Tab[];
		activeTab?: string;
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		orientation?: 'horizontal' | 'vertical';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		animate?: boolean;
		reduceMotion?: boolean;
		class?: string;
		children?: any;
		onTabChange?: (tabId: string) => void;
	}

	let {
		tabs = [],
		activeTab = tabs[0]?.id || '',
		variant = 'glass',
		size = 'md',
		orientation = 'horizontal',
		blur = 'md',
		animate = true,
		reduceMotion = false,
		class: className = '',
		children,
		onTabChange,
		...restProps
	}: Props = $props();

	let tabsListElement: HTMLDivElement;
	let activeIndex = $state(tabs.findIndex((tab) => tab.id === activeTab));

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base'
	};

	const variants = {
		default: {
			list: 'bg-white/5 border border-white/10',
			tab: 'text-white/70 hover:text-white/90',
			activeTab: 'text-white bg-white/10'
		},
		glass: {
			list: 'glass-subtle border border-white/20',
			tab: 'text-white/70 hover:text-white/90 hover:glass-subtle',
			activeTab: 'text-white glass-medium'
		},
		terminal: {
			list: 'bg-terminal-green/10 border border-terminal-green/30',
			tab: 'text-terminal-green/70 hover:text-terminal-green/90',
			activeTab: 'text-terminal-green bg-terminal-green/20'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const isHorizontal = orientation === 'horizontal';

	const listClasses = cn(
		'flex rounded-brand-lg p-1',
		isHorizontal ? 'flex-row' : 'flex-col min-w-max',
		variants[variant].list,
		variant === 'glass' && blurLevels[blur]
	);

	const tabClasses = cn(
		'relative flex-1 rounded-brand-md transition-all duration-200',
		'focus:outline-none focus:ring-2 focus:ring-blue-400/50',
		'font-medium whitespace-nowrap cursor-pointer',
		sizes[size],
		variants[variant].tab
	);

	const activeTabClasses = cn(tabClasses, variants[variant].activeTab);

	const contentClasses = cn('mt-4 focus:outline-none', isHorizontal ? '' : 'ml-4');

	function handleTabClick(tab: Tab) {
		if (tab.disabled) return;

		activeTab = tab.id;
		activeIndex = tabs.findIndex((t) => t.id === tab.id);
		onTabChange?.(tab.id);
	}

	function handleKeydown(event: KeyboardEvent, tab: Tab) {
		if (tab.disabled) return;

		const enabledTabs = tabs.filter((t) => !t.disabled);
		const currentEnabledIndex = enabledTabs.findIndex((t) => t.id === activeTab);

		switch (event.key) {
			case 'Enter':
			case ' ':
				event.preventDefault();
				handleTabClick(tab);
				break;
			case 'ArrowRight':
			case 'ArrowDown':
				if (isHorizontal ? event.key === 'ArrowRight' : event.key === 'ArrowDown') {
					event.preventDefault();
					const nextIndex = (currentEnabledIndex + 1) % enabledTabs.length;
					const nextTab = enabledTabs[nextIndex];
					handleTabClick(nextTab);
					focusTab(nextTab.id);
				}
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				if (isHorizontal ? event.key === 'ArrowLeft' : event.key === 'ArrowUp') {
					event.preventDefault();
					const prevIndex = currentEnabledIndex === 0 ? enabledTabs.length - 1 : currentEnabledIndex - 1;
					const prevTab = enabledTabs[prevIndex];
					handleTabClick(prevTab);
					focusTab(prevTab.id);
				}
				break;
			case 'Home':
				event.preventDefault();
				const firstTab = enabledTabs[0];
				handleTabClick(firstTab);
				focusTab(firstTab.id);
				break;
			case 'End':
				event.preventDefault();
				const lastTab = enabledTabs[enabledTabs.length - 1];
				handleTabClick(lastTab);
				focusTab(lastTab.id);
				break;
		}
	}

	function focusTab(tabId: string) {
		const tabElement = tabsListElement?.querySelector(`[data-tab-id="${tabId}"]`) as HTMLElement;
		tabElement?.focus();
	}

	const activeTabData = $derived(tabs.find((tab) => tab.id === activeTab));

	// Track bundle size
	$effect(() => {
		sizeOf('Tabs', 'medium');
	});
</script>

<div class={cn('w-full', isHorizontal ? '' : 'flex', className)} {...restProps}>
	<!-- Tab List -->
	<div bind:this={tabsListElement} class={listClasses} role="tablist" aria-orientation={orientation}>
		{#each tabs as tab, index}
			<button
				class={tab.id === activeTab ? activeTabClasses : tabClasses}
				class:opacity-50={tab.disabled}
				class:cursor-not-allowed={tab.disabled}
				role="tab"
				tabindex={tab.id === activeTab ? 0 : -1}
				aria-selected={tab.id === activeTab}
				aria-controls={`tabpanel-${tab.id}`}
				aria-disabled={tab.disabled}
				data-tab-id={tab.id}
				disabled={tab.disabled}
				use:liquidBlur={animate && !reduceMotion && tab.id === activeTab
					? { blur: blur, opacity: 'medium' }
					: undefined}
				on:click={() => handleTabClick(tab)}
				on:keydown={(e) => handleKeydown(e, tab)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<!-- Tab Content -->
	<div
		class={contentClasses}
		role="tabpanel"
		id={`tabpanel-${activeTab}`}
		aria-labelledby={`tab-${activeTab}`}
		tabindex="0"
	>
		{#if activeTabData?.content}
			<div
				in:glassFade={{ direction: 'up', distance: 10, duration: animate && !reduceMotion ? 200 : 0 }}
				out:glassFade={{ direction: 'down', distance: 10, duration: animate && !reduceMotion ? 150 : 0 }}
			>
				{@render activeTabData.content()}
			</div>
		{:else if children}
			<div
				in:glassFade={{ direction: 'up', distance: 10, duration: animate && !reduceMotion ? 200 : 0 }}
				out:glassFade={{ direction: 'down', distance: 10, duration: animate && !reduceMotion ? 150 : 0 }}
			>
				{@render children(activeTab)}
			</div>
		{/if}
	</div>
</div>

<style>
	button[role='tab'] {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			animation: none;
			will-change: auto;
		}
	}
</style>
