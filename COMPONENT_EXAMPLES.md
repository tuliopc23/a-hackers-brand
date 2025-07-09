# Component Usage Examples

This guide provides ready-to-use code examples for all A Hacker's Brand components. Copy and paste these examples directly into your project.

## Quick Start

```bash
npm install a-hackers-brand
```

```svelte
<script>
	import { Button, Card, Input } from 'a-hackers-brand';
</script>

<Card variant="glass">
	<h2>Welcome to A Hacker's Brand</h2>
	<Input placeholder="Enter your name..." />
	<Button variant="liquid">Get Started</Button>
</Card>
```

---

## Core Components

### Button Examples

#### Basic Buttons

```svelte
<script>
	import { Button } from 'a-hackers-brand';
</script>

<!-- Glass variant (default) -->
<Button>Default Glass</Button>

<!-- Terminal hacker style -->
<Button variant="terminal">Terminal Style</Button>

<!-- Liquid morphing effects -->
<Button variant="liquid">Liquid Effects</Button>

<!-- Neon cyberpunk style -->
<Button variant="neon">Neon Style</Button>
```

#### Interactive Buttons

```svelte
<script>
	import { Button } from 'a-hackers-brand';

	let loading = $state(false);

	const handleClick = () => {
		loading = true;
		setTimeout(() => (loading = false), 2000);
	};
</script>

<!-- Loading button -->
<Button {loading} onclick={handleClick}>
	{loading ? 'Processing...' : 'Submit'}
</Button>

<!-- With glow effects -->
<Button variant="liquid" glow={true}>Glowing Button</Button>

<!-- Disabled state -->
<Button disabled>Disabled Button</Button>

<!-- As link -->
<Button href="/dashboard" variant="terminal">Go to Dashboard</Button>
```

#### Button Sizes and Animations

```svelte
<script>
	import { Button } from 'a-hackers-brand';
</script>

<div class="flex gap-4 items-center">
	<!-- Different sizes -->
	<Button size="sm">Small</Button>
	<Button size="md">Medium</Button>
	<Button size="lg">Large</Button>
</div>

<div class="flex gap-4 mt-4">
	<!-- Animation controls -->
	<Button animated={false}>No Animation</Button>
	<Button jelly={true}>Jelly Effects</Button>
	<Button magnetic={true}>Magnetic Hover</Button>
</div>
```

---

### Card Examples

#### Basic Cards

```svelte
<script>
	import { Card } from 'a-hackers-brand';
</script>

<!-- Glass morphism card -->
<Card variant="glass" class="p-6">
	<h3 class="text-xl font-bold mb-2">Glass Card</h3>
	<p class="text-white/80">Beautiful glass morphism effects with backdrop blur.</p>
</Card>

<!-- Terminal themed card -->
<Card variant="terminal" class="p-6">
	<h3 class="text-green-400 font-mono">Terminal Card</h3>
	<p class="text-green-300/80">Retro hacker aesthetics with green glow.</p>
</Card>
```

#### Interactive Cards

```svelte
<script>
	import { Card, Button } from 'a-hackers-brand';

	let hovering = $state(false);
</script>

<!-- Hoverable card with dynamic effects -->
<Card
	variant="liquid"
	hoverable={true}
	glow={hovering}
	class="p-6 cursor-pointer transition-all duration-300"
	onmouseenter={() => (hovering = true)}
	onmouseleave={() => (hovering = false)}
>
	<h3 class="text-xl font-bold mb-4">Interactive Card</h3>
	<p class="mb-4">Hover me to see liquid effects!</p>
	<Button variant="liquid" size="sm">Action</Button>
</Card>
```

#### Card Layouts

```svelte
<script>
	import { Card } from 'a-hackers-brand';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	<!-- Feature cards -->
	<Card variant="glass" class="p-6">
		<div class="w-12 h-12 bg-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">🚀</div>
		<h3 class="font-semibold mb-2">Performance</h3>
		<p class="text-sm text-white/70">Lightning fast with optimized animations</p>
	</Card>

	<Card variant="terminal" class="p-6">
		<div class="w-12 h-12 bg-green-500/20 rounded-lg mb-4 flex items-center justify-center">💻</div>
		<h3 class="font-semibold mb-2">Developer Experience</h3>
		<p class="text-sm text-green-300/70">Built for modern development workflows</p>
	</Card>

	<Card variant="neon" class="p-6">
		<div class="w-12 h-12 bg-pink-500/20 rounded-lg mb-4 flex items-center justify-center">✨</div>
		<h3 class="font-semibold mb-2">Beautiful Design</h3>
		<p class="text-sm text-pink-300/70">Stunning visual effects out of the box</p>
	</Card>
</div>
```

