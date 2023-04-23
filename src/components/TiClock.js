import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

export default function TiClock({ name }) {
	const [state, setState] = useState({
		hours: '00',
		minutes: '00',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		const val = parseInt(value);
		if (name === 'hours' && !isNaN(val)) {
			const data = val < 10 ? `0${val}` : val.toString();
			if (val >= 0 && val <= 23) {
				setState({ ...state, [name]: data });
			} else {
				console.log('data = ', data);
				setState({ ...state, [name]: `0` + (data % 10) });
			}
		}
		if (name === 'minutes' && !isNaN(val)) {
			if (val >= 0 && val <= 59) {
				setState({ ...state, [name]: val });
			}
		}
		// if (!isNaN(val)) {
		// 	setState((el) => ({ ...el, [name]: val }));
		// }
	};

	const handleScroll = (event) => {
		console.log('i scrolled');
		console.log(event.target);
	};

	const decrementHours = () => {
		const hh = parseInt(state.hours);
		const value = hh - 1 < 10 ? `0${hh - 1}` : `${hh - 1}`;
		// console.log('hh = ', hh, ' value = ', value);
		const data = state.hours === '00' ? '23' : value;
		// console.log('data = ', data);
		setState({
			...state,
			hours: data,
		});
	};

	const incrementHours = () => {
		const hh = parseInt(state.hours);
		const value = hh + 1 < 10 ? `0${hh + 1}` : `${hh + 1}`;
		// console.log('hh = ', hh, ' value = ', value);
		const data = state.hours === '23' ? '00' : value;
		// console.log('data = ', data);
		setState({
			...state,
			hours: data,
		});
	};

	const decrementMinutes = () => {
		const hh = parseInt(state.minutes);
		const value = hh - 1 < 10 ? `0${hh - 1}` : `${hh - 1}`;
		// console.log('hh = ', hh, ' value = ', value);
		const data = state.minutes === '00' ? '59' : value;
		// console.log('data = ', data);
		setState({
			...state,
			minutes: data,
		});
	};

	const incrementMinutes = () => {
		const hh = parseInt(state.minutes);
		const value = hh + 1 < 10 ? `0${hh + 1}` : `${hh + 1}`;
		// console.log('hh = ', hh, ' value = ', value);
		const data = state.minutes === '59' ? '00' : value;
		// console.log('data = ', data);
		setState({
			...state,
			minutes: data,
		});
	};
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col items-center w-fit p-2">
				<button
					className="w-8 h-8 transition-all bg-[#141414] rounded-md flex justify-center items-center"
					onClick={incrementHours}
				>
					<IconContext.Provider
						value={{
							size: '1.5em',
							className: 'global-class-name',
						}}
					>
						<TiArrowSortedUp />
					</IconContext.Provider>
				</button>
				<input
					name={`hours`}
					type={'text'}
					value={state.hours}
					onChange={handleChange}
					onScroll={handleScroll}
					className={`align-middle leading-3 text-white border-2 border-gray-400/80 rounded-xl outline-none selection:select-none bg-gray-700 hover:bg-green-600/80 transition-all px-3 py-3 font-bold`}
					style={{
						textAlign: 'center',
						fontSize: '2em',
						width: '75px',
						caretColor: 'transparent',
					}}
				/>
				<button
					className="w-8 h-8 transition-all bg-gray-500 rounded-md flex justify-center items-center"
					onClick={decrementHours}
				>
					<IconContext.Provider
						value={{
							size: '1.5em',
							className: 'global-class-name',
						}}
					>
						<TiArrowSortedDown />
					</IconContext.Provider>
				</button>
			</div>
			<div className="flex items-center justify-center h-full text-6xl -translate-y-4 mx-4">
				<span
					style={{
						fontSize: '2em',
					}}
				>
					:
				</span>
			</div>
			<div className="flex flex-col items-center w-fit p-2">
				<button
					className="w-8 h-8 transition-all bg-[#141414] rounded-md flex justify-center items-center"
					onClick={incrementMinutes}
				>
					<IconContext.Provider
						value={{
							size: '1.5em',
							className: 'global-class-name',
						}}
					>
						<TiArrowSortedUp />
					</IconContext.Provider>
				</button>
				<input
					name={`minutes`}
					type={'text'}
					value={state.minutes}
					onChange={handleChange}
					onScroll={handleScroll}
					className={`align-middle leading-3 text-white border-2 border-gray-400/80 rounded-xl outline-none selection:select-none bg-gray-700 hover:bg-green-600/80 transition-all px-3 py-3 font-bold`}
					style={{
						textAlign: 'center',
						fontSize: '2em',
						width: '75px',
						caretColor: 'transparent',
					}}
				/>
				<button
					className="w-8 h-8 transition-all bg-gray-500 rounded-md flex justify-center items-center"
					onClick={decrementMinutes}
				>
					<IconContext.Provider
						value={{
							size: '1.5em',
							className: 'global-class-name',
						}}
					>
						<TiArrowSortedDown />
					</IconContext.Provider>
				</button>
			</div>
		</div>
	);
}
