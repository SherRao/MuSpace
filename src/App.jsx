import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Theme, PageRouter } from "@misc";

import { TextButton } from "@atoms";
import { Firebase } from "@functions";

function App() {
    //resetCache();
    return (
        <Theme>
            {/* <TextButton text="clear cache" type="text" onClick={cs} /> */}
            <PageRouter />
        </Theme >
    );
}


function cs() {
    localStorage.clear();
    alert("Done: ", localStorage.getItem("spotifyUpdated"));

}

function resetCache() {
    window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
    });
}

// eslint-disable-next-line no-unused-vars
function logoutOnClose() {
    window.addEventListener("beforeunload", (event) => {
        event.preventDefault();

        Firebase.auth.signOut()
            .catch((err) => {
                alert(err.message);

            });
    });
}

export default App;
