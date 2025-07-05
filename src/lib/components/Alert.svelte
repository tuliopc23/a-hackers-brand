<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { glassFade, magneticHover } from '$lib/motion';
	import { X, CheckCircle2, AlertCircle, XCircle, Info } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'success' | 'error' | 'warning' | 'info' | 'terminal';
		title?: string;
		description?: string;
		closable?: boolean;
		animated?: boolean;
		glow?: boolean;
		jelly?: boolean;
		icon?: boolean;
		position?: 'static' | 'fixed';
		placement?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
		class?: string;
		onclose?: () => void;
	}

	const {
		variant = 'info',
		title,
		description,
		closable = false,
		animated = true,
		glow = true,
		jelly = true,
		icon = true,
		position = 'static',
		placement = 'top-right',
		class: className = '',
		onclose,
		...restProps
	}: Props = $props();

	let visible = $state(true);

	const handleClose = () => {
		visible = false;
		onclose?.();
	};

	const variants = {
		success: {
			bg: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
			border: 'border-green-400/40',
			text: 'text-green-300',
			icon: CheckCircle2,
			glow: 'shadow-[0_0_30px_rgba(74,222,128,0.5)]'
		},
		error: {
			bg: 'bg-gradient-to-br from-red-500/20 to-rose-500/20',
			border: 'border-red-400/40',
			text: 'text-red-300',
			icon: XCircle,
			glow: 'shadow-[0_0_30px_rgba(248,113,113,0.5)]'
		},
		warning: {
			bg: 'bg-gradient-to-br from-yellow-500/20 to-amber-500/20',
			border: 'border-yellow-400/40',
			text: 'text-yellow-300',
			icon: AlertCircle,
			glow: 'shadow-[0_0_30px_rgba(250,204,21,0.5)]'
		},
		info: {
			bg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
			border: 'border-blue-400/40',
			text: 'text-blue-300',
			icon: Info,
			glow: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]'
		},
		terminal: {
			bg: 'bg-gray-900/90',
			border: 'border-green-400/40',
			text: 'text-green-400',
			icon: AlertCircle,
			glow: 'shadow-[0_0_20px_rgba(74,222,128,0.6)]'
		}
	};

	const placements = {
		'top': 'top-4 left-1/2 -translate-x-1/2',
		'bottom': 'bottom-4 left-1/2 -translate-x-1/2',
		'top-right': 'top-4 right-4',
		'top-left': 'top-4 left-4',
		'bottom-right': 'bottom-4 right-4',
		'bottom-left': 'bottom-4 left-4'
	};

	const currentVariant = variants[variant];
	const IconComponent = currentVariant.icon;
</script>

{#if visible}
	<div
		class={cn(
			'backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300',
			currentVariant.bg,
			currentVariant.border,
			glow && currentVariant.glow,
			position === 'fixed' && 'fixed z-50',
			position === 'fixed' && placements[placement],
			animated && 'transform-gpu will-change-transform',
			className
		)}
		transition:glassFade={{ duration: animated ? 300 : 0 }}
		use:jellyHover={{ 
			enabled: jelly, 
			scale: 1.02, 
			duration: 200,
			borderRadius: '16px'
		}}
		{...restProps}
	>
		<div class="flex items-start gap-3">
			{#if icon}
				<div class={cn(
					'flex-shrink-0 mt-0.5',
					currentVariant.text,
					animated && 'animate-pulse'
				)}>
					<IconComponent size={20} />
				</div>
			{/if}
			
			<div class="flex-1 min-w-0">
				{#if title}
					<h3 class={cn(
						'font-semibold text-base',
						currentVariant.text
					)}>
						{title}
					</h3>
				{/if}
				
				{#if description}
					<p class={cn(
						'text-sm mt-1 opacity-80',
						currentVariant.text
					)}>
						{description}
					</p>
				{/if}
			</div>
			
			{#if closable}
				<button
					onclick={handleClose}
					class={cn(
						'flex-shrink-0 p-1 rounded-lg transition-all duration-200',
						'hover:bg-white/10 hover:scale-110',
						currentVariant.text,
						'focus:outline-none focus:ring-2 focus:ring-white/20'
					)}
					aria-label="Close alert"
				>
					<X size={16} />
				</button>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Terminal cursor animation for terminal variant */
	@keyframes terminal-blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}
	
	:global(.terminal-cursor) {
		animation: terminal-blink 1s infinite;
	}
</style>