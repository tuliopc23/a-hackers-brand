<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, liquidBlur, jellyHover, liquidResponsive, breathing as breathingMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'default' | 'glass' | 'glass-subtle' | 'glass-heavy' | 'terminal' | 'liquid' | 'jelly';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		interactive?: boolean;
		animate?: boolean;
		jelly?: boolean;
		liquid?: boolean;
		breathing?: boolean;
		class?: string;
		children?: any;
	}

	const {
		variant = 'default',
		blur = 'md',
		interactive = false,
		animate = true,
		jelly = true,
		liquid = false,
		breathing = false,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const variants = {
		default: 'glass-subtle border border-white/20 shadow-lg hover:shadow-xl',
		glass: 'glass-medium border border-white/30 shadow-xl hover:shadow-2xl',
		'glass-subtle': 'glass-subtle border border-white/10 shadow-md hover:shadow-lg',
		'glass-heavy': 'glass-heavy border border-white/40 shadow-2xl hover:shadow-3xl',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20',
		liquid: 'glass-medium border border-terminal-cyan/30 shadow-2xl shadow-terminal-cyan/10 hover:border-terminal-cyan/50 backdrop-blur-xl',
		jelly: 'glass-subtle border border-terminal-purple/20 shadow-lg hover:shadow-xl hover:border-terminal-purple/40'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const baseClasses = 'rounded-2xl p-6 transition-all duration-300 will-change-transform';
	const interactiveClasses = interactive ? 'cursor-pointer' : '';

	const combinedClasses = cn(
		baseClasses,
		variants[variant],
		variant.includes('glass') && blurLevels[blur],
		interactiveClasses,
		className
	);
</script>

{#if animate}
	{#if interactive}
		<div
			class={combinedClasses}
			role="button"
			tabindex="0"
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				e.currentTarget.click();
			}
		}}
		use:jellyHover={{ 
			enabled: jelly, 
			duration: 250,
			scale: variant === 'liquid' ? 1.08 : variant === 'jelly' ? 1.06 : 1.03,
			borderRadius: variant === 'liquid' ? '32px' : variant === 'jelly' ? '28px' : '20px',
			responsiveness: 'medium'
		}}
		use:liquidResponsive={{ 
			enabled: liquid, 
			liquidIntensity: 1.0,
			morphStrength: 0.3
		}}
		use:breathingMotion={{ enabled: breathing, intensity: 0.015, speed: 3500 }}
		use:magneticHover={{ enabled: !jelly && !liquid, strength: 0.2, scale: 1.02 }}
			in:liquidBlur={{ blur: blur, opacity: 'medium' }}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{:else}
		<div 
			class={combinedClasses} 
			use:jellyHover={{ 
				enabled: jelly && interactive, 
				duration: 300,
				scale: 1.02,
				borderRadius: '24px',
				responsiveness: 'subtle'
			}}
		use:breathingMotion={{ enabled: breathing, intensity: 0.01, speed: 4000 }}
			in:liquidBlur={{ blur: blur, opacity: 'subtle' }} 
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/if}
{:else if interactive}
	<div
		class={combinedClasses}
		role="button"
		tabindex="0"
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				e.currentTarget.click();
			}
		}}
		use:jellyHover={{ 
			enabled: jelly, 
			duration: 250,
			scale: variant === 'liquid' ? 1.08 : variant === 'jelly' ? 1.06 : 1.03,
			borderRadius: variant === 'liquid' ? '32px' : variant === 'jelly' ? '28px' : '20px',
			responsiveness: 'medium'
		}}
		use:liquidResponsive={{ 
			enabled: liquid, 
			liquidIntensity: 1.0,
			morphStrength: 0.3
		}}
		use:breathingMotion={{ enabled: breathing, intensity: 0.015, speed: 3500 }}
		use:magneticHover={{ enabled: !jelly && !liquid, strength: 0.2, scale: 1.02 }}
		{...restProps}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{:else}
	<div 
		class={combinedClasses} 
		use:breathingMotion={{ enabled: breathing, intensity: 0.01, speed: 4000 }}
		{...restProps}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter, box-shadow;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Interactive cards get enhanced hover states */
	div[role='button']:hover {
		transform: translateY(-2px);
	}

	/* Terminal variant glow effects */
	div:global([class*="terminal"]) {
		position: relative;
	}

	div:global([class*="terminal"]):hover {
		box-shadow: 
			0 0 30px rgba(48, 209, 88, 0.2),
			0 8px 32px rgba(0, 0, 0, 0.3);
	}

	/* Liquid variant breathing animation */
	div:global([class*="liquid"]) {
		animation: card-liquid-breathe 5s ease-in-out infinite;
	}

	@keyframes card-liquid-breathe {
		0%, 100% {
			filter: blur(0px) saturate(1) brightness(1);
		}
		50% {
			filter: blur(0.3px) saturate(1.05) brightness(1.02);
		}
	}

	/* Jelly variant subtle pulse */
	div:global([class*="jelly"]) {
		animation: card-jelly-pulse 3s ease-in-out infinite;
	}

	@keyframes card-jelly-pulse {
		0%, 100% {
			box-shadow: var(--shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
		}
		50% {
			box-shadow: var(--shadow, 0 6px 8px -1px rgba(0, 0, 0, 0.15));
		}
	}

	/* Enhanced focus states */
	div[role='button']:focus-visible {
		outline: none;
		box-shadow: 
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3),
			0 8px 25px rgba(0, 0, 0, 0.2);
		transform: translateY(-3px);
	}

	/* Glass morphism enhancements */
	div:global(.glass-medium),
	div:global(.glass-heavy) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	div:global(.glass-subtle) {
		backdrop-filter: blur(8px) saturate(150%);
		-webkit-backdrop-filter: blur(8px) saturate(150%);
	}
</style>
