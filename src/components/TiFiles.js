import React, { Fragment, useContext, useEffect, useState } from 'react';
import { TiFileContext, TiFormContext } from '../lib/Context';

const TiFiles = ({ name, children, className }) => {
	const { setValues } = useContext(TiFormContext);
	const [file, setFile] = useState(null);

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
					file,
					setFile,
				}}
			>
				{children}
			</TiFileContext.Provider>
		</div>
	);
};

const TiLabel = ({ name, title, ...rest }) => {
	return (
		<label htmlFor={name} {...rest}>
			{title}
		</label>
	);
};

const TiFile = ({
	label = 'Choose a File',
	className,
	statestyle = 'sr-only',
	...rest
}) => {
	const { name, setFile } = useContext(TiFileContext);

	const handleFileChange = (event) => {
		const files = event.target.files[0];
		setFile(files);
	};

	return (
		<label htmlFor={`${name}-button`} className={className}>
			<span className="h-full w-full whitespace-nowrap">{label}</span>
			<input
				id={`${name}-button`}
				name={`${name}-button`}
				type="file"
				className={statestyle}
				onChange={handleFileChange}
				{...rest}
			/>
		</label>
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
TiFiles.File = TiFile;
TiFiles.Info = TiInfo;

export default TiFiles;
