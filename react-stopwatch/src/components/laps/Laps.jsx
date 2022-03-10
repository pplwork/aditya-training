import './Laps.css';
import {LapContext} from '../../contexts';
import React from 'react';

export class Laps extends React.Component {
	render() {
		return (
			<LapContext.Consumer>
				{({laps}) => (
					<ul className="Laps">
						{laps.length ? (
							laps.map((lap, i) => (
								<li key={i + '-' + lap} className="Lap">
									{lap}
								</li>
							))
						) : (
							<li className="Lap">No Laps</li>
						)}
					</ul>
				)}
			</LapContext.Consumer>
		);
	}
}
