import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import Stories from 'app/components/Stories';
import mock from 'app/mock';
import {ProfileTab} from 'app/navigators/ProfileTab';
import { ProfileProps, Size } from 'app/types/props';
import { getProfile, useDispatch, useSelector } from 'app/redux';

const Profile: React.FC<ProfileProps> = ({navigation}): JSX.Element => {
	const {user} = useSelector(state => state.auth);
	const {about, changed} = useSelector(state => state.profile);
	const dispatch = useDispatch();

	useEffect(() => {
		if(!user) return;
		if(about && !changed) return;

		dispatch(getProfile(`${user?.id}`));
	}, [changed]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.user}>
				<Image
					source={{uri: `${user?.avatar}`}}
					style={styles.avatar}
				/>
				<View style={styles.info}>
					<View style={styles.infoBlock}>
						<Text style={styles.textStrong}>{about?.postCount}</Text>
						<Text style={styles.infoText}>Posts</Text>
					</View>
					<View style={styles.infoBlock}>
						<Text style={styles.textStrong}>{about?.followerCount}</Text>
						<Text style={styles.infoText}>Followers</Text>
					</View>
					<View style={styles.infoBlock}>
						<Text style={styles.textStrong}>{about?.followingCount}</Text>
						<Text style={styles.infoText}>Followings</Text>
					</View>
				</View>
			</View>
			<Text style={styles.text}>{user?.username}</Text>
			<Text style={styles.text}>{user?.name}</Text>
			<Text style={styles.text}>{about?.bio}</Text>

			<TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("EditProfile")}>
				<Text style={styles.linkText}>Edit Profile</Text>
			</TouchableOpacity>
			
			<View style={styles.stories}>
				<Stories stories={mock.stories} size={Size.sm} footer />
			</View>
			<SafeAreaView style={styles.tabView}>
				<ProfileTab />
			</SafeAreaView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
		marginHorizontal: 10,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	infoBlock: {
		padding: 5,
		marginHorizontal: '1%',
	},
	textStrong: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 16,
	},
	infoText: {
		textAlign: 'center',
	},
	text: {
		marginHorizontal: 10,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	linkButton: {
		borderWidth: 2,
		borderColor: '#0007',
		paddingVertical: 10,
		paddingHorizontal: 35,
		alignSelf: 'center',
		borderRadius: 3,
		backgroundColor: '#0001',
		marginVertical: 10,
	},
	linkText: {
		color: '#000'
	},
	stories: {},
	tabView: {
		height: '100%',
		width: '100%',
	},
});

export default Profile;
