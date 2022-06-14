import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Input from 'src/components/Input';
import { useDispatch, useSelector, signIn } from 'src/redux';
import { SignInProps } from 'src/types/props';

const SignIn: React.FC<SignInProps> = ({navigation}): JSX.Element => {
	const {loading, error} = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const [email, setEmail] = useState<string>('');
	const [pass, setPass] = useState<string>('');

	const [emailError, setEmailError] = useState<string | null>(null);

	const handleSignIn = () => {
		if (
			!email.trim() ||
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
		) {
			setEmailError('Please enter valid email!');
			return;
		}

		dispatch(signIn({email: email.trim().toLowerCase(), password: pass.trim()}));
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
					<Button title='Sign In' onPress={handleSignIn} />
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
