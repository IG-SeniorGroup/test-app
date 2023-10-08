// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvxulm_EAdMCKH51BYjgwP9WDoCYIVRyA",
  authDomain: "fall-2023-senior-project.firebaseapp.com",
  projectId: "fall-2023-senior-project",
  storageBucket: "fall-2023-senior-project.appspot.com",
  messagingSenderId: "329470444938",
  appId: "1:329470444938:web:b2d5f3cffc2f3e2880f473",
  measurementId: "G-2BKPRVYVCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);