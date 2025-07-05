<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface BootMessage {
		text: string;
		delay: number;
		type?: 'info' | 'success' | 'warning' | 'error' | 'system';
		progress?: boolean;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		messages?: BootMessage[];
		autoStart?: boolean;
		onComplete?: () => void;
		variant?: 'classic' | 'modern' | 'matrix' | 'terminal';
		speed?: 'slow' | 'normal' | 'fast';
		showCursor?: boolean;
		class?: string;
	}

	const {
		messages = [],
		autoStart = true,
		onComplete,
		variant = 'classic',
		speed = 'normal',
		showCursor = true,
		class: className = '',
		...restProps
	}: Props = $props();

	let currentMessageIndex = $state(0);
	let currentText = $state('');
	let isBooting = $state(false);
	let isComplete = $state(false);
	let showBootCursor = $state(true);

	const defaultMessages: BootMessage[] = [
		{ text: 'A HACKER\'S BRAND SYSTEM v2.0.0', delay: 100, type: 'system' },
		{ text: 'Copyright (C) 2024 Tulio Pinheiro Cunha', delay: 50, type: 'info' },
		{ text: '', delay: 100 },
		{ text: 'Initializing liquid glass morphism engine...', delay: 300, type: 'info' },
		{ text: 'Loading motion primitives: jelly, magnetic, breathing...', delay: 200, type: 'info' },
		{ text: 'Scanning component library...', delay: 400, type: 'info' },
		{ text: '  - Button: OK', delay: 50, type: 'success' },
		{ text: '  - Card: OK', delay: 50, type: 'success' },
		{ text: '  - Input: OK', delay: 50, type: 'success' },
		{ text: '  - Modal: OK', delay: 50, type: 'success' },
		{ text: '  - Terminal: OK', delay: 50, type: 'success' },
		{ text: 'Calibrating glass transparency matrix...', delay: 300, type: 'info' },
		{ text: 'Optimizing blur algorithms...', delay: 200, type: 'info' },
		{ text: 'Syncing design tokens...', delay: 150, type: 'info' },
		{ text: 'Establishing secure liquid connections...', delay: 250, type: 'info' },
		{ text: '', delay: 200 },
		{ text: 'WARNING: High levels of aesthetic beauty detected', delay: 100, type: 'warning' },
		{ text: 'Engaging retro-futuristic protocols...', delay: 200, type: 'info' },
		{ text: '', delay: 150 },
		{ text: 'SYSTEM READY', delay: 300, type: 'success' },
		{ text: 'Welcome to the liquid glass dimension.', delay: 100, type: 'system' },
		{ text: '', delay: 500 }
	];

	const bootMessages = messages.length > 0 ? messages : defaultMessages;

	const variants = {
		classic: {
			bg: 'bg-black',
			text: 'text-green-400',
			font: 'font-mono',
			cursor: 'border-green-400'
		},
		modern: {
			bg: 'bg-gray-900',
			text: 'text-cyan-400',
			font: 'font-mono',
			cursor: 'border-cyan-400'
		},
		matrix: {
			bg: 'bg-black',
			text: 'text-green-300',
			font: 'font-mono',
			cursor: 'border-green-300'
		},
		terminal: {
			bg: 'bg-gray-950',
			text: 'text-amber-400',
			font: 'font-mono',
			cursor: 'border-amber-400'
		}
	};

	const messageTypes = {
		info: 'text-blue-400',
		success: 'text-green-400',
		warning: 'text-yellow-400',
		error: 'text-red-400',
		system: 'text-white font-bold'
	};

	const speeds = {
		slow: 80,
		normal: 40,
		fast: 15
	};

	const typewriterSpeed = speeds[speed];
	const currentVariant = variants[variant];

	let bootContainer: HTMLDivElement;
	let displayedMessages = $state<{ text: string; type?: string }[]>([]);

	const typeMessage = async (message: string, delay: number = 50): Promise<void> => {
		currentText = '';
		
		for (let i = 0; i <= message.length; i++) {
			currentText = message.slice(0, i);
			await new Promise(resolve => setTimeout(resolve, delay));
		}
		
		await new Promise(resolve => setTimeout(resolve, 100));
	};

	const startBootSequence = async () => {
		if (isBooting) return;
		
		isBooting = true;
		isComplete = false;
		currentMessageIndex = 0;
		displayedMessages = [];
		currentText = '';

		for (let i = 0; i < bootMessages.length; i++) {
			const message = bootMessages[i];
			currentMessageIndex = i;
			
			if (message.text) {
				await typeMessage(message.text, typewriterSpeed);
				displayedMessages = [...displayedMessages, { 
					text: message.text, 
					type: message.type 
				}];
			} else {
				// Empty line
				displayedMessages = [...displayedMessages, { text: '', type: 'info' }];
			}
			
			currentText = '';
			
			// Scroll to bottom
			if (bootContainer) {
				bootContainer.scrollTop = bootContainer.scrollHeight;
			}
			
			// Wait for the specified delay
			await new Promise(resolve => setTimeout(resolve, message.delay));
		}

		isComplete = true;
		isBooting = false;
		onComplete?.();
	};

	// Cursor blinking effect
	const startCursorBlink = () => {
		setInterval(() => {
			showBootCursor = !showBootCursor;
		}, 500);
	};

	onMount(() => {
		startCursorBlink();
		
		if (autoStart) {
			// Small delay to allow component to mount
			setTimeout(startBootSequence, 200);
		}
	});

	// Expose start method for manual triggering
	const start = () => startBootSequence();

	// Make start method available to parent
	if (typeof window !== 'undefined') {
		// Store reference for external access if needed
	}
