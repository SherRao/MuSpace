import { BrowserRouter } from "react-router-dom";
import { Theme, Router } from "@misc";

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <Router />
            </Theme>
        </BrowserRouter>
    );
}

export default App;
