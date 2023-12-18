import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDoorfTzWSAxJicSzixruWhy4wSU39DchM",
  authDomain: "linkedin-clone-e75f4.firebaseapp.com",
  projectId: "linkedin-clone-e75f4",
  storageBucket: "linkedin-clone-e75f4.appspot.com",
  messagingSenderId: "397562410045",
  appId: "1:397562410045:web:47219f59e91530bbace654",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };

