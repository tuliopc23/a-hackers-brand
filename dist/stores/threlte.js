import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
// Initial state
const initialConfig = {
    enabled: false,
    scene: 'terminal',
    quality: 'medium',
    autoRotate: true,
    performance: {
        triangles: 0,
        geometries: 0,
        textures: 0,
        fps: 60,
        drawCalls: 0
    }
};
// Main store
export const threlteConfig = writable(initialConfig);
// Individual property stores for better reactivity
export const enabled3D = derived(threlteConfig, ($config) => $config.enabled);
export const sceneType = derived(threlteConfig, ($config) => $config.scene);
export const quality = derived(threlteConfig, ($config) => $config.quality);
export const autoRotate = derived(threlteConfig, ($config) => $config.autoRotate);
export const performanceStats = derived(threlteConfig, ($config) => $config.performance);
// Actions
export const threlteActions = {
    toggle3D: () => {
        threlteConfig.update((config) => ({ ...config, enabled: !config.enabled }));
    },
    setScene: (scene) => {
        threlteConfig.update((config) => ({ ...config, scene }));
    },
    setQuality: (quality) => {
        threlteConfig.update((config) => ({ ...config, quality }));
    },
    toggleAutoRotate: () => {
        threlteConfig.update((config) => ({ ...config, autoRotate: !config.autoRotate }));
    },
    updatePerformance: (stats) => {
        threlteConfig.update((config) => ({
            ...config,
            performance: { ...config.performance, ...stats }
        }));
    }
};
// Quality settings mapping
export const qualitySettings = {
    low: {
        samples: 8,
        shadowMapSize: 512,
        pixelRatio: Math.min(1, browser ? window.devicePixelRatio || 1 : 1),
        antialias: false,
        transmission: 0.8,
        roughness: 0.2,
        thickness: 1.0
    },
    medium: {
        samples: 16,
        shadowMapSize: 1024,
        pixelRatio: Math.min(1.5, browser ? window.devicePixelRatio || 1 : 1),
        antialias: true,
        transmission: 1.0,
        roughness: 0.1,
        thickness: 1.5
    },
    high: {
        samples: 32,
        shadowMapSize: 2048,
        pixelRatio: browser ? window.devicePixelRatio || 1 : 1,
        antialias: true,
        transmission: 1.0,
        roughness: 0.05,
        thickness: 2.0
    }
};
// Persistence (optional)
if (browser) {
    // Load saved config
    const saved = localStorage.getItem('threlte-config');
    if (saved) {
        try {
            const savedConfig = JSON.parse(saved);
            threlteConfig.set({ ...initialConfig, ...savedConfig });
        }
        catch (e) {
            console.warn('Failed to load saved Threlte config:', e);
        }
    }
    // Save config changes
    threlteConfig.subscribe((config) => {
        localStorage.setItem('threlte-config', JSON.stringify(config));
    });
}
