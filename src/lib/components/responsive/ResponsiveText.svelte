<script lang="ts">
	import { textVariants, type TextVariantProps } from '$lib/utils/responsive';

	interface Props extends TextVariantProps {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
		text?: string;
	}

	const {
		size = 'base',
		weight = 'normal',
		align = 'left',
		family = 'sans',
		as = 'p',
		class: className = '',
		text = '',
		children,
		...restProps
	}: Props = $props();

	const textClasses = $derived(textVariants({ size, weight, align, family, className }));
</script>

<svelte:element 
	this={as} 
	class={textClasses}
	{...restProps}
>
	{#if text}
		{text}
	{:else}
		{@render children?.()}
	{/if}
</svelte:element>