</script>

<div
	bind:this={bootContainer}
	class={cn(
		'relative w-full h-full p-6 overflow-auto',
		currentVariant.bg,
		currentVariant.text,
		currentVariant.font,
		'leading-relaxed text-sm',
		className
	)}
	{...restProps}
>
	<!-- Scan lines effect -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="w-full h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-[0.03] animate-pulse"></div>
	</div>

	<!-- CRT curvature effect -->
	<div class="absolute inset-0 pointer-events-none border-4 border-current opacity-10 rounded-lg"></div>

	<!-- Boot messages -->
	<div class="relative z-10 space-y-1">
		{#each displayedMessages as message, index}
			<div 
				class={cn(
					'whitespace-pre-wrap',
					message.type && messageTypes[message.type] ? messageTypes[message.type] : currentVariant.text,
					'animate-in fade-in duration-200'
				)}
			>
				{message.text || '\u00A0'}
			</div>
		{/each}

		<!-- Current typing message -->
		{#if isBooting && currentText}
			<div class={cn(
				'whitespace-pre-wrap',
				bootMessages[currentMessageIndex]?.type && messageTypes[bootMessages[currentMessageIndex].type] 
					? messageTypes[bootMessages[currentMessageIndex].type] 
					: currentVariant.text
			)}>
				{currentText}
				{#if showBootCursor && showCursor}
					<span class={cn(
						'inline-block w-2 h-4 ml-1 border-r-2 animate-pulse',
						currentVariant.cursor
					)}></span>
				{/if}
			</div>
		{/if}

		<!-- Final cursor when complete -->
		{#if isComplete && showCursor}
			<div class="mt-4">
				<span class="text-white">$</span>
				<span class={cn(
					'inline-block w-2 h-4 ml-1 border-r-2',
					showBootCursor ? 'opacity-100' : 'opacity-0',
					currentVariant.cursor,
					'transition-opacity duration-100'
				)}></span>
			</div>
		{/if}
	</div>

	<!-- Glow effect -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="w-full h-full bg-current opacity-[0.02] blur-xl"></div>
	</div>
</div>

<!-- Expose start method -->
<script context="module">
	export interface BootSequenceAPI {
		start: () => void;
	}
</script>

<style>
	/* CRT glow effect */
	@keyframes crt-glow {
		0%, 100% {
			text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
		}
		50% {
			text-shadow: 0 0 2px currentColor, 0 0 5px currentColor;
		}
	}

	/* Scanlines animation */
	@keyframes scanlines {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100vh);
		}
	}

	div {
		animation: crt-glow 3s ease-in-out infinite;
	}

	/* Custom scrollbar for terminal feel */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.3);
	}

	::-webkit-scrollbar-thumb {
		background: currentColor;
		border-radius: 4px;
		opacity: 0.5;
	}

	::-webkit-scrollbar-thumb:hover {
		opacity: 0.8;
	}
</style>