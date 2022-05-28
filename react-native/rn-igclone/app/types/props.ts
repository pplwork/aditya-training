import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import { TextInputProps } from 'react-native';
import {AuthStackParamList, HomeStackParamList, ProfileStackParamList} from './navigations';

export type ProfileTabListProps = {
	list: {
		thumbnail: string;
		id: string;
	}[];
	style?: object;
};

export type ButtonIconProps = {
	style?: object;
	iconName: string;
	iconSize: number;
	iconColor: string;
	title?: string;
	onPress: () => void;
	titleStyle?: object;
	iconStyle?: object;
};

export type DropDownOptionProps = {
	title: string;
	icon: string;
};

export type DropDownProps = {
	options: {
		title: string;
		data: DropDownOptionProps[];
	}[];
	style?: object;
	onSelect: (item: DropDownOptionProps) => void;
	optionStyle?: object;
};

export type InputProps = TextInputProps & {
	style?: object;
}

export enum Size {
	sm = "sm",
	md = "md",
	lg = "lg"
}

export type StoryProps = {
	story: {
		thumbnail: string;
		username: string;
		seen?: boolean;
		id: string;
	};
	size?: Size;
}

export type StoriesProps = {
	stories: StoryProps["story"][];
	size?: Size;
	header?: boolean;
	footer?: boolean;
}

export type LoadingProps = {
	loading: boolean;
}

export type StoryViewProp = NativeStackNavigationProp<HomeStackParamList, 'StoryView'>;

export type StartProps = NativeStackScreenProps<AuthStackParamList, 'Start'>;

export type SignInProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export type RegisterProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export type ProfileProps = NativeStackScreenProps<ProfileStackParamList, 'Profile'>;

export type EditProfileProps = NativeStackScreenProps<ProfileStackParamList, 'EditProfile'>;