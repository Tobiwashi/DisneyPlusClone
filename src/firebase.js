import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBycZUK4v0TMURMvj08K-6ToWtcLzntT-8",
    authDomain: "disneyplus-clone-b58d5.firebaseapp.com",
    projectId: "disneyplus-clone-b58d5",
    storageBucket: "disneyplus-clone-b58d5.appspot.com",
    messagingSenderId: "509678660042",
    appId: "1:509678660042:web:d59050844b870b674f8733",
    measurementId: "G-F66EJ09XQL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;