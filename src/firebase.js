import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO3aGw4hsggoZFDu5aqMEWHkFWzSuJ7LU",
  authDomain: "forma-ecommerce-a7431.firebaseapp.com",
  projectId: "forma-ecommerce-a7431",
  storageBucket: "forma-ecommerce-a7431.firebasestorage.app",
  messagingSenderId: "123780834934",
  appId: "1:123780834934:web:1b917e1cdb22588bc6e157",
  measurementId: "G-YMDL841CKB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
