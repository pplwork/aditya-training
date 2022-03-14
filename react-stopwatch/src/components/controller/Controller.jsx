import React from 'react';
import {Button} from '..';
import './Controller.css';
import {formatTime} from '../../utils';
import {connect} from 'react-redux';
import { timerTypes, lapTypes } from '../../store';

export class Controller extends React.Component {

	start = () => {
		//this.props.setTimer({start: true});
		dispatch({
			type: timerTypes.START_TIMER,
		})
	}
	stop = () => {
		//this.props.setTimer({start: false});
		dispatch({
			type: timerTypes.STOP_TIMER,
		})
	}
	restart = () => {
		//this.props.setTimer({hr: 0, min: 0, sec: 0, ms: 0});
		dispatch({
			type: timerTypes.RESTART_TIMER,
		})
	}
	lap = () => {
		/*this.props.setLaps((prev) => ({laps: [
			`Lap ${
				prev.laps.length ? formatTime(prev.laps.length + 1) : '01'
			} - ${formatTime(this.props.timer.hr)}:${formatTime(
				this.props.timer.min
			)}:${formatTime(this.props.timer.sec)}:${formatTime(this.props.timer.ms)}`,
			...prev.laps,
		]}));*/
		dispatch({
			type: lapTypes.ADD_LAP,
			payload: `Lap ${laps.length ? formatTime(laps.length + 1) : '01'} - ${formatTime(timer.hr)}:${formatTime(timer.min)}:${formatTime(timer.sec)}:${formatTime(timer.ms)}`,
		})
	}
	reset = () => {
		//this.props.setTimer({start: false, hr: 0, min: 0, sec: 0, ms: 0});
		//this.props.setLaps({laps: []});
		dispatch({
			type: timerTypes.RESET_TIMER,
		})
		dispatch({
			type: lapTypes.CLEAR_LAPS,
		})
	}

	componentDidUpdate = () => {
		if(this.startTimer){
			clearInterval(this.startTimer);
		}
		this.startTimer = setInterval(() => {
			if (!this.props.timer.start) return;

			if (this.props.timer.min === 60)
				this.props.setTimer(prev => ({...prev, min: 0, hr: prev.hr + 1}));

			if (this.props.timer.sec === 60)
				this.props.setTimer(prev => ({...prev, sec: 0, min: prev.min + 1}));

			if (this.props.timer.ms < 10)
				this.props.setTimer(prev => ({...prev, ms: prev.ms + 1}));
			else this.props.setTimer(prev => ({...prev, ms: 0, sec: prev.sec + 1}));
			if (timer.min === 60)
				dispatch({type: timerTypes.ADD_HR, payload: timer.hr + 1});

			if (timer.sec === 60)
				dispatch({type: timerTypes.ADD_MIN, payload: timer.min + 1});

			if (timer.ms < 10) dispatch({type: timerTypes.ADD_MS, payload: timer.ms + 1});
			else dispatch({type: timerTypes.ADD_SEC, payload: timer.sec + 1});
		}, 100);
	}

	render() {
		return (
			<div className="controller">
				<Button onClick={this.start} disabled={this.props.timer.start}>
					Start
				</Button>
				<Button onClick={this.lap} disabled={!this.props.timer.start}>
					Lap
				</Button>
				<Button onClick={this.stop} disabled={!this.props.timer.start}>
					Stop
				</Button>
				<Button onClick={this.restart} disabled={!this.props.timer.start}>
					Restart
				</Button>
				<Button onClick={this.reset}>Reset</Button>
			</div>
		);
	}
}
