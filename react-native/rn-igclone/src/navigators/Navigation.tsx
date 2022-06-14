import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthBottomTab} from './AuthBottomTab';
import { AuthStack } from './AuthStack';

import { checkUser, useDispatch, useSelector, toggleLoader } from 'src/redux';
import { onAuthStateChanged } from 'firebase/auth/react-native';
import { auth } from 'src/firebase.config';
import Loading from 'src/components/Loading';

const Nav = () => {
	const {user, loading} = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) return;
		dispatch(toggleLoader());
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user){
				dispatch(checkUser(user));
				return;
			}
			dispatch(toggleLoader());
		});
	}, []);

	if(!user && loading)
		return <Loading loading={loading} />

	return (
		<NavigationContainer>
			{user ? <AuthBottomTab/> : <AuthStack/>}
		</NavigationContainer>
	);
};

const Navigation = React.memo(Nav);

export {Navigation};
