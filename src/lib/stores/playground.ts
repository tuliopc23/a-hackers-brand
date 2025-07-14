import { writable } from 'svelte/store';

export interface PlaygroundState {
	code: string;
	isFormatting: boolean;
	lastFormatted: Date | null;
}

const initialState: PlaygroundState = {
	code: '',
	isFormatting: false,
	lastFormatted: null
};

function createPlaygroundStore() {
	const { subscribe, set, update } = writable<PlaygroundState>(initialState);

	return {
		subscribe,

		setCode: (code: string) => {
			update((state) => ({
				...state,
				code
			}));
		},

		formatCode: () => {
			update((state) => {
				if (state.isFormatting) return state;

				try {
					// Basic formatting - indent properly
					const formatted = formatSvelteCode(state.code);

					return {
						...state,
						code: formatted,
						isFormatting: false,
						lastFormatted: new Date()
					};
				} catch (error) {
					// Format failed - could implement proper error handling
					return {
						...state,
						isFormatting: false
					};
				}
			});
		},

		reset: () => {
			set(initialState);
		}
	};
}

function formatSvelteCode(code: string): string {
	// Basic Svelte code formatting
	// In a real implementation, you'd use prettier or a similar formatter

	const lines = code.split('\n');
	const formatted: string[] = [];
	let indentLevel = 0;
	const indentSize = 2;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		if (line === '') {
			formatted.push('');
			continue;
		}

		// Decrease indent for closing tags
		if (line.startsWith('</') || line.startsWith('}') || line === '</script>' || line === '</style>') {
			indentLevel = Math.max(0, indentLevel - 1);
		}

		// Add the line with proper indentation
		const indent = ' '.repeat(indentLevel * indentSize);
		formatted.push(indent + line);

		// Increase indent for opening tags
		if (
			(line.startsWith('<') && !line.startsWith('</') && !line.includes('/>') && !line.includes('</')) ||
			line.endsWith('{') ||
			line === '<script>' ||
			line === '<script lang="ts">' ||
			line === '<style>'
		) {
			indentLevel++;
		}

		// Handle self-closing tags and single-line tags
		if (line.includes('/>') || (line.startsWith('<') && line.includes('</'))) {
			// Don't change indent for self-closing or single-line tags
		}
	}

	return formatted.join('\n');
}

export const playgroundStore = createPlaygroundStore();
