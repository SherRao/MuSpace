import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import { ProtectedRoute } from "@misc";
import { TestPage, HomePage, LoginPage, RegisterPage, RedirectPage } from "@pages";

function PageRouter() {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/redirect" component={RedirectPage} />

            <Route path="/home"><Redirect to="/" /></Route>

            <ProtectedRoute exact={true} path="/" component={HomePage} />
            <ProtectedRoute path="/test" component={TestPage} /> 
        </Switch>
    );
}

export default PageRouter;