<script lang="ts">
	import { Badge } from '$lib/components';
	import {
		generateAccessibilityReport,
		getContrastRatio,
		getAccessibilityGrade,
		type ColorAccessibilityReport
	} from '$lib/utils/accessibility.js';
	import { themeConfigs } from '$lib/stores/theme.js';
	import type { ThemeType } from '$lib/stores/theme.js';

	interface Props {
		themeType: ThemeType;
		title?: string;
		showRecommendations?: boolean;
		class?: string;
	}

	const {
		themeType,
		title = 'Color Accessibility Report',
		showRecommendations = true,
		class: className = ''
	}: Props = $props();

	// Generate color combinations for testing
	const colors = $derived(() => {
		const config = themeConfigs[themeType];
		return [
			{ name: 'Primary', hex: config.colors.primary },
			{ name: 'Secondary', hex: config.colors.secondary },
			{ name: 'Accent', hex: config.colors.accent },
			{ name: 'Success', hex: config.colors.success },
			{ name: 'Warning', hex: config.colors.warning },
			{ name: 'Error', hex: config.colors.error },
			{ name: 'Info', hex: config.colors.info },
			{ name: 'Text', hex: config.colors.text }
		];
	});

	const backgrounds = $derived(() => {
		const config = themeConfigs[themeType];
		return [
			{ name: 'Background', hex: config.colors.background },
			{ name: 'Surface', hex: config.colors.surface }
		];
	});

	const report = $derived(() => generateAccessibilityReport(colors(), backgrounds()));

	const getGradeColor = (grade: string) => {
		switch (grade) {
			case 'AAA':
				return 'success';
			case 'AA':
				return 'success';
			case 'A':
				return 'warning';
			case 'Fail':
				return 'error';
			default:
				return 'secondary';
		}
	};

	const getGradeIcon = (grade: string) => {
		switch (grade) {
			case 'AAA':
				return '🏆';
			case 'AA':
				return '✅';
			case 'A':
				return '⚠️';
			case 'Fail':
				return '❌';
			default:
				return '❓';
		}
	};
</script>

<div class="space-y-6 {className}">
	<div class="text-center">
		<h2 class="text-2xl font-bold mb-2">{title}</h2>
		<p class="text-gray-400">
			Testing {themeType === 'terminal' ? 'Terminal' : 'Bubble Tea'} theme for WCAG compliance
		</p>
	</div>

	<!-- Summary Stats -->
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
		{#snippet summaryStats()}
			{@const reportData = report()}
			{@const passAA = reportData.filter((r) => r.normalText === 'AA' || r.normalText === 'AAA').length}
			{@const passAAA = reportData.filter((r) => r.normalText === 'AAA').length}
			{@const failCount = reportData.filter((r) => r.normalText === 'Fail').length}
			{@const uiPass = reportData.filter((r) => r.uiComponent).length}
			<div class="glass-subtle p-4 rounded-lg">
				<div class="text-2xl font-bold text-green-400">{passAA}</div>
				<div class="text-sm text-gray-400">AA Compliant</div>
			</div>
			<div class="glass-subtle p-4 rounded-lg">
				<div class="text-2xl font-bold text-cyan-400">{passAAA}</div>
				<div class="text-sm text-gray-400">AAA Compliant</div>
			</div>
			<div class="glass-subtle p-4 rounded-lg">
				<div class="text-2xl font-bold {failCount > 0 ? 'text-red-400' : 'text-green-400'}">{failCount}</div>
				<div class="text-sm text-gray-400">Failing</div>
			</div>
			<div class="glass-subtle p-4 rounded-lg">
				<div class="text-2xl font-bold text-blue-400">{uiPass}</div>
				<div class="text-sm text-gray-400">UI Compliant</div>
			</div>
		{/snippet}
		{@render summaryStats()}
	</div>

	<!-- Detailed Report Table -->
	<div class="glass-subtle rounded-lg overflow-hidden">
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead class="bg-white/5">
					<tr>
						<th class="px-4 py-3 text-left font-semibold">Color Combination</th>
						<th class="px-4 py-3 text-center font-semibold">Preview</th>
						<th class="px-4 py-3 text-center font-semibold">Ratio</th>
						<th class="px-4 py-3 text-center font-semibold">Normal Text</th>
						<th class="px-4 py-3 text-center font-semibold">Large Text</th>
						<th class="px-4 py-3 text-center font-semibold">UI</th>
						{#if showRecommendations}
							<th class="px-4 py-3 text-left font-semibold">Notes</th>
						{/if}
					</tr>
				</thead>
				<tbody>
					{#each report() as item, index (item.combination || index)}
						<tr class="border-t border-white/10 hover:bg-white/5">
							<td class="px-4 py-3 font-medium">{item.combination}</td>
							<td class="px-4 py-3 text-center">
								<div
									class="inline-flex items-center px-3 py-1 rounded text-sm font-medium"
									style="color: {item.foreground}; background-color: {item.background};"
								>
									Sample Text
								</div>
							</td>
							<td class="px-4 py-3 text-center font-mono">
								{item.ratio}:1
							</td>
							<td class="px-4 py-3 text-center">
								<Badge variant={getGradeColor(item.normalText)}>
									{getGradeIcon(item.normalText)}
									{item.normalText}
								</Badge>
							</td>
							<td class="px-4 py-3 text-center">
								<Badge variant={getGradeColor(item.largeText)}>
									{getGradeIcon(item.largeText)}
									{item.largeText}
								</Badge>
							</td>
							<td class="px-4 py-3 text-center">
								<Badge variant={item.uiComponent ? 'success' : 'error'}>
									{item.uiComponent ? '✅' : '❌'}
								</Badge>
							</td>
							{#if showRecommendations}
								<td class="px-4 py-3 text-xs text-gray-400">
									{item.recommendations || 'Good contrast'}
								</td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- WCAG Guidelines Reference -->
	<div class="glass-subtle p-4 rounded-lg">
		<h3 class="font-semibold mb-2">WCAG Contrast Requirements</h3>
		<div class="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
			<div>
				<h4 class="font-medium text-white mb-1">Level AA (Required)</h4>
				<ul class="space-y-1">
					<li>• Normal text: 4.5:1 ratio</li>
					<li>• Large text: 3:1 ratio</li>
					<li>• UI components: 3:1 ratio</li>
				</ul>
			</div>
			<div>
				<h4 class="font-medium text-white mb-1">Level AAA (Enhanced)</h4>
				<ul class="space-y-1">
					<li>• Normal text: 7:1 ratio</li>
					<li>• Large text: 4.5:1 ratio</li>
					<li>• Graphical objects: 3:1 ratio</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.glass-subtle {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
