
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NODE_ENV: string;
	export const VITE_BUILD_SOURCEMAP: string;
	export const VITE_BUILD_MINIFY: string;
	export const EXA_LAA_OPTIONS: string;
	export const LaunchInstanceID: string;
	export const EXA_LAID_OPTIONS: string;
	export const _tide_color_separator_same_color: string;
	export const RAYCAST_BEARER_TOKEN: string;
	export const SHELL: string;
	export const EXA_LI_OPTIONS: string;
	export const EXA_LAI_OPTIONS: string;
	export const ABBR_TIPS_PROMPT: string;
	export const XPC_SERVICE_NAME: string;
	export const __ABBR_TIPS_KEYS: string;
	export const XAI_API_KEY: string;
	export const WARP_HONOR_PS1: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const VERTEX_AI_API_KEY: string;
	export const HOME: string;
	export const EXA_LAD_OPTIONS: string;
	export const __FISH_EXA_ALIASES: string;
	export const ABBR_TIPS_REGEXES: string;
	export const EXA_LG_OPTIONS: string;
	export const HOMEBREW_FAKE_MACOS: string;
	export const SSH_SOCKET_DIR: string;
	export const __FISH_EXA_OPT_NAMES: string;
	export const PWD: string;
	export const CSB_API_KEY: string;
	export const TMPDIR: string;
	export const BUN_INSTALL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const OPENAI_BASE_URL: string;
	export const ARM_SUBSCRIPTION_ID: string;
	export const EXA_LID_OPTIONS: string;
	export const HOMEBREW_MACOS_VERSION: string;
	export const EXA_L_OPTIONS: string;
	export const WARP_USE_SSH_WRAPPER: string;
	export const EXA_STANDARD_OPTIONS: string;
	export const API_KEY: string;
	export const EXA_LAAID_OPTIONS: string;
	export const __FISH_EXA_EXPANDED: string;
	export const __FISH_EXA_BINARY: string;
	export const AZURE_SUBSCRIPTION_ID: string;
	export const EXA_LAAI_OPTIONS: string;
	export const OPENAI_API_KEY: string;
	export const WARP_IS_LOCAL_SHELL_SESSION: string;
	export const SSH_AUTH_SOCK: string;
	export const AWS_BEARER_TOKEN_BEDROCK: string;
	export const PNPM_HOME: string;
	export const COLORTERM: string;
	export const __CFBundleIdentifier: string;
	export const QWEN_API_KEY: string;
	export const NPM_TOKEN: string;
	export const QLTY_INSTALL: string;
	export const GOOGLE_APPLICATION_CREDENTIALS: string;
	export const AUTHORIZATION_TOKEN: string;
	export const LOGNAME: string;
	export const HOMEBREW_DEVELOPER: string;
	export const __FISH_EXA_BASE_ALIASES: string;
	export const XPC_FLAGS: string;
	export const TTY: string;
	export const EXA_LAAD_OPTIONS: string;
	export const PATH: string;
	export const GOOGLE_AI_API_KEY: string;
	export const EXA_LC_OPTIONS: string;
	export const EXA_LL_OPTIONS: string;
	export const EXA_LE_OPTIONS: string;
	export const nvm_current_version: string;
	export const OPENROUTER_API_KEY: string;
	export const EXA_LD_OPTIONS: string;
	export const TERM: string;
	export const __FISH_EXA_EXPANDED_OPT_NAME: string;
	export const __ABBR_TIPS_VALUES: string;
	export const COMMAND_MODE: string;
	export const OP_PLUGIN_ALIASES_SOURCED: string;
	export const EXA_LT_OPTIONS: string;
	export const ANYSCALE_CLI_TOKEN: string;
	export const SHLVL: string;
	export const SECURITYSESSIONID: string;
	export const LC_CTYPE: string;
	export const __FISH_EXA_SORT_OPTIONS: string;
	export const USER: string;
	export const TERM_PROGRAM: string;
	export const EXA_LA_OPTIONS: string;
	export const SHELL_PID: string;
	export const EXA_LO_OPTIONS: string;
	export const OSLogRateLimit: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const GIT_EDITOR: string;
	export const CLAUDECODE: string;
	export const OLDPWD: string;
	export const LANG: string;
	export const Q_SET_PARENT_CHECK: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const INFOPATH: string;
	export const _: string;
	export const npm_config_local_prefix: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_package_name: string;
	export const npm_package_json: string;
	export const npm_package_version: string;
	export const NODE: string;
	export const npm_node_execpath: string;
	export const npm_command: string;
	export const VITE_USER_NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_APP_NAME: string;
	export const PUBLIC_APP_VERSION: string;
	export const PUBLIC_APP_URL: string;
	export const PUBLIC_GOOGLE_ANALYTICS_ID: string;
	export const PUBLIC_PLAUSIBLE_DOMAIN: string;
	export const PUBLIC_ENABLE_PERFORMANCE_MONITORING: string;
	export const PUBLIC_ENABLE_ERROR_TRACKING: string;
	export const PUBLIC_ENABLE_3D_COMPONENTS: string;
	export const PUBLIC_ENABLE_WEBGL: string;
	export const PUBLIC_ENABLE_ANIMATIONS: string;
	export const PUBLIC_API_BASE_URL: string;
	export const PUBLIC_CSP_REPORT_URI: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NODE_ENV: string;
		VITE_BUILD_SOURCEMAP: string;
		VITE_BUILD_MINIFY: string;
		EXA_LAA_OPTIONS: string;
		LaunchInstanceID: string;
		EXA_LAID_OPTIONS: string;
		_tide_color_separator_same_color: string;
		RAYCAST_BEARER_TOKEN: string;
		SHELL: string;
		EXA_LI_OPTIONS: string;
		EXA_LAI_OPTIONS: string;
		ABBR_TIPS_PROMPT: string;
		XPC_SERVICE_NAME: string;
		__ABBR_TIPS_KEYS: string;
		XAI_API_KEY: string;
		WARP_HONOR_PS1: string;
		__CF_USER_TEXT_ENCODING: string;
		VERTEX_AI_API_KEY: string;
		HOME: string;
		EXA_LAD_OPTIONS: string;
		__FISH_EXA_ALIASES: string;
		ABBR_TIPS_REGEXES: string;
		EXA_LG_OPTIONS: string;
		HOMEBREW_FAKE_MACOS: string;
		SSH_SOCKET_DIR: string;
		__FISH_EXA_OPT_NAMES: string;
		PWD: string;
		CSB_API_KEY: string;
		TMPDIR: string;
		BUN_INSTALL: string;
		TERM_PROGRAM_VERSION: string;
		OPENAI_BASE_URL: string;
		ARM_SUBSCRIPTION_ID: string;
		EXA_LID_OPTIONS: string;
		HOMEBREW_MACOS_VERSION: string;
		EXA_L_OPTIONS: string;
		WARP_USE_SSH_WRAPPER: string;
		EXA_STANDARD_OPTIONS: string;
		API_KEY: string;
		EXA_LAAID_OPTIONS: string;
		__FISH_EXA_EXPANDED: string;
		__FISH_EXA_BINARY: string;
		AZURE_SUBSCRIPTION_ID: string;
		EXA_LAAI_OPTIONS: string;
		OPENAI_API_KEY: string;
		WARP_IS_LOCAL_SHELL_SESSION: string;
		SSH_AUTH_SOCK: string;
		AWS_BEARER_TOKEN_BEDROCK: string;
		PNPM_HOME: string;
		COLORTERM: string;
		__CFBundleIdentifier: string;
		QWEN_API_KEY: string;
		NPM_TOKEN: string;
		QLTY_INSTALL: string;
		GOOGLE_APPLICATION_CREDENTIALS: string;
		AUTHORIZATION_TOKEN: string;
		LOGNAME: string;
		HOMEBREW_DEVELOPER: string;
		__FISH_EXA_BASE_ALIASES: string;
		XPC_FLAGS: string;
		TTY: string;
		EXA_LAAD_OPTIONS: string;
		PATH: string;
		GOOGLE_AI_API_KEY: string;
		EXA_LC_OPTIONS: string;
		EXA_LL_OPTIONS: string;
		EXA_LE_OPTIONS: string;
		nvm_current_version: string;
		OPENROUTER_API_KEY: string;
		EXA_LD_OPTIONS: string;
		TERM: string;
		__FISH_EXA_EXPANDED_OPT_NAME: string;
		__ABBR_TIPS_VALUES: string;
		COMMAND_MODE: string;
		OP_PLUGIN_ALIASES_SOURCED: string;
		EXA_LT_OPTIONS: string;
		ANYSCALE_CLI_TOKEN: string;
		SHLVL: string;
		SECURITYSESSIONID: string;
		LC_CTYPE: string;
		__FISH_EXA_SORT_OPTIONS: string;
		USER: string;
		TERM_PROGRAM: string;
		EXA_LA_OPTIONS: string;
		SHELL_PID: string;
		EXA_LO_OPTIONS: string;
		OSLogRateLimit: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		GIT_EDITOR: string;
		CLAUDECODE: string;
		OLDPWD: string;
		LANG: string;
		Q_SET_PARENT_CHECK: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_REPOSITORY: string;
		INFOPATH: string;
		_: string;
		npm_config_local_prefix: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_package_name: string;
		npm_package_json: string;
		npm_package_version: string;
		NODE: string;
		npm_node_execpath: string;
		npm_command: string;
		VITE_USER_NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_APP_NAME: string;
		PUBLIC_APP_VERSION: string;
		PUBLIC_APP_URL: string;
		PUBLIC_GOOGLE_ANALYTICS_ID: string;
		PUBLIC_PLAUSIBLE_DOMAIN: string;
		PUBLIC_ENABLE_PERFORMANCE_MONITORING: string;
		PUBLIC_ENABLE_ERROR_TRACKING: string;
		PUBLIC_ENABLE_3D_COMPONENTS: string;
		PUBLIC_ENABLE_WEBGL: string;
		PUBLIC_ENABLE_ANIMATIONS: string;
		PUBLIC_API_BASE_URL: string;
		PUBLIC_CSP_REPORT_URI: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
