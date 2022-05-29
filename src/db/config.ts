import firebase from "firebase/app";
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export interface toolDb {
  CallingName: string,
  ID: Number, // needs to be removed in favor of id
  IDClass: "A", // needs to be enumed
  Size: string, // size
  SubTools: string, // This should be an array of referances
  id: string,  // This should be the actual id
}

const firebaseConfig = {
  apiKey: "AIzaSyB3Kr3Upe1sZaDJWCnWfSUqp5Wnm_2R--g",
  authDomain: "tools-9c237.firebaseapp.com",
  projectId: "tools-9c237",
  storageBucket: "tools-9c237.appspot.com",
  messagingSenderId: "687795221917",
  appId: "1:687795221917:web:afe7641194bc7409dc6b74",
  measurementId: "G-L9DE893MK2"
};

// db init
firebase.initializeApp(firebaseConfig)


// store init
const db = firebase.firestore()

export { db }