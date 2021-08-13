import SpotifyWebApi from "spotify-web-api-node";
import { Firebase } from "@functions";

async function startCompile() {
    const api = new SpotifyWebApi(
        {
            clientId: "1e4ee4e30b23405d8643d058642dffaf",
            clientSecret: "8ab0151237234a22877c4e644fa1b433",
            redirectUri: "https://muspace.me/spotify-redirect"
        }
    );

    const user = Firebase.auth.currentUser;
    const uid = user.uid;

    const usersRef = Firebase.db.collection("users");
    const userDoc = await usersRef.doc(uid).get();
    const userData = userDoc.data();

    api.setAccessToken(userData.spotifyData.access_token);

    const topSongs = await loadTopSongs(api);
    const topArtists = await loadTopArtists(api);

    const doc = await Firebase.db.collection("users").doc(uid).get();
    const data = doc.data();
    data.spotifyData.topSongs = topSongs;
    data.spotifyData.topArtists = topArtists;

    await Firebase.db.collection("users").doc(uid).set(data);
}

async function loadTopSongs(api) {
    const data = await api.getMyTopTracks();
    const songs = Object.values(data.body.items);

    const arr = [];
    for (let i = 0; i < Math.min(10, songs.length); i++) {
        const element = songs[i];
        const data = {};
        data.name = element.name;
        data.album = element.album.name;
        data.artist = element.artists[0].name;
        data.image = element.album.images[0].url;
        data.score = element.popularity;

        arr.push(data);
    }

    return arr;
}

async function loadTopArtists(api) {
    const data = await api.getMyTopArtists();
    const artists = Object.values(data.body.items);

    const arr = [];
    for (let i = 0; i < Math.min(10, artists.length); i++) {
        const element = artists[i];
        const data = {};
        data.name = element.name;
        data.image = element.images[0].url;
        data.score = element.popularity;

        arr.push(data);
    }

    return arr;
}

async function getTopSongs() {
    const doc = await Firebase.db.collection("users").doc(Firebase.auth.currentUser.uid).get();
    return doc.data().spotifyData.topSongs;

}

async function getTopArtists() {
    const doc = await Firebase.db.collection("users").doc(Firebase.auth.currentUser.uid).get();
    return doc.data().spotifyData.topArtists;

}

export default { startCompile, getTopSongs, getTopArtists };