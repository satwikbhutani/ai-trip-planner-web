// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCILQbkFat49PGqcwqi2-eZ-9rQUEggwzc",
  authDomain: "ai-travel-planner-71df0.firebaseapp.com",
  projectId: "ai-travel-planner-71df0",
  storageBucket: "ai-travel-planner-71df0.firebasestorage.app",
  messagingSenderId: "360130017248",
  appId: "1:360130017248:web:3d7783e3d6330a6f399d85",
  measurementId: "G-6E8GJZEWFD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);