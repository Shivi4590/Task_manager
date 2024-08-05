/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-31acb.firebaseapp.com",
  projectId: "taskmanager-31acb",
  storageBucket: "taskmanager-31acb.appspot.com",
  messagingSenderId: "784198221618",
  appId: "1:784198221618:web:85af6672f15864e274a12b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);