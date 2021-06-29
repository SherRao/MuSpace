import React from "react";
import { Route } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { Sidebar } from "@organisms";

import Firebase from "@functions";

const loggedIn = Firebase.isLoggedIn();

// eslint-disable-next-line no-unused-vars
function ProtectedRoute({ exact = false, path, component }) {
    if (loggedIn)
        return (
            <div>
                <Sidebar />
                <Route path={path} component={component} />
            </div>
        );

    else
        return <Redirect to="/login" />;

}

export default ProtectedRoute;