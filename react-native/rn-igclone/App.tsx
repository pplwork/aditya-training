import React from 'react';
import {LogBox, useWindowDimensions, SafeAreaView, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './app/redux';

import {Navigation} from './app/navigators';

LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const App: React.FC = (): JSX.Element => {
	const {width, height} = useWindowDimensions();

	const styles = StyleSheet.create({
		container: {
			width,
			height: height + 28,
		}
	});
	
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<Navigation />
			</SafeAreaView>
		</Provider>
	);
};

export default React.memo(App);
