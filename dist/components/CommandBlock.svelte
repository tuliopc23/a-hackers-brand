<script lang="ts">
	import { cn } from '../utils.js';
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import GlitchText from './effects/GlitchText.svelte';

	interface Props {
		command: string;
		output?: string;
		status?: 'idle' | 'running' | 'success' | 'error' | 'warning';
		showPrompt?: boolean;
		showTimestamp?: boolean;
		interactive?: boolean;
		theme?: 'terminal' | 'cyberpunk' | 'matrix' | 'neural';
		enableGlitch?: boolean;
		enableSound?: boolean;
		class?: string;
	}

	let {
		command,
		output = '',
		status = 'idle',
		showPrompt = true,
		showTimestamp = true,
		interactive = false,
		theme = 'terminal',
		enableGlitch = false,
		enableSound = false,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let blockRef: HTMLDivElement;
	let isHovered = $state(false);
	let isGlitching = $state(false);
	let executionTime = $state(0);
	let startTime = 0;

	// Theme configurations
	const themeConfig = {
		terminal: {
			bg: 'bg-terminal-bg border-terminal-green/30',
			prompt: 'text-terminal-green',
			command: 'text-white',
			output: 'text-terminal-blue',
			accent: 'text-terminal-cyan',
			glow: 'shadow-terminal-green/20'
		},
		cyberpunk: {
			bg: 'bg-purple-950/80 border-pink-500/30',
			prompt: 'text-pink-400',
			command: 'text-white',
			output: 'text-cyan-300',
			accent: 'text-yellow-300',
			glow: 'shadow-pink-500/20'
		},
		matrix: {
			bg: 'bg-black border-green-500/30',
			prompt: 'text-green-400',
			command: 'text-green-300',
			output: 'text-green-200',
			accent: 'text-green-100',
			glow: 'shadow-green-500/20'
		},
		neural: {
			bg: 'bg-slate-900/80 border-blue-400/30',
			prompt: 'text-blue-400',
			command: 'text-white',
			output: 'text-blue-200',
			accent: 'text-purple-300',
			glow: 'shadow-blue-500/20'
		}
	};

	const currentTheme = themeConfig()[theme];

	// Status configurations
	const statusConfig = {
		idle: {
			icon: '○',
			color: 'text-gray-400',
			bgColor: 'bg-gray-500/20',
			borderColor: 'border-gray-500/30'
		},
		running: {
			icon: '●',
			color: 'text-yellow-400',
			bgColor: 'bg-yellow-500/20',
			borderColor: 'border-yellow-500/30'
		},
		success: {
			icon: '✓',
			color: 'text-green-400',
			bgColor: 'bg-green-500/20',
			borderColor: 'border-green-500/30'
		},
		error: {
			icon: '✗',
			color: 'text-red-400',
			bgColor: 'bg-red-500/20',
			borderColor: 'border-red-500/30'
		},
		warning: {
			icon: '⚠',
			color: 'text-orange-400',
			bgColor: 'bg-orange-500/20',
			borderColor: 'border-orange-500/30'
		}
	};

	const currentStatus = statusConfig()[status];

	// Prompt configurations
	const promptConfig = {
		terminal: '$ ',
		cyberpunk: '>>> ',
		matrix: '> ',
		neural: '◈ '
	};

	const currentPrompt = promptConfig()[theme];

	// Sound effects (optional)
	const playSound = (soundType: 'execute' | 'success' | 'error') => {
		if (!enableSound) return;

		// Create audio context and generate tones
		const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
		const oscillator = audioContext.createOscillator();
		const gainNode = audioContext.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);

		// Configure sound based on type
		switch (soundType) {
			case 'execute':
				oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
				oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
				break;
			case 'success':
				oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
				oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
				break;
			case 'error':
				oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
				oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.2);
				break;
		}

		gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

		oscillator.start(audioContext.currentTime);
		oscillator.stop(audioContext.currentTime + 0.2);
	};

	// Execute command
	const executeCommand = () => {
		if (!interactive || status === 'running') return;

		startTime = performance.now();
		status = 'running';
		executionTime = 0;

		if (enableGlitch) {
			isGlitching = true;
			setTimeout(() => {
				isGlitching = false;
			}, 300);
		}

		playSound('execute');

		dispatch('execute', {
			command,
			timestamp: new Date(),
			theme
		});
	};

	// Update execution time when running
	$effect(() => {
		if (status === 'running') {
			const interval = setInterval(() => {
				executionTime = performance.now() - startTime;
			}, 10);

			return () => clearInterval(interval);
		} else if (status === 'success') {
			playSound('success');
		} else if (status === 'error') {
			playSound('error');
		}
	});

	// Copy command to clipboard
	const copyCommand = async () => {
		try {
			await navigator.clipboard.writeText(command);
			dispatch('copy', { command });
		} catch (err) {
			console.error('Failed to copy command:', err);
		}
	};

	// Format execution time
	const formatExecutionTime = (ms: number): string => {
		if (ms < 1000) return `${Math.round(ms)}ms`;
		return `${(ms / 1000).toFixed(2)}s`;
	};

	onMount(() => {
		// Add terminal-like typing effect
		if (interactive) {
			blockRef.style.cursor = 'pointer';
		}
	});
