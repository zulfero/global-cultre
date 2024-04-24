// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJEyRFxd3kPq8Cu75WI9zvMv8BLmJmOE",
  authDomain: "culture-clan.firebaseapp.com",
  projectId: "culture-clan",
  storageBucket: "culture-clan.appspot.com",
  messagingSenderId: "334362026816",
  appId: "1:334362026816:web:6fcc04d3c4cb69cbf050a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)