import SpotifyWebApi from "spotify-web-api-node";
import { Firebase } from "@functions";

const api = new SpotifyWebApi(
    {
        clientId: "1e4ee4e30b23405d8643d058642dffaf",
        clientSecret: "8ab0151237234a22877c4e644fa1b433",
        redirectUri: "https://muspace.me/spotify-redirect"
    }
);

async function startCompile() {
    const user = Firebase.auth.currentUser;
    const uid = user.uid;

    const usersRef = Firebase.db.collection("users");
    const userDoc = await usersRef.doc(uid).get();
    const userData = userDoc.data();

    api.setAccessToken(userData.spotifyData.access_token);
    console.log(userData.spotifyData.access_token);
    const response = await getAlbumArtist();
    console.log(response);
}

async function getAlbumArtist() {
    const response = await api.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10, offset: 20 });
    return response.body;

}

export default { api, startCompile };