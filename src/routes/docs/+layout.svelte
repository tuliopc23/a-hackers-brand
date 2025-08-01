<script lang="ts">
	import { page } from '$app/stores';
	import { Button, GlowText } from '$lib/components';
	import { theme, themeConfig } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let { children } = $props();
	let isMobileMenuOpen = $state(false);
	let currentPath = $derived($page.url.pathname);
	let currentTheme = $state($theme);
	let config = $state($themeConfig);

	// Subscribe to theme changes
	theme.subscribe((value) => {
		currentTheme = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	const navigation = [
		{
			title: 'Getting Started',
			items: [
				{ title: 'Introduction', href: '/docs/getting-started' },
				{ title: 'Installation', href: '/docs/getting-started/installation' },
				{ title: 'Quick Start', href: '/docs/getting-started/quick-start' },
				{ title: 'TypeScript', href: '/docs/getting-started/typescript' }
			]
		},
		{
			title: 'Components',
			items: [
				{ title: 'Overview', href: '/docs/components' },
				{ title: 'Core', href: '/docs/components/core' },
				{ title: 'Terminal', href: '/docs/components/terminal' },
				{ title: 'Glass UI', href: '/docs/components/glass' },
				{ title: '3D/WebGL', href: '/docs/components/webgl' }
			]
		},
		{
			title: 'Design',
			items: [
				{ title: 'Principles', href: '/docs/design' },
				{ title: 'Colors', href: '/docs/design/colors' },
				{ title: 'Typography', href: '/docs/design/typography' },
				{ title: 'Spacing', href: '/docs/design/spacing' },
				{ title: 'Motion', href: '/docs/design/motion' },
				{ title: 'Icons', href: '/docs/design/icons' }
			]
		},
		{
			title: 'Themes',
			items: [
				{ title: 'Overview', href: '/docs/themes' },
				{ title: 'Terminal', href: '/docs/themes/terminal' },
				{ title: 'Bubble Tea', href: '/docs/themes/bubble-tea' },
				{ title: 'Getting Started', href: '/docs/getting-started/themes' }
			]
		},
		{
			title: 'Patterns',
			items: [
				{ title: 'Overview', href: '/docs/patterns' },
				{ title: 'Forms', href: '/docs/patterns/forms' },
				{ title: 'Navigation', href: '/docs/patterns/navigation' },
				{ title: 'Data Display', href: '/docs/patterns/data-display' },
				{ title: 'Feedback', href: '/docs/patterns/feedback' }
			]
		},
		{
			title: 'API Reference',
			items: [
				{ title: 'Components', href: '/docs/api/components' },
				{ title: 'Hooks', href: '/docs/api/hooks' },
				{ title: 'Utilities', href: '/docs/api/utilities' },
				{ title: 'Types', href: '/docs/api/types' }
			]
		}
	];

	function isActive(href: string): boolean {
		return currentPath === href || currentPath.startsWith(href + '/');
	}

	// Theme-aware color classes
	const getThemeClasses = () => {
		if (currentTheme === 'bubbleTea') {
			return {
				accent: 'text-bubble-tea-pink',
				accentHover: 'hover:text-bubble-tea-purple',
				background: 'bg-gradient-to-br from-bubble-tea-background/90 to-bubble-tea-surface/90',
				border: 'border-bubble-tea-purple/20',
				borderAccent: 'border-bubble-tea-pink',
				activeBackground: 'bg-bubble-tea-pink/20',
				hoverBackground: 'hover:bg-bubble-tea-pink/10',
				text: 'text-bubble-tea-purple/70',
				textActive: 'text-bubble-tea-pink',
				logo: 'from-bubble-tea-pink to-bubble-tea-purple'
			};
		}

		// Terminal theme (default)
		return {
			accent: 'text-green-400',
			accentHover: 'hover:text-green-400',
			background: 'bg-black/90',
			border: 'border-green-500/20',
			borderAccent: 'border-green-400',
			activeBackground: 'bg-green-400/20',
			hoverBackground: 'hover:bg-green-400/10',
			text: 'text-gray-400',
			textActive: 'text-green-400',
			logo: 'from-green-400 to-cyan-400'
		};
	};

	const themeClasses = $derived(getThemeClasses());

	onMount(() => {
		// Close mobile menu on route change
		const unsubscribe = page.subscribe(() => {
			isMobileMenuOpen = false;
		});
		return unsubscribe;
	});
</script>

<div class="flex min-h-screen">
	<!-- Theme Toggle & Mobile Menu Header -->
	<header class="fixed top-0 right-0 z-50 p-4 flex items-center gap-4 lg:gap-6">
		<!-- Theme Toggle -->
		<div class="flex items-center gap-2 bg-black/50 backdrop-blur-md border {themeClasses.border} rounded-lg p-2">
			<Button
				variant={currentTheme === 'terminal' ? 'terminal' : 'outline'}
				size="sm"
				onclick={() => theme.setTerminal()}
				class="px-3 py-1 text-xs"
			>
				Terminal
			</Button>
			<Button
				variant={currentTheme === 'bubbleTea' ? 'bubbleTea' : 'outline'}
				size="sm"
				onclick={() => theme.setBubbleTea()}
				class="px-3 py-1 text-xs"
			>
				Bubble Tea
			</Button>
		</div>

		<!-- Mobile menu button -->
		<button
			class="lg:hidden p-2 rounded-lg bg-black/50 backdrop-blur-md border {themeClasses.border} {themeClasses.accent}"
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			aria-label="Toggle navigation menu"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if isMobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</header>

	<!-- Sidebar -->
	<aside
		class="fixed lg:sticky top-0 left-0 z-40 w-64 h-screen overflow-y-auto {themeClasses.background} backdrop-blur-md border-r {themeClasses.border} transform transition-all duration-300 {isMobileMenuOpen
			? 'translate-x-0'
			: '-translate-x-full lg:translate-x-0'}"
	>
		<div class="p-6">
			<a href="/" class="flex items-center space-x-2 mb-8 group">
				<div
					class="w-8 h-8 bg-gradient-to-br {themeClasses.logo} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
				>
					<span class="text-black font-bold text-lg font-mono">H</span>
				</div>
				<div class="flex flex-col">
					<span class="{themeClasses.accent} font-mono font-semibold">A Hacker's Brand</span>
					<span class="text-xs {themeClasses.text}">v{config ? '0.3.0' : '0.3.0'} • {config.displayName}</span>
				</div>
			</a>

			<nav class="space-y-6">
				{#each navigation as section}
					<div>
						<h3 class="text-xs uppercase font-semibold {themeClasses.accent}/60 tracking-wider mb-2">
							{#if section.title === 'Themes'}
								<GlowText
									variant={currentTheme}
									color={currentTheme === 'terminal' ? 'matrix' : 'purple'}
									intensity="normal"
									class="text-xs"
								>
									{section.title}
								</GlowText>
							{:else}
								{section.title}
							{/if}
						</h3>
						<ul class="space-y-1">
							{#each section.items as item}
								<li>
									<a
										href={item.href}
										class="block px-3 py-2 rounded-lg text-sm font-mono transition-all duration-200 {isActive(item.href)
											? `${themeClasses.activeBackground} ${themeClasses.textActive} border-l-2 ${themeClasses.borderAccent}`
											: `${themeClasses.text} ${themeClasses.accentHover} ${themeClasses.hoverBackground}`}"
									>
										{#if item.href.includes('themes') && currentTheme === 'bubbleTea'}
											<GlowText variant="bubbleTea" color="pink" intensity="normal" class="text-sm">
												{item.title}
											</GlowText>
										{:else}
											{item.title}
										{/if}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>

			<div class="mt-8 pt-8 border-t {themeClasses.border}">
				<div class="space-y-3">
					<!-- Theme Quick Toggle -->
					<button
						onclick={() => theme.toggle()}
						class="w-full flex items-center justify-between p-2 rounded-lg {themeClasses.text} {themeClasses.accentHover} {themeClasses.hoverBackground} transition-all duration-200 text-sm"
					>
						<span class="flex items-center gap-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
								/>
							</svg>
							Toggle Theme
						</span>
						<span class="text-xs {themeClasses.accent}">{config.displayName}</span>
					</button>

					<!-- External Links -->
					<a
						href="https://github.com/tuliopc23/a-hackers-brand"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 text-sm {themeClasses.text} {themeClasses.accentHover} transition-colors p-2 rounded-lg {themeClasses.hoverBackground}"
					>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/>
						</svg>
						<span>GitHub</span>
						<svg class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>

					<a
						href="/changelog"
						class="flex items-center space-x-2 text-sm {themeClasses.text} {themeClasses.accentHover} transition-colors p-2 rounded-lg {themeClasses.hoverBackground}"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
							/>
						</svg>
						<span>v0.3.0</span>
					</a>
				</div>
			</div>
		</div>
	</aside>

	<!-- Main content -->
	<main class="flex-1 lg:ml-0">
		<div class="max-w-4xl mx-auto px-6 py-12 lg:px-12 pt-20 lg:pt-12">
			{@render children()}
		</div>
	</main>
</div>

<style>
	/* Terminal cursor animation */
	:global(.terminal-cursor::after) {
		content: '_';
		animation: blink 1s infinite;
		color: #00ff00;
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
</style>
