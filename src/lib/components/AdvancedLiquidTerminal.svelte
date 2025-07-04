<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { brandColors } from '$lib/tokens';
	import RetroText from './RetroText.svelte';

	interface Props {
		title?: string;
		variant?: 'matrix' | 'cyberpunk' | 'neon' | 'classic';
		fullscreen?: boolean;
		minimized?: boolean;
		resizable?: boolean;
		commands?: string[];
		autoType?: boolean;
		liquidEffect?: boolean;
		glowIntensity?: number;
		class?: string;
	}

	const {
		title = 'Terminal',
		variant = 'matrix',
		fullscreen = false,
		minimized = false,
		resizable = true,
		commands = ['echo "Welcome to the Matrix"', 'ls -la', 'whoami'],
		autoType = true,
		liquidEffect = true,
		glowIntensity = 1,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let terminalRef: HTMLDivElement;
	let inputRef: HTMLInputElement;
	let outputContainer: HTMLDivElement;
	let currentInput = $state('');
	const commandHistory: string[] = [];
	let historyIndex = -1;
	let currentCommandIndex = 0;
	let isTyping = false;

	const variants = {
		matrix: {
			primary: brandColors.terminal.green,
			secondary: brandColors.terminal.matrix,
			background: 'rgba(0, 0, 0, 0.9)',
			glow: brandColors.terminal.green
		},
		cyberpunk: {
			primary: brandColors.terminal.neon,
			secondary: brandColors.terminal.purple,
			background: 'rgba(16, 16, 32, 0.95)',
			glow: brandColors.terminal.neon
		},
		neon: {
			primary: brandColors.terminal.cyan,
			secondary: brandColors.terminal.blue,
			background: 'rgba(0, 16, 32, 0.9)',
			glow: brandColors.terminal.cyan
		},
		classic: {
			primary: brandColors.terminal.amber,
			secondary: brandColors.terminal.orange,
			background: 'rgba(0, 0, 0, 0.95)',
			glow: brandColors.terminal.amber
		}
	};

	const currentVariant = $derived(variants[variant]);

	onMount(() => {
		if (autoType && commands.length > 0) {
			setTimeout(() => {
				typeCommand(commands[currentCommandIndex]);
			}, 1000);
		}
		
		// Add magnetic hover effect
		if (liquidEffect && terminalRef) {
			addMagneticEffect();
		}
	});

	function addMagneticEffect() {
		if (!terminalRef) return;

		terminalRef.addEventListener('mousemove', (e) => {
			const rect = terminalRef.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const centerX = rect.width / 2;
			const centerY = rect.height / 2;
			
			const deltaX = (x - centerX) / centerX;
			const deltaY = (y - centerY) / centerY;
			
			terminalRef.style.transform = `
				perspective(1000px) 
				rotateX(${deltaY * 2}deg) 
				rotateY(${deltaX * 2}deg) 
				translateZ(10px)
			`;
		});

		terminalRef.addEventListener('mouseleave', () => {
			terminalRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
		});
	}

	async function typeCommand(command: string) {
		if (isTyping) return;
		isTyping = true;
		
		currentInput = '';
		
		for (let i = 0; i <= command.length; i++) {
			currentInput = command.slice(0, i);
			await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50));
		}
		
		await new Promise(resolve => setTimeout(resolve, 500));
		executeCommand();
		
		setTimeout(() => {
			currentCommandIndex = (currentCommandIndex + 1) % commands.length;
			if (autoType) {
				typeCommand(commands[currentCommandIndex]);
			}
		}, 2000);
	}

	function executeCommand() {
		const command = currentInput.trim();
		if (!command) return;

		commandHistory.push(command);
		addToOutput(`<span style="color: ${currentVariant.primary}">➜</span> ${command}`);
		
		// Simulate command output
		setTimeout(() => {
			let output = '';
			switch (command.split(' ')[0]) {
				case 'ls':
					output = `<span style="color: ${currentVariant.secondary}">drwxr-xr-x</span>  portfolio/
<span style="color: ${currentVariant.secondary}">drwxr-xr-x</span>  projects/
<span style="color: ${currentVariant.secondary}">-rw-r--r--</span>  README.md
<span style="color: ${currentVariant.secondary}">-rw-r--r--</span>  package.json`;
					break;
				case 'whoami':
					output = `<span style="color: ${currentVariant.primary}">tulio@matrix</span>`;
					break;
				case 'echo':
					output = command.substring(5).replace(/"/g, '');
					break;
				default:
					output = `<span style="color: ${brandColors.semantic.error}">Command not found: ${command}</span>`;
			}
			addToOutput(output);
			currentInput = '';
			isTyping = false;
		}, 300);
	}

	function addToOutput(content: string) {
		if (outputContainer) {
			const line = document.createElement('div');
			line.innerHTML = content;
			line.style.margin = '4px 0';
			line.style.fontFamily = 'PP Supply Mono, monospace';
			outputContainer.appendChild(line);
			outputContainer.scrollTop = outputContainer.scrollHeight;
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (isTyping) return;

		switch (event.key) {
			case 'Enter':
				executeCommand();
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (historyIndex < commandHistory.length - 1) {
					historyIndex++;
					currentInput = commandHistory[commandHistory.length - 1 - historyIndex];
				}
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (historyIndex > 0) {
					historyIndex--;
					currentInput = commandHistory[commandHistory.length - 1 - historyIndex];
				} else if (historyIndex === 0) {
					historyIndex = -1;
					currentInput = '';
				}
				break;
		}
	}

	function handleControlClick(action: 'close' | 'minimize' | 'maximize') {
		dispatch(action);
	}
</script>

<div
	bind:this={terminalRef}
	class="advanced-liquid-terminal {className}"
	class:fullscreen
	class:minimized
	class:liquid-effect={liquidEffect}
	style="
		position: relative;
		background: {currentVariant.background};
		backdrop-filter: blur(20px) saturate(180%);
		border: 1px solid {currentVariant.primary}40;
		border-radius: 16px;
		box-shadow: 
			0 8px 32px rgba(0, 0, 0, 0.3),
			0 0 0 1px {currentVariant.primary}20,
			inset 0 1px 0 rgba(255, 255, 255, 0.1),
			{liquidEffect ? `0 0 60px ${currentVariant.glow}${Math.floor(glowIntensity * 0.3 * 255).toString(16).padStart(2, '0')}` : 'none'};
		transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		font-family: 'PP Supply Mono', monospace;
		overflow: hidden;
		transform-style: preserve-3d;
		min-width: 280px;
		min-height: 300px;
		width: 100%;
		max-width: 100%;
		height: {fullscreen ? '100vh' : 'clamp(300px, 50vh, 500px)'};
	"
>
	<!-- macOS Traffic Light Controls -->
	<div class="terminal-header" style="
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 20px;
		background: rgba(255, 255, 255, 0.05);
		border-bottom: 1px solid {currentVariant.primary}30;
		backdrop-filter: blur(10px);
	">
		<div class="traffic-lights" style="display: flex; gap: 8px;">
			<button
				class="traffic-light close"
				onclick={() => handleControlClick('close')}
				aria-label="Close terminal"
				style="
					width: 12px;
					height: 12px;
					border-radius: 50%;
					border: none;
					background: #ff5f57;
					cursor: pointer;
					position: relative;
					transition: all 0.2s ease;
				"
				onmouseenter={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = '#ff3b30';
					target.style.boxShadow = '0 0 10px #ff5f57';
				}}
				onmouseleave={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = '#ff5f57';
					target.style.boxShadow = 'none';
				}}
			></button>
			<button
				class="traffic-light minimize"
				onclick={() => handleControlClick('minimize')}
				aria-label="Minimize terminal"
				style="
					width: 12px;
					height: 12px;
					border-radius: 50%;
					border: none;
					background: #ffbd2e;
					cursor: pointer;
					transition: all 0.2s ease;
				"
				onmouseenter={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = '#ff9f0a';
					target.style.boxShadow = '0 0 10px #ffbd2e';
				}}
				onmouseleave={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = '#ffbd2e';
					target.style.boxShadow = 'none';
				}}
			></button>
			<button
				class="traffic-light maximize"
				onclick={() => handleControlClick('maximize')}
				aria-label="Maximize terminal"
				style="
					width: 12px;
					height: 12px;
					border-radius: 50%;
					border: none;
					background: #28ca42;
					cursor: pointer;
					transition: all 0.2s ease;
				"
				onmouseenter={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = '#30d158';
					target.style.boxShadow = '0 0 10px #28ca42';
				}}
				onmouseleave={(e) => {
					const target = e.target as HTMLElement;
					target.style.background = '#28ca42';
					target.style.boxShadow = 'none';
				}}
			></button>
		</div>

		<RetroText 
			text={title} 
			variant="terminal" 
			size="sm" 
			animated={false}
			glow={false}
		/>

		<div style="width: 68px;"></div> <!-- Spacer for centering -->
	</div>

	<!-- Terminal Body -->
	<div class="terminal-body" style="
		padding: 20px;
		height: calc(100% - 60px);
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	">
		<!-- Output Container -->
		<div
			bind:this={outputContainer}
			class="output-container"
			style="
				flex: 1;
				overflow-y: auto;
				margin-bottom: 20px;
				color: {currentVariant.secondary};
				line-height: 1.4;
				font-size: 14px;
			"
		></div>

		<!-- Input Line -->
		<div class="input-line" style="
			display: flex;
			align-items: center;
			color: {currentVariant.primary};
			font-size: 14px;
		">
			<span class="prompt" style="
				color: {currentVariant.primary};
				text-shadow: 0 0 10px {currentVariant.primary};
				margin-right: 8px;
				user-select: none;
			">
				➜
			</span>
			
			<input
				bind:this={inputRef}
				bind:value={currentInput}
				onkeydown={handleKeyDown}
				disabled={isTyping}
				style="
					background: transparent;
					border: none;
					outline: none;
					color: {currentVariant.primary};
					font-family: inherit;
					font-size: inherit;
					flex: 1;
					caret-color: {currentVariant.primary};
					text-shadow: 0 0 5px {currentVariant.primary};
				"
				placeholder={isTyping ? '' : 'Type a command...'}
			/>
			
			{#if !isTyping}
				<span class="cursor" style="
					color: {currentVariant.primary};
					animation: blink 1s infinite;
					margin-left: 2px;
				">
					▌
				</span>
			{/if}
		</div>
	</div>

	<!-- Liquid Effect Overlay -->
	{#if liquidEffect}
		<div class="liquid-overlay" style="
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), {currentVariant.primary}10 0%, transparent 50%);
			pointer-events: none;
			opacity: 0.6;
			transition: opacity 0.3s ease;
		"></div>
	{/if}

	<!-- Scanlines Effect -->
	<div class="scanlines" style="
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			{currentVariant.primary}05 2px,
			{currentVariant.primary}05 4px
		);
		pointer-events: none;
		opacity: 0.3;
		animation: scanlines-move 4s linear infinite;
	"></div>
