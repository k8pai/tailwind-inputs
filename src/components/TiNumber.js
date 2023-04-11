import React, { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { TiFormContext } from '../lib/Context';
import helpers from '../lib/helpers';

export default function TiNumber({
	name,
	label,
	error,
	validate = 'number',
	autoComplete = 'off',
	min = 0,
	max = 100,
	theme,
	...rest
}) {
	const { validateFields } = helpers;
	const { values, setValues, submit } = useContext(TiFormContext);
	const [value, setValue] = useState(0);
	const [valid, setValid] = useState(null);

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
		setValue(parseInt(0));
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
				<label htmlFor={name} className={`${theme.label}`}>
					{label}
				</label>
			)}
			<div className={`group relative`}>
				<input
					id={name}
					name={name}
					value={value}
					autoComplete={autoComplete}
					onChange={handleChange}
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
