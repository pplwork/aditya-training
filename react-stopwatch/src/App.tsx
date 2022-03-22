import './App.css';
import React from 'react';
import {Time, Laps, Controller} from './components';

const App:React.FC = ():JSX.Element => {
	return (
		<main className="App">
      <h1>Stop Watch</h1>
			<div className="App_Row">
				<div className="App_Col">
					<h2>Timer</h2>
					<Time />
					<Controller />
				</div>
				<div className="App_Col">
					<h2>Laps</h2>
					<Laps />
				</div>
			</div>
		</main>
	);
}

export default App;
