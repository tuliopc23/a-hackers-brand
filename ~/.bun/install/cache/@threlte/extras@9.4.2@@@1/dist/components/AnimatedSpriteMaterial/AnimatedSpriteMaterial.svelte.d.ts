import type { AnimatedSpriteProps } from './types';
declare const AnimatedSpriteMaterial: import("svelte").Component<AnimatedSpriteProps, {
    /**
       * Plays the animation.
       */ play: () => Promise<void>;
    /**
       * Pauses the animation.
       */ pause: () => void;
}, "ref">;
export default AnimatedSpriteMaterial;
