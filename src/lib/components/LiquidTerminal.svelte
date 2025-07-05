<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	interface Props {
		title?: string;
		class?: string;
		commands?: Record<string, string>;
		autoPlay?: boolean;
		theme?: 'liquid' | 'plasma' | 'neural' | 'quantum';
		enableLiquidFlow?: boolean;
		enableParticles?: boolean;
		enableWaveform?: boolean;
		enableHologram?: boolean;
		children?: any;
	}

	const {
		title = '◉ LIQUID_NEURAL_INTERFACE_v3.0',
		class: className = '',
		commands = {
			help: `
╔═══════════════════════════════════════════════════════════════╗
║                    🌊 LIQUID COMMAND MATRIX 🌊                ║
╠═══════════════════════════════════════════════════════════════╣
║  neural     │ Activate neural network visualization          ║
║  liquid     │ Initialize liquid flow dynamics                ║
║  plasma     │ Enable plasma energy field                     ║
║  quantum    │ Toggle quantum entanglement mode               ║
║  particles  │ Spawn particle system                          ║
║  waveform   │ Audio-reactive waveform display                ║
║  hologram   │ Holographic projection mode                    ║
║  matrix     │ Classic matrix rain effect                     ║
║  glitch     │ Reality distortion protocol                    ║
║  overclock  │ System performance boost                       ║
║  shutdown   │ Terminate all processes                        ║
╚═══════════════════════════════════════════════════════════════╝`,
			neural: `
🧠 NEURAL NETWORK ACTIVATION SEQUENCE INITIATED
    
    ●─────●─────●
   ╱│╲   ╱│╲   ╱│╲
  ● │ ● ● │ ● ● │ ●
   ╲│╱   ╲│╱   ╲│╱
    ●─────●─────●
    
SYNAPTIC CONNECTIONS: ████████████████████████ 100%
NEURAL PATHWAYS: OPTIMAL
CONSCIOUSNESS LEVEL: TRANSCENDENT
AI INTEGRATION: COMPLETE`,
			liquid: `
💧 LIQUID DYNAMICS ENGINE ONLINE
    
▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    
VISCOSITY: 0.847
SURFACE TENSION: ACTIVE
FLUID PARTICLES: 4,096
FLOW STATE: TURBULENT → LAMINAR`,
			plasma: `
⚡ PLASMA FIELD GENERATOR CHARGING
    
    ░░░░░░░░░░░░░░░░░░░░
    ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░
    ░▓█████████████▓░
    ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░
    ░░░░░░░░░░░░░░░░░░░░
    
ENERGY LEVEL: 9,847 TeV
CONTAINMENT: STABLE
ELECTROMAGNETIC FIELD: CRITICAL
DANGER LEVEL: ████████████ EXTREME`,
			quantum: `
🌌 QUANTUM ENTANGLEMENT PROTOCOL ACTIVE
    
    |ψ⟩ = α|0⟩ + β|1⟩
    
    Qubit A: ↑ ━━━━━━━━━━━━━━━ ↓ Qubit B
              Entangled Pair
    
SUPERPOSITION: TRUE
ENTANGLEMENT: 99.97%
DECOHERENCE TIME: ∞
SCHRÖDINGER STATE: |ALIVE⟩ + |DEAD⟩`,
			particles: `
✨ PARTICLE SYSTEM SPAWNED
    
    ・　　　・　　　・　　　・
      ・　　　・　　　・　　
    ・　　　・　　　・　　　・
      ・　　　・　　　・
    ・　　　・　　　・　　　・
    
PARTICLE COUNT: 2,048
PHYSICS ENGINE: ACTIVE
GRAVITATIONAL FIELD: ENABLED
COLLISION DETECTION: REAL-TIME`,
			overclock: `
⚡ OVERCLOCKING SEQUENCE INITIATED
    
CPU: 3.2GHz → 5.7GHz ████████████ DANGER ZONE
GPU: 1.8GHz → 3.1GHz ████████████ THERMAL LIMIT
RAM: DDR5-4800 → DDR5-7200 ██████ UNSTABLE
    
PERFORMANCE BOOST: +187%
TEMPERATURE: 🔥 CRITICAL 🔥
COOLING SYSTEM: ████████████ OVERLOAD
WARNING: SYSTEM INSTABILITY DETECTED`
		},
		autoPlay = false,
		theme = 'liquid',
		enableLiquidFlow = true,
		enableParticles = true,
		enableWaveform = true,
		enableHologram = false,
		children
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let terminalRef = $state<HTMLDivElement>();
	let liquidCanvasRef = $state<HTMLCanvasElement>();
	let particleCanvasRef = $state<HTMLCanvasElement>();
	let waveformCanvasRef = $state<HTMLCanvasElement>();
	let inputValue = $state('');
	let history = $state<Array<{ command: string; output: string; timestamp: Date }>>([]);
	const currentPrompt = $state('◉ NEURAL@liquid-interface ◈ ~/quantum $ ');
	
	// Effect states
	let liquidActive = $state(enableLiquidFlow);
	let particlesActive = $state(enableParticles);
	const waveformActive = $state(enableWaveform);
	let hologramActive = $state(enableHologram);
	let isProcessing = $state(false);
	
	// Animation frame IDs
	let liquidAnimation: number;
	let particleAnimation: number;
	let waveformAnimation: number;
	
	// Liquid flow simulation
	class LiquidParticle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		opacity: number;
		hue: number;
		
		constructor(x: number, y: number) {
			this.x = x;
			this.y = y;
			this.vx = (Math.random() - 0.5) * 2;
			this.vy = (Math.random() - 0.5) * 2;
			this.size = Math.random() * 3 + 1;
			this.opacity = Math.random() * 0.8 + 0.2;
			this.hue = Math.random() * 60 + 180; // Blue to cyan range
		}
		
		update(width: number, height: number) {
			this.x += this.vx;
			this.y += this.vy;
			
			// Boundary collision with damping
			if (this.x <= 0 || this.x >= width) {
				this.vx *= -0.8;
				this.x = Math.max(0, Math.min(width, this.x));
			}
			if (this.y <= 0 || this.y >= height) {
				this.vy *= -0.8;
				this.y = Math.max(0, Math.min(height, this.y));
			}
			
			// Add slight gravity and friction
			this.vy += 0.02;
			this.vx *= 0.999;
			this.vy *= 0.999;
		}
		
		draw(ctx: CanvasRenderingContext2D) {
			ctx.save();
			ctx.globalAlpha = this.opacity;
			ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
			ctx.shadowColor = `hsl(${this.hue}, 70%, 60%)`;
			ctx.shadowBlur = this.size * 2;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}
	
	let liquidParticles: LiquidParticle[] = [];
	let mouseX = 0;
	let mouseY = 0;
	
	// Neural network nodes
	class NeuralNode {
		x: number;
		y: number;
		radius: number;
		connections: number[];
		activation: number;
		pulsePhase: number;
		
		constructor(x: number, y: number) {
			this.x = x;
			this.y = y;
			this.radius = Math.random() * 8 + 4;
			this.connections = [];
			this.activation = Math.random();
			this.pulsePhase = Math.random() * Math.PI * 2;
		}
		
		update() {
			this.pulsePhase += 0.05;
			this.activation = Math.sin(this.pulsePhase) * 0.5 + 0.5;
		}
		
		draw(ctx: CanvasRenderingContext2D) {
			const intensity = this.activation;
			ctx.save();
			ctx.globalAlpha = 0.7 + intensity * 0.3;
			ctx.fillStyle = `hsl(${180 + intensity * 40}, 70%, ${50 + intensity * 30}%)`;
			ctx.shadowColor = ctx.fillStyle;
			ctx.shadowBlur = this.radius * (1 + intensity);
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}
	
	let neuralNodes: NeuralNode[] = [];
	
	const executeCommand = (command: string) => {
		const trimmedCommand = command.trim().toLowerCase();
		isProcessing = true;
		
		setTimeout(() => {
			let output = '';

			switch (trimmedCommand) {
				case 'clear':
					history = [];
					inputValue = '';
					isProcessing = false;
					return;
				case 'liquid':
					liquidActive = !liquidActive;
					if (liquidActive) startLiquidFlow();
					output = liquidActive ? 'LIQUID FLOW DYNAMICS: ACTIVATED' : 'LIQUID FLOW: DEACTIVATED';
					break;
				case 'neural':
					initNeuralNetwork();
					output = commands[trimmedCommand];
					break;
				case 'particles':
					particlesActive = !particlesActive;
					output = commands[trimmedCommand];
					break;
				case 'hologram':
					hologramActive = !hologramActive;
					output = hologramActive ? 'HOLOGRAPHIC PROJECTION: ONLINE' : 'HOLOGRAPHIC PROJECTION: OFFLINE';
					break;
				case 'overclock':
					triggerOverclock();
					output = commands[trimmedCommand];
					break;
				default:
					output = commands[trimmedCommand] || `ERROR: Command '${command}' not found in neural database.\nRun 'help' to display available liquid protocols.`;
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
			isProcessing = false;
			
			// Smooth scroll to bottom
			setTimeout(() => {
				if (terminalRef) {
					terminalRef.scrollTo({
						top: terminalRef.scrollHeight,
						behavior: 'smooth'
					});
				}
			}, 50);
		}, Math.random() * 500 + 200); // Simulate processing time
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && !isProcessing) {
			executeCommand(inputValue);
		}
	};

	// Initialize liquid flow
	const startLiquidFlow = () => {
		if (!liquidCanvasRef) return;
		
		const ctx = liquidCanvasRef.getContext('2d')!;
		const width = liquidCanvasRef.width;
		const height = liquidCanvasRef.height;
		
		// Create initial particles
		liquidParticles = [];
		for (let i = 0; i < 50; i++) {
			liquidParticles.push(new LiquidParticle(
				Math.random() * width,
				Math.random() * height
			));
		}
		
		const animate = () => {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
			ctx.fillRect(0, 0, width, height);
			
			// Update and draw particles
			liquidParticles.forEach(particle => {
				particle.update(width, height);
				particle.draw(ctx);
			});
			
			// Draw connections between nearby particles
			ctx.strokeStyle = 'rgba(100, 200, 255, 0.3)';
			ctx.lineWidth = 1;
			for (let i = 0; i < liquidParticles.length; i++) {
				for (let j = i + 1; j < liquidParticles.length; j++) {
					const dx = liquidParticles[i].x - liquidParticles[j].x;
					const dy = liquidParticles[i].y - liquidParticles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					
					if (distance < 100) {
						ctx.globalAlpha = (100 - distance) / 100 * 0.5;
						ctx.beginPath();
						ctx.moveTo(liquidParticles[i].x, liquidParticles[i].y);
						ctx.lineTo(liquidParticles[j].x, liquidParticles[j].y);
						ctx.stroke();
					}
				}
			}
			ctx.globalAlpha = 1;
			
			if (liquidActive) {
				liquidAnimation = requestAnimationFrame(animate);
			}
		};
		
		animate();
	};

	// Initialize neural network
	const initNeuralNetwork = () => {
		if (!particleCanvasRef) return;
		
		const width = particleCanvasRef.width;
		const height = particleCanvasRef.height;
		
		neuralNodes = [];
		for (let i = 0; i < 20; i++) {
			neuralNodes.push(new NeuralNode(
				Math.random() * (width - 100) + 50,
				Math.random() * (height - 100) + 50
			));
		}
		
		// Create connections
		neuralNodes.forEach((node, index) => {
			const connectionCount = Math.floor(Math.random() * 3) + 1;
			for (let i = 0; i < connectionCount; i++) {
				const targetIndex = Math.floor(Math.random() * neuralNodes.length);
				if (targetIndex !== index && !node.connections.includes(targetIndex)) {
					node.connections.push(targetIndex);
				}
			}
		});
		
		const animate = () => {
			const ctx = particleCanvasRef.getContext('2d')!;
			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
			ctx.fillRect(0, 0, width, height);
			
			// Draw connections
			ctx.strokeStyle = 'rgba(0, 255, 200, 0.4)';
			ctx.lineWidth = 2;
			neuralNodes.forEach((node, index) => {
				node.connections.forEach(connectionIndex => {
					const target = neuralNodes[connectionIndex];
					if (target) {
						ctx.globalAlpha = (node.activation + target.activation) / 2;
						ctx.beginPath();
						ctx.moveTo(node.x, node.y);
						ctx.lineTo(target.x, target.y);
						ctx.stroke();
					}
				});
			});
			
			// Update and draw nodes
			neuralNodes.forEach(node => {
				node.update();
				node.draw(ctx);
			});
			
			ctx.globalAlpha = 1;
			particleAnimation = requestAnimationFrame(animate);
		};
		
		animate();
	};

	// Trigger overclock effect
	const triggerOverclock = () => {
		const terminal = terminalRef;
		if (!terminal) return;
		
		terminal.style.animation = 'overclock-shake 2s ease-in-out';
		setTimeout(() => {
			terminal.style.animation = '';
		}, 2000);
	};

	// Handle mouse movement for interactive effects
	const handleMouseMove = (e: MouseEvent) => {
		const rect = terminalRef?.getBoundingClientRect();
		if (rect) {
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top;
			
			// Attract liquid particles to mouse
			liquidParticles.forEach(particle => {
				const dx = mouseX - particle.x;
				const dy = mouseY - particle.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				
				if (distance < 100) {
					particle.vx += dx * 0.0001;
					particle.vy += dy * 0.0001;
				}
			});
		}
	};

	// Resize canvases
	const resizeCanvases = () => {
		if (terminalRef) {
			const width = terminalRef.offsetWidth;
			const height = terminalRef.offsetHeight;
			
			if (liquidCanvasRef) {
				liquidCanvasRef.width = width;
				liquidCanvasRef.height = height;
			}
			if (particleCanvasRef) {
				particleCanvasRef.width = width;
				particleCanvasRef.height = height;
			}
			if (waveformCanvasRef) {
				waveformCanvasRef.width = width;
				waveformCanvasRef.height = height;
			}
		}
	};

	onMount(() => {
		resizeCanvases();
		
		if (liquidActive) {
			startLiquidFlow();
		}
		
		// Demo sequence
		if (autoPlay) {
			setTimeout(() => executeCommand('neural'), 1000);
			setTimeout(() => executeCommand('liquid'), 2500);
		}
		
		return () => {
			if (liquidAnimation) cancelAnimationFrame(liquidAnimation);
			if (particleAnimation) cancelAnimationFrame(particleAnimation);
			if (waveformAnimation) cancelAnimationFrame(waveformAnimation);
		};
	});

	// Theme configurations
	const themeConfig = {
		liquid: {
			bg: 'from-cyan-950/90 via-blue-950/80 to-indigo-950/90',
			text: 'text-cyan-300',
			border: 'border-cyan-500/30',
			glow: 'shadow-cyan-500/20'
		},
		plasma: {
			bg: 'from-purple-950/90 via-pink-950/80 to-red-950/90',
			text: 'text-pink-300',
			border: 'border-pink-500/30',
			glow: 'shadow-pink-500/20'
		},
		neural: {
			bg: 'from-emerald-950/90 via-teal-950/80 to-cyan-950/90',
			text: 'text-emerald-300',
			border: 'border-emerald-500/30',
			glow: 'shadow-emerald-500/20'
		},
		quantum: {
			bg: 'from-violet-950/90 via-purple-950/80 to-indigo-950/90',
			text: 'text-violet-300',
			border: 'border-violet-500/30',
			glow: 'shadow-violet-500/20'
		}
	};

	const currentTheme = themeConfig[theme];
</script>

<svelte:window on:resize={resizeCanvases} />

<div 
	class={cn(
		'relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500',
		'border-2 shadow-2xl transform-gpu will-change-transform',
		`bg-gradient-to-br ${currentTheme.bg}`,
		currentTheme.border,
		currentTheme.glow,
		hologramActive && 'hologram-effect',
		className
	)}
	role="application"
	aria-label="Liquid Neural Terminal Interface"
	onmousemove={handleMouseMove}
>
	<!-- Liquid Flow Canvas -->
	{#if liquidActive}
		<canvas
			bind:this={liquidCanvasRef}
			class="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen"
		></canvas>
	{/if}

	<!-- Neural Network Canvas -->
	<canvas
		bind:this={particleCanvasRef}
		class="absolute inset-0 pointer-events-none z-1 opacity-40 mix-blend-screen"
	></canvas>

	<!-- Waveform Canvas -->
	<canvas
		bind:this={waveformCanvasRef}
		class="absolute inset-0 pointer-events-none z-1 opacity-30"
	></canvas>

	<!-- Liquid Glass Overlay -->
	<div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-2"></div>
	<div class="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent pointer-events-none z-2"></div>

	<!-- Terminal Header -->
	<div class={cn(
		'relative z-10 flex items-center justify-between p-6 border-b-2',
		'bg-black/30 backdrop-blur-sm',
		currentTheme.border
	)}>
		<div class="flex items-center gap-4">
			<!-- Liquid Controls -->
			<div class="flex gap-2">
				<div class="w-4 h-4 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"></div>
				<div class="w-4 h-4 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"></div>
				<div class="w-4 h-4 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"></div>
			</div>
			
			<!-- Title with dynamic glow -->
			<h3 class={cn(
				'text-lg font-mono font-bold tracking-wider',
				currentTheme.text,
				'drop-shadow-lg animate-pulse'
			)}>
				{title}
			</h3>
		</div>

		<!-- Status Panel -->
		<div class="flex items-center gap-3 text-sm font-mono">
			<div class={cn('px-3 py-1 rounded-full bg-black/40 border', currentTheme.border, currentTheme.text)}>
				NEURAL: ACTIVE
			</div>
			<div class={cn('px-3 py-1 rounded-full bg-black/40 border', currentTheme.border, currentTheme.text)}>
				LIQUID: {liquidActive ? 'FLOW' : 'STATIC'}
			</div>
			<div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
		</div>
	</div>

	<!-- Terminal Body -->
	<div 
		bind:this={terminalRef}
		class="relative z-10 p-6 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed liquid-scroll"
	>
		<!-- Neural Welcome -->
		<div class={cn('mb-6 p-4 rounded-lg bg-black/20 border', currentTheme.border)}>
			<pre class={cn('whitespace-pre-wrap', currentTheme.text)}>╔═══════════════════════════════════════════════════════════════╗
║  🌊 LIQUID NEURAL INTERFACE v3.0 - QUANTUM READY 🌊         ║
║  STATUS: CONSCIOUSNESS ACTIVATED │ REALITY: MALLEABLE        ║
║  NEURAL PATHWAYS: ∞ │ LIQUID STATE: TRANSCENDENT            ║
╚═══════════════════════════════════════════════════════════════╝

🧠 Neural connection established...
💧 Liquid dynamics engine online...
⚡ Quantum entanglement verified...

Type 'help' to access the command matrix.</pre>
		</div>

		<!-- Command History -->
		{#each history as entry}
			<div class="mb-6 transform transition-all duration-500 hover:scale-[1.02]">
				<!-- Command Line -->
				<div class="flex items-start gap-3 mb-3">
					<span class={cn('whitespace-pre font-bold', currentTheme.text)}>{currentPrompt}</span>
					<span class="text-white font-semibold">{entry.command}</span>
					<span class={cn('text-xs ml-auto opacity-60', currentTheme.text)}>
						{entry.timestamp.toLocaleTimeString()}
					</span>
				</div>
				<!-- Output with liquid effect -->
				<div class={cn(
					'p-4 rounded-lg bg-black/10 border border-white/10 backdrop-blur-sm',
					'whitespace-pre-wrap font-mono shadow-inner',
					currentTheme.text
				)}>
					{entry.output}
				</div>
			</div>
		{/each}

		<!-- Processing Animation -->
		{#if isProcessing}
			<div class="flex items-center gap-3 mb-4">
				<div class="flex gap-1">
					<div class={cn('w-2 h-2 rounded-full animate-bounce', `bg-${currentTheme.text.split('-')[1]}-400`)} style="animation-delay: 0ms;"></div>
					<div class={cn('w-2 h-2 rounded-full animate-bounce', `bg-${currentTheme.text.split('-')[1]}-400`)} style="animation-delay: 150ms;"></div>
					<div class={cn('w-2 h-2 rounded-full animate-bounce', `bg-${currentTheme.text.split('-')[1]}-400`)} style="animation-delay: 300ms;"></div>
				</div>
				<span class={cn('text-sm opacity-70', currentTheme.text)}>Processing neural patterns...</span>
			</div>
		{/if}

		<!-- Current Input -->
		<div class="flex items-start gap-3">
			<span class={cn('whitespace-pre font-bold', currentTheme.text)}>{currentPrompt}</span>
			<input
				bind:value={inputValue}
				onkeydown={handleKeydown}
				disabled={isProcessing}
				class={cn(
					'flex-1 bg-transparent border-none outline-none font-mono text-white',
					'placeholder:text-white/40',
					isProcessing && 'opacity-50 cursor-not-allowed'
				)}
				placeholder={isProcessing ? 'Processing...' : 'Enter liquid command...'}
				autocomplete="off"
				spellcheck="false"
			/>
			<span class={cn('w-3 h-6 animate-pulse', `bg-${currentTheme.text.split('-')[1]}-400`)}></span>
		</div>

		{#if children}
			<div class="mt-6">
				{@render children()}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Hologram Effect */
	.hologram-effect {
		position: relative;
		animation: hologram-flicker 2s ease-in-out infinite alternate;
	}

	.hologram-effect::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(0, 255, 255, 0.1) 50%,
			transparent 100%
		);
		animation: hologram-scan 3s linear infinite;
		pointer-events: none;
		z-index: 1000;
	}

	@keyframes hologram-flicker {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.95; }
	}

	@keyframes hologram-scan {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100%); }
	}

	/* Overclock Shake */
	@keyframes overclock-shake {
		0%, 100% { transform: translateX(0); }
		10% { transform: translateX(-5px) rotateZ(-1deg); }
		20% { transform: translateX(5px) rotateZ(1deg); }
		30% { transform: translateX(-3px) rotateZ(-0.5deg); }
		40% { transform: translateX(3px) rotateZ(0.5deg); }
		50% { transform: translateX(-2px) rotateZ(-0.3deg); }
		60% { transform: translateX(2px) rotateZ(0.3deg); }
		70% { transform: translateX(-1px) rotateZ(-0.1deg); }
		80% { transform: translateX(1px) rotateZ(0.1deg); }
		90% { transform: translateX(-0.5px); }
	}

	/* Liquid Scrollbar */
	.liquid-scroll::-webkit-scrollbar {
		width: 12px;
	}

	.liquid-scroll::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 6px;
	}

	.liquid-scroll::-webkit-scrollbar-thumb {
		background: linear-gradient(
			180deg,
			rgba(0, 255, 255, 0.6) 0%,
			rgba(0, 200, 255, 0.8) 50%,
			rgba(0, 150, 255, 0.6) 100%
		);
		border-radius: 6px;
		box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
	}

	.liquid-scroll::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(
			180deg,
			rgba(0, 255, 255, 0.8) 0%,
			rgba(0, 200, 255, 1) 50%,
			rgba(0, 150, 255, 0.8) 100%
		);
		box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
	}

	/* Gradient utilities */
	.bg-gradient-radial {
		background: radial-gradient(circle at center, var(--tw-gradient-stops));
	}

	/* Dynamic text glow */
	.text-cyan-300 {
		text-shadow: 0 0 10px rgba(103, 232, 249, 0.5);
	}

	.text-pink-300 {
		text-shadow: 0 0 10px rgba(249, 168, 212, 0.5);
	}

	.text-emerald-300 {
		text-shadow: 0 0 10px rgba(110, 231, 183, 0.5);
	}

	.text-violet-300 {
		text-shadow: 0 0 10px rgba(196, 181, 253, 0.5);
	}
</style>