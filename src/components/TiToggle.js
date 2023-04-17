import React, { useState } from 'react';

export default function TiToggle({ style = {}, getState = () => {} }) {
	const [isToggled, setIsToggle] = useState(false);
	const [theme, setTheme] = useState({
		bar: `w-14 h-8`,
		btn: `w-6 h-6 left-1 top-1`,
		btnBg: 'bg-white',
		barBg: 'bg-gray-300',
		shadow: 'shadow-md',
		duration: 'duration-300',
		barBorder: 'rounded-full',
		btnBorder: 'rounded-full',
		...style,
	});

	const toggle = () => {
		getState(!isToggled);
		setIsToggle(!isToggled);
	};

	return (
		<div className="flex justify-center items-center">
			<div
				className={`relative ${theme.bar} ${theme.shadow} ${theme.barBorder} ${theme.barBg}`}
			>
				<button
					className={`absolute transform transition-transform ${
						theme.btn
					} ${theme.btnBorder} ${theme.shadow} ${theme.btnBg} ${
						theme.duration
					} ${isToggled ? 'translate-x-full' : 'translate-x-0'}`}
					onClick={toggle}
				></button>
			</div>
		</div>
	);
}
