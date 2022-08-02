// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC413y-Om6X0DALyF_HWBzjcdx4NWV-5wc",
    authDomain: "login-payment-page.firebaseapp.com",
    projectId: "login-payment-page",
    storageBucket: "login-payment-page.appspot.com",
    messagingSenderId: "564436382961",
    appId: "1:564436382961:web:99a169737b6a1b3818a550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth