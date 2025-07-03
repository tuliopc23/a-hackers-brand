<script>
	import { onMount } from 'svelte';
	import { GlassCard, GlassButton } from '$lib/components/liquidify';
	import { TerminalWindow } from '$lib/components';
	import CodeHighlight from '$lib/components/CodeHighlight.svelte';
	import DocsNav from '$lib/components/DocsNav.svelte';
	import { magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	
	// Lazy load WebGL background
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));
	
	let mounted = false;
	let selectedSection = 'philosophy';
	let showToast = false;
	
	// Brand guidelines sections
	const sections = {
		philosophy: {
			title: 'Brand Philosophy',
			description: 'The core principles that drive the liquid glass terminal fusion aesthetic',
			icon: '🎯'
		},
		identity: {
			title: 'Visual Identity',
			description: 'Brand DNA, personality, and visual language definition',
			icon: '🎨'
		},
		typography: {
			title: 'Typography System',
			description: 'Font usage, hierarchy, and typographic principles',
			icon: '✍️'
		},
		colors: {
			title: 'Color Guidelines',
			description: 'Brand colors, usage rules, and accessibility considerations',
			icon: '🌈'
		},
		glass: {
			title: 'Glass System',
			description: 'Glass morphism implementation and usage guidelines',
			icon: '🔮'
		},
		animation: {
			title: 'Animation & Motion',
			description: 'Motion principles, easing functions, and interaction patterns',
			icon: '⚡'
		},
		components: {
			title: 'Component Usage',
			description: 'Guidelines for using and customizing components',
			icon: '🧩'
		},
		accessibility: {
			title: 'Accessibility',
			description: 'Inclusive design practices and accessibility standards',
			icon: '♿'
		}
	};
	
	// Brand principles
	const principles = [
		{
			title: 'Fluid Minimalism',
			description: 'Clean, uncluttered interfaces with purposeful complexity',
			example: 'Every element serves a function, nothing is decorative'
		},
		{
			title: 'Terminal Authenticity',
			description: 'Genuine respect for command-line heritage and aesthetics',
			example: 'Real monospace fonts, authentic terminal colors'
		},
		{
			title: 'Glass Sophistication',
			description: 'Translucent, layered depth that feels premium and modern',
			example: 'Backdrop blur, subtle transparency, depth layering'
		},
		{
			title: 'Magnetic Interaction',
			description: 'Subtle animations that draw users in and feel responsive',
			example: 'Hover effects, micro-interactions, physics-based motion'
		},
		{
			title: 'Professional Innovation',
			description: 'Cutting-edge design without sacrificing usability',
			example: 'WebGL effects that enhance, not distract from functionality'
		}
	];
	
	// Do's and Don'ts
	const dos = [
		'Use PP Supply Sans for all UI text',
		'Apply magnetic hover to interactive elements',
		'Layer glass components for depth',
		'Use terminal colors for interactive states',
		'Maintain consistent border radius (8px-16px)',
		'Test contrast ratios for accessibility',
		'Use blur effects strategically',
		'Respect user motion preferences'
	];
	
	const donts = [
		'Mix more than two typefaces',
		'Overuse heavy glass effects',
		'Mix glass with solid backgrounds',
		'Use animation for purely decorative purposes',
		'Ignore accessibility contrast requirements',
		'Stack more than 3 glass layers',
		'Use font weights below 300 or above 700',
		'Neglect keyboard navigation'
	];
	
	// Component usage examples
	const usageExamples = [
		{
			component: 'GlassButton',
			correct: '<GlassButton variant="primary" magnetic ripple>Deploy</GlassButton>',
			incorrect: '<GlassButton style="background: solid red;">Deploy</GlassButton>',
			reason: 'Avoid solid backgrounds on glass components'
		},
		{
			component: 'GlassCard',
			correct: '<GlassCard intensity="medium" class="p-6">Content</GlassCard>',
			incorrect: '<GlassCard intensity="intense" class="p-1">Content</GlassCard>',
			reason: 'Heavy glass effects need adequate padding for readability'
		},
		{
			component: 'TerminalWindow',
			correct: '<TerminalWindow title="zsh">Terminal content</TerminalWindow>',
			incorrect: '<TerminalWindow title="My App">Terminal content</TerminalWindow>',
			reason: 'Use authentic terminal names for credibility'
		}
	];
	
	onMount(() => {
		mounted = true;
		
		// Apply magnetic hover effects
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach(el => magneticHover(el));
	});
	
	// Copy code snippet
	const copyCode = async (code) => {
		try {
			await navigator.clipboard.writeText(code);
			showToast = true;
			setTimeout(() => showToast = false, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

<svelte:head>
	<title>Brand Guidelines - Liquid Glass Terminal Fusion</title>
	<meta name="description" content="Comprehensive brand guidelines for the liquid glass terminal fusion design system including philosophy, usage rules, and implementation guidelines." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="absolute inset-0 opacity-10">
			<svelte:component this={LazyLiquidBackground.component} />
		</div>
	{/if}
	
	<!-- Navigation -->
	<DocsNav currentSection="Brand Guidelines" />
	
	<!-- Header -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
					Brand Guidelines
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					The definitive guide to the liquid glass terminal fusion design system. Learn the principles, rules, and best practices.
				</p>
			</div>
			
			<!-- Section Navigation -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
				{#each Object.entries(sections) as [key, section]}
					<button 
						class="p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-left {selectedSection === key ? 'bg-blue-500/20 border-blue-500/30' : ''}"
						on:click={() => selectedSection = key}
						data-magnetic
					>
						<div class="text-2xl mb-2">{section.icon}</div>
						<div class="font-semibold text-sm">{section.title}</div>
					</button>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- Content Sections -->
	<section class="relative z-10 py-8 px-6">
		<div class="max-w-7xl mx-auto">
			{#each Object.entries(sections) as [key, section]}
				{#if selectedSection === key}
					<div class="animate-in fade-in duration-300">
						<div class="text-center mb-12">
							<h2 class="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
								<span class="text-2xl">{section.icon}</span>
								<span>{section.title}</span>
							</h2>
							<p class="text-lg text-white/70 max-w-2xl mx-auto">
								{section.description}
							</p>
						</div>
						
						<!-- Philosophy Section -->
						{#if selectedSection === 'philosophy'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Core Principles</h3>
									<div class="grid md:grid-cols-2 gap-8">
										{#each principles as principle}
											<div class="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors">
												<h4 class="text-lg font-semibold mb-3">{principle.title}</h4>
												<p class="text-white/80 mb-4">{principle.description}</p>
												<div class="text-sm text-white/60 font-mono bg-black/20 rounded p-2">
													{principle.example}
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Brand Equation</h3>
									<div class="text-center space-y-4">
										<div class="flex items-center justify-center space-x-4 text-lg">
											<div class="bg-blue-500/20 px-4 py-2 rounded-lg">Apple Minimalism</div>
											<span class="text-2xl">+</span>
											<div class="bg-green-500/20 px-4 py-2 rounded-lg">Terminal Culture</div>
											<span class="text-2xl">=</span>
											<div class="bg-purple-500/20 px-4 py-2 rounded-lg">Liquid Glass Terminal Fusion</div>
										</div>
										<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
											<div class="text-center">
												<div class="text-blue-400 font-semibold mb-2">Apple Minimalism</div>
												<div class="text-sm text-white/70 space-y-1">
													<div>Clean interfaces</div>
													<div>Refined interactions</div>
													<div>Premium materials</div>
													<div>System fonts</div>
												</div>
											</div>
											<div class="text-center">
												<div class="text-green-400 font-semibold mb-2">Terminal Culture</div>
												<div class="text-sm text-white/70 space-y-1">
													<div>Monospace typography</div>
													<div>Command-line patterns</div>
													<div>Hacker aesthetics</div>
													<div>Terminal colors</div>
												</div>
											</div>
											<div class="text-center">
												<div class="text-purple-400 font-semibold mb-2">Liquid Glass Fusion</div>
												<div class="text-sm text-white/70 space-y-1">
													<div>Translucent layers</div>
													<div>Magnetic micro-interactions</div>
													<div>Fluid animations</div>
													<div>Glass morphism</div>
												</div>
											</div>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'identity'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Brand Personality</h3>
									<div class="grid md:grid-cols-3 gap-8">
										<div class="text-center">
											<div class="text-xl font-semibold mb-2">Professional</div>
											<div class="text-white/70">yet Approachable</div>
										</div>
										<div class="text-center">
											<div class="text-xl font-semibold mb-2">Innovative</div>
											<div class="text-white/70">but Familiar</div>
										</div>
										<div class="text-center">
											<div class="text-xl font-semibold mb-2">Powerful</div>
											<div class="text-white/70">yet Elegant</div>
										</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Voice & Tone</h3>
									<div class="grid md:grid-cols-3 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-3 text-blue-400">Tone</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Confident</li>
												<li>• Knowledgeable</li>
												<li>• Subtly playful</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-3 text-green-400">Voice</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Direct</li>
												<li>• Precise</li>
												<li>• Occasionally technical</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-3 text-purple-400">Emotion</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Curiosity</li>
												<li>• Mastery</li>
												<li>• Satisfaction</li>
											</ul>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'typography'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Primary Typeface: PP Supply Sans</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-3">Usage</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Headers and body text</li>
												<li>• UI elements</li>
												<li>• Marketing materials</li>
												<li>• Documentation</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-3">Characteristics</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Geometric and modern</li>
												<li>• Highly legible</li>
												<li>• Professional appearance</li>
												<li>• Excellent readability</li>
											</ul>
										</div>
									</div>
									<div class="mt-6 p-4 bg-black/20 rounded-lg">
										<div class="text-4xl font-sans mb-2">The quick brown fox jumps over the lazy dog</div>
										<div class="text-sm text-white/60 font-mono">PP Supply Sans</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Secondary Typeface: PP Supply Mono</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-3">Usage</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Code blocks</li>
												<li>• Terminal interfaces</li>
												<li>• Technical content</li>
												<li>• Data displays</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-3">Characteristics</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Monospaced</li>
												<li>• Terminal-authentic</li>
												<li>• Excellent for code</li>
												<li>• Clear character distinction</li>
											</ul>
										</div>
									</div>
									<div class="mt-6 p-4 bg-black/20 rounded-lg">
										<div class="text-2xl font-mono mb-2">The quick brown fox jumps over the lazy dog</div>
										<div class="text-sm text-white/60 font-mono">PP Supply Mono</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'colors'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Color Usage Rules</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-4 text-blue-400">Primary Blue (#007aff)</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Primary buttons and CTAs</li>
												<li>• Focus states and selection</li>
												<li>• Links and interactive elements</li>
												<li>• Loading states and progress</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-4 text-green-400">Terminal Green (#30d158)</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Success states and confirmations</li>
												<li>• Terminal prompts and active states</li>
												<li>• Positive feedback</li>
												<li>• Command execution indicators</li>
											</ul>
										</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Accessibility Requirements</h3>
									<div class="space-y-4">
										<div class="flex items-center justify-between p-4 bg-black/20 rounded-lg">
											<span>Text contrast ratio</span>
											<span class="font-mono text-green-400">4.5:1 minimum</span>
										</div>
										<div class="flex items-center justify-between p-4 bg-black/20 rounded-lg">
											<span>Large text contrast ratio</span>
											<span class="font-mono text-green-400">3:1 minimum</span>
										</div>
										<div class="flex items-center justify-between p-4 bg-black/20 rounded-lg">
											<span>UI elements contrast ratio</span>
											<span class="font-mono text-green-400">3:1 minimum</span>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'glass'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Glass Effect Guidelines</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-4 text-green-400">✅ Do</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Layer glass components for depth</li>
												<li>• Use blur effects strategically</li>
												<li>• Maintain consistent opacity levels</li>
												<li>• Test readability over various backgrounds</li>
												<li>• Use subtle transparency for elegance</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-4 text-red-400">❌ Don't</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Overuse heavy glass effects</li>
												<li>• Mix glass with solid backgrounds</li>
												<li>• Stack more than 3 glass layers</li>
												<li>• Ignore accessibility contrast requirements</li>
												<li>• Use glass for critical text content</li>
											</ul>
										</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Glass Intensity Levels</h3>
									<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
										{#each ['subtle', 'medium', 'heavy'] as intensity}
											<div class="text-center">
												<div class="h-24 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg mb-4 relative">
													<div class="absolute inset-0 backdrop-blur-sm bg-white/{intensity === 'subtle' ? '5' : intensity === 'medium' ? '15' : '25'} rounded-lg border border-white/10"></div>
												</div>
												<div class="font-semibold capitalize">{intensity}</div>
												<div class="text-sm text-white/60">
													{intensity === 'subtle' ? 'Minimal glass effect' : intensity === 'medium' ? 'Standard glass effect' : 'Strong glass effect'}
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'animation'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Motion Principles</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div class="space-y-4">
											<div class="border border-white/10 rounded-lg p-4">
												<h4 class="font-semibold mb-2">Fluid & Natural</h4>
												<p class="text-white/80 text-sm">Animations feel organic and physics-based</p>
											</div>
											<div class="border border-white/10 rounded-lg p-4">
												<h4 class="font-semibold mb-2">Purposeful</h4>
												<p class="text-white/80 text-sm">Every animation serves a functional purpose</p>
											</div>
										</div>
										<div class="space-y-4">
											<div class="border border-white/10 rounded-lg p-4">
												<h4 class="font-semibold mb-2">Subtle</h4>
												<p class="text-white/80 text-sm">Motion enhances, never distracts</p>
											</div>
											<div class="border border-white/10 rounded-lg p-4">
												<h4 class="font-semibold mb-2">Responsive</h4>
												<p class="text-white/80 text-sm">Animations adapt to user preferences</p>
											</div>
										</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Signature Effects</h3>
									<div class="space-y-6">
										<div class="border border-white/10 rounded-lg p-6">
											<h4 class="text-lg font-semibold mb-3">Magnetic Hover</h4>
											<p class="text-white/80 mb-4">Elements subtly respond to cursor proximity</p>
											<CodeHighlight 
												code="transform: translateY(-2px) scale(1.02); transition: transform 150ms cubic-bezier(0.68, -0.55, 0.265, 1.55);"
												language="css"
											/>
										</div>
										
										<div class="border border-white/10 rounded-lg p-6">
											<h4 class="text-lg font-semibold mb-3">Glass Ripple</h4>
											<p class="text-white/80 mb-4">Click interactions create expanding glass ripples</p>
											<CodeHighlight 
												code="transform: scale(4); opacity: 0; animation: glass-ripple 600ms ease-out;"
												language="css"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'components'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Do's and Don'ts</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-4 text-green-400">✅ Do</h4>
											<ul class="space-y-2 text-white/80">
												{#each dos as item}
													<li class="flex items-start space-x-2">
														<span class="text-green-400 mt-1">•</span>
														<span>{item}</span>
													</li>
												{/each}
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-4 text-red-400">❌ Don't</h4>
											<ul class="space-y-2 text-white/80">
												{#each donts as item}
													<li class="flex items-start space-x-2">
														<span class="text-red-400 mt-1">•</span>
														<span>{item}</span>
													</li>
												{/each}
											</ul>
										</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Usage Examples</h3>
									<div class="space-y-8">
										{#each usageExamples as example}
											<div class="border border-white/10 rounded-lg p-6">
												<h4 class="text-lg font-semibold mb-4">{example.component}</h4>
												<div class="grid md:grid-cols-2 gap-6">
													<div>
														<h5 class="text-sm font-semibold text-green-400 mb-2">✅ Correct</h5>
														<CodeHighlight 
															code={example.correct}
															language="svelte"
															showCopy={false}
														/>
													</div>
													<div>
														<h5 class="text-sm font-semibold text-red-400 mb-2">❌ Incorrect</h5>
														<CodeHighlight 
															code={example.incorrect}
															language="svelte"
															showCopy={false}
														/>
													</div>
												</div>
												<div class="mt-4 text-sm text-white/70">
													<strong>Why:</strong> {example.reason}
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'accessibility'}
							<div class="space-y-12">
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Accessibility Standards</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-4 text-blue-400">Color Contrast</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Text: 4.5:1 contrast ratio minimum</li>
												<li>• Large text: 3:1 contrast ratio minimum</li>
												<li>• UI elements: 3:1 contrast ratio minimum</li>
												<li>• Test with various backdrop images</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-4 text-green-400">Motion & Animation</h4>
											<ul class="space-y-2 text-white/80">
												<li>• Respect prefers-reduced-motion</li>
												<li>• Provide alternative static states</li>
												<li>• Avoid seizure-inducing effects</li>
												<li>• Keep animations under 5 seconds</li>
											</ul>
										</div>
									</div>
								</GlassCard>
								
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Implementation Guidelines</h3>
									<div class="space-y-6">
										<div class="border border-white/10 rounded-lg p-4">
											<h4 class="font-semibold mb-2">Reduced Motion</h4>
											<CodeHighlight 
												code={'@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }'}
												language="css"
												title="Respect user motion preferences"
											/>
										</div>
										
										<div class="border border-white/10 rounded-lg p-4">
											<h4 class="font-semibold mb-2">Focus Management</h4>
											<CodeHighlight 
												code={'.glass-button:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 2px; }'}
												language="css"
												title="Visible focus indicators"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{/if}
					</div>
				{/if}
			{/each}
		</div>
	</section>
	
	<!-- Toast Notification -->
	{#if showToast}
		<div class="fixed top-6 right-6 z-50 backdrop-blur-sm bg-green-500/20 border border-green-500/30 rounded-lg p-4 animate-in fade-in duration-200">
			<div class="flex items-center space-x-2">
				<div class="w-4 h-4 bg-green-500 rounded-full"></div>
				<span class="text-sm font-medium">Code copied to clipboard!</span>
			</div>
		</div>
	{/if}
	
	<!-- Footer -->
	<footer class="relative z-10 py-8 px-6 mt-16 backdrop-blur-sm bg-white/5 border-t border-white/10">
		<div class="max-w-7xl mx-auto text-center">
			<p class="text-white/70">
				Follow these guidelines to maintain design system consistency and quality
			</p>
		</div>
	</footer>
</div>

<style>
	:global([data-magnetic]) {
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
	
	:global([data-magnetic]:hover) {
		transform: translateY(-2px) scale(1.02);
	}
	
	.animate-in {
		animation: fadeIn 0.3s ease-out;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>