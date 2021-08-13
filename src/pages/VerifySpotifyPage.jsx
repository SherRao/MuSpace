function VerifySpotifyPage() {
    window.location.href = ACCESS_URL;
    return null;
}

const ACCESS_URL = "https://accounts.spotify.com/authorize?client_id=1e4ee4e30b23405d8643d058642dffaf&response_type=token&redirect_uri=http://localhost:3000/spotify-redirect&state=123&scope=user-read-email user-read-private user-read-recently-played user-read-playback-state user-top-read user-read-currently-playing user-follow-read user-read-playback-position playlist-read-private user-library-read playlist-read-collaborative";

export default VerifySpotifyPage;