---

### Form Components

#### Input Examples

```svelte
<script>
	import { Input } from 'a-hackers-brand';

	let email = $state('');
	let password = $state('');
	let search = $state('');
	let emailError = $state('');

	const validateEmail = () => {
		const isValid = email.includes('@');
		emailError = isValid ? '' : 'Please enter a valid email';
	};
</script>

<!-- Basic inputs -->
<div class="space-y-4">
	<Input
		bind:value={email}
		type="email"
		placeholder="Enter your email..."
		label="Email Address"
		error={emailError}
		onblur={validateEmail}
	/>

	<Input bind:value={password} type="password" placeholder="Enter password..." label="Password" variant="terminal" />

	<Input bind:value={search} type="search" placeholder="Search..." variant="liquid" icon="🔍" />
</div>
```

#### Radio Button Examples

```svelte
<script>
	import { Radio } from 'a-hackers-brand';

	let theme = $state('dark');
	let plan = $state('pro');

	const themeOptions = [
		{ value: 'light', label: 'Light Mode', description: 'Clean and minimal' },
		{ value: 'dark', label: 'Dark Mode', description: 'Easy on the eyes' },
		{ value: 'auto', label: 'Auto', description: 'Follows system preference' }
	];

	const planOptions = [
		{ value: 'free', label: 'Free Plan', description: 'Perfect for getting started' },
		{ value: 'pro', label: 'Pro Plan', description: 'Advanced features included' },
		{ value: 'enterprise', label: 'Enterprise', description: 'Full-scale solution' }
	];
</script>

<!-- Vertical radio group -->
<Radio bind:value={theme} options={themeOptions} name="theme" variant="glass" label="Choose Theme" />

<!-- Horizontal radio group -->
<Radio bind:value={plan} options={planOptions} name="plan" variant="terminal" orientation="horizontal" class="mt-6" />
```

#### Switch Examples

```svelte
<script>
	import { Switch } from 'a-hackers-brand';

	let notifications = $state(true);
	let darkMode = $state(false);
	let autoSave = $state(true);
</script>

<div class="space-y-4">
	<!-- Basic switch -->
	<Switch bind:checked={notifications} label="Enable Notifications" description="Receive updates about your account" />

	<!-- Terminal style switch -->
	<Switch bind:checked={darkMode} label="Dark Mode" variant="terminal" glow={true} />

	<!-- Liquid style switch -->
	<Switch bind:checked={autoSave} label="Auto-save" variant="liquid" size="lg" />
</div>
```

---

### Navigation Components

#### Dropdown Menu

```svelte
<script>
	import { Dropdown } from 'a-hackers-brand';

	const menuItems = [
		{ label: 'Profile', value: 'profile', icon: '👤' },
		{ label: 'Settings', value: 'settings', icon: '⚙️' },
		{ divider: true },
		{ label: 'Sign Out', value: 'logout', icon: '🚪' }
	];

	const handleSelect = (value) => {
		console.log('Selected:', value);
	};
</script>

<!-- User menu dropdown -->
<Dropdown items={menuItems} trigger="Account" variant="glass" position="bottom" onselect={handleSelect} />

<!-- Terminal style dropdown -->
<Dropdown
	items={[
		{ label: 'New Terminal', value: 'new' },
		{ label: 'Split Pane', value: 'split' },
		{ label: 'Settings', value: 'settings' }
	]}
	trigger="Terminal >"
	variant="terminal"
	glow={true}
/>
```

#### Pagination

```svelte
<script>
	import { Pagination } from 'a-hackers-brand';

	let currentPage = $state(1);
	let totalPages = 25;

	const handlePageChange = (page) => {
		currentPage = page;
		console.log('Navigate to page:', page);
	};
</script>

<!-- Basic pagination -->
<Pagination bind:currentPage {totalPages} onchange={handlePageChange} />

<!-- Terminal style with more siblings -->
<Pagination bind:currentPage {totalPages} variant="terminal" siblingCount={2} glow={true} class="mt-4" />
```

---

### Feedback Components

#### Alert Examples

