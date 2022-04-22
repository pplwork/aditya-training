import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
	FlatList,
	StyleSheet,
} from 'react-native';
import Story, { IStory } from './Story';

interface IStories {
	stories: IStory["story"][];
}

const Stories: React.FC<IStories> = ({stories}): JSX.Element => {
	const navigation = useNavigation();
	return (
		<FlatList
			style={styles.list}
			keyExtractor={(item) => item.id}
			data={stories}
      horizontal
			renderItem={({item}) => <Story story={item} />}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
    paddingVertical: 5
  },
});

export default Stories;
