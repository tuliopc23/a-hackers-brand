import { Mesh, Object3D, Texture, type EulerTuple, type Vector3Tuple } from 'three';
import type { Snippet } from 'svelte';
declare const Decal: import("svelte").Component<import("@threlte/core/dist/components/T/types").AnyProps & import("@threlte/core/dist/components/T/types").RefProps<Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>> & import("@threlte/core/dist/components/T/types").BaseProps<Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>, [{
    ref: Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>;
}]> & {
    args?: never;
} & {
    makeDefault?: never;
    manual?: never;
} & Partial<Omit<{
    readonly isMesh?: true | undefined;
    readonly type?: string | undefined;
    geometry?: import("three").BufferGeometry<import("three").NormalBufferAttributes> | undefined;
    material?: import("three").Material | import("three").Material[] | undefined;
    morphTargetInfluences?: number[] | undefined | undefined;
    morphTargetDictionary?: {
        [key: string]: number;
    } | undefined | undefined;
    updateMorphTargets?: undefined;
    getVertexPosition?: undefined;
    toJSON?: undefined;
    readonly isObject3D?: true | undefined;
    readonly id?: number | undefined;
    uuid?: string | undefined;
    name?: string | undefined;
    parent?: Object3D<import("three").Object3DEventMap> | null | undefined;
    children?: Object3D<import("three").Object3DEventMap>[] | undefined;
    up?: number | [x: number, y: number, z: number] | undefined;
    readonly position?: number | [x: number, y: number, z: number] | undefined;
    readonly rotation?: number | [x: number, y: number, z: number, order?: import("three").EulerOrder | undefined] | undefined;
    readonly quaternion?: number | [x: number, y: number, z: number, w: number] | undefined;
    readonly scale?: number | [x: number, y: number, z: number] | undefined;
    readonly modelViewMatrix?: number | [n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number] | undefined;
    readonly normalMatrix?: number | [n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number] | undefined;
    matrix?: number | [n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number] | undefined;
    matrixWorld?: number | [n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number] | undefined;
    matrixAutoUpdate?: boolean | undefined;
    matrixWorldAutoUpdate?: boolean | undefined;
    matrixWorldNeedsUpdate?: boolean | undefined;
    layers?: number | [layer: number] | undefined;
    visible?: boolean | undefined;
    castShadow?: boolean | undefined;
    receiveShadow?: boolean | undefined;
    frustumCulled?: boolean | undefined;
    renderOrder?: number | undefined;
    animations?: import("three").AnimationClip[] | undefined;
    userData?: Record<string, any> | undefined;
    customDepthMaterial?: import("three").Material | undefined;
    customDistanceMaterial?: import("three").Material | undefined;
    onBeforeShadow?: undefined;
    onAfterShadow?: undefined;
    onBeforeRender?: undefined;
    onAfterRender?: undefined;
    applyMatrix4?: undefined;
    applyQuaternion?: undefined;
    setRotationFromAxisAngle?: undefined;
    setRotationFromEuler?: undefined;
    setRotationFromMatrix?: undefined;
    setRotationFromQuaternion?: undefined;
    rotateOnAxis?: undefined;
    rotateOnWorldAxis?: undefined;
    rotateX?: undefined;
    rotateY?: undefined;
    rotateZ?: undefined;
    translateOnAxis?: undefined;
    translateX?: undefined;
    translateY?: undefined;
    translateZ?: undefined;
    localToWorld?: undefined;
    worldToLocal?: undefined;
    lookAt?: undefined;
    add?: undefined;
    remove?: undefined;
    removeFromParent?: undefined;
    clear?: undefined;
    attach?: undefined;
    getObjectById?: undefined;
    getObjectByName?: undefined;
    getObjectByProperty?: undefined;
    getObjectsByProperty?: undefined;
    getWorldPosition?: undefined;
    getWorldQuaternion?: undefined;
    getWorldScale?: undefined;
    getWorldDirection?: undefined;
    raycast?: undefined;
    traverse?: undefined;
    traverseVisible?: undefined;
    traverseAncestors?: undefined;
    updateMatrix?: undefined;
    updateMatrixWorld?: undefined;
    updateWorldMatrix?: undefined;
    clone?: undefined;
    copy?: undefined;
    addEventListener?: undefined;
    hasEventListener?: undefined;
    removeEventListener?: undefined;
    dispatchEvent?: undefined;
}, "copy" | "type" | "id" | "uuid" | "name" | "updateMatrix" | "clone" | "toJSON" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "raycast" | "args" | "attach" | "manual" | "makeDefault" | "children" | `is${string}` | "parent" | "onBeforeRender" | "updateMorphTargets" | "getVertexPosition" | "onBeforeShadow" | "onAfterShadow" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getObjectsByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrixWorld" | "updateWorldMatrix">> & {
    onadded?: ((event: ({} | {
        child: Object3D;
    } | {
        child: Object3D;
    }) & import("three").Event<keyof import("three").Object3DEventMap, Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>>) => void) | undefined;
    onremoved?: ((event: ({} | {
        child: Object3D;
    } | {
        child: Object3D;
    }) & import("three").Event<keyof import("three").Object3DEventMap, Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>>) => void) | undefined;
    onchildadded?: ((event: ({} | {
        child: Object3D;
    } | {
        child: Object3D;
    }) & import("three").Event<keyof import("three").Object3DEventMap, Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>>) => void) | undefined;
    onchildremoved?: ((event: ({} | {
        child: Object3D;
    } | {
        child: Object3D;
    }) & import("three").Event<keyof import("three").Object3DEventMap, Mesh<import("three").BufferGeometry<import("three").NormalBufferAttributes>, import("three").Material | import("three").Material[], import("three").Object3DEventMap>>) => void) | undefined;
} & Threlte.UserProps & {
    src?: Texture | string;
    mesh?: Mesh;
    position?: Vector3Tuple;
    /** Euler for manual orientation or a single float for closest-vertex-normal orient */
    rotation?: EulerTuple | number;
    scale?: Vector3Tuple | number;
    polygonOffsetFactor?: number;
    depthTest?: boolean;
    debug?: boolean;
    ref?: Mesh;
    children?: Snippet<[{
        ref: Mesh;
    }]>;
}, {}, "ref">;
export default Decal;
