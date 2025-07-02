<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { HTML, OrbitControls, Text, Float, Environment } from '@threlte/extras';
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { spring } from 'svelte/motion';

	interface Props {
		position?: [number, number, number];
		rotation?: [number, number, number];
		scale?: number;
		quality?: 'low' | 'medium' | 'high';
		interactive?: boolean;
	}

	let {
		position = [0, 2, 0],
		rotation = [0, 0, 0],
		scale = 1.5,
		quality = 'medium',
		interactive = true
	}: Props = $props();

	let terminalRef: HTMLDivElement;
	let inputValue = $state('');
	let history = $state<Array<{ command: string; output: string; timestamp: Date }>>([]);
	let currentPrompt = '$';
	let terminalGroup: THREE.Group;
	let floatingElements: THREE.Group[] = [];
	let time = $state(0);
	let isTyping = $state(false);

	// Enhanced command system
	const commands = {
		help: '🚀 3D Terminal - Commands: help, matrix, glitch, orbit, stats, clear',
		matrix: '💚 Entering the Matrix... Reality.exe has stopped working',
		glitch: '⚡ System.error.404.reality.not.found',
		orbit: '🌍 Orbiting through cyberspace at lightspeed',
		stats: `📊 FPS: ${Math.round(60 + Math.random() * 20)} | Vertices: ${Math.round(1000 + Math.random() * 5000)} | Faces: ${Math.round(500 + Math.random() * 2000)}`,
		whoami: '🤖 You are now part of the 3D matrix',
		ls: '📁 reality.exe  consciousness.dll  quantum_states/  void.txt',
		clear: 'Terminal cleared'
	};

	// Animation springs
	const terminalFloat = spring({ y: 0, rotation: 0 }, { stiffness: 0.1, damping: 0.8 });
	const glitchEffect = spring(0, { stiffness: 0.3, damping: 0.6 });

	const executeCommand = (command: string) => {
		const trimmedCommand = command.trim().toLowerCase();

		if (trimmedCommand === 'clear') {
			history = [];
			inputValue = '';
			return;
		}

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
			// Trigger glitch effect
			glitchEffect.set(1);
			setTimeout(() => glitchEffect.set(0), 300);
		}
	};

	// Simple animation with CSS transforms
	let animationTime = $state(0);

	const updateAnimation = () => {
		animationTime += 0.01;
		requestAnimationFrame(updateAnimation);
	};

	onMount(() => {
		// Auto-execute help command for demo
		setTimeout(() => executeCommand('help'), 1000);

		// Performance optimizations
		if (typeof window !== 'undefined') {
			const canvas = document.querySelector('canvas');
			if (canvas) {
				canvas.style.willChange = 'transform';
			}
		}
	});
</script>

<T.PerspectiveCamera makeDefault position={[8, 8, 12]} fov={40}>
	<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} autoRotate={true} autoRotateSpeed={1} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.6} />
<T.DirectionalLight position={[10, 10, 5]} intensity={1.2} castShadow />

<!-- Glass Terminal Container -->
<T.Group {position} {rotation} {scale}>
	<!-- Terminal Frame -->
	<T.Mesh>
		<T.BoxGeometry args={[6, 4, 0.2]} />
		<T.MeshPhysicalMaterial
			color="#1a1a1a"
			roughness={0.1}
			metalness={0.8}
			transmission={0.1}
			thickness={0.5}
			transparent={true}
			opacity={0.9}
		/>
	</T.Mesh>

	<!-- Terminal Screen -->
	<T.Mesh position={[0, 0, 0.1]}>
		<T.PlaneGeometry args={[5.5, 3.5]} />
		<T.MeshBasicMaterial color="#000000" transparent={true} opacity={0.8} />
	</T.Mesh>

	<!-- HTML Terminal Content -->
	<HTML position={[0, 0, 0.11]} transform occlude scale={0.08} distanceFactor={10}>
		<div class="floating-terminal" bind:this={terminalRef}>
			<!-- Terminal Header -->
			<div class="terminal-header">
				<div class="terminal-controls">
					<span class="terminal-control close"></span>
					<span class="terminal-control minimize"></span>
					<span class="terminal-control maximize"></span>
				</div>
				<div class="terminal-title">3D Floating Terminal</div>
				<div class="terminal-status">
					<span class="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span>
				</div>
			</div>

			<!-- Terminal Body -->
			<div class="terminal-body">
				<!-- Command History -->
				{#each history as entry}
					<div class="mb-2">
						<!-- Command -->
						<div class="flex items-center gap-2 mb-1">
							<span class="terminal-prompt text-terminal-green">{currentPrompt}</span>
							<span class="text-white text-sm">{entry.command}</span>
							<span class="text-xs text-white/40 ml-auto">
								{entry.timestamp.toLocaleTimeString()}
							</span>
						</div>
						<!-- Output -->
						<div class="terminal-output text-terminal-blue pl-4 mb-1 text-sm">
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
						class="terminal-input flex-1 bg-transparent border-none outline-none text-white font-mono text-sm"
						placeholder="Enter command..."
						autocomplete="off"
						spellcheck="false"
					/>
					<span class="w-1 h-4 bg-terminal-green animate-pulse"></span>
				</div>
			</div>
		</div>
	</HTML>
</T.Group>

<!-- Floating Glass Elements -->
<T.Mesh position={[4, 3, -2]} rotation={[0.2, 0.4, 0.1]}>
	<T.BoxGeometry args={[1.5, 1.5, 1.5]} />
	<T.MeshPhysicalMaterial
		color="#a7f3d0"
		roughness={0.1}
		metalness={0}
		transmission={1}
		thickness={0.8}
		ior={1.5}
		transparent={true}
		opacity={0.8}
	/>
</T.Mesh>

<T.Mesh position={[-4, -2, 3]} rotation={[-0.3, -0.2, 0.4]}>
	<T.BoxGeometry args={[2, 2, 2]} />
	<T.MeshPhysicalMaterial
		color="#fde047"
		roughness={0.1}
		metalness={0}
		transmission={1}
		thickness={0.8}
		ior={1.5}
		transparent={true}
		opacity={0.8}
	/>
</T.Mesh>

<style>
	.floating-terminal {
		width: 700px;
		height: 450px;
		background: rgba(0, 0, 0, 0.95);
		border: 1px solid rgba(0, 212, 170, 0.3);
		border-radius: 8px;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
		overflow: hidden;
		backdrop-filter: blur(10px);
	}

	.terminal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 12px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
		border-bottom: 1px solid rgba(0, 212, 170, 0.2);
	}

	.terminal-controls {
		display: flex;
		gap: 6px;
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
		color: white;
		font-size: 14px;
		font-weight: 600;
	}

	.terminal-status {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.terminal-body {
		padding: 12px;
		height: calc(100% - 50px);
		overflow-y: auto;
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

	.terminal-prompt {
		color: #00d4aa;
	}

	.text-terminal-green {
		color: #00d4aa;
	}

	.text-terminal-blue {
		color: #06b6d4;
	}
</style>
