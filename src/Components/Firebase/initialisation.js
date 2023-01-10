// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  setDoc,
  doc,
  firestore,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD924CiumtVku9wpT48DvHB_ghXrweOH4M",
  authDomain: "coffee-shop-b6e1a.firebaseapp.com",
  projectId: "coffee-shop-b6e1a",
  storageBucket: "coffee-shop-b6e1a.appspot.com",
  messagingSenderId: "1059740582045",
  appId: "1:1059740582045:web:2d46dfab5953e345e7d474",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
};

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     // console.log(user.displayName);
//   }
// });

// export const SignInWithGoogle = () => {
//   return db
//     .auth()
//     .signInWithPopup(provider)
//     .then(async function createUserDb(userCredentials) {
//       await setDoc(doc(db, "users", userCredentials.user.uid), { myList: [] });
//     });
// };
