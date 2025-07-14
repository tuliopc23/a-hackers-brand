<script lang="ts">
	import Card from '../../../src/lib/components/Card.svelte';
	import Tabs from '../../../src/lib/components/Tabs.svelte';
	
	const tabs = [
		{ id: 'tab1', label: 'Tab 1' },
		{ id: 'tab2', label: 'Tab 2' },
		{ id: 'tab3', label: 'Tab 3' }
	];
	
	let activeTab = $state('tab1');
</script>

<Card variant="glass">
	<Tabs {tabs} bind:activeTab>
		{#snippet children()}
			{#if activeTab === 'tab1'}
				<div>Tab 1 Content</div>
			{:else if activeTab === 'tab2'}
				<div>Tab 2 Content</div>
			{:else if activeTab === 'tab3'}
				<div>Tab 3 Content</div>
			{/if}
		{/snippet}
	</Tabs>
</Card>
