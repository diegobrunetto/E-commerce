import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAQuy8uoQVhpiVWMu9RzgbVPO4M2abbmvs",
  authDomain: "e-commerce-9bf47.firebaseapp.com",
  databaseURL: "https://e-commerce-9bf47.firebaseio.com",
  projectId: "e-commerce-9bf47",
  storageBucket: "e-commerce-9bf47.appspot.com",
  messagingSenderId: "703963538793",
  appId: "1:703963538793:web:d16db847e2273b8f2fc9f8",
  measurementId: "G-X7Q7LF37YG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 