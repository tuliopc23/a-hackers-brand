import type { AsciiRendererProps } from './types';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
declare const AsciiRenderer: import("svelte").Component<AsciiRendererProps, {
    getEffect: () => AsciiEffect;
    start: () => void;
    stop: () => void;
}, "">;
export default AsciiRenderer;
