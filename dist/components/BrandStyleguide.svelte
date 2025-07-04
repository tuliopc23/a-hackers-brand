<script lang="ts">
	import { onMount } from 'svelte';
	import { brandColors, typography, animations } from '../tokens';
	import RetroText from './RetroText.svelte';
	import AdvancedLiquidTerminal from './AdvancedLiquidTerminal.svelte';
	import VintageMacScreen from './VintageMacScreen.svelte';
	import LiquidGlassScene from './webgl/LiquidGlassScene.svelte';

	interface Props {
		section?: 'overview' | 'colors' | 'typography' | 'components' | 'effects' | 'interactive';
		interactive?: boolean;
		class?: string;
	}

	const {
		section = 'overview',
		interactive = true,
		class: className = ''
	}: Props = $props();

	let activeSection = $state(section);
	const showCode = $state(false);
	const selectedColor = $state('');
	let animationSpeed = $state(1);

	const sections = [
		{ id: 'overview', name: 'Overview', icon: '◉' },
		{ id: 'colors', name: 'Colors', icon: '◆' },
		{ id: 'typography', name: 'Typography', icon: '◈' },
		{ id: 'components', name: 'Components', icon: '◇' },
		{ id: 'effects', name: 'Effects', icon: '◉' },
		{ id: 'interactive', name: 'Interactive', icon: '◊' }
	];

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		// You could add a toast notification here
	}

	function generateColorPalette() {
		return Object.entries(brandColors.terminal).map(([name, color]) => ({
			name,
			color,
			usage: getColorUsage(name)
		}));
	}

	function getColorUsage(colorName: string) {
		const usages = {
			green: 'Primary terminal text, success states, matrix effects',
			cyan: 'Interactive elements, hover states, neon highlights',
			blue: 'Information, links, secondary actions',
			purple: 'Accent colors, special highlights, cyberpunk effects',
			matrix: 'Matrix rain effects, success confirmations',
			neon: 'Call-to-action elements, error states, hot highlights',
			amber: 'Warnings, retro elements, vintage screens',
			lime: 'Success states, positive feedback',
			magenta: 'Special effects, futuristic elements',
			orange: 'Alerts, fire effects, energy states'
		};
		return usages[colorName] || 'General purpose';
	}
</script>

<div class="brand-styleguide {className}" style="
	font-family: 'PP Supply Sans', sans-serif;
	background: {brandColors.backgrounds.primary};
	color: {brandColors.text.primary};
	min-height: 100vh;
	display: flex;
