import {db} from 'src/firebase.config';
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
import {Comment, CreatePost, Post} from 'src/types/redux';

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

const getPosts = createAsyncThunk('posts/getPosts', async () => {
	const res = await getDocs(query(collection(db, `posts`)));
	const posts = res.docs.map(snap => ({
		id: snap.id,
		...snap.data({serverTimestamps: 'estimate'}),
		timestamp: (new Date(snap.get('timestamp').seconds)).toUTCString()
	}) as Post);
	return posts;
});

const updatePost = createAsyncThunk(
	'posts/updatePost',
	async ({id, ...rest}: Post) => {
		await updateDoc(doc(db, `posts/${id}`), {...rest});
		return {...rest, id};
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

export {createPost, getPosts, getPostComments, getPostLikes, updatePost};
