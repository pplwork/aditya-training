import React from 'react';
import {Navigation} from 'src/navigators/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {rrfProps} from 'src/firebase.config';
import {store} from 'src/redux/store';

const Index: React.FC = (): JSX.Element => {
	return (
		<>
			<Provider store={store}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</ReactReduxFirebaseProvider>
			</Provider>
		</>
	);
};

export default React.memo(Index);
