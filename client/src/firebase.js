// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-210696.firebaseapp.com",
  projectId: "mern-blog-210696",
  storageBucket: "mern-blog-210696.appspot.com",
  messagingSenderId: "627951880324",
  appId: "1:627951880324:web:f699f600e9150101cc1ad1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);