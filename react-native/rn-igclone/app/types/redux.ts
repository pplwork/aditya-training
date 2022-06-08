export interface AuthUser {
	email: string;
	password: string;
}

export interface AuthInitialState {
	user: User | null;
	loading: boolean;
	error: any;
}

export interface User {
	name: string | null;
	email: string | null;
	phone: string | null;
	avatar: string | null;
	username: string | null;
	id: string | null;
	uid: string;
}

export interface Profile {
	followerCount?: number | null;
	followingCount?: number | null;
	postCount?: number | null;
	bio?: string | null;
}

export interface ProfileInitialState {
	about: Profile | null;
	loading: boolean;
	error: any;
	changed: boolean;
}

export type CreateProfile = Profile & Partial<User>;

export interface PostsInitialState {
	posts: Post[];
  likes: Like[];
  comments: Comment[];
	loading: boolean;
	error: any;
}

export interface Post {
	id: string;
	postUri: string | null;
	caption: string | null;
	description: string | null;
	likeCount: number | null;
	commentCount: number | null;
	seenCount: number | null;
	timestamp: string | null;
	user: Partial<User> | null;
}

export type CreatePost = {
	postUri: string;
	caption: string;
	description: string;
	user: Partial<User>;
};

export interface Comment {
	text: string | null;
	timestamp: string;
	user: Partial<User> | null;
  postId: string;
}

export interface Like {
	timestamp: string;
	user: Partial<User> | null;
  postId: string;
}
