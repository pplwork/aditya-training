import './Laps.css';
import {useSelector} from 'react-redux';
import React from 'react';

export function Laps() {
	const laps = useSelector(state => state.laps);
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
