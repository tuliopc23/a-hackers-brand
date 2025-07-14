<script lang="ts">
	import { onMount } from 'svelte';
	import { magneticHover, breathing, jellyHover } from '$lib/motion/index.js';
	import { cn } from '$lib/utils/index.js';

	interface Props {
		src?: string;
		alt?: string;
		name?: string;
		title?: string;
		status?: 'online' | 'away' | 'busy' | 'offline';
		size?: 'sm' | 'md' | 'lg' | 'xl';
		animated?: boolean;
		interactive?: boolean;
		showTerminal?: boolean;
		class?: string;
	}

	const {
		src,
		alt = 'Avatar',
		name = 'Tulio Cunha',
		title = 'Full Stack Developer',
		status = 'online',
		size = 'lg',
		animated = true,
		interactive = true,
		showTerminal = true,
		class: className = ''
	}: Props = $props();

	let terminalOutput = $state<string[]>([]);
	let currentCommand = $state('');
	let isExecuting = $state(false);
	let showCursor = $state(true);
	let currentTime = $state(new Date().toLocaleTimeString());

	const sizeClasses = {
		sm: 'w-16 h-16',
		md: 'w-24 h-24',
		lg: 'w-32 h-32',
		xl: 'w-48 h-48'
	};

	const statusColors = {
		online: 'bg-green-400',
		away: 'bg-yellow-400',
		busy: 'bg-red-400',
		offline: 'bg-gray-400'
	};

	const statusMessages = {
		online: 'Available for collaboration',
		away: 'Away from keyboard',
		busy: 'Deep in code',
		offline: 'Currently offline'
	};

	const commands = {
		'whoami': () => `${name}\n${title}\nStatus: ${status}\nLast seen: ${currentTime}`,
		'id': () => `uid=1000(tulio) gid=1000(tulio) groups=1000(tulio),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),120(lpadmin),131(lxd),132(sambashare),999(docker)`,
		'uptime': () => {
			const uptime = Math.floor(Math.random() * 365) + 1;
			return `up ${uptime} days, 12:34, 1 user, load average: 0.42, 0.37, 0.25`;
		},
		'ps': () => `PID TTY          TIME CMD
1234 pts/0    00:00:01 zsh
5678 pts/0    00:00:00 node
9012 pts/0    00:00:02 code`,
		'env | grep USER': () => `USER=${name.toLowerCase().replace(/\s+/g, '')}
USERNAME=${name.toLowerCase().replace(/\s+/g, '')}
USER_ROLE=${title.toLowerCase().replace(/\s+/g, '_')}`,
		'cat ~/.profile': () => `# ~/.profile: executed by the command interpreter for login shells.
export PATH="$HOME/.local/bin:$PATH"
export EDITOR="code"
export BROWSER="firefox"

# Aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'

echo "Welcome back, ${name}!"`,
		'git config --list | head': () => `user.name=${name}
user.email=${name.toLowerCase().replace(/\s+/g, '.')}@example.com
core.editor=code
init.defaultbranch=main
pull.rebase=false`,
		'history | tail': () => `1001  git status
1002  npm run dev
1003  git add .
1004  git commit -m "feat: add new component"
1005  git push origin main
1006  npm test
1007  npm run build
1008  docker ps
1009  kubectl get pods
1010  whoami`,
		'help': () => 'Available commands: whoami, id, uptime, ps, env, cat ~/.profile, git config --list, history, clear'
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
		terminalOutput = [...terminalOutput, `$ ${command}`, output, ''];
		
		currentCommand = '';
		isExecuting = false;
	}

	function clearTerminal() {
		terminalOutput = [];
		currentCommand = '';
	}

	onMount(() => {
		// Update time every second
		const timeInterval = setInterval(() => {
			currentTime = new Date().toLocaleTimeString();
		}, 1000);

		// Cursor blinking
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		// Auto-demo
		if (interactive && showTerminal) {
			setTimeout(() => executeCommand('whoami'), 1000);
		}

		return () => {
			clearInterval(timeInterval);
			clearInterval(cursorInterval);
		};
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
				profile — zsh
			</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-xs text-white/60 font-mono">{currentTime}</span>
			<div class={cn('w-2 h-2 rounded-full', statusColors[status])}></div>
		</div>
	</div>

	<div class="p-6">
		<!-- Avatar Section -->
		<div class="flex flex-col items-center mb-6">
			<div 
				class={cn(
					'relative rounded-full overflow-hidden border-2 border-cyan-400/50',
					sizeClasses[size],
					animated && 'transition-all duration-300'
				)}
				use:magneticHover={{ strength: 0.2, radius: 50 }}
				use:breathing={{ scale: [1, 1.02], duration: 3000 }}
			>
				{#if src}
					<img 
						{src} 
						{alt}
						class="w-full h-full object-cover"
					/>
				{:else}
					<!-- ASCII Art Avatar -->
					<div class="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
						<div class="text-center font-mono text-xs leading-none text-cyan-400">
							{#if size === 'xl'}
								<pre class="text-[8px]">{`    ████████    
  ██        ██  
 ██  ██  ██  ██ 
██   ██  ██   ██
██              ██
██   ████████   ██
██   ██    ██   ██
 ██  ████████  ██ 
  ██        ██  
    ████████    `}</pre>
							{:else if size === 'lg'}
								<pre class="text-[6px]">{`  ████████  
 ██      ██ 
██  ██  ██  ██
██          ██
██  ██████  ██
 ██      ██ 
  ████████  `}</pre>
							{:else}
								<div class="text-2xl">👨‍💻</div>
							{/if}
						</div>
					</div>
				{/if}
				
				<!-- Status Indicator -->
				<div class={cn(
					'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-black',
					statusColors[status]
				)}
					use:breathing={{ scale: [1, 1.1], duration: 2000 }}
				></div>
			</div>

			<!-- User Info -->
			<div class="text-center mt-4">
				<h3 class="text-xl font-bold text-white font-mono">{name}</h3>
				<p class="text-cyan-400 text-sm font-mono">{title}</p>
				<p class="text-white/60 text-xs font-mono mt-1">{statusMessages[status]}</p>
			</div>
		</div>

		<!-- Interactive Terminal -->
		{#if showTerminal && interactive}
			<div class="bg-black/50 rounded border border-white/20 p-3 font-mono text-xs">
				<!-- Terminal Output -->
				<div class="space-y-1 max-h-32 overflow-y-auto">
					{#each terminalOutput as line}
						<div class={cn(
							line.startsWith('$') ? 'text-cyan-400' : 'text-white/80',
							'whitespace-pre-wrap'
						)}>
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
					{#each ['whoami', 'uptime', 'ps', 'history | tail'] as cmd}
						<button
							class="px-2 py-1 text-xs bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded transition-colors"
							onclick={() => executeCommand(cmd)}
							disabled={isExecuting}
							use:jellyHover={{ scale: 1.05, duration: 150 }}
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

		<!-- Quick Stats -->
		<div class="grid grid-cols-3 gap-3 mt-4">
			<div class="text-center p-2 bg-white/5 rounded border border-white/10">
				<div class="text-lg font-bold text-cyan-400 font-mono">5+</div>
				<div class="text-xs text-white/60">Years</div>
			</div>
			<div class="text-center p-2 bg-white/5 rounded border border-white/10">
				<div class="text-lg font-bold text-green-400 font-mono">50+</div>
				<div class="text-xs text-white/60">Projects</div>
			</div>
			<div class="text-center p-2 bg-white/5 rounded border border-white/10">
				<div class="text-lg font-bold text-yellow-400 font-mono">24/7</div>
				<div class="text-xs text-white/60">Available</div>
			</div>
		</div>
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
