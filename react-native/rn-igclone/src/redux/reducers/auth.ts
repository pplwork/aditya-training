import {createSlice, Slice} from '@reduxjs/toolkit';
import {
	signIn,
	register,
	signOut,
	checkUser,
	toggleLoader,
	hydrateUser
} from '../actions/auth';
import type {AuthInitialState} from 'src/types/redux';

const initialState: AuthInitialState = {
	user: null,
	loading: false,
	error: null,
};

const auth: Slice<AuthInitialState> = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(signIn.pending, (state, _action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload ?? null;
				state.error = null;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(register.pending, (state, _action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload ?? null;
				state.error = null;
			})
			.addCase(register.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(signOut.pending, (state, _action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(signOut.fulfilled, (state, _action) => {
				state.loading = false;
				state.user = null;
				state.error = null;
			})
			.addCase(signOut.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(checkUser.pending, (state, _action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(checkUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(checkUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(toggleLoader, (state, _action) => {
				state.loading = !state.loading;
			})
			.addCase(hydrateUser, (state, action) => {
				state.user = {...state.user, ...action.payload};
			}),
});

const authReducer = auth.reducer;
export {authReducer};
