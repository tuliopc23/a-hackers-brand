<script lang="ts">
	import { cn } from '../utils.js';
	import { glassFade } from '../motion';

	interface ValidationError {
		field: string;
		message: string;
		code?: string;
	}

	interface Props {
		errors?: ValidationError[];
		showSummary?: boolean;
		variant?: 'glass' | 'terminal' | 'minimal';
		animate?: boolean;
		dismissible?: boolean;
		onDismiss?: () => void;
		class?: string;
		children?: any;
	}

	const {
		errors = [],
		showSummary = true,
		variant = 'glass',
		animate = true,
		dismissible = false,
		onDismiss,
		class: className = '',
		children
	}: Props = $props();

	let dismissed = $state(false);

	const hasErrors = $derived(errors.length > 0 && !dismissed);

	// Group errors by field
	const errorsByField = $derived(
		errors.reduce(
			(acc, error) => {
				if (!acc[error.field]) {
					acc[error.field] = [];
				}
				acc[error.field].push(error);
				return acc;
			},
			{} as Record<string, ValidationError[]>
		)
	);

	// Error boundary styles
	const variants = {
		glass: 'glass border border-red-500/30 bg-red-500/10',
		terminal: 'bg-terminal-bg border border-red-500 text-terminal-fg font-mono',
		minimal: 'bg-red-50 border border-red-200 text-red-900'
	};

	const containerClasses = cn('rounded-brand p-4 mb-4', variants[variant], className);

	function dismiss() {
		dismissed = true;
		onDismiss?.();
	}

	function getFieldDisplayName(field: string): string {
		// Convert camelCase or snake_case to Title Case
		return field
			.replace(/([A-Z])/g, ' $1')
			.replace(/_/g, ' ')
			.replace(/^\w/, (c) => c.toUpperCase())
			.trim();
	}

	function getErrorIconPath(code?: string): string {
		switch (code) {
			case 'required':
				return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 14.5c-.77.833.192 2.5 1.732 2.5z';
			case 'invalid':
				return 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z';
			case 'length':
				return 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z';
			default:
				return 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
		}
	}
</script>

{#if hasErrors && showSummary}
	<div
		class={containerClasses}
		in:glassFade={animate ? { duration: 300, direction: 'down' } : undefined}
		role="alert"
		aria-live="polite"
	>
		<div class="flex items-start gap-3">
			<!-- Error Icon -->
			<div class="flex-shrink-0 mt-0.5">
				<svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</div>

			<div class="flex-1 min-w-0">
				<!-- Error Title -->
				<h3 class="text-sm font-semibold text-red-600 mb-2">
					Please correct the following {errors.length === 1 ? 'error' : 'errors'}:
				</h3>

				<!-- Error List -->
				<ul class="space-y-2">
					{#each Object.entries(errorsByField) as [field, fieldErrors] (field)}
						<li class="flex items-start gap-2">
							<div class="flex-shrink-0 mt-1">
								<svg class="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={getErrorIconPath(fieldErrors[0]?.code)}></path>
								</svg>
							</div>
							<div class="min-w-0">
								<span class="text-sm font-medium text-red-600">
									{getFieldDisplayName(field)}:
								</span>
								<ul class="mt-1 space-y-1">
								{#each fieldErrors as error, index (error.code ? `${field}-${error.code}-${index}` : `${field}-${index}`)}
										<li class="text-sm text-red-500">
											{error.message}
										</li>
									{/each}
								</ul>
							</div>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Dismiss Button -->
			{#if dismissible}
				<button
					onclick={dismiss}
					class="flex-shrink-0 p-1 rounded-md text-red-400 hover:text-red-600 hover:bg-red-500/10 transition-colors"
					aria-label="Dismiss errors"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			{/if}
		</div>
	</div>
{/if}

<!-- Render children (form fields) -->
{#if children}
	{@render children({ errors: errorsByField, hasErrors })}
{/if}

<!-- Individual field error displays -->
{#if hasErrors && !showSummary}
	{#each Object.entries(errorsByField) as [field, fieldErrors] (field)}
		<div class="mt-1" id="{field}-errors">
			{#each fieldErrors as error, index (error.code ? `${field}-${error.code}-${index}` : `${field}-${index}`)}
				<p
					class="text-sm text-red-500 flex items-center gap-1"
					in:glassFade={animate ? { duration: 200, direction: 'up', distance: 5 } : undefined}
				>
									<svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={getErrorIconPath(error.code)}></path>
									</svg>
					{error.message}
				</p>
			{/each}
		</div>
	{/each}
{/if}

<style>
	/* Focus ring for dismiss button */
	button:focus {
		outline: 2px solid rgba(239, 68, 68, 0.3);
		outline-offset: 2px;
	}

	/* Error animation */
	div[role='alert'] {
		animation: slideDown 0.3s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Individual field error animations */
	p.text-red-500 {
		animation: fadeInScale 0.2s ease-out;
	}

	@keyframes fadeInScale {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Responsive improvements */
	@media (max-width: 640px) {
		.space-y-2 > * + * {
			margin-top: 0.75rem;
		}
	}
</style>
