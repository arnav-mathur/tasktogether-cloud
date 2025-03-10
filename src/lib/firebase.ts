
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1n4KZe4SHtdp8p82Y1FskRo3V31sHCjY",
  authDomain: "focus-flow-app.firebaseapp.com",
  projectId: "focus-flow-app",
  storageBucket: "focus-flow-app.appspot.com",
  messagingSenderId: "271488641231",
  appId: "1:271488641231:web:84fd3b43f31c9a8644a3d5",
  measurementId: "G-Z5MVJX7RD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
