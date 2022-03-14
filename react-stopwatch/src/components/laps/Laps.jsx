import './Laps.css';
import {connect} from 'react-redux';
import React from 'react';

class Laps extends React.Component {
	render() {
		return (
			<ul className="Laps">
				{this.props.laps.length ? (
					this.props.laps.map((lap, i) => (
						<li key={i + '-' + lap} className="Lap">
							{lap}
						</li>
					))
				) : (
					<li className="Lap">No Laps</li>
				)}
			</ul>
		);
	}
}

const mapStateToProps = (state) => ({
	laps: state.laps,
});

export connect(mapStateToProps, {})(Laps);
