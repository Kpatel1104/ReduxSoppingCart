// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6RU7DSSP0Be3kKQd4Z3NzZcsLm7nQzkM",
    authDomain: "cart-d9238.firebaseapp.com",
    projectId: "cart-d9238",
    storageBucket: "cart-d9238.appspot.com",
    messagingSenderId: "422966227690",
    appId: "1:422966227690:web:4946349df93257c77e1d93",
    measurementId: "G-7086T83GKV"
};
const firebaseapp =firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
export {db,auth};
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyC6RU7DSSP0Be3kKQd4Z3NzZcsLm7nQzkM",
//   authDomain: "cart-d9238.firebaseapp.com",
//   projectId: "cart-d9238",
//   storageBucket: "cart-d9238.appspot.com",
//   messagingSenderId: "422966227690",
//   appId: "1:422966227690:web:4946349df93257c77e1d93",
//   measurementId: "G-7086T83GKV"
// };
// const firebaseapp =firebase.initializeApp(firebaseConfig);
// const db = firebaseapp.firestore();
// const auth = firebase.auth();
// export {db,auth};