// src/utils/formUtils.js
export const sendContactForm = async (data) => {
  try {
    // You can later replace this with an actual API call
    console.log("Simulated send:", data);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
