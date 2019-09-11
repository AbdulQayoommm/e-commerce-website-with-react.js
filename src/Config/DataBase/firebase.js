import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCEWr3ZCthzN0BKQc2mfwhFL0ma46a9Fxk",
    authDomain: "e-commerce-with-react.firebaseapp.com",
    databaseURL: "https://e-commerce-with-react.firebaseio.com",
    projectId: "e-commerce-with-react",
    storageBucket: "e-commerce-with-react.appspot.com",
    messagingSenderId: "792414704144",
    appId: "1:792414704144:web:6e1ad19ec03de02a09f095"
  };



 export default firebase.initializeApp(firebaseConfig)