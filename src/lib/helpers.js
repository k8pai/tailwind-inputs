const validateFields = (type, value) => {
	if (type === 'default') {
		return !!value;
	}
	if (type === 'noSpace') {
		if (!value) {
			return !!value;
		}
		return !/\s/.test(value);
	}

	if (type === 'username') {
		if (!value) {
			return !!value;
		}
		const usernamePattern = /^[a-zA-Z_][a-zA-Z0-9_]{3,19}$/;
		return usernamePattern.test(value);
	}

	if (type === 'email') {
		if (!value) {
			return !!value;
		}
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(value) && value.endsWith('@gmail.com');
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
		return 'Enter anything.';
	}
	if (type === 'noSpace') {
		return 'No space accepted.';
	}

	if (type === 'username') {
		return 'Enter an username.';
	}

	if (type === 'email') {
		return 'Enter an email.';
	}

	if (type === 'discordId') {
		return 'username#0000';
	}
};

export default { validateFields, generatePlaceholder };
