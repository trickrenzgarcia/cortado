// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "cortado-4c286.firebaseapp.com",
  projectId: "cortado-4c286",
  storageBucket: "cortado-4c286.appspot.com",
  messagingSenderId: "188205115629",
  appId: "1:188205115629:web:918670d0f4d067f94844e4",
  measurementId: "G-GQ1298D301"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "menu");

const storage = getStorage();

export { db, storage };