import SpotifyWebApi from "spotify-web-api-node";

async function getAlbumArtist() {
    const api = new SpotifyWebApi(
        {
            clientId: "1e4ee4e30b23405d8643d058642dffaf",
            clientSecret: "8ab0151237234a22877c4e644fa1b433",
            redirectUri: "https://muspace.me/spotify-callback"
        }
    );

    const response = await api.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10, offset: 20 });
    return response.body;

}

console.log(getAlbumArtist());