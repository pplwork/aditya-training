import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Controller from '../components/Controller';
import Laps from '../components/Laps';
import Time from '../components/Time';

const Home: React.FC = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Time/>
				<Controller/>
			</View>
			<View style={styles.row}>
				<Text style={styles.rowTitle}>Laps</Text>
				<Laps/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 20,
	},
	row: {
		flex: 1,
		alignItems: 'center'
	},
	rowTitle: {
		color: 'white',
		fontSize: 20,
		borderBottomWidth: 2,
		borderBottomColor: 'white',
		padding: 2,
		marginBottom: 10
	}
})

export default Home;
