import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import helpers from '../lib/helpers';

const { validateFields, generatePlaceholder } = helpers;

function TiPassword({
	name,
	label,
	autoComplete = 'off',
	value,
	onChange,
	submit,
	className = '',
	placeholder,
	showPass = false,
	validate,
	errorMessage = '',
}) {
	const [valid, setValid] = useState(false);
	const [pcHolder, setPcHolder] = useState(null);
	const [inpType, setInpType] = useState('password');

	useEffect(() => {
		if (typeof placeholder === 'undefined') {
			setPcHolder(generatePlaceholder(validate));
		} else {
			setPcHolder(placeholder);
		}
	}, []);

	useEffect(() => {
		setValid(validateFields(validate, value));
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
					type={inpType}
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
				{showPass ? (
					<button
						onClick={() =>
							inpType === 'password'
								? setInpType('text')
								: setInpType('password')
						}
						type="button"
						className="absolute z-40 w-11 inset-y-0 right-0 flex items-center px-3 rounded-r-lg focus:outline-none"
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
			{errorMessage && !valid && submit ? (
				<h1 className="block text-red-500 mt-2 font-semibold tracking-wide">
					{errorMessage}
				</h1>
			) : null}
		</div>
	);
}

export { TiPassword };
