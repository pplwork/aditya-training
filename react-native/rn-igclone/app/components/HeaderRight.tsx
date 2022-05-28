import React, { useCallback, useEffect, useState } from 'react';
import {View, Text} from 'react-native';

import {signOut, useDispatch, useSelector} from 'app/redux';

import {DropDownOptionProps} from 'app/types/props'
import ButtonIcon from './ButtonIcon';
import DropDown from './DropDown';

import mock from 'app/mock';

const HeaderRight = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const handleSelect = useCallback((item: DropDownOptionProps) => {
		// TODO: Navigate to other screen or Implement some logic. 
		setOpen(false);
	}, []);

	useEffect(() => {
		/*let id = 'C2QLgnhDaKb7obywLzS1';
		getDocs(query(collection(db, "profiles"), where("uid", "==", user.uid))).then(snaps => {
			snaps.docs.forEach(d => {
				console.log("query snaps:", d.id, d.data());
			})
		})
		getDoc(doc(db, `profiles/${id}`)).then(snapshot => {
			console.log("snapshot id:", snapshot.id)
			console.log("snapshot data:", snapshot.data())
			console.log("snapshot metadata", snapshot.metadata)
			getDocs(collection(db, `profiles/${id}/followers`)).then(snaps => {
				snaps.docs.forEach(snap => {
					console.log("snap id:", snap.id)
					console.log("snap data:", snap.data())
				})
			})
			getDocs(collection(db, `profiles/${id}/posts`)).then(snaps => {
				snaps.docs.forEach(snap => {
					console.log("snap id:", snap.id)
					console.log("snap data:", snap.data())
				})
			})
			getDocs(collection(db, `profiles/${id}/followings`)).then(snaps => {
				snaps.docs.forEach(snap => {
					console.log("snap id:", snap.id)
					console.log("snap data:", snap.data())
				})
			})
		})*/
	}, []);

	return (
		<View style={{flexDirection: 'row', position: 'relative'}}>
			<ButtonIcon
				iconName='plus-box-outline'
				iconColor='black'
				iconSize={36}
				onPress={() => {setOpen(prev => !prev)}}
			/>
			<ButtonIcon
				iconColor='red'
				iconSize={36}
				iconName='exit-to-app'
				onPress={() => dispatch(signOut())}
			/>
			{open && <DropDown options={mock.addNewDropDownList} onSelect={handleSelect} />}
		</View>
	);
};

export default React.memo(HeaderRight);