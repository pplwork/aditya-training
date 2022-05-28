import React, {useEffect, useState} from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	Button,
	TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import {uploadFile} from 'app/utils';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector, updateProfile, hydrateUser} from 'app/redux';
import Input from 'app/components/Input';
import { EditProfileProps } from 'app/types/props';

const EditProfile: React.FC<EditProfileProps> = ({navigation}): JSX.Element => {
	const {user} = useSelector((state) => state.auth);
	const {about} = useSelector(state => state.profile);
	const dispatch = useDispatch();

	const [avatar, setAvatar] = useState<string>(user?.avatar ?? '');
	const [username, setUsername] = useState<string>(user?.username ?? '');
	const [name, setName] = useState<string>(user?.name ?? '');
	const [email, setEmail] = useState<string>(user?.email ?? '');
	const [phone, setPhone] = useState<string>(user?.phone ?? '');
	const [bio, setBio] = useState<string>(about?.bio ?? '');

	const saveProfile = async () => {
		if (!user) return;
		let url = ''
		if(avatar && avatar !== user?.avatar) {
			url = await uploadFile(avatar, "avatar");
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
		navigation.navigate("Profile");
	};

	const pickImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 1,
			});

			if (!result.cancelled) {
				setAvatar(result.uri);
				console.log(result.uri);
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
				<TouchableOpacity style={styles.chooseAvatar} onPress={pickImage}>
					{avatar ? (
						<Image source={{uri: avatar}} style={styles.avatar} />
					) : (
						<MaterialCommunityIcon
							style={styles.avatarIcon}
							name='account-circle'
							color='#000a'
							size={100}
						/>
					)}
					<Text style={styles.chooseText}>Choose</Text>
				</TouchableOpacity>
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
	},
});

export default React.memo(EditProfile);
