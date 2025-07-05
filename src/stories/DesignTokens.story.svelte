<script module>
	export const title = 'Design Tokens/Explorer';
</script>

<script>
	import { Story, Variant } from '@histoire/plugin-svelte';
	import tailwindConfig from '../../tailwind.config.js';

	// Extract design tokens from Tailwind config
	const tokens = tailwindConfig.theme?.extend || {};

	// Function to display color swatches
	function getColorValues(colorObj: any, prefix: string = ''): Array<{name: string, value: string}> {
		const colors: Array<{name: string, value: string}> = [];

		if (typeof colorObj === 'string') {
			return [{ name: prefix, value: colorObj }];
		}

		for (const [key, value] of Object.entries(colorObj || {})) {
			if (typeof value === 'string') {
				colors.push({
					name: prefix ? `${prefix}-${key}` : key,
					value
				});
			} else if (typeof value === 'object') {
				colors.push(...getColorValues(value, prefix ? `${prefix}-${key}` : key));
			}
		}

		return colors;
	}

	// Extract colors safely from config
	const configColors = (tokens.colors && typeof tokens.colors === 'object' && !Array.isArray(tokens.colors)) 
		? tokens.colors as Record<string, any>
		: {};

	const brandColors = getColorValues(configColors.brand || {}, 'brand');
	const terminalColors = getColorValues(configColors.terminal || {}, 'terminal');
	const semanticColors = getColorValues({
		primary: configColors.primary || {},
		secondary: configColors.secondary || {},
		accent: configColors.accent || {},
		muted: configColors.muted || {},
		destructive: configColors.destructive || {}
	});

	const fontSizes = Object.entries(tokens.fontSize || {}).map(([name, config]) => ({
		name,
		size: Array.isArray(config) ? config[0] : config,
		lineHeight: Array.isArray(config) && config[1]?.lineHeight ? config[1].lineHeight : 'normal',
		letterSpacing: Array.isArray(config) && config[1]?.letterSpacing ? config[1].letterSpacing : 'normal'
	}));

	const spacingTokens = Object.entries(tokens.spacing || {}).map(([name, value]) => ({
		name,
		value
	}));

	const borderRadiusTokens = Object.entries(tokens.borderRadius || {}).map(([name, value]) => ({
		name,
		value
	}));

	const animationTokens = Object.entries(tokens.animation || {}).map(([name, value]) => ({
		name,
		value
	}));

	function isHexColor(str: string): boolean {
		return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
	}

	function isRgbColor(str: string): boolean {
		return str.includes('rgb') || str.includes('hsl');
	}

	function getTextColor(bgColor: string): string {
		if (!bgColor || (!isHexColor(bgColor) && !isRgbColor(bgColor))) {
			return '#000000';
		}

		// Simple contrast check - in a real implementation you'd want proper contrast calculation
		if (bgColor.includes('#')) {
			const hex = bgColor.replace('#', '');
			const r = parseInt(hex.substr(0, 2), 16);
			const g = parseInt(hex.substr(2, 2), 16);
			const b = parseInt(hex.substr(4, 2), 16);
			const brightness = (r * 299 + g * 587 + b * 114) / 1000;
			return brightness > 128 ? '#000000' : '#ffffff';
		}

		return '#000000';
	}
</script>

