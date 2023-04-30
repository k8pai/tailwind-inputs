import React, { useState } from 'react';
import { TiFormContext } from '../lib/Context';

export function TiForm({
	initialValues = {},
	className,
	onSubmit = () => {},
	children,
	...rest
}) {
	const [values, setValues] = useState(initialValues);
	const [submit, setSubmit] = useState(false);
	const [valid, setValid] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (rest.action && rest.method) {
			await fetch(rest.action, {
				method: rest.method,
				body: JSON.stringify(values),
			});
		}
		setSubmit(true);
		onSubmit(values);
		setTimeout(() => {
			setSubmit(false);
		}, 2000);
	};

	return (
		<form onSubmit={handleSubmit} className={className} {...rest}>
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
