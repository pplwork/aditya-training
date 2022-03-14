import React from 'react';
import {Button} from '..';
import './Controller.css';
import {formatTime} from '../../utils';

export class Controller extends React.Component {

	start = () => {
		this.props.setTimer({start: true});
	}
	stop = () => {
		this.props.setTimer({start: false});
	}
	restart = () => {
		this.props.setTimer({hr: 0, min: 0, sec: 0, ms: 0});
	}
	lap = () => {
		this.props.setLaps((prev) => ({laps: [
			`Lap ${
				prev.laps.length ? formatTime(prev.laps.length + 1) : '01'
			} - ${formatTime(this.props.timer.hr)}:${formatTime(
				this.props.timer.min
			)}:${formatTime(this.props.timer.sec)}:${formatTime(this.props.timer.ms)}`,
			...prev.laps,
		]}));
	}
	reset = () => {
		this.props.setTimer({start: false, hr: 0, min: 0, sec: 0, ms: 0});
		this.props.setLaps({laps: []});
	}

	componentDidUpdate = () => {
		this.startTimer = setInterval(() => {
			if (!this.props.timer.start) return;

			if (this.props.timer.min === 60)
				this.props.setTimer(prev => ({...prev, min: 0, hr: prev.hr + 1}));

			if (this.props.timer.sec === 60)
				this.props.setTimer(prev => ({...prev, sec: 0, min: prev.min + 1}));

			if (this.props.timer.ms < 10)
				this.props.setTimer(prev => ({...prev, ms: prev.ms + 1}));
			else this.props.setTimer(prev => ({...prev, ms: 0, sec: prev.sec + 1}));
		}, 100);
	}

	componentWillUnmount = () => {
		clearInterval(this.startTimer);
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
