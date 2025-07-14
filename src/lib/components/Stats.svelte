<script lang="ts">
	import { onMount } from 'svelte';
	import { springPop, breathing } from '$lib/motion/index.js';
	import { cn } from '$lib/utils/index.js';

	interface StatItem {
		label: string;
		value: number | string;
		unit?: string;
		icon?: string;
		color?: 'cyan' | 'green' | 'yellow' | 'red' | 'purple' | 'blue';
		trend?: 'up' | 'down' | 'stable';
		description?: string;
	}

	interface Props {
		stats: StatItem[];
		title?: string;
		animated?: boolean;
		interactive?: boolean;
		realTime?: boolean;
		class?: string;
	}

	const {
		stats = [],
		title = 'System Stats',
		animated = true,
		interactive = true,
		realTime = false,
		class: className = ''
	}: Props = $props();

	let terminalOutput = $state<string[]>([]);
	let currentCommand = $state('');
	let isExecuting = $state(false);
	let showCursor = $state(true);
	let currentTime = $state(new Date().toLocaleTimeString());
	let systemUptime = $state(0);

	const colorClasses = {
		cyan: 'text-cyan-400',
		green: 'text-green-400',
		yellow: 'text-yellow-400',
		red: 'text-red-400',
		purple: 'text-purple-400',
		blue: 'text-blue-400'
	};

	const trendIcons = {
		up: '↗',
		down: '↘',
		stable: '→'
	};

	const commands = {
		'top': () => {
			return stats.map((stat, i) => 
				`${(i + 1).toString().padStart(2)}. ${stat.label.padEnd(20)} ${stat.value}${stat.unit || ''}`
			).join('\n');
		},
		'ps aux': () => {
			return stats.map(stat => 
				`tulio    ${Math.floor(Math.random() * 9999).toString().padStart(4)}  ${typeof stat.value === 'number' ? stat.value : '0'}%  ${stat.label}`
			).join('\n');
		},
		'free -h': () => {
			const memStats = stats.filter(s => s.label.toLowerCase().includes('memory') || s.label.toLowerCase().includes('ram'));
			if (memStats.length === 0) return 'No memory stats available';
			
			return `              total        used        free      shared  buff/cache   available
Mem:           16Gi        8.2Gi        2.1Gi        1.2Gi        5.7Gi        6.8Gi
Swap:          2.0Gi          0B        2.0Gi`;
		},
		'df -h': () => {
			return `Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       256G  128G  115G  53% /
tmpfs           8.0G     0  8.0G   0% /dev/shm
/dev/sda2       1.0T  512G  488G  52% /home`;
		},
		'uptime': () => {
			const days = Math.floor(systemUptime / (24 * 60 * 60));
			const hours = Math.floor((systemUptime % (24 * 60 * 60)) / (60 * 60));
			const minutes = Math.floor((systemUptime % (60 * 60)) / 60);
			
			return `up ${days} days, ${hours}:${minutes.toString().padStart(2, '0')}, 1 user, load average: 0.42, 0.37, 0.25`;
		},
		'iostat': () => {
			return `Device             tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda              12.34        45.67        89.01     123456     789012
sdb               5.67        12.34        23.45      56789     123456`;
		},
		'netstat -i': () => {
			return `Kernel Interface table
Iface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0      1500   123456      0      0 0        98765      0      0      0 BMRU
lo       65536    45678      0      0 0        45678      0      0      0 LRU`;
		},
		'cat /proc/cpuinfo | grep "model name" | head -1': () => {
			return 'model name	: Intel(R) Core(TM) i7-12700K CPU @ 3.60GHz';
		},
		'help': () => 'Available commands: top, ps aux, free -h, df -h, uptime, iostat, netstat -i, cat /proc/cpuinfo, clear'
	};

	async function executeCommand(command: string) {
		if (isExecuting) return;
		
		isExecuting = true;
		currentCommand = '';
		
		// Type the command
		for (let i = 0; i <= command.length; i++) {
			currentCommand = command.slice(0, i);
			await new Promise(resolve => setTimeout(resolve, 20 + Math.random() * 20));
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

	function formatValue(value: number | string, unit?: string): string {
		if (typeof value === 'number') {
			if (value >= 1000000) {
				return `${(value / 1000000).toFixed(1)}M${unit || ''}`;
			} else if (value >= 1000) {
				return `${(value / 1000).toFixed(1)}K${unit || ''}`;
			}
			return `${value}${unit || ''}`;
		}
		return `${value}${unit || ''}`;
	}

	function getProgressBar(value: number, max: number = 100): string {
		const percentage = Math.min((value / max) * 100, 100);
		const filled = Math.floor(percentage / 10);
		const empty = 10 - filled;
		return '█'.repeat(filled) + '░'.repeat(empty);
	}

	onMount(() => {
		// Update time every second
		const timeInterval = setInterval(() => {
			currentTime = new Date().toLocaleTimeString();
			systemUptime += 1;
		}, 1000);

		// Cursor blinking
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		// Auto-demo
		if (interactive) {
			setTimeout(() => executeCommand('top'), 1000);
		}

		// Real-time updates
		if (realTime) {
			const updateInterval = setInterval(() => {
				// Simulate real-time stat updates
				stats.forEach(stat => {
					if (typeof stat.value === 'number') {
						const variation = (Math.random() - 0.5) * 0.1;
						stat.value = Math.max(0, stat.value + (stat.value * variation));
					}
				});
			}, 5000);
			
			return () => {
				clearInterval(timeInterval);
				clearInterval(cursorInterval);
				clearInterval(updateInterval);
			};
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
				{title.toLowerCase().replace(/\s+/g, '-')} — htop
			</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-xs text-white/60 font-mono">{currentTime}</span>
			{#if realTime}
				<div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
			{/if}
		</div>
	</div>

	<div class="p-4">
		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
			{#each stats as stat, index (stat.label)}
				<div
					class="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded transition-all duration-200"
					use:springPop={{ scale: 0.98, duration: 150 }}
					style="animation-delay: {index * 100}ms"
				>
					<div class="flex items-center justify-between mb-2">
						<div class="flex items-center gap-2">
							{#if stat.icon}
								<span class="text-lg">{stat.icon}</span>
							{/if}
							<span class="text-sm text-white/80 font-mono">{stat.label}</span>
						</div>
						{#if stat.trend}
							<span class={cn(
								'text-xs font-mono',
								stat.trend === 'up' ? 'text-green-400' : 
								stat.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
							)}>
								{trendIcons[stat.trend]}
							</span>
						{/if}
					</div>
					
					<div class="space-y-2">
						<div class={cn(
							'text-2xl font-bold font-mono',
							stat.color ? colorClasses[stat.color] : 'text-cyan-400'
						)}
							use:breathing={{ scale: [1, 1.02], duration: 2000 }}
						>
							{formatValue(stat.value, stat.unit)}
						</div>
						
						{#if typeof stat.value === 'number' && stat.value <= 100}
							<div class="space-y-1">
								<div class="flex justify-between text-xs">
									<span class="text-white/60">Progress</span>
									<span class={cn(
										'font-mono',
										stat.color ? colorClasses[stat.color] : 'text-cyan-400'
									)}>
										{stat.value}%
									</span>
								</div>
								<div class="font-mono text-xs">
									<span class={cn(
										stat.color ? colorClasses[stat.color] : 'text-cyan-400'
									)}>
										{getProgressBar(stat.value)}
									</span>
								</div>
							</div>
						{/if}
						
						{#if stat.description}
							<div class="text-xs text-white/40 font-mono">
								{stat.description}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- Interactive Terminal -->
		{#if interactive}
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
					{#each ['top', 'free -h', 'df -h', 'uptime'] as cmd}
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

		<!-- System Info Footer -->
		<div class="mt-4 p-3 bg-white/5 border border-white/10 rounded">
			<div class="flex justify-between items-center text-xs font-mono">
				<div class="text-white/60">
					Uptime: {Math.floor(systemUptime / 3600)}h {Math.floor((systemUptime % 3600) / 60)}m
				</div>
				<div class="text-white/60">
					Load: 0.42, 0.37, 0.25
				</div>
				<div class="text-green-400">
					● System Healthy
				</div>
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
