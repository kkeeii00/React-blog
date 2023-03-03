import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG-QBsXBOV4QE2VB6GDxM78kwQwEjSWTc",
  authDomain: "blog-a53f8.firebaseapp.com",
  projectId: "blog-a53f8",
  storageBucket: "blog-a53f8.appspot.com",
  messagingSenderId: "886264881035",
  appId: "1:886264881035:web:0e6ece61ed6b9c3d82998e",
  measurementId: "G-E2BQQ3SM24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db}