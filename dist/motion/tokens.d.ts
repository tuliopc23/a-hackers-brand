export namespace DURATIONS {
    let instant: number;
    let fast: number;
    let moderate: number;
    let slow: number;
    let slowest: number;
}
export namespace EASING_CSS {
    let glass: string;
    let liquid: string;
    let spring: string;
    let terminal: string;
    let elastic: string;
    let bounce: string;
    let jelly: string;
    let jellyBounce: string;
    let liquidJelly: string;
}
export namespace EASINGS {
    export function glass_1(t: any): number;
    export { glass_1 as glass };
    export function liquid_1(t: any): number;
    export { liquid_1 as liquid };
    export function spring_1(t: any): number;
    export { spring_1 as spring };
    export function terminal_1(t: any): number;
    export { terminal_1 as terminal };
    export function elastic_1(t: any): number;
    export { elastic_1 as elastic };
    export function bounce_1(t: any): number;
    export { bounce_1 as bounce };
    export function jelly_1(t: any): any;
    export { jelly_1 as jelly };
    export function liquidJelly_1(t: any): number;
    export { liquidJelly_1 as liquidJelly };
}
export namespace TRANSFORMS {
    namespace scale {
        let hover: number;
        let active: number;
        let press: number;
        let jellyHover: number;
        let jellyPress: number;
        let liquidExpand: number;
    }
    namespace translate {
        let hover_1: number;
        export { hover_1 as hover };
        export let lift: number;
        export let pop: number;
        let jellyBounce_1: number;
        export { jellyBounce_1 as jellyBounce };
        export let liquidFloat: number;
    }
    namespace borderRadius {
        export let normal: string;
        let hover_2: string;
        export { hover_2 as hover };
        let active_1: string;
        export { active_1 as active };
        let jelly_2: string;
        export { jelly_2 as jelly };
        let liquid_2: string;
        export { liquid_2 as liquid };
        export let blob: string;
    }
}
export const BLUR_LEVELS: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
};
export namespace OPACITY_LEVELS {
    let subtle: number;
    let light: number;
    let medium: number;
    let strong: number;
    let bold: number;
}
