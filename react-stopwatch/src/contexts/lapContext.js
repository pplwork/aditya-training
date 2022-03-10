import React, {createContext} from 'react';

export const LapContext = createContext();

export class LapProvider extends React.Component {
	state = {
		laps: [],
	};
	render() {
		return (
			<LapContext.Provider value={{laps: this.state.laps, setLaps: this.setState}}>
				{this.props.children}
			</LapContext.Provider>
		);
	}
}
