import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage, ProfilePage, VerifyEmailPage, VerifySpotifyPage, ResetPage ,SpotifyRedirectPage, MessagesPage, FriendsPage, SettingsPage, ErrorPage } from "@pages";
import { Spotify, Firebase } from "@functions";
import { ProtectedRoute, UnprotectedRoute } from "@misc";

function PageRouter() {
    const [user, loading, error] = useAuthState(Firebase.auth);

    const isLoggedIn = user != null;
    const isVerified = isLoggedIn ? user.emailVerified : false;
    const isSpotifyVerified = localStorage.getItem("spotifyUpdated");

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
                <p>Error while loading Firebase stuff: {error}</p>
            </div>
        );
    }


    return (
        <Router>
            <Switch>
                <ProtectedRoute
                    exact path="/"
                    component={HomePage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route path="/home">
                    <Redirect to="/" />
                </Route>

                <UnprotectedRoute
                    path="/login"
                    component={LoginPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <UnprotectedRoute
                    path="/register"
                    component={RegisterPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <ProtectedRoute
                    path="/profile"
                    component={ProfilePage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <ProtectedRoute
                    path="/messages"
                    component={MessagesPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}

                />

                <ProtectedRoute
                    path="/friends"
                    component={FriendsPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <ProtectedRoute
                    path="/settings"
                    component={SettingsPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route
                    path="/verify"
                    component={VerifyEmailPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route
                    path="/spotify-verify"
                    component={VerifySpotifyPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route
                    path="/spotify-redirect"
                    component={SpotifyRedirectPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route
                    path="/redirect"
                    component={RedirectPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route
                    path="/test"
                    component={TestPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <UnprotectedRoute
                    path="/reset"
                    component={ResetPage}
                    isLoggedIn={isLoggedIn}
                    isVerified={isVerified}
                    isSpotifyVerified={isSpotifyVerified}
                />

                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );
}

export default PageRouter;