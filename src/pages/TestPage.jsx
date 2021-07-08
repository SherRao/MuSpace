import React, {useState, useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { ListeningActivityCard } from "@molecules";

function TestPage() {
    return (
        <div>
            <div width="400px">
                <ListeningActivityCard/>
                <ListeningActivityCard/>
                <ListeningActivityCard/>
            </div>
        </div>
    );
}


export default TestPage;

    