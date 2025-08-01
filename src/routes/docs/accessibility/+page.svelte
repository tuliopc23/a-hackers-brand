<script lang="ts">
	import { AccessibilityReport, Button, Badge, GlassCard } from '$lib/components';
	import { theme, contrastMode, themeConfig } from '$lib/stores/theme.js';
	import { getContrastRatio, meetsWCAG_AA, meetsWCAG_AAA, makeAccessible } from '$lib/utils/accessibility.js';

	let currentTheme = $state($theme);
	let currentContrast = $state($contrastMode);
	let config = $state($themeConfig);

	theme.subscribe((value) => {
		currentTheme = value;
	});

	contrastMode.subscribe((value) => {
		currentContrast = value;
	});

	themeConfig.subscribe((value) => {
		config = value;
	});

	// Examples of color combinations
	const colorExamples = $derived(() => [
		{
			name: 'Primary Button',
			fg: config.currentColors.text,
			bg: config.currentColors.primary,
			context: 'Interactive button text'
		},
		{
			name: 'Secondary Button',
			fg: config.currentColors.text,
			bg: config.currentColors.secondary,
			context: 'Secondary action button'
		},
		{
			name: 'Success Message',
			fg: config.currentColors.success,
			bg: config.currentColors.background,
			context: 'Success feedback text'
		},
		{
			name: 'Warning Alert',
			fg: config.currentColors.warning,
			bg: config.currentColors.surface,
			context: 'Warning message text'
		},
		{
			name: 'Error Text',
			fg: config.currentColors.error,
			bg: config.currentColors.background,
			context: 'Error message text'
		}
	]);

	const getComplianceLevel = (fg: string, bg: string) => {
		if (meetsWCAG_AAA(fg, bg)) return { level: 'AAA', color: 'success' };
		if (meetsWCAG_AA(fg, bg)) return { level: 'AA', color: 'success' };
		return { level: 'Fail', color: 'destructive' };
	};
</script>

<svelte:head>
	<title>Accessibility - A Hacker's Brand</title>
	<meta name="description" content="WCAG compliance and accessibility features in A Hacker's Brand design system" />
</svelte:head>

