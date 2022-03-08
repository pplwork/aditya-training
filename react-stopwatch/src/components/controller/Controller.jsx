import {useEffect} from 'react';
import {Button} from '..';
import {useLaps, useTimer} from '../../contexts';
import './Controller.css'
import { formatTime } from '../../utils';

export function Controller() {
	const {timer, setTimer} = useTimer();
	const {setLaps} = useLaps();

	function start() {
		setTimer((prev) => ({...prev, start: true}));
	}
	function stop() {
		setTimer((prev) => ({...prev, start: false}));
	}
	function restart() {
		setTimer((prev) => ({...prev, hr: 0, min: 0, sec: 0, ms: 0}));
	}
	function lap() {
		setLaps((prev) => [
			`Lap ${prev.length ? formatTime(prev.length + 1) : '01'} - ${formatTime(timer.hr)}:${formatTime(timer.min)}:${formatTime(timer.sec)}:${formatTime(timer.ms)}`,
			...prev,
		]);
	}
	function reset() {
		setTimer({start: false, hr: 0, min: 0, sec: 0, ms: 0});
		setLaps([]);
	}

	useEffect(() => {
		let startTimer = setInterval(() => {
			if (!timer.start) return;

			if (timer.min === 60)
				setTimer((prev) => ({...prev, min: 0, hr: prev.hr + 1}));

			if (timer.sec === 60)
				setTimer((prev) => ({...prev, sec: 0, min: prev.min + 1}));

			if (timer.ms < 10) setTimer((prev) => ({...prev, ms: prev.ms + 1}));
			else setTimer((prev) => ({...prev, ms: 0, sec: prev.sec + 1}));
		}, 100);

    return ()=> {
      clearInterval(startTimer);
    };
	}, [timer.start, setTimer, timer.min, timer.sec, timer.ms]);

	return (
		<div className="controller">
			<Button onClick={start} disabled={timer.start}>
				Start
			</Button>
			<Button onClick={lap} disabled={!timer.start}>
				Lap
			</Button>
			<Button onClick={stop} disabled={!timer.start}>
				Stop
			</Button>
			<Button onClick={restart} disabled={!timer.start}>
				Restart
			</Button>
			<Button onClick={reset}>Reset</Button>
		</div>
	);
}
