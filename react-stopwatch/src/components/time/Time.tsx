import React from 'react';
import {useSelector, RootStateOrAny} from 'react-redux';
import './Time.css';
import { formatTime } from '../../utils';

export const Time:React.FC = ():JSX.Element => {
	const timer = useSelector((state:RootStateOrAny) => state.timer);
	return (
		<div className="time">
			<span className="time-hr">{formatTime(timer.hr)}</span>
			<span>:</span>
			<span className="time-min">{formatTime(timer.min)}</span>
			<span>:</span>
			<span className="time-sec">{formatTime(timer.sec)}</span>
			<span>:</span>
			<span className="time-ms">{formatTime(timer.ms)}</span>
		</div>
	);
}
