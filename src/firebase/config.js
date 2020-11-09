import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHXszogMMfr1_y-EtXsRkJGhBKaQ3c6XI",
  authDomain: "foodie-c73c2.firebaseapp.com",
  databaseURL: "https://foodie-c73c2.firebaseio.com",
  projectId: "foodie-c73c2",
  storageBucket: "foodie-c73c2.appspot.com",
  messagingSenderId: "514830941160",
  appId: "1:514830941160:web:b7fb6eb452220ac81b825d",
  measurementId: "G-L52XFL36MV",
};
// const db =
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// save new user
// storing user to firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if (!(await snapShot).exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error created", error);
    }
  }
  return userRef;
};

// Firebase Login
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
