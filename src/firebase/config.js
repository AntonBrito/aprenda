import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyByuQAFq3wQZGZ6lIizZ2N9mH9b6d5nNkc",
    authDomain: "aprenda-3471a.firebaseapp.com",
    databaseURL: "https://aprenda-3471a.firebaseio.com",
    projectId: "aprenda-3471a",
    storageBucket: "aprenda-3471a.appspot.com",
    messagingSenderId: "791101623839",
    appId: "1:791101623839:web:e65b6b4f7a598e4f2f4f2a",
    measurementId: "G-3LBBZ32HE3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage(); 
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };