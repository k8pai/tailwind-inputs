import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext } from '../lib/Context';
import { cleanupCheckbox } from '../lib/helpers';

export default function TiCheckbox({
	name,
	options,
	className,
	getSelected = () => {},
	...rest
}) {
	const { setValues } = useContext(TiFormContext);

	const [checked, setChecked] = useState([]);
	const [choices, setChoices] = useState(cleanupCheckbox(options));
	const [theme, setTheme] = useState({
		size: 'w-4 h-4',
		bg: 'bg-green-500',
		color: 'text-green-500',
		label: '',
		focus: 'focus:ring-transparent',
		borderRadius: 'rounded-md',
	});

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiCheckbox {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		getSelected(checked);
		setValues((reference) => ({ ...reference, [name]: checked }));
	}, [checked]);

	useEffect(() => {
		setChecked(choices.filter((el) => el.selected));
	}, [choices]);

	const handleChange = (event) => {
		const { name, checked } = event.target;
		setChoices((arr) =>
			arr.map((el) =>
				name === el.name ? { ...el, selected: checked } : el,
			),
		);
	};
	return (
		<div className={`flex m-1 space-x-4 ${className}`}>
			{choices.map((el) => {
				const { id, name, value, selected, label } = el;
				return (
					<div key={id} className={`flex items-start space-x-2`}>
						<input
							type="checkbox"
							id={name}
							name={name}
							value={value}
							checked={selected}
							onChange={handleChange}
							className={`my-1 ${theme.size} form-checkbox ${
								theme.focus
							} ${theme.color} ${selected ? theme.bg : ''} ${
								theme.borderRadius
							} `}
						/>
						{label && (
							<label
								className={`leading-snug ${theme.label}`}
								htmlFor={name}
							>
								{label}
							</label>
						)}
					</div>
				);
			})}
		</div>
	);
}
