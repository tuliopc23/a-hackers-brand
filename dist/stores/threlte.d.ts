export interface ThrelteConfig {
    enabled: boolean;
    scene: 'glass' | 'terminal' | 'default';
    quality: 'low' | 'medium' | 'high';
    autoRotate: boolean;
    performance: {
        triangles: number;
        geometries: number;
        textures: number;
        fps: number;
        drawCalls: number;
    };
}
export declare const threlteConfig: import("svelte/store").Writable<ThrelteConfig>;
export declare const enabled3D: import("svelte/store").Readable<boolean>;
export declare const sceneType: import("svelte/store").Readable<"default" | "glass" | "terminal">;
export declare const quality: import("svelte/store").Readable<"medium" | "low" | "high">;
export declare const autoRotate: import("svelte/store").Readable<boolean>;
export declare const performanceStats: import("svelte/store").Readable<{
    triangles: number;
    geometries: number;
    textures: number;
    fps: number;
    drawCalls: number;
}>;
export declare const threlteActions: {
    toggle3D: () => void;
    setScene: (scene: "glass" | "terminal" | "default") => void;
    setQuality: (quality: "low" | "medium" | "high") => void;
    toggleAutoRotate: () => void;
    updatePerformance: (stats: Partial<ThrelteConfig["performance"]>) => void;
};
export declare const qualitySettings: {
    low: {
        samples: number;
        shadowMapSize: number;
        pixelRatio: number;
        antialias: boolean;
        transmission: number;
        roughness: number;
        thickness: number;
    };
    medium: {
        samples: number;
        shadowMapSize: number;
        pixelRatio: number;
        antialias: boolean;
        transmission: number;
        roughness: number;
        thickness: number;
    };
    high: {
        samples: number;
        shadowMapSize: number;
        pixelRatio: number;
        antialias: boolean;
        transmission: number;
        roughness: number;
        thickness: number;
    };
};
