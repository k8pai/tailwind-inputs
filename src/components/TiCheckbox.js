import React, { useContext, useEffect, useState } from 'react';
import { TiCheckboxContext, TiFormContext } from '../lib/Context';

const TiCheckbox = ({ name, children, ...rest }) => {
	const [checked, setChecked] = useState([]);

	const { setValues } = useContext(TiFormContext);

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiCheckbox {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		if (setValues) {
			setValues((el) => ({ ...el, [name]: checked }));
		}
	}, [checked]);
	return (
		<div className="flex items-center" {...rest}>
			<TiCheckboxContext.Provider
				value={{
					checked,
					setChecked,
				}}
			>
				{children}
			</TiCheckboxContext.Provider>
		</div>
	);
};

const TiCheckboxOption = ({ name, value, defaultState }) => {
	const { setChecked } = useContext(TiCheckboxContext);
	const [isChecked, setIsChecked] = useState(defaultState ?? false);

	useEffect(() => {
		return () => {
			setChecked == '()=>{}'
				? console.warn(
						'Enclose <TiCheckbox.option {...props} /> within <TiCheckbox> tags to get selected options.',
				  )
				: null;
		};
	}, []);

	useEffect(() => {
		if (setChecked) {
			isChecked ? setChecked((el) => [...el, value]) : null;
			!isChecked
				? setChecked((el) => el.filter((elem) => elem != value))
				: null;
		}
	}, [isChecked]);

	const handleChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<input
			type="checkbox"
			id={name}
			value={value}
			checked={isChecked}
			onChange={handleChange}
			className="mr-2 w-4 h-4 text-green-500 form-checkbox focus:ring-2 focus:ring-green-500"
		/>
	);
};

const TiLabel = ({ name, title, ...rest }) => {
	return (
		<label htmlFor={name} {...rest}>
			{title}
		</label>
	);
};

TiCheckbox.option = TiCheckboxOption;
TiCheckbox.Label = TiLabel;

export default TiCheckbox;
