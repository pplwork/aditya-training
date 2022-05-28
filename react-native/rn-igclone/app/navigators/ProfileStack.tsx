import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from 'app/screens/profile';
import EditProfile from 'app/screens/edit-profile';
import {useSelector} from 'app/redux';
import Loading from 'app/components/Loading';
import HeaderRight from 'app/components/HeaderRight';

const Stack = createNativeStackNavigator();

const ProfileStackNav = () => {
	const auth = useSelector((state) => state.auth);
	const profile = useSelector(state => state.profile);
	return (
		<>
			<Loading loading={auth.loading || profile.loading} />
			<Stack.Navigator
				initialRouteName={auth.user?.username ? 'Profile' : 'EditProfile'}
				screenOptions={{
					headerRight: () => <HeaderRight />,
				}}
			>
				<Stack.Screen name='Profile' component={Profile} />
				<Stack.Screen name='EditProfile' component={EditProfile} />
			</Stack.Navigator>
		</>
		
	);
};

const ProfileStack = React.memo(ProfileStackNav);

export {ProfileStack};
