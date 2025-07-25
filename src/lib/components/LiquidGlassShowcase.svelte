<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import LiquidGlass from './LiquidGlass.svelte';
	import LiquidTerminal from './LiquidTerminal.svelte';

	let showcaseContainer: HTMLElement = $state()!;

	const glassVariants = [
		{ variant: 'subtle', title: 'Subtle Glass', description: 'Minimal transparency with light blur' },
		{ variant: 'medium', title: 'Medium Glass', description: 'Balanced glass effect for most use cases' },
		{ variant: 'heavy', title: 'Heavy Glass', description: 'Strong glass effect with deep blur' },
		{ variant: 'extreme', title: 'Extreme Glass', description: 'Maximum glass effect for hero elements' }
	] as const;

	const glassEffects = [
		{ effect: 'jelly', title: 'Jelly Effect', description: 'Organic bounce and scale animation' },
		{ effect: 'magnetic', title: 'Magnetic Effect', description: 'Smooth lift and attraction animation' },
		{ effect: 'shimmer', title: 'Shimmer Effect', description: 'Light sweep animation on hover' },
		{ effect: 'glow', title: 'Glow Effect', description: 'Luminous border and shadow glow' },
		{ effect: 'morph', title: 'Morph Effect', description: 'Continuous shape transformation' },
		{ effect: 'breathe', title: 'Breathe Effect', description: 'Subtle pulsing blur animation' },
		{ effect: 'ripple', title: 'Ripple Effect', description: 'Click-triggered ripple animation' }
	] as const;

	onMount(() => {
		if (!showcaseContainer) return;

		const ctx = gsap.context(() => {
			// Stagger animation for showcase items
			gsap.from('.showcase-item', {
				y: 50,
				opacity: 0,
				duration: 0.6,
				stagger: 0.1,
				ease: 'back.out(1.7)'
			});

			// Background animation
			gsap.to('.showcase-bg', {
				backgroundPosition: '100% 100%',
				duration: 20,
				ease: 'none',
				repeat: -1,
				yoyo: true
			});
		}, showcaseContainer);

		return () => ctx.revert();
	});
</script>

