import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TiFormContext } from '../lib/Context';
import { cleanupChoices, cleanupOptions } from '../lib/helpers';

export default function TiMultiSelect({
	name,
	label,
	value,
	style = {
		mode: 'dark',
	},
	options,
	onChange = () => {},
	mandatory,
	indicator,
	placeholder = 'Select',
	...rest
}) {
	const { setValues } = useContext(TiFormContext);
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState({
		label:
			style.mode === 'dark'
				? 'text-white text-lg font-semibold'
				: 'text-black text-lg font-semibold',
		size: 'max-w-xl',
		indicator: 'text-green-500',
		color: style.mode === 'dark' ? 'text-white' : 'text-black',
		bg: style.mode === 'dark' ? 'bg-[#181818]' : 'bg-white',
		hovBg:
			style.mode === 'dark' ? 'hover:bg-[#242424]' : 'hover:bg-slate-200',
		border: 'border-2 border-gray-400',
		disabled:
			style.mode === 'dark'
				? 'text-gray-400 bg-[#121212]'
				: 'text-gray-300 bg-slate-50',
		focusBorder:
			style.mode === 'dark'
				? 'aria-hidden:border-gray-100'
				: 'aria-hidden:border-gray-700',
		...style,
	});
	const [selected, setSelected] = useState(
		value ? [{ name: value ?? '', value: value ?? '' }] : [],
	);
	const [choices, setChoices] = useState(cleanupOptions(options));
	const componentRef = useRef(null);

	useEffect(() => {
		setValues((el) => ({ ...el, [name]: selected }));
		setChoices(cleanupChoices(options, selected));
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

	function handleClick(item) {
		if (!item.disable) {
			setSelected((el) => [
				...el,
				{ name: item.name, value: item.value },
			]);
			onChange([...selected, { name: item.name, value: item.value }]);
		}
	}

	return (
		<div {...rest}>
			{label && (
				<label htmlFor={name} className={theme.label}>
					{label}
					{mandatory && (
						<span className="text-red-500 font-extrabold text-lg ml-2">
							*
						</span>
					)}
				</label>
			)}
			<div
				className={`relative bg-transparent mb-4 ${theme.size} w-full`}
			>
				<div
					aria-hidden={isOpen}
					className={`appearance-none rounded-lg pr-10 leading-tight transition focus:outline-none aria-hidden:shadow-outline ${theme.bg} ${theme.border} ${theme.focusBorder}`}
					id={name}
					name={name}
					onClick={toggleOptions}
					ref={componentRef}
				>
					<div className="flex items-center space-x-2 m-2 overflow-x-auto scrollbar scrollbar-hide">
						{selected.length > 0 ? (
							selected?.map((el, elIdx) => (
								<div
									key={elIdx}
									onClick={(event) => event.stopPropagation()}
									className={
										' py-1 px-2 h-full border shadow-lg rounded-md select-none flex items-center'
									}
								>
									<span
										className={`font-semibold h-full tracking-wide whitespace-nowrap ${theme.color}`}
									>
										{el.value}
									</span>
									<button
										onClick={(event) => {
											event.preventDefault();
											event.stopPropagation();
											setSelected((val) =>
												val.filter(
													(elem) =>
														elem.value !== el.value,
												),
											);
										}}
									>
										<MdOutlineClose
											className={`h-full ml-2 ${theme.color}`}
										/>
									</button>
								</div>
							))
						) : (
							<span
								className={`font-semibold border border-transparent tracking-wide select-none px-4 py-1 h-full ${theme.color}`}
							>
								{placeholder}
							</span>
						)}
					</div>

					<HiChevronUpDown
						className={`absolute inset-y-0 right-0 h-full mx-3 ${theme.color}`}
					/>
				</div>
				<div
					aria-hidden={!isOpen}
					className={`absolute top-full left-0 right-0 z-10 transition-all ease-in-out duration-200 ${
						theme.bg
					} ${
						choices.length > 0 ? theme.border : 'border-0'
					} rounded-md shadow-lg mt-1 overflow-auto max-h-60 opacity-100 visible aria-hidden:invisible aria-hidden:opacity-0  ${
						choices.length > 0 ? 'py-1' : 'py-0'
					}`}
				>
					{choices.map((item, ind) => {
						return (
							<div
								key={ind}
								className={`relative select-none py-2 transition-all ease-in-out font-semibold ${
									indicator ? 'pr-4 pl-11' : 'px-4'
								} ${theme.color} ${
									item.disable
										? `${theme.disabled}`
										: `${theme.hovBg} cursor-pointer`
								}`}
								onClick={() => handleClick(item)}
							>
								<>
									<span className={`block truncate`}>
										{item.name}
									</span>
									{selected.some(
										(el) => el.value === item.value,
									) && indicator ? (
										<span
											className={`absolute inset-y-0 left-0 flex items-center mx-3 ${theme.indicator}`}
										>
											<IconContext.Provider
												value={{
													size: '1.4em',
													className:
														'global-class-name text-green-500',
												}}
											>
												<HiCheck />
											</IconContext.Provider>
										</span>
									) : null}
								</>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
