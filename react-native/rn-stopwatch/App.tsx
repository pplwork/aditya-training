import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {Provider} from './app/contexts';
import Home from './app/screens/home';

export default function App() {
	return (
		<Provider>
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Stop Watch</Text>
				<Home />
				<StatusBar style='auto' />
			</SafeAreaView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#112',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	title: {
		color: 'white',
		fontSize: 32,
		marginVertical: 20
	}
});
