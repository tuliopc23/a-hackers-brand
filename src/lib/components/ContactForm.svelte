<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface FormData {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	interface Props extends HTMLAttributes<HTMLFormElement> {
		onSubmit?: (data: FormData) => void | Promise<void>;
		loading?: boolean;
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	const {
		onSubmit,
		loading = false,
		variant = 'glass',
		animate = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	// Form state
	let formData = $state<FormData>({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let errors = $state<Partial<FormData>>({});
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300'
	};

	const inputVariants = {
		default: 'bg-neutral-800 border-neutral-600 text-neutral-100 focus:border-neutral-500',
		glass: 'bg-white/10 border-white/20 text-white focus:border-white/40 backdrop-blur-sm',
		terminal: 'bg-terminal-bg border-terminal-green/30 text-terminal-green focus:border-terminal-green/60 font-mono',
		minimal: 'bg-transparent border-neutral-600 text-neutral-300 focus:border-neutral-500'
	};

	const baseClasses = 'rounded-2xl p-6 transition-all duration-300 will-change-transform';
	const combinedClasses = cn(baseClasses, variants[variant], className);

	const validateForm = (): boolean => {
		const newErrors: Partial<FormData> = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters long';
		}

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		if (!validateForm() || isSubmitting || loading) {
			return;
		}

		isSubmitting = true;
		submitStatus = 'idle';

		try {
			await onSubmit?.(formData);
			submitStatus = 'success';

			// Reset form on success
			formData = {
				name: '',
				email: '',
				subject: '',
				message: ''
			};
			errors = {};
		} catch (error) {
			console.error('Form submission error:', error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	};

	const inputBaseClasses =
		'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50';
</script>

{#if shouldAnimate}
	<form
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.005 : 1.01,
			borderRadius: '24px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.02 : 0.05,
			scale: prefersReducedMotion ? 1.002 : 1.005
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		onsubmit={handleSubmit}
		{...restProps}
	>
		<div class="space-y-6">
			<div class="space-y-2">
				<h2 class="text-2xl font-bold">Get In Touch</h2>
				<p class="opacity-80">Send me a message and I'll get back to you as soon as possible.</p>
			</div>

			<!-- Status Messages -->
			{#if submitStatus === 'success'}
				<div class="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						<span>Message sent successfully! I'll get back to you soon.</span>
					</div>
				</div>
			{/if}

			{#if submitStatus === 'error'}
				<div class="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
						<span>Failed to send message. Please try again.</span>
					</div>
				</div>
			{/if}

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Name -->
				<div class="space-y-2">
					<label for="name" class="block text-sm font-medium">Name *</label>
					<input
						id="name"
						type="text"
						bind:value={formData.name}
						class={cn(inputBaseClasses, inputVariants[variant])}
						placeholder="Your name"
						disabled={isSubmitting || loading}
						required
					/>
					{#if errors.name}
						<p class="text-sm text-red-400">{errors.name}</p>
					{/if}
				</div>

				<!-- Email -->
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium">Email *</label>
					<input
						id="email"
						type="email"
						bind:value={formData.email}
						class={cn(inputBaseClasses, inputVariants[variant])}
						placeholder="your.email@example.com"
						disabled={isSubmitting || loading}
						required
					/>
					{#if errors.email}
						<p class="text-sm text-red-400">{errors.email}</p>
					{/if}
				</div>
			</div>

			<!-- Subject -->
			<div class="space-y-2">
				<label for="subject" class="block text-sm font-medium">Subject *</label>
				<input
					id="subject"
					type="text"
					bind:value={formData.subject}
					class={cn(inputBaseClasses, inputVariants[variant])}
					placeholder="What's this about?"
					disabled={isSubmitting || loading}
					required
				/>
				{#if errors.subject}
					<p class="text-sm text-red-400">{errors.subject}</p>
				{/if}
			</div>

			<!-- Message -->
			<div class="space-y-2">
				<label for="message" class="block text-sm font-medium">Message *</label>
				<textarea
					id="message"
					bind:value={formData.message}
					rows="5"
					class={cn(inputBaseClasses, inputVariants[variant], 'resize-none')}
					placeholder="Tell me about your project, question, or just say hello!"
					disabled={isSubmitting || loading}
					required
				></textarea>
				{#if errors.message}
					<p class="text-sm text-red-400">{errors.message}</p>
				{/if}
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isSubmitting || loading}
				class={cn(
					'w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50',
					variant === 'terminal'
						? 'bg-terminal-green/20 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/30 disabled:opacity-50'
						: 'bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed'
				)}
			>
				{#if isSubmitting || loading}
					<div class="flex items-center justify-center gap-2">
						<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
						<span>Sending...</span>
					</div>
				{:else}
					Send Message
				{/if}
			</button>

			<!-- Children content -->
			{#if children}
				<div class="mt-6 pt-6 border-t border-current/20">
					{@render children()}
				</div>
			{/if}
		</div>
	</form>
{:else}
	<form class={combinedClasses} onsubmit={handleSubmit} {...restProps}>
		<div class="space-y-6">
			<div class="space-y-2">
				<h2 class="text-2xl font-bold">Get In Touch</h2>
				<p class="opacity-80">Send me a message and I'll get back to you as soon as possible.</p>
			</div>

			<!-- Status Messages -->
			{#if submitStatus === 'success'}
				<div class="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						<span>Message sent successfully! I'll get back to you soon.</span>
					</div>
				</div>
			{/if}

			{#if submitStatus === 'error'}
				<div class="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400">
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
						<span>Failed to send message. Please try again.</span>
					</div>
				</div>
			{/if}

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Name -->
				<div class="space-y-2">
					<label for="name" class="block text-sm font-medium">Name *</label>
					<input
						id="name"
						type="text"
						bind:value={formData.name}
						class={cn(inputBaseClasses, inputVariants[variant])}
						placeholder="Your name"
						disabled={isSubmitting || loading}
						required
					/>
					{#if errors.name}
						<p class="text-sm text-red-400">{errors.name}</p>
					{/if}
				</div>

				<!-- Email -->
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium">Email *</label>
					<input
						id="email"
						type="email"
						bind:value={formData.email}
						class={cn(inputBaseClasses, inputVariants[variant])}
						placeholder="your.email@example.com"
						disabled={isSubmitting || loading}
						required
					/>
					{#if errors.email}
						<p class="text-sm text-red-400">{errors.email}</p>
					{/if}
				</div>
			</div>

			<!-- Subject -->
			<div class="space-y-2">
				<label for="subject" class="block text-sm font-medium">Subject *</label>
				<input
					id="subject"
					type="text"
					bind:value={formData.subject}
					class={cn(inputBaseClasses, inputVariants[variant])}
					placeholder="What's this about?"
					disabled={isSubmitting || loading}
					required
				/>
				{#if errors.subject}
					<p class="text-sm text-red-400">{errors.subject}</p>
				{/if}
			</div>

			<!-- Message -->
			<div class="space-y-2">
				<label for="message" class="block text-sm font-medium">Message *</label>
				<textarea
					id="message"
					bind:value={formData.message}
					rows="5"
					class={cn(inputBaseClasses, inputVariants[variant], 'resize-none')}
					placeholder="Tell me about your project, question, or just say hello!"
					disabled={isSubmitting || loading}
					required
				></textarea>
				{#if errors.message}
					<p class="text-sm text-red-400">{errors.message}</p>
				{/if}
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isSubmitting || loading}
				class={cn(
					'w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50',
					variant === 'terminal'
						? 'bg-terminal-green/20 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/30 disabled:opacity-50'
						: 'bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed'
				)}
			>
				{#if isSubmitting || loading}
					<div class="flex items-center justify-center gap-2">
						<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
						<span>Sending...</span>
					</div>
				{:else}
					Send Message
				{/if}
			</button>

			<!-- Children content -->
			{#if children}
				<div class="mt-6 pt-6 border-t border-current/20">
					{@render children()}
				</div>
			{/if}
		</div>
	</form>
{/if}

<style>
	form {
		will-change: transform, border-radius, filter;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Terminal variant glow effects */
	form:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	form:global([class*='terminal']):hover {
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.2),
			inset 0 0 20px rgba(48, 209, 88, 0.05);
	}

	/* Glass morphism enhancements */
	form:global(.glass-medium) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	/* Enhanced focus states for inputs */
	input:focus,
	textarea:focus {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	/* Button hover effects */
	button:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Terminal input styling */
	input:global([class*='terminal']),
	textarea:global([class*='terminal']) {
		text-shadow: 0 0 3px currentColor;
	}

	/* Smooth transitions for all interactive elements */
	input,
	textarea,
	button {
		transition: all 200ms ease-out;
	}
</style>
