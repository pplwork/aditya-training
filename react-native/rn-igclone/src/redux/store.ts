import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
	useSelector,
	useDispatch,
	shallowEqual,
	TypedUseSelectorHook,
} from 'react-redux';
import {firebaseReducer, actionTypes} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import {postsReducer} from './reducers/posts';
import {authReducer} from './reducers/auth';
import {profileReducer} from './reducers/profile';

const store = configureStore({
	reducer: combineReducers({
		firebase: firebaseReducer,
		firestore: firestoreReducer,
		auth: authReducer,
		profile: profileReducer,
		posts: postsReducer,
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR],
			},
		}),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
	useAppDispatch as useDispatch,
	useAppSelector as useSelector,
	shallowEqual,
	store,
};
