import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

const Center = Styled.div`
    width: 100%;
    min-height: 100vh;
    height: max-content;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: sticky;
    background-color: ${props => props.theme.colors.black};
`;

function UnprotectedRoute({ component, isLoggedIn, isVerified, isSpotifyVerified, ...rest }) {
    const Component = component;
    if (isLoggedIn && isVerified && isSpotifyVerified) {
        return (
            <Route {...rest}>
                <Redirect to="/home"/>
            </Route>
        );
            
    } else if(isLoggedIn && !isVerified) {
        return (
            <Route {...rest}>
                <Redirect to="/verify"/>
            </Route>
        );
        
    } else if(isLoggedIn && isVerified && !isSpotifyVerified) {
        return (
            <Route {...rest}>
                <Redirect to="/spotify-verify"/>
            </Route>
        );

    } else {
        return (
            <Route {...rest}>
                <Center>
                    <Component />
                </Center>
            </Route>
        );
    }
}

export default UnprotectedRoute;