export interface AuthUser {
  email: string;
  password: string;
};

export interface AuthInitialState {
  user: User | null;
  loading: boolean;
  error: any;
};

export interface User {
  name: string | null;
  email: string | null;
  phone: string | null;
  avatar: string | null;
  username: string | null;
  id: string | null;
  uid: string;
};

export interface Profile {
  followerCount?: number | null;
  followingCount?: number | null;
  postCount?: number | null;
  bio?: string | null;
}

export interface ProfileInitialState {
  about: Profile | null;
  followers: [];
  followings: [];
  posts: [];
  loading: boolean;
  error: any;
  changed: boolean;
}

export type CreateProfile = Profile & Partial<User>;