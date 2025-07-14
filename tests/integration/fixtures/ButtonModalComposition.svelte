<script lang="ts">
	import Button from '../../../src/lib/components/Button.svelte';
	import Modal from '../../../src/lib/components/Modal.svelte';
	
	let showModal = $state(false);
</script>

<Button onclick={() => showModal = true}>
	Open Modal
</Button>

<Modal bind:open={showModal}>
	<h2>Test Modal</h2>
	<p>This is a test modal for integration testing.</p>
	<Button onclick={() => showModal = false}>
		Close
	</Button>
</Modal>
