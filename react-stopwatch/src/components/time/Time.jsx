import {useTimer} from '../../contexts';
import './Time.css';

export function Time() {
	const {timer} = useTimer();
	return (
		<div className="time">
			<span className="time-hr">{timer.hr ?? '0'}</span>
			<span>:</span>
			<span className="time-min">{timer.min ?? '0'}</span>
			<span>:</span>
			<span className="time-sec">{timer.sec ?? '0'}</span>
			<span>:</span>
			<span className="time-ms">{timer.ms ?? '0'}</span>
		</div>
	);
}
