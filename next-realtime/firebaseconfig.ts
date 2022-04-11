import { initializeApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseOptions:FirebaseOptions = {
  apiKey: "AIzaSyAscCFAN0OoJvVimBbYTg_1rGh37S9FJUk",
  authDomain: "next-realtime.firebaseapp.com",
  databaseURL: "https://next-realtime-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "next-realtime",
  storageBucket: "next-realtime.appspot.com",
  messagingSenderId: "116499356678",
  appId: "1:116499356678:web:7a39caaf50140958f33787",
  measurementId: "G-4Q18WE2S5D"
};

const app:FirebaseApp = initializeApp(firebaseOptions);
const auth:Auth = getAuth(app);
const db:Firestore = getFirestore(app);

export {auth, db};