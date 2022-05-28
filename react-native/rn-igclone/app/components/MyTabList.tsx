import React from "react";
import {FlatList, Image, View, StyleSheet, SafeAreaView} from 'react-native';
import {ProfileTabListProps} from 'app/types/props';

const ProfileTabList: React.FC<ProfileTabListProps> = ({list, style}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        style={styles.list}
        numColumns={3}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={{uri: item.thumbnail}} style={{...styles.thumbnail, ...style}} />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: '100%',
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
})

export default React.memo(ProfileTabList);