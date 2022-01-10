import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCm5WDYUG6xTZY-WV7U8TiSAQ_3rH1hXUE",
  authDomain: "e-lib-7b525.firebaseapp.com",
  projectId: "e-lib-7b525",
  storageBucket: "e-lib-7b525.appspot.com",
  messagingSenderId: "481731364753",
  appId: "1:481731364753:web:2dcd07fe74f3975af57c30"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
