<script lang="ts">
  import { onMount } from 'svelte';
  
  /**
   * Component for safely rendering client-side only components (like WebGL)
   * This prevents SSR issues with components that depend on browser APIs
   */
  
  interface Props {
    /**
     * Optional fallback content to show during SSR/before mount
     * Should be a function that returns renderable content
     */
    fallback?: (() => any) | null;
    
    /**
     * Optional class to apply to the wrapper element
     */
    className?: string;
    
    /**
     * Optional inline styles
     */
    style?: string;
    
    /**
     * Child content
     */
    children?: any;
  }
  
  let { fallback = null, className = '', style = '', children }: Props = $props();
  
  /**
   * Whether the component has mounted
   */
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  });
</script>

{#if mounted}
  <div class={className} {style}>
    {@render children?.()}
  </div>
{:else if fallback}
  <div class={className} {style}>
    {@render fallback()}
  </div>
{:else}
  <!-- Default loading skeleton -->
  <div class="h-48 w-full rounded bg-white/5 animate-pulse {className}" {style} aria-hidden="true">
    <span class="sr-only">Loading client-side content...</span>
  </div>
{/if}
