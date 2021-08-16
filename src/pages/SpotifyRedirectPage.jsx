import React from "react";
import queryString from "query-string";
import { Spotify, Firebase } from "@functions";

function SpotifyRedirectPage() {
    const data = queryString.parse(window.location.hash);
    React.useEffect(async () => {
        await storeSpotifyData(data);

    }, []);
    
    return null;
}

async function storeSpotifyData(data) {
    const access_token = data.access_token;
    const expiry = data.expires_in;
    const state = data.state;
    const type = data.token_type;

    const user = Firebase.auth.currentUser;
    const uid = user.uid;

    const usersRef = Firebase.db.collection("users");
    const userDoc = await usersRef.doc(uid).get();
    const userData = userDoc.data();
    userData.spotifyVerified = true;
    userData.spotifyData = {access_token, expiry, state, type};

    await usersRef.doc(uid).set(userData);
    await Spotify.startCompile();
}

export default SpotifyRedirectPage;