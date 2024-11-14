// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAcoLO7n8-bBHdFI58ABz42omKofrz70g",
  authDomain: "abbos-portfolio.firebaseapp.com",
  projectId: "abbos-portfolio",
  storageBucket: "abbos-portfolio.firebasestorage.app",
  messagingSenderId: "381917145776",
  appId: "1:381917145776:web:53aa9981daa2cb0fb3a975",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
