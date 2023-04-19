import React, { useEffect, useRef, useState } from 'react';

export default function TiModal({
	heading = '',
	content = '',
	buttonText = 'Got it, thanks!',
}) {
	const componentRef = useRef(null);
	const [isOpen, setIsOpen] = useState(true);
	const [theme, setTheme] = useState({
		popup: 'p-6 bg-white max-w-lg',
		border: 'rounded-xl',
		heading: 'text-lg font-semibold leading-6 text-gray-900',
		text: 'text-sm text-gray-500',
		button: 'rounded-md border border-transparent transition-all bg-blue-100 text-sm font-medium text-blue-900 hover:bg-blue-200 ',
	});

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
		setIsOpen((ref) => !ref);
	};
	return (
		<div ref={componentRef}>
			<button onClick={toggleOptions}>click me to show popup</button>
			<div
				className={`w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all overflow-hidden shadow-xl ${
					isOpen
						? 'scale-100 opacity-100 visible'
						: 'scale-95 opacity-0 invisible'
				} ${theme.popup} ${theme.border}`}
			>
				<h1 className={`${theme.heading}`}>{heading}</h1>
				<h3 className={`mt-2 ${theme.text}`}>{content}</h3>
				<button
					onClick={toggleOptions}
					className={`mt-4 px-4 py-2 inline-flex justify-center ${theme.button} focus:outline-none`}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
