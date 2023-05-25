import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnqDzDuzBC9TAEEaBEwE5Uwg2tPwLr_7s",
  authDomain: "signalclone-7a189.firebaseapp.com",
  projectId: "signalclone-7a189",
  storageBucket: "signalclone-7a189.appspot.com",
  messagingSenderId: "151722435017",
  appId: "1:151722435017:web:e722c6d04103e4612e8818"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
