<script lang="ts">
	import { onMount } from 'svelte';
	import LiquidGlass from '$lib/components/LiquidGlass.svelte';
	import LiquidTerminal from '$lib/components/LiquidTerminal.svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function handleTerminalFocus() {
		console.log('Terminal focused');
	}

	function handleCardClick() {
		console.log('Card clicked');
	}
</script>

<svelte:head>
	<title>A Hacker's Brand - Liquid Glass Design System</title>
	<meta
		name="description"
		content="A cutting-edge design system that fuses Apple's liquid glass aesthetics with terminal/CLI hacker themes."
	/>
</svelte:head>

<main class="main-container">
	<!-- Hero Section -->
	<section class="hero-section">
		<LiquidGlass variant="heavy" effect="glow" customClass="hero-card">
			<div class="hero-content">
				<h1 class="hero-title">A Hacker's Brand</h1>
				<p class="hero-subtitle">Liquid Glass meets Terminal Aesthetics</p>
				<p class="hero-description">
					Experience the fusion of Apple's WWDC 2025 liquid glass design language with cutting-edge hacker/CLI/terminal
					retrofuturistic aesthetics.
				</p>
				<div class="hero-actions">
					<LiquidGlass variant="medium" effect="jelly" customClass="action-button" on:click={handleCardClick}>
						<span>Explore Components</span>
					</LiquidGlass>
					<LiquidGlass variant="subtle" effect="shimmer" customClass="action-button secondary">
						<span>View Documentation</span>
					</LiquidGlass>
				</div>
			</div>
		</LiquidGlass>
	</section>

	<!-- Features Grid -->
	<section class="features-section">
		<h2 class="section-title">Core Features</h2>
		<div class="features-grid">
			<LiquidGlass variant="medium" effect="jelly" customClass="feature-card">
				<div class="feature-content">
					<div class="feature-icon">🎨</div>
					<h3 class="feature-title">Liquid Glass</h3>
					<p class="feature-description">Beautiful glassmorphism with liquid animations and organic interactions</p>
				</div>
			</LiquidGlass>

			<LiquidGlass variant="medium" effect="magnetic" customClass="feature-card">
				<div class="feature-content">
					<div class="feature-icon">💻</div>
					<h3 class="feature-title">Terminal Theme</h3>
					<p class="feature-description">Hacker aesthetics with CLI-inspired components and retrofuturistic design</p>
				</div>
			</LiquidGlass>

			<LiquidGlass variant="medium" effect="shimmer" customClass="feature-card">
				<div class="feature-content">
					<div class="feature-icon">🌊</div>
					<h3 class="feature-title">Jelly Motion</h3>
					<p class="feature-description">Smooth, organic animations powered by GSAP with liquid-like interactions</p>
				</div>
			</LiquidGlass>

			<LiquidGlass variant="medium" effect="glow" customClass="feature-card">
				<div class="feature-content">
					<div class="feature-icon">⚡</div>
					<h3 class="feature-title">WebGL Effects</h3>
					<p class="feature-description">Advanced visual effects with Three.js/Threlte for immersive experiences</p>
				</div>
			</LiquidGlass>
		</div>
	</section>

	<!-- Terminal Demo -->
	<section class="terminal-section">
		<h2 class="section-title">Liquid Terminal Experience</h2>
		<div class="terminal-demo">
			<LiquidTerminal
				title="HACKERS_BRAND_DEMO_v1.0"
				theme="liquid"
				enableLiquidFlow={true}
				glowEffect={true}
				expandable={true}
				on:focus={handleTerminalFocus}
			>
				<div class="terminal-line">
					<span class="terminal-prompt">user@hackers-brand:~$</span>
					<span class="terminal-input">npm install a-hackers-brand</span>
				</div>
				<div class="terminal-line">
					<span class="terminal-output">✓ Installing liquid glass components...</span>
				</div>
				<div class="terminal-line">
					<span class="terminal-output">✓ Configuring hacker aesthetics...</span>
				</div>
				<div class="terminal-line">
					<span class="terminal-output">✓ Initializing GSAP animations...</span>
				</div>
				<div class="terminal-line">
					<span class="terminal-output">✓ Setting up WebGL effects...</span>
				</div>
				<div class="terminal-line">
					<span class="terminal-success">🚀 Welcome to the liquid glass revolution!</span>
				</div>
				<div class="terminal-line">
					<span class="terminal-prompt">user@hackers-brand:~$</span>
					<span class="terminal-cursor">_</span>
				</div>
			</LiquidTerminal>
		</div>
	</section>

	<!-- Quick Links -->
	<section class="links-section">
		<div class="links-grid">
			<LiquidGlass variant="subtle" effect="ripple" customClass="link-card">
				<a href="/liquid-glass" class="link-content">
					<h3>Liquid Glass Showcase</h3>
					<p>Explore all glass variants and effects</p>
				</a>
			</LiquidGlass>

			<LiquidGlass variant="subtle" effect="jelly" customClass="link-card">
				<a href="/components" class="link-content">
					<h3>Component Library</h3>
					<p>Browse 53+ components</p>
				</a>
			</LiquidGlass>

			<LiquidGlass variant="subtle" effect="magnetic" customClass="link-card">
				<a href="/docs" class="link-content">
					<h3>Documentation</h3>
					<p>Learn how to use the system</p>
				</a>
			</LiquidGlass>
		</div>
	</section>
