<script lang="ts">
	import { cn } from '../utils.js';
	import { jellyHover, breathing } from '../motion';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface RadioOption {
		value: string;
		label: string;
		disabled?: boolean;
		description?: string;
	}

	interface Props extends Omit<HTMLInputAttributes, 'type' | 'value'> {
		options: RadioOption[];
		value?: string;
		name: string;
		variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
		size?: 'sm' | 'md' | 'lg';
		orientation?: 'horizontal' | 'vertical';
		animated?: boolean;
		glow?: boolean;
		jelly?: boolean;
		error?: string;
		class?: string;
		onchange?: (value: string) => void;
	}

	let {
		options,
		value = $bindable(),
		name,
		variant = 'glass',
		size = 'md',
		orientation = 'vertical',
		animated = true,
		glow = false,
		jelly = true,
		error,
		class: className = '',
		onchange,
		...restProps
	}: Props = $props();

	const handleChange = (optionValue: string) => {
		value = optionValue;
		onchange?.(optionValue);
	};

	const variants = {
		glass: {
			container: 'bg-white/5 border-white/10',
			radio: 'border-white/20 bg-white/5',
			checked: 'bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-400/50',
			label: 'text-white/90',
			glow: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]'
		},
		terminal: {
			container: 'bg-gray-900/90 border-green-400/30',
			radio: 'border-green-400/40 bg-black/50',
			checked: 'bg-green-400 border-green-400',
			label: 'text-green-400',
			glow: 'shadow-[0_0_15px_rgba(74,222,128,0.6)]'
		},
		liquid: {
			container: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/20',
			radio: 'border-white/30 bg-white/10',
			checked: 'bg-gradient-to-br from-blue-400 to-purple-500 border-blue-400/50',
			label: 'text-white',
			glow: 'shadow-[0_0_25px_rgba(139,92,246,0.5)]'
		},
		neon: {
			container: 'bg-black border-pink-500/40',
			radio: 'border-pink-500/50 bg-black',
			checked: 'bg-pink-500 border-pink-500',
			label: 'text-pink-300',
			glow: 'shadow-[0_0_20px_rgba(236,72,153,0.7)]'
		}
	};

	const sizes = {
		sm: {
			radio: 'w-4 h-4',
			dot: 'w-2 h-2',
			label: 'text-sm',
			gap: 'gap-2'
		},
		md: {
			radio: 'w-5 h-5',
			dot: 'w-2.5 h-2.5',
			label: 'text-base',
			gap: 'gap-3'
		},
		lg: {
			radio: 'w-6 h-6',
			dot: 'w-3 h-3',
			label: 'text-lg',
			gap: 'gap-4'
		}
	};

	const currentVariant = variants[variant];
	const currentSize = sizes[size];
</script>

<div
	class={cn(
		'relative rounded-2xl p-4 backdrop-blur-xl border transition-all duration-300',
		currentVariant.container,
		orientation === 'horizontal' ? 'inline-flex flex-row gap-6' : 'flex flex-col gap-3',
		error && 'border-red-500/50',
		className
	)}
	{...restProps}
>
	{#each options as option}
		<label
			class={cn(
				'relative flex items-center cursor-pointer group',
				currentSize.gap,
				option.disabled && 'opacity-50 cursor-not-allowed'
			)}
			use:jellyHover={{ 
				enabled: jelly && !option.disabled, 
				scale: 1.02, 
				duration: 200,
				borderRadius: '16px'
			}}
		>
			<input
				type="radio"
				{name}
				value={option.value}
				checked={value === option.value}
				disabled={option.disabled}
				onchange={() => !option.disabled && handleChange(option.value)}
				class="sr-only"
			/>
			
			<div
				class={cn(
					'relative rounded-full border-2 transition-all duration-300 flex items-center justify-center',
					currentSize.radio,
					currentVariant.radio,
					value === option.value && currentVariant.checked,
					value === option.value && glow && currentVariant.glow,
					animated && 'transform-gpu will-change-transform',
					!option.disabled && 'group-hover:scale-110'
				)}
				use:breathing={{ 
					enabled: animated && value === option.value, 
					intensity: 0.05, 
					speed: 2000 
				}}
			>
				{#if value === option.value}
					<div
						class={cn(
							'rounded-full bg-white transition-all duration-300',
							currentSize.dot,
							animated && 'animate-pulse'
						)}
					/>
				{/if}
			</div>
			
			<div class="flex flex-col">
				<span class={cn(
					'font-medium transition-colors duration-200',
					currentSize.label,
					currentVariant.label,
					!option.disabled && 'group-hover:text-white'
				)}>
					{option.label}
				</span>
				{#if option.description}
					<span class={cn(
						'text-xs opacity-60 mt-0.5',
						currentVariant.label
					)}>
						{option.description}
					</span>
				{/if}
			</div>
		</label>
	{/each}
	
	{#if error}
		<p class="text-red-400 text-sm mt-2 animate-pulse">{error}</p>
	{/if}
</div>

<style>
	/* Radio button glow animation */
	@keyframes radio-glow {
		0%, 100% {
			box-shadow: 0 0 20px currentColor;
		}
		50% {
			box-shadow: 0 0 30px currentColor, 0 0 40px currentColor;
		}
	}
</style>