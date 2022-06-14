import {createSlice, Slice} from '@reduxjs/toolkit';
import {
  createPost, getPostComments, getPostLikes, getPosts, updatePost
} from '../actions/posts';
import type {PostsInitialState} from 'src/types/redux';

const initialState: PostsInitialState = {
	posts: [],
  likes: [],
  comments: [],
	loading: false,
	error: null,
};

const posts: Slice<PostsInitialState> = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(createPost.pending, (state, _action) => {
      state.loading = true;
    })
    .addCase(createPost.fulfilled, (state, action) => {
      if(action.payload)
        state.posts.push(action.payload);
      state.loading = false
      state.error = null;
    })
    .addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(getPosts.pending, (state, _action) => {
      state.loading = true;
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.posts  = action.payload;
      state.loading = false
      state.error = null;
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updatePost.pending, (state, _action) => {
      state.loading = true;
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload?.id)
      if(index > -1)
        state.posts[index] = {
          ...state.posts[index], ...action.payload
        }
      state.loading = false
      state.error = null;
    })
    .addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    /*.addCase(getPostComments.pending, (state, _action) => {
      state.loading = true;
    })
    .addCase(getPostComments.fulfilled, (state, action) => {
      state.comments = action.payload ?? [];
      state.loading = false;
      state.error = null;
    })
    .addCase(getPostComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(getPostLikes.pending, (state, _action) => {
      state.loading = true;
    })
    .addCase(getPostLikes.fulfilled, (state, action) => {
      state.likes = action.payload ?? [];
      state.loading = false;
      state.error = null;
    })
    .addCase(getPostLikes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })*/
})

const postsReducer = posts.reducer;

export {postsReducer};