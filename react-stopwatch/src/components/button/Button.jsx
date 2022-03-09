import './Button.css';
import React from 'react';

export class Button extends React.Component {
	render() {
		const {className, children, ...rest} = this.props;
		return (
			<button className={`btn${className ? ' ' + className : ''}`} {...rest}>
				{children}
			</button>
		);
	}
}
