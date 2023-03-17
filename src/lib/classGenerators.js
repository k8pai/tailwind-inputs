const generateCustomStyles = (
	customize,
	defaultStyles = 'rounded-lg bg-transparent selection:select-none transition duration-75 py-3 px-4 pr-11 w-full font-semibold tracking-wider text-lg leading-tight border-2 outline-none focus:shadow-outline',
) => {
	const defaults = defaultStyles.split(' ').map((el) => el);
	const result = filterDefaultClass(customize, defaults);
	const response = generateFinalClass(customize, result);

	// console.log(result);
	// console.log(response);
	return response;
};

const generateFinalClass = (customize, result) => {
	return (
		result.map((el) => el).join(' ') +
		' ' +
		customize
			.split(' ')
			.map((el) => el)
			.join(' ')
	);
};

const filterDefaultClass = (customize, defaults) => {
	var res = '';
	const custom = customize.split(' ');
	custom.map((el) => {
		const val =
			el.indexOf('-') > 0 ? el.substring(0, el.indexOf('-') + 1) : el;
		res +=
			' ' +
			defaults.filter(
				(elem) =>
					elem.startsWith(val) ||
					elem.startsWith(val.substring(0, val.length - 1)),
			);
	});
	return defaults.filter((el) => !res.includes(el));
};

export default { generateCustomStyles };
