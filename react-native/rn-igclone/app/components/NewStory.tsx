import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Size } from "./Story";

interface INewStory {
  size?: Size;
}

const NewStory: React.FC<INewStory> = ({size}): JSX.Element => (
	<Pressable android_ripple={{color: '#aaa'}} style={styles.button}>
		<MaterialCommunityIcon name='plus' color="black" style={{...styles.icon, ...styles[`icon_${size ?? "md"}`]}} />
		<Text style={styles.text}>New</Text>
	</Pressable>
);

const styles = StyleSheet.create({
  button: {
    padding: 4
  },
  icon: {
    textAlign: 'center', 
    borderWidth: 2, 
    borderRadius: 100
  },
  icon_sm: {
		fontSize: 50,
	},
	icon_md: {
		fontSize: 75,
	},
	icon_lg: {
		fontSize: 100,
	},
  text: {
    textAlign: 'center'
  }
})

export default NewStory;