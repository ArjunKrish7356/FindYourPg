// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDwVeDAL9OeMiTqyFRcD-UGp-6VsWF9as",
  authDomain: "findyourpg-a7dea.firebaseapp.com",
  projectId: "findyourpg-a7dea",
  storageBucket: "findyourpg-a7dea.appspot.com",
  messagingSenderId: "167216026935",
  appId: "1:167216026935:web:3858e1942c09629abe76b2",
  measurementId: "G-6TNHRVDG28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();