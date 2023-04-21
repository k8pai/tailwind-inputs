import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BiCross, BiSearch } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

export default function TiSearch({
	placeholder = 'Search',
	onChange = () => {},
}) {
	const [value, setValue] = useState('');

	const handleChange = (event) => {
		setValue(event.target.value);
		onChange(value);
	};

	const clearField = () => {
		setValue('');
	};
	return (
		<div>
			<div className="relative max-w-lg w-full rounded-full shadow-xl overflow-hidden">
				<button
					type="button"
					className="absolute z-40 inset-y-0 w-9 my-2 rounded-full ml-2 left-0 flex justify-center items-center outline-none shadow-xl border border-gray-500"
				>
					<IconContext.Provider
						value={{
							size: '1.5em',
							className: 'global-class-name',
						}}
					>
						<BiSearch />
					</IconContext.Provider>
				</button>
				<input
					type="text"
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					className={`px-14 py-3 hover:align-middle rounded-full font-semibold text-lg border-2 border-gray-300 tracking-wider focus:outline-none w-full`}
				/>
				<button
					onClick={clearField}
					className={`absolute z-40 inset-y-0 w-8 my-3 rounded-full mr-3 right-0 flex justify-center items-center outline-none transition-all duration-300 ${
						value ? 'visible opacity-100' : 'invisible opacity-0'
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
			</div>
		</div>
	);
}
