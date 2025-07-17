<script lang="ts">
	import RetroText from '$lib/components/RetroText.svelte';
	import { brandColors } from '$lib/tokens';

	let activeSection = $state('showcase');
</script>

<svelte:head>
	<title>Tulio Brand System - Showcase</title>
	<meta name="description" content="Advanced Liquid Glass Terminal Fusion Design System" />
</svelte:head>

<div
	class="showcase-page"
	style="
	background: {brandColors.backgrounds.primary};
	min-height: 100vh;
	color: {brandColors.text.primary};
"
>
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
				<RetroText text="TULIO BRAND SYSTEM" variant="terminal" size="2xl" glow={true} />
			</div>

			<div style="margin-bottom: 60px;">
				<RetroText text="Advanced Liquid Glass Terminal Fusion" variant="vintage" size="lg" />
			</div>

			<div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 80px;">
				<button
					onclick={() => (activeSection = 'styleguide')}
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
				<div style="height: 400px;" class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
					<div class="text-terminal-green font-mono">
						<div class="mb-2 text-white/70">Matrix Terminal</div>
						<div>$ echo "Welcome to the future"</div>
						<div class="text-white">Welcome to the future</div>
						<div>$ ls portfolio/</div>
						<div class="text-blue-400">projects/ skills/ design-system/</div>
						<div>$ cat skills.txt</div>
						<div class="text-yellow-400">• WebGL Development</div>
						<div class="text-yellow-400">• Liquid Glass Design</div>
						<div class="text-yellow-400">• Terminal UI Systems</div>
						<div>$ run design-system.exe</div>
						<div class="text-green-400">✓ System activated</div>
					</div>
				</div>

				<!-- System Demo -->
				<div style="display: flex; justify-content: center; align-items: center;">
					<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-8">
						<div class="text-terminal-green font-mono">
							<div>SYSTEM BOOT SEQUENCE</div>
							<div>Loading A Hacker's Brand System...</div>
							<div>✓ Matrix effects initialized</div>
							<div>✓ Liquid glass ready</div>
							<div>✓ WebGL acceleration active</div>
							<div>Welcome to the future of design.</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio Cards Section -->
		<section
			class="portfolio-demo"
			style="
			padding: 100px 40px;
			background: {brandColors.backgrounds.secondary};
		"
		>
			<div style="text-align: center; margin-bottom: 60px;">
				<RetroText text="PORTFOLIO COMPONENTS" variant="terminal" size="xl" animated={true} glow={true} />
			</div>

			<div
				style="
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
				gap: 30px;
				max-width: 1200px;
				margin: 0 auto;
			"
			>
				<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
					<h3 class="text-xl font-bold mb-3">Neural Network Visualizer</h3>
					<p class="text-white/70 mb-4">
						Interactive 3D visualization of neural networks with real-time training data. Built with WebGL shaders and
						liquid morphing effects.
					</p>
					<div class="flex flex-wrap gap-2 mb-4">
						{#each ['Three.js', 'WebGL', 'TypeScript', 'Svelte'] as tech}
							<span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">{tech}</span>
						{/each}
					</div>
				</div>

				<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
					<h3 class="text-xl font-bold mb-3">Cyberpunk Dashboard</h3>
					<p class="text-white/70 mb-4">
						Retro-futuristic data dashboard with real-time metrics, holographic displays, and terminal interfaces.
					</p>
					<div class="flex flex-wrap gap-2 mb-4">
						{#each ['D3.js', 'WebGL', 'Node.js', 'PostgreSQL'] as tech}
							<span class="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">{tech}</span>
						{/each}
					</div>
				</div>

				<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
					<h3 class="text-xl font-bold mb-3">Quantum Code Editor</h3>
					<p class="text-white/70 mb-4">
						Next-generation code editor with AI assistance, liquid syntax highlighting, and holographic code completion.
					</p>
					<div class="flex flex-wrap gap-2 mb-4">
						{#each ['Monaco', 'AI/ML', 'Rust', 'WASM'] as tech}
							<span class="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">{tech}</span>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<!-- Text Effects Showcase -->
		<section
			class="text-effects"
			style="
			padding: 100px 40px;
			background: {brandColors.backgrounds.tertiary};
			text-align: center;
		"
		>
			<div style="margin-bottom: 60px;">
				<RetroText text="TEXT EFFECTS SHOWCASE" variant="commodore" size="xl" animated={true} />
			</div>

			<div
				style="
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				gap: 40px;
				max-width: 1000px;
				margin: 0 auto;
			"
			>
				<div>
					<div style="margin-bottom: 20px;">
						<RetroText text="MATRIX MODE" variant="terminal" size="lg" animated={true} scanlines={true} />
					</div>
					<div style="margin-bottom: 20px;">
						<RetroText text="NEON GLOW" variant="vintage" size="lg" animated={true} glow={true} />
					</div>
					<div style="margin-bottom: 20px;">
						<RetroText text="CYBERPUNK STYLE" variant="commodore" size="lg" animated={true} />
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
		<section
			class="cta"
			style="
			padding: 100px 40px;
			text-align: center;
			background: {brandColors.gradients.cyberpunk};
		"
		>
			<div style="margin-bottom: 40px;">
				<RetroText text="READY TO BUILD THE FUTURE?" variant="neon" size="xl" animated={true} glow={true} />
			</div>

			<button
				onclick={() => (activeSection = 'styleguide')}
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
		<div class="min-h-screen p-8">
			<h1 class="text-4xl font-bold mb-8">Brand Styleguide</h1>
			<div class="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 p-6">
				<p class="text-white/70">Brand styleguide component coming soon...</p>
			</div>
		</div>

		<!-- Back button -->
		<button
			onclick={() => (activeSection = 'showcase')}
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
