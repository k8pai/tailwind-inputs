import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiCross, BiSearch } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

export function TiSearch({
	placeholder = 'Search',
	onChange = () => {},
	onSubmit = () => {},
}) {
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
		onChange(value);
	};

	const clearField = () => {
		setValue('');
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('submitted search');
		onSubmit(value);
	};
	return (
		<div className="">
			<div className="relative p-2 max-w-lg w-full">
				<form onSubmit={handleSubmit}>
					<div className="absolute z-40 inset-y-0 w-10 h-10 my-4 rounded-full ml-4 left-0 flex justify-center items-center outline-none transition-all duration-100 opacity-80 hover:opacity-100 hover:shadow-md hover:shadow-slate-500/90">
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'global-class-name',
							}}
						>
							<BiSearch />
						</IconContext.Provider>
					</div>
					<input
						type="text"
						value={value}
						onChange={handleChange}
						placeholder={placeholder}
						className={`px-14 py-3 inline-block align-middle rounded-full font-semibold text-xl border-2 border-gray-300 tracking-wider focus:outline-none w-full focus:shadow-[0_3px_45px_-15px_rgba(24,24,24,0.4)]`}
					/>
					<button
						onClick={clearField}
						className={`absolute z-40 inset-y-0 w-10 h-10 my-4 rounded-full mr-4 right-0 flex justify-center items-center outline-none transition-all duration-300 ${
							value
								? 'visible opacity-100'
								: 'invisible opacity-0'
						}`}
					>
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'global-class-name',
							}}
						>
							<MdOutlineClose />
						</IconContext.Provider>
					</button>
				</form>
			</div>
		</div>
	);
}
