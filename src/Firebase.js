import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluks0iGGsYH499S0OTmQpn0ck2HjRv9k",
  authDomain: "ad-sense-b565a.firebaseapp.com",
  projectId: "ad-sense-b565a",
  storageBucket: "ad-sense-b565a.appspot.com",
  messagingSenderId: "17230758922",
  appId: "1:17230758922:web:10cb3a8cf7e2091c43cbf3"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

