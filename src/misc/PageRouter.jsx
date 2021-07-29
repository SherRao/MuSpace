import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import { ProtectedRoute, UnprotectedRoute } from "@misc";
import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage, ProfilePage, VerifyEmailPage, MessagesPage } from "@pages";

function PageRouter() {
    return (
        <Switch>
            <UnprotectedRoute path="/login" component={LoginPage} />
            <UnprotectedRoute path="/register" component={RegisterPage} />
            <Route path="/verify" component={VerifyEmailPage} />
            <ProtectedRoute exact={true} path="/" component={HomePage} />
            <ProtectedRoute path="/redirect" component={RedirectPage} />
            <Route path="/home"><Redirect to="/" /></Route>
            <ProtectedRoute path="/test" component={TestPage} /> 
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <ProtectedRoute path="/messages" component={MessagesPage} />
        </Switch>
    );
}

export default PageRouter;