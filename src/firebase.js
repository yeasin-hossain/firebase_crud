
import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCDKUevF5SMzJtk-3u4nmiQ--3hUTWWcyU",
    authDomain: "react-crud-4655a.firebaseapp.com",
    databaseURL: "https://react-crud-4655a-default-rtdb.firebaseio.com",
    projectId: "react-crud-4655a",
    storageBucket: "react-crud-4655a.appspot.com",
    messagingSenderId: "148525989093",
    appId: "1:148525989093:web:bebbbc936d099d3e4ea80c"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();