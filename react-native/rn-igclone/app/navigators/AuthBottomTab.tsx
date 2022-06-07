import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Explore from 'app/screens/explore';
import Activity from 'app/screens/activity';
import Reels from 'app/screens/reels';

import HeaderRight from 'app/components/HeaderRight';
import { ProfileStack } from './ProfileStack';
import { useSelector } from 'app/redux';

const BottomTab = createBottomTabNavigator();

const AuthBottomTabNav: React.FC = (): JSX.Element => {
	const {user} = useSelector(state => state.auth);
	return (
		<BottomTab.Navigator
			initialRouteName={user?.username ? 'HomeNav' : 'ProfileNav'}
			screenOptions={{tabBarShowLabel: false}}
		>
			<BottomTab.Screen
				name='HomeNav'
				component={HomeStack}
				options={{
					headerShown: false,
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name='home-circle'
							color={color}
							size={42}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='Explore'
				component={Explore}
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons name='compass' color={color} size={42} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Reels'
				component={Reels}
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name='clipboard-play-multiple'
							color={color}
							size={42}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='Activity'
				component={Activity}
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name='bell-circle'
							color={color}
							size={42}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='ProfileNav'
				component={ProfileStack}
				options={{
					headerShown: false,
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name='account-circle'
							color={color}
							size={42}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

const AuthBottomTab = React.memo(AuthBottomTabNav);

export { AuthBottomTab };
