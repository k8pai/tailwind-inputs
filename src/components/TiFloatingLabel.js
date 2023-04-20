import React, { useState } from 'react';

export default function TiFloatingLabel({
	name = 'floatingLabel',
	label = 'Floating Label',
	style = { labelPosition: 'center' },
}) {
	const [state, setState] = useState({
		value: '',
		focus: false,
	});
	const [theme, setTheme] = useState({
		transformFrom:
			style.labelPosition === 'border'
				? 'translate-y-1/2'
				: 'translate-y-full',
		size: 'max-w-sm',
		color: style.mode === 'dark' ? 'text-white' : 'text-black',
		bg: style.mode === 'dark' ? 'bg-[#181818]' : 'bg-white',
		border: 'border-2 border-gray-400',
		// padding: 'pl-6 py-5 pr-11',
		disabled:
			style.mode === 'dark'
				? 'text-gray-400 bg-[#121212]'
				: 'text-gray-300 bg-slate-50',

		label: 'font-semibold tracking-wide ml-2',
		input: 'font-semibold tracking-wider text-lg rounded-lg',
		default: 'border-gray-500',
		valid: 'border-green-400',
		invalid: 'border-red-400',
		error: 'text-red-500 font-semibold tracking-wide',
		...style,
	});
	const handleFocus = () => {
		setState((el) => ({ ...el, focus: !el.focus }));
	};

	const handleChange = (event) => {
		setState((el) => ({ ...el, value: event.target.value }));
	};

	return (
		<div className="relative p-6">
			<input
				type="text"
				name={name}
				value={state.value}
				onBlur={handleFocus}
				onFocus={handleFocus}
				onChange={handleChange}
				autoComplete="off"
				className={`px-3 py-2 focus:outline-none border rounded-lg absolute transform transition-transform translate-y-full ${
					state.focus ? 'border-gray-900' : 'border-gray-300'
				}`}
			/>
			<label
				htmlFor={name}
				className={`py-2 z-10 font-semibold tracking-wide border border-transparent absolute transform transition-all ${
					state.focus
						? ' translate-x-1 translate-y-0 text-gray-900'
						: ` translate-x-3 ${theme.transformFrom} text-gray-400/90`
				}`}
			>
				{label}
			</label>
		</div>
	);
}
