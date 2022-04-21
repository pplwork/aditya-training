import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
	Start: undefined;
	Register: undefined;
	SignIn: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Start'>;

const Start: React.FC<Props> = ({navigation}): JSX.Element => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>IGCLONE</Text>
			<View style={styles.button}>
				<Button
					title='Register'
					onPress={() => navigation.navigate('Register')}
				/>
			</View>
			<View style={styles.button}>
				<Button color="#666" title='Sign In' onPress={() => navigation.navigate('SignIn')} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    padding: 20,
	},
	title: {
		fontSize: 24,
    marginBottom: 20,
	},
  button: {
    width: '100%',
    marginVertical: 5,
  },
});

export default Start;
