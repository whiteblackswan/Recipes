import firebase from "firebase/app";
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDHkUQrCHO3ZTe2vVzk2vC-uYuva969WMg",
    authDomain: "delicious-recipes-site.firebaseapp.com",
    projectId: "delicious-recipes-site",
    storageBucket: "delicious-recipes-site.appspot.com",
    messagingSenderId: "864021853105",
    appId: "1:864021853105:web:fb32e9fd61a93f1aca4390"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
