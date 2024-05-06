import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBkD669aA0D4UuBqX1lvgXib9ZGPEHoNME",
  authDomain: "carwash-af1d7.firebaseapp.com",
  databaseURL: "https://carwash-af1d7-default-rtdb.firebaseio.com",
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