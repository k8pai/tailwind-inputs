import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext } from '../lib/Context';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { CiShoppingTag } from 'react-icons/ci';

export default function TiSearchWithTag({
	name,
	label = 'Categories',
	style = {
		mode: 'light',
	},
	fallback = 'No Tags Selected',
	placeholder = 'Enter Tags Seperated By ,',
	autoComplete = 'off',
	getTags = () => {},
	...rest
}) {
	const [state, setState] = useState({
		value: '',
		tags: [],
	});
	const { values, setValues, submit } = useContext(TiFormContext);
	const [theme, setTheme] = useState({
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

	useEffect(() => {
		setValues({ ...values, [name]: state });
	}, [state]);

	const removeTag = (el) => {
		const data = state.tags.filter((item) => item !== el);
		setState({ ...state, tags: data });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { value, tags } = state;
		const data = value.split(',');
		const tagsArr = data.map((el, ind) => el.trim());

		setState({
			value: '',
			tags:
				tags.length !== 0
					? [...tags, ...tagsArr.filter((el) => !tags.includes(el))]
					: tagsArr,
		});

		getTags(state.tags);
	};

	const hangleChange = (event) => {
		const { value } = event.target;
		setState({ ...state, value: value });
	};

	return (
		<div className={`${theme.size} p-2`} {...rest}>
			{label && (
				<label
					htmlFor={name}
					className={`${theme.label} ${theme.color}`}
				>
					{label}
				</label>
			)}
			<div className={`relative mt-2 bg-transparent ${theme.color}`}>
				<form onSubmit={handleSubmit}>
					<input
						id={name}
						name={name}
						value={state.value}
						autoComplete={autoComplete}
						onChange={hangleChange}
						placeholder={placeholder}
						className={`transition duration-75 w-full leading-tight outline-none focus:shadow-outline border-2 ${
							theme.padding ?? 'px-4 py-3 '
						} ${theme.input} ${theme.bg} ${theme.default}`}
					/>
				</form>
			</div>
			<div className="flex flex-wrap w-full mt-2">
				{state.tags.length ? (
					state.tags?.map((el, ind) => {
						return (
							<Tags
								key={ind}
								theme={theme}
								el={el}
								removeTag={removeTag}
							/>
						);
					})
				) : (
					<TagsFallback fallback={fallback} />
				)}
			</div>
		</div>
	);
}

const Tags = ({ theme, el, removeTag }) => {
	return (
		<div
			className={`rounded-md m-1 flex items-center ${theme.border} ${theme.bg}`}
		>
			<div
				className={`py-1 ml-2 font-semibold tracking-wider inline-block align-middle`}
			>
				{el}
			</div>
			<button className={`p-1 m-1`} onClick={() => removeTag(el)}>
				<IconContext.Provider
					value={{
						size: '1em',
						className: 'global-class-name',
					}}
				>
					<MdClose />
				</IconContext.Provider>
			</button>
		</div>
	);
};

const TagsFallback = ({ fallback }) => {
	return (
		<div className={`flex items-center space-x-2 mt-2`}>
			<IconContext.Provider
				value={{
					size: '1.5em',
					className: 'global-class-name',
				}}
			>
				<CiShoppingTag />
			</IconContext.Provider>
			<div
				className={`text-lg leading-none text-slate-700 font-semibold font-sans capitalize tracking-wider align-middle`}
			>
				{fallback}
			</div>
		</div>
	);
};