</div>

<style>
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	@keyframes scanlines-move {
		0% { transform: translateY(0); }
		100% { transform: translateY(4px); }
	}

	.advanced-liquid-terminal.liquid-effect:hover {
		transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(20px);
		box-shadow: 
			0 12px 40px rgba(0, 0, 0, 0.4),
			0 0 0 1px var(--primary-glow),
			inset 0 1px 0 rgba(255, 255, 255, 0.2),
			0 0 80px var(--primary-glow);
	}

	.advanced-liquid-terminal.fullscreen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw !important;
		height: 100vh !important;
		border-radius: 0;
		z-index: 1000;
	}

	.advanced-liquid-terminal.minimized {
		height: 60px !important;
		overflow: hidden;
	}

	.advanced-liquid-terminal.minimized .terminal-body {
		display: none;
	}

	.output-container::-webkit-scrollbar {
		width: 8px;
	}

	.output-container::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 4px;
	}

	.output-container::-webkit-scrollbar-thumb {
		background: var(--primary-color);
		border-radius: 4px;
		opacity: 0.7;
	}

	.output-container::-webkit-scrollbar-thumb:hover {
		opacity: 1;
	}

	.traffic-light:hover {
		transform: scale(1.1);
	}

	.traffic-light:active {
		transform: scale(0.95);
	}

	.advanced-liquid-terminal {
		min-width: 280px;
		min-height: 300px;
	}

	@media (min-width: 640px) {
		.advanced-liquid-terminal {
			min-width: 400px;
			min-height: 350px;
		}
	}

	@media (min-width: 768px) {
		.advanced-liquid-terminal {
			min-width: 500px;
			min-height: 400px;
		}
	}

	@media (min-width: 1024px) {
		.advanced-liquid-terminal {
			min-width: 600px;
			max-width: 1200px;
		}
	}
</style>