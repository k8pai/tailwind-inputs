import { IconContext } from 'react-icons';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext, TiSelectContext } from '../lib/Context';

const TiSelect = ({ name, value, children }) => {
	const { setValues } = useContext(TiFormContext);
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(value || '');

	useEffect(() => {
		setValues((el) => ({ ...el, [name]: selected }));
	}, [selected]);

	const toggleOptions = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative mb-4 max-w-xs w-full">
			<div
				aria-hidden={isOpen}
				className="appearance-none border-2 border-gray-400 rounded-lg py-3 pl-4 pr-10 leading-tight transition focus:outline-none aria-hidden:shadow-outline aria-hidden:border-gray-700"
				id={name}
				name={name}
				onClick={toggleOptions}
			>
				<span className="font-semibold tracking-wide select-none">
					{selected || 'Select'}
				</span>
				<HiChevronUpDown className="absolute inset-y-0 right-0 h-full mx-3 text-gray-700" />
			</div>
			<TiSelectContext.Provider
				value={{
					selected,
					setSelected,
					isOpen,
					setIsOpen,
				}}
			>
				<div
					aria-hidden={!isOpen}
					className={`absolute top-full left-0 py-1 right-0 z-10 transition-all ease-in-out duration-200 bg-white border border-gray-400 rounded-md shadow-lg mt-1 overflow-auto max-h-60 opacity-100 visible aria-hidden:invisible aria-hidden:opacity-0`}
				>
					{children}
				</div>
			</TiSelectContext.Provider>
		</div>
	);
};

const TiSelectOptions = ({ value, disable, children }) => {
	const { selected, setSelected, setIsOpen } = useContext(TiSelectContext);

	const handleClick = () => {
		if (!disable) {
			setSelected(value);
			setIsOpen((val) => !val);
		}
	};

	return (
		<div
			className={`relative select-none pr-4 py-2 pl-11  ${
				disable ? 'bg-slate-50' : 'hover:bg-gray-100  cursor-pointer'
			}  transition-all ease-in-out font-semibold`}
			onClick={handleClick}
		>
			<>
				<span
					className={`block truncate ${
						selected === value ? 'font-medium' : 'font-normal'
					} ${disable ? 'text-gray-300' : null}`}
				>
					{children}
				</span>
				{selected === value ? (
					<span className="absolute inset-y-0 left-0 flex items-center mx-3 text-amber-600">
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name text-green-500',
							}}
						>
							<HiCheck />
						</IconContext.Provider>
					</span>
				) : null}
			</>
		</div>
	);
};

TiSelect.Option = TiSelectOptions;

export default TiSelect;
