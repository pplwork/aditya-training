import React, { useState } from "react";
import { Button, View, TouchableWithoutFeedback, Image, Text, StyleSheet } from "react-native";

export interface IPost {
	post: {
		thumbnail: string;
    caption: string;
    description: string;
		user: {
      name: string;
      avatar: string;
    };
		timestamp: string;
		id: string;
	};
}

const Post: React.FC<IPost> = ({post}): JSX.Element => {
  const [liked, setLiked] = useState(false);

  const like = () => {
    setLiked(prev => !prev);
  }
	return (
		<TouchableWithoutFeedback onPress={like}>
			<View style={styles.post}>
				<View style={styles.header}>
					<Image
						style={styles.avatar}
						source={{uri: post.user.avatar}}
						width={40}
						height={40}
					/>
					<View style={styles.user}>
						<Text style={styles.username}>{post.user.name}</Text>
						<Text style={styles.timestamp}>{post.timestamp}</Text>
					</View>
				</View>
				<View style={styles.main}>
					<Image
						style={styles.thumbnail}
						source={{uri: post.thumbnail}}
						width={200}
						height={200}
					/>
					<View style={styles.reactions}>
						<Button
							color='red'
							title={liked ? 'Liked' : 'Like'}
							onPress={like}
						/>
						<Button
							color='gray'
							title='Comment'
							onPress={() => console.log('comment')}
						/>
					</View>
					<Text style={styles.caption}>{post.caption}</Text>
				</View>
				<View style={styles.footer}>
					<Text style={styles.text}>{post.description}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
  post: {
    marginVertical: 4,
    padding: 2,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    padding: 2
  },
  main: {
    marginVertical: 4
  },
	thumbnail: {
    width: '100%',
    aspectRatio: 1,
  },
  user: {},
	username: {},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
	timestamp: {},
  footer: {},
  caption: {},
  text: {},
  reactions: {
    flexDirection: 'row',
    padding: 2,
  },
})

export default Post;
