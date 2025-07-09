<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { gsap } from 'gsap';
	import LiquidGlass from './LiquidGlass.svelte';

	// Props
	export let title: string = 'NEURAL_INTERFACE_v3.0';
	export let theme: 'liquid' | 'hacker' | 'retro' = 'liquid';
	export let enableLiquidFlow: boolean = true;
	export let showControls: boolean = true;
	export let expandable: boolean = true;
	export let glowEffect: boolean = true;
	export let customClass: string = '';
	export let width: string = 'auto';
	export let height: string = 'auto';
	export let minHeight: string = '200px';

	// Terminal state
	let isExpanded = false;
	let isMinimized = false;
	let terminalElement: HTMLElement;
	let headerElement: HTMLElement;
	let bodyElement: HTMLElement;

	const dispatch = createEventDispatcher();

	// Theme classes
	$: themeClass = {
		liquid: 'liquid-terminal-theme',
		hacker: 'hacker-terminal-theme',
		retro: 'retro-terminal-theme'
	}[theme];

	$: containerStyles = [
		width !== 'auto' ? `width: ${width}` : '',
		height !== 'auto' ? `height: ${height}` : '',
		minHeight ? `min-height: ${minHeight}` : ''
	]
		.filter(Boolean)
		.join('; ');

	onMount(() => {
		if (!terminalElement) return;

		const ctx = gsap.context(() => {
			// Initial liquid flow animation
			if (enableLiquidFlow) {
				setupLiquidFlowAnimation();
			}

			// Setup expand/collapse animations
			if (expandable) {
				setupExpandAnimation();
			}

			// Glow pulse animation
			if (glowEffect) {
				setupGlowAnimation();
			}
		}, terminalElement);

		return () => ctx.revert();
	});

	function setupLiquidFlowAnimation() {
		if (!terminalElement) return;

		// Create flowing liquid effect on border
		gsap.to(terminalElement, {
			borderColor: 'rgba(0, 212, 170, 0.6)',
			boxShadow: '0 0 30px rgba(0, 212, 170, 0.3), inset 0 0 20px rgba(0, 212, 170, 0.1)',
			duration: 2,
			ease: 'sine.inOut',
			yoyo: true,
			repeat: -1
		});
	}

	function setupExpandAnimation() {
		if (!bodyElement) return;

		gsap.set(bodyElement, {
			height: isExpanded ? 'auto' : minHeight
		});
	}

	function setupGlowAnimation() {
		if (!terminalElement) return;

		gsap.to(terminalElement, {
			filter: 'brightness(1.05) saturate(1.1)',
			duration: 3,
			ease: 'sine.inOut',
			yoyo: true,
			repeat: -1
		});
	}

	function toggleExpand() {
		if (!expandable || !bodyElement) return;

		isExpanded = !isExpanded;

		gsap.to(bodyElement, {
			height: isExpanded ? 'auto' : minHeight,
			duration: 0.5,
			ease: 'power2.inOut'
		});

		gsap.to(terminalElement, {
			borderRadius: isExpanded ? '32px' : '20px',
			scale: isExpanded ? 1.02 : 1,
			duration: 0.5,
			ease: 'back.out(1.7)'
		});

		dispatch('expand', { expanded: isExpanded });
	}

	function minimize() {
		isMinimized = !isMinimized;

		gsap.to(terminalElement, {
			scale: isMinimized ? 0.8 : 1,
			opacity: isMinimized ? 0.7 : 1,
			y: isMinimized ? 20 : 0,
			duration: 0.3,
			ease: 'power2.out'
		});

		dispatch('minimize', { minimized: isMinimized });
	}

	function close() {
		gsap.to(terminalElement, {
			scale: 0,
			opacity: 0,
			rotation: 5,
			duration: 0.4,
			ease: 'back.in(1.7)',
			onComplete: () => {
				dispatch('close');
			}
		});
	}

	function handleTerminalClick() {
		dispatch('focus');
	}
</script>

<LiquidGlass
	bind:this={terminalElement}
	variant="terminal"
	effect="jelly"
	{glowEffect}
	terminalGlow={glowEffect}
	customClass="liquid-terminal-container {themeClass} {customClass}"
	style={containerStyles}
	on:click={handleTerminalClick}