</main>

<style>
	.main-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
		background-image:
			radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 40% 80%, rgba(48, 209, 88, 0.06) 0%, transparent 50%);
		padding: 2rem;
		color: #f5f5f7;
	}

	.hero-section {
		display: flex;
		justify-content: center;
		margin-bottom: 4rem;
	}

	:global(.hero-card) {
		padding: 3rem;
		max-width: 800px;
		text-align: center;
	}

	.hero-content {
		position: relative;
		z-index: 3;
	}

	.hero-title {
		font-size: 4rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		background: linear-gradient(135deg, #00d4aa, #00ffff, #30d158);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1.5rem 0;
		font-weight: 500;
	}

	.hero-description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 2rem 0;
		line-height: 1.6;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	:global(.action-button) {
		padding: 1rem 2rem;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	:global(.action-button.secondary) {
		background: rgba(255, 255, 255, 0.05);
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 3rem;
		color: #f5f5f7;
	}

	.features-section {
		margin-bottom: 4rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	:global(.feature-card) {
		padding: 2rem;
		text-align: center;
		cursor: pointer;
	}

	.feature-content {
		position: relative;
		z-index: 3;
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #f5f5f7;
	}

	.feature-description {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.5;
		margin: 0;
	}

	.terminal-section {
		margin-bottom: 4rem;
	}

	.terminal-demo {
		max-width: 800px;
		margin: 0 auto;
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

	.terminal-input {
		color: #f5f5f7;
	}

	.terminal-output {
		color: var(--terminal-blue);
	}

	.terminal-success {
		color: var(--terminal-green);
	}

	.terminal-cursor {
		color: var(--terminal-green);
		animation: blink 1s step-end infinite;
	}

	.links-section {
		margin-bottom: 2rem;
	}

	.links-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		max-width: 900px;
		margin: 0 auto;
	}

	:global(.link-card) {
		padding: 1.5rem;
		cursor: pointer;
	}

	.link-content {
		text-decoration: none;
		color: inherit;
		display: block;
		position: relative;
		z-index: 3;
	}

	.link-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: #f5f5f7;
	}

	.link-content p {
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		font-size: 0.9rem;
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

	/* Responsive */
	@media (max-width: 768px) {
		.main-container {
			padding: 1rem;
		}

		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		:global(.hero-card) {
			padding: 2rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.links-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		:global(.action-button) {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
