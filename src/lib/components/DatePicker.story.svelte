<script lang="ts">
	import DatePicker from './DatePicker.svelte';
	import { brandColors } from '$lib/tokens';

	let selectedDate = $state<Date | null>(null);
	let glassModeDate = $state<Date | null>(new Date());
	let terminalModeDate = $state<Date | null>(null);
	let rangeRestrictedDate = $state<Date | null>(null);

	// Date range constraints
	const today = new Date();
	const oneMonthFromNow = new Date();
	oneMonthFromNow.setMonth(today.getMonth() + 1);
	const oneMonthAgo = new Date();
	oneMonthAgo.setMonth(today.getMonth() - 1);

	function handleDateChange(event: CustomEvent<Date | null>) {
		selectedDate = event.detail;
		console.log('Date selected:', event.detail);
	}
</script>

<div class="space-y-8 p-6" style="background: {brandColors.backgrounds.primary}; min-height: 100vh;">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-white mb-2 font-mono">DatePicker Component</h1>
		<p class="text-gray-400">Advanced date selection with liquid glass terminal aesthetics</p>
	</div>

	<!-- Default Variant -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Default Variant</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Small Size</label>
				<DatePicker size="sm" placeholder="Select date..." />
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Medium Size (Default)</label>
				<DatePicker 
					bind:value={selectedDate}
					onchange={handleDateChange}
					placeholder="Pick a date..."
				/>
				{#if selectedDate}
					<p class="text-xs text-gray-400">Selected: {selectedDate.toLocaleDateString()}</p>
				{/if}
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Large Size</label>
				<DatePicker size="lg" placeholder="Choose date..." />
			</div>
		</div>
	</section>

	<!-- Glass Variant -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Glass Variant</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Glass Mode with Preset Value</label>
				<DatePicker 
					variant="glass" 
					bind:value={glassModeDate}
					placeholder="Glass date picker..."
				/>
				{#if glassModeDate}
					<p class="text-xs text-gray-400">Glass mode date: {glassModeDate.toLocaleDateString()}</p>
				{/if}
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Different Date Format</label>
				<DatePicker 
					variant="glass" 
					format="dd/MM/yyyy"
					placeholder="DD/MM/YYYY format..."
				/>
			</div>
		</div>
	</section>

	<!-- Terminal Variant -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Terminal Variant</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="space-y-2">
				<label class="block text-sm font-medium text-green-400">Matrix Terminal Mode</label>
				<DatePicker 
					variant="terminal" 
					bind:value={terminalModeDate}
					placeholder="Enter date coordinates..."
				/>
				{#if terminalModeDate}
					<p class="text-xs text-green-400">Terminal date: {terminalModeDate.toLocaleDateString()}</p>
				{/if}
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-green-400">ISO Format</label>
				<DatePicker 
					variant="terminal" 
					format="yyyy-MM-dd"
					placeholder="YYYY-MM-DD format..."
				/>
			</div>
		</div>
	</section>

	<!-- Advanced Features -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Advanced Features</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Date Range Restricted</label>
				<DatePicker 
					variant="glass"
					bind:value={rangeRestrictedDate}
					minDate={oneMonthAgo}
					maxDate={oneMonthFromNow}
					placeholder="Limited date range..."
				/>
				<p class="text-xs text-gray-400">
					Range: {oneMonthAgo.toLocaleDateString()} - {oneMonthFromNow.toLocaleDateString()}
				</p>
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">No Today Button</label>
				<DatePicker 
					variant="default"
					showToday={false}
					placeholder="No today shortcut..."
				/>
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Stay Open on Select</label>
				<DatePicker 
					variant="glass"
					closeOnSelect={false}
					placeholder="Stays open..."
				/>
			</div>
		</div>
	</section>

	<!-- States -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Component States</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Disabled State</label>
				<DatePicker 
					disabled={true}
					value={new Date()}
					placeholder="This is disabled..."
				/>
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Error State</label>
				<DatePicker 
					error={true}
					variant="default"
					placeholder="Error state..."
				/>
			</div>
			<div class="space-y-2">
				<label class="block text-sm font-medium text-gray-300">Glass Error</label>
				<DatePicker 
					error={true}
					variant="glass"
					placeholder="Glass error state..."
				/>
			</div>
		</div>
	</section>

	<!-- Interactive Demo -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Interactive Demo</h2>
		<div class="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
			<h3 class="text-lg font-medium text-white mb-4 font-mono">Event Handling Demo</h3>
			<div class="space-y-4">
				<DatePicker 
					variant="terminal"
					bind:value={selectedDate}
					placeholder="Select date to see events..."
					onchange={(e) => console.log('Change event:', e.detail)}
					onopen={() => console.log('DatePicker opened')}
					onclose={() => console.log('DatePicker closed')}
				/>
				
				{#if selectedDate}
					<div class="space-y-2">
						<p class="text-green-400 font-mono text-sm">
							✓ Selected Date: {selectedDate.toLocaleDateString()}
						</p>
						<p class="text-green-400 font-mono text-sm">
							✓ ISO Format: {selectedDate.toISOString().split('T')[0]}
						</p>
						<p class="text-green-400 font-mono text-sm">
							✓ Day of Week: {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
						</p>
					</div>
				{:else}
					<p class="text-gray-400 font-mono text-sm">No date selected</p>
				{/if}
			</div>
		</div>
	</section>

	<!-- Code Examples -->
	<section class="space-y-4">
		<h2 class="text-xl font-semibold text-white font-mono">Usage Examples</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<div class="bg-black/60 rounded-lg p-4 border border-gray-700">
				<h3 class="text-sm font-medium text-green-400 mb-2 font-mono">Basic Usage</h3>
				<pre class="text-xs text-gray-300 font-mono overflow-x-auto"><code>{`<DatePicker 
  bind:value={selectedDate}
  placeholder="Select date..."
  onchange={(e) => console.log(e.detail)}
/>`}</code></pre>
			</div>
			
			<div class="bg-black/60 rounded-lg p-4 border border-gray-700">
				<h3 class="text-sm font-medium text-green-400 mb-2 font-mono">Advanced Configuration</h3>
				<pre class="text-xs text-gray-300 font-mono overflow-x-auto"><code>{`<DatePicker 
  variant="terminal"
  format="yyyy-MM-dd"
  minDate={new Date()}
  maxDate={futureDate}
  showToday={false}
  closeOnSelect={false}
/>`}</code></pre>
			</div>
		</div>
	</section>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>