# [@k8pai/tailwind-inputs](https://react-icons.github.io/react-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/@k8pai/tailwind-inputs.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@k8pai/tailwind-inputs

Include tailwind configured form fields with validations in your React projects easily with `tailwind-inputs`, which utilizes ES6 imports that allows you to Manage validations and maintainability a piece of cake.

## Installation (for standard modern project)

```bash
npm install @k8pai/tailwind-inputs --save
```

example usage

```jsx
import { TiText } from '@k8pai/tailwind-inputs';

<TiText
	name={'firstName'}
	label={'First Name'}
	value={firstName}
	submit={submit}
	onChange={(e) => setFirstName(e.target.value)}
	validate="default"
	errorMessage="This field should not be empty"
/>;
```

[View the documentation](https://react-icons.github.io/react-icons) for further usage examples and how to use tailwind-inputs.

## Configuration

### props usage

| Key            | Type                | Default | Note                                              |
| -------------- | ------------------- | ------- | ------------------------------------------------- |
| `name`         | `String`            | `null`  | Name of the input field                           |
| `label`        | `String`            | `null`  | Label For the input field                         |
| `value`        | `state variable`    | `null`  | Value of the input field                          |
| `submit`       | `boolean`           | `false` | Form Submission State, to check field validations |
| `onChange`     | `setState function` | `null`  | Function to update `value` state variable         |
| `validate`     | `String`            | `null`  | Can be set to validate fields                     |
| `errorMessage` | `String`            | ` `     | Custom Error message for validations              |
| `className`    | `String`            | ` `     | Can customize Fields with tailwind                |

### Managing state

It's always painful to have a

```jsx
import React, { useState } from 'react';
import { TiText, TiMail, TiPassword } from '@k8pai/tailwind-inputs';

function Form() {
	const [submit, setSubmit] = useState(false);
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmit(true);
		// ... rest of your code goes here
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	return (
		<form onSubmit={handleSubmit}>
			<TiText
				name={'username'}
				label={'Username'}
				value={formData.username}
				submit={submit}
				onChange={handleChange}
				validate="default"
			/>
			;
			<TiMail
				name={'email'}
				label={'Mail'}
				value={formData.email}
				submit={submit}
				onChange={handleChange}
				validate="email"
			/>
			;
			<TiPassword
				name={'password'}
				label={'Password'}
				value={firstName}
				submit={submit}
				onChange={handleChange}
				validate="password"
			/>
			;
		</form>
	);
}
```

### Demo

TBD

## Related Projects

-   [customizer](https://customizer-phi.vercel.app/)

## Licence

MIT
