<script lang="ts">
	import { onMount } from 'svelte';
	import { brandColors } from '../tokens';
	import RetroText from './RetroText.svelte';

	interface Props {
		title: string;
		description: string;
		technologies: string[];
		imageUrl?: string;
		demoUrl?: string;
		githubUrl?: string;
		variant?: 'matrix' | 'cyberpunk' | 'neon' | 'hologram';
		animated?: boolean;
		liquidEffect?: boolean;
		class?: string;
	}

	const {
		title,
		description,
		technologies,
		imageUrl = '',
		demoUrl = '',
		githubUrl = '',
		variant = 'matrix',
		animated = true,
		liquidEffect = true,
		class: className = ''
	}: Props = $props();

	let cardRef: HTMLDivElement;
	let isHovered = $state(false);
	let mouseX = $state(0);
	let mouseY = $state(0);

	const variants = {
		matrix: {
			primary: brandColors.terminal.green,
			secondary: brandColors.terminal.matrix,
			glow: brandColors.terminal.green
		},
		cyberpunk: {
			primary: brandColors.terminal.neon,
			secondary: brandColors.terminal.purple,
			glow: brandColors.terminal.neon
		},
		neon: {
			primary: brandColors.terminal.cyan,
			secondary: brandColors.terminal.blue,
			glow: brandColors.terminal.cyan
		},
		hologram: {
			primary: brandColors.terminal.magenta,
			secondary: brandColors.terminal.cyan,
			glow: brandColors.terminal.magenta
		}
	};

	const currentVariant = $derived(variants[variant]);

	onMount(() => {
		if (liquidEffect && cardRef) {
			const handleMouseMove = (e: MouseEvent) => {
				const rect = cardRef.getBoundingClientRect();
				mouseX = (e.clientX - rect.left) / rect.width;
				mouseY = (e.clientY - rect.top) / rect.height;
			};

			cardRef.addEventListener('mousemove', handleMouseMove);
			return () => cardRef.removeEventListener('mousemove', handleMouseMove);
		}
	});

	function handleAction(url: string) {
		if (url) window.open(url, '_blank');
	}
</script>

<div
	bind:this={cardRef}
	class="portfolio-card {className}"
	class:hovered={isHovered}
	class:liquid-effect={liquidEffect}
	role="button"
	tabindex="0"
	onmouseenter={() => isHovered = true}
	onmouseleave={() => isHovered = false}
	style="
		position: relative;
		background: {brandColors.glass.background};
		backdrop-filter: blur(20px) saturate(180%);
		border: 1px solid {isHovered ? currentVariant.primary + '60' : brandColors.glass.border};
		border-radius: 16px;
		padding: 0;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		cursor: pointer;
		transform-style: preserve-3d;
		min-height: 400px;
		display: flex;
		flex-direction: column;
		box-shadow: {isHovered ? `0 20px 60px ${currentVariant.glow}20, 0 0 0 1px ${currentVariant.primary}40` : '0 8px 32px rgba(0, 0, 0, 0.3)'};
	"
