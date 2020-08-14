import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5hTRq6zdjvEOK8YrUQTY12tYzfcEiqmk",
    authDomain: "tinder-clone-e1320.firebaseapp.com",
    databaseURL: "https://tinder-clone-e1320.firebaseio.com",
    projectId: "tinder-clone-e1320",
    storageBucket: "tinder-clone-e1320.appspot.com",
    messagingSenderId: "244903552537",
    appId: "1:244903552537:web:ad8c18528a405a137c2c88",
    measurementId: "G-FER0X32EY5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore()

  export default database