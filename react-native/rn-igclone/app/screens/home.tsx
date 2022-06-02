import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Posts from 'app/components/Posts';
import Stories from 'app/components/Stories';
import mock from 'app/mock';
import { Size } from 'app/types/props';

const Home: React.FC = (): JSX.Element => {
	return (
		<SafeAreaView style={styles.container}>
				<View style={styles.stories}>
					<Stories stories={mock.stories} size={Size.sm} header />
				</View>
				<View style={styles.posts}>
					<Posts posts={mock.posts} />
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
});

export default React.memo(Home);
