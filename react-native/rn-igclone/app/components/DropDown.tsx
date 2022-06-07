import {StyleSheet, SectionList, Text, Modal, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import ButtonIcon from './ButtonIcon';
import {DropDownProps} from 'app/types/props';

const DropDown: React.FC<DropDownProps> = ({
	options,
	dropdownStyle,
	onSelect,
	optionStyle,
	headerStyle,
	open,
	onClose,
}): JSX.Element => {
	return (
		<Modal
			animationType='slide'
			transparent
			visible={open}
			onRequestClose={onClose}
		>
			<TouchableWithoutFeedback
				style={styles.dismiss}
				onPress={onClose}
			>
				<View style={styles.overlay}></View>
			</TouchableWithoutFeedback>
			<View style={{...styles.picker, ...dropdownStyle}}>
				<SectionList
					sections={options}
					keyExtractor={(item) => item.title}
					renderItem={({item}) => (
						<ButtonIcon
							style={{...styles.item, ...optionStyle}}
							titleStyle={styles.itemContent}
							onPress={() => onSelect(item)}
							iconName={item.icon}
							iconColor='black'
							iconSize={24}
							title={item.title}
						/>
					)}
					renderSectionHeader={({section: {title}}) => (
						<Text style={{...styles.header, ...headerStyle}}>{title}</Text>
					)}
				/>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	picker: {
		width: '100%',
		paddingVertical: 2,
		backgroundColor: '#DDD',
		alignSelf: 'center',
	},
	header: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 5,
	},
	item: {
		marginVertical: 0,
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderTopWidth: 2,
		borderColor: 'gray',
		padding: 5,
	},
	itemContent: {
		fontSize: 20,
		textTransform: 'capitalize',
		margin: 5,
	},
	dismiss: {
		flex: 1,
		backgroundColor: 'red',
		height: '50%',
		width: '100%',
		overflow: 'hidden',
	},
	overlay: {
		width: '100%',
		flex: 1,
		backgroundColor: '#000a',
	},
});

export default React.memo(DropDown);
