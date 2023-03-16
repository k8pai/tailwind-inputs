const validateFields = (type, value) => {
	if (typeof type === 'undefined') {
		return null;
	}

	// if (type === 'default') {
	// 	return !!value;
	// }

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

		const passwordPattern =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#]{8,}$/;
		return passwordPattern.test(value);
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
		// if (value.includes(' ') || value.includes('"') || value.includes('(') || value.includes(')') || value.includes(',') || value.includes(':') || ) {
		// 	return false;
		// }
		// Check for not allowed characters
		const notAllowedChars = /[ "(),:;<>\[\]\\]/g;
		if (notAllowedChars.test(value)) {
			return false;
		}

		// Check for dots at the beginning or end of the local part
		const dotsAtBeginningOrEnd = /^\.|\.$/;
		if (dotsAtBeginningOrEnd.test(value.split('@')[0])) {
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
		if (!value) {
			return !!value;
		}
		const discordIdPattern = /^[a-zA-Z0-9_]{2,32}#[0-9]{4}$/;
		return discordIdPattern.test(value);
	}
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

export default { validateFields, generatePlaceholder };
