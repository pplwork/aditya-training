import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'src/screens/home';
import StoryView from 'src/screens/story-view';
import NewPost from 'src/screens/new-post';
import HeaderRight from 'src/components/HeaderRight';
import NewReel from 'src/screens/new-reel';
import NewStory from 'src/screens/new-story';
import NewIgtv from 'src/screens/new-igtv';
import {useSelector} from 'src/redux/store';
import Loading from 'src/components/Loading';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
	const {posts} = useSelector((state) => state);
	return (
		<>
			<Loading loading={posts.loading} />
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					title: 'IgClone',
					headerRight: () => <HeaderRight />,
				}}
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Story' component={StoryView} />
				<Stack.Screen name='NewPost' component={NewPost} />
				<Stack.Screen name='NewReel' component={NewReel} />
				<Stack.Screen name='NewIgtv' component={NewIgtv} />
				<Stack.Screen name='NewStory' component={NewStory} />
			</Stack.Navigator>
		</>
	);
};

const HomeStack = React.memo(HomeStackNav);

export {HomeStack};
