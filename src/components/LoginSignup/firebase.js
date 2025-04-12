// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider }  from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8Z2FBeoRMWDpxsfKvwBJQIq8TKvZ804",
  authDomain: "nstacathon-project.firebaseapp.com",
  projectId: "nstacathon-project",
  storageBucket: "nstacathon-project.firebasestorage.app",
  messagingSenderId: "589949022291",
  appId: "1:589949022291:web:19d846adaf039e64f116a6",
  measurementId: "G-C7FP7W3164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleProvider = new GoogleAuthProvider();


