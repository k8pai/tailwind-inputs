import React, { createContext, useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { TiTick, TiTimes } from 'react-icons/ti';
import classGenerators from '../lib/classGenerators';
import helpers from '../lib/helpers';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

// Create a context for managing form state
export const FormContext = createContext({
	values: {},
	setValue: () => {},
	submit: false,
	setSubmit: () => {},
});

// Form component that maintains form state using context
export function TiForm({ initialValues = {}, className, onSubmit, children }) {
	const [values, setValues] = useState(initialValues);
	const [submit, setSubmit] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmit(true);
		onSubmit(values);
	};

	return (
		<form onSubmit={handleSubmit} className={className}>
			<FormContext.Provider
				value={{ values, setValue: setValues, submit, setSubmit }}
			>
				{children}
			</FormContext.Provider>
		</form>
	);
}

// tailwind-inputs label
export function TiLabel({ name, title, ...restProps }) {
	return (
		<label htmlFor={name} {...restProps}>
			{title}
		</label>
	);
}

// tailwind-inputs button
export function TiButton(props) {
	return (
		<button type="submit" {...props}>
			Submit
		</button>
	);
}

// Input component that uses form state from context
export function TiText({
	name,
	label,
	validate,
	loader = false,
	autoComplete = 'off',
	errorMessage,
	customize,
	readOnlyText,
	...restProps
}) {
	const { validateFields } = helpers;
	const { generateCustomStyles } = classGenerators;
	const { values, setValue } = useContext(FormContext);

	const [valid, setValid] = useState(null);
	const [animate, setAnimate] = useState(false);
	const [className, setClassName] = useState(
		'rounded-lg bg-transparent selection:select-none transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
	);

	useEffect(() => {
		if (customize) {
			setClassName(generateCustomStyles(customize));
		}
	}, [customize]);

	useEffect(() => {
		setValid(validateFields(validate, ''));
	}, []);

	const handleChange = (event) => {
		console.log(values);
		setAnimate(true);
		setValue({ ...values, [name]: event.target.value });
		setValid(validateFields(validate, event.target.value));
		setTimeout(() => {
			setAnimate(false);
		}, 300);
	};

	return (
		<div className={`mb-4`}>
			{label && (
				<label
					htmlFor={name}
					className={`block text-lg ml-1 font-semibold mb-2`}
				>
					{label}
				</label>
			)}

			<div className={`relative`}>
				<input
					id={name}
					name={name}
					value={readOnlyText ?? (values[name] || '')}
					autoComplete={autoComplete}
					onChange={handleChange}
					className={
						className +
						`${readOnlyText ? 'border-0 outline-none' : ''} ${
							valid === true ? 'border-green-400' : ''
						} ${valid === false ? 'border-red-400' : ''}`
					}
					{...restProps}
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
			{errorMessage && valid === false ? (
				<h1 className="block text-red-500 mt-px ml-1 font-semibold tracking-wide">
					{errorMessage}
				</h1>
			) : null}
		</div>
	);
}

// tailwind-inputs password field
export function TiPassword({
	name,
	label,
	validate = 'password',
	autoComplete = 'off',
	loader = false,
	showPass = true,
	className,
	...restProps
}) {
	const { validateFields } = helpers;
	const { values, setValue } = useContext(FormContext);

	const [valid, setValid] = useState(null);
	const [animate, setAnimate] = useState(false);
	const [inpType, setInpType] = useState('password');

	useEffect(() => {
		setValid(validateFields(validate, ''));
	}, []);

	// useEffect(() => {
	// 	console.log('valid ' + name + '? = ', valid);
	// 	console.log('submit = ', submit);
	// }, [valid]);

	const handleChange = (event) => {
		setAnimate(true);
		setValue({ ...values, [name]: event.target.value });
		// console.log(
		// 	'value = ',
		// 	event.target.value,
		// 	', type = ',
		// 	validate,
		// 	', valid? = ',
		// 	validateFields(validate, event.target.value),
		// );
		setValid(validateFields(validate, event.target.value));
		setTimeout(() => {
			setAnimate(false);
		}, 300);
	};

	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className={`block text-lg ml-1 font-semibold mb-2`}
			>
				{label}
			</label>

			<div className="relative">
				<input
					id={name}
					name={name}
					type={inpType}
					value={values[name] || ''}
					autoComplete={autoComplete}
					onChange={handleChange}
					className={
						className ||
						`rounded-lg transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline ${
							valid === true ? 'border-green-400' : ''
						} ${valid === false ? 'border-red-400' : ''}`
					}
					{...restProps}
				/>

				<div className="absolute z-40 inset-y-0 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2">
					<div className="relative flex items-center space-x-2">
						{animate && loader && valid === null ? (
							<div
								className="block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
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
									className:
										'global-class-name text-green-500',
								}}
							>
								<TiTick />
							</IconContext.Provider>
						) : null}
						{showPass ? (
							<button
								onClick={() =>
									inpType === 'password'
										? setInpType('text')
										: setInpType('password')
								}
								type="button"
								className="flex items-center rounded-r-lg focus:outline-none"
							>
								{inpType === 'password' ? (
									<IconContext.Provider
										value={{
											size: '1.4em',
											className:
												'global-class-name text-gray-700',
										}}
									>
										<ImEye />
									</IconContext.Provider>
								) : (
									<IconContext.Provider
										value={{
											size: '1.4em',
											className:
												'global-class-name text-gray-700',
										}}
									>
										<ImEyeBlocked />
									</IconContext.Provider>
								)}
							</button>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
