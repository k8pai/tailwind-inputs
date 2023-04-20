import React, { useState } from 'react';
import { cleanupDisclosure } from '../lib/helpers';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function TiDisclosure({
	name,
	options,
	Component = MdKeyboardArrowDown,
	className = 'p-2',
	style = {},
	...rest
}) {
	const [choices, setChoices] = useState(cleanupDisclosure(options) || []);
	const [theme, setTheme] = useState({
		size: 'max-w-sm',
		button: 'rounded-md bg-slate-200/80 text-gray-700 font-semibold',
		padding: 'px-3 py-2',
		content: 'bg-transparent rounded-md',
		componentSize: '1.5em',
		componentStyle: '',
		...style,
	});

	const handleClick = (param) => {
		const { id } = param;
		setChoices((el) =>
			el.map((item) =>
				item.id === id ? { ...item, isOpen: !item.isOpen } : item,
			),
		);
	};

	return (
		<div className={`${className} ${theme.size} overflow-auto space-y-1`}>
			{choices.map((el) => {
				return (
					<div className={`space-y-px w-full`}>
						<button
							className={`${theme.padding} ${theme.button} w-full flex items-center justify-between`}
							onClick={() => handleClick(el)}
						>
							<span className={``}>{el.title}</span>
							<div className="h-full flex justify-center items-center">
								<IconContext.Provider
									value={{
										size: theme.componentSize,
										className: `global-class-name ${theme.componentStyle}`,
									}}
								>
									{el.isOpen ? (
										<MdKeyboardArrowUp />
									) : (
										<MdKeyboardArrowDown />
									)}
								</IconContext.Provider>
							</div>
						</button>
						<div
							className={`transition-all overflow-hidden ${
								el.isOpen ? theme.padding : 'px-3'
							} ${theme.content} ${el.isOpen ? 'h-fit' : 'h-0'}`}
						>
							{el.content}
						</div>
					</div>
				);
			})}
			<div></div>
		</div>
	);
}
