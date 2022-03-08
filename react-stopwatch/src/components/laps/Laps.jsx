import './Laps.css';
import {useLaps} from '../../contexts';
import { formatTime } from '../../utils';

export function Laps() {
	const {laps} = useLaps();
	return (
		<ul className="Laps">
			{laps.length ? laps.map((lap, i) => (
				<li key={i+'-'+lap} className="Lap">
					{lap}
				</li>
			)) : <li className="Lap">No Laps</li>}
		</ul>
	);
}
