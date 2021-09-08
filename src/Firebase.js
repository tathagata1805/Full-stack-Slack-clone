// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCQw_DvgRTj04lkn3FK-Mdlor0V53NbTNI",
    authDomain: "slack-clone-dd76e.firebaseapp.com",
    projectId: "slack-clone-dd76e",
    storageBucket: "slack-clone-dd76e.appspot.com",
    messagingSenderId: "269410291026",
    appId: "1:269410291026:web:e7bd9285937f7659df7e8b",
    measurementId: "G-NJBS5YKYW1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;