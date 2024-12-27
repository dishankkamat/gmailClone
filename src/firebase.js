// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeLch0QViZbqFvecSJUihmzb2AO-sT4eI",
  authDomain: "clone-yt-84243.firebaseapp.com",
  projectId: "clone-yt-84243",
  storageBucket: "clone-yt-84243.firebasestorage.app",
  messagingSenderId: "678665546413",
  appId: "1:678665546413:web:75d90449cc8ddecb9b7424",
  measurementId: "G-61MJDHX56L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
