const validateFields = (type, value) => {
	if (typeof type === 'undefined') {
		return null;
	}

	if (type === 'number') {
		if (value === '') {
			return null;
		}
	}

	if (type === 'textarea') {
		return null;
	}

	if (type === 'noSpace') {
		if (value === '') {
			return null;
		}

		if (value.includes(' ')) {
			return false;
		}

		return !/\s/.test(value) ? true : null;
	}

	if (type === 'password') {
		if (value === '') {
			return null;
		}

		if (value.length <= 8) {
			return false;
		}

		const passwordPattern =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#]{8,}$/;
		return passwordPattern.test(value) ? true : null;
	}

	if (type === 'username') {
		if (value === '') {
			return null;
		}
		if (value.includes(' ') || value.length > 19) {
			return false;
		}
		const usernamePattern = /^[a-zA-Z_][a-zA-Z0-9_]{3,19}$/;
		const res = usernamePattern.test(value);
		return res ? true : null;
	}

	if (type === 'email') {
		if (value === '') {
			return null;
		}

		// Check for not allowed characters
		const notAllowedChars = /[ "(),:;<>\[\]\\]/g;
		if (notAllowedChars.test(value)) {
			return false;
		}

		// Check for dots at the beginning or end of the local part
		const dotsAtBeginningOrEnd = /^\.|\.$/;
		if (dotsAtBeginningOrEnd.test(value?.split('@')[0])) {
			return false;
		}

		// Check for dots immediately before or after the @ symbol
		const dotsBeforeOrAfterAt = /\.@|@\./g;
		if (dotsBeforeOrAfterAt.test(value)) {
			return false;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const res = emailPattern.test(value) && value.endsWith('@gmail.com');
		return res ? true : null;
	}

	if (type === 'discordId') {
		const discordIdPattern = /^[a-zA-Z0-9_]{2,32}#[0-9]{4}$/;
		const usernameRegex = /^[a-zA-Z0-9_]{2,32}$/;
		const discriminatorRegex = /^[0-9]{0,4}$/;

		if (value === '' || value.length <= 2) {
			return null;
		}

		if (!value.includes('#') && !usernameRegex.test(value)) {
			return false;
		}

		if (value.includes('#')) {
			const [username, discriminator] = value.split('#');

			if (!discriminatorRegex.test(discriminator)) {
				return false;
			}
		}

		return discordIdPattern.test(value) ? true : null;
	}
	return value.length > 0 ? true : null;
};

const generatePlaceholder = (type) => {
	if (type === 'default') {
		return `Can't be empty!`;
	}

	if (type === 'noSpace') {
		return 'No space accepted.';
	}

	if (type === 'username') {
		return 'Enter an username.';
	}

	if (type === 'email') {
		return 'username@gmail.com';
	}

	if (type === 'discordId') {
		return 'username#0000';
	}
};

const cleanupOptions = (options = []) => {
	// This is a cleanup function to convert array to objects if these are array of objects, else to return a uniformalized array of objects

	if (options.every((el) => typeof el === 'object')) {
		return options.map((el, ind) => {
			const { id, name, value, disable } = el;
			if (!id) el.id = ind;
			if (!name && value) el.name = value;
			if (!disable) el.disable = false;
			return el;
		});
	} else if (options.every((el) => typeof el === 'string')) {
		return options.map((el, ind) => {
			return { id: ind, name: el, value: el, disable: false };
		});
	} else if (options.every((el) => typeof el === 'number')) {
		return options.map((el, ind) => {
			return { id: ind, name: el, value: el, disable: false };
		});
	}

	return options;
};

const cleanupChoices = (options = [], selected) => {
	// cleaningup options such that options has no object with value = value
	return options.filter(
		(el) => !selected.some((item) => item.value === el.value),
	);
};

const cleanupCheckbox = (options = []) => {
	return options.map((el, ind) => {
		const { id, name, value, selected, label } = el;
		if (!value || !label) {
			console.error(
				'value and label fields are Mandatory, keep it filled',
			);
		}
		if (!id) el.id = ind;
		if (!name && value) el.name = value;
		if (!selected) el.selected = false;
		return el;
	});
};

const cleanupDisclosure = (options = []) => {
	return options.map((el, ind) => {
		const { id, title, content, isOpen } = el;
		if (!id) el.id = ind;
		if (typeof isOpen === 'undefined') el.isOpen = false;
		return el;
	});
};

export {
	validateFields,
	generatePlaceholder,
	cleanupOptions,
	cleanupChoices,
	cleanupCheckbox,
	cleanupDisclosure,
};
