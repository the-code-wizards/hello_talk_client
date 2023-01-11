// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs htmlFor Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcM8gGbzig1GQ_9UKllQiorSgMxG-iP9Q",
    authDomain: "hello-talk-f5aef.firebaseapp.com",
    projectId: "hello-talk-f5aef",
    storageBucket: "hello-talk-f5aef.appspot.com",
    messagingSenderId: "261547867201",
    appId: "1:261547867201:web:f716906c7d7af1bd6e9ac0",
    measurementId: "G-8GGGSEKJNP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;