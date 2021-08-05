import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage, ProfilePage, VerifyEmailPage, MessagesPage, FriendsPage, SettingsPage, ErrorPage } from "@pages";
import { Firebase } from "@functions";

import { ProtectedRoute } from "@misc";
import { UnprotectedRoute } from "@misc";

function PageRouter() {
    const [user, loading, error] = useAuthState(Firebase.auth);
    let isLoggedIn = user != null;
    let isVerified = isLoggedIn ? user.emailVerified : false;

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <Router>
            <Switch>
                <ProtectedRoute
                    exact path="/"
                    component={HomePage}
                    isLoading={loading}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <Route path="/home">
                    <Redirect to="/" />
                </Route>

                <UnprotectedRoute
                    path="/login"
                    component={LoginPage}
                    isLoading={loading}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <UnprotectedRoute
                    path="/register"
                    component={RegisterPage}
                    isLoading={loading}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/profile"
                    component={ProfilePage}
                    isLoading={loading}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/messages"
                    component={MessagesPage}
                    isLoading={loading}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/friends"
                    component={FriendsPage}
                    isLoading={loading}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                />

                <ProtectedRoute
                    path="/settings"
                    component={SettingsPage}
                    isLoading={loading}
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

                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );
}

export default PageRouter;