>
	<!-- Image/Preview Section -->
	<div class="card-image" style="
		height: 200px;
		background: {imageUrl ? `url(${imageUrl})` : brandColors.gradients.terminal};
		background-size: cover;
		background-position: center;
		position: relative;
		border-bottom: 1px solid {brandColors.glass.border};
	">
		{#if !imageUrl}
			<div style="
				position: absolute;
				inset: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				background: {currentVariant.primary}10;
			">
				<RetroText 
					text={title} 
					variant={variant} 
					size="xl" 
					animated={animated && isHovered}
				/>
			</div>
		{/if}
		
		<!-- Hover overlay -->
		<div class="image-overlay" style="
			position: absolute;
			inset: 0;
			background: {currentVariant.primary}20;
			opacity: {isHovered ? '1' : '0'};
			transition: opacity 0.3s ease;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 16px;
		">
			{#if demoUrl}
				<button
					onclick={(e) => { e.stopPropagation(); handleAction(demoUrl); }}
					style="
						background: {currentVariant.primary};
						border: none;
						border-radius: 8px;
						padding: 12px 20px;
						color: {brandColors.backgrounds.primary};
						font-family: 'PP Supply Mono', monospace;
						font-size: 14px;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.3s ease;
						text-shadow: none;
					"
					onmouseenter={(e) => {
						const target = e.target as HTMLElement;
						target.style.transform = 'scale(1.05)';
						target.style.boxShadow = `0 0 20px ${currentVariant.glow}`;
					}}
					onmouseleave={(e) => {
						const target = e.target as HTMLElement;
						target.style.transform = 'scale(1)';
						target.style.boxShadow = 'none';
					}}
				>
					View Demo
				</button>
			{/if}
			
			{#if githubUrl}
				<button
					onclick={(e) => { e.stopPropagation(); handleAction(githubUrl); }}
					style="
						background: transparent;
						border: 1px solid {currentVariant.primary};
						border-radius: 8px;
						padding: 12px 20px;
						color: {currentVariant.primary};
						font-family: 'PP Supply Mono', monospace;
						font-size: 14px;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.3s ease;
					"
					onmouseenter={(e) => {
						const target = e.target as HTMLElement;
						target.style.background = currentVariant.primary;
						target.style.color = brandColors.backgrounds.primary;
						target.style.transform = 'scale(1.05)';
					}}
					onmouseleave={(e) => {
						const target = e.target as HTMLElement;
						target.style.background = 'transparent';
						target.style.color = currentVariant.primary;
						target.style.transform = 'scale(1)';
					}}
				>
					GitHub
				</button>
			{/if}
		</div>
	</div>

	<!-- Content Section -->
	<div class="card-content" style="
		padding: 24px;
		flex: 1;
		display: flex;
		flex-direction: column;
	">
		<h3 style="
			color: {currentVariant.primary};
			font-family: 'PP Supply Mono', monospace;
			font-size: 20px;
			font-weight: 700;
			margin: 0 0 12px 0;
			text-shadow: {isHovered ? `0 0 10px ${currentVariant.glow}` : 'none'};
			transition: text-shadow 0.3s ease;
		">
			{title}
		</h3>
		
		<p style="
			color: {brandColors.text.secondary};
			line-height: 1.6;
			margin: 0 0 20px 0;
			flex: 1;
		">
			{description}
		</p>
		
		<!-- Technologies -->
		<div class="technologies" style="
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			margin-bottom: 20px;
		">
			{#each technologies as tech}
				<span class="tech-tag" style="
					background: {currentVariant.secondary}20;
					border: 1px solid {currentVariant.secondary}40;
					border-radius: 6px;
					padding: 4px 12px;
					font-family: 'PP Supply Mono', monospace;
					font-size: 12px;
					color: {currentVariant.secondary};
					transition: all 0.3s ease;
				">
					{tech}
				</span>
			{/each}
		</div>
		
		<!-- Status indicator -->
		<div class="status" style="
			display: flex;
			align-items: center;
			gap: 8px;
			font-family: 'PP Supply Mono', monospace;
			font-size: 12px;
			color: {brandColors.text.muted};
		">
			<div style="
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background: {currentVariant.primary};
				box-shadow: 0 0 10px {currentVariant.glow};
				animation: pulse 2s ease-in-out infinite;
			"></div>
			SYSTEM ACTIVE
		</div>
	</div>

	<!-- Liquid effect overlay -->
	{#if liquidEffect && isHovered}
		<div class="liquid-overlay" style="
			position: absolute;
			inset: 0;
			background: radial-gradient(
				circle at {mouseX * 100}% {mouseY * 100}%, 
				{currentVariant.primary}15 0%, 
				transparent 50%
			);
			pointer-events: none;
			transition: opacity 0.3s ease;
			border-radius: 16px;
		"></div>
	{/if}

	<!-- Scanning lines effect -->
	{#if animated && isHovered}
		<div class="scan-lines" style="
			position: absolute;
			inset: 0;
			background: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				{currentVariant.primary}08 2px,
				{currentVariant.primary}08 4px
			);
			pointer-events: none;
			opacity: 0.5;
			animation: scan-move 2s linear infinite;
			border-radius: 16px;
		"></div>
	{/if}

	<!-- Glow border effect -->
	{#if isHovered}
		<div class="glow-border" style="
			position: absolute;
			inset: -2px;
			background: linear-gradient(
				45deg,
				{currentVariant.primary},
				{currentVariant.secondary},
				{currentVariant.primary}
			);
			border-radius: 18px;
			z-index: -1;
			opacity: 0.3;
			filter: blur(4px);
			animation: glow-rotate 4s linear infinite;
		"></div>
	{/if}
</div>

<style>
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.1); }
	}

	@keyframes scan-move {
		0% { transform: translateY(-100%); }
		100% { transform: translateY(100%); }
	}

	@keyframes glow-rotate {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.portfolio-card.liquid-effect:hover {
		transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
	}

	.tech-tag:hover {
		background: var(--tech-color) !important;
		color: var(--bg-color) !important;
		transform: scale(1.05);
	}

	.portfolio-card:active {
		transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px) scale(0.98);
	}
</style>