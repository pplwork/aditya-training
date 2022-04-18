import React, {useEffect} from 'react';
import Button from './Button';
import {useLaps, useTimer} from '../contexts';
import { formatTime } from '../utils';
import { View, StyleSheet } from 'react-native';

const Controller:React.FC = ():JSX.Element => {
	const {timer, setTimer} = useTimer();
	const {setLaps} = useLaps();

	function start() {
		setTimer?.((prev) => ({...prev, start: true}));
	}
	function stop() {
		setTimer?.((prev) => ({...prev, start: false}));
	}
	function restart() {
		setTimer?.((prev) => ({...prev, hr: 0, min: 0, sec: 0, ms: 0}));
	}
	function lap() {
		setLaps?.((prev) => [
			{key: `Lap ${prev.length+1}`, value: `Lap ${prev.length ? formatTime(prev.length + 1) : '01'} - ${formatTime(timer.hr)}:${formatTime(timer.min)}:${formatTime(timer.sec)}:${formatTime(timer.ms)}`},
			...prev,
		]);
	}
	function reset() {
		setTimer?.({start: false, hr: 0, min: 0, sec: 0, ms: 0});
		setLaps?.([]);
	}

	useEffect(() => {
		let startTimer = setInterval(() => {
			if (!timer.start) return;

			if (timer.min === 60)
				setTimer?.((prev) => ({...prev, min: 0, hr: prev.hr + 1}));

			if (timer.sec === 60)
				setTimer?.((prev) => ({...prev, sec: 0, min: prev.min + 1}));

			if (timer.ms < 10) setTimer?.((prev) => ({...prev, ms: prev.ms + 1}));
			else setTimer?.((prev) => ({...prev, ms: 0, sec: prev.sec + 1}));
		}, 100);

    return () => {
      clearInterval(startTimer);
    };
	}, [timer.start, setTimer, timer.min, timer.sec, timer.ms]);

	return (
		<View style={styles.controller}>
			<Button onClick={start} disabled={timer.start} title="Start"/>
			<Button onClick={lap} disabled={!timer.start} title="Lap"/>
			<Button onClick={stop} disabled={!timer.start} title="Stop"/>
			<Button onClick={restart} disabled={!timer.start} title="Restart"/>
			<Button onClick={reset} title="Reset"/>
		</View>
	);
}

const styles = StyleSheet.create({
	controller: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		marginVertical: 20
	},
})

export default Controller;