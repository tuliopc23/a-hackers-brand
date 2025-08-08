export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/docs/accessibility": [4,[2]],
		"/docs/components": [5,[2]],
		"/docs/components/core/accordion": [6,[2]],
		"/docs/components/core/alert": [7,[2]],
		"/docs/components/core/badge": [8,[2]],
		"/docs/components/core/breadcrumb": [9,[2]],
		"/docs/components/core/button": [10,[2]],
		"/docs/components/core/card": [11,[2]],
		"/docs/components/core/checkbox": [12,[2]],
		"/docs/components/core/glowtext": [13,[2]],
		"/docs/components/core/input": [14,[2]],
		"/docs/components/core/modal": [15,[2]],
		"/docs/components/core/pagination": [16,[2]],
		"/docs/components/core/progress": [17,[2]],
		"/docs/components/core/select": [18,[2]],
		"/docs/components/core/slider": [19,[2]],
		"/docs/components/core/switch": [20,[2]],
		"/docs/components/core/table": [21,[2]],
		"/docs/components/core/tabs": [22,[2]],
		"/docs/components/core/toast": [23,[2]],
		"/docs/components/core/tooltip": [24,[2]],
		"/docs/components/terminal/advancedterminal": [25,[2]],
		"/docs/components/terminal/bootsequence": [26,[2]],
		"/docs/components/terminal/commandblock": [27,[2]],
		"/docs/components/terminal/liquidterminal": [28,[2]],
		"/docs/components/terminal/matrixrain": [29,[2]],
		"/docs/components/terminal/retrotext": [30,[2]],
		"/docs/components/terminal/terminalwindow": [31,[2]],
		"/docs/components/webgl/glassscene": [32,[2]],
		"/docs/components/webgl/threltecanvas": [33,[2]],
		"/docs/design/typography": [34,[2]],
		"/docs/getting-started": [35,[2]],
		"/docs/getting-started/themes": [36,[2]],
		"/docs/themes": [37,[2]],
		"/docs/themes/bubble-tea": [38,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';