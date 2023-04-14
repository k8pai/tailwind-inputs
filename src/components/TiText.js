import { IconContext } from 'react-icons';
import { TiFormContext } from '../lib/Context';
import { validateFields } from '../lib/helpers';
import { TiTick, TiTimes } from 'react-icons/ti';
import React, { useContext, useEffect, useState } from 'react';

export default function TiText({
	name,
	error,
	label,
	style = {
		mode: 'light',
	},
	loader = false,
	disabled = false,
	readOnly,
	validate,
	mandatory,
	placeholder = '',
	readOnlyText,
	defaultValue = '',
	autoComplete = 'off',
	...rest
}) {
	const [valid, setValid] = useState(null);
	const [value, setValue] = useState(defaultValue);
	const { values, setValues, submit } = useContext(TiFormContext);
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

	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (typeof validate !== 'undefined' && valid === null) {
			setValid(false);
		} else if (typeof validate === 'string' && valid === null) {
			setValid(false);
		}
	}, [submit]);

	useEffect(() => {
		setValid(validateFields(validate, value));
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 300);
		if (typeof validate === 'undefined')
			setValues({ ...values, [name]: value });

		if (typeof validate === 'string' && valid)
			setValues({ ...values, [name]: value });
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
			<div
				className={`relative mt-2 bg-transparent ${theme.size} ${theme.color}`}
			>
				<input
					id={name}
					name={name}
					value={value}
					autoComplete={autoComplete}
					onChange={(event) => setValue(event.target.value)}
					disabled={disabled}
					placeholder={placeholder}
					readOnly={readOnly}
					className={`transition duration-75 w-full leading-tight outline-none focus:shadow-outline ${
						validate && !theme.padding
							? 'pl-4 pr-11 py-3 '
							: theme.padding ?? 'px-4 py-3 '
					} ${theme.input} ${
						readOnlyText ? 'border-0' : 'border-2'
					} ${theme.bg} ${
						valid === true
							? `${theme.valid}`
							: valid === false
							? `${theme.invalid}`
							: `${theme.default}`
					}`}
				/>

				<div className="absolute z-40 inset-y-0 w-11 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2">
					{animate && loader && valid === null ? (
						<div
							className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
							role="status"
						></div>
					) : valid === false ? (
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'global-class-name text-red-500',
							}}
						>
							<TiTimes />
						</IconContext.Provider>
					) : valid === true ? (
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'global-class-name text-green-500',
							}}
						>
							<TiTick />
						</IconContext.Provider>
					) : null}
				</div>
			</div>

			{error && (
				<h1
					aria-hidden={error && valid === false}
					className={`${theme.error} mt-1 ml-1 transition-all ease-in-out duration-300 opacity-0 invisible aria-hidden:visible aria-hidden:opacity-100`}
				>
					{error}
				</h1>
			)}
		</div>
	);
}
