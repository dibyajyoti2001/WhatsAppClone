import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdRDKMoEMGE3dA2mC4kp-bUJZ9vK6u6M8",
  authDomain: "whatsapp-clone-623de.firebaseapp.com",
  projectId: "whatsapp-clone-623de",
  storageBucket: "whatsapp-clone-623de.appspot.com",
  messagingSenderId: "99709032737",
  appId: "1:99709032737:web:80c8746ef9bc8de92b8660",
  measurementId: "G-GTVJ26T6RG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
