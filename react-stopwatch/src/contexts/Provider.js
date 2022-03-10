import {LapProvider, TimerProvider} from '.';
import React from 'react';

export class Provider extends React.Component {
	render() {
		return (
			<TimerProvider>
				<LapProvider>{this.props.children}</LapProvider>
			</TimerProvider>
		);
	}
}
