import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Input from '../Input.svelte';
import { testAllVariants, testAllSizes, testAccessibility } from '../../__tests__/test-utils';

describe('Input Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders with default props', () => {
			const { container } = render(Input, {
				props: { placeholder: 'Enter text...' }
			});

			const input = screen.getByPlaceholderText('Enter text...');
			expect(input).toBeInTheDocument();
			expect(input).toHaveAttribute('type', 'text');
		});

		it('renders with label', () => {
			const { container } = render(Input, {
				props: { label: 'Email', placeholder: 'your@email.com' }
			});

			const label = screen.getByText('Email');
			expect(label).toBeInTheDocument();
			expect(label).toHaveClass('text-sm', 'font-medium');
		});

		it('renders all variants correctly', async () => {
			await testAllVariants(Input, { placeholder: 'Test' }, (variant) => {
				const { container } = render(Input, {
					props: { variant, placeholder: 'Test' }
				});

				const wrapper = container.querySelector('.input-wrapper');
				expect(wrapper).toHaveClass(`input-${variant}`);
			});
		});

		it('renders all sizes correctly', async () => {
			await testAllSizes(Input, { placeholder: 'Test' }, (size) => {
				const { container } = render(Input, {
					props: { size, placeholder: 'Test' }
				});

				const input = screen.getByPlaceholderText('Test');
				expect(input).toHaveClass(`input-${size}`);
			});
		});
	});

	describe('Input Types', () => {
		const inputTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search'];

		inputTypes.forEach((type) => {
			it(`renders ${type} input correctly`, () => {
				const { container } = render(Input, {
					props: { type, placeholder: `Enter ${type}...` }
				});

				const input = screen.getByPlaceholderText(`Enter ${type}...`);
				expect(input).toHaveAttribute('type', type);
			});
		});
	});

	describe('States', () => {
		it('handles disabled state', () => {
			const { container } = render(Input, {
				props: { disabled: true, placeholder: 'Disabled' }
			});

			const input = screen.getByPlaceholderText('Disabled');
			expect(input).toBeDisabled();
			expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
		});

		it('handles readonly state', () => {
			const { container } = render(Input, {
				props: { readonly: true, value: 'Read only' }
			});

			const input = screen.getByDisplayValue('Read only');
			expect(input).toHaveAttribute('readonly');
		});

		it('shows error state', () => {
			const { container } = render(Input, {
				props: { error: 'Invalid email', placeholder: 'Email' }
			});

			const errorMessage = screen.getByText('Invalid email');
			expect(errorMessage).toBeInTheDocument();
			expect(errorMessage).toHaveClass('text-red-400');

			const wrapper = container.querySelector('.input-wrapper');
			expect(wrapper).toHaveClass('border-red-500/50');
		});

		it('shows success state', () => {
			const { container } = render(Input, {
				props: { success: 'Valid input', placeholder: 'Success' }
			});

			const successMessage = screen.getByText('Valid input');
			expect(successMessage).toBeInTheDocument();
			expect(successMessage).toHaveClass('text-green-400');

			const wrapper = container.querySelector('.input-wrapper');
			expect(wrapper).toHaveClass('border-green-500/50');
		});
	});

	describe('Interactions', () => {
		it('handles input changes', async () => {
			let value = '';
			const { container } = render(Input, {
				props: {
					value,
					oninput: (e: Event) => {
						value = (e.target as HTMLInputElement).value;
					}
				}
			});

			const input = screen.getByRole('textbox');
			await fireEvent.input(input, { target: { value: 'Hello world' } });

			expect(value).toBe('Hello world');
		});

		it('handles focus and blur events', async () => {
			const handleFocus = vi.fn();
			const handleBlur = vi.fn();

			const { container } = render(Input, {
				props: {
					onfocus: handleFocus,
					onblur: handleBlur,
					placeholder: 'Focus test'
				}
			});

			const input = screen.getByPlaceholderText('Focus test');

			await fireEvent.focus(input);
			expect(handleFocus).toHaveBeenCalledTimes(1);

			await fireEvent.blur(input);
			expect(handleBlur).toHaveBeenCalledTimes(1);
		});

		it('handles clear button click', async () => {
			let value = 'Clear me';
			const { container } = render(Input, {
				props: {
					value,
					clearable: true,
					oninput: (e: Event) => {
						value = (e.target as HTMLInputElement).value;
					}
				}
			});

			const clearButton = container.querySelector('[aria-label="Clear input"]');
			expect(clearButton).toBeInTheDocument();

			await fireEvent.click(clearButton!);
			expect(value).toBe('');
		});
	});

	describe('Icons', () => {
		it('renders with icon', () => {
			const { container } = render(Input, {
				props: { icon: '🔍', placeholder: 'Search...' }
			});

			const icon = screen.getByText('🔍');
			expect(icon).toBeInTheDocument();
		});

		it('positions icon correctly with iconPosition', () => {
			const { container } = render(Input, {
				props: {
					icon: '🔒',
					iconPosition: 'right',
					placeholder: 'Password'
				}
			});

			const icon = screen.getByText('🔒');
			const iconContainer = icon.parentElement;
			expect(iconContainer).toHaveClass('right-3');
		});
	});

	describe('Validation', () => {
		it('shows required indicator', () => {
			const { container } = render(Input, {
				props: {
					label: 'Email',
					required: true,
					placeholder: 'your@email.com'
				}
			});

			const requiredIndicator = screen.getByText('*');
			expect(requiredIndicator).toBeInTheDocument();
			expect(requiredIndicator).toHaveClass('text-red-400');
		});

		it('validates email type', async () => {
			const { container } = render(Input, {
				props: {
					type: 'email',
					placeholder: 'Email'
				}
			});

			const input = screen.getByPlaceholderText('Email') as HTMLInputElement;

			// Invalid email
			await fireEvent.input(input, { target: { value: 'invalid' } });
			expect(input.validity.valid).toBe(false);

			// Valid email
			await fireEvent.input(input, { target: { value: 'test@example.com' } });
			expect(input.validity.valid).toBe(true);
		});

		it('validates number type with min/max', async () => {
			const { container } = render(Input, {
				props: {
					type: 'number',
					min: 0,
					max: 100,
					placeholder: 'Number'
				}
			});

			const input = screen.getByPlaceholderText('Number') as HTMLInputElement;

			// Below min
			await fireEvent.input(input, { target: { value: '-10' } });
			expect(input.validity.valid).toBe(false);

			// Above max
			await fireEvent.input(input, { target: { value: '150' } });
			expect(input.validity.valid).toBe(false);

			// Valid range
			await fireEvent.input(input, { target: { value: '50' } });
			expect(input.validity.valid).toBe(true);
		});
	});

	describe('Accessibility', () => {
		it('has proper ARIA attributes', async () => {
			const { container } = render(Input, {
				props: {
					label: 'Email',
					placeholder: 'your@email.com',
					error: 'Invalid email'
				}
			});

			await testAccessibility(container);

			const input = screen.getByPlaceholderText('your@email.com');
			expect(input).toHaveAttribute('aria-invalid', 'true');
			expect(input).toHaveAttribute('aria-describedby');
		});

		it('associates label with input', () => {
			const { container } = render(Input, {
				props: {
					label: 'Username',
					placeholder: 'Enter username'
				}
			});

			const input = screen.getByPlaceholderText('Enter username');
			const label = screen.getByText('Username');

			const labelFor = label.getAttribute('for');
			const inputId = input.getAttribute('id');

			expect(labelFor).toBeTruthy();
			expect(inputId).toBeTruthy();
			expect(labelFor).toBe(inputId);
		});
	});

	describe('Custom Props', () => {
		it('applies custom className', () => {
			const { container } = render(Input, {
				props: { class: 'custom-input', placeholder: 'Custom' }
			});

			const wrapper = container.querySelector('.input-wrapper');
			expect(wrapper).toHaveClass('custom-input');
		});

		it('passes through additional props', () => {
			const { container } = render(Input, {
				props: {
					'data-testid': 'custom-input',
					autocomplete: 'off',
					placeholder: 'Test'
				}
			});

			const input = screen.getByPlaceholderText('Test');
			expect(input).toHaveAttribute('data-testid', 'custom-input');
			expect(input).toHaveAttribute('autocomplete', 'off');
		});
	});
});
