import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Checkbox from '../Checkbox.svelte';

describe('Checkbox', () => {
	it('renders with label', () => {
		render(Checkbox, { label: 'Test checkbox' });
		expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument();
	});

	it('renders with description', () => {
		render(Checkbox, {
			label: 'Test checkbox',
			description: 'This is a description'
		});
		expect(screen.getByText('This is a description')).toBeInTheDocument();
	});

	it('can be checked and unchecked', async () => {
		const { component } = render(Checkbox, { label: 'Test checkbox' });
		const checkbox = screen.getByRole('checkbox');

		expect(checkbox).not.toBeChecked();

		await fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();

		await fireEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
	});

	it('calls onCheckedChange when checked state changes', async () => {
		const onCheckedChange = vi.fn();
		render(Checkbox, {
			label: 'Test checkbox',
			onCheckedChange
		});

		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);

		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});

	it('can be disabled', () => {
		render(Checkbox, {
			label: 'Test checkbox',
			disabled: true
		});

		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeDisabled();
	});

	it('shows required indicator', () => {
		render(Checkbox, {
			label: 'Test checkbox',
			required: true
		});

		expect(screen.getByText('*')).toBeInTheDocument();
	});

	it('shows error message', () => {
		render(Checkbox, {
			label: 'Test checkbox',
			error: 'This field is required'
		});

		expect(screen.getByText('This field is required')).toBeInTheDocument();
		expect(screen.getByRole('alert')).toBeInTheDocument();
	});

	it('supports indeterminate state', () => {
		render(Checkbox, {
			label: 'Test checkbox',
			indeterminate: true
		});

		const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
		expect(checkbox.indeterminate).toBe(true);
	});

	it('handles keyboard navigation', async () => {
		const onCheckedChange = vi.fn();
		render(Checkbox, {
			label: 'Test checkbox',
			onCheckedChange
		});

		const checkbox = screen.getByRole('checkbox');
		await fireEvent.keyDown(checkbox, { key: 'Enter' });

		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});

	it('applies correct variant classes', () => {
		const { container } = render(Checkbox, {
			label: 'Test checkbox',
			variant: 'terminal'
		});

		expect(container.querySelector('.bg-terminal-green\\/20')).toBeInTheDocument();
	});

	it('applies correct size classes', () => {
		const { container } = render(Checkbox, {
			label: 'Test checkbox',
			size: 'lg'
		});

		expect(container.querySelector('.w-6')).toBeInTheDocument();
		expect(container.querySelector('.h-6')).toBeInTheDocument();
	});

	it('applies glass blur effects', () => {
		const { container } = render(Checkbox, {
			label: 'Test checkbox',
			variant: 'glass',
			blur: 'lg'
		});

		expect(container.querySelector('.backdrop-blur-lg')).toBeInTheDocument();
	});

	it('prevents interaction when disabled', async () => {
		const onCheckedChange = vi.fn();
		render(Checkbox, {
			label: 'Test checkbox',
			disabled: true,
			onCheckedChange
		});

		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);

		expect(onCheckedChange).not.toHaveBeenCalled();
	});

	it('has proper accessibility attributes', () => {
		render(Checkbox, {
			label: 'Test checkbox',
			description: 'Test description',
			error: 'Test error'
		});

		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('aria-describedby');
		expect(checkbox).toHaveAttribute('aria-invalid', 'true');
	});

	it('clears indeterminate when checked', async () => {
		const onCheckedChange = vi.fn();
		const { component } = render(Checkbox, {
			label: 'Test checkbox',
			indeterminate: true,
			onCheckedChange
		});

		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);

		expect(onCheckedChange).toHaveBeenCalledWith(true);
		expect((checkbox as HTMLInputElement).indeterminate).toBe(false);
	});
});
