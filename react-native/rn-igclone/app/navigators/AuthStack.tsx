import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from 'app/screens/start';
import Register from 'app/screens/register';
import SignIn from 'app/screens/signin';
import { useSelector } from 'app/redux';
import Loading from 'app/components/Loading';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {
	const {loading} = useSelector(state => state.auth);
	return (
		<>
			<Loading loading={loading} />
			<Stack.Navigator initialRouteName='Start'>
				<Stack.Screen
					name='Start'
					component={Start}
					options={{headerShown: false}}
				/>
				<Stack.Screen name='Register' component={Register} />
				<Stack.Screen name='SignIn' component={SignIn} />
			</Stack.Navigator>
		</>
	);
};

const AuthStack = React.memo(AuthStackNav);

export { AuthStack };
