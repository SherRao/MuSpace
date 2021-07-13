import React from "react";
import Styled from "styled-components";
import axios from "axios";
import _ from "lodash";

function SpotifyRedirectPage({ expiryTime, history, location }) {
    try {
        if (_.isEmpty(location.hash)) 
            return history.push("/");
            
        const access_token = getParamValues(location.hash);
        const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      
        localStorage.setItem("params", JSON.stringify(access_token));
        localStorage.setItem("expiry_time", expiryTime);
        history.push("/");
   
    } catch (error) {
        history.push("/");
    
    }
  
    return (<div>{"hello how r u"}</div>);
}

function getParamValues(url) {
    return url.slice(1)
        .split("&")
        .reduce((prev, curr) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;
        
        }, {} );
}

function setAuthHeader() {
    try {
        const params = JSON.parse(localStorage.getItem("params"));
        if (params)
            axios.defaults.headers.common["Authorization"] = `Bearer ${params.access_token}`;
    
    } catch (error) {
        console.log("Error setting auth", error);
    }
}

export default SpotifyRedirectPage;

const scope = "user-read-email user-read-private user-library-read user-follow-read playlist-read-private playlist-read-public user-read-playback-state user-read-currently-playing user-top-read user-read-playback-position user-read-recently-played ugc-image-upload";