import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input: React.FC<InputProps> = ({style, ...rest}): JSX.Element => {
	return <TextInput {...rest} style={{...styles.input, ...style}} />;
};

const styles = StyleSheet.create({
	input: {
		width: '100%',
		borderWidth: 2,
		borderColor: 'gray',
		paddingHorizontal: 10,
		color: 'black',
		backgroundColor: 'white',
	},
});

export default React.memo(Input);
