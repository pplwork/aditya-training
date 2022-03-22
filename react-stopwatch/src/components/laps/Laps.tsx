import './Laps.css';
import {useSelector, RootStateOrAny} from 'react-redux';
import React from 'react';

export const Laps:React.FC = ():JSX.Element => {
	const laps = useSelector((state:RootStateOrAny) => state.laps);
	return (
		<ul className="Laps">
			{laps.length ? laps.map((lap:String, i:Number) => (
				<li key={i+'-'+lap} className="Lap">
					{lap}
				</li>
			)) : <li className="Lap">No Laps</li>}
		</ul>
	);
}
