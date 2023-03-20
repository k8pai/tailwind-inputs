import React, { Fragment, useContext, useState } from 'react';
import { TiFormContext } from '../lib/Context';

const TiFiles = ({ children, className }) => {
	const [values, setValues] = useState('');

	return (
		<div className={className}>
			<div className="mt-1 flex items-center border-2 border-indigo-600 rounded-lg">
				<TiFormContext.Provider
					value={{
						values,
						setValues,
					}}
				>
					{children}
				</TiFormContext.Provider>
			</div>
		</div>
	);
};

// const TiLabel = ({ name, title, ...rest }) => {
// 	return (
// 		<label
// 			htmlFor={name}
// 			className={`block text-lg ml-1 font-semibold mb-2`}
// 			{...rest}
// 		>
// 			{title}
// 		</label>
// 	);
// };

const TiFile = ({ name }) => {
	const { values, setValues } = useContext(TiFormContext);
	const handleFileChange = (event) => {
		const files = event.target.files;
		const filesArray = Array.from(files);
		console.log(files, filesArray);
		setValues({ ...values, [name]: filesArray });
	};
	return (
		<label
			htmlFor={`${name}-button`}
			className="cursor-pointer bg-white m-2 p-2 py-1 shadow rounded-md border border-indigo-600 font-medium text-indigo-600 hover:text-indigo-500 "
		>
			<span className="h-full w-full">Choose a file</span>
			<input
				id={`${name}-button`}
				name={`${name}-button`}
				type="file"
				className="sr-only"
				onChange={handleFileChange}
			/>
		</label>
	);
};

const TiInfo = ({ name }) => {
	const { values } = useContext(TiFormContext);
	return (
		<div className="ml-3 mr-5">
			{values[name] && values[name].length > 0 ? (
				<Fragment>
					{values[name].map((file, index) => (
						<p key={index} className="text-sm text-gray-500">
							{file.name} | ({file.size} bytes)
						</p>
					))}
				</Fragment>
			) : (
				<p className="text-sm text-gray-500">No file selected</p>
			)}
		</div>
	);
};

// TiFiles.Label = TiLabel;
TiFiles.File = TiFile;
TiFiles.Info = TiInfo;

export default TiFiles;