">
	<!-- Sidebar Navigation -->
	<nav class="styleguide-nav" style="
		width: 100%;
		background: {brandColors.glass.background};
		backdrop-filter: blur(20px) saturate(180%);
		border-right: 1px solid {brandColors.glass.border};
		padding: 20px;
		position: fixed;
		height: 100vh;
		overflow-y: auto;
		z-index: 1000;
	">
		<div style="margin-bottom: 40px;">
			<RetroText 
				text="TULIO BRAND SYSTEM" 
				variant="matrix" 
				size="lg" 
				animated={true}
				glow={true}
			/>
			<div style="
				color: {brandColors.text.muted};
				font-size: 14px;
				font-family: 'PP Supply Mono', monospace;
				margin-top: 10px;
			">
				v2.0.0 • Interactive Styleguide
			</div>
		</div>

		<ul style="list-style: none; padding: 0; margin: 0;">
			{#each sections as sectionItem}
				<li style="margin-bottom: 8px;">
					<button
						class="nav-item"
						class:active={activeSection === sectionItem.id}
						onclick={() => activeSection = sectionItem.id}
						style="
							width: 100%;
							background: {activeSection === sectionItem.id ? brandColors.glass.primary : 'transparent'};
							border: 1px solid {activeSection === sectionItem.id ? brandColors.glass.border : 'transparent'};
							border-radius: 8px;
							padding: 12px 16px;
							color: {activeSection === sectionItem.id ? brandColors.text.primary : brandColors.text.secondary};
							font-family: 'PP Supply Mono', monospace;
							font-size: 14px;
							text-align: left;
							cursor: pointer;
							transition: all 0.3s ease;
							display: flex;
							align-items: center;
							gap: 12px;
						"
						onmouseenter={(e) => {
							if (activeSection !== sectionItem.id) {
								const target = e.target as HTMLElement;
								target.style.background = brandColors.glass.accent;
								target.style.borderColor = brandColors.glass.border;
								target.style.color = brandColors.text.primary;
							}
						}}
						onmouseleave={(e) => {
							if (activeSection !== sectionItem.id) {
								const target = e.target as HTMLElement;
								target.style.background = 'transparent';
								target.style.borderColor = 'transparent';
								target.style.color = brandColors.text.secondary;
							}
						}}
					>
						<span style="color: {brandColors.terminal.green};">{sectionItem.icon}</span>
						{sectionItem.name}
					</button>
				</li>
			{/each}
		</ul>

		<div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid {brandColors.glass.border};">
			<div style="font-size: 12px; color: {brandColors.text.muted}; margin-bottom: 16px;">
				SYSTEM STATUS
			</div>
			<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
				<div style="
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: {brandColors.terminal.green};
					box-shadow: 0 0 10px {brandColors.terminal.green};
					animation: pulse 2s ease-in-out infinite;
				"></div>
				<span style="font-size: 12px; font-family: 'PP Supply Mono', monospace;">
					WebGL Active
				</span>
			</div>
			<div style="display: flex; align-items: center; gap: 8px;">
				<div style="
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: {brandColors.terminal.cyan};
					box-shadow: 0 0 10px {brandColors.terminal.cyan};
				"></div>
				<span style="font-size: 12px; font-family: 'PP Supply Mono', monospace;">
					Design System Loaded
				</span>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="styleguide-content" style="
		margin-left: 0;
		margin-top: 100vh;
		padding: 20px;
		flex: 1;
		max-width: 100%;
	">
		{#if activeSection === 'overview'}
			<div class="section-overview">
				<RetroText 
					text="Design System Overview" 
					variant="cyberpunk" 
					size="2xl" 
					animated={true}
				/>
				
				<div style="
					background: {brandColors.glass.background};
					border: 1px solid {brandColors.glass.border};
					border-radius: 16px;
					padding: 30px;
					margin: 30px 0;
					backdrop-filter: blur(20px);
				">
					<h3 style="
						color: {brandColors.terminal.green};
						font-family: 'PP Supply Mono', monospace;
						margin-bottom: 20px;
					">
						LIQUID GLASS TERMINAL FUSION
					</h3>
					<p style="line-height: 1.6; margin-bottom: 20px;">
						A cutting-edge design system that combines Apple's liquid glass aesthetics with terminal/CLI hacker aesthetics. 
						Built for developers who want jaw-dropping, innovative interfaces for portfolios and applications.
					</p>
					<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
						<div style="
							background: {brandColors.glass.accent};
							border: 1px solid {brandColors.glass.border};
							border-radius: 12px;
							padding: 20px;
						">
							<div style="color: {brandColors.terminal.green}; font-weight: 600; margin-bottom: 8px;">
								⚡ Advanced WebGL
							</div>
							<div style="font-size: 14px; color: {brandColors.text.secondary};">
								Threlte-powered 3D effects with liquid deformations
							</div>
						</div>
						<div style="
							background: {brandColors.glass.accent};
							border: 1px solid {brandColors.glass.border};
							border-radius: 12px;
							padding: 20px;
						">
							<div style="color: {brandColors.terminal.cyan}; font-weight: 600; margin-bottom: 8px;">
								🎨 Retro-Futuristic
							</div>
							<div style="font-size: 14px; color: {brandColors.text.secondary};">
								Hacker color palettes with vintage terminal aesthetics
							</div>
						</div>
						<div style="
							background: {brandColors.glass.accent};
							border: 1px solid {brandColors.glass.border};
							border-radius: 12px;
							padding: 20px;
						">
							<div style="color: {brandColors.terminal.neon}; font-weight: 600; margin-bottom: 8px;">
								🚀 Interactive
							</div>
							<div style="font-size: 14px; color: {brandColors.text.secondary};">
								Magnetic hover effects and liquid animations
							</div>
						</div>
					</div>
				</div>

				<div style="height: 400px; margin: 40px 0;">
					<LiquidGlassScene 
						variant="combined" 
						animated={true}
						interactive={true}
						glowIntensity={1.2}
					/>
				</div>
			</div>
		{/if}

		{#if activeSection === 'colors'}
			<div class="section-colors">
				<RetroText 
					text="Color System" 
					variant="neon" 
					size="2xl" 
					animated={true}
				/>
				
				<div style="margin: 30px 0;">
					<h3 style="
						color: {brandColors.terminal.green};
						font-family: 'PP Supply Mono', monospace;
						margin-bottom: 20px;
					">
						HACKER TERMINAL PALETTE
					</h3>
					
					<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
						{#each generateColorPalette() as colorItem}
							<div 
								class="color-card"
								style="
									background: {brandColors.glass.background};
									border: 1px solid {brandColors.glass.border};
									border-radius: 12px;
									padding: 20px;
									cursor: pointer;
									transition: all 0.3s ease;
								"
								onclick={() => copyToClipboard(colorItem.color)}
								onmouseenter={(e) => {
									const target = e.target as HTMLElement;
									target.style.transform = 'translateY(-4px)';
									target.style.boxShadow = `0 8px 32px ${colorItem.color}40`;
								}}
								onmouseleave={(e) => {
									const target = e.target as HTMLElement;
									target.style.transform = 'translateY(0)';
									target.style.boxShadow = 'none';
								}}
							>
								<div style="
									width: 100%;
									height: 60px;
									background: {colorItem.color};
									border-radius: 8px;
									margin-bottom: 16px;
									box-shadow: 0 0 20px {colorItem.color}40;
								"></div>
								<div style="
									font-weight: 600;
									color: {brandColors.text.primary};
									font-family: 'PP Supply Mono', monospace;
									text-transform: uppercase;
									margin-bottom: 8px;
								">
									{colorItem.name}
								</div>
								<div style="
									font-size: 12px;
									color: {brandColors.text.muted};
									font-family: 'PP Supply Mono', monospace;
									margin-bottom: 12px;
								">
									{colorItem.color}
								</div>
								<div style="
									font-size: 13px;
									color: {brandColors.text.secondary};
									line-height: 1.4;
								">
									{colorItem.usage}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}

		{#if activeSection === 'typography'}
			<div class="section-typography">
				<RetroText 
					text="Typography System" 
					variant="terminal" 
					size="2xl" 
					animated={true}
				/>
				
				<div style="margin: 30px 0;">
					<div style="
						background: {brandColors.glass.background};
						border: 1px solid {brandColors.glass.border};
						border-radius: 16px;
						padding: 30px;
						margin-bottom: 30px;
					">
						<h3 style="
							color: {brandColors.terminal.green};
							font-family: 'PP Supply Mono', monospace;
							margin-bottom: 20px;
						">
							PP SUPPLY FONTS
						</h3>
						
						<div style="margin-bottom: 30px;">
							<div style="
								font-family: 'PP Supply Sans', sans-serif;
								font-size: 48px;
								font-weight: 700;
								color: {brandColors.text.primary};
								margin-bottom: 10px;
							">
								PP Supply Sans
							</div>
							<div style="
								font-family: 'PP Supply Sans', sans-serif;
								color: {brandColors.text.secondary};
								margin-bottom: 20px;
							">
								The quick brown fox jumps over the lazy dog
							</div>
						</div>
						
						<div>
							<div style="
								font-family: 'PP Supply Mono', monospace;
								font-size: 36px;
								font-weight: 700;
								color: {brandColors.terminal.green};
								text-shadow: 0 0 10px {brandColors.terminal.green};
								margin-bottom: 10px;
							">
								PP Supply Mono
							</div>
							<div style="
								font-family: 'PP Supply Mono', monospace;
								color: {brandColors.text.secondary};
							">
								const message = 'Hello, World!';
							</div>
						</div>
					</div>

					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
						<div>
							<h4 style="
								color: {brandColors.terminal.cyan};
								font-family: 'PP Supply Mono', monospace;
								margin-bottom: 20px;
							">
								RETRO TEXT VARIANTS
							</h4>
							<div style="margin-bottom: 20px;">
								<RetroText text="Matrix Green" variant="matrix" size="lg" />
							</div>
							<div style="margin-bottom: 20px;">
								<RetroText text="Neon Cyan" variant="neon" size="lg" />
							</div>
							<div style="margin-bottom: 20px;">
								<RetroText text="Cyberpunk Pink" variant="cyberpunk" size="lg" />
							</div>
							<div style="margin-bottom: 20px;">
								<RetroText text="Hologram" variant="hologram" size="lg" />
							</div>
							<div style="margin-bottom: 20px;">
								<RetroText text="Glitch Effect" variant="glitch" size="lg" />
							</div>
						</div>
						
						<div>
							<h4 style="
								color: {brandColors.terminal.cyan};
								font-family: 'PP Supply Mono', monospace;
								margin-bottom: 20px;
							">
								SIZE SCALE
							</h4>
							{#each ['sm', 'md', 'lg', 'xl', '2xl'] as size}
								<div style="margin-bottom: 16px;">
									<RetroText 
										text="Size {size.toUpperCase()}" 
										variant="terminal" 
										{size} 
										animated={false}
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if activeSection === 'components'}
			<div class="section-components">
				<RetroText 
					text="Interactive Components" 
					variant="cyberpunk" 
					size="2xl" 
					animated={true}
				/>
				
				<div style="margin: 30px 0;">
					<div style="margin-bottom: 40px;">
						<h3 style="
							color: {brandColors.terminal.green};
							font-family: 'PP Supply Mono', monospace;
							margin-bottom: 20px;
						">
							LIQUID TERMINAL
						</h3>
						<div style="height: 400px;">
							<AdvancedLiquidTerminal 
								title="Portfolio Terminal"
								variant="matrix"
								commands={['echo "Design System Demo"', 'ls components/', 'cat portfolio.txt']}
								autoType={true}
								liquidEffect={true}
							/>
						</div>
					</div>

					<div style="margin-bottom: 40px;">
						<h3 style="
							color: {brandColors.terminal.cyan};
							font-family: 'PP Supply Mono', monospace;
							margin-bottom: 20px;
						">
							VINTAGE MAC SCREEN
						</h3>
						<div style="display: flex; justify-content: center;">
							<VintageMacScreen 
								variant="se30"
								content="Welcome to Tulio Design System&#10;&#10;A retro-futuristic brand system&#10;for innovative developers.&#10;&#10;> System ready..."
								animated={true}
								scanlines={true}
								crtEffect={true}
							/>
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if activeSection === 'interactive'}
			<div class="section-interactive">
				<RetroText 
					text="Interactive Playground" 
					variant="hologram" 
					size="2xl" 
					animated={true}
				/>
				
				<div style="
					background: {brandColors.glass.background};
					border: 1px solid {brandColors.glass.border};
					border-radius: 16px;
					padding: 30px;
					margin: 30px 0;
				">
					<div style="height: 500px;">
						<LiquidGlassScene 
							variant="combined" 
							animated={true}
							interactive={true}
							glowIntensity={1.5}
							liquidSpeed={animationSpeed}
							colorPrimary={brandColors.terminal.green}
							colorSecondary={brandColors.terminal.cyan}
						/>
					</div>
					
					<div style="margin-top: 30px; display: flex; gap: 20px; align-items: center;">
						<label style="
							color: {brandColors.text.primary};
							font-family: 'PP Supply Mono', monospace;
							font-size: 14px;
						">
							Animation Speed:
						</label>
						<input 
							type="range" 
							min="0.1" 
							max="2" 
							step="0.1" 
							bind:value={animationSpeed}
							style="flex: 1; max-width: 200px;"
						/>
						<span style="
							color: {brandColors.terminal.green};
							font-family: 'PP Supply Mono', monospace;
							font-size: 14px;
						">
							{animationSpeed}x
						</span>
					</div>
				</div>
			</div>
		{/if}
	</main>
</div>

<style>
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.1); }
	}

	.nav-item:active {
		transform: scale(0.98);
	}

	.color-card:active {
		transform: translateY(-2px) scale(0.98);
	}

	.styleguide-nav {
		width: 100%;
		padding: 20px;
	}

	@media (min-width: 768px) {
		.styleguide-nav {
			width: 280px;
			padding: 30px 20px;
		}
	}

	.styleguide-content {
		margin-left: 0;
		margin-top: 100vh;
		padding: 20px;
	}

	@media (min-width: 768px) {
		.styleguide-content {
			margin-left: 280px;
			margin-top: 0;
			padding: 40px;
			max-width: 1200px;
		}
	}
</style>