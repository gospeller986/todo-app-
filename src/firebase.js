// const firebaseConfig = {
 
//   };

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCR4BWsfie7GwgjOie8rxthCSYdWb5wHlo",
    authDomain: "todo-3090c.firebaseapp.com",
    projectId: "todo-3090c",
    storageBucket: "todo-3090c.appspot.com",
    messagingSenderId: "799548891695",
    appId: "1:799548891695:web:1234b9c747494f7aecdcda",
    measurementId: "G-7TK45BZPZF"

  });

  const db = firebaseApp.firestore();

  export default db ;