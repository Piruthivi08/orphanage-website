// src/utils/handleAdoptRoom.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebaseConfig";

const handleAdoptRoom = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "adoptRoom"), {
      ...formData,
      submittedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting Adopt Room: ", error);
    return { success: false, error };
  }
};

export default handleAdoptRoom;
