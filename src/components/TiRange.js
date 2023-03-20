import React, { useContext, useState } from 'react';
import { TiFormContext } from '../lib/Context';

export const TiRange = ({
	name,
	min,
	max,
	step,
	defaultValue,
	onChange,
	...rest
}) => {
	const { setValues } = useContext(TiFormContext);
	const [value, setValue] = useState(defaultValue ?? (min + max) / 2);

	const handleChange = (event) => {
		const val = Number(event.target.value);
		setValue(val);
		if (setValues) {
			setValues((el) => ({ ...el, [name]: val }));
		}
		if (onChange) {
			onChange(val);
		}
	};

	return (
		<input
			type="range"
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={handleChange}
			className="w-full h-2 rounded-full bg-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
			{...rest}
		/>
	);
};
