<script lang="ts">
	import { onMount } from 'svelte';
	import { brandColors } from '$lib/tokens';
	import Container from './responsive/Container.svelte';
	import Grid from './responsive/Grid.svelte';
	import Flex from './responsive/Flex.svelte';
	import ResponsiveText from './responsive/ResponsiveText.svelte';
	import Show from './responsive/Show.svelte';
	import RetroText from './RetroText.svelte';
	import PortfolioCard from './PortfolioCard.svelte';
	import { useBreakpoint } from '$lib/utils/responsive';

	let currentBreakpoint = $state('lg');
	let windowWidth = $state(0);

	onMount(() => {
		const updateBreakpoint = () => {
			windowWidth = window.innerWidth;
			currentBreakpoint = useBreakpoint();
		};

		updateBreakpoint();
		window.addEventListener('resize', updateBreakpoint);
		return () => window.removeEventListener('resize', updateBreakpoint);
	});
</script>

<div class="responsive-demo" style="
	background: {brandColors.backgrounds.primary};
	color: {brandColors.text.primary};
	min-height: 100vh;
	font-family: 'PP Supply Sans', sans-serif;
">
	<!-- Hero Section with Responsive Container -->
	<Container size="styleguide" padding="responsive" as="section" style="
		padding-top: clamp(2rem, 8vw, 6rem);
		padding-bottom: clamp(2rem, 8vw, 6rem);
		text-align: center;
		background: {brandColors.gradients.terminal};
	">
		<ResponsiveText 
			size="hero" 
			weight="bold" 
			align="center"
			family="brand"
			as="h1"
			text="RESPONSIVE DESIGN SYSTEM"
			style="
				background: {brandColors.gradients.cyberpunk};
				background-clip: text;
				-webkit-background-clip: text;
				color: transparent;
				margin-bottom: 2rem;
			"
		/>
		
		<ResponsiveText 
			size="responsive-lg" 
			align="center"
			style="color: {brandColors.text.secondary}; margin-bottom: 3rem;"
			text="Adaptive layouts that work perfectly on every device"
		/>

		<!-- Breakpoint Indicator -->
		<div style="
			background: {brandColors.glass.background};
			border: 1px solid {brandColors.glass.border};
			border-radius: 12px;
			padding: 1rem 2rem;
			backdrop-filter: blur(20px);
			display: inline-block;
			margin-bottom: 3rem;
		">
			<ResponsiveText 
				size="terminal" 
				weight="medium"
				style="color: {brandColors.terminal.green};"
			>
				Current Breakpoint: {currentBreakpoint.toUpperCase()} ({windowWidth}px)
			</ResponsiveText>
		</div>
	</Container>

	<!-- Responsive Grid Showcase -->
	<Container size="portfolio" padding="responsive" as="section" style="
		padding-top: clamp(3rem, 6vw, 5rem);
		padding-bottom: clamp(3rem, 6vw, 5rem);
	">
		<ResponsiveText 
			size="heading" 
			weight="bold" 
			align="center"
			as="h2"
			style="color: {brandColors.terminal.cyan}; margin-bottom: 3rem;"
			text="Adaptive Grid System"
		/>

		<!-- Portfolio Grid -->
		<Grid cols="portfolio" gap="responsive" style="margin-bottom: 4rem;">
			<PortfolioCard
				title="Mobile-First Design"
				description="Responsive design system that scales beautifully from mobile to desktop with fluid layouts and adaptive components."
				technologies={['CSS Grid', 'Container Queries', 'Tailwind CSS', 'Svelte']}
				variant="matrix"
				animated={true}
				liquidEffect={true}
			/>
			
			<PortfolioCard
				title="Flexible Components"
				description="Every component adapts to its container with intelligent responsive behavior and optimized performance."
				technologies={['TypeScript', 'Tailwind Variants', 'CVA', 'Responsive Utils']}
				variant="cyberpunk"
				animated={true}
				liquidEffect={true}
			/>
			
			<PortfolioCard
				title="Smart Breakpoints"
				description="Custom breakpoint system with container queries for component-level responsive design."
				technologies={['Container Queries', 'Media Queries', 'Viewport Units', 'Clamp']}
				variant="neon"
				animated={true}
				liquidEffect={true}
			/>
		</Grid>

		<!-- Features Grid -->
		<Grid cols="features" gap="responsive">
			<div style="
				background: {brandColors.glass.background};
				border: 1px solid {brandColors.glass.border};
				border-radius: 16px;
				padding: clamp(1rem, 4vw, 2rem);
				backdrop-filter: blur(20px);
				text-align: center;
			">
				<div style="font-size: 3rem; margin-bottom: 1rem;">📱</div>
				<ResponsiveText size="responsive-base" weight="semibold" as="h3" style="color: {brandColors.terminal.green}; margin-bottom: 0.5rem;">
					Mobile First
				</ResponsiveText>
				<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary};">
					Optimized for mobile devices with progressive enhancement
				</ResponsiveText>
			</div>

			<div style="
				background: {brandColors.glass.background};
				border: 1px solid {brandColors.glass.border};
				border-radius: 16px;
				padding: clamp(1rem, 4vw, 2rem);
				backdrop-filter: blur(20px);
				text-align: center;
			">
				<div style="font-size: 3rem; margin-bottom: 1rem;">🎯</div>
				<ResponsiveText size="responsive-base" weight="semibold" as="h3" style="color: {brandColors.terminal.cyan}; margin-bottom: 0.5rem;">
					Container Queries
				</ResponsiveText>
				<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary};">
					Component-level responsive design for true modularity
				</ResponsiveText>
			</div>

			<div style="
				background: {brandColors.glass.background};
				border: 1px solid {brandColors.glass.border};
				border-radius: 16px;
				padding: clamp(1rem, 4vw, 2rem);
				backdrop-filter: blur(20px);
				text-align: center;
			">
				<div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
				<ResponsiveText size="responsive-base" weight="semibold" as="h3" style="color: {brandColors.terminal.neon}; margin-bottom: 0.5rem;">
					Performance
				</ResponsiveText>
				<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary};">
					Optimized layouts with efficient CSS and minimal reflows
				</ResponsiveText>
			</div>

			<div style="
				background: {brandColors.glass.background};
				border: 1px solid {brandColors.glass.border};
				border-radius: 16px;
				padding: clamp(1rem, 4vw, 2rem);
				backdrop-filter: blur(20px);
				text-align: center;
			">
				<div style="font-size: 3rem; margin-bottom: 1rem;">🎨</div>
				<ResponsiveText size="responsive-base" weight="semibold" as="h3" style="color: {brandColors.terminal.purple}; margin-bottom: 0.5rem;">
					Adaptive UI
				</ResponsiveText>
				<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary};">
					Components that intelligently adapt to their environment
				</ResponsiveText>
			</div>
		</Grid>
	</Container>

	<!-- Responsive Visibility Demo -->
	<Container size="lg" padding="responsive" as="section" style="
		padding-top: clamp(3rem, 6vw, 5rem);
		padding-bottom: clamp(3rem, 6vw, 5rem);
		background: {brandColors.backgrounds.secondary};
	">
		<ResponsiveText 
			size="heading" 
			weight="bold" 
			align="center"
			as="h2"
			style="color: {brandColors.terminal.green}; margin-bottom: 3rem;"
			text="Responsive Visibility"
		/>

		<Flex direction="responsive" gap="responsive" justify="center" align="center" style="
			background: {brandColors.glass.background};
			border: 1px solid {brandColors.glass.border};
			border-radius: 16px;
			padding: 2rem;
			backdrop-filter: blur(20px);
			text-align: center;
		">
			<Show above="lg">
				<div style="
					background: {brandColors.terminal.green}20;
					border: 1px solid {brandColors.terminal.green};
					border-radius: 12px;
					padding: 1.5rem;
				">
					<ResponsiveText size="terminal" weight="bold" style="color: {brandColors.terminal.green};">
						🖥️ DESKTOP VIEW
					</ResponsiveText>
					<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary}; margin-top: 0.5rem;">
						Visible on large screens (1024px+)
					</ResponsiveText>
				</div>
			</Show>

			<Show when="md">
				<div style="
					background: {brandColors.terminal.cyan}20;
					border: 1px solid {brandColors.terminal.cyan};
					border-radius: 12px;
					padding: 1.5rem;
				">
					<ResponsiveText size="terminal" weight="bold" style="color: {brandColors.terminal.cyan};">
						📱 TABLET VIEW
					</ResponsiveText>
					<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary}; margin-top: 0.5rem;">
						Visible on medium screens (768px)
					</ResponsiveText>
				</div>
			</Show>

			<Show below="md">
				<div style="
					background: {brandColors.terminal.neon}20;
					border: 1px solid {brandColors.terminal.neon};
					border-radius: 12px;
					padding: 1.5rem;
				">
					<ResponsiveText size="terminal" weight="bold" style="color: {brandColors.terminal.neon};">
						📱 MOBILE VIEW
					</ResponsiveText>
					<ResponsiveText size="responsive-sm" style="color: {brandColors.text.secondary}; margin-top: 0.5rem;">
						Visible on small screens (&lt;768px)
					</ResponsiveText>
				</div>
			</Show>
		</Flex>
	</Container>

	<!-- Responsive Text Demo -->
	<Container size="lg" padding="responsive" as="section" style="
		padding-top: clamp(3rem, 6vw, 5rem);
		padding-bottom: clamp(3rem, 6vw, 5rem);
		text-align: center;
	">
		<ResponsiveText 
			size="heading" 
			weight="bold" 
			align="center"
			as="h2"
			style="color: {brandColors.terminal.purple}; margin-bottom: 3rem;"
			text="Fluid Typography"
		/>

		<div style="
			background: {brandColors.glass.background};
			border: 1px solid {brandColors.glass.border};
			border-radius: 16px;
			padding: clamp(2rem, 6vw, 4rem);
			backdrop-filter: blur(20px);
			margin-bottom: 2rem;
		">
			<RetroText 
				text="RESPONSIVE RETRO TEXT" 
				variant="hologram" 
				size="2xl" 
				animated={true}
				style="margin-bottom: 2rem; font-size: clamp(1.5rem, 5vw, 3rem);"
			/>
			
			<ResponsiveText 
				size="responsive-lg" 
				align="center"
				style="color: {brandColors.text.secondary};"
				text="Text that scales fluidly with viewport size using clamp() and responsive utilities"
			/>
		</div>

		<!-- Typography Scale Demo -->
		<Grid cols={2} gap="responsive">
			<div style="text-align: left;">
				<ResponsiveText size="responsive-sm" weight="bold" style="color: {brandColors.terminal.cyan}; margin-bottom: 1rem;">
					MOBILE SIZES
				</ResponsiveText>
				<div style="space-y: 0.5rem;">
					<ResponsiveText size="hero" text="Hero Text" style="color: {brandColors.text.primary};" />
					<ResponsiveText size="responsive-xl" text="Heading Text" style="color: {brandColors.text.primary};" />
					<ResponsiveText size="responsive-lg" text="Subheading Text" style="color: {brandColors.text.primary};" />
					<ResponsiveText size="responsive-base" text="Body Text" style="color: {brandColors.text.secondary};" />
					<ResponsiveText size="responsive-sm" text="Caption Text" style="color: {brandColors.text.muted};" />
				</div>
			</div>
			
			<div style="text-align: left;">
				<ResponsiveText size="responsive-sm" weight="bold" style="color: {brandColors.terminal.green}; margin-bottom: 1rem;">
					FLUID SIZING
				</ResponsiveText>
				<div style="space-y: 0.5rem;">
					<ResponsiveText size="terminal" family="mono" text="clamp(1.5rem, 5vw, 3rem)" style="color: {brandColors.terminal.green};" />
					<ResponsiveText size="terminal" family="mono" text="clamp(1.25rem, 4vw, 2rem)" style="color: {brandColors.terminal.green};" />
					<ResponsiveText size="terminal" family="mono" text="clamp(1rem, 3vw, 1.5rem)" style="color: {brandColors.terminal.green};" />
					<ResponsiveText size="terminal" family="mono" text="clamp(0.875rem, 2.5vw, 1rem)" style="color: {brandColors.terminal.green};" />
					<ResponsiveText size="terminal" family="mono" text="clamp(0.75rem, 2vw, 0.875rem)" style="color: {brandColors.terminal.green};" />
				</div>
			</div>
		</Grid>
	</Container>
</div>