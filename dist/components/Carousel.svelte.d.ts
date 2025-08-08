import type { HTMLAttributes } from 'svelte/elements';
export interface CarouselItem {
    id: string;
    content?: string;
    image?: string;
    title?: string;
    description?: string;
    href?: string;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
    items: CarouselItem[];
    currentIndex?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showControls?: boolean;
    showDots?: boolean;
    showProgress?: boolean;
    loop?: boolean;
    variant?: 'glass' | 'terminal' | 'liquid';
    size?: 'sm' | 'md' | 'lg';
    aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9';
    transition?: 'slide' | 'fade' | 'scale';
    itemsPerView?: number;
    gap?: 'sm' | 'md' | 'lg';
    touchEnabled?: boolean;
    class?: string;
}
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const Carousel: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<Props, {
    default: {
        item: CarouselItem;
        index: any;
        active: boolean;
    };
}>, {
    change: CustomEvent<any>;
    autoplay: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        item: CarouselItem;
        index: any;
        active: boolean;
    };
}, {}, "currentIndex">;
type Carousel = InstanceType<typeof Carousel>;
export default Carousel;
//# sourceMappingURL=Carousel.svelte.d.ts.map