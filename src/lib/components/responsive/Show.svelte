<script lang="ts">
	import { visibilityVariants, type VisibilityVariantProps, type Breakpoint } from '$lib/utils/responsive';

	interface Props {
		when?: Breakpoint;
		above?: Breakpoint;
		below?: Breakpoint;
		only?: Breakpoint;
		class?: string;
	}

	const { when, above, below, only, class: className = '', children, ...restProps }: Props = $props();

	const visibilityClasses = $derived(
		(() => {
			let classes = '';

			if (when) {
				classes += ` ${visibilityVariants({ show: when })}`;
			}

			if (above) {
				const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
				const index = breakpoints.indexOf(above);
				if (index !== -1) {
					classes += ` hidden ${above}:block`;
				}
			}

			if (below) {
				classes += ` block ${below}:hidden`;
			}

			if (only) {
				classes += ` ${visibilityVariants({ show: only })}`;
			}

			return `${classes} ${className}`.trim();
		})()
	);
</script>

{#if visibilityClasses}
	<div class={visibilityClasses} {...restProps}>
		{@render children?.()}
	</div>
{:else}
	{@render children?.()}
{/if}
