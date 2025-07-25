<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		text?: string;
		variant?: 'bitmap' | 'terminal' | 'vintage' | 'commodore' | 'apple2' | 'atari';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
		color?: 'green' | 'amber' | 'blue' | 'white' | 'red' | 'cyan' | 'magenta';
		glow?: boolean;
		scanlines?: boolean;
		flicker?: boolean;
		animate?: boolean;
		typewriter?: boolean;
		speed?: number; // Typewriter speed in ms
		class?: string;
		children?: any;
	}

	const {
		text = '',
		variant = 'bitmap',
		size = 'md',
		color = 'green',
		glow = true,
		scanlines = false,
		flicker = false,
		animate = false,
		typewriter = false,
		speed = 50,
		class: className = '',
		children
	}: Props = $props();

	let displayText = $state('');
	let currentIndex = $state(0);
	let containerRef: HTMLElement;

	// Bitmap font configurations
	const bitmapFonts = {
		bitmap: {
			fontFamily: 'monospace',
			fontWeight: '400',
			letterSpacing: '0.1em',
			lineHeight: '1.2'
		},
		terminal: {
			fontFamily: '"Courier New", "Monaco", "Menlo", monospace',
			fontWeight: '700',
			letterSpacing: '0.05em',
			lineHeight: '1.1'
		},
		vintage: {
			fontFamily: '"SF Mono", "Monaco", "Inconsolata", monospace',
			fontWeight: '600',
			letterSpacing: '0.08em',
			lineHeight: '1.15'
		},
		commodore: {
			fontFamily: 'monospace',
			fontWeight: '800',
			letterSpacing: '0.12em',
			lineHeight: '1.0',
			textTransform: 'uppercase'
		},
		apple2: {
			fontFamily: '"Courier New", monospace',
			fontWeight: '500',
			letterSpacing: '0.15em',
			lineHeight: '1.1',
			textTransform: 'uppercase'
		},
		atari: {
			fontFamily: 'monospace',
			fontWeight: '600',
			letterSpacing: '0.2em',
			lineHeight: '1.0',
			textTransform: 'uppercase'
		}
	};

	// Color configurations
	const colors = {
		green: {
			color: '#00ff00',
			shadowColor: '#00ff0080'
		},
		amber: {
			color: '#ffb000',
			shadowColor: '#ffb00080'
		},
		blue: {
			color: '#0080ff',
			shadowColor: '#0080ff80'
		},
		white: {
			color: '#ffffff',
			shadowColor: '#ffffff40'
		},
		red: {
			color: '#ff0040',
			shadowColor: '#ff004080'
		},
		cyan: {
			color: '#00ffff',
			shadowColor: '#00ffff80'
		},
		magenta: {
			color: '#ff00ff',
			shadowColor: '#ff00ff80'
		}
	};

	// Size configurations
	const sizes = {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem'
	};

	// Component styles
	const containerClasses = cn(
		'retro-text inline-block relative',
		{
			'animate-flicker': flicker,
			scanlines: scanlines
		},
		className
	);

	// Typewriter effect
	function startTypewriter() {
		if (!typewriter || !text) return;

		displayText = '';
		currentIndex = 0;

		const interval = setInterval(() => {
			if (currentIndex < text().length) {
				displayText += text()[currentIndex];
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, speed);
	}

	// Initialize display text
	$effect(() => {
		if (typewriter) {
			startTypewriter();
		} else {
			displayText = text;
		}
	});

	// CSS custom properties for dynamic styling
	$effect(() => {
		if (containerRef) {
			const fontConfig = bitmapFonts()[variant];
			const colorConfig = colors()[color];

			containerRef.style.setProperty('--retro-font-family', fontConfig.fontFamily);
			containerRef.style.setProperty('--retro-font-weight', fontConfig.fontWeight);
			containerRef.style.setProperty('--retro-letter-spacing', fontConfig.letterSpacing);
			containerRef.style.setProperty('--retro-line-height', fontConfig.lineHeight);
			containerRef.style.setProperty('--retro-font-size', sizes()[size]);
			containerRef.style.setProperty('--retro-color', colorConfig.color);
			containerRef.style.setProperty('--retro-shadow-color', colorConfig.shadowColor);
			containerRef.style.setProperty('--retro-text-transform', (fontConfig as any).textTransform || 'none');
		}
	});

	// Bitmap character simulation for certain variants
	function renderBitmapCharacter(char: string): string {
		if (variant === 'commodore' || variant === 'atari') {
			// Simple bitmap-style character rendering
			const bitmapChars: Record<string, string> = {
				' ': '&nbsp;',
				A: '█▀█<br>█▀█<br>█&nbsp;█',
				E: '███<br>██&nbsp;<br>███',
				I: '███<br>&nbsp;█&nbsp;<br>███',
				O: '███<br>█&nbsp;█<br>███',
				U: '█&nbsp;█<br>█&nbsp;█<br>███'
			};

			return bitmapChars[char.toUpperCase()] || char;
		}
		return char;
	}

	onMount(() => {
		if (animate && containerRef) {
			containerRef.style.opacity = '0';
			setTimeout(() => {
				containerRef.style.transition = 'opacity 0.5s ease-in-out';
				containerRef.style.opacity = '1';
			}, 100);
		}
	});
</script>

<span bind:this={containerRef} class={containerClasses} aria-label={text}>
	{#if children}
		{@render children()}
	{:else if variant === 'commodore' || variant === 'atari'}
		<!-- Bitmap rendering for specific variants -->
		{#each displayText.split('') as char (char.id || char)}
			<span class="bitmap-char" data-char={char}>
				{@html renderBitmapCharacter(char)}
			</span>
		{/each}
	{:else}
		<!-- Standard text rendering -->
		{displayText}
		{#if typewriter && currentIndex < text().length}
			<span class="cursor">█</span>
		{/if}
	{/if}
</span>

<style>
	.retro-text {
		font-family: var(--retro-font-family);
		font-weight: var(--retro-font-weight);
		letter-spacing: var(--retro-letter-spacing);
		line-height: var(--retro-line-height);
		font-size: var(--retro-font-size);
		color: var(--retro-color);
		text-transform: var(--retro-text-transform);
		font-variant-ligatures: none;
		font-feature-settings: normal;
		-webkit-font-smoothing: none;
		-moz-osx-font-smoothing: auto;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}

	/* Glow effect */
	.retro-text {
		text-shadow:
			0 0 5px var(--retro-shadow-color),
			0 0 10px var(--retro-shadow-color),
			0 0 15px var(--retro-shadow-color);
	}

	/* Scanlines overlay */
	.retro-text.scanlines::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.1) 50%);
		background-size: 100% 2px;
		pointer-events: none;
		z-index: 1;
	}

	/* Flicker animation */
	@keyframes flicker {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
		75% {
			opacity: 0.9;
		}
	}

	.animate-flicker {
		animation: flicker 0.15s infinite linear;
	}

	/* Typewriter cursor */
	.cursor {
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	/* Bitmap character styling */
	.bitmap-char {
		display: inline-block;
		font-size: 0.5em;
		line-height: 0.8;
		vertical-align: top;
		white-space: pre;
		font-family: monospace;
	}

	/* Vintage CRT effects */
	.retro-text {
		/* Slight chromatic aberration */
		filter: drop-shadow(1px 0 0 rgba(255, 0, 0, 0.1)) drop-shadow(-1px 0 0 rgba(0, 255, 255, 0.1));
	}

	/* Variant-specific enhancements */
	:global(.retro-text[data-variant='commodore']) {
		background: linear-gradient(90deg, var(--retro-color) 0%, var(--retro-color) 100%);
		-webkit-background-clip: text;
		background-clip: text;
	}

	:global(.retro-text[data-variant='apple2']) {
		text-shadow:
			1px 1px 0 rgba(0, 0, 0, 0.5),
			0 0 10px var(--retro-shadow-color);
	}

	:global(.retro-text[data-variant='atari']) {
		border: 1px solid var(--retro-color);
		padding: 0.25em 0.5em;
		background: rgba(0, 0, 0, 0.8);
		box-shadow: inset 0 0 10px var(--retro-shadow-color);
	}

	/* High contrast mode adjustments */
	@media (prefers-contrast: high) {
		.retro-text {
			text-shadow: none;
			filter: none;
		}
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.animate-flicker,
		.cursor {
			animation: none;
		}
	}

	/* Dark mode adjustments */
	@media (prefers-color-scheme: dark) {
		.retro-text.scanlines::before {
			background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.05) 50%);
		}
	}
</style>