<div class="container mx-auto px-6 py-12 max-w-6xl">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold mb-4">Accessibility & WCAG Compliance</h1>
		<p class="text-xl text-gray-400 max-w-3xl mx-auto">
			Our design system prioritizes accessibility with WCAG AA/AAA compliant colors, high contrast modes, and
			comprehensive testing tools.
		</p>
	</div>

	<!-- Controls Section -->
	<div class="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
		<div class="glass-subtle p-4 rounded-xl">
			<div class="flex items-center gap-4">
				<span class="text-sm font-mono">Theme:</span>
				<Button
					variant={currentTheme === 'terminal' ? 'terminal' : 'outline'}
					size="sm"
					onclick={() => theme.setTerminal()}
				>
					Terminal
				</Button>
				<Button
					variant={currentTheme === 'bubbleTea' ? 'glass' : 'outline'}
					size="sm"
					onclick={() => theme.setBubbleTea()}
				>
					Bubble Tea
				</Button>
			</div>
		</div>

		<div class="glass-subtle p-4 rounded-xl">
			<div class="flex items-center gap-4">
				<span class="text-sm font-mono">Contrast:</span>
				<Button
					variant={currentContrast === 'normal' ? 'glass' : 'outline'}
					size="sm"
					onclick={() => contrastMode.setNormal()}
				>
					Normal
				</Button>
				<Button
					variant={currentContrast === 'high' ? 'glass' : 'outline'}
					size="sm"
					onclick={() => contrastMode.setHigh()}
				>
					High Contrast
				</Button>
			</div>
		</div>
	</div>

	<!-- Live Color Examples -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold mb-6">Live Color Examples</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each colorExamples as example}
				{@const ratio = getContrastRatio(example.fg, example.bg)}
				{@const compliance = getComplianceLevel(example.fg, example.bg)}

				<GlassCard class="p-6">
					<div class="space-y-4">
						<!-- Color Preview -->
						<div
							class="p-4 rounded-lg font-medium text-center"
							style="color: {example.fg}; background-color: {example.bg};"
						>
							{example.name}
						</div>

						<!-- Metrics -->
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span class="text-gray-400">Contrast Ratio:</span>
								<span class="font-mono">{ratio.toFixed(2)}:1</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-400">WCAG Level:</span>
								<Badge variant={compliance.color}>{compliance.level}</Badge>
							</div>
							<div class="text-xs text-gray-500">
								{example.context}
							</div>
						</div>
					</div>
				</GlassCard>
			{/each}
		</div>
	</section>

	<!-- Accessibility Report -->
	<section class="mb-16">
		<AccessibilityReport
			themeType={currentTheme}
			title="Comprehensive Accessibility Audit"
			showRecommendations={true}
		/>
	</section>

	<!-- Guidelines Section -->
	<section class="mb-16">
		<h2 class="text-2xl font-bold mb-6">Accessibility Features</h2>
		<div class="grid md:grid-cols-2 gap-8">
			<GlassCard class="p-6">
				<h3 class="text-xl font-semibold mb-4 text-green-400">✅ WCAG Compliance</h3>
				<ul class="space-y-2 text-gray-300">
					<li>• All colors meet WCAG AA standards (4.5:1 ratio)</li>
					<li>• High contrast mode provides AAA compliance (7:1 ratio)</li>
					<li>• UI components meet 3:1 contrast requirements</li>
					<li>• Focus indicators are clearly visible</li>
					<li>• No information conveyed by color alone</li>
				</ul>
			</GlassCard>

			<GlassCard class="p-6">
				<h3 class="text-xl font-semibold mb-4 text-blue-400">🔧 Developer Tools</h3>
				<ul class="space-y-2 text-gray-300">
					<li>• Built-in contrast ratio calculator</li>
					<li>• Accessibility testing utilities</li>
					<li>• Automatic color adjustments</li>
					<li>• WCAG grade reporting</li>
					<li>• High contrast mode generator</li>
				</ul>
			</GlassCard>

			<GlassCard class="p-6">
				<h3 class="text-xl font-semibold mb-4 text-purple-400">🎨 Design Tokens</h3>
				<ul class="space-y-2 text-gray-300">
					<li>• Semantic color naming</li>
					<li>• Consistent spacing and sizing</li>
					<li>• Accessible typography scales</li>
					<li>• Motion respects prefers-reduced-motion</li>
					<li>• High contrast variants for all colors</li>
				</ul>
			</GlassCard>

			<GlassCard class="p-6">
				<h3 class="text-xl font-semibold mb-4 text-pink-400">⌨️ Keyboard Navigation</h3>
				<ul class="space-y-2 text-gray-300">
					<li>• All interactive elements are focusable</li>
					<li>• Clear focus indicators</li>
					<li>• Logical tab order</li>
					<li>• Keyboard shortcuts documented</li>
					<li>• Screen reader friendly markup</li>
				</ul>
			</GlassCard>
		</div>
	</section>

	<!-- Usage Examples -->
	<section>
		<h2 class="text-2xl font-bold mb-6">Using Accessibility Utils</h2>
		<GlassCard class="p-6">
			<h3 class="text-lg font-semibold mb-4">Code Examples</h3>
			<div class="space-y-4">
				<div class="bg-black/30 p-4 rounded-lg">
					<div class="text-sm text-gray-400 mb-2">Check color contrast:</div>
					<pre class="text-green-400 font-mono text-sm"><code
							>{`import { getContrastRatio, meetsWCAG_AA } from 'a-hackers-brand';

const ratio = getContrastRatio('#ff6b9d', '#1a1a2e');
const isAccessible = meetsWCAG_AA('#ff6b9d', '#1a1a2e');
console.log(\`Contrast ratio: \${ratio}:1\`);
console.log(\`WCAG AA compliant: \${isAccessible}\`);`}</code
						></pre>
				</div>

				<div class="bg-black/30 p-4 rounded-lg">
					<div class="text-sm text-gray-400 mb-2">Auto-fix colors:</div>
					<pre class="text-green-400 font-mono text-sm"><code
							>{`import { makeAccessible } from 'a-hackers-brand';

// Automatically adjust color to meet WCAG AA
const accessibleColor = makeAccessible('#ff6b9d', '#1a1a2e');
// Returns: '#ff85b3' (lighter pink for better contrast)`}</code
						></pre>
				</div>

				<div class="bg-black/30 p-4 rounded-lg">
					<div class="text-sm text-gray-400 mb-2">Generate accessibility report:</div>
					<pre class="text-green-400 font-mono text-sm"><code
							>{`import { generateAccessibilityReport } from 'a-hackers-brand';

const colors = [{ name: 'Primary', hex: '#ff6b9d' }];
const backgrounds = [{ name: 'Background', hex: '#1a1a2e' }];
const report = generateAccessibilityReport(colors, backgrounds);`}</code
						></pre>
				</div>
			</div>
		</GlassCard>
	</section>
</div>

<style>
	.glass-subtle {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
