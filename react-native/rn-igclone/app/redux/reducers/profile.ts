import { createSlice, Slice } from "@reduxjs/toolkit";
import { ProfileInitialState } from "app/types/redux";
import { updateProfile, getProfile, changeStatus } from "../actions/profile";

const initialState: ProfileInitialState = {
	about: null,
	loading: false,
	error: null,
  changed: false,
};

const profile: Slice<ProfileInitialState> = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
      .addCase(updateProfile.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, _action) => {
        state.loading = false;
        state.changed = true;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProfile.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.about = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeStatus, (state, _action) => {
        state.changed = !state.changed;
      }),
});

const profileReducer = profile.reducer;

export {profileReducer}