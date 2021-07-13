import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "@src/config.json";

firebase.initializeApp(config.firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export default { firebase, auth, firestore };