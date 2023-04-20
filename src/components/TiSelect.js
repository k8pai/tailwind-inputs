import { IconContext } from 'react-icons';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TiFormContext } from '../lib/Context';
import { cleanupOptions } from '../lib/helpers';

export default function TiSelect({
	name,
	value,
	indicator = true,
	options,
	onChange = () => {},
	style = {
		mode: 'light',
	},
	children,
	...rest
}) {
	const { setValues } = useContext(TiFormContext);
	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState({
		size: 'max-w-sm',
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
	const [selected, setSelected] = useState({
		name: value ?? '',
		value: value ?? '',
	});
	const [choices, setChoices] = useState(cleanupOptions(options));
	const componentRef = useRef(null);

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiSelect {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

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

	const handleClick = (option) => {
		if (!option.disable && option.value !== selected) {
			setSelected({ name: option.name, value: option.value });
			onChange(option.value);
		}
		if (!option.disable) {
			setIsOpen((val) => !val);
		}
	};

	return (
		<div
			className={`relative bg-transparent mb-4 ${theme.size} w-full`}
			ref={componentRef}
		>
			<div
				aria-hidden={isOpen}
				className={`appearance-none ${theme.bg} ${theme.border} rounded-lg overflow-hidden py-3 pl-4 pr-10 leading-tight transition focus:outline-none aria-hidden:shadow-outline ${theme.focusBorder}`}
				id={name}
				name={name}
				onClick={toggleOptions}
			>
				<span
					className={`font-semibold tracking-wide select-none ${theme.color}`}
				>
					{selected.name || 'Select'}
				</span>
				<HiChevronUpDown
					className={`absolute inset-y-0 right-0 h-full mx-3 ${theme.color}`}
				/>
			</div>
			<div
				aria-hidden={!isOpen}
				className={`absolute top-full left-0 py-1 right-0 z-10 transition-all ease-in-out duration-200 ${theme.bg} ${theme.border} rounded-md shadow-lg mt-1 overflow-auto max-h-60 opacity-100 visible aria-hidden:invisible aria-hidden:opacity-0`}
			>
				{choices.map((option, optionIdx) => {
					return (
						<div
							key={optionIdx}
							className={`relative select-none py-2 transition-all ease-in-out font-semibold ${
								indicator ? 'pr-4 pl-11' : 'px-4'
							} ${theme.color} ${
								option.disable
									? `${theme.disabled}`
									: `${theme.hovBg} cursor-pointer`
							}`}
							onClick={() => handleClick(option)}
						>
							<>
								<span
									className={`block truncate ${
										selected.value === option.value
											? 'font-medium'
											: 'font-normal'
									}`}
								>
									{option.name}
								</span>
								{selected.value === option.value &&
								indicator ? (
									<span
										className={`absolute inset-y-0 left-0 flex items-center mx-3 ${theme.indicator}`}
									>
										<IconContext.Provider
											value={{
												size: '1.4em',
												className: 'global-class-name',
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
	);
}
