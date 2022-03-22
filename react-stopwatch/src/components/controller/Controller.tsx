import React, {useEffect} from 'react';
import {Button} from '..';
import './Controller.css'
import { formatTime } from '../../utils';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import { timerTypes, lapTypes } from '../../store';

export const Controller:React.FC = ():JSX.Element => {
	const timer = useSelector((state:RootStateOrAny) => state.timer);
	const laps = useSelector((state:RootStateOrAny) => state.laps);
	const dispatch = useDispatch();

	function start() {
		dispatch({
			type: timerTypes.START_TIMER,
		})
	}
	function stop() {
		dispatch({
			type: timerTypes.STOP_TIMER,
		})
	}
	function restart() {
		dispatch({
			type: timerTypes.RESTART_TIMER,
		})
	}
	function lap() {
		dispatch({
			type: lapTypes.ADD_LAP,
			payload: `Lap ${laps.length ? formatTime(laps.length + 1) : '01'} - ${formatTime(timer.hr)}:${formatTime(timer.min)}:${formatTime(timer.sec)}:${formatTime(timer.ms)}`,
		})
	}
	function reset() {
		dispatch({
			type: timerTypes.RESET_TIMER,
		})
		dispatch({
			type: lapTypes.CLEAR_LAPS,
		})
	}

	useEffect(() => {
		let startTimer = setInterval(() => {
			if (!timer.start) return;

			if (timer.min === 60)
				dispatch({type: timerTypes.ADD_HR, payload: timer.hr + 1});

			if (timer.sec === 60)
				dispatch({type: timerTypes.ADD_MIN, payload: timer.min + 1});

			if (timer.ms < 10) dispatch({type: timerTypes.ADD_MS, payload: timer.ms + 1});
			else dispatch({type: timerTypes.ADD_SEC, payload: timer.sec + 1});
		}, 100);

    return ()=> {
      clearInterval(startTimer);
    };
	}, [timer.start, dispatch, timer.min, timer.sec, timer.ms]);

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
