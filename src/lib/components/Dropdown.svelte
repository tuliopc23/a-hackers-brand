<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { glassFade, jellyHover } from '$lib/motion';
	import { ChevronDown } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';

	interface DropdownItem {
		label: string;
		value: string;
		icon?: any;
		disabled?: boolean;
		divider?: boolean;
	}

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onselect'> {
		items: DropdownItem[];
		trigger?: string;
		value?: string;
		variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
		size?: 'sm' | 'md' | 'lg';
		position?: 'bottom' | 'top' | 'left' | 'right';
		animated?: boolean;
		glow?: boolean;
		jelly?: boolean;
		class?: string;
		triggerClass?: string;
		menuClass?: string;
		onselect?: (value: string) => void;
	}

	const {
		items = [],
		trigger = 'Select',
		value,
		variant = 'glass',
		size = 'md',
		position = 'bottom',
		animated = true,
		glow = false,
		jelly = true,
		class: className = '',
		triggerClass = '',
		menuClass = '',
		onselect,
		...restProps
	}: Props = $props();

	let open = $state(false);
	let dropdownRef = $state<HTMLDivElement>();
	let menuRef = $state<HTMLDivElement>();
	let menuPosition = $state({ x: 0, y: 0 });

	const variants = {
		glass: {
			trigger: 'bg-white/10 border-white/20 hover:bg-white/20 text-white',
			menu: 'bg-black/80 border-white/20',
			item: 'hover:bg-white/10 text-white/90',
			active: 'bg-white/20',
			glow: 'shadow-[0_0_20px_rgba(255,255,255,0.3)]'
		},
		terminal: {
			trigger: 'bg-gray-900/90 border-green-400/40 hover:border-green-400 text-green-400',
			menu: 'bg-gray-900/95 border-green-400/40',
			item: 'hover:bg-green-400/10 text-green-400',
			active: 'bg-green-400/20',
			glow: 'shadow-[0_0_15px_rgba(74,222,128,0.6)]'
		},
		liquid: {
			trigger:
				'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/30 hover:from-blue-500/30 hover:to-purple-500/30 text-white',
			menu: 'bg-gradient-to-br from-blue-900/90 to-purple-900/90 border-white/30',
			item: 'hover:bg-white/10 text-white',
			active: 'bg-white/20',
			glow: 'shadow-[0_0_25px_rgba(139,92,246,0.5)]'
		},
		neon: {
			trigger: 'bg-black border-pink-500/50 hover:border-pink-500 text-pink-400',
			menu: 'bg-black/95 border-pink-500/50',
			item: 'hover:bg-pink-500/20 text-pink-300',
			active: 'bg-pink-500/30',
			glow: 'shadow-[0_0_20px_rgba(236,72,153,0.7)]'
		}
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-5 py-2.5 text-lg'
	};

	const calculatePosition = () => {
		if (!dropdownRef || !menuRef) return;

		const triggerRect = dropdownRef.getBoundingClientRect();
		const menuRect = menuRef.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		let x = 0;
		let y = 0;

		switch (position) {
			case 'bottom':
				x = 0;
				y = triggerRect.height + 4;
				break;
			case 'top':
				x = 0;
				y = -menuRect.height - 4;
				break;
			case 'left':
				x = -menuRect.width - 4;
				y = 0;
				break;
			case 'right':
				x = triggerRect.width + 4;
				y = 0;
				break;
		}

		// Keep menu within viewport
		const absoluteX = triggerRect.left + x;
		const absoluteY = triggerRect.top + y + triggerRect.height;

		if (absoluteX + menuRect.width > viewportWidth) {
			x = viewportWidth - absoluteX - menuRect.width - 8;
		}
		if (absoluteY + menuRect.height > viewportHeight) {
			y = -menuRect.height - 4;
		}

		menuPosition = { x, y };
	};

	const toggleDropdown = () => {
		open = !open;
		if (open) {
			requestAnimationFrame(calculatePosition);
		}
	};

	const handleSelect = (item: DropdownItem) => {
		if (item.disabled || item.divider) return;
		onselect?.(item.value);
		open = false;
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			open = false;
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			open = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeyDown);
		};
	});

	const currentVariant = variants[variant];
	const selectedItem = items?.find((item) => item.value === value);
</script>

<div bind:this={dropdownRef} class={cn('relative inline-block', className)} {...restProps}>
	<button
		type="button"
		onclick={toggleDropdown}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleDropdown();
			}
			if (e.key === 'ArrowDown' && !open) {
				e.preventDefault();
				toggleDropdown();
			}
		}}
		class={cn(
			'flex items-center justify-between gap-2 rounded-xl border backdrop-blur-xl transition-all duration-200',
			sizes[size],
			currentVariant.trigger,
			glow && open && currentVariant.glow,
			'focus:outline-none focus:ring-2 focus:ring-white/20',
			triggerClass
		)}
		use:jellyHover={{
			enabled: jelly,
			scale: 1.02,
			duration: 200,
			borderRadius: '12px'
		}}
		aria-expanded={open}
		aria-haspopup="listbox"
		aria-label={selectedItem?.label || trigger}
	>
		<span>{selectedItem?.label || trigger}</span>
		<ChevronDown size={16} class={cn('transition-transform duration-200', open && 'rotate-180')} />
	</button>

	{#if open}
		<div
			bind:this={menuRef}
			class={cn(
				'absolute z-50 min-w-[200px] rounded-xl border backdrop-blur-xl overflow-hidden',
				currentVariant.menu,
				glow && currentVariant.glow,
				animated && 'transform-gpu will-change-transform',
				menuClass
			)}
			style="left: {menuPosition.x}px; top: {menuPosition.y}px;"
			transition:glassFade={{ duration: animated ? 200 : 0 }}
			role="listbox"
			aria-label="Options"
		>
			<div class="py-1">
				{#each items || [] as item (item.value || item.label)}
					{#if item.divider}
						<div class="h-px bg-white/10 my-1"></div>
					{:else}
						<button
							type="button"
							onclick={() => handleSelect(item)}
							onkeydown={(e) => e.key === 'Enter' && handleSelect(item)}
							disabled={item.disabled}
							role="option"
							aria-selected={item.value === value}
							aria-disabled={item.disabled}
							class={cn(
								'flex items-center gap-3 w-full px-4 py-2 transition-all duration-200',
								currentVariant.item,
								item.value === value && currentVariant.active,
								item.disabled && 'opacity-50 cursor-not-allowed',
								!item.disabled && 'cursor-pointer'
							)}
						>
							{#if item.icon}
								<item.icon size={16} />
							{/if}
							<span class="flex-1 text-left">{item.label}</span>
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>
