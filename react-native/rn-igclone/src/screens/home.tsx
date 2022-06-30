import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import Stories from 'src/components/Stories';
import mock from 'src/mock';
import {Size} from 'src/types/props';
import {useDispatch, useSelector} from 'src/redux/store';
import {getPosts} from 'src/redux/actions/posts';
import Post from 'src/components/Post';
import EmptyList from 'src/components/EmptyList';

const Home: React.FC = (): JSX.Element => {
	const {posts, loading} = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.stories}>
				<Stories stories={mock.stories} size={Size.sm} header />
			</View>
			<View style={styles.posts}>
				<FlatList
					style={styles.list}
					keyExtractor={(item) => item.id}
					data={posts}
					renderItem={({item}) => <Post post={item} />}
					ListEmptyComponent={() => <EmptyList />}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
	},
	stories: {
		padding: 2,
		flexDirection: 'row',
	},
	posts: {
		padding: 2,
		flex: 1,
	},
	list: {
		padding: 2,
	},
});

export default React.memo(Home);
