<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { cn } from '$lib/utils.js';

	interface Props {
		showWebVitals?: boolean;
		showFPS?: boolean;
		showMemory?: boolean;
		updateInterval?: number;
		position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
		theme?: 'terminal' | 'cyberpunk' | 'minimal';
		class?: string;
	}

	const {
		showWebVitals = true,
		showFPS = true,
		showMemory = true,
		updateInterval = 1000,
		position = 'top-right',
		theme = 'terminal',
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	// Performance metrics stores
	const fps = writable(0);
	const memory = writable({ used: 0, total: 0, percentage: 0 });
	const webVitals = writable({
		lcp: 0, // Largest Contentful Paint
		fid: 0, // First Input Delay
		cls: 0, // Cumulative Layout Shift
		fcp: 0, // First Contentful Paint
		ttfb: 0 // Time to First Byte
	});

	// Animation frame tracking for FPS
	let frameCount = 0;
	let lastTime = performance.now();
	let animationId: number;
	let intervalId: ReturnType<typeof setTimeout>;

	// Web Vitals observer
	let observer: PerformanceObserver | null = null;

	// Theme configurations
	const themeConfig = {
		terminal: {
			bg: 'bg-black/80 border-terminal-green/30',
			text: 'text-terminal-green',
			accent: 'text-terminal-cyan',
			bar: 'bg-terminal-green',
			shadow: 'shadow-lg shadow-terminal-green/20'
		},
		cyberpunk: {
			bg: 'bg-purple-950/80 border-pink-500/30',
			text: 'text-pink-300',
			accent: 'text-cyan-300',
			bar: 'bg-gradient-to-r from-pink-500 to-cyan-500',
			shadow: 'shadow-lg shadow-pink-500/20'
		},
		minimal: {
			bg: 'bg-gray-900/80 border-gray-500/30',
			text: 'text-gray-300',
			accent: 'text-blue-300',
			bar: 'bg-blue-500',
			shadow: 'shadow-lg shadow-gray-900/20'
		}
	};

	const currentTheme = themeConfig()[theme];

	// Position classes
	const positionClasses = {
		'top-left': 'top-4 left-4',
		'top-right': 'top-4 right-4',
		'bottom-left': 'bottom-4 left-4',
		'bottom-right': 'bottom-4 right-4'
	};

	// FPS calculation
	const calculateFPS = () => {
		frameCount++;
		const currentTime = performance.now();
		const delta = currentTime - lastTime;

		if (delta >= 1000) {
			const currentFPS = Math.round((frameCount * 1000) / delta);
			fps.set(currentFPS);
			frameCount = 0;
			lastTime = currentTime;
		}

		animationId = requestAnimationFrame(calculateFPS);
	};

	// Memory usage calculation
	const calculateMemory = () => {
		if ('memory' in performance) {
			const memInfo = (performance as any).memory;
			const used = Math.round(memInfo.usedJSHeapSize / 1048576); // MB
			const total = Math.round(memInfo.totalJSHeapSize / 1048576); // MB
			const percentage = Math.round((used / total) * 100);

			memory.set({ used, total, percentage });
		}
	};

	// Web Vitals collection
	const initWebVitals = () => {
		if (!('PerformanceObserver' in window)) return;

		observer = new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				switch (entry.entryType) {
					case 'largest-contentful-paint':
						webVitals.update((v) => ({ ...v, lcp: Math.round(entry.startTime) }));
						break;
					case 'first-input':
						webVitals.update((v) => ({ ...v, fid: Math.round(entry.processingStart - entry.startTime) }));
						break;
					case 'layout-shift':
						if (!(entry as any).hadRecentInput) {
							webVitals.update((v) => ({ ...v, cls: v.cls + (entry as any).value }));
						}
						break;
					case 'paint':
						if (entry.name === 'first-contentful-paint') {
							webVitals.update((v) => ({ ...v, fcp: Math.round(entry.startTime) }));
						}
						break;
					case 'navigation':
						webVitals.update((v) => ({ ...v, ttfb: Math.round((entry as any).responseStart) }));
						break;
				}
			}
		});

		try {
			observer.observe({
				entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint', 'navigation']
			});
		} catch (e) {
			// Some performance entries not supported - silently handle
		}
	};

	// Update metrics
	const updateMetrics = () => {
		if (showMemory) calculateMemory();
		dispatch('metricsUpdate', {
			fps: $fps,
			memory: $memory,
			webVitals: $webVitals
		});
	};

	// Performance status indicator
	const getPerformanceStatus = (value: number, thresholds: { good: number; needs: number }) => {
		if (value <= thresholds.good) return 'good';
		if (value <= thresholds.needs) return 'needs-improvement';
		return 'poor';
	};

	// Format bytes to human readable
	const formatBytes = (bytes: number): string => {
		if (bytes === 0) return '0 B';
		const k = 1024;
		const sizes = ['B', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes()[i]}`;
	};

	// Performance bar component
	const getPerformanceColor = (status: string) => {
		switch (status) {
			case 'good':
				return 'bg-green-500';
			case 'needs-improvement':
				return 'bg-yellow-500';
			case 'poor':
				return 'bg-red-500';
			default:
				return 'bg-gray-500';
		}
	};

	onMount(() => {
		if (showFPS) {
			calculateFPS();
		}

		if (showWebVitals) {
			initWebVitals();
		}

		intervalId = setInterval(updateMetrics, updateInterval);

		return () => {
			if (animationId) cancelAnimationFrame(animationId);
			if (intervalId) clearInterval(intervalId);
			if (observer) observer.disconnect();
		};
	});
</script>

<div
	class={cn(
		'fixed z-50 p-4 rounded-lg backdrop-blur-md border font-mono text-sm',
		'transform transition-all duration-300 hover:scale-105',
		currentTheme.bg,
		currentTheme.shadow,
		positionClasses()[position],
		className
	)}
>
	<!-- Header -->
	<div class={cn('flex items-center justify-between mb-3 pb-2 border-b border-current/20', currentTheme.text)}>
		<span class="font-bold text-xs uppercase tracking-wider">⚡ PERFORMANCE</span>
		<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
	</div>

	<!-- FPS Monitor -->
	{#if showFPS}
		<div class="mb-3">
			<div class={cn('flex items-center justify-between mb-1', currentTheme.text)}>
				<span class="text-xs">FPS</span>
				<span class={cn('font-bold', $fps >= 55 ? 'text-green-400' : $fps >= 30 ? 'text-yellow-400' : 'text-red-400')}>
					{$fps}
				</span>
			</div>
			<div class="w-full bg-gray-700 rounded-full h-1.5">
				<div
					class={cn(
						'h-1.5 rounded-full transition-all duration-300',
						$fps >= 55 ? 'bg-green-400' : $fps >= 30 ? 'bg-yellow-400' : 'bg-red-400'
					)}
					style="width: {Math.min(($fps / 60) * 100, 100)}%"
				></div>
			</div>
		</div>
	{/if}

	<!-- Memory Usage -->
	{#if showMemory && $memory.total > 0}
		<div class="mb-3">
			<div class={cn('flex items-center justify-between mb-1', currentTheme.text)}>
				<span class="text-xs">MEMORY</span>
				<span
					class={cn(
						'font-bold text-xs',
						$memory.percentage < 70 ? 'text-green-400' : $memory.percentage < 85 ? 'text-yellow-400' : 'text-red-400'
					)}
				>
					{$memory.used}MB
				</span>
			</div>
			<div class="w-full bg-gray-700 rounded-full h-1.5">
				<div
					class={cn(
						'h-1.5 rounded-full transition-all duration-300',
						$memory.percentage < 70 ? 'bg-green-400' : $memory.percentage < 85 ? 'bg-yellow-400' : 'bg-red-400'
					)}
					style="width: {$memory.percentage}%"
				></div>
			</div>
		</div>
	{/if}

	<!-- Web Vitals -->
	{#if showWebVitals}
		<div class="space-y-2">
			<div class={cn('text-xs font-bold mb-2', currentTheme.accent)}>WEB VITALS</div>

			{#if $webVitals.lcp > 0}
				<div class="flex items-center justify-between">
					<span class="text-xs">LCP</span>
					<div class="flex items-center gap-2">
						<span class="text-xs">{$webVitals.lcp}ms</span>
						<div
							class={cn(
								'w-2 h-2 rounded-full',
								getPerformanceColor(getPerformanceStatus($webVitals.lcp, { good: 2500, needs: 4000 }))
							)}
						></div>
					</div>
				</div>
			{/if}

			{#if $webVitals.fid > 0}
				<div class="flex items-center justify-between">
					<span class="text-xs">FID</span>
					<div class="flex items-center gap-2">
						<span class="text-xs">{$webVitals.fid}ms</span>
						<div
							class={cn(
								'w-2 h-2 rounded-full',
								getPerformanceColor(getPerformanceStatus($webVitals.fid, { good: 100, needs: 300 }))
							)}
						></div>
					</div>
				</div>
			{/if}

			{#if $webVitals.cls > 0}
				<div class="flex items-center justify-between">
					<span class="text-xs">CLS</span>
					<div class="flex items-center gap-2">
						<span class="text-xs">{$webVitals.cls.toFixed(3)}</span>
						<div
							class={cn(
								'w-2 h-2 rounded-full',
								getPerformanceColor(getPerformanceStatus($webVitals.cls, { good: 0.1, needs: 0.25 }))
							)}
						></div>
					</div>
				</div>
			{/if}

			{#if $webVitals.fcp > 0}
				<div class="flex items-center justify-between">
					<span class="text-xs">FCP</span>
					<div class="flex items-center gap-2">
						<span class="text-xs">{$webVitals.fcp}ms</span>
						<div
							class={cn(
								'w-2 h-2 rounded-full',
								getPerformanceColor(getPerformanceStatus($webVitals.fcp, { good: 1800, needs: 3000 }))
							)}
						></div>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	/* Glowing animation for terminal theme */
	.terminal-glow {
		animation: terminal-glow 2s ease-in-out infinite alternate;
	}

	@keyframes terminal-glow {
		from {
			box-shadow: 0 0 5px rgba(0, 255, 136, 0.2);
		}
		to {
			box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
		}
	}
</style>
