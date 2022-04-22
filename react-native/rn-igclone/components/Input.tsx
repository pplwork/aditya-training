import React from 'react';
import {TextInput, StyleSheet, TextInputProps, StyleProp, TextStyle} from 'react-native';

interface IInput extends TextInputProps {
	style: object;
}

const Input: React.FC<IInput> = ({style, ...rest}): JSX.Element => {
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
