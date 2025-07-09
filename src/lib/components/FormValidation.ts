// Form Validation Utilities
// Comprehensive validation system for Liquid UI forms

export interface ValidationRule {
	test: (value: any) => boolean;
	message: string;
}

export interface ValidationResult {
	isValid: boolean;
	errors: string[];
}

export interface FieldValidation {
	rules: ValidationRule[];
	required?: boolean;
	trim?: boolean;
}

export interface FormValidation {
	[fieldName: string]: FieldValidation;
}

// Built-in validation rules
export const validationRules = {
	required: (message: string = 'This field is required'): ValidationRule => ({
		test: (value) => value !== undefined && value !== null && value !== '',
		message
	}),

	minLength: (min: number, message?: string): ValidationRule => ({
		test: (value) => !value || value.length >= min,
		message: message || `Must be at least ${min} characters`
	}),

	maxLength: (max: number, message?: string): ValidationRule => ({
		test: (value) => !value || value.length <= max,
		message: message || `Must be no more than ${max} characters`
	}),

	email: (message: string = 'Must be a valid email address'): ValidationRule => ({
		test: (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
		message
	}),

	url: (message: string = 'Must be a valid URL'): ValidationRule => ({
		test: (value) => !value || /^https?:\/\/.+\..+/.test(value),
		message
	}),

	pattern: (regex: RegExp, message: string): ValidationRule => ({
		test: (value) => !value || regex.test(value),
		message
	}),

	numeric: (message: string = 'Must be a number'): ValidationRule => ({
		test: (value) => !value || !isNaN(Number(value)),
		message
	}),

	integer: (message: string = 'Must be a whole number'): ValidationRule => ({
		test: (value) => !value || (Number.isInteger(Number(value)) && !isNaN(Number(value))),
		message
	}),

	min: (min: number, message?: string): ValidationRule => ({
		test: (value) => !value || Number(value) >= min,
		message: message || `Must be at least ${min}`
	}),

	max: (max: number, message?: string): ValidationRule => ({
		test: (value) => !value || Number(value) <= max,
		message: message || `Must be no more than ${max}`
	}),

	range: (min: number, max: number, message?: string): ValidationRule => ({
		test: (value) => !value || (Number(value) >= min && Number(value) <= max),
		message: message || `Must be between ${min} and ${max}`
	}),

	strongPassword: (
		message: string = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'
	): ValidationRule => ({
		test: (value) => !value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
		message
	}),

	confirmPassword: (passwordField: string, message: string = 'Passwords do not match'): ValidationRule => ({
		test: (value) => !value || value === passwordField,
		message
	}),

	phoneNumber: (message: string = 'Must be a valid phone number'): ValidationRule => ({
		test: (value) => !value || /^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, '')),
		message
	}),

	date: (message: string = 'Must be a valid date'): ValidationRule => ({
		test: (value) => !value || !isNaN(Date.parse(value)),
		message
	}),

	futureDate: (message: string = 'Date must be in the future'): ValidationRule => ({
		test: (value) => !value || new Date(value) > new Date(),
		message
	}),

	pastDate: (message: string = 'Date must be in the past'): ValidationRule => ({
		test: (value) => !value || new Date(value) < new Date(),
		message
	}),

	custom: (validator: (value: any) => boolean, message: string): ValidationRule => ({
		test: validator,
		message
	})
};

// Field validation function
export function validateField(value: any, validation: FieldValidation): ValidationResult {
	const errors: string[] = [];

	// Trim value if specified
	if (validation.trim && typeof value === 'string') {
		value = value.trim();
	}

	// Check required field
	if (validation.required && (value === undefined || value === null || value === '')) {
		errors.push('This field is required');
		return { isValid: false, errors };
	}

	// Run validation rules
	for (const rule of validation.rules) {
		if (!rule.test(value)) {
			errors.push(rule.message);
		}
	}

	return {
		isValid: errors.length === 0,
		errors
	};
}

// Form validation function
export function validateForm(data: Record<string, any>, schema: FormValidation): Record<string, ValidationResult> {
	const results: Record<string, ValidationResult> = {};

	for (const [fieldName, validation] of Object.entries(schema)) {
		const value = data[fieldName];
		results[fieldName] = validateField(value, validation);
	}

	return results;
}

// Check if entire form is valid
export function isFormValid(validationResults: Record<string, ValidationResult>): boolean {
	return Object.values(validationResults).every((result) => result.isValid);
}

// Get all form errors
export function getFormErrors(validationResults: Record<string, ValidationResult>): Record<string, string[]> {
	const errors: Record<string, string[]> = {};

	for (const [fieldName, result] of Object.entries(validationResults)) {
		if (!result.isValid) {
			errors[fieldName] = result.errors;
		}
	}

	return errors;
}

// Validation state for reactive forms
export function createValidationStore(schema: FormValidation) {
	let data = $state<Record<string, any>>({});
	let errors = $state<Record<string, string[]>>({});
	let touched = $state<Record<string, boolean>>({});

	return {
		get data() {
			return data;
		},
		get errors() {
			return errors;
		},
		get touched() {
			return touched;
		},
		get isValid() {
			return Object.keys(errors).length === 0;
		},

		setValue(field: string, value: any) {
			data[field] = value;
			this.validateField(field);
		},

		setTouched(field: string, isTouched: boolean = true) {
			touched[field] = isTouched;
		},

		validateField(field: string) {
			if (schema[field]) {
				const result = validateField(data[field], schema[field]);
				if (result.isValid) {
					delete errors[field];
				} else {
					errors[field] = result.errors;
				}
			}
		},

		validateAll() {
			const results = validateForm(data, schema);
			errors = getFormErrors(results);
			return isFormValid(results);
		},

		reset() {
			data = {};
			errors = {};
			touched = {};
		},

		setData(newData: Record<string, any>) {
			data = { ...newData };
		}
	};
}

// Debounced validation
export function debounceValidation(fn: Function, delay: number = 300) {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(null, args), delay);
	};
}

// Common validation schemas
export const commonSchemas = {
	login: {
		email: {
			rules: [validationRules.email()],
			required: true,
			trim: true
		},
		password: {
			rules: [validationRules.minLength(6)],
			required: true
		}
	},

	registration: {
		name: {
			rules: [validationRules.minLength(2), validationRules.maxLength(50)],
			required: true,
			trim: true
		},
		email: {
			rules: [validationRules.email()],
			required: true,
			trim: true
		},
		password: {
			rules: [validationRules.strongPassword()],
			required: true
		},
		confirmPassword: {
			rules: [], // Will be set dynamically
			required: true
		}
	},

	contact: {
		name: {
			rules: [validationRules.minLength(2), validationRules.maxLength(100)],
			required: true,
			trim: true
		},
		email: {
			rules: [validationRules.email()],
			required: true,
			trim: true
		},
		phone: {
			rules: [validationRules.phoneNumber()],
			required: false,
			trim: true
		},
		message: {
			rules: [validationRules.minLength(10), validationRules.maxLength(1000)],
			required: true,
			trim: true
		}
	}
};

export default {
	validationRules,
	validateField,
	validateForm,
	isFormValid,
	getFormErrors,
	createValidationStore,
	debounceValidation,
	commonSchemas
};
