import {db, auth} from 'src/firebase.config';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {addDoc, collection, getDoc, doc, getDocs, query, where, updateDoc} from 'firebase/firestore';

const updateProfile = createAsyncThunk(
	'profile/updateProfile',
	async ({username, avatar, bio, name, phone, email, id}: CreateProfile) => {
		try { 
      return await updateDoc(doc(db, `profiles/${id}`), {
        username,
        name,
        avatar,
        phone,
        email,
        about: {
          bio,
          followerCount: 0,
          followingCount: 0,
          postCount: 0,
        },
      });
		} catch (err) {
			console.log(err);
		}
	}
);

const getProfile = createAsyncThunk(
	'profile/getProfile',
	async (id: string) => {
		try {
			const res = await getDoc(doc(db, `profiles/${id}`));
			return res.get("about");
		} catch (err) {
			console.log(err);
		}
	}
);

const updateProfileAbout = createAsyncThunk(
	'profile/updateProfileAbout',
	async () => {

  }
);

const deleteProfile = createAsyncThunk(
	'profile/deleteProfile',
	async () => {

  }
);

const changeStatus = createAction('profile/changeStatus');

export {updateProfile, getProfile, updateProfileAbout, deleteProfile, changeStatus};
