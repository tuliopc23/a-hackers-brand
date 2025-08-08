<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '../utils.js';
	import { glassFade } from '../motion';
	import { Button } from './index.js';

	interface Props {
		promise?: Promise<any>;
		fallback?: any;
		loading?: any;
		onError?: (error: Error) => void;
		onRetry?: () => Promise<any>;
		variant?: 'glass' | 'terminal' | 'minimal';
		animate?: boolean;
		timeout?: number;
		maxRetries?: number;
		class?: string;
		children?: any;
	}

	const {
		promise,
		fallback,
		loading,
		onError,
		onRetry,
		variant = 'glass',
		animate = true,
		timeout = 10000, // 10 seconds
		maxRetries = 3,
		class: className = '',
		children
	}: Props = $props();

	let state = $state<'idle' | 'loading' | 'success' | 'error' | 'timeout'>('idle');
	let error: Error | null = $state(null);
	let result: any = $state(null);
	let retryCount = $state(0);
	let timeoutId: NodeJS.Timeout | null = null;

	// Handle promise state changes
	async function handlePromise(prom: Promise<any>) {
		if (!prom) return;

		state = 'loading';
		error = null;
		result = null;

		// Set timeout
		if (timeout > 0) {
			timeoutId = setTimeout(() => {
				if (state === 'loading') {
					state = 'timeout';
					error = new Error(`Operation timed out after ${timeout}ms`);
					onError?.(error);
				}
			}, timeout);
		}

		try {
			result = await prom;
			state = 'success';
		} catch (err) {
			error = err instanceof Error ? err : new Error(String(err));
			state = 'error';
			onError?.(error);
		} finally {
			if (timeoutId) {
				clearTimeout(timeoutId);
				timeoutId = null;
			}
		}
	}

	// Retry function
	async function retry() {
		if (retryCount >= maxRetries) return;

		retryCount++;

		if (onRetry) {
			const retryPromise = onRetry();
			await handlePromise(retryPromise);
		} else if (promise) {
			await handlePromise(promise);
		}
	}

	// Reset function
	function reset() {
		state = 'idle';
		error = null;
		result = null;
		retryCount = 0;
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	}

	// Watch for promise changes
	$effect(() => {
		if (promise) {
			handlePromise(promise);
		}
	});

	// Cleanup on unmount
	onMount(() => {
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	});

	// Error boundary styles
	const variants = {
		glass: 'glass border border-red-500/30 bg-red-500/10',
		terminal: 'bg-terminal-bg border border-red-500 text-terminal-fg font-mono',
		minimal: 'bg-red-50 border border-red-200 text-red-900'
	};

	const containerClasses = cn('rounded-brand p-6 m-4', variants[variant], className);

	function getErrorIcon(errorType: string) {
		switch (errorType) {
			case 'timeout':
				return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`;
			case 'network':
				return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>`;
			default:
				return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`;
		}
	}

	function getErrorType(err: Error): string {
		if (err.message.includes('timeout')) return 'timeout';
		if (err.message.includes('fetch') || err.message.includes('network')) return 'network';
		return 'general';
	}

	function getErrorMessage(err: Error): string {
		const errorType = getErrorType(err);
		switch (errorType) {
			case 'timeout':
				return 'The operation took too long to complete';
			case 'network':
				return 'Network connection failed';
			default:
				return err.message || 'An unexpected error occurred';
		}
	}
</script>

{#if state === 'loading'}
	{#if loading}
		{@render loading()}
	{:else}
		<div class="flex items-center justify-center p-8" in:glassFade={animate ? { duration: 200 } : undefined}>
			<div class="flex items-center gap-3">
				<div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
				<span class="text-white/70">Loading...</span>
			</div>
		</div>
	{/if}
{:else if state === 'error' || state === 'timeout'}
	{#if fallback}
		{@render fallback({ error, retry, reset, retryCount, maxRetries, state })}
	{:else}
		<div
			class={containerClasses}
			in:glassFade={animate ? { duration: 300 } : undefined}
			role="alert"
			aria-live="assertive"
		>
			<div class="space-y-4">
				<!-- Error Icon and Title -->
				<div class="flex items-center gap-3">
					<div class="flex-shrink-0">
						<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{@html getErrorIcon(getErrorType(error!))}
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-red-600">
							{state === 'timeout' ? 'Operation Timeout' : 'Request Failed'}
						</h3>
						<p class="text-sm text-red-500/80">
							{error ? getErrorMessage(error) : 'An error occurred while processing your request'}
						</p>
					</div>
				</div>

				<!-- Error Details -->
				{#if error && import.meta.env.DEV}
					<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
						<p class="font-mono text-sm text-red-400">
							{error.message}
						</p>
					</div>
				{/if}

				<!-- Retry Information -->
				{#if retryCount > 0}
					<div class="text-sm text-red-400/70">
						Retry attempt {retryCount} of {maxRetries}
					</div>
				{/if}

				<!-- Actions -->
				<div class="flex flex-wrap gap-3">
					{#if retryCount < maxRetries && (onRetry || promise)}
						<Button
							variant="glass"
							size="sm"
							onclick={retry}
							class="bg-red-500/20 border-red-500/40 hover:bg-red-500/30"
						>
							{state === 'timeout' ? 'Try Again' : 'Retry'}
						</Button>
					{/if}

					<Button
						variant="glass"
						size="sm"
						onclick={reset}
						class="bg-blue-500/20 border-blue-500/40 hover:bg-blue-500/30"
					>
						Reset
					</Button>
				</div>

				<!-- Help Text -->
				<div class="text-xs text-red-400/50">
					{#if state === 'timeout'}
						The operation exceeded the {timeout / 1000}s timeout limit.
					{:else if getErrorType(error!) === 'network'}
						Check your internet connection and try again.
					{:else}
						If the problem persists, please contact support.
					{/if}
				</div>
			</div>
		</div>
	{/if}
{:else if state === 'success'}
	<!-- Render children with result -->
	{#if children}
		{@render children({ result })}
	{/if}
{:else}
	<!-- Idle state - render children normally -->
	{#if children}
		{@render children()}
	{/if}
{/if}

<style>
	/* Loading spinner animation */
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.animate-spin {
		animation: spin 1s linear infinite;
	}

	/* Pulse animation for loading states */
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	/* Error state animation */
	div[role='alert'] {
		animation: slideInUp 0.3s ease-out;
	}

	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
