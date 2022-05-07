// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {  initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth';
//import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9ZX6FAppKK9CEIfBAbduXku3JzmuUy6o",
  authDomain: "netflix-project-5c785.firebaseapp.com",
  projectId: "netflix-project-5c785",
  storageBucket: "netflix-project-5c785.appspot.com",
  messagingSenderId: "1025280493309",
  appId: "1:1025280493309:web:d096f8d04c8acd32516094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app)

export const auth = getAuth(app)
 

