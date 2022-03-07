import './App.css';
import { Time, Laps, Controller } from './components';
import {useState} from 'react'

function App() {
  const [time, setTime] = useState();

  return (
    <main className="App">
      <h1>Stopwatch</h1>
      <Time hr={"00"} min={"00"} sec={"00"} ms={"00"} />
      <Controller/>
      <Laps />
    </main>
  ); 
}

export default App;
