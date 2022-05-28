import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import mock from 'app/mock';
import ButtonIcon from './ButtonIcon';
import MyTabList from './MyTabList';

const MyTabView: React.FC = (): JSX.Element => {
	const [tab, setTab] = useState('posts');

	return (
		<>
			<View style={styles.tabViewHeader}>
				<ButtonIcon
					iconName='grid'
					iconColor={tab === 'posts' ? 'blue' : 'black'}
					iconSize={40}
					style={styles.headerTab}
					onPress={() => setTab('posts')}
				/>
				<ButtonIcon
					iconName='play-box-multiple-outline'
					iconColor={tab === 'reels' ? 'blue' : 'black'}
					iconSize={40}
					style={styles.headerTab}
					onPress={() => setTab('reels')}
				/>
				<ButtonIcon
					iconName='presentation-play'
					iconColor={tab === 'igtv' ? 'blue' : 'black'}
					iconSize={40}
					style={styles.headerTab}
					onPress={() => setTab('igtv')}
				/>
			</View>
			<View style={styles.tabViewContent}>
        <MyTabList list={tab === 'posts' ? mock.myPosts : tab === 'reels' ? mock.myReels : mock.myIgtvs} style={tab === 'reels' ? styles.rectangle : styles.square} />
      </View>
		</>
	);
};

const styles = StyleSheet.create({
	tabViewHeader: {
		borderColor: 'gray',
		borderTopWidth: 2,
		borderBottomWidth: 2,
		flexDirection: 'row',
		padding: 5,
		justifyContent: 'space-around',
	},
	headerTab: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
	tabViewContent: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
  },
  rectangle: {
		aspectRatio: 1/2,
	},
  square: {
		aspectRatio: 1,
	},
});

export default MyTabView;
