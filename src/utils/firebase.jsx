// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGrTlzJ-6Y_ota_7sHLNtAO2kdVcmAk0o",
  authDomain: "netflixgpt-355be.firebaseapp.com",
  projectId: "netflixgpt-355be",
  storageBucket: "netflixgpt-355be.firebasestorage.app",
  messagingSenderId: "417282492411",
  appId: "1:417282492411:web:85aa9243de41392a5d6d5e",
  measurementId: "G-VCR23K0C99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
