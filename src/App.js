import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Theme, PageRouter } from "@misc";

import { Firebase } from "@functions";

function App() {
    resetCache();
    return (
        <BrowserRouter>
            <Theme>
                <PageRouter />
            </Theme>
        </BrowserRouter>
    );
}


function resetCache() {
    window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
        localStorage.setItem("spotifyUpdated", false);

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
