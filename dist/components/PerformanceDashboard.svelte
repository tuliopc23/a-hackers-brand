<script lang="ts">
	import { onMount } from 'svelte';
	import { getSummary, observe } from '../perf.js';
	import { getVitals, getVitalsSummary } from '../../hooks.client.js';
	import { Card } from './index.js';
	import { Activity, Clock, Gauge, TrendingUp } from 'lucide-svelte';

	interface Props {
		class?: string;
	}

	const { class: className = '' }: Props = $props();

	let perfSummary = $state<any>({});
	let vitals = $state<any[]>([]);
	let vitalsSummary = $state<any>({});
	let isVisible = $state(false);

	// Real-time performance metrics
	let frameRate = $state(0);
	let memoryUsage = $state(0);
	let connectionType = $state('Unknown');

	onMount(() => {
		// Initial load
		updateMetrics();

		// Set up periodic updates
		const interval = setInterval(updateMetrics, 2000);

		// Observe new performance entries
		const unsubscribe = observe((entry) => {
			console.log('New performance entry:', entry);
			updateMetrics();
		});

		// Monitor frame rate
		let lastTime = performance.now();
		let frameCount = 0;

		function measureFrameRate() {
			frameCount++;
			const currentTime = performance.now();

			if (currentTime - lastTime >= 1000) {
				frameRate = Math.round((frameCount * 1000) / (currentTime - lastTime));
				frameCount = 0;
				lastTime = currentTime;
			}

			if (isVisible) {
				requestAnimationFrame(measureFrameRate);
			}
		}

		// Start frame rate monitoring
		measureFrameRate();

		// Get connection info
		if ('connection' in navigator) {
			const conn = (navigator as any).connection;
			connectionType = conn.effectiveType || conn.type || 'Unknown';
		}

		// Get memory info
		if ('memory' in performance) {
			const memory = (performance as any).memory;
			memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
		}

		return () => {
			clearInterval(interval);
			unsubscribe();
		};
	});

	function updateMetrics() {
		perfSummary = getSummary();
		vitals = getVitals();
		vitalsSummary = getVitalsSummary();
	}

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	function formatMs(value: number): string {
		return `${value.toFixed(1)}ms`;
	}

	function formatKB(bytes: number): string {
		return `${(bytes / 1024).toFixed(1)}KB`;
	}

	function getVitalRating(rating: string): string {
		switch (rating) {
			case 'good':
				return 'text-green-400';
			case 'needs-improvement':
				return 'text-yellow-400';
			case 'poor':
				return 'text-red-400';
			default:
				return 'text-gray-400';
		}
	}
</script>

<!-- Performance Dashboard Toggle -->
<button
	onclick={toggleVisibility}
	class="fixed bottom-4 right-4 z-50 p-3 glass rounded-full shadow-lg hover:scale-105 transition-all duration-200"
	title="Toggle Performance Dashboard"
>
	<Activity class="w-5 h-5 text-terminal-green" />
</button>

