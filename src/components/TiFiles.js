import React, { Fragment, useContext, useEffect, useState } from 'react';
import { TiFileContext, TiFormContext } from '../lib/Context';

export function TiFiles({
	name,
	title,
	label = 'Choose a File',
	fallback,
	className = '',
	style = {},
	...rest
}) {
	const { setValues } = useContext(TiFormContext);
	const [file, setFile] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [theme, setTheme] = useState({
		border: 'border-indigo-600',
		bg: 'bg-white',
		heading: 'text-indigo-600',
		text: 'text-gray-500',
		...style,
	});

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiFiles {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		console.log('theme = ', theme);
		return () => {
			if (rest.disabled) {
				setDisabled(true);
			}
		};
	}, []);

	useEffect(() => {
		if (setValues) {
			setValues((prev) => ({ ...prev, [name]: file }));
		}
	}, [file]);

	const handleFileChange = (event) => {
		const files = event.target.files[0];
		setFile(files);
	};

	return (
		<div className={`px-3 py-2 ${className}`}>
			<TiFileContext.Provider
				value={{
					name,
					isDisabled: disabled,
					setIsDisabled: setDisabled,
					file,
					setFile,
				}}
			>
				<label htmlFor={name}>{title}</label>

				<div
					className={`flex items-center border-2 ${theme.border} rounded-lg`}
				>
					<label
						htmlFor={`${name}-button`}
						className={`m-2 p-2 py-1 shadow rounded-md border font-medium cursor-pointer ${theme.bg} ${theme.border}`}
					>
						<span
							className={`h-full w-full whitespace-nowrap ${theme.heading}`}
						>
							{label}
						</span>
						<input
							id={`${name}-button`}
							name={`${name}-button`}
							type="file"
							className={`sr-only`}
							onChange={handleFileChange}
							{...rest}
						/>
					</label>
					<div className="ml-3 mr-5">
						<Fragment>
							{file ? (
								<p className={`text-sm ${theme.text}`}>
									{file.name} | ({file.size} bytes)
								</p>
							) : (
								<p className={`text-sm ${theme.text}`}>
									{fallback}
								</p>
							)}
						</Fragment>
					</div>
				</div>
			</TiFileContext.Provider>
		</div>
	);
}
