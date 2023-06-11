// firebase.config.ts
import * as admin from 'firebase-admin';

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(process.env.)
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  apiKey: 'AIzaSyC5a7Eda9hCOXIJQE1Ezo1QeXP867ojGVY',

  authDomain: 'notes-3ea58.firebaseapp.com',
  projectId: 'notes-3ea58',
  storageBucket: 'notes-3ea58.appspot.com',
  messagingSenderId: '931136291292',
  appId: '1:931136291292:web:c4e6db6ebbdccc84f4cf19',
};
console.log(firebaseConfig);
// Initialize Firebase for server side rendering(SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
