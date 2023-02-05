// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   // appId: process.env.REACT_APP_APP_ID,
//   apiKey: "AIzaSyACnOnmlMCD5MAUdamiQKl9tM-A5xGXaOg",
//   authDomain: "amazoz.firebaseapp.com",
//   projectId: "amazoz",
//   storageBucket: "amazoz.appspot.com",
//   messagingSenderId: "659960407908",
//   appId: "1:659960407908:web:5a2bb0b9fb661761533c71",
// };
const firebaseConfig = {
  apiKey: "AIzaSyD84DLT7fyJB7sbvZgFlsZPjUw6DHbiSsI",
  authDomain: "amazoz-d7b12.firebaseapp.com",
  projectId: "amazoz-d7b12",
  storageBucket: "amazoz-d7b12.appspot.com",
  messagingSenderId: "124550525225",
  appId: "1:124550525225:web:b82e83bc0e9324dc444738",
  measurementId: "G-ZSQBL3K52F",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const cartdb = getFirestore(app);