>
	<!-- Terminal Header -->
	{#if showControls}
		<div bind:this={headerElement} class="terminal-header">
			<div class="terminal-controls">
				<button class="terminal-control close" on:click|stopPropagation={close} aria-label="Close terminal"></button>
				<button class="terminal-control minimize" on:click|stopPropagation={minimize} aria-label="Minimize terminal"
				></button>
				{#if expandable}
					<button
						class="terminal-control maximize"
						on:click|stopPropagation={toggleExpand}
						aria-label={isExpanded ? 'Restore terminal' : 'Maximize terminal'}
					></button>
				{/if}
			</div>

			<div class="terminal-title">
				{title}
			</div>

			<div class="terminal-status">
				<div class="status-indicator {theme}"></div>
			</div>
		</div>
	{/if}

	<!-- Terminal Body -->
	<div bind:this={bodyElement} class="terminal-body">
		<slot>
			<!-- Default terminal content -->
			<div class="terminal-line">
				<span class="terminal-prompt">user@hackers-brand:~$</span>
				<span class="terminal-cursor">_</span>
			</div>
		</slot>
	</div>

	<!-- Liquid Flow Effect Overlay -->
	{#if enableLiquidFlow}
		<div class="liquid-flow-overlay"></div>
	{/if}
</LiquidGlass>

<style>
	:global(.liquid-terminal-container) {
		font-family: 'PP Supply Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
		color: #f5f5f7;
		overflow: hidden;
		position: relative;
	}

	/* Terminal Header */
	.terminal-header {
		display: flex;
		align-items: center;
		padding: 12px 16px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		position: relative;
		z-index: 4;
	}

	.terminal-controls {
		display: flex;
		gap: 8px;
	}

	.terminal-control {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		position: relative;
		overflow: hidden;
	}

	.terminal-control::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.2);
		border-radius: inherit;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.terminal-control:hover::before {
		opacity: 1;
	}

	.terminal-control:active {
		transform: scale(0.9);
	}

	.terminal-control.close {
		background: #ff5f57;
	}

	.terminal-control.minimize {
		background: #ffbd2e;
	}

	.terminal-control.maximize {
		background: #28ca42;
	}

	.terminal-title {
		flex: 1;
		text-align: center;
		font-size: 13px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
		letter-spacing: 0.5px;
	}

	.terminal-status {
		display: flex;
		align-items: center;
	}

	.status-indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		animation: pulse 2s ease-in-out infinite;
	}

	.status-indicator.liquid {
		background: #00d4aa;
		box-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
	}

	.status-indicator.hacker {
		background: #30d158;
		box-shadow: 0 0 10px rgba(48, 209, 88, 0.5);
	}

	.status-indicator.retro {
		background: #ffd60a;
		box-shadow: 0 0 10px rgba(255, 214, 10, 0.5);
	}

	/* Terminal Body */
	.terminal-body {
		padding: 16px;
		position: relative;
		z-index: 3;
		overflow-y: auto;
	}

	.terminal-line {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		line-height: 1.4;
	}

	.terminal-prompt {
		color: var(--terminal-green);
		user-select: none;
		margin-right: 8px;
	}

	.terminal-cursor {
		color: var(--terminal-green);
		animation: blink 1s step-end infinite;
	}

	/* Liquid Flow Overlay */
	.liquid-flow-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			45deg,
			transparent 0%,
			rgba(0, 212, 170, 0.05) 25%,
			transparent 50%,
			rgba(0, 255, 255, 0.03) 75%,
			transparent 100%
		);
		background-size: 200% 200%;
		animation: liquid-flow 4s ease-in-out infinite;
		border-radius: inherit;
		pointer-events: none;
		z-index: 1;
	}

	/* Theme Variants */
	:global(.liquid-terminal-theme) {
		--terminal-primary: #00d4aa;
		--terminal-secondary: #00ffff;
	}

	:global(.hacker-terminal-theme) {
		--terminal-primary: #30d158;
		--terminal-secondary: #007aff;
		background: linear-gradient(135deg, rgba(29, 29, 31, 0.9) 0%, rgba(0, 48, 35, 0.8) 100%);
	}

	:global(.retro-terminal-theme) {
		--terminal-primary: #ffd60a;
		--terminal-secondary: #ff9f0a;
		background: linear-gradient(135deg, rgba(29, 29, 31, 0.9) 0%, rgba(48, 35, 0, 0.8) 100%);
	}

	/* Animations */
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.1);
		}
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

	@keyframes liquid-flow {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.terminal-header {
			padding: 8px 12px;
		}

		.terminal-body {
			padding: 12px;
		}

		.terminal-title {
			font-size: 12px;
		}
	}
</style>
