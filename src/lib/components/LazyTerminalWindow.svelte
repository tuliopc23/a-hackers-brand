<script lang="ts">
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
		commands = {},
		autoPlay = false,
		children
	}: Props = $props();

	let TerminalWindow = $state<any>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(async () => {
		try {
			const module = await import('./TerminalWindow.svelte');
			TerminalWindow = module.default;
			loading = false;
		} catch (err) {
			error = `Failed to load TerminalWindow: ${err}`;
			loading = false;
		}
	});
</script>

{#if loading}
	<div class={`terminal glass-heavy max-w-4xl mx-auto ${className}`}>
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

		<!-- Loading State -->
		<div class="terminal-body min-h-[300px] flex items-center justify-center">
			<div class="flex items-center gap-3 text-terminal-green">
				<div class="animate-spin w-5 h-5 border-2 border-terminal-green border-t-transparent rounded-full"></div>
				<span class="font-mono">Loading terminal...</span>
			</div>
		</div>
	</div>
{:else if error}
	<div class={`terminal glass-heavy max-w-4xl mx-auto ${className}`}>
		<div class="terminal-body min-h-[200px] flex items-center justify-center">
			<div class="text-red-400 font-mono">{error}</div>
		</div>
	</div>
{:else if TerminalWindow}
	<TerminalWindow {title} class={className} {commands} {autoPlay} {children} />
{/if}

<style>
	.terminal-header {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
		border-bottom: 1px solid rgba(0, 212, 170, 0.2);
		padding: 12px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.terminal-controls {
		display: flex;
		gap: 8px;
	}

	.terminal-control {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.terminal-control.close {
		background: #ff5f57;
	}

	.terminal-control.minimize {
		background: #ffbd2e;
	}

	.terminal-control.maximize {
		background: #28ca42;
	}

	.terminal-title {
		font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.8);
	}

	.terminal-status {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.terminal-body {
		padding: 16px;
		font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
		background: rgba(0, 0, 0, 0.3);
	}
</style>
