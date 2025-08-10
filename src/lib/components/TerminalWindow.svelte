<script lang="ts">
	import { cn } from '../utils.js';
	import { onMount } from 'svelte';

	interface Props {
		title?: string;
		class?: string;
		commands?: Record<string, string>;
		autoPlay?: boolean;
		children?: any;
	}

	const {
		title = 'Liquid Terminal',
		class: className = '',
		commands = {
			help: '🚀 Available commands: help, whoami, skills, projects, contact',
			whoami: '🧑‍💻 Tulio Cunha - Full Stack Developer & Design System Architect',
			skills: '⚡ Technologies: Svelte, TypeScript, WebGL, Three.js, WebAssembly',
			projects: '🏗️ Featured: Glass UI, Liquid Terminal, Neural Network Visualizer',
			contact: '📫 Email: tulio@tuliocunha.dev | GitHub: github.com/tuliopc23'
		},
		autoPlay = false,
		children
	}: Props = $props();

	let terminalRef: HTMLDivElement;
	let inputValue = $state('');
	let history = $state<Array<{ command: string; output: string; timestamp: Date }>>([]);
	const currentPrompt = '$';

	const executeCommand = (command: string) => {
		const trimmedCommand = command.trim().toLowerCase();
		const output = commands[trimmedCommand] || `Command "${command}" not found. Type "help" for available commands.`;

		history = [
			...history,
			{
				command: trimmedCommand,
				output,
				timestamp: new Date()
			}
		];

		inputValue = '';

		// Scroll to bottom
		setTimeout(() => {
			if (terminalRef) {
				terminalRef.scrollTop = terminalRef.scrollHeight;
			}
		}, 10);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			executeCommand(inputValue);
		}
	};

	onMount(() => {
		if (autoPlay) {
			// Auto-execute some commands for demo
			setTimeout(() => executeCommand('help'), 1000);
			setTimeout(() => executeCommand('whoami'), 2500);
			setTimeout(() => executeCommand('skills'), 4000);
		}
	});
</script>

<div class={cn('terminal glass-heavy max-w-4xl mx-auto', className)}>
	<!-- Terminal Header -->
	<div class="terminal-header">
		<div class="terminal-controls">
			<span class="terminal-control close"></span>
			<span class="terminal-control minimize"></span>
			<span class="terminal-control maximize"></span>
		</div>
		<div class="terminal-title">{title}</div>
		<div class="terminal-status">
			<span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span>
		</div>
	</div>

	<!-- Terminal Body -->
	<div bind:this={terminalRef} class="terminal-body max-h-96 overflow-y-auto">
		{#if children}
			{@render children()}
		{/if}

		<!-- Command History -->
		{#each history as entry (entry.timestamp)}
			<div class="mb-4">
				<!-- Command -->
				<div class="flex items-center gap-2 mb-1">
					<span class="terminal-prompt text-terminal-green">{currentPrompt}</span>
					<span class="text-white">{entry.command}</span>
					<span class="text-xs text-white/40 ml-auto">
						{entry.timestamp.toLocaleTimeString()}
					</span>
				</div>
				<!-- Output -->
				<div class="terminal-output text-terminal-blue pl-4 mb-2">
					{entry.output}
				</div>
			</div>
		{/each}

		<!-- Current Input -->
		<div class="flex items-center gap-2">
			<span class="terminal-prompt text-terminal-green">{currentPrompt}</span>
			<input
				bind:value={inputValue}
				onkeydown={handleKeydown}
				class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono"
				placeholder="Enter command..."
				autocomplete="off"
				spellcheck="false"
			/>
			<span class="w-2 h-5 bg-terminal-green animate-pulse"></span>
		</div>
	</div>
</div>

<style>
	.terminal-header {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
		border-bottom: 1px solid rgba(0, 212, 170, 0.2);
	}

	.terminal-status {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.terminal-body {
		scrollbar-width: thin;
		scrollbar-color: rgba(0, 212, 170, 0.3) transparent;
	}

	.terminal-body::-webkit-scrollbar {
		width: 4px;
	}

	.terminal-body::-webkit-scrollbar-track {
		background: transparent;
	}

	.terminal-body::-webkit-scrollbar-thumb {
		background: rgba(0, 212, 170, 0.3);
		border-radius: 2px;
	}

	.terminal-body::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 212, 170, 0.5);
	}
</style>
