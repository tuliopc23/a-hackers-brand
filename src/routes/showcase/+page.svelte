<script lang="ts">
	import BrandStyleguide from '$lib/components/BrandStyleguide.svelte';
	import RetroText from '$lib/components/RetroText.svelte';
	import AdvancedLiquidTerminal from '$lib/components/AdvancedLiquidTerminal.svelte';
	import VintageMacScreen from '$lib/components/VintageMacScreen.svelte';
	import PortfolioCard from '$lib/components/PortfolioCard.svelte';
	import { brandColors } from '$lib/tokens';

	let activeSection = $state('showcase');
</script>

<svelte:head>
	<title>Tulio Brand System - Showcase</title>
	<meta name="description" content="Advanced Liquid Glass Terminal Fusion Design System" />
</svelte:head>

<div class="showcase-page" style="
	background: {brandColors.backgrounds.primary};
	min-height: 100vh;
	color: {brandColors.text.primary};
">
	{#if activeSection === 'showcase'}
		<!-- Hero Section -->
		<section 
			class="hero"
			style="
				text-align: center;
				background: {brandColors.gradients.terminal};
				position: relative;
			"
		>
			<div style="margin-bottom: 40px;">
				<RetroText 
					text="TULIO BRAND SYSTEM" 
					variant="matrix" 
					size="2xl" 
					animated={true}
					glow={true}
				/>
			</div>
			
			<div style="margin-bottom: 60px;">
				<RetroText 
					text="Advanced Liquid Glass Terminal Fusion" 
					variant="neon" 
					size="lg" 
					animated={true}
				/>
			</div>

			<div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 80px;">
				<button
					onclick={() => activeSection = 'styleguide'}
					style="
						background: {brandColors.glass.primary};
						border: 1px solid {brandColors.glass.border};
						border-radius: 12px;
						padding: 16px 32px;
						color: {brandColors.text.primary};
						font-family: 'PP Supply Mono', monospace;
						font-size: 16px;
						font-weight: 600;
						cursor: pointer;
						backdrop-filter: blur(20px);
						transition: all 0.3s ease;
					"
					onmouseenter={(e) => {
						const target = e.target as HTMLElement;
						target.style.background = brandColors.glass.secondary;
						target.style.boxShadow = `0 0 30px ${brandColors.glass.glow}`;
						target.style.transform = 'translateY(-4px)';
					}}
					onmouseleave={(e) => {
						const target = e.target as HTMLElement;
						target.style.background = brandColors.glass.primary;
						target.style.boxShadow = 'none';
						target.style.transform = 'translateY(0)';
					}}
				>
					Explore Styleguide
				</button>
			</div>

			<!-- Demo Components Grid -->
			<div class="demo-grid">
				<!-- Terminal Demo -->
				<div style="height: 400px;">
					<AdvancedLiquidTerminal 
						title="Matrix Terminal"
						variant="matrix"
						commands={[
							'echo "Welcome to the future"',
							'ls portfolio/',
							'cat skills.txt',
							'run design-system.exe'
						]}
						autoType={true}
						liquidEffect={true}
						glowIntensity={1.2}
					/>
				</div>

				<!-- Vintage Mac Demo -->
				<div style="display: flex; justify-content: center; align-items: center;">
					<VintageMacScreen 
						variant="se30"
						content="SYSTEM BOOT SEQUENCE&#10;&#10;Loading Tulio Brand System...&#10;✓ Matrix effects initialized&#10;✓ Liquid glass ready&#10;✓ WebGL acceleration active&#10;&#10;Welcome to the future of design."
						animated={true}
						scanlines={true}
						crtEffect={true}
					/>
				</div>
			</div>
		</section>

		<!-- Portfolio Cards Section -->
		<section class="portfolio-demo" style="
			padding: 100px 40px;
			background: {brandColors.backgrounds.secondary};
		">
			<div style="text-align: center; margin-bottom: 60px;">
				<RetroText 
					text="PORTFOLIO COMPONENTS" 
					variant="cyberpunk" 
					size="xl" 
					animated={true}
				/>
			</div>

			<div style="
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
				gap: 30px;
				max-width: 1200px;
				margin: 0 auto;
			">
				<PortfolioCard
					title="Neural Network Visualizer"
					description="Interactive 3D visualization of neural networks with real-time training data. Built with WebGL shaders and liquid morphing effects."
					technologies={['Three.js', 'WebGL', 'TypeScript', 'Svelte']}
					variant="matrix"
					animated={true}
					liquidEffect={true}
					demoUrl="https://example.com/neural"
					githubUrl="https://github.com/example/neural"
				/>

				<PortfolioCard
					title="Cyberpunk Dashboard"
					description="Retro-futuristic data dashboard with real-time metrics, holographic displays, and terminal interfaces."
					technologies={['D3.js', 'WebGL', 'Node.js', 'PostgreSQL']}
					variant="cyberpunk"
					animated={true}
					liquidEffect={true}
					demoUrl="https://example.com/dashboard"
					githubUrl="https://github.com/example/dashboard"
				/>

				<PortfolioCard
					title="Quantum Code Editor"
					description="Next-generation code editor with AI assistance, liquid syntax highlighting, and holographic code completion."
					technologies={['Monaco', 'AI/ML', 'Rust', 'WASM']}
					variant="hologram"
					animated={true}
					liquidEffect={true}
					demoUrl="https://example.com/editor"
					githubUrl="https://github.com/example/editor"
				/>
			</div>
		</section>

		<!-- Text Effects Showcase -->
		<section class="text-effects" style="
			padding: 100px 40px;
			background: {brandColors.backgrounds.tertiary};
			text-align: center;
		">
			<div style="margin-bottom: 60px;">
				<RetroText 
					text="TEXT EFFECTS SHOWCASE" 
					variant="hologram" 
					size="xl" 
					animated={true}
				/>
			</div>

			<div style="
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				gap: 40px;
				max-width: 1000px;
				margin: 0 auto;
			">
				<div>
					<div style="margin-bottom: 20px;">
						<RetroText text="MATRIX MODE" variant="matrix" size="lg" animated={true} scanlines={true} />
					</div>
					<div style="margin-bottom: 20px;">
						<RetroText text="NEON GLOW" variant="neon" size="lg" animated={false} glow={true} />
					</div>
					<div style="margin-bottom: 20px;">
						<RetroText text="CYBERPUNK STYLE" variant="cyberpunk" size="lg" animated={true} />
					</div>
				</div>

				<div>
					<div style="margin-bottom: 20px;">
						<RetroText text="HOLOGRAM PROJECTION" variant="hologram" size="lg" animated={false} />
					</div>
					<div style="margin-bottom: 20px;">
						<RetroText text="GLITCH EFFECT" variant="glitch" size="lg" animated={true} />
					</div>
					<div style="margin-bottom: 20px;">
						<RetroText text="TERMINAL CLASSIC" variant="terminal" size="lg" animated={false} />
					</div>
				</div>
			</div>
		</section>

		<!-- Call to Action -->
		<section class="cta" style="
			padding: 100px 40px;
			text-align: center;
			background: {brandColors.gradients.cyberpunk};
		">
			<div style="margin-bottom: 40px;">
				<RetroText 
					text="READY TO BUILD THE FUTURE?" 
					variant="neon" 
					size="xl" 
					animated={true}
					glow={true}
				/>
			</div>

			<button
				onclick={() => activeSection = 'styleguide'}
				style="
					background: {brandColors.glass.primary};
					border: 2px solid {brandColors.terminal.cyan};
					border-radius: 16px;
					padding: 20px 40px;
					color: {brandColors.text.primary};
					font-family: 'PP Supply Mono', monospace;
					font-size: 18px;
					font-weight: 700;
					cursor: pointer;
					backdrop-filter: blur(20px);
					transition: all 0.4s ease;
					text-shadow: 0 0 10px {brandColors.terminal.cyan};
				"
				onmouseenter={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = brandColors.terminal.cyan;
					target.style.color = brandColors.backgrounds.primary;
					target.style.boxShadow = `0 0 50px ${brandColors.terminal.cyan}`;
					target.style.transform = 'scale(1.05) translateY(-4px)';
					target.style.textShadow = 'none';
				}}
				onmouseleave={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = brandColors.glass.primary;
					target.style.color = brandColors.text.primary;
					target.style.boxShadow = 'none';
					target.style.transform = 'scale(1) translateY(0)';
					target.style.textShadow = `0 0 10px ${brandColors.terminal.cyan}`;
				}}
			>
				ENTER THE MATRIX
			</button>
		</section>
	{:else if activeSection === 'styleguide'}
		<BrandStyleguide />
		
		<!-- Back button -->
		<button
			onclick={() => activeSection = 'showcase'}
			style="
				position: fixed;
				top: 30px;
				right: 30px;
				background: {brandColors.glass.primary};
				border: 1px solid {brandColors.glass.border};
				border-radius: 12px;
				padding: 12px 20px;
				color: {brandColors.text.primary};
				font-family: 'PP Supply Mono', monospace;
				font-size: 14px;
				cursor: pointer;
				backdrop-filter: blur(20px);
				z-index: 1000;
				transition: all 0.3s ease;
			"
			onmouseenter={(e) => {
				const target = e.target as HTMLElement;
				target.style.background = brandColors.glass.secondary;
				target.style.boxShadow = `0 0 20px ${brandColors.glass.glow}`;
			}}
			onmouseleave={(e) => {
				const target = e.target as HTMLElement;
				target.style.background = brandColors.glass.primary;
				target.style.boxShadow = 'none';
			}}
		>
			← Back to Showcase
		</button>
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	
	.showcase-page {
		font-family: 'PP Supply Sans', sans-serif;
	}

	.hero {
		padding: 40px 20px 60px 20px;
	}

	@media (min-width: 640px) {
		.hero {
			padding: 60px 30px 80px 30px;
		}
	}

	@media (min-width: 768px) {
		.hero {
			padding: 80px 40px 100px 40px;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding: 100px 40px;
		}
	}

	.demo-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
		max-width: 1400px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.demo-grid {
			gap: 40px;
		}
	}

	@media (min-width: 1024px) {
		.demo-grid {
			grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		}
	}

</style>