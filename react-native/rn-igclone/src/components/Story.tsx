import { useNavigation } from '@react-navigation/native';
import { StoryProps, StoryViewProp } from 'src/types/props';
import React, { useState } from 'react';
import {
	TouchableNativeFeedback,
	View,
	Image,
	StyleSheet,
	Text,
} from 'react-native';

const Story: React.FC<StoryProps> = ({story, size}): JSX.Element => {
	const [seen, setSeen] = useState(story.seen ?? false);
	const navigation = useNavigation<StoryViewProp>();
	return (
		<TouchableNativeFeedback onPress={() => { 
				setSeen(true);
				navigation.navigate("StoryView")
			}}>
			<View style={styles.story}>
				<View style={{...styles.image, borderColor: seen ? 'gray' : 'red'}}>
					<Image
						style={{...styles.thumbnail, ...styles[`thumbnail_${size ?? "md"}`]}}
						source={{uri: story.thumbnail}}
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
		padding: 2,
		borderRadius: 100,
	},
	thumbnail: {
		aspectRatio: 1,
		borderRadius: 100,
	},
	thumbnail_sm: {
		width: 50,
	},
	thumbnail_md: {
		width: 75,
	},
	thumbnail_lg: {
		width: 100,
	},
	username: {
		textAlign: 'center',
	},
});

export default React.memo(Story);