<Story>
	<Variant title="Brand Colors">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Brand Color Palette</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each brandColors as color}
					<div class="space-y-2">
						<div
							class="w-full h-20 rounded-brand border border-gray-200"
							style="background-color: {color.value}; color: {getTextColor(color.value)}"
						>
							<div class="p-2 h-full flex items-end">
								<span class="text-xs font-mono">{color.name}</span>
							</div>
						</div>
						<div class="text-xs font-mono text-gray-600">{color.value}</div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Terminal Colors">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Terminal Color Palette</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each terminalColors as color}
					<div class="space-y-2">
						<div
							class="w-full h-20 rounded-brand border border-gray-200"
							style="background-color: {color.value}; color: {getTextColor(color.value)}"
						>
							<div class="p-2 h-full flex items-end">
								<span class="text-xs font-mono">{color.name}</span>
							</div>
						</div>
						<div class="text-xs font-mono text-gray-600">{color.value}</div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Semantic Colors">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Semantic Color System</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each semanticColors as color}
					<div class="space-y-2">
						<div
							class="w-full h-16 rounded-brand border border-gray-200 flex items-center px-4"
							style="background-color: {color.value}; color: {getTextColor(color.value)}"
						>
							<span class="font-medium">{color.name}</span>
						</div>
						<div class="text-xs font-mono text-gray-600">{color.value}</div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Typography Scale">
		<div class="space-y-6">
			<h3 class="text-lg font-semibold">Typography System</h3>
			<div class="space-y-4">
				{#each fontSizes as font}
					<div class="border border-gray-200 rounded-brand p-4">
						<div class="mb-2">
							<span class="text-sm font-mono text-gray-600">
								{font.name}: {font.size} / {font.lineHeight} / {font.letterSpacing}
							</span>
						</div>
						<div
							class="font-sans"
							style="font-size: {font.size}; line-height: {font.lineHeight}; letter-spacing: {font.letterSpacing}"
						>
							The quick brown fox jumps over the lazy dog
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Spacing Scale">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Spacing System</h3>
			<div class="space-y-3">
				{#each spacingTokens as spacing}
					<div class="flex items-center gap-4">
						<div class="w-20 text-sm font-mono text-gray-600">{spacing.name}</div>
						<div class="flex items-center gap-2">
							<div
								class="bg-blue-200 border border-blue-300 rounded"
								style="width: {spacing.value}; height: 1rem"
							></div>
							<span class="text-sm font-mono text-gray-600">{spacing.value}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Border Radius">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Border Radius System</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each borderRadiusTokens as radius}
					<div class="space-y-2">
						<div class="w-16 h-16 bg-brand-primary border border-gray-200" style="border-radius: {radius.value}"></div>
						<div class="text-sm font-mono">
							<div class="font-medium">{radius.name}</div>
							<div class="text-gray-600">{radius.value}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Animations">
		<div class="space-y-4">
			<h3 class="text-lg font-semibold">Animation System</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each animationTokens as animation}
					<div class="border border-gray-200 rounded-brand p-4">
						<div class="mb-3">
							<div class="font-medium">{animation.name}</div>
							<div class="text-sm font-mono text-gray-600">{animation.value}</div>
						</div>
						<div
							class="w-16 h-16 bg-brand-primary rounded-brand"
							class:animate-fade-in={animation.name === 'fade-in'}
							class:animate-slide-up={animation.name === 'slide-up'}
							class:animate-scale-in={animation.name === 'scale-in'}
							class:animate-brand-float={animation.name === 'brand-float'}
							class:animate-shimmer={animation.name === 'shimmer'}
							class:animate-liquid-glow={animation.name === 'liquid-glow'}
							class:animate-liquid-flow={animation.name === 'liquid-flow'}
						></div>
					</div>
				{/each}
			</div>
		</div>
	</Variant>

	<Variant title="Usage Examples">
		<div class="space-y-6">
			<h3 class="text-lg font-semibold">Design Token Usage Examples</h3>

			<div class="space-y-4">
				<h4 class="font-medium">Color Usage</h4>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="bg-brand-primary text-white p-4 rounded-brand">
						<code class="text-sm">bg-brand-primary</code>
					</div>
					<div class="bg-terminal-bg text-terminal-fg p-4 rounded-brand">
						<code class="text-sm">bg-terminal-bg text-terminal-fg</code>
					</div>
					<div class="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-4 rounded-brand">
						<code class="text-sm">gradient brand colors</code>
					</div>
				</div>
			</div>

			<div class="space-y-4">
				<h4 class="font-medium">Typography Usage</h4>
				<div class="space-y-2">
					<div class="text-display">Display Text (text-display)</div>
					<div class="text-heading-1">Heading 1 (text-heading-1)</div>
					<div class="text-body-large">Body Large (text-body-large)</div>
					<div class="text-caption">Caption Text (text-caption)</div>
				</div>
			</div>

			<div class="space-y-4">
				<h4 class="font-medium">Spacing Usage</h4>
				<div class="flex flex-wrap items-center gap-4">
					<div class="p-4 bg-gray-100 rounded-brand">p-4</div>
					<div class="p-6 bg-gray-100 rounded-brand">p-6</div>
					<div class="p-8 bg-gray-100 rounded-brand">p-8</div>
				</div>
			</div>
		</div>
	</Variant>
</Story>
