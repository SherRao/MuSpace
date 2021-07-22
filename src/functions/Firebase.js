import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "@src/config.json";

firebase.initializeApp(config.firebaseConfig);

export default { firebase };