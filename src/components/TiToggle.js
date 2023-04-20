import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext } from '../lib/Context';

export default function TiToggle({ name, style = {}, getState = () => {} }) {
	const { setValues } = useContext(TiFormContext);
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

	useEffect(() => {
		return () =>
			setValues == '()=>{}'
				? console.warn(
						`You need to enclose <TiToggle {...props} /> within <TiForm>, to access values of ${name} in your TiForm's submitHandler function.`,
				  )
				: null;
	}, []);

	useEffect(() => {
		setValues((el) => ({ ...el, [name]: isToggled }));
	}, [isToggled]);

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
					type="button"
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
