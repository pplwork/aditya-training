import {useLaps} from '../contexts';
import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

const Laps = () => {
	const {laps} = useLaps();
	return (
		<FlatList
			data={laps}
			renderItem={(lap) => <Text style={styles.text}>{lap.item.value}</Text>}
		/>
	);
};

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontSize: 24,
	},
});

export default Laps;
