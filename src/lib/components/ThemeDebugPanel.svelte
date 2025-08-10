<script lang="ts">
	import { Button, Badge, GlassCard } from '$lib/components';
	import { theme, contrastMode, ThemeErrorReporter } from '$lib/stores/theme.js';
	import type { ThemeError } from '$lib/stores/theme.js';
	import { ThemeMonitor, type ThemeHealthCheck } from '$lib/utils/theme-error-handler.js';
	import { onMount } from 'svelte';

	interface Props {
		showAdvancedProp?: boolean;
		class?: string;
	}

	const { showAdvancedProp = false, class: className = '' }: Props = $props();

	let errors = $state<ThemeError[]>([]);
	let healthCheck = $state<ThemeHealthCheck | null>(null);
	let troubleshootingReport = $state<string>('');
	let isVisible = $state<boolean>(false);
	let showAdvanced = $state<boolean>(showAdvancedProp);

	onMount(() => {
		// Load initial data
		refreshData();

		// Set up real-time error monitoring
		const cleanup = ThemeMonitor.watchErrors((error) => {
			refreshData();
		});

		return cleanup;
	});

	function refreshData() {
		errors = ThemeErrorReporter.getRecentErrors();
		healthCheck = ThemeMonitor.healthCheck();
		troubleshootingReport = ThemeMonitor.troubleshoot();
	}

	function clearErrors() {
		ThemeErrorReporter.clearErrors();
		refreshData();
	}

	function triggerTestError() {
		// Trigger a test error for demonstration
		try {
			throw new Error('Test error for debugging');
		} catch (error) {
			ThemeErrorReporter.report('TEST_ERROR', 'This is a test error for debugging purposes', {
				source: 'debug-panel',
				timestamp: Date.now()
			});
			refreshData();
		}
	}

	function resetSystem() {
		const success = ThemeMonitor.reset();
		if (success) {
			refreshData();
			// Refresh the page to apply changes
			window.location.reload();
		}
	}

	function downloadReport() {
		const blob = new Blob([troubleshootingReport], { type: 'text/markdown' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `theme-troubleshooting-${Date.now()}.md`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	const getErrorSeverity = (code: string) => {
		if (code.includes('FAILED') || code.includes('ERROR')) return 'error';
		if (code.includes('INVALID') || code.includes('UNAVAILABLE')) return 'warning';
		return 'secondary';
	};

	const formatTimestamp = (timestamp: number) => {
		return new Date(timestamp).toLocaleTimeString();
	};
</script>

<!-- Debug Panel Toggle -->
{#if !isVisible}
	<Button
		variant="ghost"
		size="sm"
		onclick={() => (isVisible = true)}
		class="fixed bottom-4 right-4 z-50 opacity-50 hover:opacity-100 {className}"
	>
		🔧 Debug
	</Button>
{/if}

<!-- Debug Panel -->
{#if isVisible}
	<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
		<GlassCard class="w-full max-w-4xl max-h-[90vh] overflow-auto">
			<div class="p-6">
				<!-- Header -->
				<div class="flex items-center justify-between mb-6">
					<h2 class="text-2xl font-bold">Theme System Debug Panel</h2>
					<Button variant="ghost" size="sm" onclick={() => (isVisible = false)}>✕</Button>
				</div>

				<!-- System Health Overview -->
				{#if healthCheck}
					<div class="mb-6">
						<h3 class="text-lg font-semibold mb-3">System Health</h3>
						<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
							<div class="text-center">
								<div class="text-2xl mb-1">
									{healthCheck.isStorageAvailable ? '✅' : '❌'}
								</div>
								<div class="text-sm text-gray-400">localStorage</div>
							</div>
							<div class="text-center">
								<div class="text-2xl mb-1">
									{healthCheck.isMediaQuerySupported ? '✅' : '❌'}
								</div>
								<div class="text-sm text-gray-400">Media Queries</div>
							</div>
							<div class="text-center">
								<div class="text-2xl mb-1">
									{healthCheck.hasValidThemeConfig ? '✅' : '❌'}
								</div>
								<div class="text-sm text-gray-400">Theme Config</div>
							</div>
						</div>
					</div>
				{/if}

				<!-- Current State -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold mb-3">Current State</h3>
					<div class="grid grid-cols-2 gap-4 text-sm">
						<div>
							<span class="text-gray-400">User Theme:</span>
							<Badge variant="secondary" class="ml-2">auto</Badge>
						</div>
						<div>
							<span class="text-gray-400">Storage Available:</span>
							<Badge variant={healthCheck?.isStorageAvailable ? 'success' : 'error'} class="ml-2">
								{healthCheck?.isStorageAvailable ? 'Yes' : 'No'}
							</Badge>
						</div>
					</div>
				</div>

				<!-- Recent Errors -->
				<div class="mb-6">
					<div class="flex items-center justify-between mb-3">
						<h3 class="text-lg font-semibold">Recent Errors ({errors.length})</h3>
						<div class="space-x-2">
							<Button variant="outline" size="sm" onclick={triggerTestError}>Test Error</Button>
							<Button variant="outline" size="sm" onclick={clearErrors}>Clear</Button>
						</div>
					</div>

					{#if errors.length === 0}
						<div class="text-center py-4 text-gray-400">No errors recorded</div>
					{:else}
						<div class="space-y-2 max-h-48 overflow-auto">
							{#each errors as error (error.timestamp)}
								<div class="border border-white/10 rounded p-3">
									<div class="flex items-center justify-between mb-2">
										<Badge variant={getErrorSeverity(error.code)}>
											{error.code}
										</Badge>
										<span class="text-xs text-gray-400">
											{formatTimestamp(error.timestamp)}
										</span>
									</div>
									<div class="text-sm text-gray-300 mb-2">
										{error.message}
									</div>
									{#if error.context}
										<details class="text-xs text-gray-400">
											<summary class="cursor-pointer">Context</summary>
											<pre class="mt-1 whitespace-pre-wrap">{JSON.stringify(error.context, null, 2)}</pre>
										</details>
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Recommendations -->
				{#if healthCheck?.recommendations && healthCheck.recommendations.length > 0}
					<div class="mb-6">
						<h3 class="text-lg font-semibold mb-3">Recommendations</h3>
						<ul class="space-y-2">
							{#each healthCheck.recommendations as recommendation (recommendation)}
								<li class="flex items-start">
									<span class="text-yellow-400 mr-2">💡</span>
									<span class="text-sm text-gray-300">{recommendation}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Advanced Options -->
				{#if showAdvanced}
					<div class="mb-6">
						<h3 class="text-lg font-semibold mb-3">Advanced Tools</h3>
						<div class="space-x-2">
							<Button variant="outline" size="sm" onclick={downloadReport}>📄 Download Report</Button>
							<Button variant="outline" size="sm" onclick={resetSystem}>🔄 Reset System</Button>
							<Button variant="outline" size="sm" onclick={refreshData}>🔄 Refresh Data</Button>
						</div>
					</div>
				{/if}

				<!-- Actions -->
				<div class="flex justify-end space-x-2">
					<Button variant="outline" onclick={() => (isVisible = false)}>Close</Button>
					{#if !showAdvanced}
						<Button variant="secondary" onclick={() => (showAdvanced = true)}>Show Advanced</Button>
					{/if}
				</div>
			</div>
		</GlassCard>
	</div>
{/if}

<style>
	:global(.theme-debug-panel) {
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
	}
</style>
