import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'app/screens/home';
import StoryView from 'app/screens/story-view';
import NewPost from 'app/screens/newPost';

const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={Home} />
			<Stack.Screen name='Story' component={StoryView} />
			<Stack.Screen name='CreatePost' component={NewPost} />
		</Stack.Navigator>
	);
};

const HomeStack = React.memo(HomeStackNav);

export {HomeStack};
