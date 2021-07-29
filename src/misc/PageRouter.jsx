import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";

import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage, ProfilePage, VerifyEmailPage, MessagesPage, ErrorPage } from "@pages";
import { Firebase } from "@functions";

import { ProtectedRoute } from "@misc";
import { UnprotectedRoute } from "@misc";

function PageRouter() {
    const [user, setUser] = React.useState(null);
    Firebase.auth.onAuthStateChanged( (user) => {setUser(user);} );
    
    let isLoggedIn = user != null;
    let isVerified = isLoggedIn ? user.emailVerified : false;

    return (
        <Router>
            <Switch>
                <ProtectedRoute
                    exact path="/"
                    component={HomePage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <Route path="/home"><Redirect to="/" /></Route>


                <UnprotectedRoute
                    path="/login"
                    component={LoginPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <UnprotectedRoute
                    path="/register"
                    component={RegisterPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/profile"
                    component={ProfilePage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/messages"
                    component={MessagesPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <Route
                    path="/verify"
                    component={VerifyEmailPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <Route
                    path="/redirect"
                    component={RedirectPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <Route
                    path="/test"
                    component={TestPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <Route component = {ErrorPage}/>

            </Switch>
        </Router>
    );
}

export default PageRouter;