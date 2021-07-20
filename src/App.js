import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Theme, PageRouter } from "@misc";

import { Firebase } from "@functions";

function App() {
    //logoutOnClose();

    return (
        <BrowserRouter>
            <Theme>
                <PageRouter />
            </Theme>
        </BrowserRouter>
    );
}

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
