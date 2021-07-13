import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

const api = new SpotifyWebApi(
    {
        clientId: "1e4ee4e30b23405d8643d058642dffaf",
        clientSecret: "8ab0151237234a22877c4e644fa1b433",
        redirectUri: "https://muspace.me/spotify-callback"
    }
);

/**
 * 
 * Sets up the auth headers to send and receive shit from the Spotify Web SDK.
 * 
 */
function setAuthHeader() {
    try {
        const params = JSON.parse(localStorage.getItem("params"));
        if (params)
            axios.defaults.headers.common["Authorization"] = `Bearer ${params.access_token}`;

    } catch (error) {
        console.log("Error setting auth", error);
    }
}

/**
 * 
 * Returns something something chops up a url idk
 * 
 */
function getParamValues(url) {
    return url.slice(1)
        .split("&")
        .reduce((prev, curr) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;

        }, {});
}

export default { setAuthHeader, getParamValues };