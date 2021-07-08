import SpotifyWebApi from "spotify-web-api-node";

const api = new SpotifyWebApi(
    {
        clientId: "1e4ee4e30b23405d8643d058642dffaf",
        clientSecret: "8ab0151237234a22877c4e644fa1b433",
        redirectUri: "https://muspace.me/spotify-callback"
    }
);

async function test() {
    console.log("Testing test()");
    const response = await api.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE");
    console.log(response.body);
    return response.body;

}

export default { test };