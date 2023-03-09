import React, { useEffect, useState } from 'react';

const Input = ({
	id,
	name,
	label,
	autoComplete,
	value,
	onChange,
	submit,
	className,
}) => {
	const [valid, setValid] = useState(false);

	useEffect(() => {
		value ? setValid(true) : setValid(false);
		console.log(value);
	}, [value]);

	return (
		<div className="mb-4">
			<label htmlFor={id} className="block text-gray-700 font-bold mb-2">
				{label}
			</label>
			<input
				type="text"
				id={id}
				name={name}
				autoComplete={autoComplete}
				value={value}
				onChange={onChange}
				className={`border-2 border-gray-400 rounded-lg transition-all duration-200 py-3 px-4 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
					valid ? 'border-green-500' : ''
				} ${submit && !valid ? 'border-red-500' : ''}`}
			/>
		</div>
	);
};

export default Input;
