<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { dev } from '$app/environment';

	// State variables
	let fps = $state(0);
	let vitals = $state<any[]>([]);
	let bundleInfo = $state<{ path: string; size?: number }[]>([]);
	let visible = $state(dev); // Hidden in production
	let mounted = false;
	import { threlteConfig, threlteActions } from '../stores/threlte.js';

	// Use store state with $derived
	const show3D = $derived($threlteConfig.enabled);
	const sceneType = $derived($threlteConfig.scene);
	const quality = $derived($threlteConfig.quality);
	const autoRotate = $derived($threlteConfig.autoRotate);
	const renderInfo = $derived($threlteConfig.performance);

	// Cleanup function
	let animationId: number;
	let intervalId: ReturnType<typeof setTimeout>;

	// Toggle visibility function
	function toggleVisibility() {
		visible = !visible;
	}

	// Use store actions
	const { toggle3D, setScene, setQuality, toggleAutoRotate } = threlteActions;

	// Expose toggle function to window in development
	if (dev && typeof window !== 'undefined') {
		(window as any).togglePerfOverlay = toggleVisibility;
	}

	onMount(() => {
		mounted = true;

		// Calculate FPS using requestAnimationFrame
		let lastFrameTime = performance.now();
		let frameCount = 0;

		function calculateFps() {
			if (!mounted) return;

			frameCount++;
			const now = performance.now();
			const delta = now - lastFrameTime;

			if (delta >= 1000) {
				fps = Math.round((frameCount * 1000) / delta);
				frameCount = 0;
				lastFrameTime = now;
			}

			animationId = requestAnimationFrame(calculateFps);
		}

		// Always start FPS calculation regardless of visibility
		animationId = requestAnimationFrame(calculateFps);

		// Get bundle information using import.meta.glob
		try {
			const modules = import.meta.glob('./**/*.js', { eager: false });
			bundleInfo = Object.keys(modules).map((path) => ({ path }));
		} catch (error) {
			console.warn('Failed to get bundle info:', error);
			bundleInfo = [];
		}

		// Update vitals periodically
		const updateVitals = () => {
			if (typeof window !== 'undefined' && window.__vitals) {
				vitals = [...window.__vitals];
			}
		};

		updateVitals();
		intervalId = setInterval(updateVitals, 1000);
	});

	onDestroy(() => {
		mounted = false;
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (intervalId) {
			clearInterval(intervalId);
		}
	});

	// Format values
	function formatValue(name: string, value: number): string {
		if (name === 'CLS') {
			return value.toFixed(3);
		}
		return `${Math.round(value)}ms`;
	}

	function getVitalColor(rating: string): string {
		switch (rating) {
			case 'good':
				return '#10b981'; // green
			case 'needs-improvement':
				return '#f59e0b'; // yellow
			case 'poor':
				return '#ef4444'; // red
			default:
				return '#6b7280'; // gray
		}
	}
</script>

