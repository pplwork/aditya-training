type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface AuthUser {
	email: string;
	password: string;
}

interface AuthInitialState {
	user: User | null;
	loading: boolean;
	error: any;
}

interface User {
	name: string | null;
	email: string | null;
	phone: string | null;
	avatar: string | null;
	username: string | null;
	id: string | null;
	uid: string;
}

interface Profile {
	followerCount?: number | null;
	followingCount?: number | null;
	postCount?: number | null;
	bio?: string | null;
}

interface ProfileInitialState {
	about: Profile | null;
	loading: boolean;
	error: any;
	changed: boolean;
}

type CreateProfile = Profile & Partial<User>;

interface PostsInitialState {
	posts: Post[];
	likes: Like[];
	comments: Comment[];
	loading: boolean;
	error: any;
}

interface Post {
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

type CreatePost = {
	postUri: string;
	caption: string;
	description: string;
	user: Partial<User>;
};

interface Comment {
	text: string | null;
	timestamp: string;
	user: Partial<User> | null;
	postId: string;
}

interface Like {
	timestamp: string;
	user: Partial<User> | null;
	postId: string;
}

type ProfileTabListProps = {
	list: {
		thumbnail: string;
		id: string;
	}[];
	style?: object;
};

type ButtonIconProps = {
	style?: object;
	iconName: string;
	iconSize: number;
	iconColor: string;
	title?: string;
	onPress: () => void;
	titleStyle?: object;
	iconStyle?: object;
};

type DropDownOptionProps = {
	title: string;
	icon: string;
};

type DropDownProps = {
	options: {
		title: string;
		data: DropDownOptionProps[];
	}[];
	dropdownStyle?: object;
	onSelect: (item: DropDownOptionProps) => void;
	optionStyle?: object;
	headerStyle?: object;
	onClose: () => void;
	open: boolean;
};

type InputProps = TextInputProps & {
	style?: object;
};

enum Size {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
}

type StoryProps = {
	story: {
		thumbnail: string;
		username: string;
		seen?: boolean;
		id: string;
	};
	size?: Size;
};

type StoriesProps = {
	stories: StoryProps['story'][];
	size?: Size;
	header?: boolean;
	footer?: boolean;
};

type LoadingProps = {
	loading: boolean;
};

type ImageIconProps = {
	imageUri?: string;
	imageStyle?: object;
	buttonStyle?: object;
	iconName?: string;
	iconColor?: string;
	iconSize?: number;
	iconStyle?: object;
	label?: string;
	labelStyle?: object;
	onPress: () => void;
};

type PostProps = {
	post: Post;
};

type StoryViewProp = NativeStackNavigationProp<HomeStackParamList, 'StoryView'>;

type HomeStackUseNavProps = NativeStackNavigationProp<HomeStackParamList>;

type StartProps = NativeStackScreenProps<AuthStackParamList, 'Start'>;

type SignInProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

type RegisterProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;

type ProfileProps = NativeStackScreenProps<ProfileStackParamList, 'Profile'>;

type EditProfileProps = NativeStackScreenProps<
	ProfileStackParamList,
	'EditProfile'
>;

type NewPostProps = NativeStackScreenProps<HomeStackParamList, 'NewPost'>;

type AuthStackParamList = {
	Start: undefined;
	Register: undefined;
	SignIn: undefined;
};

type HomeStackParamList = {
	Home: undefined;
	StoryView: undefined;
	NewPost: undefined;
	NewReel: undefined;
	NewStory: undefined;
	NewIgtv: undefined;
};

type ProfileStackParamList = {
	Profile: undefined;
	EditProfile: undefined;
};
