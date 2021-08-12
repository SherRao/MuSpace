import React from "react";
import Styled from "styled-components";
import queryString from "query-string";
import { Firebase } from "@functions";

// import axios from "axios";
// import _ from "lodash";

// function SpotifyRedirectPage({ expiryTime, history, location }) {
//     try {
//         if (_.isEmpty(location.hash)) 
//             return history.push("/");
            
//         const access_token = getParamValues(location.hash);
//         const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      
//         localStorage.setItem("params", JSON.stringify(access_token));
//         localStorage.setItem("expiry_time", expiryTime);
//         history.push("/");
   
//     } catch (error) {
//         history.push("/");
    
//     }
  
//     return (<div>{"hello how r u"}</div>);
// }

// function getParamValues(url) {
//     return url.slice(1)
//         .split("&")
//         .reduce((prev, curr) => {
//             const [title, value] = curr.split("=");
//             prev[title] = value;
//             return prev;
        
//         }, {} );
// }

// function setAuthHeader() {
//     try {
//         const params = JSON.parse(localStorage.getItem("params"));
//         if (params)
//             axios.defaults.headers.common["Authorization"] = `Bearer ${params.access_token}`;
    
//     } catch (error) {
//         console.log("Error setting auth", error);
//     }
// }

function SpotifyRedirectPage() {

    React.useEffect(() => {
        storeSpotifyData();


    }, []);

    async function storeSpotifyData() {
        // mark the user as spotify verified in the db.
        const data = queryString.parse(window.location.search);
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
        userData.spotifyData = {
            access_token,
            expiry,
            state,
            type
        };

        await userDoc.set(userData);
    }

    
    // store the access token in the db.

    // compile spotify data

    return (<div>Loading Spotify Data...</div>);
}

export default SpotifyRedirectPage;