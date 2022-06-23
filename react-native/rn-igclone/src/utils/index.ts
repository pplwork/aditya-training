import {UserInfo} from 'firebase/auth/react-native';
import {User} from 'src/types/redux';
import {storage} from 'src/firebase.config';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

export const getUserObject = (user: UserInfo): User => {
	return {
		name: user.displayName,
		email: user.email,
		phone: user.phoneNumber,
		avatar: user.photoURL,
		username: null,
		uid: user.uid,
		id: user.providerId ?? null,
	};
};

export const uploadFile = async (
	uri: string,
	folder?: string
): Promise<string> => {
	const filename = uri.split('ImagePicker/')[1];
	const filePath = folder ? `${folder}/${filename}` : `files/${filename}`;
	const storageRef = ref(storage, filePath);
	const blob = await (await fetch(uri)).blob();
	await uploadBytes(storageRef, blob);
	return await getDownloadURL(storageRef);
};
