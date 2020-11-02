import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDTWcaZ5SH-pbMGpRmBE_VBX7InC1zemxY",
    authDomain: "d-facebook-clone.firebaseapp.com",
    databaseURL: "https://d-facebook-clone.firebaseio.com",
    projectId: "d-facebook-clone",
    storageBucket: "d-facebook-clone.appspot.com",
    messagingSenderId: "750774452341",
    appId: "1:750774452341:web:4471040a9987508fe2b83c",
    measurementId: "G-9ZTFKT7PWB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
