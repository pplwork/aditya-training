import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import {View, Text, StyleSheet, Button} from 'react-native';
import Input from '../components/Input';
import {auth} from '../firebase.config';
import {RootStackParamList} from './start';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({navigation}): JSX.Element => {
	const [signInUser, _user, _loading, error] =
		useSignInWithEmailAndPassword(auth);

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const [emailError, setEmailError] = useState<string | null>(null);

	const signIn = async () => {
		if (
			!email.trim() ||
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
		) {
			setEmailError('Please enter valid email!');
			return;
		}

		await signInUser(email.trim().toLowerCase(), pass.trim());
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign In</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.errorText}>{error?.message}</Text>
				<Input
					placeholder='Email Address'
					value={email}
					onChangeText={setEmail}
					textContentType='emailAddress'
					style={styles.input}
				/>
				<Text style={styles.errorText}>{emailError}</Text>
				<Input
					placeholder='Password'
					value={pass}
					onChangeText={setPass}
					secureTextEntry
					style={styles.input}
				/>
				<View style={styles.register}>
					<Button title='Sign In' onPress={signIn} />
				</View>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}> OR </Text>
				<Button
					title='Register'
					onPress={() => navigation.navigate('Register')}
				/>
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
	inputContainer: {
		width: '100%',
	},
	input: {
		marginVertical: 5,
		height: 42,
	},
	register: {
		marginVertical: 15,
	},
	footer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerText: {
		marginBottom: 10,
		fontSize: 18,
	},
	errorText: {
		color: 'red',
	},
});

export default SignIn;
