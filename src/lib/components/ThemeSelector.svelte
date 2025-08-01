<script lang="ts">
	import { theme, themeConfig, getThemeDisplayInfo, isAutoTheme } from '../stores/theme.js';
	import { cn } from '../utils/index.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'dropdown' | 'toggle' | 'pills';
		showDescription?: boolean;
		showSystemStatus?: boolean;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	const {
		variant = 'pills',
		showDescription = true,
		showSystemStatus = true,
		size = 'md',
		class: className = '',
		...restProps
	}: Props = $props();

	const sizes = {
		sm: 'text-xs px-2 py-1',
		md: 'text-sm px-3 py-2',
		lg: 'text-base px-4 py-3'
	};

	const getVariantClasses = (currentUserTheme: string, themeValue: string) => {
		const isActive = currentUserTheme === themeValue;

		if (variant === 'pills') {
			return cn(
				'px-3 py-2 rounded-lg font-medium transition-all duration-200',
				'border border-transparent cursor-pointer',
				isActive
					? 'bg-primary text-white border-primary shadow-lg'
					: 'bg-surface/50 text-text/70 hover:bg-surface hover:text-text border-border/30',
				sizes[size]
			);
		}

		if (variant === 'toggle') {
			return cn(
				'flex-1 px-3 py-2 font-medium transition-all duration-200',
				'border-y border-border/30 cursor-pointer first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg',
				isActive
					? 'bg-primary text-white shadow-inner'
					: 'bg-surface/30 text-text/70 hover:bg-surface/50 hover:text-text',
				sizes[size]
			);
		}

		return '';
	};

	const displayInfo = $derived(
		$themeConfig ? getThemeDisplayInfo($themeConfig.userTheme, $themeConfig.resolvedTheme) : null
	);
</script>

<div class={cn('theme-selector', className)} {...restProps}>
	{#if variant === 'dropdown'}
		<div class="space-y-2">
			<label for="theme-select" class="block text-sm font-medium text-text"> Theme Preference </label>
			<select
				id="theme-select"
				class={cn(
					'w-full border border-border/30 rounded-lg bg-surface text-text',
					'focus:ring-2 focus:ring-primary focus:border-primary',
					sizes[size]
				)}
				value={$themeConfig?.userTheme || 'auto'}
				onchange={(e) => theme.set(e.currentTarget.value as any)}
			>
				<option value="auto">Auto (Follow System)</option>
				<option value="terminal">Terminal (Dark)</option>
				<option value="bubbleTea">Bubble Tea (Light)</option>
			</select>
		</div>
	{:else if variant === 'toggle'}
		<div class="flex rounded-lg overflow-hidden border border-border/30">
			<button class={getVariantClasses($themeConfig?.userTheme || 'auto', 'auto')} onclick={() => theme.setAuto()}>
				Auto
			</button>
			<button
				class={getVariantClasses($themeConfig?.userTheme || 'auto', 'terminal')}
				onclick={() => theme.setTerminal()}
			>
				Terminal
			</button>
			<button
				class={getVariantClasses($themeConfig?.userTheme || 'auto', 'bubbleTea')}
				onclick={() => theme.setBubbleTea()}
			>
				Bubble Tea
			</button>
		</div>
	{:else if variant === 'pills'}
		<div class="flex flex-wrap gap-2">
			<button class={getVariantClasses($themeConfig?.userTheme || 'auto', 'auto')} onclick={() => theme.setAuto()}>
				🔄 Auto
			</button>
			<button
				class={getVariantClasses($themeConfig?.userTheme || 'auto', 'terminal')}
				onclick={() => theme.setTerminal()}
			>
				💻 Terminal
			</button>
			<button
				class={getVariantClasses($themeConfig?.userTheme || 'auto', 'bubbleTea')}
				onclick={() => theme.setBubbleTea()}
			>
				🧋 Bubble Tea
			</button>
		</div>
	{/if}

	{#if showDescription && displayInfo}
		<div class="mt-3 p-3 rounded-lg bg-surface/30 border border-border/20">
			<h4 class="font-medium text-text mb-1">{displayInfo.displayName}</h4>
			<p class="text-sm text-text/70">{displayInfo.description}</p>
		</div>
	{/if}

	{#if showSystemStatus && $themeConfig}
		<div class="mt-2 flex items-center gap-2 text-xs text-text/60">
			<div
				class={cn('w-2 h-2 rounded-full', isAutoTheme($themeConfig.userTheme) ? 'bg-green-400' : 'bg-orange-400')}
			></div>
			{#if isAutoTheme($themeConfig.userTheme)}
				<span>Following system: {$themeConfig.resolvedTheme}</span>
			{:else}
				<span>Manual override: {$themeConfig.userTheme}</span>
			{/if}
		</div>
	{/if}
</div>

<style>
	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {
		.theme-selector * {
			transition-duration: 0.01ms !important;
		}
	}
</style>
