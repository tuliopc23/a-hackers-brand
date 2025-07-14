<script>
	import { onMount } from 'svelte';
	import { GlassCard, GlassButton } from '$lib/components/liquidify';
	import { magneticHover } from '$lib/motion';
	import { lazy } from '$lib/utils/lazy.js';
	import CodeBlock from '$lib/components/CodeBlock.svelte';

	// Lazy load WebGL background
	const LazyLiquidBackground = lazy(() => import('$lib/components/webgl/LiquidBackground.svelte'));

	let mounted = $state(false);
	let selectedSection = $state('overview');
	const contrastResult = $state(null);
	let showMotionDemo = $state(true);

	// Accessibility sections
	const accessibilityCategories = {
		overview: {
			title: 'Overview',
			description: 'Accessibility principles and standards for inclusive design',
			icon: '♿'
		},
		contrast: {
			title: 'Color Contrast',
			description: 'Color combinations and contrast ratio testing',
			icon: '🎨'
		},
		motion: {
			title: 'Motion & Animation',
			description: 'Reduced motion support and animation accessibility',
			icon: '⚡'
		},
		keyboard: {
			title: 'Keyboard Navigation',
			description: 'Focus management and keyboard interaction patterns',
			icon: '⌨️'
		},
		screen_readers: {
			title: 'Screen Readers',
			description: 'ARIA labels, semantic HTML, and assistive technology',
			icon: '🔊'
		},
		testing: {
			title: 'Testing Tools',
			description: 'Accessibility testing tools and validation methods',
			icon: '🧪'
		}
	};

	// WCAG compliance levels
	const wcagLevels = [
		{
			level: 'A',
			title: 'Level A (Minimum)',
			description: 'Basic accessibility features for minimal compliance',
			requirements: [
				'Keyboard accessibility',
				'Text alternatives for images',
				'Proper heading structure',
				'Color not as sole indicator'
			],
			color: 'red'
		},
		{
			level: 'AA',
			title: 'Level AA (Standard)',
			description: 'Standard level recommended for most applications',
			requirements: [
				'4.5:1 contrast ratio for normal text',
				'3:1 contrast ratio for large text',
				'3:1 contrast ratio for UI components',
				'Text can be resized to 200%',
				'Focus indicators are visible'
			],
			color: 'yellow'
		},
		{
			level: 'AAA',
			title: 'Level AAA (Enhanced)',
			description: 'Highest level of accessibility compliance',
			requirements: [
				'7:1 contrast ratio for normal text',
				'4.5:1 contrast ratio for large text',
				'No audio auto-play',
				'Context-sensitive help available',
				'Error prevention and correction'
			],
			color: 'green'
		}
	];

	// Color combinations for testing
	const colorCombinations = [
		{
			name: 'Terminal Green on Dark',
			foreground: '#30D158',
			background: '#1D1D1F',
			ratio: '8.2:1',
			level: 'AAA',
			status: 'pass'
		},
		{
			name: 'Electric Blue on Dark',
			foreground: '#007AFF',
			background: '#1D1D1F',
			ratio: '5.1:1',
			level: 'AA',
			status: 'pass'
		},
		{
			name: 'Neon Pink on Dark',
			foreground: '#FF1493',
			background: '#1D1D1F',
			ratio: '4.8:1',
			level: 'AA',
			status: 'pass'
		},
		{
			name: 'Glass Medium on Dark',
			foreground: '#FFFFFF',
			background: 'rgba(255, 255, 255, 0.15)',
			ratio: '3.2:1',
			level: 'AA Large',
			status: 'warning'
		},
		{
			name: 'Glass Subtle on Dark',
			foreground: '#FFFFFF',
			background: 'rgba(255, 255, 255, 0.05)',
			ratio: '1.8:1',
			level: 'Fail',
			status: 'fail'
		}
	];

	// Motion preferences
	const motionPreferences = [
		{
			setting: 'No preference',
			description: 'User has not specified motion preferences',
			implementation: 'Full animations enabled'
		},
		{
			setting: 'Reduce motion',
			description: 'User prefers minimal or no animations',
			implementation: 'Animations disabled or minimized'
		}
	];

	// Keyboard navigation patterns
	const keyboardPatterns = [
		{
			component: 'Button',
			keys: ['Enter', 'Space'],
			behavior: 'Activates the button action',
			focus: 'Visible focus ring required'
		},
		{
			component: 'Modal',
			keys: ['Escape'],
			behavior: 'Closes the modal',
			focus: 'Focus trapped within modal'
		},
		{
			component: 'Dropdown',
			keys: ['Arrow Up/Down', 'Enter', 'Escape'],
			behavior: 'Navigate options, select, close',
			focus: 'Focus moves to selected option'
		},
		{
			component: 'Tab Navigation',
			keys: ['Tab', 'Shift+Tab'],
			behavior: 'Move between focusable elements',
			focus: 'Skip to main content link available'
		}
	];

	// Screen reader considerations
	const screenReaderGuidelines = [
		{
			category: 'Semantic HTML',
			description: 'Use proper HTML elements for their intended purpose',
			examples: [
				'<button> for interactive actions',
				'<nav> for navigation sections',
				'<main> for primary content',
				'<h1-h6> for heading hierarchy'
			]
		},
		{
			category: 'ARIA Labels',
			description: 'Provide descriptive labels for complex interactions',
			examples: [
				'aria-label for icon buttons',
				'aria-describedby for help text',
				'aria-expanded for collapsible content',
				'aria-live for dynamic content'
			]
		},
		{
			category: 'Alternative Text',
			description: 'Descriptive text for non-text content',
			examples: [
				'alt text for informative images',
				'Empty alt="" for decorative images',
				'aria-label for icon fonts',
				'Caption/description for complex graphics'
			]
		}
	];

	// Testing tools
	const testingTools = [
		{
			name: 'axe DevTools',
			type: 'Browser Extension',
			description: 'Automated accessibility testing in developer tools',
			features: ['WCAG compliance', 'Color contrast', 'Keyboard navigation'],
			url: 'https://www.deque.com/axe/devtools/'
		},
		{
			name: 'WAVE',
			type: 'Web Tool',
			description: 'Visual accessibility evaluation tool',
			features: ['Visual indicators', 'Error reporting', 'Color contrast'],
			url: 'https://wave.webaim.org/'
		},
		{
			name: 'Lighthouse',
			type: 'Built-in Tool',
			description: 'Google Chrome accessibility audit',
			features: ['Performance metrics', 'Best practices', 'SEO analysis'],
			url: 'Chrome DevTools'
		},
		{
			name: 'Pa11y',
			type: 'Command Line',
			description: 'Automated accessibility testing for CI/CD',
			features: ['Automated testing', 'Custom rules', 'CI integration'],
			url: 'https://pa11y.org/'
		}
	];

	onMount(() => {
		mounted = true;

		// Apply magnetic hover effects
		const magneticElements = document.querySelectorAll('[data-magnetic]');
		magneticElements.forEach((el) => magneticHover(el));

		// Check user's motion preference
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		showMotionDemo = !prefersReducedMotion;
	});

	// Calculate contrast ratio (simplified)
	const calculateContrast = (color1, color2) => {
		// This is a simplified version - real implementation would be more complex
		return Math.random() * 10 + 1; // Mock calculation
	};

	// Test motion preference
	const testMotionPreference = () => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		alert(prefersReducedMotion ? 'Reduced motion is preferred' : 'No motion preference set');
	};

	// Copy code to clipboard
	const copyCode = async (code) => {
		try {
			await navigator.clipboard.writeText(code);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};
</script>

<svelte:head>
	<title>Accessibility Guidelines - Liquid Glass Terminal Fusion</title>
	<meta
		name="description"
		content="Comprehensive accessibility guidelines, testing tools, and inclusive design principles for the liquid glass terminal fusion design system."
	/>
</svelte:head>

<div
	class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
>
	<!-- WebGL Background -->
	{#if mounted && LazyLiquidBackground.component}
		<div class="absolute inset-0 opacity-10">
			<LazyLiquidBackground.component />
		</div>
	{/if}

	<!-- Navigation -->
	<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<h1 class="text-xl font-bold text-white">A Hacker's Brand</h1>
				</div>
				<div class="text-sm text-white/70">Accessibility Guidelines</div>
			</div>
		</div>
	</nav>

	<!-- Header -->
	<section class="relative z-10 py-16 px-6">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1
					class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
				>
					Accessibility Guidelines
				</h1>
				<p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
					Building inclusive experiences that work for everyone, everywhere.
				</p>
			</div>

			<!-- Section Navigation -->
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
				{#each Object.entries(accessibilityCategories) as [key, category]}
					<button
						class="p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-left {selectedSection ===
						key
							? 'bg-blue-500/20 border-blue-500/30'
							: ''}"
						onclick={() => (selectedSection = key)}
						data-magnetic
					>
						<div class="text-2xl mb-2">{category.icon}</div>
						<div class="font-semibold text-sm">{category.title}</div>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Content Sections -->
	<section class="relative z-10 py-8 px-6">
		<div class="max-w-7xl mx-auto">
			{#each Object.entries(accessibilityCategories) as [key, category]}
				{#if selectedSection === key}
					<div class="animate-in fade-in duration-300">
						<div class="text-center mb-12">
							<h2 class="text-3xl font-bold mb-4 flex items-center justify-center space-x-3">
								<span class="text-2xl">{category.icon}</span>
								<span>{category.title}</span>
							</h2>
							<p class="text-lg text-white/70 max-w-2xl mx-auto">
								{category.description}
							</p>
						</div>

						<!-- Overview Section -->
						{#if selectedSection === 'overview'}
							<div class="space-y-12">
								<!-- WCAG Compliance Levels -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">WCAG Compliance Levels</h3>
									<div class="space-y-6">
										{#each wcagLevels as level (level.id || level)}
											<div class="border border-white/10 rounded-lg p-6">
												<div class="flex items-start justify-between mb-4">
													<div>
														<h4 class="text-xl font-semibold mb-2 text-{level.color}-400">
															{level.title}
														</h4>
														<p class="text-white/80">{level.description}</p>
													</div>
													<div
														class="px-3 py-1 bg-{level.color}-500/20 border border-{level.color}-500/30 rounded-full text-{level.color}-400 font-mono text-sm"
													>
														{level.level}
													</div>
												</div>
												<div class="space-y-2">
													<h5 class="font-semibold text-sm">Key Requirements:</h5>
													<ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
														{#each level.requirements as requirement (requirement.id || requirement)}
															<li class="flex items-start space-x-2 text-sm">
																<span class="text-{level.color}-400 mt-1">•</span>
																<span class="text-white/80">{requirement}</span>
															</li>
														{/each}
													</ul>
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>

								<!-- Our Commitment -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Our Accessibility Commitment</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-4 text-green-400">✓ What We Provide</h4>
											<ul class="space-y-3 text-white/80">
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>WCAG 2.1 AA compliance by default</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Automatic reduced motion support</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Semantic HTML structure</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Keyboard navigation support</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>Screen reader compatibility</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-green-400 mt-1">•</span>
													<span>High contrast color combinations</span>
												</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-4 text-blue-400">🎯 Testing Coverage</h4>
											<ul class="space-y-3 text-white/80">
												<li class="flex items-start space-x-2">
													<span class="text-blue-400 mt-1">•</span>
													<span>Automated accessibility testing in CI/CD</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-blue-400 mt-1">•</span>
													<span>Manual screen reader testing</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-blue-400 mt-1">•</span>
													<span>Keyboard-only navigation validation</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-blue-400 mt-1">•</span>
													<span>Color contrast ratio verification</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-blue-400 mt-1">•</span>
													<span>User testing with disabled users</span>
												</li>
												<li class="flex items-start space-x-2">
													<span class="text-blue-400 mt-1">•</span>
													<span>Mobile accessibility validation</span>
												</li>
											</ul>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'contrast'}
							<div class="space-y-12">
								<!-- Color Contrast Testing -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Color Contrast Testing</h3>
									<div class="space-y-6">
										{#each colorCombinations as combo (combo.id || combo)}
											<div class="border border-white/10 rounded-lg p-6">
												<div class="grid md:grid-cols-3 gap-6 items-center">
													<div>
														<h4 class="font-semibold mb-2">{combo.name}</h4>
														<div class="flex items-center space-x-2 text-sm">
															<span class="text-white/70">Ratio:</span>
															<span class="font-mono text-terminal-cyan">{combo.ratio}</span>
															<span
																class="px-2 py-1 rounded text-xs {combo.status === 'pass'
																	? 'bg-green-500/20 text-green-400'
																	: combo.status === 'warning'
																		? 'bg-yellow-500/20 text-yellow-400'
																		: 'bg-red-500/20 text-red-400'}"
															>
																{combo.level}
															</span>
														</div>
													</div>
													<div class="text-center">
														<div
															class="h-16 rounded-lg flex items-center justify-center font-semibold relative overflow-hidden"
															style="background-color: {combo.background}; color: {combo.foreground};"
														>
															Sample Text
														</div>
													</div>
													<div class="text-center">
														<div class="space-y-1 font-mono text-xs">
															<div class="text-white/60">FG: {combo.foreground}</div>
															<div class="text-white/60">
																BG: {typeof combo.background === 'string' && combo.background.startsWith('rgba')
																	? 'Glass Effect'
																	: combo.background}
															</div>
														</div>
													</div>
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>

								<!-- Contrast Requirements -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Contrast Requirements</h3>
									<div class="grid md:grid-cols-3 gap-6">
										<div class="text-center p-6 border border-white/10 rounded-lg">
											<div class="text-3xl font-bold mb-2 text-blue-400">4.5:1</div>
											<div class="font-semibold mb-2">Normal Text</div>
											<div class="text-sm text-white/70">Regular text under 18pt or 14pt bold</div>
										</div>
										<div class="text-center p-6 border border-white/10 rounded-lg">
											<div class="text-3xl font-bold mb-2 text-green-400">3:1</div>
											<div class="font-semibold mb-2">Large Text</div>
											<div class="text-sm text-white/70">Text 18pt+ or 14pt+ bold</div>
										</div>
										<div class="text-center p-6 border border-white/10 rounded-lg">
											<div class="text-3xl font-bold mb-2 text-purple-400">3:1</div>
											<div class="font-semibold mb-2">UI Components</div>
											<div class="text-sm text-white/70">Buttons, form controls, focus indicators</div>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'motion'}
							<div class="space-y-12">
								<!-- Motion Preferences -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Motion Preferences</h3>
									<div class="space-y-6">
										{#each motionPreferences as pref (pref.id || pref)}
											<div class="border border-white/10 rounded-lg p-6">
												<h4 class="text-lg font-semibold mb-3">{pref.setting}</h4>
												<p class="text-white/80 mb-4">{pref.description}</p>
												<div class="bg-black/20 rounded-lg p-4">
													<div class="text-sm text-white/70 mb-1">Implementation:</div>
													<div class="text-terminal-cyan">{pref.implementation}</div>
												</div>
											</div>
										{/each}
									</div>

									<div class="mt-8 p-6 border border-blue-500/20 rounded-lg bg-blue-500/10">
										<h4 class="font-semibold mb-4">Test Your Motion Preference</h4>
										<div class="flex items-center space-x-4">
											<button
												class="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors"
												onclick={testMotionPreference}
											>
												Check Motion Setting
											</button>
											<div class="text-sm text-white/70">
												Current setting: {showMotionDemo ? 'Full animations' : 'Reduced motion'}
											</div>
										</div>
									</div>
								</GlassCard>

								<!-- Implementation -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Implementation Examples</h3>
									<div class="space-y-6">
										<div>
											<h4 class="font-semibold mb-4">CSS Media Query</h4>
											<CodeBlock
												code={`/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Alternative: Provide subtle alternatives */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    /* Provide a subtle alternative */
    opacity: 1;
    transform: none;
  }
}`}
												language="css"
											/>
										</div>

										<div>
											<h4 class="font-semibold mb-4">JavaScript Detection</h4>
											<CodeBlock
												code={`// Detect user's motion preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Apply conditional animations
if (!prefersReducedMotion) {
  element.animate(keyframes, options);
} else {
  // Provide immediate state change
  element.style.transform = 'translateX(100px)';
}

// Listen for changes
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    // User now prefers reduced motion
    disableAnimations();
  } else {
    // User is okay with animations
    enableAnimations();
  }
});`}
												language="javascript"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'keyboard'}
							<div class="space-y-12">
								<!-- Keyboard Navigation Patterns -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Keyboard Navigation Patterns</h3>
									<div class="space-y-4">
										{#each keyboardPatterns as pattern (pattern.id || pattern)}
											<div class="border border-white/10 rounded-lg p-6">
												<div class="grid md:grid-cols-4 gap-4">
													<div>
														<h4 class="font-semibold text-terminal-cyan">{pattern.component}</h4>
													</div>
													<div>
														<div class="text-sm text-white/70 mb-1">Keys:</div>
														<div class="flex flex-wrap gap-1">
															{#each pattern.keys as key (key.id || key)}
																<kbd class="px-2 py-1 bg-black/20 rounded text-xs font-mono">{key}</kbd>
															{/each}
														</div>
													</div>
													<div>
														<div class="text-sm text-white/70 mb-1">Behavior:</div>
														<div class="text-sm">{pattern.behavior}</div>
													</div>
													<div>
														<div class="text-sm text-white/70 mb-1">Focus:</div>
														<div class="text-sm">{pattern.focus}</div>
													</div>
												</div>
											</div>
										{/each}
									</div>
								</GlassCard>

								<!-- Focus Management -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Focus Management</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="font-semibold mb-4">Focus Indicators</h4>
											<div class="space-y-4">
												<button
													class="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
												>
													Visible Focus Ring
												</button>
												<button
													class="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg focus:outline-none focus:bg-green-500/40 focus:border-green-400"
												>
													Background Change
												</button>
												<button
													class="px-4 py-2 bg-purple-500/20 border-2 border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-400/25"
												>
													Border + Shadow
												</button>
											</div>
										</div>
										<div>
											<h4 class="font-semibold mb-4">Focus CSS Implementation</h4>
											<CodeBlock
												code={`/* Visible focus indicators */
.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Alternative focus styles */
.glass-button:focus {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary);
}

/* Skip to content link */
.skip-link:focus {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
}`}
												language="css"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'screen_readers'}
							<div class="space-y-12">
								<!-- Screen Reader Guidelines -->
								{#each screenReaderGuidelines as guideline (guideline.id || guideline)}
									<GlassCard intensity="light" class="p-8">
										<h3 class="text-2xl font-bold mb-6">{guideline.category}</h3>
										<p class="text-white/80 mb-6">{guideline.description}</p>
										<div class="grid md:grid-cols-2 gap-6">
											{#each guideline.examples as example (example.id || example)}
												<div class="p-4 bg-black/20 rounded-lg">
													<code class="text-terminal-green text-sm">{example}</code>
												</div>
											{/each}
										</div>
									</GlassCard>
								{/each}

								<!-- ARIA Examples -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">ARIA Implementation Examples</h3>
									<div class="space-y-6">
										<div>
											<h4 class="font-semibold mb-4">Interactive Elements</h4>
											<CodeBlock
												code={`<!-- Button with icon -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Expandable content -->
<button 
  aria-expanded="false" 
  aria-controls="menu-list"
  aria-haspopup="true"
>
  Menu
</button>
<ul id="menu-list" aria-hidden="true">...</ul>

<!-- Form with help text -->
<label for="password">Password</label>
<input 
  type="password" 
  id="password"
  aria-describedby="password-help"
  aria-required="true"
>
<div id="password-help">
  Must be at least 8 characters
</div>`}
												language="html"
											/>
										</div>

										<div>
											<h4 class="font-semibold mb-4">Dynamic Content</h4>
											<CodeBlock
												code={`<!-- Live region for status updates -->
<div aria-live="polite" aria-atomic="true">
  <span class="sr-only">Status: </span>
  Form submitted successfully
</div>

<!-- Progress indicator -->
<div 
  role="progressbar" 
  aria-valuenow="32" 
  aria-valuemin="0" 
  aria-valuemax="100"
  aria-label="Upload progress"
>
  32% complete
</div>

<!-- Screen reader only text -->
<span class="sr-only">
  Click to sort by name
</span>`}
												language="html"
											/>
										</div>
									</div>
								</GlassCard>
							</div>
						{:else if selectedSection === 'testing'}
							<div class="space-y-12">
								<!-- Testing Tools -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Accessibility Testing Tools</h3>
									<div class="grid md:grid-cols-2 gap-6">
										{#each testingTools as tool (tool.id || tool)}
											<div class="border border-white/10 rounded-lg p-6">
												<div class="flex items-start justify-between mb-4">
													<div>
														<h4 class="text-lg font-semibold mb-1">{tool.name}</h4>
														<div class="text-sm text-terminal-cyan mb-2">{tool.type}</div>
														<p class="text-white/80 text-sm">{tool.description}</p>
													</div>
												</div>
												<div class="space-y-2 mb-4">
													<div class="text-sm text-white/70">Features:</div>
													<ul class="space-y-1">
														{#each tool.features as feature (feature.id || feature)}
															<li class="flex items-start space-x-2 text-sm">
																<span class="text-green-400 mt-1">•</span>
																<span class="text-white/80">{feature}</span>
															</li>
														{/each}
													</ul>
												</div>
												<a
													href={tool.url}
													class="text-blue-400 hover:text-blue-300 text-sm transition-colors"
													target="_blank"
													rel="noopener noreferrer"
												>
													{tool.url.startsWith('http') ? 'Visit Website' : tool.url} →
												</a>
											</div>
										{/each}
									</div>
								</GlassCard>

								<!-- Testing Checklist -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">Accessibility Testing Checklist</h3>
									<div class="grid md:grid-cols-2 gap-8">
										<div>
											<h4 class="text-lg font-semibold mb-4 text-blue-400">Automated Testing</h4>
											<ul class="space-y-3">
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Run axe-core accessibility tests</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Validate HTML semantics</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Check color contrast ratios</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Test with Lighthouse audit</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Validate ARIA attributes</span>
												</li>
											</ul>
										</div>
										<div>
											<h4 class="text-lg font-semibold mb-4 text-green-400">Manual Testing</h4>
											<ul class="space-y-3">
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Navigate using only keyboard</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Test with screen reader</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Verify reduced motion support</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Test at 200% zoom level</span>
												</li>
												<li class="flex items-start space-x-3">
													<input type="checkbox" class="mt-1" checked disabled />
													<span class="text-white/80">Validate mobile accessibility</span>
												</li>
											</ul>
										</div>
									</div>
								</GlassCard>

								<!-- CI/CD Integration -->
								<GlassCard intensity="light" class="p-8">
									<h3 class="text-2xl font-bold mb-6">CI/CD Integration</h3>
									<div class="space-y-6">
										<div>
											<h4 class="font-semibold mb-4">GitHub Actions Workflow</h4>
											<CodeBlock
												code={`name: Accessibility Testing

on: [push, pull_request]

jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Run accessibility tests
        run: |
          npm run test:a11y
          npm run lighthouse:a11y
      
      - name: Upload accessibility report
        uses: actions/upload-artifact@v3
        with:
          name: accessibility-report
          path: accessibility-results/`}
												language="yaml"
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

	<!-- Footer -->
	<footer class="relative z-10 py-8 px-6 mt-16 backdrop-blur-sm bg-white/5 border-t border-white/10">
		<div class="max-w-7xl mx-auto text-center">
			<p class="text-white/70">Building inclusive experiences that work for everyone</p>
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

	/* Screen reader only class */
	:global(.sr-only) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
