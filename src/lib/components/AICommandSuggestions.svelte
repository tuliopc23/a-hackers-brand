<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fly, fade } from 'svelte/transition';

	interface CommandSuggestion {
		id: string;
		command: string;
		description: string;
		category: 'system' | 'development' | 'network' | 'file' | 'process' | 'ai';
		confidence: number;
		usage: string;
		parameters?: string[];
		examples?: string[];
	}

	interface Props {
		query: string;
		suggestions?: CommandSuggestion[];
		maxSuggestions?: number;
		showConfidence?: boolean;
		showCategories?: boolean;
		theme?: 'terminal' | 'cyberpunk' | 'neural';
		aiMode?: boolean;
		class?: string;
	}

	const {
		query = '',
		suggestions = [],
		maxSuggestions = 6,
		showConfidence = true,
		showCategories = true,
		theme = 'terminal',
		aiMode = true,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	// AI-generated suggestions based on query
	const aiSuggestions = writable<CommandSuggestion[]>([]);
	let selectedIndex = $state(-1);
	let isThinking = $state(false);

	// Default command database
	const defaultCommands: CommandSuggestion[] = [
		{
			id: 'ls',
			command: 'ls',
			description: 'List directory contents with detailed information',
			category: 'file',
			confidence: 0.95,
			usage: 'ls [options] [directory]',
			parameters: ['-l', '-a', '-h', '-t', '-r'],
			examples: ['ls -la', 'ls -lh /home', 'ls -lt']
		},
		{
			id: 'grep',
			command: 'grep',
			description: 'Search text patterns in files',
			category: 'file',
			confidence: 0.92,
			usage: 'grep [options] pattern [file...]',
			parameters: ['-r', '-i', '-n', '-v', '-E'],
			examples: ['grep -r "function" .', 'grep -n "error" log.txt']
		},
		{
			id: 'git-status',
			command: 'git status',
			description: 'Show working tree status and staged changes',
			category: 'development',
			confidence: 0.98,
			usage: 'git status [options]',
			parameters: ['-s', '--porcelain', '--branch'],
			examples: ['git status', 'git status -s']
		},
		{
			id: 'npm-install',
			command: 'npm install',
			description: 'Install dependencies from package.json',
			category: 'development',
			confidence: 0.94,
			usage: 'npm install [package] [options]',
			parameters: ['--save', '--save-dev', '--global', '--force'],
			examples: ['npm install', 'npm install lodash --save']
		},
		{
			id: 'curl',
			command: 'curl',
			description: 'Transfer data from or to network servers',
			category: 'network',
			confidence: 0.89,
			usage: 'curl [options] [URL...]',
			parameters: ['-X', '-H', '-d', '-o', '-L'],
			examples: ['curl -X GET https://api.example.com', 'curl -H "Content-Type: application/json"']
		},
		{
			id: 'docker-ps',
			command: 'docker ps',
			description: 'List running Docker containers',
			category: 'system',
			confidence: 0.93,
			usage: 'docker ps [options]',
			parameters: ['-a', '--format', '--filter'],
			examples: ['docker ps', 'docker ps -a']
		},
		{
			id: 'tail',
			command: 'tail',
			description: 'Display last lines of files in real-time',
			category: 'file',
			confidence: 0.91,
			usage: 'tail [options] [file...]',
			parameters: ['-f', '-n', '-c'],
			examples: ['tail -f /var/log/syslog', 'tail -n 50 error.log']
		},
		{
			id: 'htop',
			command: 'htop',
			description: 'Interactive process viewer and system monitor',
			category: 'process',
			confidence: 0.87,
			usage: 'htop [options]',
			parameters: ['-d', '-u', '--sort-key'],
			examples: ['htop', 'htop -d 5']
		}
	];

	// Theme configurations
	const themeConfig = {
		terminal: {
			bg: 'bg-terminal-bg/95 border-terminal-green/30',
			text: 'text-terminal-green',
			accent: 'text-terminal-cyan',
			muted: 'text-terminal-green/60',
			selected: 'bg-terminal-green/20',
			category: 'text-terminal-blue'
		},
		cyberpunk: {
			bg: 'bg-purple-950/95 border-pink-500/30',
			text: 'text-pink-300',
			accent: 'text-cyan-300',
			muted: 'text-pink-300/60',
			selected: 'bg-pink-500/20',
			category: 'text-purple-300'
		},
		neural: {
			bg: 'bg-slate-900/95 border-blue-400/30',
			text: 'text-blue-300',
			accent: 'text-purple-300',
			muted: 'text-blue-300/60',
			selected: 'bg-blue-500/20',
			category: 'text-indigo-300'
		}
	};

	const currentTheme = themeConfig[theme];

	// Category icons and colors
	const categoryConfig = {
		system: { icon: '⚙️', color: 'text-blue-400' },
		development: { icon: '💻', color: 'text-green-400' },
		network: { icon: '🌐', color: 'text-purple-400' },
		file: { icon: '📁', color: 'text-yellow-400' },
		process: { icon: '⚡', color: 'text-orange-400' },
		ai: { icon: '🤖', color: 'text-cyan-400' }
	};

	// AI thinking simulation
	const simulateAIThinking = async (searchQuery: string): Promise<CommandSuggestion[]> => {
		isThinking = true;
		
		// Simulate AI processing time
		await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
		
		// Filter and score commands based on query
		const filtered = defaultCommands
			.filter(cmd => 
				cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
				cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
			)
			.map(cmd => ({
				...cmd,
				confidence: Math.min(0.98, cmd.confidence + Math.random() * 0.1)
			}))
			.sort((a, b) => b.confidence - a.confidence)
			.slice(0, maxSuggestions);

		isThinking = false;
		return filtered;
	};

	// Update suggestions based on query
	const updateSuggestions = async (newQuery: string) => {
		if (!newQuery.trim()) {
			aiSuggestions.set([]);
			return;
		}

		if (aiMode) {
			const results = await simulateAIThinking(newQuery);
			aiSuggestions.set(results);
		} else {
			const filtered = suggestions.slice(0, maxSuggestions);
			aiSuggestions.set(filtered);
		}
	};

	// Handle keyboard navigation
	const handleKeydown = (event: KeyboardEvent) => {
		const currentSuggestions = $aiSuggestions;
		
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				selectedIndex = Math.min(selectedIndex + 1, currentSuggestions.length - 1);
				break;
			case 'ArrowUp':
				event.preventDefault();
				selectedIndex = Math.max(selectedIndex - 1, -1);
				break;
			case 'Enter':
				event.preventDefault();
				if (selectedIndex >= 0 && currentSuggestions[selectedIndex]) {
					selectCommand(currentSuggestions[selectedIndex]);
				}
				break;
			case 'Escape':
				selectedIndex = -1;
				aiSuggestions.set([]);
				break;
		}
	};

	// Select a command
	const selectCommand = (command: CommandSuggestion) => {
		dispatch('select', {
			command,
			timestamp: new Date()
		});
		selectedIndex = -1;
	};

	// Get confidence color
	const getConfidenceColor = (confidence: number): string => {
		if (confidence >= 0.9) return 'text-green-400';
		if (confidence >= 0.7) return 'text-yellow-400';
		if (confidence >= 0.5) return 'text-orange-400';
		return 'text-red-400';
	};

	// Get confidence label
	const getConfidenceLabel = (confidence: number): string => {
		if (confidence >= 0.9) return 'HIGH';
		if (confidence >= 0.7) return 'MED';
		return 'LOW';
	};

	// React to query changes
	$effect(() => {
		updateSuggestions(query);
	});

	onMount(() => {
		// Add keyboard event listener
		window.addEventListener('keydown', handleKeydown);
		
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{#if query.trim() && ($aiSuggestions.length > 0 || isThinking)}
	<div 
		class={cn(
			'relative mt-2 p-4 rounded-lg border backdrop-blur-md',
			'shadow-2xl transform-gpu',
			currentTheme.bg,
			className
		)}
		transition:fly={{ y: 10, duration: 200 }}
	>
		<!-- Header -->
		<div class={cn('flex items-center justify-between mb-3 pb-2 border-b border-current/20', currentTheme.text)}>
			<div class="flex items-center gap-2">
				<span class="text-sm font-bold">🤖 AI SUGGESTIONS</span>
				{#if isThinking}
					<div class="flex gap-1">
						<div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
						<div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
						<div class="w-1 h-1 bg-current rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
					</div>
				{/if}
			</div>
			<span class={cn('text-xs', currentTheme.muted)}>
				{$aiSuggestions.length} matches
			</span>
		</div>

		<!-- Thinking State -->
		{#if isThinking}
			<div class={cn('flex items-center gap-3 p-3 rounded-lg bg-black/20', currentTheme.muted)}>
				<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
				<span class="text-sm font-mono">Analyzing patterns...</span>
			</div>
		{/if}

		<!-- Suggestions List -->
		{#if !isThinking && $aiSuggestions.length > 0}
			<div class="space-y-2">
				{#each $aiSuggestions as suggestion, index}
					<div 
						class={cn(
							'p-3 rounded-lg cursor-pointer transition-all duration-200',
							'hover:scale-[1.02] transform-gpu border border-transparent',
							index === selectedIndex ? currentTheme.selected : 'hover:bg-white/5',
							'group'
						)}
						role="button"
						tabindex="0"
						aria-label={`Execute command: ${suggestion.command}`}
						onclick={() => selectCommand(suggestion)}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								selectCommand(suggestion);
							}
						}}
						transition:fade={{ duration: 150, delay: index * 50 }}
					>
						<!-- Command Header -->
						<div class="flex items-center justify-between mb-2">
							<div class="flex items-center gap-2">
								{#if showCategories}
									<span class={categoryConfig[suggestion.category].color}>
										{categoryConfig[suggestion.category].icon}
									</span>
								{/if}
								<span class={cn('font-mono font-bold', currentTheme.text)}>
									{suggestion.command}
								</span>
							</div>
							
							{#if showConfidence}
								<div class="flex items-center gap-2">
									<span class={cn('text-xs font-bold', getConfidenceColor(suggestion.confidence))}>
										{getConfidenceLabel(suggestion.confidence)}
									</span>
									<div class="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden">
										<div 
											class={cn('h-full rounded-full transition-all duration-300', getConfidenceColor(suggestion.confidence).replace('text-', 'bg-'))}
											style="width: {suggestion.confidence * 100}%"
										></div>
									</div>
								</div>
							{/if}
						</div>

						<!-- Description -->
						<p class={cn('text-sm mb-2', currentTheme.muted)}>
							{suggestion.description}
						</p>

						<!-- Usage -->
						<div class={cn('text-xs font-mono p-2 rounded bg-black/30', currentTheme.accent)}>
							{suggestion.usage}
						</div>

						<!-- Examples (shown on hover) -->
						{#if suggestion.examples && suggestion.examples.length > 0}
							<div class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
								<div class={cn('text-xs font-bold mb-1', currentTheme.text)}>Examples:</div>
								<div class="flex flex-wrap gap-1">
									{#each suggestion.examples as example}
										<code class={cn('text-xs px-2 py-1 rounded bg-black/40', currentTheme.muted)}>
											{example}
										</code>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}

		<!-- No Results -->
		{#if !isThinking && query.trim() && $aiSuggestions.length === 0}
			<div class={cn('text-center py-8', currentTheme.muted)}>
				<div class="text-2xl mb-2">🤔</div>
				<p class="text-sm">No suggestions found for "{query}"</p>
				<p class="text-xs mt-1">Try a different search term</p>
			</div>
		{/if}

		<!-- Footer -->
		{#if !isThinking && $aiSuggestions.length > 0}
			<div class={cn('mt-3 pt-2 border-t border-current/20 text-xs', currentTheme.muted)}>
				<div class="flex items-center justify-between">
					<span>Use ↑↓ to navigate, Enter to select</span>
					<span>AI-powered suggestions</span>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	/* Smooth animations */
	.group:hover .group-hover\:opacity-100 {
		opacity: 1;
	}
</style>