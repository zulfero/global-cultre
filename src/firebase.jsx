// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv-Tn7d1M54GMkpBHAM7mMPRKPxUEUUIo",
  authDomain: "globalculture-8ac77.firebaseapp.com",
  projectId: "globalculture-8ac77",
  storageBucket: "globalculture-8ac77.appspot.com",
  messagingSenderId: "408852389078",
  appId: "1:408852389078:web:b07491a22ad7fad424bd77",
  measurementId: "G-2GNRWVTK9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);