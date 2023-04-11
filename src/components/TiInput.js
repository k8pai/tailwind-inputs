import helpers from '../lib/helpers';
import { IconContext } from 'react-icons';
import { TiTick, TiTimes } from 'react-icons/ti';
import classGenerators from '../lib/classGenerators';
import React, { useContext, useEffect, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { TiFormContext, TiInputContext } from '../lib/Context';

const TiLabel = ({ title, ...restProps }) => {
	const { name } = useContext(TiInputContext);
	return (
		<label htmlFor={name} {...restProps}>
			{title}
		</label>
	);
};

const TiError = ({ message = '', children, ...rest }) => {
	const { valid } = useContext(TiInputContext);

	return (
		<h1
			aria-hidden={message && valid === false}
			className="text-red-500 mt-px ml-1 font-semibold tracking-wide transition-all ease-in-out duration-300 opacity-0 invisible aria-hidden:visible aria-hidden:opacity-100"
			{...rest}
		>
			{message}
		</h1>
	);
};

const TiText = ({
	validate,
	customize,
	loader = false,
	autoComplete = 'off',
	errorMessage,
	readOnlyText,
	...rest
}) => {
	const { validateFields } = helpers;
	const { values, setValues, submit } = useContext(TiFormContext);
	const { name, value, setValue, valid, setValid } =
		useContext(TiInputContext);
	const { generateCustomStyles } = classGenerators;

	const [animate, setAnimate] = useState(false);
	const [className, setClassName] = useState(
		'rounded-lg bg-transparent selection:select-none transition duration-75 py-3 pl-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
	);

	// useEffect(() => {
	// 	setValid(validateFields(validate, value));
	// }, []);

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

	useEffect(() => {
		if (customize) {
			setClassName(generateCustomStyles(customize));
		}
	}, [customize]);

	return (
		<div className={`relative`}>
			<input
				id={name}
				name={name}
				value={value || ''}
				autoComplete={autoComplete}
				onChange={(event) => setValue(event.target.value)}
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

const TiMail = ({
	validate = 'email',
	customize,
	loader = false,
	autoComplete = 'off',
	errorMessage,
	...rest
}) => {
	const { validateFields } = helpers;
	const { values, setValues, submit } = useContext(TiFormContext);
	const { name, value, setValue, valid, setValid } =
		useContext(TiInputContext);
	const { generateCustomStyles } = classGenerators;

	const [animate, setAnimate] = useState(false);
	const [className, setClassName] = useState(
		'rounded-lg bg-transparent selection:select-none transition duration-75 py-3 pl-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
	);

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

	useEffect(() => {
		if (customize) {
			setClassName(generateCustomStyles(customize));
		}
	}, [customize]);

	return (
		<div className={`relative`}>
			<input
				id={name}
				name={name}
				value={value || ''}
				autoComplete={autoComplete}
				onChange={(event) => setValue(event.target.value)}
				className={
					className +
					` ${valid === true ? 'border-green-400' : ''} ${
						valid === false ? 'border-red-400' : ''
					}`
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

const TiNumber = ({
	validate = 'number',
	customize,
	autoComplete = 'off',
	min = 0,
	max = 100,
	...rest
}) => {
	const { validateFields } = helpers;
	const { values, setValues, submit } = useContext(TiFormContext);
	const { name, value, setValue, valid, setValid } =
		useContext(TiInputContext);
	const { generateCustomStyles } = classGenerators;

	const [className, setClassName] = useState(
		'rounded-lg bg-transparent selection:bg-green-400 selection:text-white transition duration-75 py-3 pl-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
	);

	useEffect(() => {
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

	useEffect(() => {
		if (customize) {
			setClassName(generateCustomStyles(customize));
		}
	}, [customize]);

	const handleChange = (event) => {
		const val = parseInt(event.target.value);
		if (!isNaN(val)) {
			setValue(val);
		} else if (isNaN(val)) {
			setValue(0);
		}
	};

	return (
		<div className={`group relative`}>
			<input
				id={name}
				name={name}
				value={value}
				autoComplete={autoComplete}
				onChange={handleChange}
				className={
					className +
					` ${valid === true ? 'border-green-400' : ''} ${
						valid === false ? 'border-red-400' : ''
					}`
				}
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
	);
};

const TiTextArea = ({ name, customize, autoComplete = 'off', ...rest }) => {
	const { values, setValues } = useContext(TiFormContext);
	const { value, setValue } = useContext(TiInputContext);
	const { generateCustomStyles } = classGenerators;

	const [className, setClassName] = useState(
		'rounded-lg bg-transparent selection:select-none scrollbar transition duration-75 py-3 px-4 w-full min-h-60 font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
	);

	useEffect(() => {
		setValues({ ...values, [name]: value });
	}, [value]);

	useEffect(() => {
		if (customize) {
			setClassName(generateCustomStyles(customize));
		}
	}, [customize]);

	return (
		<textarea
			id={name}
			name={name}
			value={value || ''}
			rows={5}
			autoComplete={autoComplete}
			onChange={(e) => setValue(e.target.value)}
			className={className}
			{...rest}
		/>
	);
};

TiInput.Label = TiLabel;
TiInput.Error = TiError;
TiInput.Text = TiText;
TiInput.Mail = TiMail;
TiInput.Number = TiNumber;
TiInput.TextArea = TiTextArea;

export default function TiInput({ name, children, ...rest }) {
	const [valid, setValid] = useState(null);
	const [inpValue, setInpValue] = useState('');

	return (
		<div {...rest}>
			<TiInputContext.Provider
				value={{
					name,
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
}
