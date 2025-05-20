import { db, serverTimestamp } from "./firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

export const sendMessage = async ({ name, email, message }) => {
  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  try {
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      message,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error("Firestore error:", error);
    throw new Error("Failed to store message in Firestore.");
  }
};
