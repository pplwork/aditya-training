import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const ButtonIcon: React.FC<ButtonIconProps> = ({style, iconName, iconSize, iconColor, iconStyle, title, titleStyle, onPress}): JSX.Element => {
	return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      <MaterialCommunityIcon style={{...styles.icon, ...iconStyle}} name={iconName} color={iconColor} size={iconSize} />
      {title ? <Text style={{...styles.text, ...titleStyle}}>{title}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    margin: 5
	},
  icon: {},
  text: {},
});

export default React.memo(ButtonIcon);
