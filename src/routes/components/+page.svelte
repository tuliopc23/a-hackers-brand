<script>
	import { Button } from '$lib/components';
	import { Alert } from '$lib/components';
	import { Input } from '$lib/components';
	import { Modal } from '$lib/components';
	import { Tabs } from '$lib/components';
	import { Switch } from '$lib/components';
	import { Select } from '$lib/components';
	import { Progress } from '$lib/components';
	import { Dropdown } from '$lib/components';

	let showModal = $state(false);
	let activeTab = $state('tab1');
	let switchValue = $state(false);
	let selectValue = $state('');
	let inputValue = $state('');
	let dropdownValue = $state('');

	// Dropdown items
	const dropdownItems = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' }
	];
</script>

<svelte:head>
	<title>Components - A Hacker's Brand</title>
	<meta name="description" content="Explore all components in A Hacker's Brand design system" />
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<header class="mb-8">
		<h1 class="text-3xl font-bold mb-2">Components</h1>
		<p class="text-gray-600">Explore all components in A Hacker's Brand design system</p>
	</header>

	<div class="grid gap-8">
		<!-- Button Section -->
		<section data-component="button" class="button-showcase">
			<h2 class="text-2xl font-semibold mb-4">Buttons</h2>
			<div class="flex flex-wrap gap-4">
				<Button type="button" aria-label="Primary button">Primary</Button>
				<Button type="button" variant="secondary" aria-label="Secondary button">Secondary</Button>
				<Button type="button" variant="outline" aria-label="Outline button">Outline</Button>
				<Button type="button" disabled aria-label="Disabled button">Disabled</Button>
			</div>
		</section>

		<!-- Form Section -->
		<section data-component="form" class="form-showcase">
			<h2 class="text-2xl font-semibold mb-4">Form Components</h2>
			<div class="grid gap-6 max-w-md">
				<div>
					<label for="test-input" class="block text-sm font-medium mb-2">Test Input</label>
					<Input
						id="test-input"
						type="text"
						bind:value={inputValue}
						placeholder="Enter some text"
						aria-describedby="test-input-help"
					/>
					<p id="test-input-help" class="text-sm text-gray-600 mt-1">This is a helpful description</p>
				</div>

				<div>
					<label for="test-select" class="block text-sm font-medium mb-2">Test Select</label>
					<Select
						id="test-select"
						bind:value={selectValue}
						aria-describedby="test-select-help"
						aria-label="Test Select"
					>
						<option value="">Choose an option</option>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
					<p id="test-select-help" class="text-sm text-gray-600 mt-1">Select your preferred option</p>
				</div>

				<div>
					<Switch bind:checked={switchValue} aria-label="Toggle setting" aria-describedby="switch-help" />
					<label for="switch-help" class="ml-2">Enable feature</label>
					<p id="switch-help" class="text-sm text-gray-600 mt-1">This toggles a feature on or off</p>
				</div>
			</div>
		</section>

		<!-- Navigation Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Navigation</h2>
			<nav role="navigation" aria-label="Main navigation">
				<ul class="flex space-x-4">
					<li><a href="/" class="text-blue-600 hover:text-blue-800">Home</a></li>
					<li><a href="/docs" class="text-blue-600 hover:text-blue-800">Docs</a></li>
					<li><a href="/components" class="text-blue-600 hover:text-blue-800" aria-current="page">Components</a></li>
				</ul>
			</nav>
		</section>

		<!-- Tabs Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Tabs</h2>
			<Tabs bind:activeTab>
				<div role="tablist" aria-label="Example tabs">
					<button
						type="button"
						role="tab"
						aria-selected={activeTab === 'tab1'}
						aria-controls="panel1"
						id="tab1"
						onclick={() => (activeTab = 'tab1')}
						class="px-4 py-2 mr-2 border rounded {activeTab === 'tab1' ? 'bg-blue-600 text-white' : 'bg-gray-200'}"
					>
						Tab 1
					</button>
					<button
						type="button"
						role="tab"
						aria-selected={activeTab === 'tab2'}
						aria-controls="panel2"
						id="tab2"
						onclick={() => (activeTab = 'tab2')}
						class="px-4 py-2 mr-2 border rounded {activeTab === 'tab2' ? 'bg-blue-600 text-white' : 'bg-gray-200'}"
					>
						Tab 2
					</button>
				</div>
				<div
					id="panel1"
					role="tabpanel"
					aria-labelledby="tab1"
					class="mt-4 {activeTab === 'tab1' ? 'block' : 'hidden'}"
				>
					<p>Content for tab 1</p>
				</div>
				<div
					id="panel2"
					role="tabpanel"
					aria-labelledby="tab2"
					class="mt-4 {activeTab === 'tab2' ? 'block' : 'hidden'}"
				>
					<p>Content for tab 2</p>
				</div>
			</Tabs>
		</section>

		<!-- Modal Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Modal</h2>
			<Button type="button" onclick={() => (showModal = true)}>Open Modal</Button>
			{#if showModal}
				<Modal bind:open={showModal} aria-labelledby="modal-title" aria-describedby="modal-description">
					<h3 id="modal-title" class="text-xl font-semibold mb-4">Modal Title</h3>
					<p id="modal-description" class="mb-4">This is a modal dialog with proper accessibility attributes.</p>
					<div class="flex justify-end space-x-4">
						<Button type="button" variant="secondary" onclick={() => (showModal = false)}>Cancel</Button>
						<Button type="button" onclick={() => (showModal = false)}>Confirm</Button>
					</div>
				</Modal>
			{/if}
		</section>

		<!-- Alert Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Alerts</h2>
			<div class="space-y-4">
				<Alert role="alert" class="alert">
					<strong>Success:</strong> Your action was completed successfully.
				</Alert>
				<Alert role="alert" type="warning" class="alert">
					<strong>Warning:</strong> Please review your input.
				</Alert>
				<Alert role="alert" type="error" class="alert">
					<strong>Error:</strong> Something went wrong.
				</Alert>
			</div>
		</section>

		<!-- Progress Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Progress</h2>
			<Progress value={75} max={100} aria-label="Loading progress" />
		</section>

		<!-- Dropdown Section -->
		<section>
			<h2 class="text-2xl font-semibold mb-4">Dropdown</h2>
			<Dropdown
				items={dropdownItems}
				bind:value={dropdownValue}
				trigger="Choose an option"
				aria-label="Example dropdown"
				onselect={(value) => {
					dropdownValue = value;
				}}
			/>
		</section>
	</div>
</main>
