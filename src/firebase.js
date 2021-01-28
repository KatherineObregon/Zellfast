import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCr18cQnhC0yqxd0d-Twb_ZOs7GVfx5hKc",
    authDomain: "zellfast.firebaseapp.com",
    projectId: "zellfast",
    storageBucket: "zellfast.appspot.com",
    messagingSenderId: "514524300217",
    appId: "1:514524300217:web:40f9069b07c408b7d4ac68",
    measurementId: "G-X3XB86WRZ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };