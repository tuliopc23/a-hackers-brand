<script lang="ts">
	import { cn } from '../utils.js';
	import { onMount, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	interface Props {
		title?: string;
		class?: string;
		commands?: Record<string, string>;
		autoPlay?: boolean;
		theme?: 'matrix' | 'cyberpunk' | 'hacker' | 'terminal';
		enableGlitch?: boolean;
		enableMatrixRain?: boolean;
		enableScanlines?: boolean;
		enableFlicker?: boolean;
		children?: any;
	}

	const {
		title = '◉ LIQUID_GLASS_TERMINAL_v2.0',
		class: className = '',
		commands = {
			help: '╔═══════════════════════════════════════════════════════════════╗\n║  AVAILABLE COMMANDS                                           ║\n╠═══════════════════════════════════════════════════════════════╣\n║  whoami     │ Display system architect identity             ║\n║  skills     │ Show technology matrix                        ║\n║  projects   │ List active projects                          ║\n║  contact    │ Communication protocols                       ║\n║  matrix     │ Initialize matrix rain effect                 ║\n║  glitch     │ Toggle terminal glitch effects                ║\n║  scan       │ Activate system scanner                       ║\n║  clear      │ Clear terminal buffer                         ║\n╚═══════════════════════════════════════════════════════════════╝',
			whoami:
				'┌─[SYSTEM_ARCHITECT@liquid-terminal]─[~/dev/brand-system]\n└─$ echo $USER_PROFILE\n\n█▀▀ █▀▀ █▀█ █▀▄ █▀▀   █▀▄ █▀▀ █ █ █▀▀ █   █▀█ █▀█ █▀▀ █▀█\n█▄▄ █▄█ █▄█ █▄▀ █▄▄   █▄▀ █▄▄ ▀▄▀ █▄▄ █▄▄ █▄█ █▀▀ █▄▄ █▀▄\n\n│ ROLE: Full Stack Developer & Design System Architect\n│ SPEC: Liquid Glass Terminal Fusion Systems\n│ STATUS: [████████████████████████████████] ONLINE\n│ CLEARANCE: ALPHA-7',
			skills:
				'╔══════════════════════════════════════════════════════════════╗\n║                    TECHNOLOGY MATRIX                         ║\n╠══════════════════════════════════════════════════════════════╣\n║ FRONTEND    ■■■■■■■■■■ 100%  │ Svelte, TypeScript, WebGL     ║\n║ BACKEND     ■■■■■■■■■□  90%  │ Node.js, Rust, WebAssembly    ║\n║ 3D/GRAPHICS ■■■■■■■■■■ 100%  │ Three.js, Threlte, Shaders    ║\n║ DESIGN SYS  ■■■■■■■■■■ 100%  │ Liquid Glass, Glassmorphism   ║\n║ TERMINAL    ■■■■■■■■■■ 100%  │ CLI, Zsh, PowerShell          ║\n║ HACKING     ■■■■■■■■□□  80%  │ Pentesting, OSINT, CTF        ║\n╚══════════════════════════════════════════════════════════════╝',
			projects:
				'┌─ ACTIVE PROJECTS ─────────────────────────────────────────┐\n│                                                           │\n│ ▸ LIQUIDIFY             │ React → Svelte UI Library     │\n│ ▸ GLASS_TERMINAL        │ Advanced Terminal Interface    │\n│ ▸ NEURAL_VIZ            │ AI Visualization Engine       │\n│ ▸ BRAND_SYSTEM          │ Corporate Identity Matrix      │\n│ ▸ PORTFOLIO_v3          │ Personal Hacker Portfolio      │\n│                                                           │\n└───────────────────────────────────────────────────────────┘',
			contact:
				'╔══════════════════════════════════════════════════════════════╗\n║                  COMMUNICATION PROTOCOLS                    ║\n╠══════════════════════════════════════════════════════════════╣\n║ EMAIL    │ tulio@tuliocunha.dev                             ║\n║ GITHUB   │ https://github.com/tuliopc23                     ║\n║ LINKEDIN │ https://linkedin.com/in/tulio-cunha              ║\n║ DISCORD  │ tuliopc23#1337                                   ║\n║ TELEGRAM │ @tuliopc23                                       ║\n╚══════════════════════════════════════════════════════════════╝',
			matrix:
				'INITIALIZING MATRIX RAIN PROTOCOL...\n[████████████████████████████████] 100%\nMATRIX EFFECT: ACTIVE\nCODE RAIN: STREAMING\nREALITY.EXE HAS STOPPED WORKING',
			glitch:
				'G̴L̵I̴T̵C̶H̸ ̷E̵F̸F̵E̸C̷T̸ ̵T̶O̴G̸G̵L̸E̷D̵\n█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█\nS̷Y̸S̴T̵E̷M̶ ̸I̴N̵S̵T̸A̷B̸I̵L̴I̷T̸Y̵ ̶D̷E̸T̴E̸C̵T̷E̶D̸\n█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█',
			scan: '┌─ SYSTEM SCANNER ACTIVE ─┐\n│ Scanning ports...       │\n│ [###               ] 15%│\n│ Found: 3 open services  │\n│ SSH (22) - OPEN         │\n│ HTTP (80) - OPEN        │\n│ HTTPS (443) - OPEN      │\n└─────────────────────────┘',
			clear: ''
		},
		autoPlay = false,
		theme = 'hacker',
		enableGlitch = true,
		enableMatrixRain = false,
		enableScanlines = true,
		enableFlicker = false,
		children
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let terminalRef = $state<HTMLDivElement>();
	let canvasRef = $state<HTMLCanvasElement>();
	let inputValue = $state('');
	let history = $state<Array<{ command: string; output: string; timestamp: Date }>>([]);
	const currentPrompt = $state('┌─[HACKER@liquid-glass]─[~/]\n└─$ ');
	let isGlitching = $state(false);
	let matrixActive = $state(enableMatrixRain);
	const scanlineActive = $state(enableScanlines);
	const flickerActive = $state(enableFlicker);

	// Matrix rain effect
	const matrixChars =
		'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
	let matrixColumns: number[] = [];
	let matrixAnimation: number;

	const executeCommand = (command: string) => {
		const trimmedCommand = command.trim().toLowerCase();
		let output = '';

		if (trimmedCommand === 'clear') {
			history = [];
			inputValue = '';
			return;
		} else if (trimmedCommand === 'matrix') {
			matrixActive = !matrixActive;
			if (matrixActive) {
				startMatrixRain();
			} else {
				stopMatrixRain();
			}
			output = commands[trimmedCommand] || 'MATRIX RAIN DEACTIVATED';
		} else if (trimmedCommand === 'glitch') {
			triggerGlitch();
			output = commands[trimmedCommand] || 'GLITCH EFFECT ACTIVATED';
		} else {
			output = commands[trimmedCommand] || `zsh: command not found: ${command}\n\nTry 'help' for available commands.`;
		}

		history = [
			...history,
			{
				command: trimmedCommand,
				output,
				timestamp: new Date()
			}
		];

		inputValue = '';

		// Scroll to bottom with smooth animation
		setTimeout(() => {
			if (terminalRef) {
				terminalRef.scrollTo({
					top: terminalRef.scrollHeight,
					behavior: 'smooth'
				});
			}
		}, 50);
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			executeCommand(inputValue);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			// Command history navigation could be added here
		}
	};

	// Glitch effect
	const triggerGlitch = () => {
		isGlitching = true;
		setTimeout(() => {
			isGlitching = false;
		}, 1000);
	};

	// Matrix rain animation
	const startMatrixRain = () => {
		if (!canvasRef) return;

		const ctx = canvasRef.getContext('2d')!;
		const fontSize = 14;
		const columns = Math.floor(canvasRef.width / fontSize);

		matrixColumns = Array(columns).fill(0);

		const draw = () => {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
			ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);

			ctx.fillStyle = '#00ff88';
			ctx.font = `${fontSize}px 'PP Supply Mono', monospace`;

			for (let i = 0; i < matrixColumns.length; i++) {
				const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
				ctx.fillText(char, i * fontSize, matrixColumns[i] * fontSize);

				if (matrixColumns[i] * fontSize > canvasRef.height && Math.random() > 0.975) {
					matrixColumns[i] = 0;
				}
				matrixColumns[i]++;
			}
		};

		const animate = () => {
			draw();
			matrixAnimation = requestAnimationFrame(animate);
		};

		animate();
	};

	const stopMatrixRain = () => {
		if (matrixAnimation) {
			cancelAnimationFrame(matrixAnimation);
		}
	};

	// Auto-resize canvas
	const resizeCanvas = () => {
		if (canvasRef && terminalRef) {
			canvasRef.width = terminalRef.offsetWidth;
			canvasRef.height = terminalRef.offsetHeight;
		}
	};

	onMount(() => {
		resizeCanvas();

		if (matrixActive) {
			startMatrixRain();
		}

		// Demo sequence
		if (autoPlay) {
			setTimeout(() => {
				executeCommand('whoami');
			}, 1000);
		}

		return () => {
			stopMatrixRain();
		};
	});

	// Theme classes
	const themeClasses = {
		matrix: 'bg-black text-green-400 border-green-500/30',
		cyberpunk: 'bg-purple-900/20 text-cyan-400 border-cyan-500/30',
		hacker: 'bg-black text-terminal-green border-terminal-green/30',
		terminal: 'bg-terminal-bg text-terminal-fg border-white/20'
	};
