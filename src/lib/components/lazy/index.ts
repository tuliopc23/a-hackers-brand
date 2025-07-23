// Barrel for lazy-loaded components

export { default as LazyThrelteCanvas } from './LazyThrelteCanvas.svelte';
export { default as LazyMonacoEditor } from './LazyMonacoEditor.svelte';
export { default as LazyTerminalWindow } from './LazyTerminalWindow.svelte';
export { default as LazyDataTable } from './LazyDataTable.svelte';

export { preloadCriticalComponents, preload3DComponents } from './preload';
export { lazy, lazyWithRetry, lazyWithIntersection } from '../../utils/lazy';