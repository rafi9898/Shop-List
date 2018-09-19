import firestore from 'firebase/firestore'
import firebase from 'firebase/app';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDrrzHcOLzNUqPO4P4lc0IkrlnFjVhHBJs",
    authDomain: "my-shop-list-app.firebaseapp.com",
    databaseURL: "https://my-shop-list-app.firebaseio.com",
    projectId: "my-shop-list-app",
    storageBucket: "my-shop-list-app.appspot.com",
    messagingSenderId: "572269306258"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  //export firestore database
  export default firebaseApp.firestore()
