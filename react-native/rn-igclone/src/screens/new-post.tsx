import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import ImageIcon from 'src/components/ImageIcon';
import Input from 'src/components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDown from 'src/components/DropDown';
import mock from 'src/mock';
import {DropDownOptionProps, NewPostProps} from 'src/types/props';
import {openCamera, pickFromDevice, uploadFile} from 'src/utils';
import {ImagePickerResult, MediaTypeOptions} from 'expo-image-picker';
import {useDispatch, createPost, useSelector} from 'src/redux';

const NewPost: React.FC<NewPostProps> = ({navigation}): JSX.Element => {
	const [postUri, setPostUri] = useState<string>('');
	const [postTitle, setPostTitle] = useState<string>('');
	const [postDescription, setPostDescription] = useState<string>('');
	const [chooseOptions, setChooseOptions] = useState<boolean>(false);
	const {user} = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const handleCreatePost = async () => {
		console.log(postUri, postTitle, postDescription)
		// TODO: dispatch create post.
		if(!postUri) return;
		const uri = await uploadFile(postUri, 'posts');
		dispatch(createPost({
			postUri: uri,
			caption: postTitle,
			description: postDescription,
			user: {
				avatar: user?.avatar,
				id: user?.id,
				username: user?.username,
				uid: user?.uid,
			},
		}));
		setPostTitle('');
		setPostDescription('');
		setPostUri('');
		navigation.navigate('Home');
	};
	const handleSelect = async (option: DropDownOptionProps) => {
		setChooseOptions(false);
		let result: ImagePickerResult | undefined;

		if (option.title === 'Open Camera')
			result = await openCamera(MediaTypeOptions.All, [1, 1]);
		else result = await pickFromDevice(MediaTypeOptions.All, [1, 1]);

		if (!result || result.cancelled) return;

		setPostUri(result.uri);
	};

	return (
		<>
			<KeyboardAwareScrollView
				style={styles.container}
				extraScrollHeight={100}
				enableOnAndroid
				keyboardShouldPersistTaps='handled'
			>
				<View style={styles.post}>
					<ImageIcon
						labelStyle={styles.postLabel}
						imageUri={postUri}
						iconStyle={styles.postIcon}
						iconName='image-outline'
						onPress={() => setChooseOptions(true)}
						label='Choose'
					/>
				</View>
				<Input
					value={postTitle}
					onChangeText={setPostTitle}
					textContentType='jobTitle'
					style={styles.input}
					placeholder='Post Caption'
				/>
				<Input
					value={postDescription}
					onChangeText={setPostDescription}
					placeholder='Post Description'
					multiline
				/>
				<View style={styles.footer}>
					<View style={styles.createButton}>
						<Button title='Create Post' onPress={handleCreatePost} />
					</View>
				</View>
			</KeyboardAwareScrollView>
			<DropDown
				dropdownStyle={styles.dropdown}
				optionStyle={styles.option}
				options={mock.uploadOptionList}
				onSelect={handleSelect}
				onClose={() => setChooseOptions(false)}
				open={chooseOptions}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: '2%',
	},
	post: {
		aspectRatio: 1,
	},
	postIcon: {
		height: '100%',
		width: '100%',
		fontSize: 375,
	},
	postLabel: {
		fontSize: 20,
	},
	input: {
		marginVertical: 10,
	},
	button: {
		marginVertical: 10,
	},
	footer: {
		marginVertical: '5%',
	},
	createButton: {},
	dropdown: {},
	option: {},
});

export default React.memo(NewPost);
