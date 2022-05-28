import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers/auth';
import { profileReducer } from './reducers/profile';
import { useSelector, useDispatch, shallowEqual, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
	reducer: combineReducers({
		auth: authReducer,
		profile: profileReducer,
	}),
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
  shallowEqual,
	store,
};
