// Form Validation Utilities
// Comprehensive validation system for Liquid UI forms
// Built-in validation rules
export const validationRules = {
	required: (message = 'This field is required') => ({
		test: (value) => value !== undefined && value !== null && value !== '',
		message
	}),
	minLength: (min, message) => ({
		test: (value) => !value || value.length >= min,
		message: message || `Must be at least ${min} characters`
	}),
	maxLength: (max, message) => ({
		test: (value) => !value || value.length <= max,
		message: message || `Must be no more than ${max} characters`
	}),
	email: (message = 'Must be a valid email address') => ({
		test: (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
		message
	}),
	url: (message = 'Must be a valid URL') => ({
		test: (value) => !value || /^https?:\/\/.+\..+/.test(value),
		message
	}),
	pattern: (regex, message) => ({
		test: (value) => !value || regex.test(value),
		message
	}),
	numeric: (message = 'Must be a number') => ({
		test: (value) => !value || !isNaN(Number(value)),
		message
	}),
	integer: (message = 'Must be a whole number') => ({
		test: (value) => !value || (Number.isInteger(Number(value)) && !isNaN(Number(value))),
		message
	}),
	min: (min, message) => ({
		test: (value) => !value || Number(value) >= min,
		message: message || `Must be at least ${min}`
	}),
	max: (max, message) => ({
		test: (value) => !value || Number(value) <= max,
		message: message || `Must be no more than ${max}`
	}),
	range: (min, max, message) => ({
		test: (value) => !value || (Number(value) >= min && Number(value) <= max),
		message: message || `Must be between ${min} and ${max}`
	}),
	strongPassword: (
		message = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'
	) => ({
		test: (value) => !value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
		message
	}),
	confirmPassword: (passwordField, message = 'Passwords do not match') => ({
		test: (value) => !value || value === passwordField,
		message
	}),
	phoneNumber: (message = 'Must be a valid phone number') => ({
		test: (value) => !value || /^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, '')),
		message
	}),
	date: (message = 'Must be a valid date') => ({
		test: (value) => !value || !isNaN(Date.parse(value)),
		message
	}),
	futureDate: (message = 'Date must be in the future') => ({
		test: (value) => !value || new Date(value) > new Date(),
		message
	}),
	pastDate: (message = 'Date must be in the past') => ({
		test: (value) => !value || new Date(value) < new Date(),
		message
	}),
	custom: (validator, message) => ({
		test: validator,
		message
	})
};
// Field validation function
export function validateField(value, validation) {
	const errors = [];
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
export function validateForm(data, schema) {
	const results = {};
	for (const [fieldName, validation] of Object.entries(schema)) {
		const value = data[fieldName];
		results[fieldName] = validateField(value, validation);
	}
	return results;
}
// Check if entire form is valid
export function isFormValid(validationResults) {
	return Object.values(validationResults).every((result) => result.isValid);
}
// Get all form errors
export function getFormErrors(validationResults) {
	const errors = {};
	for (const [fieldName, result] of Object.entries(validationResults)) {
		if (!result.isValid) {
			errors[fieldName] = result.errors;
		}
	}
	return errors;
}
// Validation state for reactive forms
export function createValidationStore(schema) {
	let data = $state({});
	let errors = $state({});
	let touched = $state({});
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
		setValue(field, value) {
			data[field] = value;
			this.validateField(field);
		},
		setTouched(field, isTouched = true) {
			touched[field] = isTouched;
		},
		validateField(field) {
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
		setData(newData) {
			data = { ...newData };
		}
	};
}
// Debounced validation
export function debounceValidation(fn, delay = 300) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), delay);
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
