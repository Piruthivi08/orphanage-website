// src/utils/handlePartnerWithUs.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebaseConfig";

const handlePartnerWithUs = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "partnerWithUs"), {
      ...formData,
      submittedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting Partner With Us form: ", error);
    return { success: false, error };
  }
};

export default handlePartnerWithUs;
