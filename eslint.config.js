// ESLint v9 flat config for Svelte 5 + TypeScript (library only)
import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import globals from 'globals'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'build/**',
      '.svelte-kit/**',
      'docs/**',
      'src/routes/**',
      'src/lib/components/webgl/**',
    ],
  },
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  // Global rule tuning to keep a zero-warning baseline
  {
    files: ['**/*.{js,ts,svelte}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-irregular-whitespace': 'error',
      'no-case-declarations': 'error',
      'svelte/require-each-key': 'error',
      'svelte/no-at-html-tags': 'error',
      'svelte/prefer-svelte-reactivity': 'off',
      'svelte/prefer-writable-derived': 'off',
      'svelte/no-useless-children-snippet': 'error',
    },
  },
  {
    files: ['**/*.{js,ts,svelte}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'svelte/require-each-key': 'error',
      'svelte/no-at-html-tags': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
]
