import React, { useState } from 'react';
import { cleanupDisclosure } from '../lib/helpers';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

export default function TiDisclosure({
	name,
	options,
	Component = MdKeyboardArrowDown,
	className = 'p-2',
	style = {
		mode: 'dark',
	},
	...rest
}) {
	const [choices, setChoices] = useState(cleanupDisclosure(options) || []);
	const [theme, setTheme] = useState({
		size: 'max-w-sm',
		color: style.mode === 'dark' ? 'text-white' : 'text-black',
		bg: style.mode === 'dark' ? 'bg-[#181818]' : 'bg-white',
		button: 'rounded-md font-semibold',
		padding: 'px-3 py-2',
		content: 'rounded-md',
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
					<div className={`space-y-px w-full relative`}>
						<button
							type="button"
							className={`${theme.padding} ${theme.button} ${theme.bg} ${theme.color} w-full flex items-start justify-between`}
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
									<MdKeyboardArrowUp
										className={`transition-all ${
											el.isOpen
												? 'rotate-0'
												: 'rotate-180'
										}`}
									/>
								</IconContext.Provider>
							</div>
						</button>
						<motion.div
							className={`transition-all overflow-hidden ${
								el.isOpen ? theme.padding : 'px-3'
							} ${theme.content} ${
								el.isOpen
									? `max-h-screen ease-in`
									: 'max-h-0 ease-in'
							}`}
							transition={{
								type: 'spring',
								stiffness: 350,
								damping: 30,
							}}
						>
							{el.content}
						</motion.div>
					</div>
				);
			})}
			<div></div>
		</div>
	);
}
