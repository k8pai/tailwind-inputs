import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TiFormContext, TiMultiselectContext } from '../lib/Context';

const TiMultiselect = ({ name, value, children }) => {
	const { setValues } = useContext(TiFormContext);
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(value ? [value] : []);
	const componentRef = useRef(null);

	useEffect(() => {
		setValues((el) => ({ ...el, [name]: selected }));
	}, [selected]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				componentRef.current &&
				!componentRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [componentRef]);

	const toggleOptions = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative mb-4 max-w-md w-full" ref={componentRef}>
			<div
				aria-hidden={isOpen}
				className="appearance-none border-2 border-gray-400 rounded-lg pr-10 leading-tight transition focus:outline-none aria-hidden:shadow-outline aria-hidden:border-gray-700"
				id={name}
				name={name}
				onClick={toggleOptions}
			>
				<div className="flex items-center space-x-2 m-2 overflow-x-auto scrollbar-hide">
					{selected.length > 0 ? (
						selected?.map((el, elIdx) => (
							<div
								key={elIdx}
								onClick={(event) => event.stopPropagation()}
								className={
									' py-1 px-2 h-full border shadow-lg rounded-lg select-none flex items-center'
								}
							>
								<span className="font-semibold h-full tracking-wide whitespace-nowrap">
									{el}
								</span>
								<button
									onClick={(event) => {
										event.preventDefault();
										event.stopPropagation();
										setSelected((val) =>
											val.filter((elem) => elem !== el),
										);
									}}
								>
									<MdOutlineClose className="h-full ml-2 text-gray-700" />
								</button>
							</div>
						))
					) : (
						<span className="font-semibold border border-transparent tracking-wide select-none px-4 py-1 h-full">
							Select
						</span>
					)}
				</div>

				<HiChevronUpDown className="absolute inset-y-0 right-0 h-full mx-3 text-gray-700" />
			</div>
			<TiMultiselectContext.Provider
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
			</TiMultiselectContext.Provider>
		</div>
	);
};

const TiMultiselectOptions = ({ value, disable, children }) => {
	const { selected, setSelected, setIsOpen } =
		useContext(TiMultiselectContext);

	const handleClick = () => {
		if (!disable) {
			setSelected((el) => [...el, value]);
			setIsOpen((val) => !val);
		}
	};

	return (
		<div
			className={`relative select-none pr-4 py-2 pl-11 ${
				selected.find((el) => el === value) ? 'hidden' : 'block'
			} ${
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

TiMultiselect.Option = TiMultiselectOptions;

export default TiMultiselect;
