import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

const Input: React.FC<TextInputProps> = ({style, ...rest}): JSX.Element => {
	return <TextInput {...rest} style={{...styles.input, ...style}} />;
};

const styles = StyleSheet.create({
	input: {
		width: '100%',
		borderWidth: 2,
		borderColor: 'gray',
	},
});

export default Input;
