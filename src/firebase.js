import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCjnopxqA2HpLVOhokgL7-CrfckRIMrlsY",
  authDomain: "chatapp-be4e6.firebaseapp.com",
  databaseURL: "https://chatapp-be4e6.firebaseio.com",
  projectId: "chatapp-be4e6",
  storageBucket: "chatapp-be4e6.appspot.com",
  messagingSenderId: "301046530023",
  appId: "1:301046530023:web:2f93d05d88e921f96b8742",
  measurementId: "G-507Y7GXLSJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
