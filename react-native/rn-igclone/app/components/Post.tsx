import {PostProps} from 'app/types/props';
import React, {useState} from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	Text,
	StyleSheet,
	Pressable,
} from 'react-native';
import ButtonIcon from './ButtonIcon';
import ImageIcon from './ImageIcon';

const Post: React.FC<PostProps> = ({post}): JSX.Element => {
	const [liked, setLiked] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	const like = () => {
		setLiked((prev) => !prev);
	};

	const comment = () => {
		// TODO: add comment
		console.log('comment')
	}

	return (
		<View style={styles.post}>
			<View style={styles.header}>
				<ImageIcon
					buttonStyle={styles.avatar}
					imageUri={`${post.user?.avatar}`}
					onPress={() => {}}
					iconName='account-circle'
					iconColor='gray'
					iconSize={40}
				/>
				<View style={styles.user}>
					<Text style={styles.username}>{post.user?.username}</Text>
					<Text style={styles.timestamp}>{post.timestamp}</Text>
				</View>
			</View>
			<View style={styles.main}>
				<TouchableWithoutFeedback onPress={like}>
					<Image
						style={styles.thumbnail}
						source={{uri: `${post.postUri}`}}
						width={200}
						height={200}
					/>
				</TouchableWithoutFeedback>
				<View style={styles.reactions}>
					<ButtonIcon
						iconColor={liked ? 'red' : 'black'}
						onPress={like}
						iconSize={36}
						iconName={liked ? 'heart' : 'heart-outline'}
						title={`${post.likeCount}`} 
						titleStyle={styles.actionTitle}
					/>
					<ButtonIcon
						iconColor='black'
						iconName='comment-outline'
						iconSize={36}
						onPress={comment}
						title={`${post.commentCount}`}
						titleStyle={styles.actionTitle}
					/>
				</View>
				<Text style={styles.caption}>{post.caption}</Text>
				<Text style={styles.text}>
					{post.description && (post.description.length > 100) && !show
						? post.description?.substring(0, 100) + '...'
						: post.description}
				</Text>
				{post.description && (post.description.length > 100) && (
					<Pressable
						onPress={() => setShow((prev) => !prev)}
						style={styles.showButton}
					>
						<Text>{show ? 'Hide' : 'Show'}</Text>
					</Pressable>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	post: {
		marginVertical: 4,
		padding: 2,
		backgroundColor: 'white',
	},
	header: {
		flexDirection: 'row',
		padding: 2,
	},
	main: {
		marginVertical: 4,
	},
	thumbnail: {
		width: '100%',
		aspectRatio: 1,
	},
	user: {
		padding: 5,
	},
	username: {
		fontWeight: 'bold',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 100,
	},
	timestamp: {},
	caption: {},
	text: {},
	showButton: {
		backgroundColor: '#0002',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 2,
		paddingHorizontal: 10,
		alignSelf: 'center'
	},
	reactions: {
		flexDirection: 'row',
		padding: 2,
	},
	actionTitle: {
		fontSize: 24,
		marginLeft: 5,
	},
});

export default React.memo(Post);
