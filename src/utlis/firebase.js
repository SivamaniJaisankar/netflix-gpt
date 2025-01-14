// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUARsHGlo5WzDKqC0RkBuhH8jk87NxUk",
  authDomain: "netflixgpt-72a5b.firebaseapp.com",
  projectId: "netflixgpt-72a5b",
  storageBucket: "netflixgpt-72a5b.firebasestorage.app",
  messagingSenderId: "55733777174",
  appId: "1:55733777174:web:088aa37147f96751675637",
  measurementId: "G-C1G3X0K48Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
