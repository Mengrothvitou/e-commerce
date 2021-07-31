
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEBbEmiYw30qEEZ1ttRfEl08dyX3OUl34",
    authDomain: "next-store-bc16b.firebaseapp.com",
    projectId: "next-store-bc16b",
    storageBucket: "next-store-bc16b.appspot.com",
    messagingSenderId: "838381572196",
    appId: "1:838381572196:web:2623fae3b8b87e2f88cf71",
    measurementId: "G-M2JHS05SRG"
  };
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const firestore = firebase.firestore();
const fireStorage = firebase.storage();

export {
  firestore,
  fireStorage
}

