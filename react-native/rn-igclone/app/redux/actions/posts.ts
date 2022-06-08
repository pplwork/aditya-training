import {db} from 'app/firebase.config';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {
	addDoc,
	collection,
	doc,
	getDocs,
	query,
	serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import {Comment, CreatePost, Post} from 'app/types/redux';

const createPost = createAsyncThunk(
	'posts/createPost',
	async ({postUri, caption, description, user}: CreatePost) => {
		try {
			let post = {
				postUri,
				caption,
				description,
				commentCount: 0,
				likeCount: 0,
				seenCount: 0,
				user,
				timestamp: serverTimestamp(),
			};
			const {id} = await addDoc(collection(db, 'posts'), post);
			return {...post, id, timestamp: (new Date()).toDateString()};
		} catch (err) {
			console.log(err);
			return;
		}
	}
);

const updatePost = createAsyncThunk(
	'posts/updatePost',
	async ({postUri, caption, description, user, id}: Post) => {
		try {
			let post = {
				postUri,
				caption,
				description,
				commentCount: 0,
				likeCount: 0,
				seenCount: 0,
				user,
				timestamp: serverTimestamp(),
			};
			await updateDoc(doc(db, `posts/${id}`), post);
			return {...post, id, timestamp: new Date()};
		} catch (err) {
			console.log(err);
			return;
		}
	}
);

const getPostLikes = createAsyncThunk(
	'posts/getPostLikes',
	async (postId: string) => {
		try {
			const res = await getDocs(query(collection(db, `posts/${postId}/likes`)));
			return res.docs.map((snap) => ({
				id: snap.id,
				postId,
				...snap.data({serverTimestamps: 'estimate'}),
			}));
		} catch (err) {
			console.log(err);
			return;
		}
	}
);

const getPostComments = createAsyncThunk(
	'posts/getPostComments',
	async (postId: string) => {
		try {
			const res = await getDocs(query(collection(db, `posts/${postId}/comments`)));
			return res.docs.map((snap) => ({
				id: snap.id,
				postId,
				...snap.data({serverTimestamps: 'estimate'}),
			}));
		} catch (err) {
			console.log(err);
			return;
		}
	}
);

export {createPost, getPostComments, getPostLikes, updatePost};
