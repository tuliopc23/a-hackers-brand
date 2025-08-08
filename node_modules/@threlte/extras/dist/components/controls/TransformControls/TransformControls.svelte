<script lang="ts">import { T, observe, useThrelte } from '@threlte/core';
import { Group } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { useControlsContext } from '../useControlsContext';
let { autoPauseOrbitControls = true, autoPauseTrackballControls = true, object, controls = $bindable(), group = $bindable(), children, ...props } = $props();
const { camera, dom, invalidate, scene } = useThrelte();
const { orbitControls, trackballControls } = useControlsContext();
let isDragging = $state(false);
observe(() => [orbitControls, isDragging, autoPauseOrbitControls], ([orbitControls, isDragging, useAutoPauseOrbitControls]) => {
    // if there are no orbitcontrols or we're not even
    // dragging, or the orbitcontrols are disabled, return
    if (!orbitControls || (!orbitControls.enabled && isDragging))
        return;
    orbitControls.enabled = !(isDragging && useAutoPauseOrbitControls);
    return () => {
        // we know they were enabled before, so we can
        // safely re-enable them
        orbitControls.enabled = true;
    };
});
observe(() => [trackballControls, isDragging, autoPauseTrackballControls], ([trackballControls, isDragging, useAutoPausetrackballControls]) => {
    // if there are no trackballcontrols or we're not even
    // dragging, or the trackballcontrols are disabled, return
    if (!trackballControls || (!trackballControls.enabled && isDragging))
        return;
    trackballControls.enabled = !(isDragging && useAutoPausetrackballControls);
    return () => {
        // we know they were enabled before, so we can
        // safely re-enable them
        trackballControls.enabled = true;
    };
});
const attachGroup = new Group();
group = attachGroup;
// `<HTML> sets canvas pointer-events to "none" if occluding, so events must be placed on the canvas parent.
const transformControls = new TransformControls(camera.current, dom);
controls = transformControls;
$effect.pre(() => {
    transformControls.camera = $camera;
});
$effect.pre(() => {
    transformControls?.attach(object ?? attachGroup);
    return () => transformControls?.detach();
});
// This component is receiving the props for the controls as well as the props
// for the group, so we need to split them up
const transformOnlyPropNames = [
    'enabled',
    'axis',
    'mode',
    'translationSnap',
    'rotationSnap',
    'scaleSnap',
    'space',
    'size',
    'showX',
    'showY',
    'showZ',
    'visible',
    'onmouseDown',
    'onmouseUp',
    'onobjectChange'
];
let transformProps = $state({});
let objectProps = $state({});
$effect.pre(() => {
    transformProps = {};
    objectProps = {};
    Object.keys(props).forEach((key) => {
        $effect.pre(() => {
            if (transformOnlyPropNames.includes(key)) {
                transformProps[key] = props[key];
            }
            else {
                objectProps[key] = props[key];
            }
        });
    });
});
const onchange = (event) => {
    invalidate();
    if (transformControls.dragging && !isDragging) {
        isDragging = true;
    }
    else if (!transformControls.dragging && isDragging) {
        isDragging = false;
    }
    // TODO: unfortunately the type of the event prop is not correct *yet*
    props.onchange?.(event);
};
</script>

<!-- TransformControls need to be added to the scene -->
<T
  is={transformControls}
  {onchange}
  {...transformProps}
  attach={({ ref }) => {
    const helper = ref.getHelper()
    scene.add(helper)
    return () => {
      scene.remove(helper)
    }
  }}
  dispose={false}
  oncreate={(ref) => {
    return () => ref.dispose()
  }}
/>

<T
  is={attachGroup}
  {...objectProps}
>
  {#if children}
    {@render children({ ref: attachGroup })}
  {/if}
</T>
