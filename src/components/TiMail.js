import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { TiTick, TiTimes } from 'react-icons/ti';
import helpers from '../lib/helpers';

const { validateFields, generatePlaceholder } = helpers;
function TiMail({
	name,
	label,
	autoComplete = 'off',
	value,
	onChange,
	submit = false,
	loader = false,
	className = '',
	placeholder,
	validate = 'default',
	errorMessage = '',
}) {
	const [valid, setValid] = useState(false);
	const [pcHolder, setPcHolder] = useState(null);
	const [state, setState] = useState();

	useEffect(() => {
		if (typeof placeholder === 'undefined') {
			setPcHolder(generatePlaceholder(validate));
		} else {
			setPcHolder(placeholder);
		}
		setState(false);
	}, []);

	useEffect(() => {
		setValid(validateFields(validate, value));
		if (valid) {
			setState(false);
			return;
		} else {
			setTimeout(() => {
				setState(false);
			}, 600);
		}
		return () => {
			setState(true);
		};
	}, [value]);

	return (
		<div className="mb-4">
			<label
				htmlFor={name}
				className="block text-gray-700 font-bold mb-2"
			>
				{label}
			</label>
			<div className="relative">
				<input
					type={'email'}
					id={name}
					name={name}
					autoComplete={autoComplete}
					placeholder={pcHolder}
					value={value}
					onChange={onChange}
					className={`border-2 border-gray-400 rounded-lg transition duration-75 py-3 px-4 pr-11 w-full font-bold tracking-wider text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						valid === true ? 'border-green-500' : ''
					} ${submit && valid === false ? 'border-red-500' : ''}`}
				/>
				<div className="absolute z-40 inset-y-0 w-11 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2">
					{state && loader ? (
						<div
							className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
							role="status"
						></div>
					) : valid === false && submit ? (
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
			{errorMessage && valid === false && submit ? (
				<h1 className="block transition-all duration-300 text-red-500 mt-2 font-semibold tracking-wide">
					{errorMessage}
				</h1>
			) : null}
		</div>
	);
}

export { TiMail };
