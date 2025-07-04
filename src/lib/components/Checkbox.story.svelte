<script>
	import { Hst } from '@histoire/plugin-svelte';
	import Checkbox from './Checkbox.svelte';

	let checked = false;
	let indeterminate = false;
	let disabled = false;
</script>

<Hst.Story title="Forms/Checkbox" group="Components">
	<Hst.Variant title="Default">
		<Checkbox
			bind:checked
			label="Accept terms and conditions"
			description="By checking this box, you agree to our terms of service and privacy policy."
		/>
	</Hst.Variant>

	<Hst.Variant title="Glass Variant">
		<div class="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl">
			<div class="space-y-4">
				<Checkbox
					variant="glass"
					label="Enable liquid glass effects"
					description="Experience advanced visual effects with glass morphism."
					blur="lg"
				/>
				<Checkbox
					variant="glass"
					checked={true}
					label="Animate interactions"
					description="Smooth magnetic hover and spring animations."
				/>
				<Checkbox
					variant="glass"
					indeterminate={true}
					label="Partially selected"
					description="Some items are selected in this group."
				/>
			</div>
		</div>
	</Hst.Variant>

	<Hst.Variant title="Terminal Variant">
		<div class="p-8 bg-black/80 backdrop-blur-sm rounded-2xl border border-terminal-green/30">
			<div class="space-y-4">
				<Checkbox
					variant="terminal"
					label="Enable terminal mode"
					description="Authentic hacker aesthetic with terminal colors."
				/>
				<Checkbox
					variant="terminal"
					checked={true}
					label="Show system logs"
					description="Display real-time system information."
				/>
				<Checkbox
					variant="terminal"
					disabled={true}
					label="Root access (disabled)"
					description="Elevated permissions required."
				/>
			</div>
		</div>
	</Hst.Variant>

	<Hst.Variant title="Sizes">
		<div class="space-y-6">
			<div class="space-y-2">
				<h3 class="text-white font-medium">Small</h3>
				<div class="space-y-2">
					<Checkbox size="sm" label="Small checkbox" />
					<Checkbox size="sm" checked={true} label="Small checked" />
					<Checkbox size="sm" indeterminate={true} label="Small indeterminate" />
				</div>
			</div>
			
			<div class="space-y-2">
				<h3 class="text-white font-medium">Medium (Default)</h3>
				<div class="space-y-2">
					<Checkbox size="md" label="Medium checkbox" />
					<Checkbox size="md" checked={true} label="Medium checked" />
					<Checkbox size="md" indeterminate={true} label="Medium indeterminate" />
				</div>
			</div>
			
			<div class="space-y-2">
				<h3 class="text-white font-medium">Large</h3>
				<div class="space-y-2">
					<Checkbox size="lg" label="Large checkbox" />
					<Checkbox size="lg" checked={true} label="Large checked" />
					<Checkbox size="lg" indeterminate={true} label="Large indeterminate" />
				</div>
			</div>
		</div>
	</Hst.Variant>

	<Hst.Variant title="States">
		<div class="space-y-4">
			<Checkbox label="Normal checkbox" />
			<Checkbox checked={true} label="Checked checkbox" />
			<Checkbox indeterminate={true} label="Indeterminate checkbox" />
			<Checkbox disabled={true} label="Disabled checkbox" />
			<Checkbox disabled={true} checked={true} label="Disabled checked" />
			<Checkbox
				error="This field is required"
				label="Checkbox with error"
				description="Please select this option to continue."
			/>
		</div>
	</Hst.Variant>

	<Hst.Variant title="With Required">
		<div class="space-y-4">
			<Checkbox
				required={true}
				label="Required field"
				description="This field must be checked to proceed."
			/>
			<Checkbox
				required={true}
				checked={true}
				label="Required field (checked)"
				description="Thank you for accepting the terms."
			/>
		</div>
	</Hst.Variant>

	<Hst.Variant title="Interactive Demo">
		<div class="space-y-8">
			<div class="space-y-4">
				<h3 class="text-white font-medium text-lg">Checkbox Controls</h3>
				<div class="flex gap-4">
					<Checkbox bind:checked label="Checked State" />
					<Checkbox bind:indeterminate label="Indeterminate State" />
					<Checkbox bind:disabled label="Disabled State" />
				</div>
			</div>
			
			<div class="space-y-4">
				<h3 class="text-white font-medium text-lg">Preview</h3>
				<Checkbox
					{checked}
					{indeterminate}
					{disabled}
					label="Dynamic Checkbox"
					description="This checkbox reflects the controls above."
					variant="glass"
					blur="md"
				/>
			</div>
		</div>
	</Hst.Variant>

	<Hst.Variant title="Form Example">
		<div class="max-w-md space-y-6">
			<div class="space-y-4">
				<h3 class="text-white font-medium text-lg">Account Settings</h3>
				<div class="space-y-3">
					<Checkbox
						variant="glass"
						label="Email notifications"
						description="Receive updates about your account via email."
					/>
					<Checkbox
						variant="glass"
						checked={true}
						label="Two-factor authentication"
						description="Add an extra layer of security to your account."
					/>
					<Checkbox
						variant="glass"
						label="Marketing emails"
						description="Receive promotional offers and product updates."
					/>
					<Checkbox
						variant="terminal"
						label="Developer mode"
						description="Enable advanced features for developers."
					/>
				</div>
			</div>
		</div>
	</Hst.Variant>

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={checked} title="Checked" />
		<Hst.Checkbox bind:value={indeterminate} title="Indeterminate" />
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
	</svelte:fragment>
</Hst.Story>