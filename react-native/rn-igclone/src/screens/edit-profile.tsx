import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import {uploadFile} from 'src/utils';
import {useDispatch, useSelector} from 'src/redux/store';
import Input from 'src/components/Input';
import {EditProfileProps} from 'src/types/props';
import ImageIcon from 'src/components/ImageIcon';
import {updateProfile} from 'src/redux/actions/profile';
import {hydrateUser} from 'src/redux/actions/auth';

const EditProfile: React.FC<EditProfileProps> = ({navigation}): JSX.Element => {
	const {user} = useSelector((state) => state.auth);
	const {about} = useSelector((state) => state.profile);
	const dispatch = useDispatch();

	const [avatar, setAvatar] = useState<string>(user?.avatar ?? '');
	const [username, setUsername] = useState<string>(user?.username ?? '');
	const [name, setName] = useState<string>(user?.name ?? '');
	const [email, setEmail] = useState<string>(user?.email ?? '');
	const [phone, setPhone] = useState<string>(user?.phone ?? '');
	const [bio, setBio] = useState<string>(about?.bio ?? '');

	const saveProfile = async () => {
		if (!user) return;
		let url = '';
		if (avatar && avatar !== user?.avatar) {
			url = await uploadFile(avatar, 'avatar');
		}
		const userProfile = {
			name: name ? name : user.name,
			email: email ? email : user.email,
			phone: phone ? phone : user.phone,
			username: username ? username : user.username,
			avatar: url ? url : user.avatar,
			id: user.id,
			uid: user.uid,
			bio: bio ? bio : null,
		};

		dispatch(updateProfile(userProfile));

		dispatch(hydrateUser(userProfile));
		navigation.navigate('Profile');
	};

	const pickImage = async () => {
		try {
			const result = await launchImageLibrary({
				mediaType: 'photo',
				quality: 1,
			});

			if (!result.didCancel && result.assets?.[0].uri) {
				setAvatar(result.assets[0].uri);
				console.log(result.assets[0].uri);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<KeyboardAwareScrollView
			style={styles.container}
			extraScrollHeight={100}
			enableOnAndroid={true}
			keyboardShouldPersistTaps='handled'
		>
			<Text style={styles.title}>Complete Your Profile</Text>
			<View style={styles.avatarContainer}>
				<ImageIcon
					buttonStyle={styles.chooseAvatar}
					imageUri={avatar}
					imageStyle={styles.avatar}
					onPress={pickImage}
					iconName='account-circle'
					label='Choose'
				/>
				<Text style={styles.label}>Your Avatar</Text>
			</View>
			<View style={styles.fields}>
				<Text style={styles.label}>User Name</Text>
				<Input
					onChangeText={setUsername}
					value={username}
					placeholder='username'
					textContentType='username'
					style={styles.input}
				/>
				<Text style={styles.label}>Full Name</Text>
				<Input
					onChangeText={setName}
					value={name}
					placeholder='fullname'
					textContentType='name'
					style={styles.input}
				/>
				<Text style={styles.label}>Bio Decription</Text>
				<Input
					onChangeText={setBio}
					value={bio}
					placeholder='bio'
					textContentType='jobTitle'
					style={styles.input}
				/>
				<Text style={styles.label}>Email Address</Text>
				<Input
					onChangeText={setEmail}
					value={email}
					placeholder='email'
					editable={false}
					textContentType='emailAddress'
					style={styles.input}
				/>
				<Text style={styles.label}>Phone Number</Text>
				<Input
					onChangeText={setPhone}
					value={phone}
					placeholder='phone'
					textContentType='telephoneNumber'
					dataDetectorTypes='phoneNumber'
					style={styles.input}
				/>
			</View>
			<View style={styles.save}>
				<Button title='Save Profile' onPress={saveProfile} />
			</View>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 10,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		flex: 1,
	},
	avatarContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2,
	},
	avatar: {
		width: 100,
		height: 100,
	},
	chooseAvatar: {
		width: 100,
		borderWidth: 0,
		position: 'relative',
		borderRadius: 50,
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	avatarIcon: {
		borderWidth: 1,
		borderRadius: 50,
		borderColor: '#000a',
	},
	chooseText: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#000a',
		color: 'white',
		width: '100%',
		textAlign: 'center',
		paddingVertical: 3,
		textTransform: 'uppercase',
		fontSize: 10,
	},
	fields: {
		flex: 5,
		marginVertical: 10,
		justifyContent: 'center',
	},
	label: {
		color: '#000c',
		marginTop: 5,
	},
	input: {
		marginBottom: 10,
		marginTop: 5,
	},
	save: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 25,
	},
});

export default React.memo(EditProfile);
