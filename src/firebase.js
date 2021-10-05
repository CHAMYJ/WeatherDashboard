// import {initializeApp, auth} from "firebase/app";
//import firebase from "firebase/compat/app";
//import "firebase/compat/auth";
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWMF1dpYnA3bZRl5y2btgwSygMWyu-BY0",
  authDomain: "weather-dashboard-105b6.firebaseapp.com",
  projectId: "weather-dashboard-105b6",
  storageBucket: "weather-dashboard-105b6.appspot.com",
  messagingSenderId: "549717037516",
  appId: "1:549717037516:web:ffa649ccd4ff801a680d69",
  measurementId: "G-3RBB6081ZJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
