import React, { useContext, useEffect, useState } from 'react';
import { TiFormContext } from '../lib/Context';
import { IconContext } from 'react-icons';
import { MdAdd, MdClose } from 'react-icons/md';
import { CiShoppingTag } from 'react-icons/ci';

export default function TiSearchWithTag({
	name,
	label = 'Categories',
	style = {
		mode: 'light',
	},
	infoNote = 'Space are not allowed for tags, try snake casing.',
	splitter = ' ',
	fallback = 'No Tags Selected',
	buttonText = '',
	placeholder = 'Tags realted to Categories',
	autoComplete = 'off',
	buttonComponent: Button = MdAdd,
	fallbackComponent = CiShoppingTag,
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
		input: 'font-semibold tracking-wider text-md rounded-lg',
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

	const setTag = () => {
		const { value, tags } = state;
		const data = value.split(splitter);
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

	const handleChange = (event) => {
		const { value } = event.target;
		if (value.includes(' ')) {
			setTag();
		} else {
			setState({ ...state, value: value });
		}
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
			<div
				className={`relative mt-2 bg-transparent overflow-hidden ${theme.color}`}
			>
				<input
					id={name}
					name={name}
					value={state.value}
					autoComplete={autoComplete}
					onChange={handleChange}
					placeholder={placeholder}
					className={`transition duration-75 w-full leading-tight outline-none focus:shadow-outline border-2 ${
						theme.padding ?? 'pl-3 pr-9 py-2 '
					} ${theme.input} ${theme.bg} ${theme.default}`}
				/>
				{buttonText && (
					<button
						className="absolute inset-y-0 right-0 px-3 py-2 "
						onClick={setTag}
					>
						{buttonText}
					</button>
				)}
				{Button && (
					<button
						className="absolute inset-y-0 right-2 my-2 rounded-md"
						onClick={setTag}
					>
						<IconContext.Provider
							value={{
								size: '1.3em',
								className: 'global-class-name',
							}}
						>
							<Button />
						</IconContext.Provider>
					</button>
				)}
			</div>

			{infoNote && (
				<div className={`text-sm font-semibold tracking-wide m-px`}>
					{infoNote}
				</div>
			)}
			<div className="flex flex-wrap w-full mt-1">
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
				) : fallback ? (
					<TagsFallback
						fallback={fallback}
						Component={fallbackComponent}
					/>
				) : null}
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

const TagsFallback = ({ Component, fallback }) => {
	return (
		<div className={`flex items-center space-x-2 mt-2`}>
			<IconContext.Provider
				value={{
					size: '1.5em',
					className: 'global-class-name',
				}}
			>
				<Component />
			</IconContext.Provider>
			<div
				className={`text-lg leading-none text-gray-900 font-semibold font-sans capitalize tracking-wider align-middle`}
			>
				{fallback}
			</div>
		</div>
	);
};
