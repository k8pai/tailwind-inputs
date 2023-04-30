import { TiFormContext } from '../lib/Context';
import React, { useContext, useEffect, useState } from 'react';

export function TiTextarea({
	rows = 5,
	name,
	label,
	style = {
		mode: 'light',
	},
	loader = false,
	disabled = false,
	readOnly,
	mandatory,
	placeholder = '',
	readOnlyText,
	defaultValue = '',
	autoComplete = 'off',
	...rest
}) {
	const [value, setValue] = useState(defaultValue);
	const { setValues } = useContext(TiFormContext);
	const [theme, setTheme] = useState({
		size: 'max-w-full',
		color: style.mode === 'dark' ? 'text-white' : 'text-black',
		bg: style.mode === 'dark' ? 'bg-[#181818]' : 'bg-white',
		border: 'border-2 border-gray-400',
		// padding: 'pl-6 py-5 pr-11',
		// textArea: 'rounded-lg bg-transparent selection:select-none scrollbar transition duration-75 py-3 px-4 w-full min-h-60 font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline'
		disabled:
			style.mode === 'dark'
				? 'text-gray-400 bg-[#121212]'
				: 'text-gray-300 bg-slate-50',

		label: 'font-semibold tracking-wide ml-2',
		input: 'font-semibold tracking-wider text-lg rounded-lg scrollbar min-h-60',
		default: 'border-gray-500',
		valid: 'border-green-400',
		invalid: 'border-red-400',
		error: 'text-red-500 font-semibold tracking-wide',
		...style,
	});

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiTextarea {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		setValues((el) => ({ ...el, [name]: value }));
	}, [value]);

	return (
		<div {...rest}>
			{label && (
				<label
					htmlFor={name}
					className={`${theme.label} ${theme.color}`}
				>
					{label}
					{mandatory && (
						<span className="text-red-500 font-extrabold text-lg ml-2">
							*
						</span>
					)}
				</label>
			)}
			<div className={`mt-2 bg-transparent ${theme.size} ${theme.color}`}>
				<textarea
					id={name}
					name={name}
					rows={rows}
					value={value}
					autoComplete={autoComplete}
					onChange={(event) => setValue(event.target.value)}
					disabled={disabled}
					placeholder={placeholder}
					readOnly={readOnly}
					className={`transition duration-75 w-full leading-tight outline-none focus:shadow-outline ${
						theme.padding ?? 'px-4 py-3 '
					} ${theme.input} ${
						readOnlyText ? 'border-0' : 'border-2'
					} ${theme.bg} ${theme.default}`}
				/>
			</div>
		</div>
	);
}
