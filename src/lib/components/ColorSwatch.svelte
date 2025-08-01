<script lang="ts">
	import { cn } from '../utils/index.js';
	import { springPop, jellyHover } from '../motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface ColorSwatchData {
		name: string;
		hex: string;
		category: string;
		description?: string;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
		color: ColorSwatchData;
		layout: 'grid' | 'list';
		interactive: boolean;
		showHex: boolean;
		animate: boolean;
		copiedColor: string | null;
		colorIndex: number;
		isTerminal: boolean;
		onColorClick: (color: ColorSwatchData) => void;
		class?: string;
	}

	const {
		color,
		layout,
		interactive,
		showHex,
		animate,
		copiedColor,
		colorIndex,
		isTerminal,
		onColorClick,
		class: className = '',
		...restProps
	}: Props = $props();

	const getColorClasses = () => {
		return cn(
			'group relative overflow-hidden transition-all duration-300',
			layout === 'grid' ? 'aspect-square rounded-lg' : 'flex items-center gap-3 p-3 rounded-lg',
			interactive && 'cursor-pointer hover:scale-105',
			isTerminal ? 'border border-terminal-green/20' : 'border border-bubble-tea-purple/20',
			className
		);
	};

	const getSwatchStyle = () => {
		return layout === 'grid'
			? `background-color: ${color.hex}`
			: `background-color: ${color.hex}; width: 2rem; height: 2rem; border-radius: 0.375rem`;
	};

	const handleClick = () => {
		onColorClick(color);
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onColorClick(color);
		}
	};

	// Animation props - conditionally applied
	const motionProps = animate
		? {
				jellyHover: {
					enabled: interactive,
					duration: 200,
					scale: 1.05,
					borderRadius: '8px'
				},
				springPop: {
					duration: 150,
					delay: colorIndex * 20
				}
			}
		: {};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions a11y_no_noninteractive_tabindex -->
<div
	class={getColorClasses()}
	style={layout === 'grid' ? getSwatchStyle() : ''}
	onclick={handleClick}
	onkeydown={handleKeydown}
	role={interactive ? 'button' : undefined}
	tabindex={interactive ? 0 : -1}
	aria-label={`Copy ${color.name} color ${color.hex}`}
	use:jellyHover={animate ? motionProps.jellyHover : undefined}
	in:springPop={animate ? motionProps.springPop : undefined}
	{...restProps}
>
	{#if layout === 'list'}
		<div style={getSwatchStyle()}></div>
	{/if}

	{#if layout === 'grid'}
		<!-- Grid overlay content -->
		<div
			class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-center p-2"
		>
			<span class="text-white text-xs font-medium mb-1">{color.name}</span>
			{#if showHex}
				<span class="text-white/80 text-xs font-mono">{color.hex}</span>
			{/if}
		</div>
	{:else}
		<!-- List content -->
		<div class="flex-1">
			<div class="flex items-center justify-between">
				<span class="font-medium text-white">{color.name}</span>
				{#if showHex}
					<span class="font-mono text-sm text-white/60">{color.hex}</span>
				{/if}
			</div>
			{#if color.description}
				<p class="text-sm text-white/60 mt-1">{color.description}</p>
			{/if}
		</div>
	{/if}

	<!-- Copied indicator -->
	{#if copiedColor === color.hex}
		<div class="absolute inset-0 bg-green-500/20 flex items-center justify-center">
			<span class="text-green-400 text-xs font-medium">Copied!</span>
		</div>
	{/if}
</div>

<style>
	/* Ensure color swatches have proper contrast for accessibility */
	.group:focus-visible {
		outline: 2px solid rgba(59, 130, 246, 0.5);
		outline-offset: 2px;
	}

	/* Color transition animations */
	.group {
		will-change: transform, box-shadow;
	}

	/* Responsive typography adjustments */
	@media (max-width: 640px) {
		.group span {
			font-size: 0.75rem;
		}
	}
</style>
