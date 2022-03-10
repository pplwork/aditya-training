import React from 'react';
import {Button} from '..';
import './Controller.css';
import {formatTime} from '../../utils';

export class Controller extends React.Component {
	startTimer = null;
	timer = this.props.timer;
	setTimer = this.props.setTimer;
	laps = this.props.laps;
	setLaps = this.props.setLaps;

	start = () => {
		this.setTimer({start: true});
	}
	stop = () => {
		this.setTimer((prev) => ({...prev, start: false}));
	}
	restart = () => {
		this.setTimer((prev) => ({...prev, hr: 0, min: 0, sec: 0, ms: 0}));
	}
	lap = () => {
		this.setLaps((prev) => [
			`Lap ${
				prev.laps.length ? formatTime(prev.laps.length + 1) : '01'
			} - ${formatTime(this.timer.hr)}:${formatTime(
				this.timer.min
			)}:${formatTime(this.timer.sec)}:${formatTime(this.timer.ms)}`,
			...prev.laps,
		]);
	}
	reset = () => {
		this.setTimer({start: false, hr: 0, min: 0, sec: 0, ms: 0});
		this.setLaps({laps: []});
	}

	componentDidUpdate = () => {
		this.startTimer = setInterval(() => {
			if (!this.timer.start) return;

			if (this.timer.min === 60)
				this.setTimer({min: 0, hr: this.timer.hr + 1});

			if (this.timer.sec === 60)
				this.setTimer({sec: 0, min: this.timer.min + 1});

			if (this.timer.ms < 10)
				this.setTimer({ms: this.timer.ms + 1});
			else this.setTimer({ms: 0, sec: this.timer.sec + 1});
		}, 100);
	}

	componentWillUnmount = () => {
		clearInterval(this.startTimer);
	}

	render() {
		return (
			<div className="controller">
				<Button onClick={this.start} disabled={this.timer.start}>
					Start
				</Button>
				<Button onClick={this.lap} disabled={!this.timer.start}>
					Lap
				</Button>
				<Button onClick={this.stop} disabled={!this.timer.start}>
					Stop
				</Button>
				<Button onClick={this.restart} disabled={!this.timer.start}>
					Restart
				</Button>
				<Button onClick={this.reset}>Reset</Button>
			</div>
		);
	}
}
