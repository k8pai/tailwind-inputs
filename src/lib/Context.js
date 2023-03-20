import { createContext } from 'react';

// Context for managing form state
export const TiFormContext = createContext({
	values: {},
	setValues: () => {},
	submit: false,
	setSubmit: () => {},
	valid: [],
	setValid: () => {},
});

export const TiCheckboxContext = createContext({
	checked: [],
	setChecked: () => {},
});

export const TiSelectContext = createContext({
	selected: '',
	setSelected: () => {},
	isOpen: false,
	setIsOpen: () => {},
});

export const TiMultiselectContext = createContext({
	selected: [],
	setSelected: () => {},
	isOpen: false,
	setIsOpen: () => {},
});

export const TiInputContext = createContext({
	value: '',
	setValue: () => {},
	valid: null,
	setValid: () => {},
});
