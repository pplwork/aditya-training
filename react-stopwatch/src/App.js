import './App.css';
import {Time, Laps, Controller} from './components';
import React from 'react';
import {TimerContext, LapContext} from './contexts';

class App extends React.Component {
	render() {
		return (
			<main className="App">
				<h1>Stop Watch</h1>
				<div className="App_Row">
					<div className="App_Col">
						<h2>Timer</h2>
						<Time />
						<TimerContext.Consumer>
							{({timer, setTimer}) => (
								<LapContext.Consumer>
									{({laps, setLaps}) => (
										<Controller
											timer={timer}
											setTimer={setTimer}
											laps={laps}
											setLaps={setLaps}
										/>
									)}
								</LapContext.Consumer>
							)}
						</TimerContext.Consumer>
					</div>
					<div className="App_Col">
						<h2>Laps</h2>
						<Laps />
					</div>
				</div>
			</main>
		);
	}
}

export default App;
