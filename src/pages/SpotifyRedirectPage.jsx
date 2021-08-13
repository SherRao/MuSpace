import React from "react";
import Styled from "styled-components";
import { Redirect } from "react-router-dom";

import queryString from "query-string";
import { Spotify, Firebase } from "@functions";

function SpotifyRedirectPage() {
    const data = queryString.parse(window.location.hash);
    localStorage.setItem("spotifyUpdated", false);
    
    React.useEffect(() => {
        storeSpotifyData();

    }, []);

    async function storeSpotifyData() {
        const token = data.access_token;
        const expiry = data.expires_in;
        const state = data.state;
        const type = data.token_type;

        const user = Firebase.auth.currentUser;
        const uid = user.uid;

        const usersRef = Firebase.db.collection("users");
        const userDoc = await usersRef.doc(uid).get();
        const userData = userDoc.data();
        userData.spotifyVerified = true;
        userData.spotifyData = {token, expiry, state, type};

        await usersRef.doc(uid).set(userData);
        localStorage.setItem("spotifyUpdated", true);

        await Spotify.startCompile();
        console.log("ok");
    }

    if(localStorage.getItem("spotifyUpdated"))
        return <Redirect to="/"/>;

    else 
        return (<div>Loading Spotify Data...</div>);
}

export default SpotifyRedirectPage;