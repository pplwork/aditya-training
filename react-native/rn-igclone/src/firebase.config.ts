import {initializeApp, FirebaseApp} from 'firebase/app';
import {Auth, initializeAuth} from 'firebase/auth';
import {getReactNativePersistence} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Firestore, getFirestore} from 'firebase/firestore';
import {FirebaseStorage, getStorage} from 'firebase/storage';
import {createFirestoreInstance} from 'redux-firestore';
import {store} from 'src/redux/store';

const firebaseConfig = {
	appId: '1:586118638960:web:793f77630adf5c8ea5b3b5',
	apiKey: 'AIzaSyAg60wE4hOm21yT066rC7fh___o1Lzj6lI',
	authDomain: 'igclone-a2320.firebaseapp.com',
	projectId: 'igclone-a2320',
	storageBucket: 'igclone-a2320.appspot.com',
	messagingSenderId: '586118638960',
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

const rrfProps = {
	config: {
		userProfile: 'users',
		useFirestoreForProfile: true,
	},
	firebase: app,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

export {auth, db, app, storage, rrfProps};
