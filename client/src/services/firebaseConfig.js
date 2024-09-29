// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Typically, the sensitive data in this file would be stored in a .env file.
// We would reference these environment variables like:
// apiKey: process.env.REACT_APP_FIREBASE_API_KEY, ...
// For the sake of simplicity, Yuning's sharing her Firebase credentials here.
const firebaseConfig = {
  apiKey: "AIzaSyCfhEMdk_cY8EumTHxwq_T3KK0IWJNR-2o",
  authDomain: "green-nudge.firebaseapp.com",
  projectId: "green-nudge",
  storageBucket: "green-nudge.appspot.com",
  messagingSenderId: "860134265683",
  appId: "1:860134265683:web:dce7c0bdd22467f54047a6",
  measurementId: "G-LEX9CHTJ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };