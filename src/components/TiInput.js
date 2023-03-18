import helpers from '../lib/helpers';
import { IconContext } from 'react-icons';
import { TiTick, TiTimes } from 'react-icons/ti';
import classGenerators from '../lib/classGenerators';
import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext, TiInputContext } from '../lib/Context';

const TiLabel = ({ name, title, ...restProps }) => {
	return (
		<label htmlFor={name} {...restProps}>
			{title}
		</label>
	);
};

const TiInput = ({ children, ...rest }) => {
	const [valid, setValid] = useState(null);
	const [inpValue, setInpValue] = useState('');

	return (
		<div {...rest}>
			<TiInputContext.Provider
				value={{
					value: inpValue,
					setValue: setInpValue,
					valid,
					setValid,
				}}
			>
				{children}
			</TiInputContext.Provider>
		</div>
	);
};

const TiError = ({ errorMessage = false, children, ...rest }) => {
	const { valid } = useContext(TiInputContext);

	return (
		<h1
			aria-hidden={errorMessage && valid === false}
			className="text-red-500 mt-px ml-1 font-semibold tracking-wide transition-all ease-in-out duration-300 opacity-0 invisible aria-hidden:visible aria-hidden:opacity-100"
			{...rest}
		>
			{children}
		</h1>
	);
};

const TiText = ({
	name,
	validate,
	customize,
	loader = false,
	autoComplete = 'off',
	errorMessage,
	readOnlyText,
	...rest
}) => {
	const { validateFields } = helpers;
	const { values, setValues } = useContext(TiFormContext);
	const { value, setValue, valid, setValid } = useContext(TiInputContext);
	const { generateCustomStyles } = classGenerators;

	const [animate, setAnimate] = useState(false);
	const [className, setClassName] = useState(
		'rounded-lg bg-transparent selection:select-none transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
	);

	useEffect(() => {
		setValid(validateFields(validate, ''));
	}, []);

	useEffect(() => {
		setValues({ ...values, [name]: value });
	}, [value]);

	useEffect(() => {
		if (customize) {
			setClassName(generateCustomStyles(customize));
		}
	}, [customize]);

	const handleChange = (event) => {
		setValue(event.target.value);
		setAnimate(true);
		setValid(validateFields(validate, event.target.value));
		setTimeout(() => {
			setAnimate(false);
		}, 300);
	};

	return (
		<div className={`relative`}>
			<input
				id={name}
				name={name}
				value={value || ''}
				autoComplete={autoComplete}
				onChange={handleChange}
				className={
					className +
					`${readOnlyText ? 'border-0 outline-none' : ''} ${
						valid === true ? 'border-green-400' : ''
					} ${valid === false ? 'border-red-400' : ''}`
				}
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
	);
};

TiInput.Label = TiLabel;
TiInput.Error = TiError;
TiInput.Text = TiText;

export default TiInput;
