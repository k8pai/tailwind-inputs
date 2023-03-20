import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext } from '../lib/Context';

export const TiRadio = ({ options, name }) => {
	const { setValues } = useContext(TiFormContext);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiRadio {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		setValues((el) => ({ ...el, [name]: selectedOption }));
	}, [selectedOption]);

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className="flex flex-col">
			{options.map((option, optionIdx) => (
				<div key={option}>
					<input
						type="radio"
						id={optionIdx}
						value={option}
						checked={selectedOption === option}
						onChange={handleChange}
						name={name}
						className="mr-2 w-4 h-4 text-green-500 form-radio"
					/>
					<label htmlFor={optionIdx} className="text-green-500">
						{option}
					</label>
				</div>
			))}
		</div>
	);
};
