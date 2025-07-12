// src/firebaseAuth.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiS8lUnumbhX6-0vqjiiI8zY4zC9nFBsU",
  authDomain: "propello-ai.firebaseapp.com",
  projectId: "propello-ai",
  storageBucket: "propello-ai.appspot.com",
  messagingSenderId: "1062920522162",
  appId: "1:1062920522162:web:7b7935ead257e42aef7cab",
  measurementId: "G-X02TPF1T8T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export { signInWithGoogle, auth };
