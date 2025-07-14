// Tulio Brand System - Type Definitions

// Common Component Props
export interface BaseComponentProps {
	class?: string;
	id?: string;
	'data-testid'?: string;
	// Allow additional HTML attributes with proper typing
	[key: `data-${string}`]: string | number | boolean | undefined;
	[key: `aria-${string}`]: string | number | boolean | undefined;
}

// Component variant types
export type ComponentVariant = 'glass' | 'terminal' | 'liquid' | 'neon' | 'classic' | 'default';
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ComponentState = 'default' | 'hover' | 'active' | 'disabled' | 'loading' | 'error';

// Button Props
export interface ButtonProps extends BaseComponentProps {
	variant?: ComponentVariant;
	size?: ComponentSize;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	loading?: boolean;
	glow?: boolean;
	jelly?: boolean;
	liquid?: boolean;
	magnetic?: boolean;
	ripple?: boolean;
	animated?: boolean;
	children?: import('svelte').Snippet;
}

// Input Props
export interface InputProps extends BaseComponentProps {
	variant?: ComponentVariant;
	size?: ComponentSize;
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	error?: string;
	label?: string;
	name?: string;
	minlength?: number;
	maxlength?: number;
	glow?: boolean;
	liquid?: boolean;
	blur?: ComponentSize;
	animated?: boolean;
}

// Modal Props
export interface ModalProps extends BaseComponentProps {
	open: boolean;
	title?: string;
	description?: string;
	variant?: ComponentVariant;
	size?: ComponentSize;
	showHeader?: boolean;
	closable?: boolean;
	closeOnOverlay?: boolean;
	closeOnEscape?: boolean;
	backdrop?: 'blur' | 'solid' | 'transparent';
	breathing?: boolean;
	glow?: boolean;
	animated?: boolean;
	transition?: string;
	portalTarget?: string;
}

// Alert Props
export interface AlertProps extends BaseComponentProps {
	variant?: 'success' | 'error' | 'warning' | 'info' | 'terminal';
	title?: string;
	description?: string;
	closable?: boolean;
	animated?: boolean;
	glow?: boolean;
	jelly?: boolean;
	icon?: boolean;
	position?: 'static' | 'fixed' | 'absolute';
	placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

// Toast Props
export interface ToastProps extends BaseComponentProps {
	open: boolean;
	type?: 'success' | 'error' | 'warning' | 'info';
	variant?: ComponentVariant;
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
	blur?: ComponentSize;
	duration?: number;
	closable?: boolean;
	animate?: boolean;
	reduceMotion?: boolean;
	title?: string;
	description?: string;
	action?: {
		label: string;
		onClick: () => void;
	};
}

// Generic List Item
export interface ListItem {
	id: string;
	label: string;
	value?: string;
	href?: string;
	disabled?: boolean;
	[key: string]: string | number | boolean | undefined;
}

// Breadcrumb Item
export interface BreadcrumbItem extends ListItem {
	href?: string;
}

// Select Option
export interface SelectOption extends ListItem {
	value: string;
	disabled?: boolean;
}

// Table Column
export interface TableColumn<T = unknown> {
	key: string;
	label: string;
	sortable?: boolean;
	render?: (value: T, row?: TableRow) => string | import('svelte').Snippet;
	width?: string;
	align?: 'left' | 'center' | 'right';
}

// File Upload Types
export interface UploadFile {
	id: string;
	name: string;
	size: number;
	type: string;
	status: 'pending' | 'uploading' | 'success' | 'error';
	progress?: number;
	error?: string;
	url?: string;
}

// Grid Props
export interface GridProps extends BaseComponentProps {
	cols?: 'auto' | number;
	rows?: 'auto' | number;
	gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	colSpan?: number;
	rowSpan?: number;
	autoFit?: boolean;
	autoFill?: boolean;
	minColWidth?: string;
	maxColWidth?: string;
	responsive?: boolean;
	breakpoints?: Record<string, number | string>;
	align?: 'start' | 'end' | 'center' | 'stretch';
	justify?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
	placeItems?: string;
}

// Legacy Glass Component Props
export interface GlassComponentProps {
	class?: string;
	variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
	size?: 'sm' | 'md' | 'lg' | 'xl';
	disabled?: boolean;
	magnetic?: boolean;
	ripple?: boolean;
}

export interface TerminalComponentProps {
	theme?: 'matrix' | 'cyberpunk' | 'hacker' | 'liquid';
	animated?: boolean;
	glitch?: boolean;
	class?: string;
}

export interface WebGLComponentProps {
	quality?: 'low' | 'medium' | 'high' | 'ultra';
	autoRotate?: boolean;
	interactive?: boolean;
	enableBloom?: boolean;
	enableParticles?: boolean;
	class?: string;
}

// Motion System Types
export interface MotionConfig {
	spring?: {
		tension: number;
		friction: number;
		mass: number;
	};
	magnetic?: {
		strength: number;
		radius: number;
		easing: string;
	};
	ripple?: {
		duration: number;
		scale: number;
		opacity: number;
	};
}

// Brand Token Types
export interface BrandTokens {
	colors: {
		terminal: {
			green: string;
			cyan: string;
			blue: string;
			purple: string;
		};
		glass: {
			primary: string;
			secondary: string;
			accent: string;
			background: string;
		};
	};
	spacing: Record<string, string>;
	typography: {
		mono: string;
		sans: string;
		sizes: Record<string, string>;
	};
	effects: {
		blur: Record<string, string>;
		shadow: Record<string, string>;
		glow: Record<string, string>;
	};
}

// Performance Types
export interface PerformanceMetrics {
	fps: number;
	memory: {
		used: number;
		total: number;
	};
	webgl: {
		active: boolean;
		renderer: string;
		triangles: number;
	};
	bundle: {
		size: number;
		gzipped: number;
	};
}

// Theme Types
export type ThemeMode = 'light' | 'dark' | 'auto';
export type TerminalTheme = 'matrix' | 'cyberpunk' | 'hacker' | 'liquid' | 'neon';
export type GlassQuality = 'low' | 'medium' | 'high' | 'ultra';

// Event Types
export interface GlassEvent<T = unknown> {
	type: string;
	detail: T;
	target: EventTarget | null;
}

export interface TerminalCommand {
	command: string;
	args: string[];
	output?: string;
	error?: string;
	timestamp: number;
}

// Accordion Types
export interface AccordionItem {
	id: string;
	title: string;
	content: string;
	disabled?: boolean;
}

// Navigation Types
export interface NavItem {
	id: string;
	label: string;
	href?: string;
	icon?: string;
	children?: NavItem[];
	disabled?: boolean;
	active?: boolean;
}

// Menu Types
export interface MenuItem {
	id: string;
	label: string;
	href?: string;
	icon?: string;
	action?: () => void;
	separator?: boolean;
	disabled?: boolean;
	badge?: string;
	keyboard?: string;
}

// Table Types
export interface TableRow {
	id: string | number;
	[key: string]: string | number | boolean | null | undefined;
}

// Grid Types
export interface GridColumn {
	id: string;
	key: string;
	label: string;
	sortable?: boolean;
	filterable?: boolean;
	width?: string;
	align?: 'left' | 'center' | 'right';
	render?: (value: unknown, row: GridRow) => string;
}

export interface GridRow {
	id: string | number;
	[key: string]: string | number | boolean | null | undefined;
}

export interface GridAction {
	id: string;
	label: string;
	icon?: string;
	action: string;
	variant?: 'primary' | 'secondary' | 'danger';
	show?: (row: GridRow) => boolean;
}

// Radio and Select Types
export interface RadioOption {
	id: string;
	label: string;
	value: string;
	description?: string;
	disabled?: boolean;
}

export interface Option {
	id: string;
	label: string;
	value: string;
	description?: string;
	disabled?: boolean;
}

// File Upload Types
export interface FileUploadItem {
	id: string;
	file: File;
	status: 'pending' | 'uploading' | 'success' | 'error';
	progress: number;
	error?: string;
	url?: string;
}

// Metrics Types
export interface MetricData {
	id: string;
	label: string;
	value: number | string;
	unit?: string;
	change?: number;
	changeType?: 'positive' | 'negative' | 'neutral';
	previousValue?: number | string;
	description?: string;
	icon?: string;
	target?: number;
	format?: 'number' | 'currency' | 'percentage' | 'bytes';
}

// Command Types
export interface CommandEntry {
	id: string;
	command: string;
	output: string;
	timestamp: Date;
}

// Filter Types
export interface FilterConfig {
	[key: string]: string | number | boolean | string[] | number[] | null | undefined;
}

// Legacy utility types (keeping for backwards compatibility)
export type LegacyComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type LegacyComponentVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