```svelte
<script>
	import { Alert } from 'a-hackers-brand';

	let showAlert = $state(true);
</script>

{#if showAlert}
	<!-- Success alert -->
	<Alert
		variant="success"
		title="Success!"
		description="Your changes have been saved successfully."
		closable={true}
		onclose={() => (showAlert = false)}
	/>
{/if}

<!-- Error alert -->
<Alert
	variant="error"
	title="Error"
	description="Something went wrong. Please try again."
	position="fixed"
	placement="top-right"
/>

<!-- Terminal alert -->
<Alert variant="terminal" title="System Status" description="All systems operational" glow={true} />
```

#### Tooltip Examples

```svelte
<script>
	import { Tooltip, Button } from 'a-hackers-brand';
</script>

<!-- Basic tooltip -->
<Tooltip text="This is a helpful tooltip" position="top">
	<Button>Hover me</Button>
</Tooltip>

<!-- Terminal style tooltip -->
<Tooltip text="System information: CPU 45%, RAM 67%" variant="terminal" position="bottom" delay={200}>
	<Button variant="terminal">System Stats</Button>
</Tooltip>

<!-- Liquid tooltip with custom positioning -->
<Tooltip text="Advanced liquid glass effects with smart positioning" variant="liquid" position="right" arrow={true}>
	<Button variant="liquid">Advanced Features</Button>
</Tooltip>
```

#### Skeleton Loading

```svelte
<script>
	import { Skeleton, Card } from 'a-hackers-brand';

	let loading = $state(true);

	// Simulate loading
	setTimeout(() => (loading = false), 3000);
</script>

{#if loading}
	<!-- Content skeleton -->
	<Card variant="glass" class="p-6">
		<Skeleton type="text" lines={1} class="mb-4" />
		<Skeleton type="paragraph" lines={3} class="mb-6" />
		<Skeleton type="button" width="120px" height="40px" />
	</Card>

	<!-- Profile skeleton -->
	<Card variant="terminal" class="p-6 mt-4">
		<div class="flex items-center gap-4 mb-4">
			<Skeleton type="avatar" variant="terminal" />
			<div class="flex-1">
				<Skeleton type="text" lines={2} variant="terminal" />
			</div>
		</div>
		<Skeleton type="image" height="200px" variant="terminal" />
	</Card>
{:else}
	<!-- Actual content -->
	<Card variant="glass" class="p-6">
		<h2 class="text-xl font-bold mb-4">Welcome Back!</h2>
		<p class="mb-6">Your dashboard is ready with all the latest updates.</p>
		<Button>View Dashboard</Button>
	</Card>
{/if}
```

---

## Advanced Patterns

### Form Validation

```svelte
<script>
	import { Input, Button, Alert, Card } from 'a-hackers-brand';

	let formData = $state({
		email: '',
		password: '',
		confirmPassword: ''
	});

	let errors = $state({});
	let isSubmitting = $state(false);
	let submitSuccess = $state(false);

	const validateForm = () => {
		errors = {};

		if (!formData.email.includes('@')) {
			errors.email = 'Please enter a valid email';
		}

		if (formData.password.length < 8) {
			errors.password = 'Password must be at least 8 characters';
		}

		if (formData.password !== formData.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}

		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async () => {
		if (!validateForm()) return;

		isSubmitting = true;

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			submitSuccess = true;
		} catch (error) {
			errors.submit = 'Something went wrong. Please try again.';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<Card variant="glass" class="max-w-md mx-auto p-6">
	<h2 class="text-2xl font-bold mb-6 text-center">Create Account</h2>

	{#if submitSuccess}
		<Alert variant="success" title="Account Created!" description="Welcome to A Hacker's Brand" />
	{:else}
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<Input
				bind:value={formData.email}
				type="email"
				placeholder="your@email.com"
				label="Email"
				error={errors.email}
				variant="glass"
			/>

			<Input
				bind:value={formData.password}
				type="password"
				placeholder="Password"
				label="Password"
				error={errors.password}
				variant="glass"
			/>

			<Input
				bind:value={formData.confirmPassword}
				type="password"
				placeholder="Confirm Password"
				label="Confirm Password"
				error={errors.confirmPassword}
				variant="glass"
			/>

			{#if errors.submit}
				<Alert variant="error" description={errors.submit} />
			{/if}

			<Button type="submit" variant="liquid" loading={isSubmitting} disabled={isSubmitting} class="w-full">
				{isSubmitting ? 'Creating Account...' : 'Create Account'}
			</Button>
		</form>
	{/if}
</Card>
```

