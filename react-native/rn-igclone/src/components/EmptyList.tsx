import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmptyList: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcon name="emoticon-happy-outline" size={100} color='blue' />
      <Text style={styles.text}>No More Posts For Now!</Text>
      <Text>Please Check Back Later.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  },
})

export default React.memo(EmptyList);