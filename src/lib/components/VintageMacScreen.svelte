<script lang="ts">
	import { onMount } from 'svelte';
	import { brandColors } from '$lib/tokens';
	import RetroText from './RetroText.svelte';

	interface Props {
		content?: string;
		variant?: 'classic' | 'se30' | 'plus' | 'modern-retro';
		animated?: boolean;
		scanlines?: boolean;
		crtEffect?: boolean;
		glowIntensity?: number;
		textColor?: string;
		backgroundColor?: string;
		class?: string;
	}

	const {
		content = 'Welcome to Macintosh\n\nSystem 7.0\n\n> Loading portfolio...\n> Initializing design system...\n> Ready.',
		variant = 'classic',
		animated = true,
		scanlines = true,
		crtEffect = true,
		glowIntensity = 0.8,
		textColor = '#00ff41',
		backgroundColor = '#000000',
		class: className = ''
	}: Props = $props();

	let screenRef: HTMLDivElement;
	let contentRef: HTMLDivElement;
	let displayContent = $state('');
	let currentIndex = $state(0);

	const variants = {
		classic: {
			screenRatio: '4:3',
			bezelColor: '#f0f0f0',
			screenColor: '#ffffff',
			textColor: '#000000',
			width: '400px',
			height: '300px'
		},
		se30: {
			screenRatio: '4:3',
			bezelColor: '#e8e8e8',
			screenColor: '#000000',
			textColor: '#00ff41',
			width: '480px',
			height: '360px'
		},
		plus: {
			screenRatio: '4:3',
			bezelColor: '#f5f5f5',
			screenColor: '#000000',
			textColor: '#00ff41',
			width: '420px',
			height: '315px'
		},
		'modern-retro': {
			screenRatio: '16:10',
			bezelColor: '#2a2a2a',
			screenColor: '#000000',
			textColor: '#00ff41',
			width: '640px',
			height: '400px'
		}
	};

	const currentVariant = $derived(variants[variant]);

	onMount(() => {
		if (animated) {
			typewriterEffect();
		} else {
			displayContent = content;
		}

		if (crtEffect && screenRef) {
			addCRTEffect();
		}
	});

	function typewriterEffect() {
		const interval = setInterval(() => {
			if (currentIndex < content.length) {
				displayContent += content[currentIndex];
				currentIndex++;
				
				// Auto-scroll to bottom
				if (contentRef) {
					contentRef.scrollTop = contentRef.scrollHeight;
				}
			} else {
				clearInterval(interval);
			}
		}, 50 + Math.random() * 100);
	}

	function addCRTEffect() {
		if (!screenRef) return;

		// Add subtle flicker effect
		setInterval(() => {
			if (Math.random() < 0.05) {
				screenRef.style.filter = `
					brightness(${0.95 + Math.random() * 0.1}) 
					contrast(${0.98 + Math.random() * 0.04})
					hue-rotate(${Math.random() * 2 - 1}deg)
				`;
				
				setTimeout(() => {
					screenRef.style.filter = 'brightness(1) contrast(1) hue-rotate(0deg)';
				}, 50);
			}
		}, 100);
	}

	function handleBootSequence() {
		displayContent = '';
		currentIndex = 0;
		
		const bootSequence = [
			'MacOS Boot Sequence\n',
			'Copyright (c) 2024 Tulio Design System\n\n',
			'Checking memory... OK\n',
			'Loading extensions... OK\n',
			'Initializing display... OK\n',
			'Starting desktop...\n\n',
			'Welcome to the future of design.\n'
		];

		let sequenceIndex = 0;
		const bootInterval = setInterval(() => {
			if (sequenceIndex < bootSequence.length) {
				displayContent += bootSequence[sequenceIndex];
				sequenceIndex++;
				
				if (contentRef) {
					contentRef.scrollTop = contentRef.scrollHeight;
				}
			} else {
				clearInterval(bootInterval);
			}
		}, 800);
	}
