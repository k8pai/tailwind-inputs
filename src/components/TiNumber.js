import React, { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { TiFormContext } from '../lib/Context';
import { validateFields } from '../lib/helpers';

export function TiNumber({
	min = 0,
	max = 100,
	name,
	error,
	label,
	style = {
		mode: 'light',
	},
	loader = false,
	disabled = false,
	validate = 'number',
	indicator = !true,
	mandatory = false,
	placeholder = '',
	defaultValue = 0,
	autoComplete = 'off',
	...rest
}) {
	const { values, setValues, submit } = useContext(TiFormContext);
	const [value, setValue] = useState(defaultValue);
	const [valid, setValid] = useState(null);
	const [theme, setTheme] = useState({
		size: 'max-w-sm',
		color: style.mode === 'dark' ? 'text-white' : 'text-black',
		bg: style.mode === 'dark' ? 'bg-[#181818]' : 'bg-white',
		border: 'border-2 border-gray-400',
		// padding: 'pl-6 py-5 pr-11',
		disabled:
			style.mode === 'dark'
				? 'text-gray-400 bg-[#121212]'
				: 'text-gray-300 bg-slate-50',

		label: 'font-semibold tracking-wide ml-2',
		input: 'font-semibold tracking-wider text-lg rounded-lg',
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
						`You need to enclose <TiNumber {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		if (valid === false) {
			setValues({ ...values, [name]: 0 });
		} else {
			setValues({ ...values, [name]: value });
		}
	}, [valid]);

	useEffect(() => {
		if (valid === null) {
			setValid(false);
		}
	}, [submit]);

	useEffect(() => {
		setValid(validateFields(validate, value));
		if (value < min || value.length === 0) setValid(null);
		if (value > max) setValid(false);
		if (value >= min && value <= max) setValid(true);
	}, [value]);

	const handleChange = (event) => {
		const val = parseInt(event.target.value);
		if (!isNaN(val)) {
			setValue(val);
		} else if (isNaN(val)) {
			setValue(0);
		}
	};

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
			<div
				className={`relative group mt-2 bg-transparent ${theme.size} ${theme.color}`}
			>
				<input
					id={name}
					name={name}
					value={value}
					autoComplete={autoComplete}
					onChange={handleChange}
					placeholder={placeholder}
					className={`transition duration-75 w-full leading-tight outline-none focus:shadow-outline ${
						theme.padding && !indicator
							? theme.padding
							: indicator
							? 'pl-4 pr-11 py-3 '
							: 'px-4 py-3'
					} ${theme.input} ${theme.border} ${theme.bg} ${
						valid === true
							? `${theme.valid}`
							: valid === false
							? `${theme.invalid}`
							: `${theme.default}`
					}`}
				/>
				{indicator && (
					<div className="absolute z-40 inset-y-0 h-full right-0 flex flex-col justify-center space-y-1 px-3 rounded-r-lg focus:outline-none transition-all duration-200 ease-in-out invisible opacity-0 group-hover:visible group-hover:opacity-100">
						<button
							className="border rounded-md py-px px-1"
							onClick={(event) => {
								event.preventDefault();
								setValue((val) => parseInt(val) + 1);
							}}
						>
							<IconContext.Provider
								value={{
									size: '.75em',
									className: 'global-class-name',
								}}
							>
								<HiChevronUp />
							</IconContext.Provider>
						</button>
						<button
							className="border rounded-md py-px px-1"
							onClick={(event) => {
								event.preventDefault();
								setValue((val) => parseInt(val) - 1);
							}}
						>
							<IconContext.Provider
								value={{
									size: '.75em',
									className: 'global-class-name',
								}}
							>
								<HiChevronDown />
							</IconContext.Provider>
						</button>
					</div>
				)}
			</div>

			{error && (
				<h1
					aria-hidden={error && valid === false}
					className="text-red-500 mt-px ml-1 font-semibold tracking-wide transition-all ease-in-out duration-300 opacity-0 invisible aria-hidden:visible aria-hidden:opacity-100"
				>
					{error}
				</h1>
			)}
		</div>
	);
}
