<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, glassFade } from '../motion';
	import { sizeOf } from '../utils/bundle-size.js';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	interface Props extends HTMLTextareaAttributes {
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		rows?: number;
		cols?: number;
		resize?: 'none' | 'both' | 'horizontal' | 'vertical';
		autoResize?: boolean;
		maxHeight?: number;
		minHeight?: number;
		animate?: boolean;
		reduceMotion?: boolean;
		class?: string;
		onValueChange?: (value: string) => void;
	}

	let {
		value = '',
		placeholder = '',
		disabled = false,
		size = 'md',
		variant = 'glass',
		blur = 'md',
		rows = 4,
		cols,
		resize = 'vertical',
		autoResize = false,
		maxHeight = 300,
		minHeight = 80,
		animate = true,
		reduceMotion = false,
		class: className = '',
		onValueChange,
		...restProps
	}: Props = $props();

	let textareaElement = $state<HTMLTextAreaElement>();
	let isFocused = $state(false);

	const sizes = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-4 py-3 text-sm',
		lg: 'px-5 py-4 text-base'
	};

	const variants = {
		default: 'bg-white/5 border border-white/10 text-white placeholder-white/50',
		glass: 'glass-subtle border border-white/20 text-white placeholder-white/40',
		terminal: 'terminal text-green-300 placeholder-green-300/50'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const resizeClasses = {
		none: 'resize-none',
		both: 'resize',
		horizontal: 'resize-x',
		vertical: 'resize-y'
	};

	const textareaClasses = $derived(
		cn(
			'w-full rounded-brand-md transition-all duration-200',
			'focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50',
			'placeholder:transition-colors placeholder:duration-200',
			sizes[size],
			variants[variant],
			variant === 'glass' && blurLevels[blur],
			resizeClasses[resize],
			disabled && 'opacity-50 cursor-not-allowed',
			isFocused && variant === 'glass' && 'glass-medium',
			className
		)
	);

	function handleInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		value = target.value;
		onValueChange?.(target.value);

		if (autoResize) {
			adjustHeight();
		}
	}

	function handleFocus() {
		isFocused = true;
	}

	function handleBlur() {
		isFocused = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		// Allow Ctrl/Cmd + A for select all
		if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
			return;
		}

		// Allow Ctrl/Cmd + Z for undo
		if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
			return;
		}

		// Allow Ctrl/Cmd + Y for redo
		if ((event.ctrlKey || event.metaKey) && event.key === 'y') {
			return;
		}

		// Tab behavior - allow default unless we want custom handling
		if (event.key === 'Tab') {
			// Optional: Insert tab character instead of focusing next element
			// Uncomment if you want tab insertion:
			// event.preventDefault();
			// insertAtCursor('\t');
		}

		// Allow Escape to blur the textarea
		if (event.key === 'Escape') {
			textareaElement.blur();
		}
	}

	function adjustHeight() {
		if (!textareaElement || !autoResize) return;

		// Reset height to auto to get the correct scrollHeight
		textareaElement.style.height = 'auto';

		// Calculate new height based on content
		const scrollHeight = textareaElement.scrollHeight;
		const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);

		textareaElement.style.height = `${newHeight}px`;
	}

	function insertAtCursor(text: string) {
		if (!textareaElement) return;

		const start = textareaElement.selectionStart;
		const end = textareaElement.selectionEnd;
		const newValue = value.slice(0, start) + text + value.slice(end);

		value = newValue;
		onValueChange?.(newValue);

		// Restore cursor position
		setTimeout(() => {
			textareaElement.selectionStart = textareaElement.selectionEnd = start + text.length;
			textareaElement.focus();
		}, 0);
	}

	$effect(() => {
		if (autoResize && textareaElement) {
			adjustHeight();
		}
	});

	// Track bundle size
	$effect(() => {
		sizeOf('Textarea', 'medium');
	});
</script>

<textarea
	bind:this={textareaElement}
	bind:value
	class={textareaClasses}
	{placeholder}
	{disabled}
	{rows}
	{cols}
	style:min-height={autoResize ? `${minHeight}px` : undefined}
	style:max-height={autoResize ? `${maxHeight}px` : undefined}
	aria-label={restProps['aria-label'] || placeholder}
	use:liquidBlur={animate && !reduceMotion && isFocused ? { blur: blur, opacity: 'medium' } : undefined}
	oninput={handleInput}
	onfocus={handleFocus}
	onblur={handleBlur}
	onkeydown={handleKeydown}
	{...restProps}
></textarea>

<style>
	textarea {
		field-sizing: content;
		font-family: inherit;
		line-height: 1.5;
	}

	textarea:focus {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		textarea {
			transition: none;
			animation: none;
		}
	}
</style>
