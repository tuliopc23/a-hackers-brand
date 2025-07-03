<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	interface TabItem {
		id: string;
		label: string;
		content: Snippet;
		disabled?: boolean;
	}

	interface Props {
		tabs: TabItem[];
		defaultTab?: string;
		orientation?: 'horizontal' | 'vertical';
		class?: string;
		tabListClassName?: string;
		tabButtonClassName?: string;
		activeTabButtonClassName?: string;
		inactiveTabButtonClassName?: string;
		tabPanelClassName?: string;
	}

	const {
		tabs,
		defaultTab,
		orientation = 'horizontal',
		class: className = '',
		tabListClassName = '',
		tabButtonClassName = '',
		activeTabButtonClassName = '',
		inactiveTabButtonClassName = '',
		tabPanelClassName = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let activeTab = $state(defaultTab || tabs[0]?.id);
	let tabIndicatorRef: HTMLDivElement;
	const tabButtonRefs: Record<string, HTMLButtonElement> = {};

	const handleTabChange = (tabId: string) => {
		if (tabs.find(t => t.id === tabId)?.disabled) return;
		
		activeTab = tabId;
		dispatch('tabChange', { tabId, tab: tabs.find(t => t.id === tabId) });
		updateTabIndicator();
	};

	const updateTabIndicator = () => {
		const activeButton = tabButtonRefs[activeTab];
		if (!activeButton || !tabIndicatorRef) return;

		const rect = activeButton.getBoundingClientRect();
		const parentRect = activeButton.parentElement!.getBoundingClientRect();

		if (orientation === 'horizontal') {
			tabIndicatorRef.style.width = `${rect.width}px`;
			tabIndicatorRef.style.height = '2px';
			tabIndicatorRef.style.left = `${rect.left - parentRect.left}px`;
			tabIndicatorRef.style.top = `${rect.height - 2}px`;
		} else {
			tabIndicatorRef.style.width = '2px';
			tabIndicatorRef.style.height = `${rect.height}px`;
			tabIndicatorRef.style.left = '0px';
			tabIndicatorRef.style.top = `${rect.top - parentRect.top}px`;
		}
	};

	// Update indicator when activeTab changes
	$effect(() => {
		if (activeTab) {
			setTimeout(updateTabIndicator, 0);
		}
	});

	const activeTabData = $derived(tabs.find(t => t.id === activeTab));
</script>

<div class={cn(
	'glass-tabs',
	orientation === 'vertical' ? 'flex gap-6' : 'space-y-4',
	className
)}>
	<!-- Tab List -->
	<div class={cn(
		'relative',
		orientation === 'horizontal' 
			? 'flex space-x-1 bg-white/5 p-1 rounded-lg backdrop-blur-sm border border-white/10' 
			: 'flex flex-col space-y-1 w-48 bg-white/5 p-1 rounded-lg backdrop-blur-sm border border-white/10',
		tabListClassName
	)}>
		<!-- Tab Indicator -->
		<div
			bind:this={tabIndicatorRef}
			class="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm transition-all duration-300 ease-out shadow-lg shadow-blue-500/30"
		></div>
		
		<!-- Tab Buttons -->
		{#each tabs as tab}
			<button
				bind:this={tabButtonRefs[tab.id]}
				type="button"
				class={cn(
					'relative z-10 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 font-mono',
					'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50',
					'disabled:opacity-50 disabled:cursor-not-allowed',
					tab.id === activeTab 
						? cn(
							'text-white shadow-sm',
							activeTabButtonClassName
						)
						: cn(
							'text-white/70 hover:text-white/90',
							inactiveTabButtonClassName
						),
					tabButtonClassName
				)}
				disabled={tab.disabled}
				onclick={() => handleTabChange(tab.id)}
			>
				{tab.label}
			</button>
		{/each}
	</div>
	
	<!-- Tab Panels -->
	<div class={cn(
		'tab-panel flex-1',
		tabPanelClassName
	)}>
		{#if activeTabData}
			<div
				class="glass-panel bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 min-h-[200px]"
				style="animation: fadeIn 0.3s ease-out;"
			>
				{@render activeTabData.content()}
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.glass-panel {
		box-shadow: 
			0 4px 8px rgba(0, 0, 0, 0.12),
			0 8px 16px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(255, 255, 255, 0.05) inset;
	}
</style>