import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA9tD7TlWukqaB3s7JGHCb7sGoLwKz3jlM",
    authDomain: "project0-91637.firebaseapp.com",
    projectId: "project0-91637",
    storageBucket: "project0-91637.appspot.com",
    messagingSenderId: "82881919786",
    appId: "1:82881919786:web:283932db572a6a10ce7c53",
    measurementId: "G-V7MPGW6TL1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;
