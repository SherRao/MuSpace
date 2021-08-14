import config from "@src/config.json";
import validator from "validator";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(config.firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

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
async function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((userCredentials) => {
        const docRef = db.collection("users").doc(userCredentials.user.uid);
        docRef.get().then(doc => {
            if (!doc.exists)
                storeNewUserData(userCredentials.user.uid, userCredentials.user.email, null, null, userCredentials.user.displayName, null, userCredentials.user.photoURL);

        });
    });
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
    const legalDate = new Date();
    legalDate.setFullYear(legalDate.getFullYear() - 18);

    try {
        // validate input first
        if (!validator.isEmail(email) || validator.isEmpty(email) || validator.isEmpty(confirmEmail))
            throw Error("Please enter a valid email address.");
        if (!(email === confirmEmail))
            throw Error("Emails do not match.");
        if (validator.isEmpty(firstName) || validator.isEmpty(lastName))
            throw Error("Please enter your full name.");
        if (validator.isEmpty(username))
            throw Error("Please enter a username.");
        if (username.length < 5 || username.length > 32)
            throw Error("Username must be between 5 and 32 characters in length.");
        if (validator.isEmpty(pass))
            throw Error("Please enter a password.");
        if (pass.length < 6)
            throw Error("Password must be at least 6 characters long.");
        if (!validator.isDate(new Date(dob)))
            throw Error("Please select a date of birth.");
        if (validator.isAfter(dob, legalDate.toString()))
            throw Error("You must be at least 18 years of age to create an account.");

        // if error has not been thrown, then create the account
        const userCredentials = await auth.createUserWithEmailAndPassword(email, pass);
        await storeNewUserData(userCredentials.user.uid, email, firstName, lastName, username, dob);
        auth.currentUser.sendEmailVerification();

    } catch (err) {
        alert(err.message);
    }
}

/**
 *
 * Function to store new user data on a new user register. 
 * 
 */
async function storeNewUserData(id, email, firstName, lastName, username, dob, profile_picture) {
    const userData = {
        spotifyVerified: false,
        spotifyData: {},

        friends: [],
        chats: [],

        email: email,
        firstName: firstName,
        lastName: lastName,
        username: username,
        dob: dob,
        profile_picture: profile_picture ? profile_picture : "https://firebasestorage.googleapis.com/v0/b/cp-317.appspot.com/o/default_profile.jpg?alt=media&token=4ed26d80-388b-4814-95b3-01740138285a"
    };

    // Create a new user entry in the users collection.
    await db.collection("users")
        .doc(id).set(userData);

    // Add the new users username to the list of all usernames.
    const doc = await db.collection("search").doc("usernames").get();
    const usernames = doc.data();
    usernames[username] = id;

    await db.collection("search").doc("usernames").set(usernames);
}

/**
 * 
 * Takes a string and returns matching usernames.
 * TODO: try/catch
 * 
 * @param query The string query to search for.
 * 
 */
async function searchUsernames(query) {
    const doc = await db.collection("search").doc("usernames").get();
    const users = Object.entries(doc.data());
    const regex = new RegExp(query, "i");

    const result = [];

    users.forEach(async ([username, id]) => {
        if (regex.test(username)) {
            const doc = await db.collection("users").doc(id).get();
            const user = doc.data();
            const profile_picture = user.profile_picture;
            result.push({ username, id, profile_picture });

        }
    });

    return result;
}

/**
 * 
 * Logs out the current user.
 * TODO: try/catch
 * 
 */
async function logout() {
    try {
        await auth.signOut();

    } catch (err) {
        alert("Could not logout! Please try again later!");

    }
}

/**
 * 
 * Deletes the current user's account. 
 * TODO: try/catch
 * 
 */
