import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

function UnprotectedRoute({ page, isLoggedIn, isVerified, ...rest }) {
    if (isLoggedIn && isVerified) {
        return (
            <Route {...rest}>
                <Redirect to="/home"/>
            </Route>
        );
            
    } else if(isLoggedIn) {
        return (
            <Route {...rest}>
                <Redirect to="/verify"/>
            </Route>
        );
        
    } else {
        return (
            <Route {...rest}>
                {page}
            </Route>
        );
    }

}

export default UnprotectedRoute;