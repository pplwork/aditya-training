import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Start from './screens/start';
import SignIn from './screens/signin';
import Register from './screens/register';
import Home from './screens/home';
import Explore from './screens/explore';
import Activity from './screens/activity';
import Profile from './screens/profile';
import Reels from './screens/reels';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db, auth} from './firebase.config';
import {signOut} from 'firebase/auth';
import {useEffect} from 'react';
import {addDoc, collection} from 'firebase/firestore';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const App: React.FC = (): JSX.Element => {
	const [user, loading, error] = useAuthState(auth);
	const [accounts] = useCollection(collection(db, 'accounts'));

	useEffect(() => {
		if (!user) return;
		let exists = accounts?.docs.find((doc) => doc.data().email === user?.email);
		if (exists) return;

		addDoc(collection(db, 'accounts'), {
			name: user?.displayName ?? '',
			email: user?.email ?? '',
			phone: user?.phoneNumber ?? '',
			avatar: user?.photoURL ?? '',
			uid: user?.uid ?? '',
		});
	}, [user]);

	return (
		<NavigationContainer>
			{!user && (
				<Stack.Navigator initialRouteName='Start'>
					<Stack.Screen
						name='Start'
						component={Start}
						options={{headerShown: false}}
					/>
					<Stack.Screen name='Register' component={Register} />
					<Stack.Screen name='SignIn' component={SignIn} />
				</Stack.Navigator>
			)}

			{user && (
				<BottomTab.Navigator initialRouteName='Home'>
					<BottomTab.Screen
						name='Home'
						component={Home}
						options={{
							headerRight: () => (
								<View style={{flexDirection: "row"}}>
									<Button title='New Post' onPress={() => {}} />
									<Button color="red" title='SignOut' onPress={() => signOut(auth)} />
								</View>
							),
							headerTitle: "IgClone"
						}}
					/>
					<BottomTab.Screen name='Explore' component={Explore} />
					<BottomTab.Screen name='Reels' component={Reels} />
					<BottomTab.Screen name='Activity' component={Activity} />
					<BottomTab.Screen name='Profile' component={Profile} />
				</BottomTab.Navigator>
			)}
		</NavigationContainer>
	);
};

export default App;
