import React from 'react';
import {Navigation} from 'src/navigators/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider, useFirestoreConnect} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import {store, useSelector} from 'src/redux/store';
import {app} from 'src/firebase.config';
import {Text} from 'react-native';

const rrfProps = {
	config: {
		userProfile: 'users',
		useFirestoreForProfile: true,
	},
	firebase: app,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

function Demo() {
	useFirestoreConnect({
		collection: 'profiles'
	})
	console.log(useSelector(state => state.firestore?.data.profiles))
	return <Text>Demo</Text>;
}

const Index: React.FC = (): JSX.Element => {
	return (
		<>
			<Provider store={store}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<SafeAreaProvider>
						{/*<Navigation />*/}
						<Demo />
					</SafeAreaProvider>
				</ReactReduxFirebaseProvider>
			</Provider>
		</>
	);
};

export default React.memo(Index);
