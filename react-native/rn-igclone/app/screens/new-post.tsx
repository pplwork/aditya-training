import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import ImageIcon from 'app/components/ImageIcon';
import Input from 'app/components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDown from 'app/components/DropDown';
import mock from 'app/mock';
import { DropDownOptionProps } from 'app/types/props';

const NewPost: React.FC = (): JSX.Element => {
	const [postUri, setPostUri] = useState<string>('');
	const [postTitle, setPostTitle] = useState<string>('');
	const [postDescription, setPostDescription] = useState<string>('');
	const [chooseOptions, setChooseOptions] = useState<boolean>(false);

	const createPost = async () => {};
	const handleSelect = (option: DropDownOptionProps) => {
		
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
						<Button title='Create Post' onPress={createPost} />
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
