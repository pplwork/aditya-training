import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { Navigation } from 'src/navigators';
import { store } from 'src/redux';

const App: React.FC = (): JSX.Element => {
	const {width, height} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';

	const styles = StyleSheet.create({
		container: {
			width,
			height: height + 28,
		}
	});
	
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<Navigation />
			</SafeAreaView>
		</Provider>
	);
};

export default React.memo(App);
