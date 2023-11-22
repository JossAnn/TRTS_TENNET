import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADv2NeKQDBlVHVtCEPVs3ssSM1mSuzZE4",
    authDomain: "trts-ede2f.firebaseapp.com",
    projectId: "trts-ede2f",
    storageBucket: "trts-ede2f.appspot.com",
    messagingSenderId: "767084999917",
    appId: "1:767084999917:web:fffea1afb76f210f3788e4"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();