</script>

<div
	class="vintage-mac-screen {className}"
	style="
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'PP Supply Mono', monospace;
		user-select: none;
	"
>
	<!-- Mac Bezel -->
	<div
		class="mac-bezel"
		style="
			background: {currentVariant.bezelColor};
			border-radius: 20px;
			padding: 40px 30px 60px 30px;
			box-shadow: 
				0 20px 60px rgba(0, 0, 0, 0.3),
				inset 0 2px 5px rgba(255, 255, 255, 0.8),
				inset 0 -2px 5px rgba(0, 0, 0, 0.2);
			position: relative;
			transform: perspective(1000px) rotateX(2deg);
		"
	>
		<!-- Apple Logo -->
		<div
			class="apple-logo"
			style="
				position: absolute;
				top: 15px;
				left: 50%;
				transform: translateX(-50%);
				width: 20px;
				height: 24px;
				background: linear-gradient(45deg, #666, #999);
				clip-path: path('M10 0C4.5 0 0 4.5 0 10c0 3 1.3 5.7 3.4 7.6-.2-.5-.4-1.1-.4-1.6 0-2.8 2.2-5 5-5s5 2.2 5 5c0 .5-.1 1.1-.4 1.6C18.7 15.7 20 13 20 10c0-5.5-4.5-10-10-10z');
				opacity: 0.6;
			"
		></div>

		<!-- Screen -->
		<div
			bind:this={screenRef}
			class="screen"
			class:scanlines
			class:crt-effect={crtEffect}
			style="
				width: {currentVariant.width};
				height: {currentVariant.height};
				background: {variant === 'classic' ? currentVariant.screenColor : backgroundColor};
				border: 3px solid #333;
				border-radius: 8px;
				position: relative;
				overflow: hidden;
				box-shadow: 
					inset 0 0 20px rgba(0, 0, 0, 0.5),
					inset 0 2px 5px rgba(0, 0, 0, 0.3);
			"
		>
			<!-- Screen Content -->
			<div
				bind:this={contentRef}
				class="screen-content"
				style="
					width: 100%;
					height: 100%;
					padding: 20px;
					color: {variant === 'classic' ? currentVariant.textColor : textColor};
					font-size: 14px;
					line-height: 1.4;
					font-family: 'PP Supply Mono', 'Monaco', monospace;
					overflow-y: auto;
					white-space: pre-wrap;
					text-shadow: {variant !== 'classic' ? `0 0 5px ${textColor}` : 'none'};
					background: {variant === 'classic' ? 'transparent' : 'linear-gradient(180deg, rgba(0,40,0,0.1) 0%, transparent 100%)'};
				"
			>
				{#if variant === 'classic'}
					<div style="text-align: center; margin-top: 50px;">
						<div style="font-size: 24px; margin-bottom: 20px;">
							{String.fromCharCode(0xF8FF)} <!-- Apple logo character -->
						</div>
						<div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">
							Welcome to Macintosh
						</div>
						<div style="font-size: 12px; margin-bottom: 30px;">
							System 7.0 • Portfolio Edition
						</div>
						<div style="border: 2px solid #000; padding: 10px; margin: 20px; background: #fff;">
							<div style="font-size: 12px; text-align: left;">
								<strong>Tulio Design System</strong><br>
								Version 2.0<br><br>
								Advanced Liquid Glass Terminal Fusion<br>
								Professional Brand System<br><br>
								Click to begin...
							</div>
						</div>
					</div>
				{:else}
					{displayContent}
					{#if animated && currentIndex < content.length}
						<span class="cursor" style="
							color: {textColor};
							animation: blink 1s infinite;
						">▌</span>
					{/if}
				{/if}
			</div>

			<!-- CRT Scanlines -->
			{#if scanlines}
				<div class="scanlines-overlay" style="
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: repeating-linear-gradient(
						0deg,
						transparent,
						transparent 2px,
						rgba(0, 0, 0, 0.1) 2px,
						rgba(0, 0, 0, 0.1) 4px
					);
					pointer-events: none;
					opacity: 0.7;
				"></div>
			{/if}

			<!-- CRT Curvature Effect -->
			{#if crtEffect}
				<div class="crt-overlay" style="
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.3) 100%);
					pointer-events: none;
				"></div>
			{/if}

			<!-- Screen Glow -->
			{#if variant !== 'classic'}
				<div class="screen-glow" style="
					position: absolute;
					top: -10px;
					left: -10px;
					right: -10px;
					bottom: -10px;
					background: radial-gradient(ellipse at center, {textColor}20 0%, transparent 70%);
					pointer-events: none;
					opacity: {glowIntensity};
					filter: blur(10px);
					z-index: -1;
				"></div>
			{/if}
		</div>

		<!-- Mac Base -->
		<div
			class="mac-base"
			style="
				width: 100%;
				height: 40px;
				background: linear-gradient(180deg, {currentVariant.bezelColor} 0%, rgba(0, 0, 0, 0.1) 100%);
				border-radius: 0 0 20px 20px;
				position: relative;
				margin-top: 10px;
			"
		>
			<!-- Ventilation Grilles -->
			<div style="
				position: absolute;
				bottom: 8px;
				left: 50%;
				transform: translateX(-50%);
				display: flex;
				gap: 3px;
			">
				{#each Array(8) as _, i}
					<div style="
						width: 2px;
						height: 15px;
						background: rgba(0, 0, 0, 0.3);
						border-radius: 1px;
					"></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Control Buttons -->
	<div class="controls" style="
		margin-top: 20px;
		display: flex;
		gap: 15px;
	">
		<button
			onclick={handleBootSequence}
			style="
				background: {brandColors.glass.primary};
				border: 1px solid {brandColors.glass.border};
				border-radius: 8px;
				padding: 8px 16px;
				color: {brandColors.text.primary};
				font-family: 'PP Supply Mono', monospace;
				font-size: 12px;
				cursor: pointer;
				backdrop-filter: blur(10px);
				transition: all 0.3s ease;
			"
			onmouseenter={(e) => {
				e.target.style.background = brandColors.glass.secondary;
				e.target.style.boxShadow = `0 0 20px ${brandColors.glass.glow}`;
			}}
			onmouseleave={(e) => {
				e.target.style.background = brandColors.glass.primary;
				e.target.style.boxShadow = 'none';
			}}
		>
			Boot Sequence
		</button>

		<button
			onclick={() => { displayContent = content; currentIndex = content.length; }}
			style="
				background: {brandColors.glass.primary};
				border: 1px solid {brandColors.glass.border};
				border-radius: 8px;
				padding: 8px 16px;
				color: {brandColors.text.primary};
				font-family: 'PP Supply Mono', monospace;
				font-size: 12px;
				cursor: pointer;
				backdrop-filter: blur(10px);
				transition: all 0.3s ease;
			"
			onmouseenter={(e) => {
				e.target.style.background = brandColors.glass.secondary;
				e.target.style.boxShadow = `0 0 20px ${brandColors.glass.glow}`;
			}}
			onmouseleave={(e) => {
				e.target.style.background = brandColors.glass.primary;
				e.target.style.boxShadow = 'none';
			}}
		>
			Reset
		</button>
	</div>
</div>

<style>
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.vintage-mac-screen:hover .mac-bezel {
		transform: perspective(1000px) rotateX(0deg) rotateY(2deg);
		transition: transform 0.3s ease;
	}

	.screen.crt-effect {
		filter: 
			contrast(1.1) 
			brightness(1.1) 
			saturate(1.2);
	}

	.screen-content::-webkit-scrollbar {
		width: 4px;
	}

	.screen-content::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}

	.screen-content::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	}

	button:active {
		transform: scale(0.95);
	}
</style>