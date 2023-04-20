import { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { TiTick, TiTimes } from 'react-icons/ti';
import { validateFields } from '../lib/helpers';
import { TiFormContext } from '../lib/Context';

export default function TiPassword({
	name,
	error,
	label,
	style = {
		mode: 'light',
	},
	loader = false,
	showPass = true,
	validate = 'password',
	mandatory,
	placeholder = '',
	autoComplete = 'off',
	...rest
}) {
	const { values, setValues, submit } = useContext(TiFormContext);

	const [value, setValue] = useState('');
	const [valid, setValid] = useState(null);
	const [theme, setTheme] = useState({
		bg: style.mode === 'dark' ? 'bg-[#181818]' : 'bg-white',
		size: 'max-w-sm',
		color: style.mode === 'dark' ? 'text-white' : 'text-black',
		border: 'border-2 border-gray-400',
		padding: 'px-4 py-3',
		disabled:
			style.mode === 'dark'
				? 'text-gray-400 bg-[#121212]'
				: 'text-gray-300 bg-slate-50',

		label: 'font-semibold tracking-wide ml-2',
		input: 'font-semibold tracking-wider text-lg rounded-lg',
		valid: 'border-green-400',
		error: 'text-red-500 font-semibold tracking-wide',
		default: 'border-gray-500',
		invalid: 'border-red-400',
		...style,
	});
	const [animate, setAnimate] = useState(false);
	const [inpType, setInpType] = useState('password');

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiPassword {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
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
	// useEffect(() => {
	// 	console.log('valid ' + name + '? = ', valid);
	// 	console.log('submit = ', submit);
	// }, [valid]);

	// const handleChange = (event) => {
	// 	setValues({ ...values, [name]: event.target.value });
	// 	// console.log(
	// 	// 	'value = ',
	// 	// 	event.target.value,
	// 	// 	', type = ',
	// 	// 	validate,
	// 	// 	', valid? = ',
	// 	// 	validateFields(validate, event.target.value),
	// 	// );
	// 	setValid(validateFields(validate, event.target.value));
	// 	if (!animate) {
	// 		setAnimate(true);
	// 		setTimeout(() => {
	// 			setAnimate(false);
	// 		}, 300);
	// 	}
	// };

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
					type={inpType}
					value={value}
					autoComplete={autoComplete}
					onChange={(event) => setValue(event.target.value)}
					placeholder={placeholder}
					className={`transition duration-75 w-full leading-tight outline-none focus:shadow-outline ${
						validate && !theme.padding
							? 'pl-4 pr-11 py-3 '
							: theme.padding
					} ${theme.input} ${theme.border} ${theme.bg} ${
						valid === true
							? `${theme.valid}`
							: valid === false
							? `${theme.invalid}`
							: `${theme.default}`
					}`}
				/>

				<div className="absolute z-40 inset-y-0 right-0 flex items-center px-3 rounded-r-lg focus:outline-none space-x-2">
					<div className="relative flex items-center space-x-2">
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
