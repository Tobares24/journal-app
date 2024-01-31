// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX8ZAMxFJwwtxQqSdZyjjOkLgfpcAzEAk",
    authDomain: "react-cursos-1f1d6.firebaseapp.com",
    projectId: "react-cursos-1f1d6",
    storageBucket: "react-cursos-1f1d6.appspot.com",
    messagingSenderId: "479478673818",
    appId: "1:479478673818:web:16c885fa0dc5e45ccd4a23"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);