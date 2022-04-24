// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyDgEk5_Fwt40jplHx7x-JU-KHUCVDWLdOw",
  authDomain: "genius-car-service-9fdab.firebaseapp.com",
  projectId: "genius-car-service-9fdab",
  storageBucket: "genius-car-service-9fdab.appspot.com",
  messagingSenderId: "513128288201",
  appId: "1:513128288201:web:cfae9ca66edef63ccfe218",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
