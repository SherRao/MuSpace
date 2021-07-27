import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import { ProtectedRoute, UnprotectedRoute } from "@misc";
import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage, ProfilePage, VerifyEmailPage } from "@pages";

function PageRouter() {
    return (
        <Switch>
            <UnprotectedRoute path="/login" component={LoginPage} />
            <UnprotectedRoute path="/register" component={RegisterPage} />
            <Route path="/verify" component={VerifyEmailPage} />

            <ProtectedRoute exact={true} path="/" component={HomePage} />
            <ProtectedRoute path="/redirect" component={RedirectPage} />
            <ProtectedRoute path="/home"><Redirect to="/" /></ProtectedRoute>
            <ProtectedRoute path="/test" component={TestPage} /> 
            <Route path="/profile" component={ProfilePage} />

        </Switch>
    );
}

export default PageRouter;