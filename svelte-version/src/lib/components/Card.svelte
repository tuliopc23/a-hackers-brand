<script lang="ts">
  import { cn } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'glass-subtle' | 'glass-heavy' | 'terminal';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    interactive?: boolean;
    class?: string;
    children?: any;
  }

  let {
    variant = 'default',
    blur = 'md',
    interactive = false,
    class: className = '',
    children,
    ...restProps
  }: Props = $props();

  const variants = {
    default: 'bg-white/5 border border-white/10',
    glass: 'glass',
    'glass-subtle': 'glass-subtle',
    'glass-heavy': 'glass-heavy',
    terminal: 'terminal'
  };

  const blurLevels = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  const baseClasses = 'rounded-brand-lg p-6 transition-all duration-moderate';
  const interactiveClasses = interactive ? 'glass-magnetic cursor-pointer hover:shadow-lg' : '';
  
  const combinedClasses = cn(
    baseClasses,
    variants[variant],
    variant.includes('glass') && blurLevels[blur],
    interactiveClasses,
    className
  );
</script>

{#if interactive}
<div 
  class={combinedClasses}
  role="button"
  tabindex="0"
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
{:else}
<div 
  class={combinedClasses}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
{/if}

<style>
  .glass-magnetic {
    transition: transform var(--duration-fast) var(--ease-spring);
  }
  
  .glass-magnetic:hover {
    transform: translateY(-2px) scale(1.02);
  }
  
  .glass-magnetic:active {
    transform: translateY(0) scale(1);
  }
</style>