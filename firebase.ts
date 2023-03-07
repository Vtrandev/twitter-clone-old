// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPTMjPDb2ZUgDVxu9CbVHxuiX0tF0Bb4U",
  authDomain: "twitter-clone-29b71.firebaseapp.com",
  projectId: "twitter-clone-29b71",
  storageBucket: "twitter-clone-29b71.appspot.com",
  messagingSenderId: "731857862852",
  appId: "1:731857862852:web:04cf5037d562c351478991"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };