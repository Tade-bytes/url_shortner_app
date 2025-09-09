// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg37WdUNDGnETvU0P2GypmaG0UkS_buCg",
  authDomain: "authentication-fb833.firebaseapp.com",
  projectId: "authentication-fb833",
  storageBucket: "authentication-fb833.firebasestorage.app",
  messagingSenderId: "628533694213",
  appId: "1:628533694213:web:99eeeca7299f8178fa316c",
  measurementId: "G-X94QD3ZM96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);