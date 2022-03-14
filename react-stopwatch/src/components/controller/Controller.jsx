import React from 'react';
import {Button} from '..';
import './Controller.css';
import {formatTime} from '../../utils';
import {connect} from 'react-redux';
import { timerTypes, lapTypes } from '../../store';

class Controller extends React.Component {

	start = () => {
		//this.props.setTimer({start: true});
		this.props.dispatch({
			type: timerTypes.START_TIMER,
		})
	}
	stop = () => {
		//this.props.setTimer({start: false});
		this.props.dispatch({
			type: timerTypes.STOP_TIMER,
		})
	}
	restart = () => {
		//this.props.setTimer({hr: 0, min: 0, sec: 0, ms: 0});
		this.props.dispatch({
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
		this.props.dispatch({
			type: lapTypes.ADD_LAP,
			payload: `Lap ${this.props.laps.length ? formatTime(this.props.laps.length + 1) : '01'} - ${formatTime(this.props.timer.hr)}:${formatTime(this.props.timer.min)}:${formatTime(this.props.timer.sec)}:${formatTime(this.props.timer.ms)}`,
		})
	}
	reset = () => {
		//this.props.setTimer({start: false, hr: 0, min: 0, sec: 0, ms: 0});
		//this.props.setLaps({laps: []});
		this.props.dispatch({
			type: timerTypes.RESET_TIMER,
		})
		this.props.dispatch({
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
				this.props.dispatch({type: timerTypes.ADD_HR, payload: this.props.timer.hr + 1});

			if (this.props.timer.sec === 60)
				this.props.dispatch({type: timerTypes.ADD_MIN, payload: this.props.timer.min + 1});

			if (this.props.timer.ms < 10) this.props.dispatch({type: timerTypes.ADD_MS, payload: this.props.timer.ms + 1});
			else this.props.dispatch({type: timerTypes.ADD_SEC, payload: this.props.timer.sec + 1});
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

const mapStateToProps = (state) => ({
	timer: state.timer,
	laps: state.laps,
})

const controller = connect(mapStateToProps, null)(Controller)

export { controller as Controller }
