import {db} from 'src/firebase.config';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
	addDoc,
	collection,
	doc,
	getDocs,
	query,
	serverTimestamp,
  updateDoc,
	writeBatch,
	increment,
} from 'firebase/firestore';
import {Comment, Like, CreatePost, Post} from 'src/types/redux';

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

const likePost = createAsyncThunk('posts/likePost', async ({postId, user}: Omit<Like, 'timestamp'>) => {
	try {
		const batch = writeBatch(db);
		const postRef = doc(db, `/posts/${postId}`);
		batch.update(postRef, 'likeCount', increment(1));
		const likeId = doc(collection(db, `/posts/${postId}/likes`)).id;
		const likeRef = doc(db, `/posts/${postId}/likes/${likeId}`);
		batch.set(likeRef, {
			user,
			timestamp: serverTimestamp(),
		});
		const res = await batch.commit();
		console.log(res);
	} catch (err) {
		console.log(err);
		return;
	}
});

const commentPost = createAsyncThunk('posts/commentPost', async () => {

});

export {createPost, getPosts, getPostComments, getPostLikes, updatePost, likePost, commentPost};
