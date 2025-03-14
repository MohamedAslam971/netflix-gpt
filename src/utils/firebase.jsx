// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIImWREkenhABsNtlhXWosMdrEWCaW9G8",
  authDomain: "netflixgpt-c77dd.firebaseapp.com",
  projectId: "netflixgpt-c77dd",
  storageBucket: "netflixgpt-c77dd.firebasestorage.app",
  messagingSenderId: "438857596696",
  appId: "1:438857596696:web:59101352acad0adf5a686d",
  measurementId: "G-40M1ZNHW27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();