{#if visible}
	<div class="perf-overlay">
		<div class="perf-header">
			<h3>🚀 Performance Overlay</h3>
			<button onclick={toggleVisibility} onkeydown={(e) => e.key === 'Enter' && toggleVisibility(e)} class="close-btn"
				>×</button
			>
		</div>

		<div class="perf-content">
			<!-- FPS Display -->
			<div class="metric">
				<span class="metric-label">FPS:</span>
				<span
					class="metric-value fps"
					class:good={fps >= 50}
					class:warning={fps >= 30 && fps < 50}
					class:poor={fps < 30}
				>
					{fps}
				</span>
			</div>

			<!-- Bundle Information -->
			<div class="metric">
				<span class="metric-label">Bundle Files:</span>
				<span class="metric-value">{bundleInfo().length}</span>
			</div>

			<!-- 3D Controls Section -->
			<div class="controls-section">
				<div class="section-title">3D Scene Controls</div>

				<!-- 3D Toggle -->
				<div class="metric">
					<span class="metric-label">3D Scene:</span>
					<button
						onclick={toggle3D}
						onkeydown={(e) => e.key === 'Enter' && toggle3D(e)}
						class="toggle-btn"
						class:active={show3D}
					>
						{show3D ? 'ON' : 'OFF'}
					</button>
				</div>

				{#if show3D}
					<!-- Scene Type Selector -->
					<div class="metric">
						<span class="metric-label">Scene:</span>
						<select
							value={sceneType}
							onchange={(e) => setScene((e.target as HTMLSelectElement).value as 'glass' | 'terminal' | 'default')}
							class="select-btn"
						>
							<option value="terminal">Terminal</option>
							<option value="glass">Glass</option>
							<option value="default">Default</option>
						</select>
					</div>

					<!-- Quality Selector -->
					<div class="metric">
						<span class="metric-label">Quality:</span>
						<select
							value={quality}
							onchange={(e) => setQuality((e.target as HTMLSelectElement).value as 'low' | 'medium' | 'high')}
							class="select-btn"
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>

					<!-- Auto-rotate Toggle -->
					<div class="metric">
						<span class="metric-label">Auto-rotate:</span>
						<button
							onclick={toggleAutoRotate}
							onkeydown={(e) => e.key === 'Enter' && toggleAutoRotate(e)}
							class="toggle-btn"
							class:active={autoRotate}
						>
							{autoRotate ? 'ON' : 'OFF'}
						</button>
					</div>

					<!-- Render Info -->
					<div class="metric">
						<span class="metric-label">Triangles:</span>
						<span class="metric-value">{renderInfo.triangles.toLocaleString()}</span>
					</div>
				{/if}
			</div>

			<!-- Core Web Vitals -->
			{#if vitals().length > 0}
				<div class="vitals-section">
					<div class="section-title">Core Web Vitals:</div>
					{#each vitals() as vital (vital.id || vital)}
						<div class="vital">
							<span class="vital-name">{vital.name}:</span>
							<span class="vital-value" style="color: {getVitalColor(vital.rating)}">
								{formatValue(vital.name, vital.value)}
							</span>
							<span class="vital-rating">({vital.rating})</span>
						</div>
					{/each}
				</div>
			{:else}
				<div class="metric">
					<span class="metric-label">Vitals:</span>
					<span class="metric-value">Loading...</span>
				</div>
			{/if}

			<!-- Bundle Details (collapsed by default) -->
			{#if bundleInfo().length > 0}
				<details class="bundle-details">
					<summary>Bundle Files ({bundleInfo().length})</summary>
					<div class="bundle-list">
						{#each bundleInfo().slice(0, 10) as bundle}
							<div class="bundle-item">{bundle.path}</div>
						{/each}
						{#if bundleInfo().length > 10}
							<div class="bundle-item more">... and {bundleInfo().length - 10} more</div>
						{/if}
					</div>
				</details>
			{/if}
		</div>
	</div>
{/if}

<style>
	.perf-overlay {
		position: fixed;
		top: 20px;
		right: 20px;
		width: 320px;
		max-height: 80vh;
		background: rgba(0, 0, 0, 0.9);
		-webkit-backdrop-filter: blur(10px);
		        backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		color: white;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
		font-size: 12px;
		z-index: 9999;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
	}

	.perf-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 16px;
		background: rgba(255, 255, 255, 0.05);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.perf-header h3 {
		margin: 0;
		font-size: 14px;
		font-weight: 600;
		color: #10b981;
	}

	.close-btn {
		background: none;
		border: none;
		color: white;
		font-size: 18px;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.close-btn:hover {
		opacity: 1;
	}

	.perf-content {
		padding: 16px;
		max-height: calc(80vh - 60px);
		overflow-y: auto;
	}

	.metric {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.metric-label {
		color: rgba(255, 255, 255, 0.7);
	}

	.metric-value {
		font-weight: 600;
		color: #10b981;
	}

	.fps.good {
		color: #10b981;
	}

	.fps.warning {
		color: #f59e0b;
	}

	.fps.poor {
		color: #ef4444;
	}

	.toggle-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
		padding: 4px 12px;
		border-radius: 4px;
		font-size: 10px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.toggle-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.toggle-btn.active {
		background: #10b981;
		border-color: #10b981;
		color: black;
	}

	.select-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 10px;
		cursor: pointer;
		transition: all 0.2s;
		min-width: 80px;
	}

	.select-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.select-btn option {
		background: #1a1a1a;
		color: white;
	}

	.controls-section {
		margin-top: 16px;
		padding-top: 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.vitals-section {
		margin-top: 16px;
	}

	.section-title {
		color: rgba(255, 255, 255, 0.9);
		font-weight: 600;
		margin-bottom: 8px;
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.vital {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 4px;
		font-size: 11px;
	}

	.vital-name {
		color: rgba(255, 255, 255, 0.7);
		flex: 1;
	}

	.vital-value {
		font-weight: 600;
		margin-right: 8px;
	}

	.vital-rating {
		color: rgba(255, 255, 255, 0.5);
		font-size: 10px;
	}

	.bundle-details {
		margin-top: 16px;
	}

	.bundle-details summary {
		color: rgba(255, 255, 255, 0.9);
		font-weight: 600;
		cursor: pointer;
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-bottom: 8px;
	}

	.bundle-list {
		max-height: 120px;
		overflow-y: auto;
	}

	.bundle-item {
		padding: 2px 0;
		color: rgba(255, 255, 255, 0.6);
		font-size: 10px;
		word-break: break-all;
	}

	.bundle-item.more {
		color: rgba(255, 255, 255, 0.4);
		font-style: italic;
	}

	/* Scrollbar styling */
	.perf-content::-webkit-scrollbar,
	.bundle-list::-webkit-scrollbar {
		width: 4px;
	}

	.perf-content::-webkit-scrollbar-track,
	.bundle-list::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}

	.perf-content::-webkit-scrollbar-thumb,
	.bundle-list::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.perf-overlay {
			top: 10px;
			right: 10px;
			left: 10px;
			width: auto;
		}
	}
</style>
