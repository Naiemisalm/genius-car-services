// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8a9ZpqVOnY4DmmKbk8FzWldo6HBHzeL8",
  authDomain: "genius-car-services-eb117.firebaseapp.com",
  projectId: "genius-car-services-eb117",
  storageBucket: "genius-car-services-eb117.appspot.com",
  messagingSenderId: "916206952831",
  appId: "1:916206952831:web:59ce3c58ce0041d8c23a4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
export default auth;