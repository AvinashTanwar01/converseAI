
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaGErOPlJx12OgGFAzWOQ5fpnMQ_03de4",
  authDomain: "converseai-afe42.firebaseapp.com",
  projectId: "converseai-afe42",
  storageBucket: "converseai-afe42.firebasestorage.app",
  messagingSenderId: "726122315065",
  appId: "1:726122315065:web:12c4e76cd38a02fc26fce8",
  measurementId: "G-Z39G7HM56B"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):  getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);