### Data Table with Pagination

```svelte
<script>
	import { Card, Pagination, Skeleton, Input } from 'a-hackers-brand';

	let users = $state([]);
	let loading = $state(true);
	let currentPage = $state(1);
	let searchTerm = $state('');

	const pageSize = 10;

	// Simulate data loading
	const loadUsers = async () => {
		loading = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));

		users = Array.from({ length: 50 }, (_, i) => ({
			id: i + 1,
			name: `User ${i + 1}`,
			email: `user${i + 1}@example.com`,
			status: Math.random() > 0.5 ? 'active' : 'inactive',
			lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
		}));

		loading = false;
	};

	// Filter and paginate data
	const filteredUsers = $derived(() => {
		if (!searchTerm) return users;
		return users.filter(
			(user) =>
				user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});

	const paginatedUsers = $derived(() => {
		const start = (currentPage - 1) * pageSize;
		return filteredUsers.slice(start, start + pageSize);
	});

	const totalPages = $derived(() => Math.ceil(filteredUsers.length / pageSize));

	// Load data on mount
	loadUsers();
</script>

<Card variant="glass" class="p-6">
	<div class="flex justify-between items-center mb-6">
		<h2 class="text-xl font-bold">Users</h2>
		<Input bind:value={searchTerm} placeholder="Search users..." variant="glass" class="w-64" />
	</div>

	{#if loading}
		<!-- Loading skeleton -->
		<div class="space-y-4">
			{#each Array(5) as _}
				<div class="flex items-center gap-4 p-4 border border-white/10 rounded-lg">
					<Skeleton type="avatar" />
					<div class="flex-1">
						<Skeleton type="text" lines={2} />
					</div>
					<Skeleton type="button" width="80px" />
				</div>
			{/each}
		</div>
	{:else}
		<!-- User table -->
		<div class="space-y-2">
			{#each paginatedUsers as user}
				<div class="flex items-center gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
					<div
						class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold"
					>
						{user.name.charAt(0)}
					</div>

					<div class="flex-1">
						<h3 class="font-semibold">{user.name}</h3>
						<p class="text-sm text-white/60">{user.email}</p>
					</div>

					<div class="text-sm">
						<span
							class="inline-block px-2 py-1 rounded text-xs {user.status === 'active'
								? 'bg-green-500/20 text-green-400'
								: 'bg-gray-500/20 text-gray-400'}"
						>
							{user.status}
						</span>
					</div>

					<div class="text-sm text-white/60">
						{user.lastLogin.toLocaleDateString()}
					</div>
				</div>
			{/each}
		</div>

		{#if totalPages > 1}
			<div class="mt-6">
				<Pagination bind:currentPage {totalPages} variant="glass" />
			</div>
		{/if}
	{/if}
</Card>
```

### Dashboard Layout

