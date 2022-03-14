import React from 'react';
import {connect} from 'react-redux';
import './Time.css';
import {formatTime} from '../../utils';

class Time extends React.Component {
	render() {
		return (
			<div className="time">
				<span className="time-hr">{formatTime(this.props.timer.hr)}</span>
				<span>:</span>
				<span className="time-min">{formatTime(this.props.timer.min)}</span>
				<span>:</span>
				<span className="time-sec">{formatTime(this.props.timer.sec)}</span>
				<span>:</span>
				<span className="time-ms">{formatTime(this.props.timer.ms)}</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	timer: state.timer,
});

export connect(mapStateToProps, {})(Time);
