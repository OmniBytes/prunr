import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCtf40CyXhwfkGlSAU17QuH4SYASxhXJEc",
  authDomain: "funkstyr-3f3c2.firebaseapp.com",
  databaseURL: "https://funkstyr-3f3c2.firebaseio.com",
  projectId: "funkstyr-3f3c2",
  storageBucket: "funkstyr-3f3c2.appspot.com",
  messagingSenderId: "528657409518"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});

export const interest = firestore.collection("interst");

export default firestore;