```svelte
<script>
	import { Card, Button, Alert, Skeleton } from 'a-hackers-brand';

	let stats = $state({
		users: 1234,
		revenue: 56789,
		orders: 890,
		growth: 12.5
	});

	let loading = $state(true);

	setTimeout(() => (loading = false), 1500);
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="flex justify-between items-center mb-8">
			<h1 class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
				Dashboard
			</h1>
			<Button variant="liquid">New Project</Button>
		</div>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			{#if loading}
				{#each Array(4) as _}
					<Card variant="glass" class="p-6">
						<Skeleton type="text" lines={2} />
					</Card>
				{/each}
			{:else}
				<Card variant="glass" class="p-6">
					<h3 class="text-sm text-white/60 mb-2">Total Users</h3>
					<p class="text-2xl font-bold">{stats.users.toLocaleString()}</p>
					<p class="text-green-400 text-sm">+{stats.growth}% from last month</p>
				</Card>

				<Card variant="terminal" class="p-6">
					<h3 class="text-sm text-green-400/60 mb-2">Revenue</h3>
					<p class="text-2xl font-bold text-green-400">${stats.revenue.toLocaleString()}</p>
					<p class="text-green-300/60 text-sm">+8.2% from last month</p>
				</Card>

				<Card variant="liquid" class="p-6">
					<h3 class="text-sm text-white/60 mb-2">Orders</h3>
					<p class="text-2xl font-bold">{stats.orders.toLocaleString()}</p>
					<p class="text-blue-400 text-sm">+15.3% from last month</p>
				</Card>

				<Card variant="neon" class="p-6">
					<h3 class="text-sm text-pink-400/60 mb-2">Growth Rate</h3>
					<p class="text-2xl font-bold text-pink-400">{stats.growth}%</p>
					<p class="text-pink-300/60 text-sm">Steady growth</p>
				</Card>
			{/if}
		</div>

		<!-- Main Content -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Chart Area -->
			<Card variant="glass" class="lg:col-span-2 p-6">
				<h3 class="text-lg font-semibold mb-4">Analytics Overview</h3>
				{#if loading}
					<Skeleton type="image" height="300px" />
				{:else}
					<div
						class="h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-white/10 flex items-center justify-center"
					>
						<p class="text-white/60">Chart placeholder - integrate with your favorite charting library</p>
					</div>
				{/if}
			</Card>

			<!-- Sidebar -->
			<div class="space-y-6">
				<!-- Recent Activity -->
				<Card variant="terminal" class="p-6">
					<h3 class="text-lg font-semibold text-green-400 mb-4">Recent Activity</h3>
					{#if loading}
						<Skeleton type="paragraph" lines={4} variant="terminal" />
					{:else}
						<div class="space-y-3 text-sm">
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-green-400 rounded-full"></div>
								<span>New user registered</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
								<span>Payment processed</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="w-2 h-2 bg-red-400 rounded-full"></div>
								<span>Error in module X</span>
							</div>
						</div>
					{/if}
				</Card>

				<!-- System Status -->
				<Alert variant="terminal" title="System Status" description="All systems operational" glow={true} />
			</div>
		</div>
	</div>
</div>
```

---

## Motion System Examples

### Custom Animations

```svelte
<script>
	import { Card, Button } from 'a-hackers-brand';
	import { glassFade, liquidBlur, springPop, jellyHover } from 'a-hackers-brand/motion';

	let visible = $state(true);
</script>

<!-- Glass fade transition -->
<Card variant="glass" class="p-6">
	{#if visible}
		<div transition:glassFade={{ duration: 500 }}>
			<h3 class="mb-4">Glass Fade Effect</h3>
			<Button onclick={() => (visible = false)}>Hide</Button>
		</div>
	{:else}
		<Button onclick={() => (visible = true)}>Show</Button>
	{/if}
</Card>

<!-- Liquid blur effects -->
<Card variant="liquid" class="p-6 mt-6">
	<div use:jellyHover={{ scale: 1.02, duration: 300 }} class="p-4 bg-white/10 rounded-lg cursor-pointer">
		<h3>Hover for jelly effect</h3>
	</div>
</Card>

<!-- Spring pop interaction -->
<div class="mt-6">
	<Button use:springPop={{ scale: 0.95, duration: 200 }} variant="neon">Spring Pop Button</Button>
</div>
```

---

## TypeScript Examples

### Fully Typed Component Usage

```typescript
// types.ts
import type { ButtonProps, CardProps, InputProps } from 'a-hackers-brand';

interface FormData {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Component with proper typing
<script lang="ts">
  import { Button, Card, Input } from 'a-hackers-brand';
  import type { ButtonProps } from 'a-hackers-brand';

  let formData: FormData = $state({
    email: '',
    password: ''
  });

  const buttonProps: Partial<ButtonProps> = {
    variant: 'liquid',
    size: 'lg',
    animated: true,
    jelly: true
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };
</script>

<Card variant="glass" class="p-6">
  <form on:submit={handleSubmit}>
    <Input
      bind:value={formData.email}
      type="email"
      required
    />
    <Button {...buttonProps} type="submit">
      Submit
    </Button>
  </form>
</Card>
```

---

## Performance Tips

### Optimized Usage

```svelte
<script>
	import { Button, Card } from 'a-hackers-brand';

	// Disable animations for better performance on low-end devices
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	let items = $state(Array.from({ length: 100 }, (_, i) => ({ id: i, name: `Item ${i}` })));
</script>

<!-- Use static variants for lists -->
{#each items as item}
	<Card variant="glass" animated={false} class="p-4 mb-2">
		{item.name}
	</Card>
{/each}

<!-- Enable animations only for interactive elements -->
<Button variant="liquid" animated={!prefersReducedMotion} jelly={!prefersReducedMotion}>Interactive Button</Button>
```

---

This completes the comprehensive component usage examples. Each example is production-ready and can be copied directly into your project. Remember to install the package and import the components you need!
