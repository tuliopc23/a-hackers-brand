<script lang="ts">
	import { onMount } from 'svelte';
	import { magneticHover, jellyHover, breathing } from '$lib/motion/index.js';
	import { cn } from '$lib/utils/index.js';

	interface Props {
		title: string;
		description: string;
		tech: string[];
		status: 'active' | 'completed' | 'archived' | 'in-progress';
		githubUrl?: string;
		liveUrl?: string;
		imageUrl?: string;
		featured?: boolean;
		class?: string;
		animated?: boolean;
		interactive?: boolean;
	}

	const {
		title,
		description,
		tech = [],
		status = 'completed',
		githubUrl,
		liveUrl,
		imageUrl,
		featured = false,
		class: className = '',
		animated = true,
		interactive = true
	}: Props = $props();

	let cardElement = $state<HTMLElement>();
	let terminalOutput = $state<string[]>([]);
	let currentCommand = $state('');
	let isTyping = $state(false);
	let showCursor = $state(true);

	const statusColors = {
		'active': 'text-green-400',
		'completed': 'text-blue-400', 
		'archived': 'text-gray-400',
		'in-progress': 'text-yellow-400'
	};

	const statusIcons = {
		'active': '●',
		'completed': '✓',
		'archived': '◯',
		'in-progress': '◐'
	};

	const commands = {
		'ls': () => `total ${tech.length}\n${tech.map(t => `drwxr-xr-x  ${t}`).join('\n')}`,
		'cat README.md': () => description,
		'git status': () => `On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean`,
		'npm run dev': () => liveUrl ? `> Local: ${liveUrl}\n> Ready in 420ms` : 'No dev server configured',
		'git remote -v': () => githubUrl ? `origin  ${githubUrl} (fetch)\norigin  ${githubUrl} (push)` : 'No remote configured',
		'whoami': () => 'tulio@hackers-brand',
		'pwd': () => `/projects/${title.toLowerCase().replace(/\s+/g, '-')}`,
		'help': () => 'Available commands: ls, cat README.md, git status, npm run dev, git remote -v, whoami, pwd, clear'
	};

	async function typeCommand(command: string) {
		if (isTyping) return;
		
		isTyping = true;
		currentCommand = '';
		
		for (let i = 0; i <= command.length; i++) {
			currentCommand = command.slice(0, i);
			await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50));
		}
		
		await new Promise(resolve => setTimeout(resolve, 300));
		
		// Execute command
		const output = commands[command as keyof typeof commands]?.() || `command not found: ${command}`;
		terminalOutput = [...terminalOutput, `$ ${command}`, output];
		
		currentCommand = '';
		isTyping = false;
	}

	function clearTerminal() {
		terminalOutput = [];
		currentCommand = '';
	}

	function handleQuickCommand(command: string) {
		if (command === 'clear') {
			clearTerminal();
		} else {
			typeCommand(command);
		}
	}

	onMount(() => {
		// Cursor blinking
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		// Auto-demo on featured projects
		if (featured && interactive) {
			setTimeout(() => typeCommand('ls'), 1000);
			setTimeout(() => typeCommand('cat README.md'), 3000);
		}

		return () => clearInterval(cursorInterval);
	});
</script>

<div
	bind:this={cardElement}
	class={cn(
		'group relative overflow-hidden rounded-lg border border-white/10',
		'bg-black/90 backdrop-blur-sm',
		'transition-all duration-300',
		featured && 'ring-2 ring-cyan-400/50',
		animated && 'hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/20',
		className
	)}
	use:magneticHover={{ strength: 0.3, radius: 100 }}
	use:jellyHover={{ scale: 1.02, duration: 300 }}
>
	<!-- Terminal Header -->
	<div class="flex items-center justify-between border-b border-white/10 bg-gray-900/50 px-4 py-2">
		<div class="flex items-center gap-2">
			<div class="flex gap-1">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
			</div>
			<span class="text-xs text-white/60 font-mono">
				{title.toLowerCase().replace(/\s+/g, '-')} — zsh
			</span>
		</div>
		<div class="flex items-center gap-2">
			<span class={cn('text-xs font-mono', statusColors[status])}>
				{statusIcons[status]} {status.toUpperCase()}
			</span>
		</div>
	</div>

	<!-- Project Image/Preview -->
	{#if imageUrl}
		<div class="relative h-32 overflow-hidden bg-gray-900">
			<img 
				src={imageUrl} 
				alt={title}
				class="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
		</div>
	{/if}

	<!-- Terminal Content -->
	<div class="p-4">
		<!-- Project Info -->
		<div class="mb-4">
			<h3 class="text-lg font-bold text-white font-mono">
				{title}
			</h3>
			<p class="text-sm text-white/70 mt-1">
				{description}
			</p>
		</div>

		<!-- Tech Stack -->
		<div class="mb-4">
			<div class="text-xs text-cyan-400 font-mono mb-2">$ ls -la tech/</div>
			<div class="flex flex-wrap gap-1">
				{#each tech as technology}
					<span class="px-2 py-1 text-xs font-mono bg-white/10 text-white/80 rounded border border-white/20">
						{technology}
					</span>
				{/each}
			</div>
		</div>

		<!-- Interactive Terminal -->
		{#if interactive}
			<div class="bg-black/50 rounded border border-white/20 p-3 font-mono text-xs">
				<!-- Terminal Output -->
				<div class="space-y-1 max-h-24 overflow-y-auto">
					{#each terminalOutput as line}
						<div class={line.startsWith('$') ? 'text-cyan-400' : 'text-white/80'}>
							{line}
						</div>
					{/each}
				</div>
				
				<!-- Current Command Line -->
				<div class="flex items-center text-cyan-400 mt-2">
					<span>$ </span>
					<span class="text-white">{currentCommand}</span>
					{#if showCursor && !isTyping}
						<span class="bg-white w-2 h-4 ml-1 animate-pulse">│</span>
					{/if}
				</div>

				<!-- Quick Commands -->
				<div class="flex flex-wrap gap-1 mt-2">
					{#each Object.keys(commands).slice(0, 4) as cmd}
						<button
							class="px-2 py-1 text-xs bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded transition-colors"
							onclick={() => handleQuickCommand(cmd)}
							disabled={isTyping}
						>
							{cmd}
						</button>
					{/each}
					<button
						class="px-2 py-1 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded transition-colors"
						onclick={() => handleQuickCommand('clear')}
					>
						clear
					</button>
				</div>
			</div>
		{/if}

		<!-- Action Buttons -->
		<div class="flex gap-2 mt-4">
			{#if githubUrl}
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex-1 px-3 py-2 text-xs font-mono bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded transition-colors text-center"
				>
					git clone
				</a>
			{/if}
			{#if liveUrl}
				<a
					href={liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex-1 px-3 py-2 text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 rounded transition-colors text-center"
				>
					npm start
				</a>
			{/if}
		</div>
	</div>

	<!-- Featured Badge -->
	{#if featured}
		<div 
			class="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold px-2 py-1 rounded transform rotate-12"
			use:breathing={{ scale: [1, 1.05], duration: 2000 }}
		>
			FEATURED
		</div>
	{/if}
</div>

<style>
	/* Custom scrollbar for terminal output */
	:global(.max-h-24::-webkit-scrollbar) {
		width: 4px;
	}
	
	:global(.max-h-24::-webkit-scrollbar-track) {
		background: rgba(255, 255, 255, 0.1);
	}
	
	:global(.max-h-24::-webkit-scrollbar-thumb) {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	}
</style>
