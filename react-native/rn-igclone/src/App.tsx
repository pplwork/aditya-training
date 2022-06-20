import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

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
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<Navigation />
			</SafeAreaView>
		</Provider>
	);
};

export default React.memo(App);
