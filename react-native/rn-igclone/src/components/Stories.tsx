import React from 'react';
import {
	FlatList,
	StyleSheet,
} from 'react-native';
import NewStory from './NewStory';
import Story from './Story';

const Stories: React.FC<StoriesProps> = ({stories, size, header, footer}): JSX.Element => {
	return (
		<FlatList
			ListHeaderComponent={header ? <NewStory size={size} /> : null}
			ListFooterComponent={footer ? <NewStory size={size} /> : null}
			style={styles.list}
			keyExtractor={(item) => item.id}
			data={stories}
      horizontal
			renderItem={({item}) => <Story size={size} story={item} />}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
    paddingVertical: 5
  },
});

export default React.memo(Stories);
