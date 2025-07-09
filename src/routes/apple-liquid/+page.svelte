<script lang="ts">
	import { onMount } from 'svelte';
	import { AppleLiquidShowcase, LiquidGlassAdvanced } from '$lib/components';
	import { gsap } from 'gsap';

	let pageContainer: HTMLElement;

	onMount(() => {
		if (!pageContainer) return;

		const ctx = gsap.context(() => {
			// Page entrance animation
			gsap.from('.apple-page-header', {
				y: -50,
				opacity: 0,
				duration: 0.8,
				ease: 'back.out(1.7)'
			});

			gsap.from('.apple-page-nav', {
				y: 30,
				opacity: 0,
				duration: 0.6,
				delay: 0.2,
				ease: 'power2.out'
			});
		}, pageContainer);

		return () => ctx.revert();
	});
</script>

<svelte:head>
	<title>Apple Liquid Glass - A Hacker's Brand</title>
	<meta name="description" content="Apple WWDC 2025 inspired liquid glass effects with hacker aesthetics" />
</svelte:head>

<div bind:this={pageContainer} class="apple-liquid-page">
	<!-- Page Header -->
	<header class="apple-page-header">
		<LiquidGlassAdvanced variant="heavy" effect="apple-fluid" appleStyle={true} customClass="apple-page-header-card">
			<div class="apple-header-content">
				<h1 class="apple-page-title">Apple Liquid Glass</h1>
				<p class="apple-page-subtitle">WWDC 2025 Inspired Design System</p>
				<div class="apple-page-badges">
					<span class="apple-page-badge">Svelte 5</span>
					<span class="apple-page-badge">TailwindCSS 4</span>
					<span class="apple-page-badge">GSAP</span>
				</div>
			</div>
		</LiquidGlassAdvanced>
	</header>

	<!-- Navigation -->
	<nav class="apple-page-nav">
		<LiquidGlassAdvanced variant="medium" effect="jelly" appleStyle={true} customClass="apple-nav-card">
			<div class="apple-nav-content">
				<a href="/" class="apple-nav-link">← Back to Home</a>
				<div class="apple-nav-divider"></div>
				<a href="/components" class="apple-nav-link">Components</a>
				<a href="/docs" class="apple-nav-link">Documentation</a>
			</div>
		</LiquidGlassAdvanced>
	</nav>

	<!-- Main Showcase -->
	<main class="apple-page-main">
		<AppleLiquidShowcase />
	</main>
</div>

<style>
	.apple-liquid-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%);
		padding: 2rem;
	}

	.apple-page-header {
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
	}

	:global(.apple-page-header-card) {
		padding: 2rem 3rem;
		max-width: 800px;
		width: 100%;
		text-align: center;
	}

	.apple-header-content {
		position: relative;
	}

	.apple-page-title {
		font-size: 3rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		background: linear-gradient(135deg, #ffffff 0%, #00d4aa 30%, #00ffff 60%, #30d158 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.1;
	}

	.apple-page-subtitle {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 1.5rem 0;
		font-weight: 400;
	}

	.apple-page-badges {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.apple-page-badge {
		background: rgba(0, 212, 170, 0.15);
		color: #00d4aa;
		padding: 0.5rem 1rem;
		border-radius: 16px;
		font-size: 0.85rem;
		font-weight: 500;
		border: 1px solid rgba(0, 212, 170, 0.3);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.apple-page-nav {
		margin-bottom: 3rem;
		display: flex;
		justify-content: center;
	}

	:global(.apple-nav-card) {
		padding: 1rem 2rem;
		max-width: 600px;
		width: 100%;
	}

	.apple-nav-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.apple-nav-link {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 12px;
		transition: all 0.3s ease;
		position: relative;
	}

	.apple-nav-link:hover {
		color: #00d4aa;
		background: rgba(0, 212, 170, 0.1);
		transform: translateY(-1px);
	}

	.apple-nav-divider {
		width: 1px;
		height: 20px;
		background: rgba(255, 255, 255, 0.2);
	}

	.apple-page-main {
		position: relative;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.apple-liquid-page {
			padding: 1rem;
		}

		.apple-page-title {
			font-size: 2.2rem;
		}

		:global(.apple-page-header-card) {
			padding: 1.5rem 2rem;
		}

		:global(.apple-nav-card) {
			padding: 1rem 1.5rem;
		}

		.apple-nav-content {
			gap: 1rem;
		}

		.apple-nav-divider {
			display: none;
		}
	}
</style>
