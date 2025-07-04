<script lang="ts">
	import { onMount } from 'svelte';
	import { brandColors } from '../tokens';

	interface Props {
		text: string;
		variant?: 'matrix' | 'neon' | 'cyberpunk' | 'hologram' | 'glitch' | 'terminal';
		size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		animated?: boolean;
		glow?: boolean;
		scanlines?: boolean;
		class?: string;
	}

	const {
		text,
		variant = 'matrix',
		size = 'md',
		animated = true,
		glow = true,
		scanlines = false,
		class: className = ''
	}: Props = $props();

	let containerRef: HTMLDivElement;
	let textRef: HTMLSpanElement;

	const variants = {
		matrix: {
			color: brandColors.terminal.green,
			textShadow: `0 0 10px ${brandColors.terminal.green}, 0 0 20px ${brandColors.terminal.green}, 0 0 30px ${brandColors.terminal.green}`,
			background: brandColors.gradients.matrix
		},
		neon: {
			color: brandColors.terminal.cyan,
			textShadow: `0 0 5px ${brandColors.terminal.cyan}, 0 0 10px ${brandColors.terminal.cyan}, 0 0 15px ${brandColors.terminal.cyan}, 0 0 20px ${brandColors.terminal.cyan}`,
			background: 'transparent'
		},
		cyberpunk: {
			color: brandColors.terminal.neon,
			textShadow: `0 0 10px ${brandColors.terminal.neon}, 0 0 20px ${brandColors.terminal.neon}`,
			background: brandColors.gradients.cyberpunk
		},
		hologram: {
			color: 'transparent',
			textShadow: 'none',
			background: brandColors.gradients.hologram,
			backgroundClip: 'text',
			webkitBackgroundClip: 'text'
		},
		glitch: {
			color: brandColors.text.primary,
			textShadow: `2px 0 ${brandColors.terminal.neon}, -2px 0 ${brandColors.terminal.cyan}`,
			background: 'transparent'
		},
		terminal: {
			color: brandColors.terminal.green,
			textShadow: `0 0 5px ${brandColors.terminal.green}`,
			background: 'transparent'
		}
	};

	const sizes = {
		sm: '0.875rem',
		md: '1rem',
		lg: '1.25rem',
		xl: '1.5rem',
		'2xl': '2rem'
	};

	let displayText = $state('');
	let currentIndex = $state(0);

	onMount(() => {
		if (animated && variant === 'matrix') {
			typewriterEffect();
		} else {
			displayText = text;
		}

		if (variant === 'glitch' && animated) {
			startGlitchEffect();
		}
	});

	function typewriterEffect() {
		const interval = setInterval(() => {
			if (currentIndex < text.length) {
				displayText += text[currentIndex];
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, 50);
	}

	function startGlitchEffect() {
		setInterval(() => {
			if (Math.random() < 0.1) {
				glitchText();
			}
		}, 100);
	}

	function glitchText() {
		if (!textRef) return;
		
		const originalText = textRef.textContent;
		const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
		let glitched = '';
		
		for (let i = 0; i < text.length; i++) {
			if (Math.random() < 0.1) {
				glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
			} else {
				glitched += text[i];
			}
		}
		
		textRef.textContent = glitched;
		
		setTimeout(() => {
			textRef.textContent = originalText;
		}, 50);
	}

	const currentVariant = $derived(variants[variant]);
	const currentSize = $derived(sizes[size]);
</script>

<div
	bind:this={containerRef}
	class="retro-text-container {className}"
	class:scanlines
	style="
		position: relative;
		display: inline-block;
		font-family: 'PP Supply Mono', monospace;
		font-size: {currentSize};
		font-weight: 500;
		line-height: 1.2;
		overflow: hidden;
	"
>
	<span
		bind:this={textRef}
		class="retro-text"
		class:glow
		class:animated
		style="
			color: {currentVariant.color};
			text-shadow: {glow ? currentVariant.textShadow : 'none'};
			background: {currentVariant.background};
			background-clip: {variant === 'hologram' ? 'text' : 'border-box'};
			-webkit-background-clip: {variant === 'hologram' ? 'text' : 'border-box'};
			position: relative;
			z-index: 2;
		"
	>
		{animated && variant === 'matrix' ? displayText : text}
	</span>

	{#if variant === 'matrix' && animated}
		<span class="cursor" style="
			color: {brandColors.terminal.green};
			animation: blink 1s infinite;
			margin-left: 2px;
		">
			▌
		</span>
	{/if}

	{#if scanlines}
		<div class="scanlines" style="
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			pointer-events: none;
			background: repeating-linear-gradient(
				0deg,
				transparent,
				transparent 2px,
				rgba(0, 255, 65, 0.03) 2px,
				rgba(0, 255, 65, 0.03) 4px
			);
			animation: scanline-move 2s linear infinite;
		"></div>
	{/if}

	{#if variant === 'cyberpunk'}
		<div class="cyberpunk-glow" style="
			position: absolute;
			top: -2px;
			left: -2px;
			right: -2px;
			bottom: -2px;
			background: {brandColors.gradients.cyberpunk};
			filter: blur(8px);
			opacity: 0.3;
			z-index: 1;
			border-radius: 4px;
		"></div>
	{/if}

	{#if variant === 'hologram'}
		<div class="hologram-effect" style="
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: {brandColors.gradients.hologram};
			opacity: 0.6;
			mix-blend-mode: overlay;
			animation: hologram-flicker 3s ease-in-out infinite;
		"></div>
	{/if}
</div>

<style>
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	@keyframes scanline-move {
		0% { transform: translateY(-100%); }
		100% { transform: translateY(100vh); }
	}

	@keyframes hologram-flicker {
		0%, 100% { opacity: 0.6; }
		50% { opacity: 0.3; }
	}

	.retro-text.animated {
		transition: all 0.3s ease;
	}

	.retro-text.glow:hover {
		filter: brightness(1.2);
		transform: scale(1.02);
	}

	.retro-text-container.scanlines {
		overflow: hidden;
	}

	/* Glitch effect */
	.retro-text-container:has(.retro-text[style*="glitch"]) {
		animation: glitch-container 0.3s ease-in-out infinite alternate;
	}

	@keyframes glitch-container {
		0% { transform: translate(0); }
		20% { transform: translate(-1px, 1px); }
		40% { transform: translate(-1px, -1px); }
		60% { transform: translate(1px, 1px); }
		80% { transform: translate(1px, -1px); }
		100% { transform: translate(0); }
	}
</style>