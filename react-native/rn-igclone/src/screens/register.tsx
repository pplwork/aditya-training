import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Input from 'src/components/Input';
import {useDispatch, useSelector, register} from 'src/redux';
import {RegisterProps} from 'src/types/props';

const Register: React.FC<RegisterProps> = ({navigation}): JSX.Element => {
	const {loading, error} = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [email, setEmail] = useState<string>('');
	const [pass, setPass] = useState<string>('');
	const [pass2, setPass2] = useState<string>('');

	const [emailError, setEmailError] = useState<string | null>(null);
	const [passError, setPassError] = useState<string | null>(null);
	const [pass2Error, setPass2Error] = useState<string | null>(null);

	const handleRegister = () => {
		if (
			!email.trim() ||
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
		)
			setEmailError('Please enter valid email!');
		if (
			!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/.test(
				pass.trim()
			)
		)
			setPassError(
				'Password should contain atleast 1 upper, 1 lower, 1 number and 1 special character and minimum 6 characters long!'
			);
		if (pass.trim() !== pass2.trim()) setPass2Error('Password do not matches!');

		if (emailError || passError || pass2Error) return;

		setEmailError('');
		setPassError('');
		setPass2Error('');

		dispatch(
			register({email: email.trim().toLowerCase(), password: pass.trim()})
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.errorText}>{error?.message}</Text>
				<Input
					placeholder='Email Address'
					textContentType='emailAddress'
					style={styles.input}
					onChangeText={setEmail}
					value={email}
				/>
				<Text style={styles.errorText}>{emailError}</Text>
				<Input
					placeholder='Set Password'
					secureTextEntry
					style={styles.input}
					value={pass}
					onChangeText={setPass}
				/>
				<Text style={styles.errorText}>{passError}</Text>
				<Input
					placeholder='Confirm Password'
					secureTextEntry
					style={styles.input}
					value={pass2}
					onChangeText={setPass2}
				/>
				<Text style={styles.errorText}>{pass2Error}</Text>
				<View style={styles.register}>
					<Button title='Create Account' onPress={handleRegister} />
				</View>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}> OR </Text>
				<Button title='Sign In' onPress={() => navigation.navigate('SignIn')} />
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

export default Register;
