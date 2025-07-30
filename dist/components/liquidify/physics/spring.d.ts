export function springAnimation(node: any, config?: {
    spring: {
        tension: number;
        friction: number;
    };
}): {
    update(newConfig: any): void;
    destroy(): void;
};
export namespace SPRING_PRESETS {
    namespace noWobble {
        let tension: number;
        let friction: number;
    }
    namespace gentle {
        let tension_1: number;
        export { tension_1 as tension };
        let friction_1: number;
        export { friction_1 as friction };
    }
    namespace wobbly {
        let tension_2: number;
        export { tension_2 as tension };
        let friction_2: number;
        export { friction_2 as friction };
    }
    namespace stiff {
        let tension_3: number;
        export { tension_3 as tension };
        let friction_3: number;
        export { friction_3 as friction };
    }
    namespace slow {
        let tension_4: number;
        export { tension_4 as tension };
        let friction_4: number;
        export { friction_4 as friction };
    }
    namespace molasses {
        let tension_5: number;
        export { tension_5 as tension };
        let friction_5: number;
        export { friction_5 as friction };
    }
}
export class SpringPhysics {
    constructor(config: any);
    position: number;
    velocity: any;
    tension: any;
    friction: any;
    mass: any;
    precision: any;
    update(target: any, deltaTime: any): number;
    setPosition(position: any): void;
    setVelocity(velocity: any): void;
    isSettled(target: any): boolean;
}
export class Spring2D {
    constructor(config: any);
    springX: SpringPhysics;
    springY: SpringPhysics;
    update(target: any, deltaTime: any): {
        x: number;
        y: number;
    };
    setPosition(position: any): void;
    setVelocity(velocity: any): void;
    isSettled(target: any): boolean;
}
//# sourceMappingURL=spring.d.ts.map