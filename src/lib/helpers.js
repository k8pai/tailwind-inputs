const validateFields = (type, value) => {
	if (!type) {
		return false;
	}

	if (type === 'default') {
		return !!value;
	}
};

export default validateFields;
