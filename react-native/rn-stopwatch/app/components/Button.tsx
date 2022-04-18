import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

interface IButton {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button:React.FC<IButton> = ({title, onClick, disabled}):JSX.Element => {
	return (
		<TouchableOpacity onPress={onClick} disabled={disabled}>
			<View style={styles.btn}>
				<Text style={styles.btnText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    aspectRatio: 1/1,
    width: 60,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  btnText: {
    color: 'white',
  }
})

export default Button;