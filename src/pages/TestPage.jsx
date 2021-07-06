import React from "react";
import { TestOrganismComponent } from "@organisms";
import SpotifyWebApi from "spotify-web-api-node";

function TestPage() {
    let response;
    test().then(data => response = data);

    return (
        <div>
            <p>hey</p>
            {response}
            <TestOrganismComponent />

        </div>
    );
}

export default TestPage;

async function test() {
    const api = new SpotifyWebApi(  
    );

    console.log("Testing test()");
    const response = await api.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE");
    console.log(response.body);
    return response.body;

}
    