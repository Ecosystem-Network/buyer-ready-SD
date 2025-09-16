// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA04ufjJtcilPZ15p7cn7_pBNEnhThMMcc",
  authDomain: "buyer-ready-sd.firebaseapp.com",
  projectId: "buyer-ready-sd",
  storageBucket: "buyer-ready-sd.firebasestorage.app",
  messagingSenderId: "275919724588",
  appId: "1:275919724588:web:0c49bfa497d3722f4fb189",
  measurementId: "G-HHPVVD5R2G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence enabled");
  })
  .catch((error) => {
    console.error("Error enabling session persistence: ", error);
  });

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {app, analytics, auth, db};