<div bind:this={showcaseContainer} class="liquid-glass-showcase">
	<!-- Background -->
	<div class="showcase-bg"></div>

	<!-- Header -->
	<div class="showcase-header">
		<LiquidGlass variant="heavy" effect="glow" customClass="header-glass">
			<h1 class="showcase-title">Liquid Glass System</h1>
			<p class="showcase-subtitle">Apple WWDC 2025 Liquid Glass meets Hacker Aesthetics</p>
		</LiquidGlass>
	</div>

	<!-- Glass Variants Section -->
	<section class="showcase-section">
		<h2 class="section-title">Glass Variants</h2>
		<div class="showcase-grid">
			{#each glassVariants as { variant, title, description } (variant)}
				<div class="showcase-item">
					<LiquidGlass {variant} effect="jelly" customClass="variant-demo">
						<div class="demo-content">
							<h3 class="demo-title">{title}</h3>
							<p class="demo-description">{description}</p>
							<div class="demo-code">
								<code>variant="{variant}"</code>
							</div>
						</div>
					</LiquidGlass>
				</div>
			{/each}
		</div>
	</section>

	<!-- Interactive Effects Section -->
	<section class="showcase-section">
		<h2 class="section-title">Interactive Effects</h2>
		<div class="showcase-grid">
			{#each glassEffects as { effect, title, description } (effect)}
				<div class="showcase-item">
					<LiquidGlass variant="medium" {effect} customClass="effect-demo">
						<div class="demo-content">
							<h3 class="demo-title">{title}</h3>
							<p class="demo-description">{description}</p>
							<div class="demo-code">
								<code>effect="{effect}"</code>
							</div>
						</div>
					</LiquidGlass>
				</div>
			{/each}
		</div>
	</section>

	<!-- Terminal Showcase -->
	<section class="showcase-section">
		<h2 class="section-title">Liquid Terminal</h2>
		<div class="terminal-showcase">
			<div class="showcase-item terminal-item">
				<LiquidTerminal
					title="LIQUID_TERMINAL_v1.0"
					theme="liquid"
					enableLiquidFlow={true}
					glowEffect={true}
					expandable={true}
					customClass="demo-terminal"
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
						<span class="terminal-success">🚀 Ready to hack the matrix!</span>
					</div>
					<div class="terminal-line">
						<span class="terminal-prompt">user@hackers-brand:~$</span>
						<span class="terminal-cursor">_</span>
					</div>
				</LiquidTerminal>
			</div>

			<div class="showcase-item terminal-item">
				<LiquidTerminal
					title="HACKER_INTERFACE_v2.0"
					theme="hacker"
					enableLiquidFlow={true}
					glowEffect={true}
					customClass="demo-terminal"
				>
					<div class="terminal-line">
						<span class="terminal-prompt">root@matrix:~#</span>
						<span class="terminal-input">./hack_the_planet.sh</span>
					</div>
					<div class="terminal-line">
						<span class="terminal-output">Initializing neural interface...</span>
					</div>
					<div class="terminal-line">
						<span class="terminal-output">Connecting to mainframe...</span>
					</div>
					<div class="terminal-line">
						<span class="terminal-success">Access granted. Welcome to the system.</span>
					</div>
					<div class="terminal-line">
						<span class="terminal-prompt">root@matrix:~#</span>
						<span class="terminal-cursor">_</span>
					</div>
				</LiquidTerminal>
			</div>
		</div>
	</section>

	<!-- Interactive Demo -->
	<section class="showcase-section">
		<h2 class="section-title">Interactive Demo</h2>
		<div class="interactive-demo">
			<LiquidGlass variant="heavy" effect="jelly" glow={true} customClass="interactive-card">
				<div class="demo-content interactive-content">
					<h3 class="demo-title">Try Me!</h3>
					<p class="demo-description">Hover, click, and interact with this liquid glass element</p>
					<div class="demo-features">
						<span class="feature-tag">Jelly Animation</span>
						<span class="feature-tag">Glow Effect</span>
						<span class="feature-tag">Heavy Glass</span>
					</div>
				</div>
			</LiquidGlass>
		</div>
	</section>
</div>

<style>
	.liquid-glass-showcase {
		min-height: 100vh;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.showcase-bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
		background-image:
			radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 40% 80%, rgba(48, 209, 88, 0.06) 0%, transparent 50%);
		background-size: 100% 100%;
		z-index: -1;
	}

	.showcase-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	:global(.header-glass) {
		padding: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	.showcase-title {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		background: linear-gradient(135deg, #00d4aa, #00ffff, #30d158);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.showcase-subtitle {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
		font-weight: 400;
	}

	.showcase-section {
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 600;
		color: #f5f5f7;
		text-align: center;
		margin-bottom: 2rem;
	}

	.showcase-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.showcase-item {
		opacity: 0;
	}

	:global(.variant-demo),
	:global(.effect-demo) {
		padding: 1.5rem;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.demo-content {
		text-align: center;
	}

	.demo-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #f5f5f7;
		margin: 0 0 0.5rem 0;
	}

	.demo-description {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 1rem 0;
		line-height: 1.4;
	}

	.demo-code {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		padding: 0.5rem;
		font-family: 'PP Supply Mono', monospace;
	}

	.demo-code code {
		color: #00d4aa;
		font-size: 0.85rem;
	}

	.terminal-showcase {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.terminal-item {
		opacity: 0;
	}

	:global(.demo-terminal) {
		min-height: 250px;
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

	.interactive-demo {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}

	:global(.interactive-card) {
		padding: 2rem;
		max-width: 400px;
		cursor: pointer;
	}

	.interactive-content {
		text-align: center;
	}

	.demo-features {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.feature-tag {
		background: rgba(0, 212, 170, 0.2);
		color: #00d4aa;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 500;
		border: 1px solid rgba(0, 212, 170, 0.3);
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
		.liquid-glass-showcase {
			padding: 1rem;
		}

		.showcase-title {
			font-size: 2rem;
		}

		.showcase-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.terminal-showcase {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		:global(.variant-demo),
		:global(.effect-demo) {
			height: 150px;
			padding: 1rem;
		}
	}
</style>
