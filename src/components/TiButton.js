import React from 'react';

export function TiButton({ title, ...props }) {
	return <button {...props}>{title}</button>;
}
