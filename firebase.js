import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDKdbAZf2ew8ab44f6Qk4IIampagr7M5fA",
    authDomain: "redsocial-513e8.firebaseapp.com",
    projectId: "redsocial-513e8",
    storageBucket: "redsocial-513e8.appspot.com",
    messagingSenderId: "22699691978",
    appId: "1:22699691978:web:cfdb5a912c885822f90933"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);