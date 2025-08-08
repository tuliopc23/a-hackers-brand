type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/blog": undefined;
	"/docs": undefined;
	"/docs/accessibility": undefined;
	"/docs/api": undefined;
	"/docs/api/components": undefined;
	"/docs/api/hooks": undefined;
	"/docs/api/types": undefined;
	"/docs/api/utilities": undefined;
	"/docs/components": undefined;
	"/docs/components/core": undefined;
	"/docs/components/core/accordion": undefined;
	"/docs/components/core/alert": undefined;
	"/docs/components/core/badge": undefined;
	"/docs/components/core/breadcrumb": undefined;
	"/docs/components/core/button": undefined;
	"/docs/components/core/card": undefined;
	"/docs/components/core/checkbox": undefined;
	"/docs/components/core/glowtext": undefined;
	"/docs/components/core/input": undefined;
	"/docs/components/core/modal": undefined;
	"/docs/components/core/pagination": undefined;
	"/docs/components/core/progress": undefined;
	"/docs/components/core/select": undefined;
	"/docs/components/core/slider": undefined;
	"/docs/components/core/switch": undefined;
	"/docs/components/core/table": undefined;
	"/docs/components/core/tabs": undefined;
	"/docs/components/core/toast": undefined;
	"/docs/components/core/tooltip": undefined;
	"/docs/components/glass": undefined;
	"/docs/components/terminal": undefined;
	"/docs/components/terminal/advancedterminal": undefined;
	"/docs/components/terminal/bootsequence": undefined;
	"/docs/components/terminal/commandblock": undefined;
	"/docs/components/terminal/liquidterminal": undefined;
	"/docs/components/terminal/matrixrain": undefined;
	"/docs/components/terminal/retrotext": undefined;
	"/docs/components/terminal/terminalwindow": undefined;
	"/docs/components/webgl": undefined;
	"/docs/components/webgl/glassscene": undefined;
	"/docs/components/webgl/threltecanvas": undefined;
	"/docs/design": undefined;
	"/docs/design/colors": undefined;
	"/docs/design/icons": undefined;
	"/docs/design/motion": undefined;
	"/docs/design/spacing": undefined;
	"/docs/design/typography": undefined;
	"/docs/getting-started": undefined;
	"/docs/getting-started/themes": undefined;
	"/docs/patterns": undefined;
	"/docs/patterns/data-display": undefined;
	"/docs/patterns/feedback": undefined;
	"/docs/patterns/forms": undefined;
	"/docs/patterns/navigation": undefined;
	"/docs/themes": undefined;
	"/docs/themes/bubble-tea": undefined;
	"/playground": undefined;
	"/showcase": undefined
};

export type RouteId = "/" | "/blog" | "/docs" | "/docs/accessibility" | "/docs/api" | "/docs/api/components" | "/docs/api/hooks" | "/docs/api/types" | "/docs/api/utilities" | "/docs/components" | "/docs/components/core" | "/docs/components/core/accordion" | "/docs/components/core/alert" | "/docs/components/core/badge" | "/docs/components/core/breadcrumb" | "/docs/components/core/button" | "/docs/components/core/card" | "/docs/components/core/checkbox" | "/docs/components/core/glowtext" | "/docs/components/core/input" | "/docs/components/core/modal" | "/docs/components/core/pagination" | "/docs/components/core/progress" | "/docs/components/core/select" | "/docs/components/core/slider" | "/docs/components/core/switch" | "/docs/components/core/table" | "/docs/components/core/tabs" | "/docs/components/core/toast" | "/docs/components/core/tooltip" | "/docs/components/glass" | "/docs/components/terminal" | "/docs/components/terminal/advancedterminal" | "/docs/components/terminal/bootsequence" | "/docs/components/terminal/commandblock" | "/docs/components/terminal/liquidterminal" | "/docs/components/terminal/matrixrain" | "/docs/components/terminal/retrotext" | "/docs/components/terminal/terminalwindow" | "/docs/components/webgl" | "/docs/components/webgl/glassscene" | "/docs/components/webgl/threltecanvas" | "/docs/design" | "/docs/design/colors" | "/docs/design/icons" | "/docs/design/motion" | "/docs/design/spacing" | "/docs/design/typography" | "/docs/getting-started" | "/docs/getting-started/themes" | "/docs/patterns" | "/docs/patterns/data-display" | "/docs/patterns/feedback" | "/docs/patterns/forms" | "/docs/patterns/navigation" | "/docs/themes" | "/docs/themes/bubble-tea" | "/playground" | "/showcase";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/blog" | "/docs" | "/docs/accessibility" | "/docs/api" | "/docs/api/components" | "/docs/api/hooks" | "/docs/api/types" | "/docs/api/utilities" | "/docs/components" | "/docs/components/core" | "/docs/components/core/accordion" | "/docs/components/core/alert" | "/docs/components/core/badge" | "/docs/components/core/breadcrumb" | "/docs/components/core/button" | "/docs/components/core/card" | "/docs/components/core/checkbox" | "/docs/components/core/glowtext" | "/docs/components/core/input" | "/docs/components/core/modal" | "/docs/components/core/pagination" | "/docs/components/core/progress" | "/docs/components/core/select" | "/docs/components/core/slider" | "/docs/components/core/switch" | "/docs/components/core/table" | "/docs/components/core/tabs" | "/docs/components/core/toast" | "/docs/components/core/tooltip" | "/docs/components/glass" | "/docs/components/terminal" | "/docs/components/terminal/advancedterminal" | "/docs/components/terminal/bootsequence" | "/docs/components/terminal/commandblock" | "/docs/components/terminal/liquidterminal" | "/docs/components/terminal/matrixrain" | "/docs/components/terminal/retrotext" | "/docs/components/terminal/terminalwindow" | "/docs/components/webgl" | "/docs/components/webgl/glassscene" | "/docs/components/webgl/threltecanvas" | "/docs/design" | "/docs/design/colors" | "/docs/design/icons" | "/docs/design/motion" | "/docs/design/spacing" | "/docs/design/typography" | "/docs/getting-started" | "/docs/getting-started/themes" | "/docs/patterns" | "/docs/patterns/data-display" | "/docs/patterns/feedback" | "/docs/patterns/forms" | "/docs/patterns/navigation" | "/docs/themes" | "/docs/themes/bubble-tea" | "/playground" | "/showcase";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.svg" | "/search-index.json";