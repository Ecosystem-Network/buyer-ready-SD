// firebaseConfig.js
import { initializeApp } from "firebase/app";

import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyA90Sk8jezuulf4zfBmvtjry1-SRrXdqt4",
    authDomain: "offer-ready-8f77d.firebaseapp.com",
    projectId: "offer-ready-8f77d",
    storageBucket: "offer-ready-8f77d.appspot.com",
    messagingSenderId: "828098964005",
    appId: "1:828098964005:web:bd5aae3a69acfa6861adcc",
    measurementId: "G-LG3RT1MWBC"
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