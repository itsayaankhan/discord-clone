import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDA9zeexq7MMcOWxieN0LHjWaIZ33l7IX8",
    authDomain: "discord-clone-598b7.firebaseapp.com",
    projectId: "discord-clone-598b7",
    storageBucket: "discord-clone-598b7.appspot.com",
    messagingSenderId: "75895429990",
    appId: "1:75895429990:web:18f4363c5274d8eedc86a7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;