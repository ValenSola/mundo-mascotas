// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD02FSo93wkGw2loaEp_tdjQrkDVXNOBhM",
  authDomain: "mundomascotas-587ca.firebaseapp.com",
  projectId: "mundomascotas-587ca",
  storageBucket: "mundomascotas-587ca.appspot.com",
  messagingSenderId: "55654807682",
  appId: "1:55654807682:web:aaab10672e3376632a5c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);