// src/utils/handleTestimonial.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "./firebaseConfig";

const handleTestimonial = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "testimonials"), {
      ...formData,
      submittedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting testimonial: ", error);
    return { success: false, error };
  }
};

export default handleTestimonial;
