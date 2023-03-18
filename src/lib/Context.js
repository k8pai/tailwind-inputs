import React, { createContext } from 'react';

// Context for managing form states
export const TiFormContext = createContext({
	values: {},
	setValues: () => {},
	submit: false,
	setSubmit: () => {},
});

export const TiSelectContext = createContext({
	selected: '',
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
