import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {AuthBottomTab} from './AuthBottomTab';
import {AuthStack} from './AuthStack';

import {useDispatch, useSelector} from 'src/redux/store';
import {checkUser, toggleLoader} from 'src/redux/actions/auth';
import {SafeAreaView, useSafeAreaFrame} from 'react-native-safe-area-context';
import {onAuthStateChanged} from 'firebase/auth/react-native';
import {auth} from 'src/firebase.config';
import Loading from 'src/components/Loading';
import { useFirestoreConnect } from 'react-redux-firebase';

const Nav = () => {
	const {user, loading} = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const frame = useSafeAreaFrame();

	useFirestoreConnect({
		collection: "profiles",
	});

	const profiles = useSelector(state => state?.firestore?.data?.profiles);

	console.log("firestore profiles", profiles);

	const styles = StyleSheet.create({
		container: {
			width: frame.width,
			height: frame.height,
		},
	});

	useEffect(() => {
		if (user) return;
		dispatch(toggleLoader());
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(checkUser(user));
				return;
			}
			dispatch(toggleLoader());
		});
	}, []);

	if (!user && loading) return <Loading loading={loading} />;

	return (
		<>
			<SafeAreaView style={styles.container}>
				<NavigationContainer>
					{user ? <AuthBottomTab /> : <AuthStack />}
				</NavigationContainer>
			</SafeAreaView>
		</>
	);
};

const Navigation = React.memo(Nav);

export {Navigation};
