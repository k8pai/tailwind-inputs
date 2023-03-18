import React, { useState } from 'react';
import { TiFormContext } from '../lib/Context';

export function TiForm({ initialValues = {}, className, onSubmit, children }) {
	const [values, setValues] = useState(initialValues);
	const [submit, setSubmit] = useState(false);
	const [valid, setValid] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmit(true);
		onSubmit(values);
	};

	return (
		<form onSubmit={handleSubmit} className={className}>
			<TiFormContext.Provider
				value={{
					values,
					setValues,
					submit,
					setSubmit,
					valid,
					setValid,
				}}
			>
				{children}
			</TiFormContext.Provider>
		</form>
	);
}
