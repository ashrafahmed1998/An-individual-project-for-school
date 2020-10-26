import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

  const firebaseConfig = {
  apiKey: "AIzaSyDHXszogMMfr1_y-EtXsRkJGhBKaQ3c6XI",
  authDomain: "foodie-c73c2.firebaseapp.com",
  databaseURL: "https://foodie-c73c2.firebaseio.com",
  projectId: "foodie-c73c2",
  storageBucket: "foodie-c73c2.appspot.com",
  messagingSenderId: "514830941160",
  appId: "1:514830941160:web:b7fb6eb452220ac81b825d",
  measurementId: "G-L52XFL36MV"
};
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

//   Google sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });
  export const googleSignin =()=>auth.signInWithPopup(provider)

  export default firebase