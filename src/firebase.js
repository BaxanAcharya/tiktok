import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA90LSY9XKETe-7lKOY6Q_34vO5GiZegpo",
  authDomain: "toktok-clone-d3449.firebaseapp.com",
  databaseURL: "https://toktok-clone-d3449.firebaseio.com",
  projectId: "toktok-clone-d3449",
  storageBucket: "toktok-clone-d3449.appspot.com",
  messagingSenderId: "69871698788",
  appId: "1:69871698788:web:13ec982c65f3af0e167071",
  measurementId: "G-34J8YMKEPT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
