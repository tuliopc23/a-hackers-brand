<script lang="ts">
	import { onMount } from 'svelte';
	import { springPop, jellyHover } from '$lib/motion/index.js';
	import { cn } from '$lib/utils/index.js';

	interface TechItem {
		name: string;
		category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
		proficiency: number; // 0-100
		icon?: string;
		color?: string;
		yearsExperience?: number;
		lastUsed?: string;
	}

	interface Props {
		technologies: TechItem[];
		title?: string;
		animated?: boolean;
		interactive?: boolean;
		showProficiency?: boolean;
		showCategories?: boolean;
		class?: string;
	}

	const {
		technologies = [],
		title = 'Tech Stack',
		animated = true,
		interactive = true,
		showProficiency = true,
		showCategories = true,
		class: className = ''
	}: Props = $props();

	let terminalOutput = $state<string[]>([]);
	let currentCommand = $state('');
	let isExecuting = $state(false);
	let selectedCategory = $state<string | null>(null);
	let showCursor = $state(true);

	const categoryColors = {
		frontend: 'text-blue-400',
		backend: 'text-green-400',
		database: 'text-purple-400',
		devops: 'text-orange-400',
		tools: 'text-yellow-400',
		languages: 'text-red-400'
	};

	const categoryIcons = {
		frontend: '🎨',
		backend: '⚙️',
		database: '🗄️',
		devops: '🚀',
		tools: '🔧',
		languages: '💻'
	};

	const commands = {
		'ls': () => {
			const categories = [...new Set(technologies.map(t => t.category))];
			return categories.map(cat => `drwxr-xr-x  ${cat}/`).join('\n');
		},
		'ls -la': () => {
			return technologies.map(tech => 
				`-rw-r--r--  ${tech.proficiency}%  ${tech.name}  ${tech.category}/`
			).join('\n');
		},
		'cat skills.json': () => {
			return JSON.stringify(
				technologies.reduce((acc, tech) => {
					if (!acc[tech.category]) acc[tech.category] = [];
					acc[tech.category].push({
						name: tech.name,
						proficiency: tech.proficiency,
						experience: tech.yearsExperience
					});
					return acc;
				}, {} as Record<string, any[]>),
				null,
				2
			);
		},
		'top': () => {
			const sorted = [...technologies].sort((a, b) => b.proficiency - a.proficiency);
			return sorted.slice(0, 5).map((tech, i) => 
				`${i + 1}. ${tech.name.padEnd(15)} ${tech.proficiency}% CPU`
			).join('\n');
		},
		'ps aux': () => {
			return technologies.map(tech => 
				`tulio    ${Math.floor(Math.random() * 9999).toString().padStart(4)}  ${tech.proficiency}%  ${tech.name}`
			).join('\n');
		},
		'which node': () => '/usr/local/bin/node',
		'node --version': () => 'v20.11.0',
		'npm --version': () => '10.2.4',
		'git --version': () => 'git version 2.42.0',
		'help': () => 'Available commands: ls, ls -la, cat skills.json, top, ps aux, which, node --version, npm --version, git --version, clear'
	};

	async function executeCommand(command: string) {
		if (isExecuting) return;
		
		isExecuting = true;
		currentCommand = '';
		
		// Type the command
		for (let i = 0; i <= command.length; i++) {
			currentCommand = command.slice(0, i);
			await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 30));
		}
		
		await new Promise(resolve => setTimeout(resolve, 200));
		
		// Execute and show output
		const output = commands[command as keyof typeof commands]?.() || `command not found: ${command}`;
		terminalOutput = [...terminalOutput, `$ ${command}`, output];
		
		currentCommand = '';
		isExecuting = false;
	}

	function clearTerminal() {
		terminalOutput = [];
		currentCommand = '';
	}

	function filterByCategory(category: string | null) {
		selectedCategory = selectedCategory === category ? null : category;
	}

	function getProficiencyBar(proficiency: number) {
		const filled = Math.floor(proficiency / 10);
		const empty = 10 - filled;
		return '█'.repeat(filled) + '░'.repeat(empty);
	}

	function getProficiencyColor(proficiency: number) {
		if (proficiency >= 80) return 'text-green-400';
		if (proficiency >= 60) return 'text-yellow-400';
		if (proficiency >= 40) return 'text-orange-400';
		return 'text-red-400';
	}

	const filteredTechnologies = $derived(
		selectedCategory 
			? technologies.filter(tech => tech.category === selectedCategory)
			: technologies
	);

	const categorizedTech = $derived(
		technologies.reduce((acc, tech) => {
			if (!acc[tech.category]) acc[tech.category] = [];
			acc[tech.category].push(tech);
			return acc;
		}, {} as Record<string, TechItem[]>)
	);

	onMount(() => {
		// Cursor blinking
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		// Auto-demo
		if (interactive) {
			setTimeout(() => executeCommand('ls'), 1000);
			setTimeout(() => executeCommand('top'), 3000);
		}

		return () => clearInterval(cursorInterval);
	});
