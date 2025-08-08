// Minimal motion actions and transitions with permissive typings
import type { Action } from 'svelte/action';

export type MagneticHoverOptions = {
  enabled?: boolean;
  strength?: number;
  scale?: number;
  distance?: number; // tolerated though not used here
};

export const magneticHover: Action<HTMLElement, MagneticHoverOptions | undefined> = (node, options) => {
  let opts: MagneticHoverOptions = { enabled: true, strength: 0.1, scale: 1.02, ...options };
  function onMouseMove(e: MouseEvent) {
    if (!opts.enabled) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `translate(${x * (opts.strength ?? 0.1) * 20}px, ${y * (opts.strength ?? 0.1) * 20}px) scale(${opts.scale ?? 1.02})`;
  }
  function onMouseLeave() {
    node.style.transform = '';
  }
  node.addEventListener('mousemove', onMouseMove);
  node.addEventListener('mouseleave', onMouseLeave);
  return {
    update(next) { opts = { ...opts, ...next }; },
    destroy() {
      node.removeEventListener('mousemove', onMouseMove);
      node.removeEventListener('mouseleave', onMouseLeave);
    }
  };
};

export type JellyHoverOptions = { enabled?: boolean; intensity?: number; speed?: number; duration?: number; scale?: number; borderRadius?: string };
export const jellyHover: Action<HTMLElement, JellyHoverOptions | undefined> = (node, options) => {
  let opts = { enabled: true, intensity: 0.05, speed: 200, ...options };
  function onEnter() {
    if (!opts.enabled) return;
    node.style.transition = `transform ${opts.duration ?? 200}ms ease`;
    node.style.transform = `scale(${opts.scale ?? 1.02})`;
    if (opts.borderRadius) node.style.borderRadius = opts.borderRadius;
  }
  function onLeave() {
    node.style.transform = '';
  }
  node.addEventListener('mouseenter', onEnter);
  node.addEventListener('mouseleave', onLeave);
  return {
    update(next) { opts = { ...opts, ...next }; },
    destroy() {
      node.removeEventListener('mouseenter', onEnter);
      node.removeEventListener('mouseleave', onLeave);
    }
  };
};

export type LiquidBlurOptions = { amount?: number; duration?: number; blur?: 'sm'|'md'|'lg'|'xl'; opacity?: 'light'|'subtle'|'medium'|'strong'; scale?: number; intensity?: 'low'|'medium'|'high' };
export const liquidBlur: Action<HTMLElement, LiquidBlurOptions | undefined> = (node, options) => {
  let opts = { duration: 200, ...options };
  const apply = () => {
    const blurPx = opts.blur === 'xl' ? 16 : opts.blur === 'lg' ? 12 : opts.blur === 'md' ? 8 : opts.blur === 'sm' ? 4 : (opts.amount ?? 0);
    const op = opts.opacity === 'strong' ? 0.3 : opts.opacity === 'medium' ? 0.2 : opts.opacity === 'light' ? 0.1 : 0.15;
    node.style.transition = `filter ${opts.duration}ms ease, transform ${opts.duration}ms ease, background-color ${opts.duration}ms ease`;
    node.style.filter = `blur(${blurPx}px)`;
    node.style.transform = opts.scale ? `scale(${opts.scale})` : node.style.transform;
    node.style.backgroundColor = `rgba(255,255,255,${op})`;
  };
  apply();
  return {
    update(next) { opts = { ...opts, ...next }; apply(); },
    destroy() {
      node.style.filter = '';
      node.style.backgroundColor = '';
    }
  };
};

export type SpringPopParams = { duration?: number; delay?: number; bounce?: boolean; scale?: number };
export function springPop(node: Element, params: SpringPopParams = {}) {
  const { duration = 150, delay = 0, scale = 0.98 } = params;
  return {
    duration,
    delay,
    css: (t: number) => {
      const s = scale + (1 - scale) * t;
      return `transform: scale(${s});`;
    }
  };
}

export type GlassFadeParams = { duration?: number; delay?: number; direction?: 'up'|'down'|'center'; distance?: number; opacity?: 'light'|'subtle'|'medium'|'strong' };
export function glassFade(node: Element, params: GlassFadeParams = {}) {
  const { duration = 150, delay = 0, direction = 'up', distance = 10, opacity = 'light' } = params;
  const translate = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const baseOpacity = opacity === 'strong' ? 1 : opacity === 'medium' ? 0.9 : opacity === 'subtle' ? 0.8 : 0.7;
  return {
    duration,
    delay,
    css: (t: number) => `transform: translateY(${(1 - t) * translate}px); opacity: ${t * baseOpacity};`
  };
}

export const breathing: Action<HTMLElement, { enabled?: boolean; intensity?: number; speed?: number } | undefined> = (node, options) => {
  let frame = 0; let raf = 0; let opts = { enabled: true, intensity: 0.02, speed: 3000, ...options };
  const loop = (time: number) => {
    if (!opts.enabled) { raf = requestAnimationFrame(loop); return; }
    const s = 1 + Math.sin(time / (opts.speed ?? 3000) * Math.PI * 2) * (opts.intensity ?? 0.02);
    (node as HTMLElement).style.transform = `scale(${s})`;
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return {
    update(next) { opts = { ...opts, ...next }; },
    destroy() { cancelAnimationFrame(raf); (node as HTMLElement).style.transform = ''; }
  };
};

export const liquidResponsive = jellyHover;
