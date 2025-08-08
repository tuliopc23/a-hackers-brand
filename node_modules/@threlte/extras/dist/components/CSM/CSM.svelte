<script lang="ts">import { observe, useTask, useThrelte } from '@threlte/core';
import { CSM } from 'three/examples/jsm/csm/CSM.js';
import { useMaterials } from './useMaterials.svelte';
let { enabled = true, args = {}, camera, configure, lightIntensity, lightColor, lightDirection = [1, -1, 1], children, fallback } = $props();
const { camera: defaultCamera, scene, size } = useThrelte();
let csm = $state.raw();
useTask(() => csm?.update(), { autoInvalidate: false });
const { onNewMaterial, allMaterials } = useMaterials();
const disposeCsm = () => {
    csm?.remove();
    csm?.dispose();
    csm = undefined;
};
observe(() => [enabled], ([enabled]) => {
    if (enabled) {
        const nextCSM = new CSM({
            camera: camera ?? $defaultCamera,
            parent: scene,
            ...args
        });
        configure?.(nextCSM);
        for (const material of allMaterials) {
            nextCSM.setupMaterial(material);
        }
        onNewMaterial((material) => nextCSM.setupMaterial(material));
        csm = nextCSM;
    }
    else {
        onNewMaterial(undefined);
        disposeCsm();
    }
});
observe(() => [size, csm], ([, csm]) => {
    csm?.updateFrustums();
});
// set any CSM props that require frustum updates
observe(() => [defaultCamera, camera, csm], ([defaultCamera, camera, csm]) => {
    if (!csm)
        return;
    csm.camera = camera ?? defaultCamera;
    if (args.maxFar !== undefined)
        csm.maxFar = args.maxFar;
    if (args.mode !== undefined)
        csm.mode = args.mode;
    csm.updateFrustums();
});
observe(() => [csm, lightIntensity, lightColor], ([csm, intensity, color]) => {
    csm?.lights.forEach((light) => {
        if (intensity !== undefined) {
            light.intensity = intensity / Math.PI;
        }
        if (color !== undefined) {
            light.color.set(color);
        }
    });
});
observe(() => [csm, lightDirection], ([csm, direction]) => {
    csm?.lightDirection.set(...direction).normalize();
});
$effect.pre(() => {
    return disposeCsm;
});
</script>

{@render children?.()}

{#if !enabled}
  {@render fallback?.()}
{/if}
