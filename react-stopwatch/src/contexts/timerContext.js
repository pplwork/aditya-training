import React, {createContext} from 'react';

export const TimerContext = createContext();

export class TimerProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start: false,
      hr: 0,
      min: 0,
      sec: 0,
      ms: 0,
    };
    this.setState = this.setState.bind(this);
  }

	render() {
		return (
			<TimerContext.Provider value={{timer: this.state, setTimer: this.setState}}>
				{this.props.children}
			</TimerContext.Provider>
		);
	}
}