</script>

<div class={cn(
	'rounded-lg border border-white/10 bg-black/90 backdrop-blur-sm overflow-hidden',
	className
)}>
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
		<div class="text-xs text-cyan-400 font-mono">
			{technologies.length} packages installed
		</div>
	</div>

	<div class="p-4">
		<!-- Category Filters -->
		{#if showCategories}
			<div class="mb-4">
				<div class="text-xs text-cyan-400 font-mono mb-2">$ ls categories/</div>
				<div class="flex flex-wrap gap-2">
					<button
						class={cn(
							'px-3 py-1 text-xs font-mono rounded border transition-colors',
							!selectedCategory 
								? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' 
								: 'bg-white/10 text-white/60 border-white/20 hover:bg-white/20'
						)}
						onclick={() => filterByCategory(null)}
					>
						all
					</button>
					{#each Object.keys(categorizedTech) as category}
						<button
							class={cn(
								'px-3 py-1 text-xs font-mono rounded border transition-colors flex items-center gap-1',
								selectedCategory === category
									? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
									: 'bg-white/10 text-white/60 border-white/20 hover:bg-white/20'
							)}
							onclick={() => filterByCategory(category)}
							use:springPop={{ scale: 0.95, duration: 150 }}
						>
							<span>{categoryIcons[category as keyof typeof categoryIcons]}</span>
							{category}
							<span class="text-xs opacity-60">({categorizedTech[category].length})</span>
						</button>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Tech Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
			{#each filteredTechnologies as tech (tech.name)}
				<div
					class="group p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded transition-all duration-200"
					use:jellyHover={{ scale: 1.02, duration: 200 }}
				>
					<div class="flex items-center justify-between mb-2">
						<div class="flex items-center gap-2">
							{#if tech.icon}
								<span class="text-lg">{tech.icon}</span>
							{/if}
							<span class="font-mono text-sm text-white">{tech.name}</span>
						</div>
						<span class={cn('text-xs font-mono', categoryColors[tech.category])}>
							{tech.category}
						</span>
					</div>
					
					{#if showProficiency}
						<div class="space-y-1">
							<div class="flex justify-between text-xs">
								<span class="text-white/60">Proficiency</span>
								<span class={getProficiencyColor(tech.proficiency)}>{tech.proficiency}%</span>
							</div>
							<div class="font-mono text-xs">
								<span class={getProficiencyColor(tech.proficiency)}>
									{getProficiencyBar(tech.proficiency)}
								</span>
							</div>
						</div>
					{/if}

					{#if tech.yearsExperience}
						<div class="text-xs text-white/40 mt-1 font-mono">
							{tech.yearsExperience}y exp
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Interactive Terminal -->
		{#if interactive}
			<div class="bg-black/50 rounded border border-white/20 p-3 font-mono text-xs">
				<!-- Terminal Output -->
				<div class="space-y-1 max-h-32 overflow-y-auto">
					{#each terminalOutput as line}
						<div class={line.startsWith('$') ? 'text-cyan-400' : 'text-white/80 whitespace-pre-wrap'}>
							{line}
						</div>
					{/each}
				</div>
				
				<!-- Current Command Line -->
				<div class="flex items-center text-cyan-400 mt-2">
					<span>$ </span>
					<span class="text-white">{currentCommand}</span>
					{#if showCursor && !isExecuting}
						<span class="bg-white w-2 h-4 ml-1 animate-pulse">│</span>
					{/if}
				</div>

				<!-- Quick Commands -->
				<div class="flex flex-wrap gap-1 mt-2">
					{#each ['ls', 'top', 'cat skills.json', 'ps aux'] as cmd}
						<button
							class="px-2 py-1 text-xs bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded transition-colors"
							onclick={() => executeCommand(cmd)}
							disabled={isExecuting}
						>
							{cmd}
						</button>
					{/each}
					<button
						class="px-2 py-1 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded transition-colors"
						onclick={clearTerminal}
					>
						clear
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Custom scrollbar for terminal output */
	:global(.max-h-32::-webkit-scrollbar) {
		width: 4px;
	}
	
	:global(.max-h-32::-webkit-scrollbar-track) {
		background: rgba(255, 255, 255, 0.1);
	}
	
	:global(.max-h-32::-webkit-scrollbar-thumb) {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	}
</style>
