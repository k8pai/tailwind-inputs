import React, { useEffect, useState } from 'react';
import helpers from '../lib/helpers';

const { validateFields, generatePlaceholder } = helpers;
const TextInput = ({
	name,
	label,
	autoComplete = 'off',
	value,
	onChange,
	submit,
	className = '',
	validate = 'default',
	valid = false,
	error = false,
	placeholder = generatePlaceholder(validate),
	validMessage = '',
	errorMessage = '',
}) => {
	const checker = validateFields(validate, value);
	return (
		<div className="mb-4">
			{label ? (
				<label
					htmlFor={name}
					className="block text-gray-700 font-bold mb-2"
				>
					{label}
				</label>
			) : null}
			<input
				type="text"
				id={name}
				name={name}
				autoComplete={autoComplete}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={`border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
					valid && checker ? 'border-green-500' : ''
				} ${submit && error && !checker ? 'border-red-500' : ''}`}
			/>
			{validMessage && checker ? (
				<div
					className={`${
						checker
							? 'block text-green-500/90 p-1 font-semibold tracking-wide'
							: 'hidden'
					}`}
				>
					{validMessage}
				</div>
			) : null}
			{errorMessage && !checker ? (
				<div
					className={`${
						submit && !checker
							? 'block text-red-500/90 p-1 font-semibold tracking-wide'
							: 'hidden'
					}`}
				>
					{errorMessage}
				</div>
			) : null}
		</div>
	);
};

export default TextInput;
