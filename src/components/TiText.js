import React, { useEffect, useState } from 'react';
import helpers from '../lib/helpers';

const { validateFields, generatePlaceholder } = helpers;

function TiText({
	name,
	label,
	autoComplete = 'off',
	value,
	onChange,
	submit,
	className = '',
	placeholder,
	validate,
	errorMessage = '',
}) {
	const [valid, setValid] = useState(false);
	const [pcHolder, setPcHolder] = useState(null);

	useEffect(() => {
		if (typeof placeholder === 'undefined') {
			setPcHolder(generatePlaceholder(validate));
		} else {
			setPcHolder(placeholder);
		}
	}, []);

	useEffect(() => {
		setValid(validateFields(validate, value));
	}, [value]);

	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className="block text-gray-700 font-bold mb-2"
			>
				{label}
			</label>
			<input
				type="text"
				id={name}
				name={name}
				autoComplete={autoComplete}
				placeholder={pcHolder}
				value={value}
				onChange={onChange}
				className={`border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
					valid === true ? 'border-green-500' : ''
				} ${submit && valid === false ? 'border-red-500' : ''}`}
			/>
			{errorMessage && valid === false && submit ? (
				<h1 className="block text-red-500 mt-2 font-semibold tracking-wide">
					{errorMessage}
				</h1>
			) : null}
		</div>
	);
}

export { TiText };
