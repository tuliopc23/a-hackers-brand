export function loadThrelteConfig(): void;
export function saveThrelteConfig(config: any): void;
export const threlteConfig: import("svelte/store").Writable<{
    enabled: boolean;
    scene: string;
    quality: string;
    autoRotate: boolean;
    performance: {
        triangles: number;
        geometries: number;
        textures: number;
        fps: number;
        drawCalls: number;
    };
}>;
export const enabled3D: import("svelte/store").Readable<boolean>;
export const sceneType: import("svelte/store").Readable<string>;
export const quality: import("svelte/store").Readable<string>;
export const autoRotate: import("svelte/store").Readable<boolean>;
export const performanceStats: import("svelte/store").Readable<{
    triangles: number;
    geometries: number;
    textures: number;
    fps: number;
    drawCalls: number;
}>;
export namespace threlteActions {
    function toggle3D(): void;
    function setScene(scene: any): void;
    function setQuality(quality: any): void;
    function toggleAutoRotate(): void;
    function updatePerformance(stats: any): void;
}
export namespace qualitySettings {
    namespace low {
        let samples: number;
        let shadowMapSize: number;
        let pixelRatio: number;
        let antialias: boolean;
        let transmission: number;
        let roughness: number;
        let thickness: number;
    }
    namespace medium {
        let samples_1: number;
        export { samples_1 as samples };
        let shadowMapSize_1: number;
        export { shadowMapSize_1 as shadowMapSize };
        let pixelRatio_1: number;
        export { pixelRatio_1 as pixelRatio };
        let antialias_1: boolean;
        export { antialias_1 as antialias };
        let transmission_1: number;
        export { transmission_1 as transmission };
        let roughness_1: number;
        export { roughness_1 as roughness };
        let thickness_1: number;
        export { thickness_1 as thickness };
    }
    namespace high {
        let samples_2: number;
        export { samples_2 as samples };
        let shadowMapSize_2: number;
        export { shadowMapSize_2 as shadowMapSize };
        let pixelRatio_2: number;
        export { pixelRatio_2 as pixelRatio };
        let antialias_2: boolean;
        export { antialias_2 as antialias };
        let transmission_2: number;
        export { transmission_2 as transmission };
        let roughness_2: number;
        export { roughness_2 as roughness };
        let thickness_2: number;
        export { thickness_2 as thickness };
    }
}
//# sourceMappingURL=threlte.d.ts.map