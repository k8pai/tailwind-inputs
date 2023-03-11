import React, { useEffect, useState } from 'react';
import { validateFields } from '../lib';

const TextInput = ({
	name,
	label,
	autoComplete = 'off',
	value,
	onChange,
	submit,
	className = '',
	validate = null,
	valid = false,
	error = false,
	validMessage = '',
	errorMessage = '',
}) => {
	const checker = validateFields(validate, value);

	// console.log(checker);
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
				value={value}
				onChange={onChange}
				className={`border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
					checker ? 'border-green-500' : ''
				} ${submit && !checker ? 'border-red-500' : ''}`}
			/>
			{valid ? (
				<div
					className={`${
						checker
							? 'block text-green-500/90 p-1 font-semibold tracking-wide'
							: 'hidden'
					}`}
				>
					<h1>{validMessage}</h1>
				</div>
			) : null}
			{error ? (
				<div
					className={`${
						submit && !checker
							? 'block text-red-500/90 p-1 font-semibold tracking-wide'
							: 'hidden'
					}`}
				>
					<h1>{errorMessage}</h1>
				</div>
			) : null}
		</div>
	);
};

export default TextInput;
