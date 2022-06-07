import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'app/screens/home';
import StoryView from 'app/screens/story-view';
import NewPost from 'app/screens/new-post';
import HeaderRight from 'app/components/HeaderRight';
import NewReel from 'app/screens/new-reel';
import NewStory from 'app/screens/new-story';
import NewIgtv from 'app/screens/new-igtv';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
	return (
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
	);
};

const HomeStack = React.memo(HomeStackNav);

export {HomeStack};
