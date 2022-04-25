import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC6mvzQZYUGEHVT7l5iPDeG7qduGcEMbRg",
    authDomain: "ropa-app-bb1da.firebaseapp.com",
    projectId: "ropa-app-bb1da",
    storageBucket: "ropa-app-bb1da.appspot.com",
    messagingSenderId: "391805906826",
    appId: "1:391805906826:web:826721285477d53ef1e273"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    facebook,
    db
}
