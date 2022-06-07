import React, {useCallback, useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {signOut, useDispatch} from 'app/redux';

import type {DropDownOptionProps, HomeStackUseNavProps} from 'app/types/props';
import ButtonIcon from './ButtonIcon';
import DropDown from './DropDown';

import mock from 'app/mock';
import { HomeStackParamList } from 'app/types/navigations';

const HeaderRight = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const navigation = useNavigation<HomeStackUseNavProps>();

	const handleSelect = useCallback((item: DropDownOptionProps) => {
		setOpen(false);
		const option = `New${item.title}` as keyof HomeStackParamList
		navigation.navigate(option);
	}, []);

	return (
		<SafeAreaView style={styles.header}>
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
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
	},
	dropdownView: {
		position: 'relative',
	},
	dropdown: {
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
