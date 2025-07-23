// Tulio Brand System - Main Library Export
// Professional Liquid Glass Terminal Fusion Brand System
// Optimized for tree-shaking

// === CORE COMPONENTS (Tree-shakable) ===
export { default as Button } from './components/Button.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Input } from './components/Input.svelte';
export { default as Badge } from './components/Badge.svelte';
export { default as Modal } from './components/Modal.svelte';
export { default as Textarea } from './components/Textarea.svelte';
export { default as Switch } from './components/Switch.svelte';
export { default as Checkbox } from './components/Checkbox/Checkbox.svelte';
export { default as Slider } from './components/Slider.svelte';
export { default as Toast } from './components/Toast.svelte';
export { default as Progress } from './components/Progress.svelte';
export { default as Tabs } from './components/Tabs.svelte';
export { default as Accordion } from './components/Accordion.svelte';
export { default as Radio } from './components/Radio.svelte';
export { default as Tooltip } from './components/Tooltip.svelte';
export { default as Alert } from './components/Alert.svelte';
export { default as Dropdown } from './components/Dropdown.svelte';
export { default as Pagination } from './components/Pagination.svelte';
export { default as Skeleton } from './components/Skeleton.svelte';
export { default as Select } from './components/Select.svelte';

// === LIQUID GLASS COMPONENTS ===
export { default as LiquidGlass } from './components/LiquidGlass.svelte';
export { default as LiquidGlassAdvanced } from './components/LiquidGlassAdvanced.svelte';

// === TERMINAL COMPONENTS ===
export { default as TerminalWindow } from './components/TerminalWindow.svelte';
export { default as LiquidTerminal } from './components/LiquidTerminal.svelte';
export { default as AdvancedTerminal } from './components/AdvancedTerminal.svelte';

// === UTILITIES (Tree-shakable) ===
export { cn } from './utils';
export { lazy, lazyWithRetry, lazyWithIntersection, preload } from './utils/lazy';
export { responsive } from './utils/responsive';

// === MOTION SYSTEM (Tree-shakable) ===
export {
	magneticHover,
	springPop,
	glassFade,
	liquidBlur,
	liquidBlurTransition,
	jellyHover,
	liquidResponsive,
	breathing,
	useReducedMotion
} from './motion';

// === DESIGN TOKENS (Tree-shakable) ===
export { brandColors } from './tokens/colors';
export { brandSpacing } from './tokens/spacing';
export { brandTypography } from './tokens/typography';
export { brandShadows } from './tokens/shadows';

// === LAZY LOADING (Tree-shakable) ===
export {
	LazyThrelteCanvas,
	LazyMonacoEditor,
	LazyTerminalWindow,
	LazyDataTable,
	preloadCriticalComponents,
	preload3DComponents
} from './components/lazy';

// === PERFORMANCE UTILITIES ===
export { sizeOf } from './utils/bundle-size';
