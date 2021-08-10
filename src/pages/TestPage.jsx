import React, {useState, useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";


function TestPage1() {
    const [result, setResult] = useState("");

    useEffect(() => {
        if (!result) {
            getResult();
        }
        
    }, [] );

    const getResult = async () => {
        let result = await axios.get("https://accounts.spotify.com/authorize",
            {
                client_id: "1e4ee4e30b23405d8643d058642dffaf",
                response_type: "token",
                redirect_uri: "https://muspace.me/spotify-callback",
                state: "42069",
                scope: "uuser-read-email user-read-private user-read-recently-played user-read-playback-state user-top-read user-read-currently-playing user-follow-read user-read-playback-position playlist-read-private user-library-read playlist-read-collaborative",
                show_dialog: "false"
            });

        setResult(result);
    };
    
    return (
        <div>
            <p>{"hey"}</p>
            <p>{result}</p>
        </div>
    );
}


function TestPage() {
    const [result, setResult] = useState("");

    useEffect(() => {
        if (!result) 
            getResult();
        
    }, [] );

    const getResult = async () => {
        let result = await getAlbumArtist();
        setResult(result);
    };
    
    return (
        <div>
            <p>{"hey"}</p>
            <p>{result}</p>
            <p>{"heyx2"}</p>
        </div>
    );

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

export default TestPage;