import React from 'react';

export const TiLabel = ({ name, title, ...restProps }) => {
	return (
		<label htmlFor={name} {...restProps}>
			{title}
		</label>
	);
};
