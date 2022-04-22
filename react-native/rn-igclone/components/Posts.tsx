import React from 'react';
import {
	FlatList,
	StyleSheet,
} from 'react-native';
import Post, { IPost } from './Post';

interface IPosts {
	posts: IPost["post"][];
}

const Posts: React.FC<IPosts> = ({posts}): JSX.Element => {
	return (
		<FlatList
			style={styles.list}
			keyExtractor={(item) => item.id}
			data={posts}
			renderItem={({item}) => <Post post={item} />}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
    padding: 2
  },
});

export default Posts;
