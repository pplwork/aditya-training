import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageIcon: React.FC<ImageIconProps> = ({
	buttonStyle,
	imageUri,
	imageStyle,
	onPress,
	iconName,
	iconColor,
	iconSize,
	iconStyle,
	labelStyle,
	label,
}): JSX.Element => {
	return (
		<TouchableOpacity
			style={{...styles.button, ...buttonStyle}}
			onPress={onPress}
		>
			{imageUri ? (
				<Image
					source={{uri: imageUri}}
					style={{...styles.image, ...imageStyle}}
				/>
			) : (
				<MaterialCommunityIcon
					style={{...styles.icon, ...iconStyle}}
					name={iconName ?? 'camera-outline'}
					color={iconColor ?? '#000a'}
					size={iconSize ?? 100}
				/>
			)}
			{label ? (
				<Text style={{...styles.label, ...labelStyle}}>{label}</Text>
			) : null}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	icon: {
		borderWidth: 1,
		borderColor: '#000a',
		textAlign: 'center',
	},
	label: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#000a',
		color: 'white',
		width: '100%',
		textAlign: 'center',
		paddingVertical: 3,
		textTransform: 'uppercase',
		fontSize: 10,
	},
});

export default React.memo(ImageIcon);