</script>

<svelte:window onresize={resizeCanvas} />

<div
	class={cn(
		'relative overflow-hidden rounded-xl backdrop-blur-md transition-all duration-300',
		'border shadow-2xl shadow-black/25 transform-gpu will-change-transform',
		themeClasses[theme],
		scanlineActive && 'terminal-scanlines',
		flickerActive && 'terminal-flicker',
		isGlitching && 'terminal-glitch',
		className
	)}
>
	<!-- Matrix Rain Canvas -->
	{#if matrixActive}
		<canvas bind:this={canvasRef} class="absolute inset-0 pointer-events-none z-0 opacity-30"></canvas>
	{/if}

	<!-- Terminal Header -->
	<div class="relative z-10 flex items-center justify-between p-4 border-b border-current/20 bg-black/50">
		<div class="flex items-center gap-3">
			<!-- Terminal Controls -->
			<div class="flex gap-2">
				<div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
				<div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
				<div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
			</div>

			<!-- Title with glitch effect -->
			<h3 class="text-sm font-mono font-semibold">
				{#if isGlitching}
					<span class="glitch" data-text={title}>{title}</span>
				{:else}
					{title}
				{/if}
			</h3>
		</div>

		<!-- Status indicators -->
		<div class="flex items-center gap-2 text-xs font-mono">
			<span class="px-2 py-1 bg-current/10 rounded">SECURE</span>
			<span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
		</div>
	</div>

	<!-- Terminal Body -->
	<div
		bind:this={terminalRef}
		class="relative z-10 p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed terminal-scroll"
		style="scrollbar-width: thin;"
	>
		<!-- Welcome Message -->
		<div class="mb-4 text-current/80">
			<pre class="whitespace-pre-wrap">╔══════════════════════════════════════════════════════════════╗
║ LIQUID GLASS TERMINAL v2.0 - SECURITY LEVEL: ALPHA-7        ║
║ SYSTEM STATUS: ONLINE │ ENCRYPTION: AES-256 │ UPTIME: 99.9% ║
╚══════════════════════════════════════════════════════════════╝

Connection established. Type 'help' for available commands.</pre>
		</div>

		<!-- Command History -->
		{#each history as entry}
			<div class="mb-4">
				<!-- Command -->
				<div class="flex items-start gap-2 mb-2">
					<span class="text-current whitespace-pre">{currentPrompt}</span>
					<span class="text-white">{entry.command}</span>
					<span class="text-xs text-current/40 ml-auto">
						{entry.timestamp.toLocaleTimeString()}
					</span>
				</div>
				<!-- Output -->
				<div class="text-current/90 mb-2 whitespace-pre-wrap font-mono">
					{entry.output}
				</div>
			</div>
		{/each}

		<!-- Current Input -->
		<div class="flex items-start gap-2">
			<span class="text-current whitespace-pre">{currentPrompt}</span>
			<input
				bind:value={inputValue}
				onkeydown={handleKeydown}
				class="flex-1 bg-transparent border-none outline-none text-white font-mono"
				placeholder="Enter command..."
				autocomplete="off"
				spellcheck="false"
			/>
			<span class="w-2 h-5 bg-current animate-pulse"></span>
		</div>

		{#if children}
			<div class="mt-4">
				{@render children()}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Glitch Effect */
	.glitch {
		position: relative;
		color: white;
		font-size: inherit;
		font-weight: inherit;
		animation: glitch-skew 1s ease-in-out infinite alternate-reverse;
	}

	.glitch::before,
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.glitch::before {
		animation: glitch-anim 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
		color: #ff0000;
		z-index: -1;
	}

	.glitch::after {
		animation: glitch-anim2 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
		color: #00ffff;
		z-index: -2;
	}

	@keyframes glitch-anim {
		0% {
			clip-path: inset(40% 0 61% 0);
		}
		20% {
			clip-path: inset(92% 0 1% 0);
		}
		40% {
			clip-path: inset(43% 0 1% 0);
		}
		60% {
			clip-path: inset(25% 0 58% 0);
		}
		80% {
			clip-path: inset(54% 0 7% 0);
		}
		100% {
			clip-path: inset(58% 0 43% 0);
		}
	}

	@keyframes glitch-anim2 {
		0% {
			clip-path: inset(25% 0 58% 0);
		}
		20% {
			clip-path: inset(54% 0 7% 0);
		}
		40% {
			clip-path: inset(58% 0 43% 0);
		}
		60% {
			clip-path: inset(40% 0 61% 0);
		}
		80% {
			clip-path: inset(92% 0 1% 0);
		}
		100% {
			clip-path: inset(43% 0 1% 0);
		}
	}

	@keyframes glitch-skew {
		0% {
			transform: skew(0deg);
		}
		10% {
			transform: skew(-2deg);
		}
		20% {
			transform: skew(2deg);
		}
		30% {
			transform: skew(-1deg);
		}
		40% {
			transform: skew(1deg);
		}
		50% {
			transform: skew(0deg);
		}
		60% {
			transform: skew(-1deg);
		}
		70% {
			transform: skew(2deg);
		}
		80% {
			transform: skew(-2deg);
		}
		90% {
			transform: skew(1deg);
		}
		100% {
			transform: skew(0deg);
		}
	}

	/* Terminal Effects */
	.terminal-scanlines::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		z-index: 1000;
		background: linear-gradient(transparent 98%, rgba(0, 255, 136, 0.08) 100%);
		background-size: 100% 4px;
		animation: scanlines 0.1s linear infinite;
	}

	@keyframes scanlines {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(4px);
		}
	}

	.terminal-flicker {
		animation: flicker 0.15s infinite linear;
	}

	@keyframes flicker {
		0% {
			opacity: 1;
		}
		98% {
			opacity: 1;
		}
		99% {
			opacity: 0.98;
		}
		100% {
			opacity: 1;
		}
	}

	.terminal-glitch {
		animation: terminal-shake 0.1s ease-in-out infinite alternate;
	}

	@keyframes terminal-shake {
		0% {
			transform: translateX(0px);
		}
		25% {
			transform: translateX(-2px);
		}
		50% {
			transform: translateX(2px);
		}
		75% {
			transform: translateX(-1px);
		}
		100% {
			transform: translateX(1px);
		}
	}

	/* Custom Scrollbar */
	.terminal-scroll::-webkit-scrollbar {
		width: 8px;
	}

	.terminal-scroll::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.3);
	}

	.terminal-scroll::-webkit-scrollbar-thumb {
		background: rgba(0, 255, 136, 0.5);
		border-radius: 4px;
	}

	.terminal-scroll::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 255, 136, 0.7);
	}
</style>
