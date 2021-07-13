import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

function get() {
    let result = axios.get("https://accounts.spotify.com/authorize",
        {
            client_id: "1e4ee4e30b23405d8643d058642dffaf",
            response_type: "token",
            redirect_uri: "https://muspace.me/spotify-callback",
            state: "NAUSHER_IS_COOL",
            scope: [
                "user-read-email", "user-read-private", "user-library-read", "user-follow-read", "playlist-read-private",
                "playlist-read-public", "user-read-playback-state", "user-read-currently-playing", "user-top-read",
                "user-read-playback-position", "user-read-recently-played", "ugc-image-upload"
            ],

            show_dialog: "false"
        }
    ).then(res => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log(res);
        return res;
    }

    ).catch(error => {
        console.error(error);
        return error;

    });

    return result;
}

async function getAlbumArtist() {
    const api = new SpotifyWebApi(
        {
            clientId: "1e4ee4e30b23405d8643d058642dffaf",
            clientSecret: "8ab0151237234a22877c4e644fa1b433",
            redirectUri: "https://muspace.me/spotify-callback",

        }
    );

    const response = await api.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10, offset: 20 });
    return response.body;

}




const ACCESS_URL = "https://accounts.spotify.com/authorize?client_id=1e4ee4e30b23405d8643d058642dffaf&response_type=token&redirect_uri=https://muspace.me/spotify-callback&state=123&scope=user-read-email user-read-private user-read-recently-played user-read-playback-state user-top-read user-read-currently-playing user-follow-read user-read-playback-position playlist-read-private user-library-read playlist-read-collaborative";