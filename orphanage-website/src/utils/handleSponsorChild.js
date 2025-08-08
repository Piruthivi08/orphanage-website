// src/utils/handleSponsorChild.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebaseConfig";

const handleSponsorChild = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "sponsorChild"), {
      ...formData,
      submittedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding Sponsor Child data: ", error);
    return { success: false, error };
  }
};

export default handleSponsorChild;
