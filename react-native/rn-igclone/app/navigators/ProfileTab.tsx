import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyTabList from 'app/components/MyTabList';
import mock from 'app/mock';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const ProfileTabNav: React.FC = (): JSX.Element => {
	return (
		<Tab.Navigator
			initialRouteName='MyPosts'
			screenOptions={{tabBarShowLabel: false}}
		>
			<Tab.Screen
				name='MyPosts'
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons name='grid' color={color} size={25} />
					),
				}}
			>
				{(props) => (
					<MyTabList {...props} list={mock.myPosts} style={styles.square} />
				)}
			</Tab.Screen>
			<Tab.Screen
				name='Reels'
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name='play-box-multiple-outline'
							color={color}
							size={25}
						/>
					),
				}}
			>
				{(props) => (
					<MyTabList {...props} list={mock.myReels} style={styles.rectangle} />
				)}
			</Tab.Screen>
			<Tab.Screen
				name='IGTV'
				options={{
					tabBarIcon: ({color}) => (
						<MaterialCommunityIcons
							name='presentation-play'
							color={color}
							size={25}
						/>
					),
				}}
			>
				{(props) => (
					<MyTabList {...props} list={mock.myIgtvs} style={styles.square} />
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	rectangle: {
		aspectRatio: 1 / 2,
	},
	square: {
		aspectRatio: 1,
	},
});

const ProfileTab = React.memo(ProfileTabNav);

export {ProfileTab};
