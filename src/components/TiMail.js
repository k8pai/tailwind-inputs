import React, { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { TiTick, TiTimes } from 'react-icons/ti';
import { TiFormContext } from '../lib/Context';
import helpers from '../lib/helpers';

export default function TiMail({
	name,
	label,
	validate = 'email',
	loader = false,
	autoComplete = 'off',
	theme,
	error,
	className,
	...rest
}) {
	const { validateFields } = helpers;
	const { values, setValues, submit } = useContext(TiFormContext);

	const [value, setValue] = useState('');
	const [valid, setValid] = useState(null);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		theme.label = theme.label
			? theme.label
			: 'text-black font-semibold tracking-wide';
		theme.input = theme.input
			? theme.input
			: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2';
		theme.default = theme.default ? theme.default : 'border-gray-500';
		theme.valid = theme.valid ? theme.valid : 'border-green-400';
		theme.invalid = theme.invalid ? theme.invalid : 'border-red-400';
		theme.error = theme.error
			? theme.error
			: 'text-red-500 font-semibold tracking-wide';
	}, []);

	useEffect(() => {
		if (valid === false) {
			setValues({ ...values, [name]: '' });
		}
	}, [valid]);

	useEffect(() => {
		if (typeof validate === 'string' && valid === null) {
			setValid(false);
		}
	}, [submit]);

	useEffect(() => {
		setValid(validateFields(validate, value));
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 300);

		if (typeof validate === 'undefined' && valid === null)
			setValues({ ...values, [name]: value });
		if (typeof validate === 'string' && valid !== false)
			setValues({ ...values, [name]: value });
	}, [value]);

	return (
		<div className={className}>
			{label && (
				<label htmlFor={name} className={`${theme.label}`}>
					{label}
				</label>
			)}
			<div className={`relative`}>
				<input
					id={name}
					name={name}
					value={value}
					autoComplete={autoComplete}
					onChange={(event) => setValue(event.target.value)}
					className={`${
						theme.input
					} transition duration-75 py-3 pl-4 pr-11 w-full leading-tight outline-none focus:shadow-outline ${
						valid === true
							? `${theme.valid}`
							: valid === false
							? `${theme.invalid}`
							: `${theme.default}`
					}`}
					{...rest}
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
					className={`${theme.error} mt-px ml-1 transition-all ease-in-out duration-300 opacity-0 invisible aria-hidden:visible aria-hidden:opacity-100`}
				>
					{error}
				</h1>
			)}
		</div>
	);
}
