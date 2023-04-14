import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpGfEQO6Mla9zg2GQUnBx6xC7NS7RV__k",
    authDomain: "projetoead-befeb.firebaseapp.com",
    projectId: "projetoead-befeb",
    storageBucket: "projetoead-befeb.appspot.com",
    messagingSenderId: "230582305309",
    appId: "1:230582305309:web:358f0507afb93fad26bcf4",
    measurementId: "G-K1Z1PE99GP"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase;