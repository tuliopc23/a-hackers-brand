<script lang="ts">
	import Input from '../../../src/lib/components/Input.svelte';
	import Toast from '../../../src/lib/components/Toast.svelte';
	
	let inputValue = $state('');
	let showToast = $state(false);
	let toastMessage = $state('');
	
	function validateInput() {
		if (inputValue === 'invalid') {
			toastMessage = 'Invalid input detected';
			showToast = true;
			setTimeout(() => showToast = false, 3000);
		}
	}
</script>

<Input 
	bind:value={inputValue}
	onblur={validateInput}
	placeholder="Enter text..."
/>

{#if showToast}
	<Toast variant="error">
		{toastMessage}
	</Toast>
{/if}
