// src/firebaseconfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
  onAuthStateChanged,   // <-- import here
  signOut 
} from "firebase/auth";

import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiS8lUnumbhX6-0vqjiiI8zY4zC9nFBsU",
  authDomain: "propello-ai.firebaseapp.com",
  projectId: "propello-ai",
  storageBucket: "propello-ai.firebasestorage.app",
  messagingSenderId: "1062920522162",
  appId: "1:1062920522162:web:7b7935ead257e42aef7cab",
  measurementId: "G-X02TPF1T8T"
};

// Initialize Firebase app or use existing one
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signOut,
  serverTimestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
  onAuthStateChanged // <-- ADD THIS LINE
};