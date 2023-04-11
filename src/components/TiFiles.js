import React, { Fragment, useContext, useEffect, useState } from 'react';
import { TiFileContext, TiFormContext } from '../lib/Context';

const TiLabel = ({ name, title, ...rest }) => {
	return (
		<label htmlFor={name} {...rest}>
			{title}
		</label>
	);
};

const TiFileWrapper = ({ className, label = 'Choose a File', children }) => {
	const { name } = useContext(TiFileContext);
	return (
		<label htmlFor={`${name}-button`} className={className}>
			<span className="h-full w-full whitespace-nowrap">{label}</span>
			{children}
		</label>
	);
};

const TiFile = ({ className, ...rest }) => {
	const { name, setIsDisabled, setFile } = useContext(TiFileContext);

	useEffect(() => {
		return () => {
			if (rest.disabled) {
				setIsDisabled(true);
			}
		};
	}, []);

	const handleFileChange = (event) => {
		const files = event.target.files[0];
		setFile(files);
	};

	return (
		<input
			id={`${name}-button`}
			name={`${name}-button`}
			type="file"
			className={`sr-only ${className}`}
			onChange={handleFileChange}
			{...rest}
		/>
	);
};

const TiInfo = ({ fallback = 'No file selected' }) => {
	const { file } = useContext(TiFileContext);

	return (
		<Fragment>
			{file ? (
				<p className="text-sm text-gray-500">
					{file.name} | ({file.size} bytes)
				</p>
			) : (
				<p className="text-sm text-gray-500">{fallback}</p>
			)}
		</Fragment>
	);
};

TiFiles.Label = TiLabel;
TiFiles.FileWrapper = TiFileWrapper;
TiFiles.File = TiFile;
TiFiles.Info = TiInfo;

export default function TiFiles({ name, children, className }) {
	const { setValues } = useContext(TiFormContext);
	const [file, setFile] = useState(null);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (setValues) {
			setValues((prev) => ({ ...prev, [name]: file }));
		}
	}, [file]);

	return (
		<div className={className}>
			<TiFileContext.Provider
				value={{
					name,
					isDisabled: disabled,
					setIsDisabled: setDisabled,
					file,
					setFile,
				}}
			>
				{children({ isDisabled: disabled })}
			</TiFileContext.Provider>
		</div>
	);
}
