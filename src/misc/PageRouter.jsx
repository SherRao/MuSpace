import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage, ProfilePage, VerifyEmailPage, ErrorPage } from "@pages";
import { Firebase } from "@functions";

import { ProtectedRoute } from "@misc";
import { UnprotectedRoute } from "@misc";

function PageRouter() {
    let user = getUser();
    let isLoggedIn = true;//user !== null;
    let isVerified = true;//user != null ? user.emailVerified : false;

    return (
        <Router>
            <Switch>
                <ProtectedRoute
                    path="/home"
                    component={HomePage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/Profile"
                    component={ProfilePage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <UnprotectedRoute
                    path="/login"
                    page={LoginPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

            </Switch>
        </Router>
    );
}

function getUser() {
    Firebase.auth.onAuthStateChanged((user) => {return user;});

}

export default PageRouter;