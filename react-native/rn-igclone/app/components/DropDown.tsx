import {SafeAreaView, StyleSheet, SectionList, Text, Platform} from 'react-native';
import React from 'react';
import ButtonIcon from './ButtonIcon';
import {DropDownProps} from 'app/types/props'

const DropDown: React.FC<DropDownProps> = ({options, style, onSelect}): JSX.Element => {
	return (
		<SafeAreaView style={{...styles.picker, ...style}}>
			<SectionList
				sections={options}
				keyExtractor={(item) => item.title}
				renderItem={({item}) => (
					<ButtonIcon
						style={styles.item}
						titleStyle={styles.itemContent}
						onPress={() => onSelect(item)}
						iconName={item.icon}
						iconColor='black'
						iconSize={24}
						title={item.title}
					/>
				)}
				renderSectionHeader={({section: {title}}) => (
					<Text style={styles.header}>{title}</Text>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	picker: {
		zIndex: 20,
    elevation: (Platform.OS === 'android') ? 20 : 0,
		height: 190,
		width: '50%',
		paddingVertical: 2,
		backgroundColor: '#DDD',
		flex: 1,
		position: 'absolute',
		top: 51,
		right: 0,
	},
	header: {
		fontSize: 16,
		textAlign: 'center',
    marginBottom: 5
	},
	item: {
    marginVertical: 0,
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		alignItems: 'center',
    borderTopWidth: 2,
    borderColor: 'gray',
    padding: 5
	},
	itemContent: {
		fontSize: 20,
		textTransform: 'capitalize',
	},
});

export default React.memo(DropDown);
