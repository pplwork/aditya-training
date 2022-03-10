import './App.css';
import {Time, Laps, Controller} from './components';
import React from 'react';

function App() {
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
