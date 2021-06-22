import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Theme, PageRouter } from "@misc";

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <PageRouter />
            </Theme>
        </BrowserRouter>
    );
}

export default App;
