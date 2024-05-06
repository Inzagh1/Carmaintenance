// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkD669aA0D4UuBqX1lvgXib9ZGPEHoNME",
  authDomain: "carwash-af1d7.firebaseapp.com",
  projectId: "carwash-af1d7",
  storageBucket: "carwash-af1d7.appspot.com",
  messagingSenderId: "850183931371",
  appId: "1:850183931371:web:60b9fba5545fa709ce05ae",
  measurementId: "G-CBVH2B718W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };