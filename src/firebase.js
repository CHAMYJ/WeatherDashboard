// import {initializeApp, auth} from "firebase/app";
//import firebase from "firebase/compat/app";
//import "firebase/compat/auth";
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Please put you own config from firebase
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
