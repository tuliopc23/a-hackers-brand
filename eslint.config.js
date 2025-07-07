import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import a11y from 'eslint-plugin-jsx-a11y';

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
				...globals.node,
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
		rules: {
			// TypeScript rules
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			
			// General JavaScript rules
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-undef': 'off', // TypeScript handles this
			'prefer-const': 'error',
			'no-var': 'error',
		}
	},
	{
		files: ['**/*.svelte'],
		plugins: {
			'jsx-a11y': a11y
		},
		rules: {
			// Svelte-specific accessibility rules are handled by svelte plugin
			// Additional accessibility rules
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
			'jsx-a11y/tabindex-no-positive': 'error'
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