<!-- Performance Dashboard -->
{#if isVisible}
	<div class={`fixed inset-4 z-40 glass p-6 rounded-xl overflow-y-auto ${className}`}>
		<div class="flex justify-between items-center mb-6">
			<h2 class="text-2xl font-bold text-white flex items-center gap-2">
				<Gauge class="w-6 h-6 text-terminal-green" />
				Performance Dashboard
			</h2>
			<button onclick={toggleVisibility} class="text-white/60 hover:text-white transition-colors"> ✕ </button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
			<!-- Real-time Metrics -->
			<Card variant="glass" class="p-4">
				{#snippet children()}
					<div class="flex items-center gap-2 mb-2">
						<TrendingUp class="w-4 h-4 text-terminal-green" />
						<h3 class="font-semibold text-white">Real-time</h3>
					</div>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span class="text-white/70">Frame Rate:</span>
							<span class="text-terminal-green">{frameRate} FPS</span>
						</div>
						<div class="flex justify-between">
							<span class="text-white/70">Memory:</span>
							<span class="text-brand-primary">{memoryUsage} MB</span>
						</div>
						<div class="flex justify-between">
							<span class="text-white/70">Connection:</span>
							<span class="text-terminal-cyan">{connectionType}</span>
						</div>
					</div>
				{/snippet}
			</Card>

			<!-- Core Web Vitals -->
			<Card variant="glass" class="p-4">
				{#snippet children()}
					<div class="flex items-center gap-2 mb-2">
						<Clock class="w-4 h-4 text-brand-primary" />
						<h3 class="font-semibold text-white">Core Web Vitals</h3>
					</div>
					<div class="space-y-2 text-sm">
						{#each Object.entries(vitalsSummary) as [name, data]}
							<div class="flex justify-between">
								<span class="text-white/70">{name}:</span>
								<span class={getVitalRating((data as any).rating)}>
									{name === 'CLS' ? (data as any).value.toFixed(3) : formatMs((data as any).value)}
								</span>
							</div>
						{/each}
					</div>
				{/snippet}
			</Card>

			<!-- Navigation Timing -->
			<Card variant="glass" class="p-4">
				{#snippet children()}
					<div class="flex items-center gap-2 mb-2">
						<Activity class="w-4 h-4 text-terminal-cyan" />
						<h3 class="font-semibold text-white">Navigation</h3>
					</div>
					<div class="space-y-2 text-sm">
						{#if perfSummary.navigation}
							<div class="flex justify-between">
								<span class="text-white/70">DNS Lookup:</span>
								<span class="text-terminal-green">
									{formatMs(perfSummary.navigation.domainLookupEnd - perfSummary.navigation.domainLookupStart)}
								</span>
							</div>
							<div class="flex justify-between">
								<span class="text-white/70">TCP Connect:</span>
								<span class="text-brand-primary">
									{formatMs(perfSummary.navigation.connectEnd - perfSummary.navigation.connectStart)}
								</span>
							</div>
							<div class="flex justify-between">
								<span class="text-white/70">Request:</span>
								<span class="text-terminal-cyan">
									{formatMs(perfSummary.navigation.responseEnd - perfSummary.navigation.requestStart)}
								</span>
							</div>
						{:else}
							<div class="text-white/50">No navigation data available</div>
						{/if}
					</div>
				{/snippet}
			</Card>
		</div>

		<!-- Paint Timing -->
		{#if perfSummary.paint && Object.keys(perfSummary.paint).length > 0}
			<Card variant="glass" class="p-4 mb-4">
				{#snippet children()}
					<h3 class="font-semibold text-white mb-3">Paint Timing</h3>
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
						{#each Object.entries(perfSummary.paint) as [name, time]}
							<div class="text-center">
								<div class="text-white/70 mb-1">{name.replace('-', ' ').toUpperCase()}</div>
								<div class="text-terminal-green font-mono">{formatMs(time as number)}</div>
							</div>
						{/each}
					</div>
				{/snippet}
			</Card>
		{/if}

		<!-- Custom Marks -->
		{#if perfSummary.marks && perfSummary.marks.length > 0}
			<Card variant="glass" class="p-4 mb-4">
				{#snippet children()}
					<h3 class="font-semibold text-white mb-3">Performance Marks</h3>
					<div class="max-h-32 overflow-y-auto">
						<div class="space-y-1 text-sm">
							{#each perfSummary.marks.slice(-10) as mark}
								<div class="flex justify-between">
									<span class="text-white/70">{mark.name}:</span>
									<span class="text-terminal-green font-mono">{formatMs(mark.startTime)}</span>
								</div>
							{/each}
						</div>
					</div>
				{/snippet}
			</Card>
		{/if}

		<!-- Custom Measures -->
		{#if perfSummary.measures && perfSummary.measures.length > 0}
			<Card variant="glass" class="p-4">
				{#snippet children()}
					<h3 class="font-semibold text-white mb-3">Performance Measures</h3>
					<div class="max-h-32 overflow-y-auto">
						<div class="space-y-1 text-sm">
							{#each perfSummary.measures.slice(-10) as measure}
								<div class="flex justify-between">
									<span class="text-white/70">{measure.name}:</span>
									<span class="text-brand-primary font-mono">{formatMs(measure.duration)}</span>
								</div>
							{/each}
						</div>
					</div>
				{/snippet}
			</Card>
		{/if}
	</div>
{/if}

<style>
	.fixed.inset-4 {
		top: 1rem;
		right: 1rem;
		bottom: 1rem;
		left: 1rem;
	}

	@media (min-width: 768px) {
		.fixed.inset-4 {
			top: 2rem;
			right: 2rem;
			bottom: 2rem;
			left: 2rem;
		}
	}
</style>
