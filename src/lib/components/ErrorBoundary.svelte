<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils.js';
	import { glassFade, liquidBlur } from '$lib/motion';
	import { Button } from './index.js';

	interface Props {
		fallback?: any;
		onError?: (error: Error, errorInfo?: any) => void;
		showDetails?: boolean;
		variant?: 'glass' | 'terminal' | 'minimal';
		animate?: boolean;
		retryable?: boolean;
		class?: string;
		children?: any;
	}

	const {
		fallback,
		onError,
		showDetails = false,
		variant = 'glass',
		animate = true,
		retryable = true,
		class: className = '',
		children
	}: Props = $props();

	let hasError = $state(false);
	let error: Error | null = $state(null);
	let errorInfo: any = $state(null);
	let retryCount = $state(0);
	let showFullError = $state(false);

	const maxRetries = 3;

	// Error boundary implementation
	function handleError(err: Error, info?: any) {
		hasError = true;
		error = err;
		errorInfo = info;

		// Call user-provided error handler
		onError?.(err, info);

		// Log error for debugging
		console.error('Component Error Boundary caught an error:', err);
		if (info) {
			console.error('Error info:', info);
		}
	}

	function retry() {
		if (retryCount < maxRetries) {
			hasError = false;
			error = null;
			errorInfo = null;
			retryCount++;
		}
	}

	function reset() {
		hasError = false;
		error = null;
		errorInfo = null;
		retryCount = 0;
		showFullError = false;
	}

	// Error boundary styles
	const variants = {
		glass: 'glass border border-red-500/30 bg-red-500/10',
		terminal: 'bg-terminal-bg border border-red-500 text-terminal-fg font-mono',
		minimal: 'bg-red-50 border border-red-200 text-red-900'
	};

	const containerClasses = cn('rounded-brand p-6 m-4', variants[variant], className);

	// Set up global error handlers for child components
	onMount(() => {
		// Listen for unhandled promise rejections
		const handleRejection = (event: PromiseRejectionEvent) => {
			handleError(new Error(`Unhandled promise rejection: ${event.reason}`));
			event.preventDefault();
		};

		// Listen for general errors
		const handleGlobalError = (event: ErrorEvent) => {
			handleError(new Error(event.message), {
				filename: event.filename,
				lineno: event.lineno,
				colno: event.colno
			});
		};

		window.addEventListener('unhandledrejection', handleRejection);
		window.addEventListener('error', handleGlobalError);

		return () => {
			window.removeEventListener('unhandledrejection', handleRejection);
			window.removeEventListener('error', handleGlobalError);
		};
	});

	// Format error for display
	function formatError(err: Error): string {
		return `${err.name}: ${err.message}`;
	}

	function getErrorStack(err: Error): string {
		return err.stack || 'No stack trace available';
	}

	function getRetryMessage(): string {
		if (retryCount === 0) return '';
		if (retryCount >= maxRetries) {
			return `Maximum retry attempts reached (${maxRetries})`;
		}
		return `Retry attempt ${retryCount} of ${maxRetries}`;
	}
</script>

{#if hasError}
	<div
		class={containerClasses}
		in:liquidBlur={animate ? { duration: 300, blur: 'sm' } : undefined}
		role="alert"
		aria-live="assertive"
	>
		{#if fallback}
			{@render fallback({ error, retry, reset, retryCount, maxRetries })}
		{:else}
			<div class="space-y-4">
				<!-- Error Icon and Title -->
				<div class="flex items-center gap-3">
					<div class="flex-shrink-0">
						<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-red-600">Something went wrong</h3>
						<p class="text-sm text-red-500/80">A component error occurred and was caught by the error boundary</p>
					</div>
				</div>

				<!-- Error Message -->
				{#if error}
					<div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
						<p class="font-mono text-sm text-red-400">
							{formatError(error)}
						</p>

						{#if showDetails && showFullError}
							<details class="mt-3">
								<summary class="cursor-pointer text-xs text-red-400/70 hover:text-red-400"> Stack Trace </summary>
								<pre class="mt-2 text-xs text-red-400/60 whitespace-pre-wrap overflow-auto max-h-40">{getErrorStack(
										error
									)}</pre>
							</details>
						{/if}
					</div>
				{/if}

				<!-- Retry Information -->
				{#if retryCount > 0}
					<div class="text-sm text-red-400/70">
						{getRetryMessage()}
					</div>
				{/if}

				<!-- Actions -->
				<div class="flex flex-wrap gap-3">
					{#if retryable && retryCount < maxRetries}
						<Button
							variant="glass"
							size="sm"
							onclick={retry}
							class="bg-red-500/20 border-red-500/40 hover:bg-red-500/30"
						>
							Try Again
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

					{#if showDetails}
						<Button
							variant="glass"
							size="sm"
							onclick={() => (showFullError = !showFullError)}
							class="bg-gray-500/20 border-gray-500/40 hover:bg-gray-500/30"
						>
							{showFullError ? 'Hide' : 'Show'} Details
						</Button>
					{/if}
				</div>

				<!-- Development Info -->
				{#if import.meta.env.DEV}
					<div class="border-t border-red-500/20 pt-4 mt-4">
						<p class="text-xs text-red-400/50">🛠️ Development mode: Check console for detailed error information</p>
					</div>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<!-- Render children normally -->
	{#if children}
		{@render children()}
	{/if}
{/if}

<style>
	:global(.error-boundary-fallback) {
		/* Global styles for error boundary fallbacks */
		min-height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Animation for error states */
	div[role='alert'] {
		animation: shake 0.5s ease-in-out;
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px);
		}
		75% {
			transform: translateX(5px);
		}
	}

	/* Dark mode improvements */
	@media (prefers-color-scheme: dark) {
		:global(.error-boundary-minimal) {
			background-color: rgba(127, 29, 29, 0.1);
			border-color: rgba(239, 68, 68, 0.3);
			color: rgb(252, 165, 165);
		}
	}
</style>
