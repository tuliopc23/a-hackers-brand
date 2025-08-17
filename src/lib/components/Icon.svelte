<script lang="ts">
  /**
   * Font Awesome Icon Component
   * Simplified icon system using Font Awesome classes
   */
  
  interface Props {
    /**
     * Font Awesome icon name (without fa- prefix)
     * @example "home", "user", "settings"
     */
    name: string;
    
    /**
     * Icon style variant
     */
    style?: 'solid' | 'regular' | 'light' | 'brands';
    
    /**
     * Icon size
     */
    size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    
    /**
     * Additional CSS classes
     */
    class?: string;
    
    /**
     * Design variant for theming
     */
    variant?: 'terminal' | 'glass' | 'liquid' | 'auto';
  }
  
  let { 
    name, 
    style = 'solid', 
    size, 
    class: className = '', 
    variant = 'auto',
    ...restProps 
  }: Props = $props();
  
  // Generate Font Awesome classes
  const stylePrefix = {
    solid: 'fas',
    regular: 'far', 
    light: 'fal',
    brands: 'fab'
  }[style];
  
  const sizeClass = size ? `fa-${size}` : '';
  const iconClass = `fa-${name}`;
  
  const classes = [
    stylePrefix,
    iconClass,
    sizeClass,
    `icon-${variant}`,
    className
  ].filter(Boolean).join(' ');
</script>

<i 
  class={classes}
  {...restProps}
  aria-hidden="true"
></i>

<style>
  /* Terminal variant */
  .icon-terminal {
    color: var(--color-terminal-green, #00ff41);
    text-shadow: 0 0 5px currentColor;
  }
  
  /* Glass variant */
  .icon-glass {
    color: var(--color-bubble-tea-pink, #ff6b9d);
    filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.4));
  }
  
  /* Liquid variant */
  .icon-liquid {
    color: var(--terminal-neon, #ff0080);
    filter: drop-shadow(0 0 12px currentColor);
    animation: icon-glow 2s ease-in-out infinite alternate;
  }
  
  /* Auto variant inherits from parent */
  .icon-auto {
    color: inherit;
  }
  
  @keyframes icon-glow {
    from { filter: drop-shadow(0 0 8px currentColor); }
    to { filter: drop-shadow(0 0 16px currentColor); }
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .icon-liquid {
      animation: none;
    }
  }
</style>
