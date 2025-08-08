// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXS_VcATkyXdM1tW6ERnv9YkiNoTmUnfE",
  authDomain: "orphanageapp-1b17a.firebaseapp.com",
  projectId: "orphanageapp-1b17a",
  storageBucket: "orphanageapp-1b17a.firebasestorage.app",
  messagingSenderId: "248334558911",
  appId: "1:248334558911:web:fdad30aca47aee42ab880a",
  measurementId: "G-6SSF7CLHKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);