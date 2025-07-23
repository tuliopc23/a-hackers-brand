<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Technology {
		name: string;
		icon?: string;
		level?: number; // 1-5 scale
		category?: string;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		technologies: Technology[];
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		layout?: 'grid' | 'list' | 'compact';
		showLevels?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	const {
		technologies = [],
		variant = 'glass',
		layout = 'grid',
		showLevels = true,
		animate = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300'
	};

	const layouts = {
		grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
		list: 'space-y-3',
		compact: 'flex flex-wrap gap-2'
	};

	const baseClasses = 'rounded-2xl p-6 transition-all duration-300 will-change-transform';
	const combinedClasses = cn(baseClasses, variants[variant], className);

	// Group technologies by category if available
	const groupedTechnologies = $derived(() => {
		const groups: Record<string, Technology[]> = {};

		technologies.forEach((tech) => {
			const category = tech.category || 'Other';
			if (!groups[category]) {
				groups[category] = [];
			}
			groups[category].push(tech);
		});

		return groups;
	});

	const hasCategories = $derived(() => {
		return technologies.some((tech) => tech.category);
	});

	const renderLevelIndicator = (level?: number) => {
		if (!level || !showLevels) return '';

		const filled = Math.min(Math.max(level, 1), 5);
		const empty = 5 - filled;

		return '●'.repeat(filled) + '○'.repeat(empty);
	};

	const getLevelColor = (level?: number) => {
		if (!level) return 'text-neutral-500';

		if (level >= 4) return 'text-green-400';
		if (level >= 3) return 'text-blue-400';
		if (level >= 2) return 'text-yellow-400';
		return 'text-red-400';
	};
</script>

{#if shouldAnimate}
	<div
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.01 : 1.02,
			borderRadius: '24px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.05 : 0.1,
			scale: prefersReducedMotion ? 1.005 : 1.01
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		{...restProps}
	>
		{#if hasCategories}
			<!-- Categorized Layout -->
			<div class="space-y-6">
				{#each Object.entries(groupedTechnologies) as [category, techs]}
					<div class="space-y-3">
						<h3 class="text-lg font-semibold opacity-90 border-b border-current/20 pb-2">
							{category}
						</h3>

						<div class={layouts[layout]}>
							{#each techs as tech}
								<div class="tech-item group">
									{#if layout === 'compact'}
										<span
											class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm hover:bg-white/15 transition-colors duration-200"
										>
											{#if tech.icon}
												<span class="text-lg">{tech.icon}</span>
											{/if}
											{tech.name}
											{#if showLevels && tech.level}
												<span class="text-xs {getLevelColor(tech.level)} font-mono">
													{renderLevelIndicator(tech.level)}
												</span>
											{/if}
										</span>
									{:else}
										<div
											class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
										>
											<div class="flex items-center gap-3">
												{#if tech.icon}
													<span class="text-2xl">{tech.icon}</span>
												{/if}
												<span class="font-medium">{tech.name}</span>
											</div>

											{#if showLevels && tech.level}
												<div class="flex flex-col items-end gap-1">
													<span class="text-xs {getLevelColor(tech.level)} font-mono">
														{renderLevelIndicator(tech.level)}
													</span>
													<span class="text-xs opacity-60">Level {tech.level}</span>
												</div>
											{/if}
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Simple Layout -->
			<div class={layouts[layout]}>
				{#each technologies as tech}
					<div class="tech-item group">
						{#if layout === 'compact'}
							<span
								class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm hover:bg-white/15 transition-colors duration-200"
							>
								{#if tech.icon}
									<span class="text-lg">{tech.icon}</span>
								{/if}
								{tech.name}
								{#if showLevels && tech.level}
									<span class="text-xs {getLevelColor(tech.level)} font-mono">
										{renderLevelIndicator(tech.level)}
									</span>
								{/if}
							</span>
						{:else}
							<div
								class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
							>
								<div class="flex items-center gap-3">
									{#if tech.icon}
										<span class="text-2xl">{tech.icon}</span>
									{/if}
									<span class="font-medium">{tech.name}</span>
								</div>

								{#if showLevels && tech.level}
									<div class="flex flex-col items-end gap-1">
										<span class="text-xs {getLevelColor(tech.level)} font-mono">
											{renderLevelIndicator(tech.level)}
										</span>
										<span class="text-xs opacity-60">Level {tech.level}</span>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}

		<!-- Children content -->
		{#if children}
			<div class="mt-6 pt-6 border-t border-current/20">
				{@render children()}
			</div>
		{/if}
	</div>
{:else}
	<div class={combinedClasses} {...restProps}>
		{#if hasCategories}
			<!-- Categorized Layout -->
			<div class="space-y-6">
				{#each Object.entries(groupedTechnologies) as [category, techs]}
					<div class="space-y-3">
						<h3 class="text-lg font-semibold opacity-90 border-b border-current/20 pb-2">
							{category}
						</h3>

						<div class={layouts[layout]}>
							{#each techs as tech}
								<div class="tech-item group">
									{#if layout === 'compact'}
										<span
											class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm hover:bg-white/15 transition-colors duration-200"
										>
											{#if tech.icon}
												<span class="text-lg">{tech.icon}</span>
											{/if}
											{tech.name}
											{#if showLevels && tech.level}
												<span class="text-xs {getLevelColor(tech.level)} font-mono">
													{renderLevelIndicator(tech.level)}
												</span>
											{/if}
										</span>
									{:else}
										<div
											class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
										>
											<div class="flex items-center gap-3">
												{#if tech.icon}
													<span class="text-2xl">{tech.icon}</span>
												{/if}
												<span class="font-medium">{tech.name}</span>
											</div>

											{#if showLevels && tech.level}
												<div class="flex flex-col items-end gap-1">
													<span class="text-xs {getLevelColor(tech.level)} font-mono">
														{renderLevelIndicator(tech.level)}
													</span>
													<span class="text-xs opacity-60">Level {tech.level}</span>
												</div>
											{/if}
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Simple Layout -->
			<div class={layouts[layout]}>
				{#each technologies as tech}
					<div class="tech-item group">
						{#if layout === 'compact'}
							<span
								class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm hover:bg-white/15 transition-colors duration-200"
							>
								{#if tech.icon}
									<span class="text-lg">{tech.icon}</span>
								{/if}
								{tech.name}
								{#if showLevels && tech.level}
									<span class="text-xs {getLevelColor(tech.level)} font-mono">
										{renderLevelIndicator(tech.level)}
									</span>
								{/if}
							</span>
						{:else}
							<div
								class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
							>
								<div class="flex items-center gap-3">
									{#if tech.icon}
										<span class="text-2xl">{tech.icon}</span>
									{/if}
									<span class="font-medium">{tech.name}</span>
								</div>

								{#if showLevels && tech.level}
									<div class="flex flex-col items-end gap-1">
										<span class="text-xs {getLevelColor(tech.level)} font-mono">
											{renderLevelIndicator(tech.level)}
										</span>
										<span class="text-xs opacity-60">Level {tech.level}</span>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}

		<!-- Children content -->
		{#if children}
			<div class="mt-6 pt-6 border-t border-current/20">
				{@render children()}
			</div>
		{/if}
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.2),
			inset 0 0 20px rgba(48, 209, 88, 0.05);
	}

	/* Glass morphism enhancements */
	div:global(.glass-medium) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	/* Enhanced focus states */
	div:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3);
	}

	/* Tech item hover effects */
	.tech-item {
		transition: transform 200ms ease-out;
	}

	.tech-item:hover {
		transform: translateY(-1px);
	}

	/* Level indicator styling */
	.tech-item span:global([class*='font-mono']) {
		letter-spacing: 0.1em;
	}
</style>
