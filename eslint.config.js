import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import a11y from 'eslint-plugin-jsx-a11y';
import security from 'eslint-plugin-security';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		files: ['**/*.{js,ts,svelte}'],
		plugins: {
			security
		},
		rules: {
			// === TYPESCRIPT RULES (Production Ready) ===
			'@typescript-eslint/no-unused-vars': ['error', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_'
			}],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/no-misused-promises': 'error',

			// === GENERAL JAVASCRIPT RULES ===
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-undef': 'off', // TypeScript handles this
			'prefer-const': 'error',
			'no-var': 'error',
			'no-unused-expressions': 'error',
			'no-unreachable': 'error',
			'no-duplicate-imports': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',

			// === SECURITY RULES ===
			'security/detect-object-injection': 'warn',
			'security/detect-non-literal-regexp': 'warn',
			'security/detect-unsafe-regex': 'error',
			'security/detect-buffer-noassert': 'error',
			'security/detect-child-process': 'warn',
			'security/detect-disable-mustache-escape': 'error',
			'security/detect-eval-with-expression': 'error',
			'security/detect-no-csrf-before-method-override': 'error',
			'security/detect-non-literal-fs-filename': 'warn',
			'security/detect-non-literal-require': 'warn',
			'security/detect-possible-timing-attacks': 'warn',
			'security/detect-pseudoRandomBytes': 'error'
		}
	},
	{
		files: ['**/*.svelte'],
		plugins: {
			'jsx-a11y': a11y
		},
		rules: {
			// === SVELTE-SPECIFIC RULES ===
			'svelte/no-at-debug-tags': 'error',
			'svelte/no-reactive-functions': 'error',
			'svelte/no-reactive-literals': 'error',
			'svelte/prefer-destructuring-props': 'warn',
			'svelte/require-store-reactive-access': 'error',
			'svelte/valid-compile': 'error',
			'svelte/no-unused-svelte-ignore': 'error',
			'svelte/no-useless-mustaches': 'error',
			'svelte/prefer-class-directive': 'error',
			'svelte/prefer-style-directive': 'error',
			'svelte/shorthand-attribute': 'error',
			'svelte/shorthand-directive': 'error',
			'svelte/spaced-html-comment': 'error',

			// === ACCESSIBILITY RULES (WCAG 2.1 AA Compliance) ===
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-proptypes': 'error',
			'jsx-a11y/aria-unsupported-elements': 'error',
			'jsx-a11y/click-events-have-key-events': 'error',
			'jsx-a11y/interactive-supports-focus': 'error',
			'jsx-a11y/label-has-associated-control': 'error',
			'jsx-a11y/no-noninteractive-element-interactions': 'error',
			'jsx-a11y/no-noninteractive-tabindex': 'error',
			'jsx-a11y/role-supports-aria-props': 'error',
			'jsx-a11y/tabindex-no-positive': 'error',
			'jsx-a11y/anchor-has-content': 'error',
			'jsx-a11y/anchor-is-valid': 'error',
			'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
			'jsx-a11y/aria-role': 'error',
			'jsx-a11y/heading-has-content': 'error',
			'jsx-a11y/iframe-has-title': 'error',
			'jsx-a11y/img-redundant-alt': 'error',
			'jsx-a11y/media-has-caption': 'warn',
			'jsx-a11y/mouse-events-have-key-events': 'error',
			'jsx-a11y/no-access-key': 'error',
			'jsx-a11y/no-autofocus': 'warn',
			'jsx-a11y/no-distracting-elements': 'error',
			'jsx-a11y/no-redundant-roles': 'error',
			'jsx-a11y/scope': 'error'
		}
	},
	{
		files: ['**/*.config.{js,ts}', '**/vite.config.{js,ts}', '**/svelte.config.{js,ts}'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-console': 'off'
		}
	},
	{
		files: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}', '**/tests/**/*'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-console': 'off'
		}
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'node_modules/',
			'coverage/',
			'.histoire/',
			'static/',
			'.vercel/',
			'package-lock.json',
			'pnpm-lock.yaml',
			'yarn.lock',
			'**/*.min.js',
			'**/*.min.css',
			'**/generated/**',
			'**/build/**',
			'**/output/**'
		]
	}
];
