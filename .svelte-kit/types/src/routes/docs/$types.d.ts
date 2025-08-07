import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/docs';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/docs/accessibility" | "/docs/components" | "/docs/components/core/accordion" | "/docs/components/core/alert" | "/docs/components/core/badge" | "/docs/components/core/breadcrumb" | "/docs/components/core/button" | "/docs/components/core/card" | "/docs/components/core/checkbox" | "/docs/components/core/glowtext" | "/docs/components/core/input" | "/docs/components/core/modal" | "/docs/components/core/pagination" | "/docs/components/core/progress" | "/docs/components/core/select" | "/docs/components/core/slider" | "/docs/components/core/switch" | "/docs/components/core/table" | "/docs/components/core/tabs" | "/docs/components/core/toast" | "/docs/components/core/tooltip" | "/docs/components/terminal/advancedterminal" | "/docs/components/terminal/bootsequence" | "/docs/components/terminal/commandblock" | "/docs/components/terminal/liquidterminal" | "/docs/components/terminal/matrixrain" | "/docs/components/terminal/retrotext" | "/docs/components/terminal/terminalwindow" | "/docs/components/webgl/glassscene" | "/docs/components/webgl/threltecanvas" | "/docs/design/typography" | "/docs/getting-started" | "/docs/getting-started/themes" | "/docs/themes" | "/docs/themes/bubble-tea"
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { params: LayoutParams; data: LayoutData; children: import("svelte").Snippet }