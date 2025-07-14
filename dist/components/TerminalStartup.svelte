<script lang="ts">
	import { cn } from '../utils.js';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		autoStart?: boolean;
		onComplete?: () => void;
		variant?: 'retro' | 'modern' | 'hacker' | 'matrix';
		showBIOS?: boolean;
		fastBoot?: boolean;
		class?: string;
	}

	const {
		autoStart = true,
		onComplete,
		variant = 'retro',
		showBIOS = true,
		fastBoot = false,
		class: className = '',
		...restProps
	}: Props = $props();

	let currentLine = $state(0);
	let isRunning = $state(false);
	let isComplete = $state(false);
	let progress = $state(0);

	const variants = {
		retro: {
			bg: 'bg-black',
			text: 'text-amber-400',
			accent: 'text-amber-300',
			success: 'text-green-400',
			error: 'text-red-400'
		},
		modern: {
			bg: 'bg-gray-900',
			text: 'text-cyan-400',
			accent: 'text-cyan-300',
			success: 'text-green-400',
			error: 'text-red-400'
		},
		hacker: {
			bg: 'bg-black',
			text: 'text-green-400',
			accent: 'text-green-300',
			success: 'text-lime-400',
			error: 'text-red-500'
		},
		matrix: {
			bg: 'bg-black',
			text: 'text-green-300',
			accent: 'text-green-200',
			success: 'text-green-400',
			error: 'text-red-400'
		}
	};

	const currentVariant = variants()[variant];

	const biosMessages = [
		'LIQUID GLASS BIOS v4.2.0',
		"Copyright (C) 2024 A Hacker's Brand Systems",
		'',
		'Detecting hardware...',
		'CPU: Quantum Glass Processor @ 3.14 THz',
		'RAM: 16GB Liquid Crystal Memory',
		'GPU: Neural Glass Rendering Unit',
		'Storage: 1TB SSD Crystalline Matrix',
		'',
		'Running POST diagnostics...',
		'Memory test: PASS',
		'Glass integrity: PASS',
		'Liquid dynamics: PASS',
		'Motion engine: PASS',
		'',
		'Loading bootloader...'
	];

	const bootMessages = [
		'GRUB Liquid Glass v2.0',
		"Loading A Hacker's Brand OS...",
		'',
		'[    0.000000] Initializing liquid kernel',
		'[    0.012421] Glass morphism drivers loaded',
		'[    0.024563] Jelly physics engine started',
		'[    0.035621] Motion primitives initialized',
		'[    0.048392] Terminal subsystem ready',
		'[    0.052881] Liquid blur filters active',
		'[    0.067432] Component registry loaded',
		'[    0.078234] Theme engine initialized',
		'[    0.089455] Animation pipeline ready',
		'[    0.095621] Design tokens synchronized',
		'[    0.103892] UI framework mounted',
		'[    0.112433] Glass surface calibrated',
		'[    0.125643] User interface ready',
		"[    0.134521] Welcome to A Hacker's Brand"
	];

	const allMessages = showBIOS ? [...biosMessages, '', ...bootMessages] : bootMessages;
	const displaySpeed = fastBoot ? 50 : 150;

	const startSequence = async () => {
		if (isRunning) return;

		isRunning = true;
		isComplete = false;
		currentLine = 0;
		progress = 0;

		for (let i = 0; i < allMessages().length; i++) {
			currentLine = i;
			progress = (i / allMessages().length) * 100;

			// Variable delay based on message type
			let delay = displaySpeed;
			if (allMessages()[i].includes('PASS') || allMessages()[i].includes('OK')) {
				delay = fastBoot ? 30 : 100;
			} else if (allMessages()[i].includes('[')) {
				delay = fastBoot ? 20 : 80;
			}

			await new Promise((resolve) => setTimeout(resolve, delay));
		}

		isComplete = true;
		isRunning = false;
		progress = 100;
		onComplete?.();
	};

	onMount(() => {
		if (autoStart) {
			setTimeout(startSequence, 300);
		}
	});

	const getMessageStyle = (message: string) => {
		if (message().includes('PASS') || message().includes('OK') || message().includes('ready')) {
			return currentVariant.success;
		}
		if (message().includes('FAIL') || message().includes('ERROR')) {
			return currentVariant.error;
		}
		if (message().includes('Copyright') || message().includes('BIOS') || message().includes('GRUB')) {
			return currentVariant.accent;
		}
		return currentVariant.text;
	};
</script>

<div
	class={cn(
		'relative w-full h-full p-6 font-mono text-sm leading-relaxed overflow-hidden',
		currentVariant.bg,
		currentVariant.text,
		className
	)}
	{...restProps}
>
	<!-- Scanlines effect -->
	<div class="absolute inset-0 opacity-10 pointer-events-none">
		<div
			class="w-full h-full"
			style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"
		></div>
	</div>

	<!-- CRT curve effect -->
	<div class="absolute inset-0 border-2 border-current opacity-5 rounded-lg pointer-events-none"></div>

	<!-- Boot messages -->
	<div class="relative z-10 space-y-1">
		{#each allMessages().slice(0, currentLine + 1) as message, index}
			<div
				class={cn(
					'whitespace-pre-wrap transition-all duration-200',
					getMessageStyle(message),
					index === currentLine && isRunning ? 'animate-pulse' : ''
				)}
			>
				{message || '\u00A0'}
			</div>
		{/each}

		<!-- Cursor when running -->
		{#if isRunning}
			<div class="flex items-center">
				<span class="animate-pulse">_</span>
			</div>
		{/if}

		<!-- Final prompt when complete -->
		{#if isComplete}
			<div class="mt-4 space-y-1">
				<div class={currentVariant.success}>System initialization complete.</div>
				<div class="flex items-center">
					<span class={currentVariant.accent}>user@hackers-brand:~$</span>
					<span class="animate-pulse ml-1">_</span>
				</div>
			</div>
		{/if}
	</div>

	<!-- Progress bar -->
	{#if isRunning && !fastBoot}
		<div class="absolute bottom-6 left-6 right-6">
			<div class="flex items-center space-x-2 text-xs">
				<span class={currentVariant.accent}>Loading:</span>
				<div class="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
					<div
						class={cn('h-full transition-all duration-300 rounded-full', currentVariant.success)}
						style="width: {progress}%; background-color: currentColor;"
					></div>
				</div>
				<span class={currentVariant.text}>{Math.round(progress)}%</span>
			</div>
		</div>
	{/if}

	<!-- Ambient glow -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="w-full h-full opacity-[0.02] blur-2xl" style="background-color: currentColor;"></div>
	</div>
</div>

<style>
	/* CRT text glow */
	div {
		text-shadow: 0 0 10px currentColor;
	}

	/* Vintage monitor flicker */
	@keyframes flicker {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.98;
		}
	}

	.animate-flicker {
		animation: flicker 0.15s infinite linear;
	}
</style>
