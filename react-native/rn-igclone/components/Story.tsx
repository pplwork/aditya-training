import React from 'react';
import {
	TouchableNativeFeedback,
	View,
	Image,
	StyleSheet,
	Text,
} from 'react-native';

export interface IStory {
	story: {
		thumbnail: string;
		username: string;
		id: string;
	};
}

const Story: React.FC<IStory> = ({story}): JSX.Element => {
	return (
		<TouchableNativeFeedback onPress={() => {}}>
			<View style={styles.story}>
				<View style={styles.image}>
					<Image
						style={styles.thumbnail}
						source={{uri: story.thumbnail}}
						width={40}
						height={40}
					/>
				</View>
				<Text style={styles.username}>{story.username}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	story: {
		marginHorizontal: 5,
		padding: 2,
	},
	image: {
		borderWidth: 2,
		borderColor: 'red',
		padding: 2,
		borderRadius: 100,
	},
	thumbnail: {
		width: 50,
		height: 50,
		borderRadius: 100,
	},
	username: {
		textAlign: 'center',
	},
});

export default Story;
