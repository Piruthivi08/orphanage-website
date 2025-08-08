// utils/submitFormData.js

import axios from "axios";

const FIREBASE_URL = "https://your-firebase-url.firebaseio.com/formSubmissions";

const submitFormData = async (formName, data) => {
  try {
    const response = await axios.post(`${FIREBASE_URL}/${formName}.json`, data);
    return { success: true, response };
  } catch (error) {
    console.error("Submission Error:", error);
    return { success: false, error };
  }
};

export default submitFormData;
