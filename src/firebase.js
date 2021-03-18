import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3rCY8J7c0njJVj5x5Yhizb5gcgAla6-w",
  authDomain: "netflix-build-e58f4.firebaseapp.com",
  projectId: "netflix-build-e58f4",
  storageBucket: "netflix-build-e58f4.appspot.com",
  messagingSenderId: "564415604423",
  appId: "1:564415604423:web:64f3f1974cb5b9f7d2c0e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
