<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import LiquidGlassAdvanced from './LiquidGlassAdvanced.svelte';
	import LiquidTerminal from './LiquidTerminal.svelte';

	let showcaseContainer: HTMLElement = $state()!;

	const appleEffects = [
		{
			effect: 'apple-fluid',
			title: 'Apple Fluid',
			description: 'Smooth morphing with Apple-style transitions',
			class: 'apple-liquid-morph'
		},
		{
			effect: 'jelly',
			title: 'Apple Jelly',
			description: 'Bouncy interactions with refined easing',
			class: 'apple-jelly'
		},
		{
			effect: 'magnetic',
			title: 'Apple Magnetic',
			description: 'Elegant lift effect with subtle shadows',
			class: 'apple-magnetic'
		},
		{
			effect: 'shimmer',
			title: 'Apple Shimmer',
			description: 'Sophisticated light sweep animation',
			class: 'apple-shimmer'
		}
	] as const;

	const liquidVariants = [
		{
			variant: 'fluid',
			title: 'Fluid Glass',
			description: 'Continuous morphing with organic shapes',
			fluidMorphing: true
		},
		{
			variant: 'heavy',
			title: 'Heavy Glass',
			description: 'Deep blur with enhanced saturation',
			appleStyle: true
		},
		{
			variant: 'extreme',
			title: 'Extreme Glass',
			description: 'Maximum glass effect with Apple polish',
			appleStyle: true
		}
	] as const;

	onMount(() => {
		if (!showcaseContainer) return;

		const ctx = gsap.context(() => {
			// Stagger animation for showcase items
			gsap.from('.apple-showcase-item', {
				y: 60,
				opacity: 0,
				duration: 0.8,
				stagger: 0.15,
				ease: 'back.out(1.7)'
			});

			// Background gradient animation
			gsap.to('.apple-showcase-bg', {
				backgroundPosition: '200% 200%',
				duration: 25,
				ease: 'none',
				repeat: -1,
				yoyo: true
			});

			// Floating animation for hero elements
			gsap.to('.apple-hero-float', {
				y: -10,
				rotation: 1,
				duration: 3,
				ease: 'sine.inOut',
				yoyo: true,
				repeat: -1,
				stagger: 0.5
			});
		}, showcaseContainer);

		return () => ctx.revert();
	});
</script>

<div bind:this={showcaseContainer} class="apple-liquid-showcase">
	<!-- Animated Background -->
	<div class="apple-showcase-bg"></div>

	<!-- Hero Section -->
	<section class="apple-hero-section">
		<div class="apple-hero-content">
				<LiquidGlassAdvanced
					variant="extreme"
					effect="apple-fluid"
					appleStyle={true}
					customClass="apple-hero-card apple-hero-float"
				>
				<div class="apple-hero-inner">
					<h1 class="apple-hero-title">Apple Liquid Glass</h1>
					<p class="apple-hero-subtitle">WWDC 2025 Inspired Design System</p>
					<div class="apple-hero-badge">
						<span class="apple-badge-text">Hacker Aesthetics</span>
					</div>
				</div>
			</LiquidGlassAdvanced>
		</div>
	</section>

	<!-- Apple Effects Grid -->
	<section class="apple-effects-section">
		<h2 class="apple-section-title">Apple-Inspired Effects</h2>
		<div class="apple-effects-grid">
			{#each appleEffects as { effect, title, description, class: effectClass } (effect)}
				<div class="apple-showcase-item">
					<LiquidGlassAdvanced
						variant="heavy"
						{effect}
						appleStyle={true}
						customClass="apple-effect-demo {effectClass}"
					>
						<div class="apple-demo-content">
							<div class="apple-demo-icon">
								<div class="apple-icon-shape"></div>
							</div>
							<h3 class="apple-demo-title">{title}</h3>
							<p class="apple-demo-description">{description}</p>
							<div class="apple-demo-code">
								<code>effect="{effect}"</code>
							</div>
						</div>
					</LiquidGlassAdvanced>
				</div>
			{/each}
		</div>
	</section>

	<!-- Liquid Variants Section -->
	<section class="apple-variants-section">
		<h2 class="apple-section-title">Liquid Variants</h2>
		<div class="apple-variants-grid">
			{#each liquidVariants as variant_item (variant_item.variant)}
				<div class="apple-showcase-item">
					<LiquidGlassAdvanced
						variant={variant_item.variant}
						effect="jelly"
						animate={true}
						jelly={true}
						customClass="apple-variant-demo"
					>
						<div class="apple-demo-content">
							<div class="apple-variant-preview">
								<div class="apple-preview-layers">
									<div class="apple-layer apple-layer-1"></div>
									<div class="apple-layer apple-layer-2"></div>
									<div class="apple-layer apple-layer-3"></div>
								</div>
							</div>
							<h3 class="apple-demo-title">{variant_item.title}</h3>
							<p class="apple-demo-description">{variant_item.description}</p>
							<div class="apple-demo-code">
								<code>variant="{variant_item.variant}"</code>
							</div>
						</div>
					</LiquidGlassAdvanced>
				</div>
			{/each}
		</div>
	</section>

	<!-- Terminal Integration -->
	<section class="apple-terminal-section">
		<h2 class="apple-section-title">Terminal Integration</h2>
		<div class="apple-terminal-showcase">
			<div class="apple-showcase-item terminal-showcase-item">
				<div class="apple-terminal-glass">
					<LiquidTerminal
						title="APPLE_LIQUID_TERMINAL_v1.0"
						theme="liquid"
						enableLiquidFlow={true}
						glowEffect={true}
						customClass="apple-demo-terminal"
					>
						<div class="terminal-line">
							<span class="terminal-prompt">user@apple-liquid:~$</span>
							<span class="terminal-input">npm install a-hackers-brand</span>
						</div>
						<div class="terminal-line">
							<span class="terminal-output">✓ Installing Apple liquid glass effects...</span>
						</div>
						<div class="terminal-line">
							<span class="terminal-output">✓ Configuring WWDC 2025 aesthetics...</span>
						</div>
						<div class="terminal-line">
							<span class="terminal-output">✓ Initializing fluid morphing animations...</span>
						</div>
						<div class="terminal-line">
							<span class="terminal-success">🍎 Apple Liquid Glass ready!</span>
						</div>
						<div class="terminal-line">
							<span class="terminal-prompt">user@apple-liquid:~$</span>
							<span class="terminal-cursor">_</span>
						</div>
					</LiquidTerminal>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Playground -->
	<section class="apple-playground-section">
		<h2 class="apple-section-title">Interactive Playground</h2>
		<div class="apple-playground">
			<div class="apple-showcase-item playground-item">
				<LiquidGlassAdvanced
					variant="extreme"
					effect="liquid-morph"
					appleStyle={true}
					fluidMorphing={true}
					customClass="apple-playground-card apple-hero-float"
				>
					<div class="apple-playground-content">
						<h3 class="apple-playground-title">Liquid Morphing</h3>
						<p class="apple-playground-description">
							Experience continuous shape transformation with Apple's fluid design language
						</p>
						<div class="apple-playground-features">
							<span class="apple-feature-tag">Fluid Morphing</span>
							<span class="apple-feature-tag">Apple Style</span>
							<span class="apple-feature-tag">Extreme Glass</span>
						</div>
						<div class="apple-playground-interaction">
							<div class="apple-interaction-hint">Hover and click to interact</div>
						</div>
					</div>
				</LiquidGlassAdvanced>
			</div>
		</div>
	</section>
</div>

<style>
	.apple-liquid-showcase {
		min-height: 100vh;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.apple-showcase-bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%);
		background-image:
			radial-gradient(circle at 20% 30%, rgba(0, 212, 170, 0.08) 0%, transparent 50%),
			radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.06) 0%, transparent 50%),
			radial-gradient(circle at 40% 90%, rgba(48, 209, 88, 0.04) 0%, transparent 50%),
			radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
		background-size: 200% 200%;
		z-index: -1;
	}

	.apple-hero-section {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
		margin-bottom: 4rem;
	}

	.apple-hero-content {
		max-width: 600px;
		width: 100%;
	}

	:global(.apple-hero-card) {
		padding: 3rem;
		text-align: center;
		backdrop-filter: blur(30px) saturate(200%);
		-webkit-backdrop-filter: blur(30px) saturate(200%);
	}

	.apple-hero-inner {
		position: relative;
	}

	.apple-hero-title {
		font-size: 3.5rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		background: linear-gradient(135deg, #ffffff 0%, #00d4aa 30%, #00ffff 60%, #30d158 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.1;
	}

	.apple-hero-subtitle {
		font-size: 1.4rem;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 2rem 0;
		font-weight: 400;
	}

	.apple-hero-badge {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: rgba(0, 212, 170, 0.15);
		border: 1px solid rgba(0, 212, 170, 0.3);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.apple-badge-text {
		color: #00d4aa;
		font-weight: 500;
		font-size: 0.9rem;
	}

	.apple-effects-section,
	.apple-variants-section,
	.apple-terminal-section,
	.apple-playground-section {
		margin-bottom: 4rem;
	}

	.apple-section-title {
		font-size: 2.5rem;
		font-weight: 600;
		color: #f5f5f7;
		text-align: center;
		margin-bottom: 3rem;
		background: linear-gradient(135deg, #f5f5f7 0%, #00d4aa 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.apple-effects-grid,
	.apple-variants-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.apple-showcase-item {
		opacity: 0;
	}

	:global(.apple-effect-demo),
	:global(.apple-variant-demo) {
		padding: 2rem;
		height: 280px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.apple-demo-content {
		text-align: center;
		width: 100%;
	}

	.apple-demo-icon {
		margin-bottom: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.apple-icon-shape {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #00d4aa, #00ffff);
		border-radius: 12px;
		position: relative;
		animation: apple-icon-float 3s ease-in-out infinite;
	}

	.apple-icon-shape::before {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		right: 2px;
		bottom: 2px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	.apple-demo-title {
		font-size: 1.4rem;
		font-weight: 600;
		color: #f5f5f7;
		margin: 0 0 0.75rem 0;
	}

	.apple-demo-description {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 1.5rem 0;
		line-height: 1.5;
	}

	.apple-demo-code {
		background: rgba(0, 0, 0, 0.4);
		border-radius: 12px;
		padding: 0.75rem;
		font-family: 'PP Supply Mono', monospace;
		border: 1px solid rgba(0, 212, 170, 0.2);
	}

	.apple-demo-code code {
		color: #00d4aa;
		font-size: 0.9rem;
	}

	.apple-variant-preview {
		margin-bottom: 1.5rem;
		display: flex;
		justify-content: center;
	}

	.apple-preview-layers {
		position: relative;
		width: 60px;
		height: 60px;
	}

	.apple-layer {
		position: absolute;
		border-radius: 50%;
		animation: apple-layer-float 4s ease-in-out infinite;
	}

	.apple-layer-1 {
		width: 60px;
		height: 60px;
		background: rgba(0, 212, 170, 0.2);
		animation-delay: 0s;
	}

	.apple-layer-2 {
		width: 40px;
		height: 40px;
		top: 10px;
		left: 10px;
		background: rgba(0, 255, 255, 0.3);
		animation-delay: 0.5s;
	}

	.apple-layer-3 {
		width: 20px;
		height: 20px;
		top: 20px;
		left: 20px;
		background: rgba(255, 255, 255, 0.4);
		animation-delay: 1s;
	}

	.apple-terminal-showcase {
		display: flex;
		justify-content: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.terminal-showcase-item {
		width: 100%;
	}

	.apple-terminal-glass {
		padding: 1rem;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 24px;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(0, 212, 170, 0.2);
	}

	:global(.apple-demo-terminal) {
		min-height: 300px;
	}

	.apple-playground {
		display: flex;
		justify-content: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.playground-item {
		width: 100%;
	}

	:global(.apple-playground-card) {
		padding: 3rem;
		min-height: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.apple-playground-content {
		text-align: center;
		width: 100%;
	}

	.apple-playground-title {
		font-size: 2rem;
		font-weight: 600;
		color: #f5f5f7;
		margin: 0 0 1rem 0;
	}

	.apple-playground-description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 2rem 0;
		line-height: 1.6;
	}

	.apple-playground-features {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.apple-feature-tag {
		background: rgba(0, 212, 170, 0.2);
		color: #00d4aa;
		padding: 0.5rem 1rem;
		border-radius: 16px;
		font-size: 0.85rem;
		font-weight: 500;
		border: 1px solid rgba(0, 212, 170, 0.3);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.apple-interaction-hint {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Animations */
	@keyframes apple-icon-float {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-5px) rotate(2deg);
		}
	}

	@keyframes apple-layer-float {
		0%,
		100% {
			transform: scale(1) rotate(0deg);
			opacity: 0.6;
		}
		50% {
			transform: scale(1.1) rotate(5deg);
			opacity: 0.8;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.apple-liquid-showcase {
			padding: 1rem;
		}

		.apple-hero-title {
			font-size: 2.5rem;
		}

		.apple-section-title {
			font-size: 2rem;
		}

		.apple-effects-grid,
		.apple-variants-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		:global(.apple-hero-card) {
			padding: 2rem;
		}

		:global(.apple-effect-demo),
		:global(.apple-variant-demo) {
			height: 240px;
			padding: 1.5rem;
		}

		:global(.apple-playground-card) {
			padding: 2rem;
			min-height: 300px;
		}
	}
</style>
