// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp0uwMupV3_iCIK-52Ar49xOxVd4xYhn0",
  authDomain: "facebook-clone-25be3.firebaseapp.com",
  projectId: "facebook-clone-25be3",
  storageBucket: "facebook-clone-25be3.appspot.com",
  messagingSenderId: "1086159927986",
  appId: "1:1086159927986:web:475a28a36add6559aaa7ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {db, auth}