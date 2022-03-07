import './Laps.css';
import {useLaps} from '../../contexts';

export function Laps() {
	const {laps} = useLaps();
	return (
		<ul className="Laps">
			{laps.map((lap, i) => (
				<li key={i+'-'+lap} className="Lap">
					{lap}
				</li>
			))}
		</ul>
	);
}