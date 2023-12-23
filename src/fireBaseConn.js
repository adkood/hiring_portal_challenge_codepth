import { initializeApp } from 'firebase/app';

import  { 
    getFirestore
} from  'firebase/firestore';

import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAM9mMl-a6iFSBNKNbb7cfdXWrNXJospbQ",
    authDomain: "codepth-1648b.firebaseapp.com",
    projectId: "codepth-1648b",
    storageBucket: "codepth-1648b.appspot.com",
    messagingSenderId: "543225476780",
    appId: "1:543225476780:web:35c110a8e394e4936d9109"
};

// firebase app
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
