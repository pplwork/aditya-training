import {db, auth} from 'src/firebase.config';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {
	addDoc,
	collection,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as logOut,
} from 'firebase/auth';
import {getUserObject} from 'src/utils';
import { UserInfo } from 'firebase/auth/react-native';

const register = createAsyncThunk(
	'auth/register',
	async ({email, password}: AuthUser) => {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			const user = getUserObject(res.user);
			const ref = await addDoc(collection(db, 'profiles'), user);
			return {...user, providerId: ref.id};
		} catch (err) {
			console.log(err);
		}
	}
);

const signIn = createAsyncThunk(
	'auth/signIn',
	async ({email, password}: AuthUser) => {
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			const snaps = await getDocs(
				query(collection(db, 'profiles'), where('uid', '==', res.user.uid))
			);
			return {
				...getUserObject(res.user),
				username: snaps.docs[0].get("username"),
				id: snaps.docs[0].id,
				avatar: snaps.docs[0].get("avatar"),
				name: snaps.docs[0].get("name"),
				phone: snaps.docs[0].get("phone"),
			};
		} catch (err) {
			console.log(err);
		}
	}
);

const signOut = createAsyncThunk(
	'auth/signOut',
	async () => await logOut(auth)
);

const checkUser = createAsyncThunk(
	'auth/checkAuth',
	async (user: UserInfo) => {
		const snaps = await getDocs(
			query(collection(db, 'profiles'), where('uid', '==', user.uid))
		);
		return {
			...getUserObject(user),
			username: snaps.docs[0].get("username"),
			id: snaps.docs[0].id,
			avatar: snaps.docs[0].get("avatar"),
			name: snaps.docs[0].get("name"),
			phone: snaps.docs[0].get("phone"),
		};
	}
);

const hydrateUser = createAction<User>('auth/hydrateUser');

const toggleLoader = createAction('auth/toggleLoader');

export {register, signIn, signOut, checkUser, toggleLoader, hydrateUser};
