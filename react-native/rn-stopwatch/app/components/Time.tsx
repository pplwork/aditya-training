import {useTimer} from '../contexts';
import { formatTime } from '../utils';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Time:React.FC = ():JSX.Element => {
	const {timer} = useTimer();
	return (
		<View style={styles.time}>
			<Text style={styles.text}>{formatTime(timer.hr)}</Text>
			<Text style={styles.text}>:</Text>
			<Text style={styles.text}>{formatTime(timer.min)}</Text>
			<Text style={styles.text}>:</Text>
			<Text style={styles.text}>{formatTime(timer.sec)}</Text>
			<Text style={styles.text}>:</Text>
			<Text style={styles.text}>{formatTime(timer.ms)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	time: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: 'white',
		borderRadius: 100,
		width: 150,
		height: 150,
		padding: 5,
	},
	text: {
		fontSize: 24,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white'
	}
})

export default Time;