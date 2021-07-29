import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "@src/config.json";

firebase.initializeApp(config.firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const AuthContext = React.createContext(null);

/**
 * 
 * Takes in the input from the form to login with
 * an email and password.
 * 
 */
function loginWithEmail(event) {
    event.preventDefault();

    const email = event.target.elements[0].value;
    const pass = event.target.elements[1].value;
    auth.signInWithEmailAndPassword(email, pass)
        .catch((error) => {
            alert(error.message);

        });
}

/**
 * 
 * Bring up the Google SSO to login with a Google account.
 * 
 */
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

}

/**
 *
 * Takes in the input from the form to register with
 * an email and password.
 *
 */
async function registerWithEmail(event) {
    event.preventDefault();

    const email = event.target.elements[0].value;
    const confirmEmail = event.target.elements[1].value;
    const firstName = event.target.elements[2].value;
    const lastName = event.target.elements[3].value;
    const username = event.target.elements[4].value;
    const pass = event.target.elements[5].value;
    const dob = event.target.elements[6].value;

    try {
        const userCredentials = await auth.createUserWithEmailAndPassword(email, pass);
        await storeNewUserData(userCredentials.user.uid, email, firstName, lastName, username, dob);
        auth.currentUser.sendEmailVerification();

    } catch (err) {
        alert(err.message);

    }
}


async function storeNewUserData(id, email, firstName, lastName, username, dob) {
    const userData = {
        "email": email,
        "firstName": firstName,
        "lastName": lastName,
        "username": username,
        "dob": dob,
        "profile_picture": "https://firebasestorage.googleapis.com/v0/b/cp-317.appspot.com/o/default_profile.jpg?alt=media&token=4ed26d80-388b-4814-95b3-01740138285a"
    };

    await db.collection("users")
        .doc(id).set(userData);
}

export default { firebase, auth, db, loginWithEmail, loginWithGoogle, registerWithEmail, AuthContext };