</script>

<div
	bind:this={blockRef}
	class={cn(
		'relative p-4 rounded-lg border backdrop-blur-sm transition-all duration-300',
		'hover:scale-[1.02] hover:shadow-lg transform-gpu',
		currentTheme.bg,
		currentTheme.glow,
		currentStatus.borderColor,
		interactive && 'cursor-pointer hover:brightness-110',
		className
	)}
	{...interactive
		? {
				role: 'button',
				tabindex: 0,
				'aria-label': `Execute command: ${command}`
			}
		: {
				role: 'article'
			}}
onmouseenter={() => (isHovered = true)}
onmouseleave={() => (isHovered = false)}
onclick={executeCommand} onkeydown={(e) => e.key === "Enter" && executeCommand()}
{...restProps}
>
	<!-- Status Indicator -->
	<div class="absolute top-2 right-2 flex items-center gap-2">
		<div
			class={cn(
				'w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold',
				currentStatus.color,
				status === 'running' && 'animate-pulse'
			)}
		>
			{#if status === 'running'}
				<div class="w-2 h-2 rounded-full bg-current animate-ping"></div>
			{:else}
				{currentStatus.icon}
			{/if}
		</div>

		{#if status === 'running' && executionTime > 0}
			<span class={cn('text-xs font-mono', currentTheme.accent)}>
				{formatExecutionTime(executionTime)}
			</span>
		{/if}
	</div>

	<!-- Command Line -->
	<div class="flex items-start gap-2 mb-2 font-mono">
		{#if showPrompt}
			<span class={cn('select-none font-bold', currentTheme.prompt)}>
				{currentPrompt}
			</span>
		{/if}

		<div class="flex-1">
			{#if enableGlitch && isGlitching}
				<GlitchText text={command} intensity="medium" class={cn('font-mono', currentTheme.command)} />
			{:else}
				<span class={cn('font-mono', currentTheme.command)}>
					{command}
				</span>
			{/if}
		</div>

		<!-- Copy Button -->
		{#if interactive}
			<button
			onclick={(e) => {
				e.stopPropagation();
				copyCommand();
			}} onkeydown={(e) => e.key === "Enter" && (() => {
				e.stopPropagation();
				copyCommand();
			})()}
				class={cn(
					'opacity-0 group-hover:opacity-100 p-1 rounded text-xs transition-opacity',
					currentTheme.accent,
					'hover:bg-white/10'
				)}
				title="Copy command"
			>
				📋
			</button>
		{/if}
	</div>

	<!-- Output -->
	{#if output}
		<div
			class={cn(
				'mt-3 p-3 rounded bg-black/20 border-l-2 font-mono text-sm whitespace-pre-wrap',
				currentTheme.output,
				currentStatus.borderColor
			)}
		>
			{output}
		</div>
	{/if}

	<!-- Timestamp -->
	{#if showTimestamp}
		<div class={cn('mt-2 text-xs font-mono opacity-60', currentTheme.accent)}>
			{new Date().toLocaleTimeString()}
		</div>
	{/if}

	<!-- Interactive Hover Effect -->
	{#if interactive && isHovered}
		<div
			class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none animate-pulse"
		></div>
	{/if}

	<!-- Processing Animation -->
	{#if status === 'running'}
		<div
			class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"
			style="width: {Math.min((executionTime / 5000) * 100, 100)}%"
		></div>
	{/if}
</div>

<style>
	/* Terminal-like glow effect */
	.group:hover .group-hover\:opacity-100 {
		opacity: 1;
	}

	/* Processing bar animation */
	@keyframes processing {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}

	/* Glitch border effect */
	.glitch-border {
		animation: glitch-border 0.3s ease-in-out;
	}

	@keyframes glitch-border {
		0%,
		100% {
			border-color: currentColor;
		}
		25% {
			border-color: #ff0080;
		}
		50% {
			border-color: #00ffff;
		}
		75% {
			border-color: #ffff00;
		}
	}
</style>
