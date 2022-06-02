import React, {useCallback, useState} from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {signOut, useDispatch} from 'app/redux';

import type {DropDownOptionProps, HomeStackUseNavProps} from 'app/types/props';
import ButtonIcon from './ButtonIcon';
import DropDown from './DropDown';

import mock from 'app/mock';

const HeaderRight = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const navigation = useNavigation<HomeStackUseNavProps>();

	const handleSelect = useCallback(async (item: DropDownOptionProps) => {
		setOpen(false);
		navigation.navigate(item.title);
	}, []);

	return (
		<View style={{flexDirection: 'row', position: 'relative'}}>
			<ButtonIcon
				iconName='plus-box-outline'
				iconColor='black'
				iconSize={36}
				onPress={() => setOpen((prev) => !prev)}
			/>
			<ButtonIcon
				iconColor='red'
				iconSize={36}
				iconName='exit-to-app'
				onPress={() => dispatch(signOut())}
			/>
			<View style={styles.dropdownView}>
				<DropDown
					options={mock.addNewDropDownList}
					onSelect={handleSelect}
					dropdownStyle={styles.dropdown}
					optionStyle={styles.dropdownOption}
					headerStyle={styles.dropdownHeader}
					open={open}
					onClose={() => setOpen(false)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdownView: {
		flex: 1,
		position: 'relative',
	},
	dropdown: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		bottom: 0,
	},
	dropdownOption: {
		justifyContent: 'center',
	},
	dropdownHeader: {
		padding: 10,
		fontSize: 20,
	},
});

export default React.memo(HeaderRight);
