import React from 'react';
import {FlatList, Image, View, StyleSheet} from 'react-native';
import {ProfileTabListProps} from 'src/types/props';

const ProfileTabList: React.FC<ProfileTabListProps> = ({list, style}) => {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				numColumns={3}
				data={list}
				keyExtractor={(item) => item.id}
				renderItem={({item}) => (
					<View style={styles.item}>
						<Image
							source={{uri: item.thumbnail}}
							style={{...styles.thumbnail, ...style}}
						/>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
	list: {
		padding: '1%',
	},
	item: {
		width: '33%',
		margin: 1,
	},
	thumbnail: {
		width: '100%',
		aspectRatio: 1,
	},
});

export default React.memo(ProfileTabList);