async function deleteAccount() {
    const doc = await db.collection("users").doc(auth.currentUser.uid).get();
    const user = doc.data();
    const username = user.username;

    // Remove the user from the search list of usernames.
    const doc2 = await db.collection("search").doc("usernames").get();
    const usernames = doc2.data();
    delete usernames[username];
    await db.collection("search").doc("usernames").set(usernames);

    // Remove the user from the users collection.
    await db.collection("users").doc(auth.currentUser.uid).delete();

    // Remove the user's chat history.
    await auth.currentUser.delete();
    await auth.signOut();
}


/**
 * 
 * Allows the user to change their password.
 * TODO: try/catch
 * 
 */
async function changePass() {
    await firebase.auth().sendPasswordResetEmail(auth.currentUser.email);

}

/**
 *
 * Adds a new friend.
 * TODO: try/catch
 *
 * @oaran targetId The ID of the user to add as a friend.
 *
 */
async function addFriend(targetId) {
    // Adds current user to target friend.
    const targetDoc = await db.collection("users").doc(targetId).get();
    const targetData = targetDoc.data();
    targetData.friends.push(auth.currentUser.uid);
    await db.collection("users").doc(targetId).set(targetData);

    // Adds target friend to current user.
    const userDoc = await db.collection("users").doc(auth.currentUser.uid).get();
    const userData = userDoc.data();
    userData.friends.push(targetId);
    await db.collection("users").doc(auth.currentUser.uid).set(userData);
}

/**
 * 
 * Creates a new chat room.
 * TODO: try/catch
 * 
 * @oaran targetId The ID of the user to create a chat room with.
 * 
 */
async function createNewChatRoom(targetId) {

    // Create new chat room in "chats" collection
    const counter = await db.collection("chats").doc("counter").get();
    const newChatId = counter.counterField + 1;
    await db.collection("chats").doc(newChatId).set(
        {
            messages: [],
            source: auth.currentUser.uid,
            target: targetId
        }
    );

    // Update counter for the next new chat room.
    counter.counterField = newChatId;
    await db.collection("chats").doc("counter").set(counter);

    // add chat to current users chat array
    const userDoc = await db.collection("users").doc(auth.currentUser.uid).get();
    const userData = userDoc.data();
    userData.chats.push(newChatId);
    await db.collection("users").doc(auth.currentUser.uid).set(userData);

    // add chat to current user's chat array
    const targetDoc = await db.collection("users").doc(targetId).get();
    const targetData = targetDoc.data();
    targetData.chats.push(newChatId);
    await db.collection("users").doc(targetId).set(targetData);
}

/**
 * 
 * Adds a chat message to a chat room.
 * TODO: try/catch
 * 
 */
async function sendChat(message, chatId) {
    const chatData = {
        message: message,
        timestamp: new Date().toString(),
        sender: auth.currentUser.uid
    };

    const doc = await db.collection("chats").doc(chatId).get();
    const data = doc.data();
    data.messages.push(chatData);

    await db.collection("chats").doc(chatId).set(data);

}

/**
 * 
 * Changes the current users profile picture to whatever was uploaded.
 * 
 * TODO: try/catch
 * 
 */
async function updateProfilePicture(file) {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(auth.currentUser.uid + ".jpg");
    await fileRef.put(file);

    const user = await db.collection("users").doc(auth.currentUser.uid).get();
    const userData = user.data();
    userData.profile_picture = await fileRef.getDownloadURL();
    await db.collection("users").doc(auth.currentUser.uid).set(userData);
}

async function getProfilePicture() {
    const docRef = db.collection("users").doc(auth.currentUser.uid);
    const doc = await docRef.get();
    const profilePicture = doc.data().profile_picture;
    return profilePicture;

}

async function getUsername() {
    const docRef = db.collection("users").doc(auth.currentUser.uid);
    const doc = await docRef.get();
    const username = doc.data().username;
    return username;

}

export default {
    firebase, auth, db, storage,
    loginWithEmail, loginWithGoogle, registerWithEmail,
    logout, deleteAccount, changePass, updateProfilePicture,
    addFriend, createNewChatRoom, sendChat, searchUsernames, getProfilePicture, getUsername
};